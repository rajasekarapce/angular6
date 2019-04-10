import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { GameService } from './game.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './index/game/game.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes:Routes = [
  { 
    path: 'create', 
    component: CreateComponent 
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { 
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    GameComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
