import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  color: var(--accent-color);
  font-family: 'Alata', sans-serif;
  font-size: 24px;
  font-weight: 400px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    margin-right: auto;
  }
`;
