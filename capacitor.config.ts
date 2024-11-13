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
