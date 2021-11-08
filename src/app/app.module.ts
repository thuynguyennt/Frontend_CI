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
    HomeCoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
