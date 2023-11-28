import React, { useEffect } from 'react';
import appointmentStore from '../stores/AppointmentStore';
import { observer } from 'mobx-react-lite';
import { AppointmentType } from '../types/Appointments';

interface AppointmentProps {
  id: string;
  startTime: string;
  endTime: string;
  isConfirmed: boolean;
  isScheduled: boolean;
  weekDay?: string;
}

const Appointment: React.FC<{ appointment: AppointmentType; id:string}> = observer(({ appointment,id }) => {
  const { startTime, endTime, isConfirmed, isScheduled, weekDay } = appointment;
  const handleSchedule = () => {
    console.log('handleSchedule', id, isScheduled);
    // Call the store method to update the appointment
    appointmentStore.updateAppointment(id, isConfirmed, !isScheduled);
  };
  useEffect(() => {
    console.log('Appointment rendered ', id);
  } ,[]);

  return (
    <div className={`appointment ${isScheduled ? 'scheduled' : ''}`}>
      <div>Time: {startTime} - {endTime}</div>
      <div>Status: {isScheduled ? 'Scheduled' : 'Available'}</div>
      <button onClick={handleSchedule}>
        {isScheduled ? 'Cancel' : 'Schedule'}
      </button>
    </div>
  );
});

export default Appointment;
