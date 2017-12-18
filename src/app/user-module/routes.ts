import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryComponent } from '@app/user-module/pages/entry/entry.component';
import { UserListComponent } from '@app/user-module/pages/user-list/user-list.component';
import { UserViewComponent } from '@app/user-module/pages/user-view/user-view.component';

const Routes: Routes = [
  { path: '', component: EntryComponent },
  { path: ':id', component: EntryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class UserModuleRoutes{}
