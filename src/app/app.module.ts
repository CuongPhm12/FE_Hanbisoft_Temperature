import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {httpInterceptorProviders} from '../security/auth.interceptor';
import {MatDialogModule} from '@angular/material/dialog';
import {RegisterComponent} from './form-login/register/register.component';
import {LoginComponent} from './form-login/login/login.component';
import {UserAccountComponent} from './form-login/user-account/user-account.component';
import { ListTemperatureComponent } from './temperature-manager/list-temperature/list-temperature.component';
import { CreateTemperatureComponent } from './temperature-manager/create-temperature/create-temperature.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { UserProfileComponent } from './form-login/user-profile/user-profile.component';
import {MatSelectModule} from '@angular/material/select';
import { EditTemperatureComponent } from './temperature-manager/edit-temperature/edit-temperature.component';
import { DeleteTemperatureComponent } from './temperature-manager/delete-temperature/delete-temperature.component';




export const appRoutes: Routes = [
  // { path: '', component: HomeComponent, data: { title: 'Home' }},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
    {path: 'user-account', component: UserAccountComponent},
    {path: 'create-temp', component: CreateTemperatureComponent},
    {path: 'edit-temp/:id', component: EditTemperatureComponent},
    {path: 'list-temp', component: ListTemperatureComponent},
    {path: 'delete-temp', component: DeleteTemperatureComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  }
];


@NgModule({
  declarations: [AppComponent, GettingStartedComponent, LoginComponent, RegisterComponent, UserAccountComponent, ListTemperatureComponent, CreateTemperatureComponent, UserProfileComponent, EditTemperatureComponent, DeleteTemperatureComponent],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatButtonModule,
        BrowserAnimationsModule,
        NavBarModule, FooterModule,
        MatInputModule,
        NgxAudioPlayerModule,
        RouterModule.forRoot(appRoutes, {useHash: false}),
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule, MatOptionModule, MatSelectModule,
    ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

}
