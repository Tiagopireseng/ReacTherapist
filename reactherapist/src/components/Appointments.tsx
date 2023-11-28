// src/components/Home.tsx
import React from 'react';
import { useEffect } from 'react';
import '../styles/Appointments.css';
import appointmentStore from '../stores/AppointmentStore';
import { observer } from 'mobx-react-lite';



const Appointments: React.FC = observer(() => {
  useEffect(() => {
    appointmentStore.fetchAppointments();
  }, []);
  return (
    <div className="appointment-feed">
      
      <section className="section">
        <h2>Appointments</h2>
        <div>
          {appointmentStore.appointments ? JSON.stringify(appointmentStore.appointments) : 'Loading...'}
        </div>
        <p>Conhecer a si mesmo é o primeiro passo para a mudança.</p>
        <section className="sub-section">
          
          
        </section>
       </section> 
    </div>
  );
})

export default Appointments;
