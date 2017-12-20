import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@app/user-module/services/user.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  /**
   * ID пользователя, которого будут редактировать
   */
  private userId: string;


  /**
   * Имя бота
   */
  public botName: string;


  /**
   * переменная input
   */
  public editBotName: string;

  /**
   * Состояие редактирования поля
   */
  public isEdit: boolean = false;

  constructor(
     private route: ActivatedRoute,
     private userService: UserService,
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;

    this.botName = this.userService.botName;
  }



  /**
   * Открываем форму редактирования имени бота
   */
  public openEditBotName(): void {
    this.isEdit = true;

    this.editBotName = this.botName;
  }


  /**
   * Обновляем имя бота. Поидее тут должен идти запрос на бэк.  
   */
  public updateBotName(): void {
    this.isEdit = false;

    this.botName = this.editBotName;
  }
}
