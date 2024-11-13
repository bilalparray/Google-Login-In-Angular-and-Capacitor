# SocialLogin

In Android MainActivity.java

```
package com.socialloginpuc.app;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(GoogleAuth.class);
  }
}

```

```
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.googleloginpoc.app',
  appName: 'social-login',
  webDir: 'dist/browser',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '1062490294243-06pj5bnamd140l3ji0vjaqmnen7p7hko.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
