export class Project {
	public name: string;
	public description: string;
	public imageURL: string;
	public linkName: string;
	public cssClass: string;
	
	constructor( name: string, desc: string, imageURL: string, linkName:string, cssClass:string ) {
		this.name = name;
		this.description = desc;
		this.imageURL = imageURL;
		this.linkName = linkName;
		this.cssClass = cssClass;
	}
}
