import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
declare var google;
import { Router } from '@angular/router';

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

  reach = 1

  temp = [
    { name: 'Hello', age: 2, id: 1 },
    { name: 'World', age: 1, id: 2 }, 
    { name: 'Darkness', age: 1, id: 3 },
    { name: 'My', age: 1, id: 4 },
    { name: 'Old', age: 1, id: 5 },
    { name: 'Im', age: 1, id: 6 },
    { name: 'Friend', age: 1, id: 7 },
    { name: 'See you', age: 1, id: 8 },
  ]

  constructor(private nav: NavController, private platform: Platform, private router: Router) {

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

  ngOnInit() {

    const svgMarker = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "red",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 3,
      anchor: new google.maps.Point(15, 30),
    };


    // const label = {
    //   fillColor: "white"
    // }


    setTimeout(() => {
      let map = new google.maps.Map( document.getElementById("map") as HTMLElement,
      {
        zoom: 17,
        center: { lat: 3.045418667970349, lng: 101.62197141445108 },
      }
    );

    let marker = new google.maps.Marker({
      position: { lat: 3.045418667970349, lng: 101.62197141445108 },
      map: map,
      icon: svgMarker,
      // label: 'V Sing Malaysia'
    });
    }, 1000);

    this.temp.splice(2, 1)
    // console.log(this.temp.filter(a => a.name = ''));
    // console.log(this.temp);


    // this.temp.map(((), index) => ({  }))

    // console.log(this.temp.some((v) => v['age'] == null || v['age'] )) // true

    console.log(this.temp.find((v) => v['age'] == 1)) // 0


    // console.log(this.temp.map((v) => ({ name: v.name, age: v.age })))
    // console.log(this.temp.map((v) => ({ ...v })))
    // console.log(this.temp.map(({ name, age }) => ({ name: name, age: age })))
    // console.log(this.temp.map((v, i) => ({ name: v.name, age: v.age })))
    console.log(this.temp.map(({ name, age }, i) => ({ name: name, age: age })))




    // for(let k = 0; k < this.temp; k++)

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
      block: 'start',
      inline: 'nearest'
    });
  }
  scrollToService() {
    document.getElementById('services').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  scrollToAbout() {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  scrollToTeam() {
    document.getElementById('team').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  scrollToWork() {
    document.getElementById('work').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  widther() {
    return this.platform.width();
  }

  onScroll(event) {

    let scrollPoint = event.detail.scrollTop
    let first: any = document.getElementById('home').offsetHeight - this.platform.height() * 0.05

    if (scrollPoint == 0 && scrollPoint <= first / 20 * 6) {
      this.reach = 1
      this.tab = 'home'
      console.log(this.reach);

    } else if (scrollPoint >= first / 20 * 6 && scrollPoint <= first / 20 * 13) {
      this.reach = 1.5
      this.tab = 'home'
      console.log(this.reach);
    }
    else if (scrollPoint >= first / 20 * 13 && scrollPoint <= first / 20 * 17 ) {
      this.reach = 1.7
      this.tab = 'home'
      console.log(this.reach);
    }
    else if (scrollPoint >= first / 20 * 17 && scrollPoint <= first / 3 * 4) {
      this.reach = 2
      this.tab = 'about'
      console.log(this.reach);

    }
    else if (scrollPoint >= first / 3 * 4 && scrollPoint <= first / 3 * 4.5) {
      this.reach = 2.5
      this.tab = 'about'
      console.log(this.reach);

    } else if (scrollPoint >= first / 3 * 4.5 && scrollPoint <= first / 3 * 5.5) {
      this.reach = 2.7
      this.tab = 'services'
      console.log(this.reach);

    }else if (scrollPoint >= first / 3 * 5.5 && scrollPoint <= first / 3 * 7.2) {
      this.reach = 3
      this.tab = 'services'
      console.log(this.reach);

    } else if (scrollPoint >= first / 3 * 7.2 && scrollPoint <= first / 3 * 8.46) {
      this.reach = 4
      this.tab = 'work'
      console.log(this.reach);

    } else if (scrollPoint >= first / 3 * 8.46) {
      this.reach = 5
      this.tab = 'contact'
      console.log(this.reach);

    }



    // if (event.detail.deltaY > 0) {
    //   console.log('scrolling down...');
    //   // this.navbartab = 'down';
    //   // this.hometab = 'down';

    // }  else if (event.detail.deltaY < 0) {
    //   console.log('scrolling up...');
    //   // this.navbartab = 'up';
    //   // this.hometab = 'up';

    // }



    // if(event.detail.deltaY > 0 && event.detail.deltaY < 150){
    //   this.tab = 'home'
    //   console.log("home")
    // } else if(event.detail.deltaY > 150 && event.detail.deltaY < 270){
    //   this.tab = 'about'
    //   console.log("about")
    // } else if(event.detail.deltaY > 270 && event.detail.deltaY < 350){
    //   this.tab = 'services'
    //   console.log("services")
    // } else if(event.detail.deltaY > 350){
    //   this.tab = 'work'
    //   console.log("work")
    // }

    // event.detail.deltaY += event.detail.deltaY

  }


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
