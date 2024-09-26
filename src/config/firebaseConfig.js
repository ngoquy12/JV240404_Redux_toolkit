import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbW6GEutfRQqwpfXZKOx85h_fT0kOCaVw",
  authDomain: "upload-with-firebase-891c8.firebaseapp.com",
  projectId: "upload-with-firebase-891c8",
  storageBucket: "upload-with-firebase-891c8.appspot.com",
  messagingSenderId: "992699484916",
  appId: "1:992699484916:web:61db9e4e63b3037979aca1",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
