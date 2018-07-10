import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'Sarah Martin | Front-end Developer in Denver, Colorado' });
		this.meta.addTag({ name: 'author', content: 'Sarah Martin' });
		this.meta.addTag({ name: 'keywords', content: 'Denver, Colorado, front-end developer portfolio, UI developer portfolio, javascript developer, angular developer' });
		this.meta.addTag({ name: 'robots', content: 'index, follow' });
  }

  ngOnInit() {
  }

}
