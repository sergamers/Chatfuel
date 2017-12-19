import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserListResponse, IUser } from '@app/user-module/user.interfaces';
import { UserService } from '@app/user-module/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /**
   * Список Контактов
   */
  public userList: IUser[] = [];

  /**
   * Предыдущая страница
   */
  public prev: string;

  /**
   * Следующая страница
   */
  public next: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Слушаем изменения дополнительных параметров
    this.route.queryParams.subscribe(({page}) => {
      page = !page ? 0 : +page;

      this.userService.getUserList(page).subscribe(this.prepareUserList.bind(this));
    });
  }

  /**
   * private prepareUserList - Заполняем данными наш компонент
   */
  private prepareUserList(response: IUserListResponse): void {
    this.userList = response.result;

    this.prev = response.previousPageUrl;

    this.next = response.nextPageUrl;
  }
}
