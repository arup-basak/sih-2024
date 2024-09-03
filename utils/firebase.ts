import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const REACT_APP_API_KEY="AIzaSyATPqNQe5BZ5oGCuhF9vvpmnO3kABBckZ0"
const REACT_APP_AUTH_DOMAIN="cryspay-1f724.firebaseapp.com"
const REACT_APP_PROJECT_ID="cryspay-1f724"
const REACT_APP_STORAGE_BUCKET="cryspay-1f724.appspot.com"
const REACT_APP_MESSAGING_SENDER_ID="409576266381"
const REACT_APP_APP_ID="1:409576266381:web:9ac2332bce8367dedf60c4"
const REACT_APP_MEASUREMENT_ID="G-47LLWETF7X"

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
