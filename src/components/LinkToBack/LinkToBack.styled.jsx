import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../images/icons/arrow-left.svg';

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: var(--medium-weight);
  font-size: var(--body-caption-size);
  color: var(--button-default);
  margin-bottom: 24px;

  :hover {
    color: var(--button-hover);
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 17px;
  }
`;

export const ArrowIcon = styled(Arrow)`
  width: 16px;
  height: 12px;
  margin-right: 12px;
`;