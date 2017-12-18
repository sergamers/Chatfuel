import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppModuleRoutes } from '@app/routes';
import { AppComponent } from '@app/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppModuleRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
