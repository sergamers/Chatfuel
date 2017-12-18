import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  /**
   * ID пользователя, которого будут редактировать
   */
  private userId: string;

  constructor(
     private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
  }
}
