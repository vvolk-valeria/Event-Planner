import {
  Container,
  Section,
  Title
} from '../Pages.styled';

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getEventById, putEditEvent } from "../../helpers/helpers";

import {EventForm} from '../../components/EventForm/EventForm';
import {LinkToBack} from '../../components/LinkToBack/LinkToBack';
const EventEditingPage = () => {

   const location = useLocation();


   const navigete = useNavigate();

   let pathname = location.pathname;
   let eventId = pathname.split('/')[2];

   const [event, setEvent] = useState(null);

   useEffect(() => {
    getEventById(eventId)
      .then(data => {
        setEvent(data);
      })
      .catch(error => {
        // toast.error(
        //   `Oops, something went wrong! Reload the page or try again later!`
        // );
        console.log('Error', error);
      });
    return;
  }, [eventId]);

  if (!event) {
    return;
  }


  const initialValues = {
    title: event.title,
    description: event.description,
    date: event.date,
    time: event.time,
    location: event.location,
    category: event.category,
 imageURL: '',
    priority: event.priority,
  };

  const handleEditEvent = newData => {
    const editEvent = {
      title: newData.title,
      description: newData.description,
      date: newData.date,
      time: newData.time,
      location: newData.location,
      category: newData.category,
      priority: newData.priority,
  //  imageURL: newData.imageURL,
   imageURL: event.imageURL,
    };

    putEditEvent(eventId, editEvent);
    navigete(`/events/${eventId}`);
    return;
  };


  return (
    <Section>
      <Container>

      <LinkToBack/>

        <Title>Edit event</Title>

        <EventForm initialValues={initialValues} onSubmit={handleEditEvent}/> 

      </Container>
    </Section>
  );
};

export default EventEditingPage;
