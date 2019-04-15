/* módulos carregados nativamente pelo angular */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* módulos carregados nativamente pelo angular */
@NgModule({
  declarations: [
    /*AppCompone*/
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
