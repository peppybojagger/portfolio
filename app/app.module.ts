import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './header/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { RealtyCardsComponent } from './portfolio/project/realty-cards/realty-cards.component';
import { KyleWhitakerComponent } from './portfolio/project/kyle-whitaker/kyle-whitaker.component';
import { ValerieMooreComponent } from './portfolio/project/valerie-moore/valerie-moore.component';
import { BellaPranaComponent } from './portfolio/project/bella-prana/bella-prana.component';
import { RoosterTillComponent } from './portfolio/project/rooster-till/rooster-till.component';
import { KwCardsComponent } from './portfolio/project/kw-cards/kw-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    ProjectComponent,
    MainComponent,
    RealtyCardsComponent,
    KyleWhitakerComponent,
    ValerieMooreComponent,
    BellaPranaComponent,
    RoosterTillComponent,
    KwCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		AppRoutingModule,
		BrowserAnimationsModule
  ],
  providers: [
		Title
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
