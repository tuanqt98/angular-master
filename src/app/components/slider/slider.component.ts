import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  currenSliderIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currenSliderIndex = ++this.currenSliderIndex % this.items.length;
    }, 2000);
  }
}
