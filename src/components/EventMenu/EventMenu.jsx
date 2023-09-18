import {
  List,
  Item,
  BtnLink,
  PlusIcon,
Span
} from './EventMenu.styled';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';


import {Filter}from '../Filter/Filter';
import {Sort}from '../Filter/Sort';



export const EventMenu = () => {


  return (
    <>

      <List>

        <Filter/>

        <Sort/> 


        <Item>
          <BtnLink to={`/events/create`}>
            <PlusIcon /> 
            <Span>
              Add new event 
            </Span>
          </BtnLink>
        </Item>

      </List>
    </>
  );
};
