import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleRoutes } from '@app/user-module/routes';
import { EntryComponent } from '@app/user-module/pages/entry/entry.component';
import { HttpClientModule } from '@angular/common/http';

import { InlineSVGModule } from 'ng-inline-svg';

import { UserService } from '@app/user-module/services/user.service';

import { UserListComponent } from '@app/user-module/pages/user-list/user-list.component';
import { UserViewComponent } from '@app/user-module/pages/user-view/user-view.component';

@NgModule({
  imports: [
    CommonModule,
    UserModuleRoutes,
    HttpClientModule,
    InlineSVGModule.forRoot({ baseUrl: '/assets/svg/' }),
  ],
  declarations: [
    EntryComponent,
    UserListComponent,
    UserViewComponent,
  ],
  providers: [
    UserService,
  ]
})
export class UserModuleModule { }
