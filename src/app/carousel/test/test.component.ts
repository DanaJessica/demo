import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA } from 'src/app/data';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  carouselData = CAROUSEL_DATA;
  curIndex:number = 0

  constructor() { }

  ngOnInit(): void {
    this.autoPlay()
  }

  right(){
    const box = document.querySelector('ul') as unknown as HTMLParagraphElement;
    this.curIndex++;
    if(this.curIndex===this.carouselData.length-1){
      setTimeout(()=>{
        box.style.transition = 'none';
        this.curIndex = 0;
        box.style.left = `${- this.curIndex * 800}px`
      },1000)
    }
    box.style.transition = '1s ease'
    box.style.left = `${- this.curIndex * 800}px`
  }

  autoPlay(){
    setInterval(()=>{
      this.right()      
    },3000)
  }

  clickCarousel(){
    window.open(this.carouselData[this.curIndex].url)
  }
}

