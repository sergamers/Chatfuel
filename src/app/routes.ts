import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


/**
 * Главные роуты на стронице (точки входа для дочерних модулей)
 */
const Routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', loadChildren: './user-module/user.module#UserModuleModule',  data: {preload: true} },
];


/**
 *  Настройка модулей по предззагрузки
 */
export class AppCustomPreloader implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : Observable.of(null);
  }
}

@NgModule({
  imports: [RouterModule.forRoot(Routes, {preloadingStrategy: AppCustomPreloader} )],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppModuleRoutes {}
