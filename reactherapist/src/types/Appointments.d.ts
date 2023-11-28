export interface AppointmentType {
    id: string;
    startTime: string;
    endTime: string;
    isConfirmed: boolean;
    isScheduled: boolean;
    weekDay?: string;
  }
  

export interface AppointmentMap {
    [key: string]: AppointmentType;
  }