'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { useContext } from 'react';
import { UserContext } from '@/context/user/UserContext';

const AdminAppointmentPage = () => {
  const { user } = useContext(UserContext);
  // console.log({ user });
  const events = [
    {
      title: 'cita con Dr. Smith',
      start: '2024-12-26T14:56:02.693Z',
      end: '2024-12-26T14:56:02.693Z',
    },
    {
      title: 'cita con Dr. Brown',
      start: '2024-12-21T14:00:00',
      end: '2024-12-21T15:00:00',
    },
    // Add more events here
  ];
  // console.log(new Date(1735224962693).toLocaleString());
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Calendario de citas</h1>
      <div className='bg-white shadow rounded-lg p-4'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          events={events}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          locale={esLocale}
          height='auto'
          viewClassNames='w-full bg-white shadow rounded-lg p-4'
          // themeSystem='United'
        />
      </div>
    </div>
  );
};

export default AdminAppointmentPage;
