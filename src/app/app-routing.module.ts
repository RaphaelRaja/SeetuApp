import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersroomComponent } from './playersroom/playersroom.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'playersroom', component: PlayersroomComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
