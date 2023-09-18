import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  position: absolute;
  background-color: var(--white-color);
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const Item = styled.li`
  cursor: pointer;
`;

export const ItemLink = styled(NavLink)`
display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;

  border-bottom: 1px solid var(--button-disable);
  color: var(--divider-color);
  font-size: var(--body-caption-size);
  font-weight: var(--regular-weight);
  text-decoration:none;

  ${Item}:hover & {
    color: var(--accent-color);
    border-color: var(--button-hover); 
  }

  &.active{
    border-color:var(--button-hover); 
     color: var(--accent-color); 
  }


`;
