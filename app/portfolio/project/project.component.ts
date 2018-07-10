import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
	providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
	projects: Project[];
	
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
		this.projects = this.projectService.getProjects();
  }

}
