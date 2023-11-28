import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import appointmentStore from '../stores/AppointmentStore';
import Appointment from './Appointment';
import { AppointmentType } from '../types/Appointments';

const Schedule: React.FC = observer(() => {
  // Helper function to format date to YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };
  const formatDateHeader = (date: Date): JSX.Element => {
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' }); // 'Mon', 'Tue', etc.
    const dayOfMonth = date.getDate();
    return (
      <>
        {dayOfWeek}<br />{dayOfMonth}
      </>
    );
  };
  

  // Function to get the current week range (Monday to Friday)
  const getCurrentWeekDays = (): Date[] => {
    const now = new Date();
    const first = now.getDate() - now.getDay() + 1; // Adjust so that week starts on Monday
    const days = [];
    for (let i = 0; i < 5; i++) { // 0 (Monday) to 4 (Friday)
      const day = new Date(now);
      day.setDate(first + i);
      days.push(day);
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
  }, [Array.from(appointmentStore.appointments.values())]); // Dependency on the values of appointments

  return (
    <div className="schedule">
      <table>
        <thead>
          <tr>
            <th>Time</th>
            {scheduleGrid.map(day => (
              <th key={day.date.toString()}>{formatDateHeader(day.date)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 15 }).map((_, hourIndex) => (
            <tr key={hourIndex}>
              <td>{`${7 + hourIndex}:00`}</td>
              {scheduleGrid.map(day => (
                <td key={day.date.toString() + hourIndex}>
                  <Appointment
                    id={`${formatDate(day.date)}_${7 + hourIndex}`}
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
