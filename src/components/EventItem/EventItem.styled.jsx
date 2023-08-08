import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--border-shadow);

  :not(:last-child) {
    margin-bottom: 24px;
    background-color: var(--white-color);
  }
`;

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 336px;
  object-fit: cover;
  overflow: hidden;
  background-color: rgb(182, 180, 180, 0.5);
  margin-right: auto;
  margin-left: auto;
  background-image: url('https://res.cloudinary.com/daud0cvhu/image/upload/v1679907667/placeholder.jpg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

// .img {
//   display: block;
//   width: 280px;
//   min-height: 288px;
//   object-fit: cover;
//   overflow: hidden;
// }

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

export const LocationBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: rgb(255, 255, 255, 0.8);
`;
export const Location = styled.p`
  font-size: var(--body-caption-size);
  font-weight: var(--regular-weight);
  color: var(--accent-color);
`;

export const Title = styled.h3`
  padding-bottom: 8px;
  font-size: var(--title-size);
  font-weight: var(--medium-weight);
`;

export const Text = styled.p`
  padding: 8px 0;
  font-size: var(--body-caption-size);
  font-weight: var(--regular-weight);
`;

export const Btn = styled(Link)`
  display: inline-block;
  padding: 10px 24px;
  margin-top: 8px;

  margin-left: auto;
  border: none;
  border-radius: 8px;
  background-color: var(--button-default);
  text-decoration: none;

  font-size: var(--body-caption-size);
  font-weight: var(--medium-weight);
  color: var(--white-color);

  :hover {
    background-color: var(--button-hover);
  }
`;
