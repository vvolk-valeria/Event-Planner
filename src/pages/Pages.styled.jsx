import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../images/icons/arrow-left.svg';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 24px;
  padding-left: 24px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 40px;
    padding-left: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    /* padding-right: 80px;
      padding-left: 80px; */
      
    position:relative;

  }
`;

export const Section = styled.section`
  padding-top: 40px;
  //background-image:url(https://raw.githubusercontent.com/vvolk-valeria/Event-Planner/main/src/images/bg.png);
  @media screen and (min-width: 1280px) {
    padding-top: 60px;
  }
`;

export const LinkToBack = styled(Link)`
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

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: var(--semibold-weight);
  color: var(--text-color);

  @media screen and (min-width: 768px) {
    font-size: var(--header-size);
  }
`;

export const Category = styled.p`
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
  background-color: var(--white-color);
  color: var(--accent-color);

  :not(:last-child) {
    margin-right: 12px;
  }
`;

export const PriorityHigh = styled(Category)`
  color: var(--hight-color);
`;
export const PriorityMedium = styled(Category)`
  color: var(--medium-color);
`;
export const PriorityLow = styled(Category)`
  color: var(--low-color);
`;
