import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Modules',
      url: '/menu/main',
      icon: 'book'
    },
    {
      title: 'Settings',
      children: [ 
        {
          title: 'Theme',
          url: '/menu/settings',
          icon: 'color-palette'
        },
        {
          title: 'About',
          url: '/menu/about',
          icon: 'at-circle'
        }

      ]

    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
