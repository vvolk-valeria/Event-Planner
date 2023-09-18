import {
  Container,
  Section,
  Title
} from '../Pages.styled';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEvent } from "../../redux/operations";
import { makeRandomNumber } from "../../helpers/helpers";

import {EventForm} from '../../components/EventForm/EventForm';
import {LinkToBack} from '../../components/LinkToBack/LinkToBack';

const EventCreationPage = () => {
  

   const navigete = useNavigate();
   const dispatch = useDispatch();

  const initialValues = {
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
imageURL: '',
    priority: '',
  };

const randomNumber= makeRandomNumber();

  const handleAddEvent = newData => {
    const newEvent = {
      title: newData.title,
      description: newData.description,
      date: newData.date,
      time: newData.time,
      location: newData.location,
      category: newData.category,
      priority: newData.priority,
  //  imageURL: newData.imageURL,
   imageURL: `https://raw.githubusercontent.com/vvolk-valeria/Event-Planner/main/src/images/eventPictures/event${randomNumber}.png`,
    };
   
    dispatch(addEvent(newEvent));
    navigete('/');
    return;
  };


  return (
    <Section>
      <Container>
     
        <LinkToBack/>

        <Title>Create new event</Title>

<EventForm initialValues={initialValues} onSubmit={handleAddEvent}/> 
        
      </Container>
    </Section>
  );
};

export default EventCreationPage;
