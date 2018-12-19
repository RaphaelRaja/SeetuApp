import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersroomComponent } from './playersroom/playersroom.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcomepage', pathMatch: 'full' },
  { path: 'welcomepage', component: WelcomepageComponent },
  { path: 'playersroom', component: PlayersroomComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
