import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	projects: Project[] = [
		new Project('realty-cards.com', 'Full-service Realty Marketing Company', 'http://localhost:4200/assets/realty-cards.png', 'realty-cards', 'realty'),
		new Project('Kyle Whitaker', 'Fort Worth, Texas Attorney', 'http://localhost:4200/assets/kyle-whitaker.png', 'kyle-whitaker', 'kwhitaker'),
		new Project('The Law Offices of Valerie Moore', 'Kansas Lawyer', 'http://localhost:4200/assets/realty-cards.png', 'valerie-moore', 'valerie'),
		new Project('Bella Prana Yoga', 'Yoga Studio in Tampa, Florida', 'http://localhost:4200/assets/realty-cards.png', 'bella-prana', 'bella'),
		new Project('Rooster & The Till', 'Award-winning New American Restaurant', 'http://localhost:4200/assets/realty-cards.png', 'rooster-till', 'rooster'),
		new Project('KW Cards', 'Sister-site of realty-cards.com', 'http://localhost:4200/assets/realty-cards.png', 'kw-cards', 'kw')
	];
	
  constructor() { }

  ngOnInit() {
  }

}
