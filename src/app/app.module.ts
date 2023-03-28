import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TictactoeComponent } from './games/tictactoe/tictactoe.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    TictactoeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
