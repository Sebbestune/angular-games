import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TictactoeComponent } from './games/tictactoe/tictactoe.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';

const routes: Routes = [
  {  path: '', component: TictactoeComponent },
  { path: '**', component: NotfoundComponent, data: { message: 'This game seem to be not yet implemented...' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
