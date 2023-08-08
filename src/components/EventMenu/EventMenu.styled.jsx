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

  @media screen and (min-width: 768px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(50%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const ListTablet = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 24px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(50%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const Item = styled.li`
  display: block;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  box-shadow: var(--border-shadow);

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
`;
export const ItemTablet = styled(Item)`
  position: relative;
  width: auto;
  height: auto;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
`;

export const BtnMenu = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
  font-size: var(--title-size);
  font-weight: var(--medium-weight);
  color: var(--accent-color);
  background-color: var(--white-color);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: none;
  cursor: pointer;
  z-index:100;

  @media screen and (max-width: 1280px) {
    width: 158px;
  }
  @media screen and (min-width: 1280px) {
    width: 170px;
  }
`;

export const BtnMenuTablet = styled(BtnMenu)`
  border-radius: 8px;
  box-shadow: var(--border-shadow);
  :hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }
  width: auto;
`;

export const CategoryMenu = styled.li`
  position: relative;
  top: 0;
  left: 70px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const CategoryMenuSort = styled.div`
  position: absolute;
  top: 0;
  right: 80px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const BtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
`;

export const BtnLinkTablet = styled(BtnLink)`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: var(--title-size);
  font-weight: var(--medium-weight);
  color: var(--white-color);
  text-decoration: none;
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
  
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;

export const CategoryIcon = styled(Category)`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }

`;
export const SortIconHover = styled(SortHover)`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;
