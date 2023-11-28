// src/components/Home.tsx
import React from 'react';
import { useEffect } from 'react';
import '../styles/Appointments.css';
import appointmentStore from '../stores/AppointmentStore';
import { observer } from 'mobx-react-lite';
import Schedule from './Schedule';



const Appointments: React.FC = observer(() => {
  useEffect(() => {
    appointmentStore.fetchAppointments();
    console.log('Appointments rendered'); 
  }, []);
  return (
    <div className="appointment-feed">
      
      <section className="section">
        <h2>Agenda da Semana</h2>
        <section className="sub-section">
          {appointmentStore.appointments.size > 0 ? (
            <Schedule />
          ) : (
            <p>Loading...</p>
          )}
        </section>
       </section> 
    </div>
  );
})

export default Appointments;
