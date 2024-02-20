import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'frontend',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    url:'http://10.23.0.217:3000',
    cleartext:true
  }
};

export default config;
