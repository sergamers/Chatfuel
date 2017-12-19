import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public items: any = ['avatar_1.svg', 'avatar_2.svg', 'avatar_3.svg', 'avatar_4.svg', 'avatar_5.svg'];

  constructor() { }

  ngOnInit() {
  }

}
