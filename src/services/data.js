export const homeSection1 = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  heading: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Learn More',
  imgStart: false,
  img: require('../assets/images/svg-1.svg'),
  primary: true,
  dark: true,
  darkText: false,
};

export const homeSection2 = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  heading: 'Login to your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: require('../assets/images/svg-2.svg'),
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
  link: 'about',
};

export const homeSection3 = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our team',
  heading: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: require('../assets/images/svg-3.svg'),
  alt: 'Paper',
  primary: false,
  dark: false,
  darkText: true,
  link: 'home',
};
