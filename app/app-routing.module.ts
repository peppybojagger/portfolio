import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { ContactComponent } from './contact/contact.component';
import { RealtyCardsComponent } from './portfolio/project/realty-cards/realty-cards.component';
import { KyleWhitakerComponent } from './portfolio/project/kyle-whitaker/kyle-whitaker.component';
import { ValerieMooreComponent } from './portfolio/project/valerie-moore/valerie-moore.component';
import { BellaPranaComponent } from './portfolio/project/bella-prana/bella-prana.component';
import { RoosterTillComponent } from './portfolio/project/rooster-till/rooster-till.component';
import { KwCardsComponent } from './portfolio/project/kw-cards/kw-cards.component';

const appRoutes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'portfolio', component: PortfolioComponent	},
	{ path: 'portfolio/project', component: ProjectComponent,
		children: [
			{ path: 'realty-cards', component: RealtyCardsComponent },
			{ path: 'kyle-whitaker', component: KyleWhitakerComponent },
			{ path: 'valerie-moore', component: ValerieMooreComponent },
			{ path: 'bella-prana', component: BellaPranaComponent },
			{ path: 'rooster-till', component: RoosterTillComponent },
			{ path: 'kw-cards', component: KwCardsComponent }
		]
	},
	{ path: 'contact', component: ContactComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	
}