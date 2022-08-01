import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
// export class AppComponent implements AfterViewInit{


  // @ViewChild('home') homeElement: ElementRef;
  // @ViewChild('about') aboutElement: ElementRef;
  // @ViewChild('services') servicesElement: ElementRef;
  // @ViewChild('work') workElement: ElementRef;
  
  // public currentActive = 0;
  // public homeOffset: Number = null;
  // public aboutOffset: Number = null;
  // public servicesOffset: Number = null;
  // public workOffset: Number = null;

  // ngAfterViewInit() {
  //   this.homeOffset = this.homeElement.nativeElement.offsetTop;
  //   this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
  //   this.servicesOffset = this.servicesElement.nativeElement.offsetTop;
  //   this.workOffset = this.workElement.nativeElement.offsetTop;
  // }

  // @HostListener('window:scroll', ['$event'])
  // checkOffsetTop(){
  //   if (window.pageYOffset >= this.homeOffset && window.pageYOffset < this.aboutOffset) {
  //     this.currentActive = 1;
  //   } else if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.servicesOffset) {
  //     this.currentActive = 2;
  //   } else if (window.pageYOffset >= this.servicesOffset && window.pageYOffset < this.workOffset) {
  //     this.currentActive = 3;
  //   } else if (window.pageYOffset >= this.workOffset) {
  //     this.currentActive = 4;
  //   } else {
  //     this.currentActive = 0;
  //   }
  // }
  constructor() {}
}
