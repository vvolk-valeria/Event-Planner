import styled from 'styled-components';
import { ReactComponent as Plus } from '../../images/icons/plus.svg';
import { ReactComponent as Sort } from '../../images/icons/sort.svg';
import { ReactComponent as SortHover } from '../../images/icons/sort_hover.svg';
import { ReactComponent as Category } from '../../images/icons/category.svg';
import { Link } from 'react-router-dom';


export const List = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 40px;
  z-index:5;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }

`;


export const Item = styled.li`
position:static;
  display: block;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  box-shadow: var(--border-shadow);
// z-index:5;

  :hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }

  :not(:last-child) {
    margin-right: 24px;
    background-color: var(--white-color);
  }

  :last-child {
    background-color: var(--button-default);

    :hover {
      background-color: var(--button-hover);
    }
  }

  @media screen and (min-width: 768px) {
    width: auto;
  height: auto;
  }
`;
export const ItemCategory = styled(Item)`
  position: relative;
  top: 0;
   left: 90px;
  width: auto;
  height: auto;

  @media screen and (min-width: 768px) {
    top: 0;
    left: 0;
  }
 
`;


export const ItemSort = styled(Item)`
  position: absolute;
  top: 0;
  right: 40px;
  width: auto;
  height: auto;
 // z-index:5;

 @media screen and (min-width: 768px) {
  position: relative;
    top: 0;
    right: 0;
  }
`;


export const Btn = styled.button`
  display: flex;
  justify-content: space-evenly;
  /* justify-content: center; */
  //align-items: center;
  padding: 16px;
  font-size: var(--title-size);
  font-weight: var(--medium-weight);
  color: var(--accent-color);
  background-color: var(--white-color);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  z-index:100;

 
  @media screen and (max-width: 767px) {
    width: 56px;
  height: 56px;
  }
  

  :hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }
`;


export const BtnMenu = styled(Btn)`
 
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius:0;
  border-bottom-right-radius:0;
  box-shadow: var(--border-shadow);
  width: auto;
  border-bottom: 1px solid var(--button-disable);


    width: 158px;

    @media screen and (min-width: 1280px) {
    width: 170px;
  }
 
 
`;

export const BtnMenuCategory = styled(BtnMenu)`
 flex-direction: row-reverse;

 @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;


export const BtnLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: transparent;
  font-size: var(--title-size);
  font-weight: var(--medium-weight);
  color: var(--white-color);
  text-decoration: none;
  border: none;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 16px;
    width: auto;
  height: auto;
  }
`;


export const PlusIcon = styled(Plus)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 16px;
  }
`;

export const SortIcon = styled(Sort)`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;

export const CategoryIcon = styled(Category)`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }

`;
export const SortIconHover = styled(SortHover)`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;

export const Span = styled.span`
display:none;
@media screen and (min-width: 768px) {
  display:block;
  }
`;