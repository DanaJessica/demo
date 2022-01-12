import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA } from 'src/app/data';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  carouselData = CAROUSEL_DATA;
  curIndex: number = 0;
  timer: any = null;

  constructor() {}

  ngOnInit(): void {
    this.autoPlay();
    this.stopOrStart();
  }

  right() {
    const box = document.querySelector('ul') as unknown as HTMLParagraphElement;
    if (this.curIndex === this.carouselData.length - 1) {
      this.curIndex = 0;
      box.style.transition = 'none';
      box.style.left = `${-this.curIndex * 800}px`;
      setTimeout(() => {
        this.curIndex++;
        box.style.transition = '1s ease';
        box.style.left = `${-this.curIndex * 800}px`;
      });
    } else {
      this.curIndex++;
      box.style.transition = '1s ease';
      box.style.left = `${-this.curIndex * 800}px`;
    }
  }

  left() {
    const box = document.querySelector('ul') as unknown as HTMLParagraphElement;
    if (this.curIndex === 0) {
      this.curIndex = this.carouselData.length - 1;
      box.style.transition = 'none';
      box.style.left = `${-this.curIndex * 800}px`;
      setTimeout(() => {
        this.curIndex = this.carouselData.length - 2;
        box.style.transition = '1s ease';
        box.style.left = `${-this.curIndex * 800}px`;
      });
    } else {
      this.curIndex--;
      box.style.transition = '1s ease';
      box.style.left = `${-this.curIndex * 800}px`;
    }
  }

  autoPlay() {
    this.timer = setInterval(() => {
      this.right();
    }, 3000);
  }

  stopOrStart() {
    const box = document.querySelector('.carouselBox') as HTMLParagraphElement;
    box.onmouseenter = () => {
      clearInterval(this.timer);
    };
    box.onmouseleave = () => {
      this.autoPlay();
    };
  }

  clickCarousel() {
    window.open(this.carouselData[this.curIndex].url);
  }
}
