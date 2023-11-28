import { makeAutoObservable,observable,runInAction } from 'mobx';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { AppointmentType, AppointmentMap } from '../types/Appointments';
import { initializeApp } from "firebase/app";


class AppointmentStore {
    
  appointments = observable.map<string, AppointmentType>();

  getCurrentWeek() {
    const now = new Date();
    const weekDay = now.getDay();
    console.log(now);
    // Adjust so that week starts on Monday
    // If today is Sunday (0), set to -6; otherwise, subtract the weekday number
    const firstDayOfWeek = now.getDate() - weekDay;
    const lastDayOfWeek = firstDayOfWeek + 5;

    let start = new Date(now.getFullYear(), now.getMonth(), firstDayOfWeek);
    let end = new Date(now.getFullYear(), now.getMonth(), lastDayOfWeek);

    return { start: start, end: end };
}

  

  constructor() {
    makeAutoObservable(this);
    // this.fetchAppointments();
  }
  firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    databaseUrl: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  fetchAppointments() {
    const db = getDatabase();
    const appointmentsRef = ref(db, 'Appointments');
  
    onValue(appointmentsRef, (snapshot) => {
      const data = snapshot.val();
      runInAction(() => {
        Object.entries(data).forEach(([id, appointmentData]) => {
          this.appointments.set(id, observable(appointmentData as AppointmentType));
        });
      });
    });
  }

  updateAppointment(id: string, isConfirmed: boolean, isScheduled: boolean) {
    const appointment = this.appointments.get(id);
    if (appointment) {
      runInAction(() => {
        appointment.isConfirmed = isConfirmed;
        appointment.isScheduled = isScheduled;
      });
    }
    const db = getDatabase();
    const appointmentRef = ref(db, `Appointments/${id}`);
    update(appointmentRef, {
      isConfirmed: isConfirmed,
      isScheduled: isScheduled
    });
  }
}

const appointmentStore = new AppointmentStore();
export default appointmentStore;
