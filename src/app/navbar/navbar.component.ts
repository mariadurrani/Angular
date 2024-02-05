import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  isOwner = false;
  userType = 'user';

  constructor(
    private router: Router,
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.generalService.isOwner$.subscribe(isOwner => {
      this.isOwner = isOwner;
    });
  }

  userClick(userType: string) {
    this.generalService.setUserType(userType);

    if (userType === 'owner') {
      this.userType = 'owner';
    } else if (userType === 'user') {
      this.userType = 'user';
    }

    // console.log("user type", userType);
    // console.log("user type in local storage", localStorage.getItem('isOwner'));

    // // Navigate away and then back to the current route to trigger ngOnInit
    // this.router.navigate(['/main']);
  }

}
