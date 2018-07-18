import { Project } from './project.model';

export class ProjectService {
	private projects: Project[] = [
		new Project('Realty Cards', 'Full-service Realty Marketing Company', '/assets/realty-cards.png', 'realty-cards', 'realty'),
		new Project('Kyle Whitaker', 'Fort Worth, Texas Attorney', '/assets/kyle-whitaker.png', 'kyle-whitaker', 'kwhitaker'),
		new Project('The Law Offices of Valerie Moore', 'Kansas Lawyer', '/assets/vm.png', 'valerie-moore', 'valerie'),
		new Project('Bella Prana Yoga', 'Yoga Studio in Tampa, Florida', '/assets/bp.png', 'bella-prana', 'bella'),
		new Project('KW Cards', 'Sister-site of realty-cards.com', '/assets/kw.png', 'kw-cards', 'kw')
	];

	getProjects() {
		return this.projects.slice();
	}

}