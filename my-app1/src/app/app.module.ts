import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { DisplayModuleComponent } from './display-module/display-module.component';

const route: Routes = [
{path: '', component: MainPageComponent},
{path: 'home', component: MainPageComponent},
{path: 'Page 1', component: HeaderBarComponent},
{path: 'Page 2', component: NavBarComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FooterBarComponent,
    HeaderBarComponent,
    MainPageComponent,
    NavBarComponent,
    DisplayModuleComponent,
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