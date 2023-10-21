import { MenuItem, PrimeIcons } from 'primeng/api';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  sidebarVisibleLeft: boolean = false;
  contentItems: MenuItem[] | undefined;
  footerItems: MenuItem[] | undefined;

  ngOnInit(): void {
    this.contentItems = [
      {
        label: 'Bewertung',
        icon: 'fa-solid fa-square-poll-horizontal',
      },
      {
        label: 'User',
        icon: 'fa-regular fa-user',
      },
      {
        label: 'Teamleiter',
        icon: 'fa-solid fa-user-tie',
      },
    ];
    this.footerItems = [
      {
        label: 'Admin',
        icon: 'pi pi-cog',
      },
      {
        label: 'Ausloggen',
        icon: 'pi pi-sign-out',
      },
    ];
  }

  logout() {
    console.log('LogOut');
  }
}
