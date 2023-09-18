import styled from 'styled-components';
import {
  Section,
  Title
} from '../Pages.styled';
import { Link } from 'react-router-dom';

export const SectionEventPage = styled(Section)`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    padding-top: 18px;
  }
`;
export const BoxItem = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 320px) {
    width: 272px;
  }

  @media screen and (min-width: 768px) {
    width: 688px;
  }
  @media screen and (min-width: 1280px) {
    width: 628px;
  }
`;

export const Item = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--border-shadow);
  background-color: var(--white-color);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  @media screen and (min-width: 320px) {
    width: 272px;
  }

  @media screen and (min-width: 768px) {
    width: 688px;
  }
  @media screen and (min-width: 1280px) {
    width: 628px;
  }
`;

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
  height: 168px;
  object-fit: cover;
  overflow: hidden;
  background-color: grey;
  margin-right: auto;
  margin-left: auto;
  background-image: url('https://raw.githubusercontent.com/vvolk-valeria/Event-Planner/35890f4112496ddd5175982849ff6eb6b26d9b8b/src/images/placeholderHorizontal.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    height: 272px;
  }
`;

export const Img = styled.img`
display: block;
width: 100%;
 height: 168px;
   object-fit: cover;
   overflow: hidden;
   @media screen and (min-width: 768px) {
    height: 272px;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
  font-size: var(--body-caption-size);
  font-weight: var(--regular-weight);
  color: #49454f;

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

export const InfoContainer = styled.ul`
  padding: 24px 16px 40px 16px;

  @media screen and (min-width: 768px) {
    padding: 24px 24px 40px 24px;
  }

  @media screen and (min-width: 1280px) {
    padding: 20px 16px 40px 10px;
  }
`;

export const InfoBox = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 28px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const Info = styled.li`
  display: block;
  font-size: var(--body-caption-size);
  color: var(--accent-color);
  border-radius: 8px;
  font-weight: var(--medium-weight);
  background-color: var(--white-color);
  padding: 6px 12px 6px 12px;
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
  margin-bottom: 12px;

  :not(:last-child) {
    margin-right: 12px;
  }
  :last-child {
    font-weight: var(--regular-weight);
    padding: 4px 12px 4px 12px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const PriorityHigh = styled(Info)`
  color: var(--hight-color);
`;
export const PriorityMedium = styled(Info)`
  color: var(--medium-color);
`;

export const PriorityLow = styled(Info)`
  color: var(--low-color);
`;

export const BtnBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const BtnItem = styled.li`
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-right: 16px;
    }
  }
`;

export const Btn = styled.button`
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: var(--medium-weight);
  background-color: var(--white-color);
  color: var(--accent-color);
  border: 1px solid var(--button-default);
  width: 108px;

  // :last-child {
  //   background-color: var(--button-default);
  //   color: var(--white-color);
  //   border: 1px solid transparent;
  // }

  :hover {
    background-color: var(--button-hover);
    color: var(--white-color);
  }
`;

export const TitleItem = styled(Title)`
  @media screen and (min-width: 1280px) {
    margin-bottom: 14px;
  }
`;

export const LinkBtn = styled(Link)`
 text-decoration:none;
 display: inline-block;
 font-size: 12px;
 font-weight: var(--medium-weight);
//  background-color: var(--white-color);
 color: var(--accent-color);
//  border: 1px solid var(--button-default);
  width: 100%;

${Btn}:hover & {
  color: var(--white-color);
}
`;
