import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  status = false;
  tab = 'home';

  navbartab = 'up';
  hometab = 'up';

  constructor(private nav: NavController, private platform: Platform) {

    //   var prevScrollpos = window.pageYOffset;
    //   window.onscroll = function() {
    //   var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("navbar").style.top = "0";
    //   } else {
    //     document.getElementById("navbar").style.top = "-50px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }
  }

  ngAfterViewInit() {}

  ngOnInit() {
    // window.onscroll = this.detectScroll;

  }

  // detectScroll(){

  //   if (document.documentElement.scrollTop > 500) {
  //     console.log("takesadsadasfdsfsadasdas")
  //     // document.getElementById("myImg").className = "slideUp";
  //   }
  // }


  selecttab(tab) {
    this.tab = tab
    if (tab == 'home') {
      this.scrollToHome()
      console.log('clicked');
    } else if (tab == 'services') {
      this.scrollToService()
      console.log('clicked');
    } else if (tab == 'about') {
      this.scrollToAbout()
    }
    else if (tab == 'team') {
      this.scrollToTeam()
    } else if (tab == 'work') {
      this.scrollToWork()
    }
    else if (tab == 'contact') {
      this.nav.navigateRoot(tab, { 'animationDirection': 'forward' });
    }
  }
  scrollToHome() {
    document.getElementById('home').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }
  scrollToService() {
    document.getElementById('services').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }
  scrollToAbout() {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }
  scrollToTeam() {
    document.getElementById('team').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }
  scrollToWork() {
    document.getElementById('work').scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }

  widther() {
    return this.platform.width();
  }

  // onScroll(event) {
  //   if (event.detail.deltaY > 0) {
  //     console.log('scrolling down...');
  //     this.navbartab = 'down';
  //     this.hometab = 'down';

  //   } else if (event.detail.deltaY < 0) {
  //     console.log('scrolling up...');
  //     this.navbartab = 'up';
  //     this.hometab = 'up';
  //   }

  //   event.detail.deltaY = event.detail.deltaY
  // }


  // onScroll(event) {

  //   const navbar = document.querySelector('.navbar')

  //   if (event.detail.deltaY > 90) {
  //     navbar.classList.toggle('active')
  //     console.log('scrolling down...');
  //   } else if (event.detail.deltaY < 0) {
  //     navbar.classList.toggle('inactive')
  //     console.log('scrolling up...');
  //   }
  // }

}
