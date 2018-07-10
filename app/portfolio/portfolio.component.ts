import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.model';
import { ProjectService } from './project/project.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
	query,
	stagger
} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
	providers: [ProjectService],
	animations: [
		trigger('photoState', [
			state('out', style({
				display: 'inherit',
				transform: 'translateX(-700px)',
			})),
			state('in', style({
				display: 'none',
			})),
			transition('* => *', animate('500ms ease')),
		])
	]
})

export class PortfolioComponent implements OnInit {
	projects: Project[];
	
	out = true;

  get flyIn() {
    return this.out ? 'out' : 'in'
  }
	
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
		this.projects = this.projectService.getProjects();
  }

}
