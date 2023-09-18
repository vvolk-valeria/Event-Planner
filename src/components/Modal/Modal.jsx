import React, { useEffect } from 'react';
import { List, Item, ItemLink } from './Modal.styled';
import { useLocation } from 'react-router-dom';

export function Modal({ items, onClose }) {
  const location = useLocation();

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

         return (<Item key={item.key}>
          <ItemLink to={`/events/filter/${item.href}`} 
          state={{ from: location }}
          onClick={onClose}
          >
            {item.value} {item.icon}
            </ItemLink>
            </Item>);
      })}
    </List>
  );
}
