import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  constructor() {
  }

  @Input()
  photoURIs: string[];

  ngOnInit(): void {
  }

}
