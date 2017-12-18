import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleRoutes } from '@app/user-module/routes';
import { EntryComponent } from '@app/user-module/pages/entry/entry.component';
import { UserListComponent } from '@app/user-module/pages/user-list/user-list.component';
import { UserViewComponent } from '@app/user-module/pages/user-view/user-view.component';

@NgModule({
  imports: [
    CommonModule,
    UserModuleRoutes
  ],
  declarations: [
    EntryComponent,
    UserListComponent,
    UserViewComponent
  ]
})
export class UserModuleModule { }
