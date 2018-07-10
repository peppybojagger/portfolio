import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
	
  constructor(private router: Router, private titleService: Title) {}
	
	ngOnInit() {
    this.titleService.setTitle('Sarah Martin | Portfolio');
}
	
}
