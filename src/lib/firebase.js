// Vendors
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/performance';

// Firebase configs
const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
  measurementId: `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`,
};

// Initialize Firebase
let firebasePerformance = '';
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // Performance
  firebasePerformance = firebase.performance();
  const trace = firebasePerformance.trace('app_start');
  trace.start();

  trace.putAttribute('experiment', '_app_start');

  trace.stop();
}

// Analytics
const firebaseAnalytics = firebase.analytics;

// Log Events
const firebaseEvent = (eventName) => firebase.analytics().logEvent(eventName);

export { firebase, firebaseAnalytics, firebasePerformance, firebaseEvent };
