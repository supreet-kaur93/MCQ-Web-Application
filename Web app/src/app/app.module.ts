import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { DisplayModuleComponent } from './add-module/display-module/display-module.component';
//import { ModulesComponent } from './modules/modules.component';
//import { RequestBookComponent } from './request-book/request-book.component';
//import { AddBookComponent } from './add-book/add-book.component';
const route: Routes = [
  {path: '', component: AddModuleComponent},
{path: 'home', component: AddModuleComponent},
{path: 'Page 1', component: DisplayModuleComponent},
{path: 'Page 2', component: SignUpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    HeaderBarComponent,
    MainPageComponent,
    NavBarComponent,
    SignInComponent,
    SignUpComponent,
    AddModuleComponent,
    DisplayModuleComponent,
  //  ModulesComponent,
   // RequestBookComponent,
   // AddBookComponent
  ],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }