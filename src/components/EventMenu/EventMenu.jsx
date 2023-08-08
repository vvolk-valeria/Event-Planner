import {
  List,
  Item,
  Btn,
  BtnLink,
  PlusIcon,
  SortIcon,
  CategoryIcon,
  SortIconHover,
  BtnMenu,
  CategoryMenu,
  BtnMenuTablet,
  CategoryMenuSort,
  BtnLinkTablet,
  ListTablet,
  ItemTablet,
} from './EventMenu.styled';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';

const categories = [
  { key: 1, href: 'art', value: 'Art' },
  { key: 2, href: 'music', value: 'Music' },
  { key: 3, href: 'business', value: 'Business' },
  { key: 4, href: 'conference', value: 'Conference' },
  { key: 5, href: 'workshop', value: 'Workshop' },
  { key: 6, href: 'party', value: 'Party' },
  { key: 7, href: 'sport', value: 'Sport' },
];

const filters = [
  { key: 1, value: 'by name', icon: <BsArrowUp size="16px" /> },
  { key: 2, value: 'by name', icon: <BsArrowDown size="16px" /> },
  { key: 3, value: 'by data', icon: <BsArrowUp size="16px" /> },
  { key: 4, value: 'by data', icon: <BsArrowDown size="16px" /> },
  { key: 5, value: 'by priority', icon: <BsArrowUp size="16px" /> },
  { key: 6, value: 'by priority', icon: <BsArrowDown size="16px" /> },
];

export const EventMenu = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const toggleModal1 = () => {
    setShowModal1(!showModal1);
  };
  const toggleModal2 = () => {
    setShowModal2(!showModal2);
  };

  return (
    <>
      <ListTablet>
        {!showModal1 ? (
          <ItemTablet>
            <BtnMenuTablet onClick={toggleModal1}>
              Category <CategoryIcon />
            </BtnMenuTablet>
          </ItemTablet>
        ) : (
          <ItemTablet>
            <BtnMenu onClick={toggleModal1}>
              Category <CategoryIcon />
            </BtnMenu>
            <Modal onClose={toggleModal1} items={categories} />
          </ItemTablet>
        )}

        {!showModal2 ? (
          <ItemTablet>
            <BtnMenuTablet onClick={toggleModal2}>
              Sort by <SortIcon />
            </BtnMenuTablet>
          </ItemTablet>
        ) : (
          <ItemTablet>
            <BtnMenu onClick={toggleModal2}>
              Sort by <SortIconHover />
            </BtnMenu>
            <Modal onClose={toggleModal2} items={filters} />
          </ItemTablet>
        )}

        <ItemTablet>
          <BtnLinkTablet to={`/events/create`}>
            <PlusIcon /> Add new event
          </BtnLinkTablet>
        </ItemTablet>
      </ListTablet>

      <List>
        {!showModal1 ? (
          <Item>
            <Btn type="button" onClick={toggleModal1}>
              <CategoryIcon />
            </Btn>
          </Item>
        ) : (
          <CategoryMenu>
            <BtnMenu onClick={toggleModal1}>
              <CategoryIcon />
              Category
            </BtnMenu>
            <Modal onClose={toggleModal1} items={categories} />
          </CategoryMenu>
        )}

        {!showModal2 ? (
          <Item>
            <Btn type="button" onClick={toggleModal2}>
              <SortIcon />
            </Btn>
          </Item>
        ) : (
          <CategoryMenuSort>
            <BtnMenu onClick={toggleModal2}>
              Sort by <SortIconHover />
            </BtnMenu>
            <Modal onClose={toggleModal2} items={filters} />
          </CategoryMenuSort>
        )}

        <Item>
          <BtnLink to={`/events/create`}>
            <PlusIcon />
          </BtnLink>
        </Item>
      </List>
    </>
  );
};
