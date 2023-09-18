import { List, Title } from './EventList.styled';

import { EventItem } from '../EventItem/EventItem';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectEvents } from '../../redux/selectors';
import { getEvents } from '../../redux/operations';
 import { useState } from 'react';

export const EventList = () => {
  let { pathname } = useLocation();
  let categoryHref = pathname.split('/').pop();

  const events = useSelector(selectEvents);
  const [filters, setFilters] = useState([]);

  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(getEvents());
    return;
  }, [dispatch]);
  

  useEffect(() => {
    if (categoryHref !== ''){
      const filters = events.filter(event=> event.category.toLowerCase() === categoryHref);
      setFilters(filters);
    }
    return;
  }, [categoryHref, events]);


  if (!events) {
    return;
  }

   
  return (
     <>
       <Title>My events</Title>

{(categoryHref !== '') ? (<>
  {filters.length === 0 && <h2>not found </h2>}
  <List>
    {filters.map(item => {
      return <EventItem key={item.id} item={item} />;
    })}
  </List></>
) : (<>
  {events.length === 0 && <h2>not found </h2>}
      <List>
        {events.map(item => {
          return <EventItem key={item.id} item={item} />;
        })}
      </List></>
)}

     </>
  );
};
