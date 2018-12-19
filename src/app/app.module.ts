import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PlayersroomComponent } from './playersroom/playersroom.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PlayersroomComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
