import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig:FirebaseOptions = {
    apiKey: import.meta.env.VITE_FIRE_BASE_API_KEY,
    authDomain: import.meta.env.VITE_FIRE_BASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIRE_BASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIRE_BASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIRE_BASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIRE_BASE_APP_ID,
    measurementId: import.meta.env.VITE_FIRE_BASE_MEASUREMENT_ID,
    databaseURL: import.meta.env.VITE_FIRE_BASE_DB_URL,
}


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);