import {
    Item,
    Btn,
    SortIcon,
    SortIconHover,
    BtnMenu,
    ItemSort,
  Span
  } from '../EventMenu/EventMenu.styled';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
// import {showCategory} from '../../helpers/helpers';

import { useLocation } from 'react-router-dom';
//import {categories} from '../../helpers/variables';

import { BsArrowUp, BsArrowDown } from 'react-icons/bs';


const filters = [
  { key: 1, value: 'by name', icon: <BsArrowUp size="16px" /> },
  { key: 2, value: 'by name', icon: <BsArrowDown size="16px" /> },
  { key: 3, value: 'by data', icon: <BsArrowUp size="16px" /> },
  { key: 4, value: 'by data', icon: <BsArrowDown size="16px" /> },
  { key: 5, value: 'by priority', icon: <BsArrowUp size="16px" /> },
  { key: 6, value: 'by priority', icon: <BsArrowDown size="16px" /> },
];



export const Sort = () => {

    let { pathname } = useLocation();
    let categoryHref = pathname.split('/').pop();

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    return (
<>

{!isOpen ? (
          <Item>
            <Btn onClick={toggleOpen}>
            <Span>Sort by </Span>  <SortIcon />
            </Btn>
          </Item>
        ) : (
          <ItemSort>
            <BtnMenu onClick={toggleOpen}>
              Sort by <SortIconHover />
            </BtnMenu>
            <Modal onClose={toggleOpen} items={filters} />
          </ItemSort>
        )}


</>
    )
};
