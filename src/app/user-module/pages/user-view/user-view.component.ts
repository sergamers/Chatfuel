import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@app/user-module/services/user.service';
import { IUser } from '@app/user-module/user.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  /**
   * ID контакта
   */
  @Input() private id: string;

  public user: IUser;


  /**
   * Тригер для инпута
   */
  public isActiveInput: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // ищем пользователя
    this.userService.getUser(this.id)
      .subscribe((user: IUser) => {
        this.user = user;

        this.isActiveInput = user.name.length ? true : false;
      });
  }


  /**
   * public onSubmit - Отправка формы
   *
   * @param  {type} userForm Форма
   */
  public onSubmit(userForm): void{
    if(!userForm.valid){
      return
    }

    this.userService.updateUser(this.user).subscribe(() => {
      this.router.navigate(['/user']);
    });
  }

}
