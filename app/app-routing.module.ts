import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'portfolio', component: PortfolioComponent,
		children: [
     { path: 'project/:linkName', component: ProjectComponent }
  	],
	},
	{ path: 'contact', component: ContactComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	
}