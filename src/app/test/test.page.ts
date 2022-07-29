import { Component, OnInit } from '@angular/core';
declare var testing


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // window.addEventListener("scroll", this.reveal);
    testing
  }

  

}
