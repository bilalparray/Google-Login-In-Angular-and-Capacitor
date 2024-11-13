// home.component.ts
import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare let google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class HomeComponent implements OnInit {
  response: any;

  constructor(private router: Router, private ngZone: NgZone) {}

  async ngOnInit() {
    this.response = await JSON.parse(sessionStorage.getItem('session')!);
  }

  signout() {
    google.accounts.id.disableAutoSelect();
    sessionStorage.removeItem('session');
    this.ngZone.run(() => this.router.navigate(['/login']));
  }
}
