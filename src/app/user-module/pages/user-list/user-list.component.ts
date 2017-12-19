import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserListResponse, IUser } from '@app/user-module/user.interfaces';
import { UserService } from '@app/user-module/services/user.service';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/filter";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  /**
   * Список Контактов
   */
  public userList: IUser[] = [];


  /**
   *   Subject - поиск по имени
   */
  public searchKeyUp = new Subject();

  /**
   * Предыдущая страница
   */
  public prev: string;

  /**
   * Следующая страница
   */
  public next: string;


  /**
   * Массив подписок
   */
  private subscriptions: any[] = [];

  /**
   * Сколько символов нужно для активизации поиска контактов по имени
   */
  public activateSearchLength: number = 3;


  /**
   * Сохраняем значение списка пользователей (Нужно для автокомплита)
   */
  private cacheUserList: IUser[] = [];


  /**
   * идет ли поиск
   */
  public isSearch: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Слушаем изменения дополнительных параметров
    this.route.queryParams.subscribe(({page}) => {
      this.isSearch = true;

      page = !page ? 0 : +page;

      this.userService.getUserList(page).subscribe(this.prepareUserList.bind(this));
    });

    // Отслеживаем автокомплит в поиске контакта
    let SKeyUp = this.searchKeyUp
                  .debounceTime(500)
                  .filter((query: string) => {
                    if(query.length >= this.activateSearchLength){
                      return true;
                    }

                    // востанавливаем значение списка
                    this.userList = this.cacheUserList;

                    // Чистим кеш
                    this.cacheUserList = [];
                  })
                  .subscribe(this.searhUser.bind(this));

    this.subscriptions.push(SKeyUp);
  }

  ngOnDestroy(){
    // Отписываемся от подписок
    this.subscriptions.forEach(s => s.unsubscribe() );
  }

  /**
   * private prepareUserList - Заполняем данными наш компонент
   */
  private prepareUserList(response: IUserListResponse): void {
    this.userList = response.result;

    this.prev = response.previousPageUrl;

    this.next = response.nextPageUrl;

    this.isSearch = false;
  }


  /**
   * private searhUser - Поиск клиента по имени
   *
   * @param  {type} query Поисковая строка
   */
  private searhUser(query: string): void {
    this.isSearch = true;

    this.userService.autocompliteUser(query)
      .subscribe((users: IUser[]) => {
        // Нужно чтоб можно было встановить значение текущей страницы без запроса на бэк
        if (!this.cacheUserList.length) {
          this.cacheUserList = this.userList;
        }

        this.userList = users;

        this.isSearch = false;
      });
  }
}
