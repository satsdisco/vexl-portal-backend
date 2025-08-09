const config = {
  auth: {
    logo: '/uploads/vexl-logo.svg',
  },
  head: {
    favicon: '/uploads/vexl-favicon.png',
  },
  menu: {
    logo: '/uploads/vexl-logo.svg',
  },
  theme: {
    colors: {
      primary100: '#FCC5F3', // Vexl Pink light
      primary200: '#FCC5F3',
      primary500: '#FCCD6C', // Vexl Sandy
      primary600: '#FCCD6C',
      primary700: '#e6b854', // Darker Sandy
      
      success100: '#ACD9B7', // Vexl Mint light
      success200: '#ACD9B7',
      success500: '#ACD9B7', // Vexl Mint
      success600: '#9bc3a5',
      success700: '#8aad94',
      
      danger100: '#ff6b6b',
      danger500: '#ee5a24',
      danger600: '#d63031',
      danger700: '#c23616',
      
      neutral0: '#ffffff',
      neutral100: '#f6f6f9',
      neutral150: '#ededed',
      neutral200: '#dcdce4',
      neutral300: '#c0c0cf',
      neutral400: '#a5a5ba',
      neutral500: '#8e8ea9',
      neutral600: '#666687',
      neutral700: '#4a4a6a',
      neutral800: '#32324d',
      neutral900: '#212134',
      neutral1000: '#000000', // Vexl Black
      
      buttonPrimary500: '#FCCD6C', // Vexl Sandy
      buttonPrimary600: '#e6b854',
      
      buttonNeutral0: '#ffffff',
    },
  },
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'Vexl Content Portal',
      'app.components.LeftMenu.navbrand.workplace': 'Content Management',
      'Auth.form.welcome.title': 'Welcome to Vexl!',
      'Auth.form.welcome.subtitle': 'Log in to your Vexl Content Portal',
    },
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log('Vexl Content Portal is ready!');
};

export default {
  config,
  bootstrap,
};