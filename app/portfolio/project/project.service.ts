import { Project } from './project.model';

export class ProjectService {
	private projects: Project[] = [
		new Project('realty-cards.com', 'Full-service Realty Marketing Company', 'http://localhost:4200/assets/realty-cards.png', 'realty-cards', 'realty'),
		new Project('Kyle Whitaker', 'Fort Worth, Texas Attorney', 'http://localhost:4200/assets/kyle-whitaker.png', 'kyle-whitaker', 'kwhitaker'),
		new Project('The Law Offices of Valerie Moore', 'Kansas Lawyer', 'http://localhost:4200/assets/vm.png', 'valerie-moore', 'valerie'),
		new Project('Bella Prana Yoga', 'Yoga Studio in Tampa, Florida', 'http://localhost:4200/assets/bp.png', 'bella-prana', 'bella'),
		new Project('KW Cards', 'Sister-site of realty-cards.com', 'http://localhost:4200/assets/kw.png', 'kw-cards', 'kw')
	];

	getProjects() {
		return this.projects.slice();
	}

}