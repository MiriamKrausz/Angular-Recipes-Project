import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule,NgbCarouselModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  providers: [NgbCarouselConfig],
})
export class HomePageComponent {
  images = [1,2,3,4,10,11].map((n) => `../../../assets/images/food/${n}.jpg`);
  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 3000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
}
