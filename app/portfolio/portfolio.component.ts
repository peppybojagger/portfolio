import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	projects: Project[] = [
		new Project('realty-cards.com', 'Full-service Realty Marketing Company', 'http://localhost:4200/assets/realty-cards.png', 'RealtyCards'),
		new Project('Kyle Whitaker', 'Fort Worth, Texas Attorney', 'http://localhost:4200/assets/realty-cards.png', 'KyleWhitaker'),
		new Project('The Law Offices of Valerie Moore', 'Kansas Lawyer', 'http://localhost:4200/assets/sm.png', 'ValerieMoore'),
		new Project('Bella Prana Yoga', 'Yoga Studio in Tampa, Florida', 'http://localhost:4200/assets/sm.png', 'BellaPrana'),
		new Project('Rooster & The Till', 'Award-winning New American Restaurant', 'http://localhost:4200/assets/realty-cards.png', 'RoosterTill'),
		new Project('KW Cards', 'Sister-site of realty-cards.com', 'http://localhost:4200/assets/sm.png', 'KWCards')
	];
	
  constructor() { }

  ngOnInit() {
  }

}
