import {
  Container,
  LinkToBack,
  ArrowIcon,
} from '../Pages.styled';
import {
  Item,
  Cover,
  Text,
  Btn,
  InfoBox,
  Info,
  TitleItem,
  PriorityHigh,
  PriorityMedium,
  PriorityLow,
  InfoContainer,
  BtnBox,
  BtnItem,
  BoxItem,
  SectionEventPage,
  Img
} from './EventPage.styled';
//import { Box } from '../../helpers/Box';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteEvent } from '../../redux/operations';
import { getEventById, makeData } from '../../helpers/helpers';
import { useDispatch } from 'react-redux';

const EventPage = () => {
  const [event, setEvent] = useState(null);
  const dispatch = useDispatch();
  const navigete = useNavigate();

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  let { pathname } = useLocation();
  let eventId = pathname.split('/').pop();

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

  const removeEvent = () => {
    dispatch(deleteEvent(event.id));
    navigete('/');
  };

  const getColor = event => {
    switch (event.priority) {
      case 'High':
        return <PriorityHigh>{event.priority}</PriorityHigh>;
      case 'Medium':
        return <PriorityMedium>{event.priority}</PriorityMedium>;
      case 'Low':
        return <PriorityLow>{event.priority}</PriorityLow>;
      default:
        console.log('Invalid type');
        return <Info>No priority</Info>;
    }
  };

  const priorityMarkup = getColor(event);
  const formatDate = makeData(event);

  return (
    <SectionEventPage>
      <Container>
        <LinkToBack to={backLinkHref}>
          <ArrowIcon /> Back
        </LinkToBack>

        <BoxItem>
          <TitleItem>{event.title}</TitleItem>

          <Item>
            <Cover>
              {event.imageURL ? (
            <Img src={event.imageURL} alt="Event" />
          ) : null}
            </Cover>

            <InfoContainer>
              <Text> {event.description}</Text>

              <InfoBox>
                <Info>{event.category}</Info>

                {priorityMarkup}

                <Info>{event.location}</Info>

                <Info>
                  {formatDate} at {event.time}
                </Info>
              </InfoBox>

              <BtnBox>
                <BtnItem>
                  <Btn type="button">Edit</Btn>
                </BtnItem>
                <BtnItem>
                  <Btn type="button" onClick={removeEvent}>
                    Delete event
                  </Btn>
                </BtnItem>
              </BtnBox>
            </InfoContainer>
          </Item>
        </BoxItem>
      </Container>
    </SectionEventPage>
  );
};

export default EventPage;
