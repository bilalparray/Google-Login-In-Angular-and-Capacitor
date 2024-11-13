import { Component } from '@angular/core';

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
declare const google: any;
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      GoogleAuth.initialize({
        clientId:
          '1062490294243-lpeuoql2pgj2viq3bdq6qijrrc1h3edj.apps.googleusercontent.com',
        ///this is client id for web only and for android we need to create for android with fingerprint hashing and put in capacitor.config.js and also in strings.xml and also we need to configure MainActivity for googgle auth
      });
    });
  }

  async loginWithGoogle() {
    await GoogleAuth.signIn().then((data) => {
      alert(data.authentication.idToken);
      
    });
  }

  checkLoggedIn() {
    GoogleAuth.refresh()
      .then((data) => {
        if (data.accessToken) {
          alert(data.accessToken);
        } else alert('error');
      })
      .catch((error) => {
        if (error.type === 'userLoggedOut') {
          this.loginWithGoogle();
        }
      });
  }
}
