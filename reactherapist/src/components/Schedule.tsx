import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import appointmentStore from '../stores/AppointmentStore';
import Appointment from './Appointment';
import { AppointmentMap, AppointmentType } from '../types/Appointments';

const Schedule: React.FC = observer(() => {
  // Helper function to format date to YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // Function to get the current week range (Monday to Friday)
  const getCurrentWeekDays = (): Date[] => {
    const now = new Date();
    const first = now.getDate() - now.getDay() + 1; // First day is Monday
    const days = [];
    for (let i = 0; i < 5; i++) { // 0 (Monday) to 4 (Friday)
      days.push(new Date(now.setDate(first + i)));
    }
    return days;
  };

  // Memoize the computation of the schedule grid
  const scheduleGrid = useMemo(() => {
    console.log('Schedule rendered', appointmentStore.appointments);
    const days = getCurrentWeekDays();
    const hours = Array.from({ length: 15 }, (_, i) => 7 + i); // 7:00 to 21:00

    return days.map(day => ({
      date: day,
      appointments: hours.map(hour => {
        const appointmentKey = `${formatDate(day)}_${hour}`;
        return appointmentStore.appointments.get(appointmentKey) as AppointmentType;
      })
    }));
  },[appointmentStore.appointments]);


  return (
    <div className="schedule">
      <table>
        <thead>
          <tr>
            {scheduleGrid.map(day => (
              <th key={day.date.toString()}>{day.date.toLocaleDateString()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 15 }).map((_, hourIndex) => (
            <tr key={hourIndex}>
              {scheduleGrid.map(day => (
                <td key={day.date.toString() + hourIndex}>
                    <Appointment
                      id={formatDate(day.date) + '_' + (hourIndex + 7)}
                      appointment={day.appointments[hourIndex]}
                    />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default Schedule;
