import { Component, OnInit } from '@angular/core';
import { NavController, Platform, RouterCustomEvent } from '@ionic/angular';
import swal from 'sweetalert'; // not remember also nvm
declare var google;
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  navstatus = false;

  menu_item = document.querySelector('.nav_item');
  contacthomestatus = false;
  contactservicesstatus = false;
  contactaboutstatus = false;
  contactteamstatus = false;
  contactworkstatus = false;
  contactcontactstatus = false;
  tab = 'home';


  constructor(private nav: NavController, private platform: Platform, private router: Router) { }


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
    
  }


  callmenu() {
    if (this.navstatus == false) {
      this.navstatus = true
    }
    else if (this.navstatus == true) {
      this.navstatus = false;
    }
  }

  selecttab(tab) {
    this.tab = tab
    if (tab == 'home') {
      this.nav.navigateRoot(tab, { 'animationDirection': 'back' });
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

}

