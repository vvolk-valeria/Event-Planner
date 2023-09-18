import {
    Item,
    Btn,
    CategoryIcon,
    BtnMenuCategory,
    ItemCategory,Span
  } from '../EventMenu/EventMenu.styled';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import {showCategory} from '../../helpers/helpers';

import { useLocation } from 'react-router-dom';
import {categories} from '../../helpers/variables'



export const Filter = () => {

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
                <Span>{(categoryHref !== '') ? (showCategory(categoryHref)) : ('Category')}</Span>
              <CategoryIcon />
            </Btn>
          </Item>
        ) : (
          <ItemCategory>
            <BtnMenuCategory onClick={toggleOpen}>
            {(categoryHref !== '') ? (showCategory(categoryHref)) : ('Category')}
              <CategoryIcon />
            </BtnMenuCategory>
            <Modal onClose={toggleOpen} items={categories} />
          </ItemCategory>
        )}
</>
    )
};



