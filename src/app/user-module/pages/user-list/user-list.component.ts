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
  public userList: IUser[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // Слушаем изменения дополнительных параметров
    this.route.queryParams.subscribe(({page}) => {
      this.userService.getUserList(page).subscribe(this.prepareUserList.bind(this));
    });
  }


  /**
   * private prepareUserList - Заполняем данными наш компонент
   */
  private prepareUserList(response: IUserListResponse): void {
    this.userList = response.result;
  }
}
