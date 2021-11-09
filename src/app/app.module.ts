import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { TeaComponent } from './home/tea/tea.component';
import { CoffeeComponent } from './home/coffee/coffee.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CardItemComponent } from './card/card-item/card-item.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DiscoverComponent } from './home/discover/discover.component';
import { HomeCoffeeComponent } from './home/home-coffee/home-coffee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './home/signin/signin.component';
import { LoginComponent } from './home/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ModalComponent } from './home/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    TeaComponent,
    CoffeeComponent,
    HeaderComponent,
    CardItemComponent,
    FooterComponent,
    DiscoverComponent,
    HomeCoffeeComponent,
    SigninComponent,
    LoginComponent
    // ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
