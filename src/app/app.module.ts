import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgOpenLigaDB } from 'ng-openligadb'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOpenLigaDB
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
