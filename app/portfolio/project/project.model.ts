export class Project {
	public name: string;
	public description: string;
	public imageURL: string;
	public linkName: string;
	
	constructor(name: string, desc: string, imageURL: string, linkName:string) {
		this.name = name;
		this.description = desc;
		this.imageURL = imageURL;
		this.linkName = linkName;
	}
}
