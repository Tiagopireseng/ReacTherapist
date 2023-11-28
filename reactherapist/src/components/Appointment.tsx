import React, { useEffect,useRef } from 'react';
import appointmentStore from '../stores/AppointmentStore';
import { observer } from 'mobx-react-lite';
import { AppointmentType } from '../types/Appointments';
import  '../styles/Appointment.css';

const Appointment: React.FC<{ appointment: AppointmentType; id: string }> = observer(({ appointment, id }) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const { startTime, endTime, isConfirmed, isScheduled, weekDay } = appointment;
  const appointmentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Type assertion to ensure event.target is treated as a Node
      const target = event.target as Node;
      if (appointmentRef.current && !appointmentRef.current.contains(target)) {
        setIsSelected(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [appointmentRef]);
  

  const handleSelect = () => {
    console.log('Appointment selected');
    setIsSelected(!isSelected);
  };

  const handleSchedule = () => {
    // Call the store method to update the appointment
    appointmentStore.updateAppointment(id, isConfirmed, !isScheduled);
  };

  return (
    <div 
      ref={appointmentRef}  
      className={`appointment ${isScheduled ? 'scheduled' : ''} ${isConfirmed ? 'confirmed' : ''}`}
      onClick={handleSelect}
    >
      {isSelected && (
        <>
          <button className="btn-appointment" onClick={handleSchedule}>
            {isScheduled ? 'Cancel' : 'Schedule'}
          </button>
        </>
      )}
    </div>
  );
});


export default Appointment;
