import React, { useEffect } from 'react';
import { List, Item } from './Modal.styled';
//import { NavLink } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';

export function Modal({ items, onClose }) {
 // const location = useLocation();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (

    <List>
      {items.map(item => {
        return (
          <Item key={item.key} onClick={onClose}>
            {item.value} {item.icon}{' '}
          </Item>
        );
        // return <Item key={item.key}><NavLink to={`/events/filter/${item.href}`} state={{ from: location }}>{item.value} {item.icon}</NavLink></Item>;
      })}
    </List>
  );
}
