import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'frontend',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    url:'255.255.248.0:3000',
    cleartext:true
  }
};

export default config;
