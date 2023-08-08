import {
  Item,
  Cover,
  Title,
  Text,
  Category,
  LocationBox,
  BoxCategory,
  Location,
  Btn,
  PriorityHigh,
  PriorityMedium,
  PriorityLow,
  Img
} from './EventItem.styled';
import { useLocation } from 'react-router-dom';
import { Box } from '../../helpers/Box';
import { makeData } from '../../helpers/helpers';

// import { toast } from 'react-toastify';

export const EventItem = ({ item }) => {
  const location = useLocation();

  const getColor = item => {
    switch (item.priority) {
      case 'High':
        return <PriorityHigh>{item.priority}</PriorityHigh>;
      case 'Medium':
        return <PriorityMedium>{item.priority}</PriorityMedium>;
      case 'Low':
        return <PriorityLow>{item.priority}</PriorityLow>;
      default:
        console.log('Invalid type');
        return <Category>No priority</Category>;
    }
  };
  const priorityMarkup = getColor(item);

  const formatDate = makeData(item);

  return (
    <>
      <Item>
        <Cover>
          {item.imageURL ? (
            <Img src={item.imageURL} alt="Event" />
          ) : (null)}

          <BoxCategory
          >
            <Category>{item.category}</Category>
            {priorityMarkup}
          </BoxCategory>

          <LocationBox>
            <Location>
              {formatDate} at {item.time}
            </Location>
            <Location>{item.location}</Location>
          </LocationBox>
        </Cover>

        <Box padding="16px">
          <Title>{item.title}</Title>

          <Text> {item.description}</Text>

          <Btn to={`/events/${item.id}`} state={{ from: location }}>
            More info
          </Btn>
        </Box>
      </Item>
    </>
  );
};
