import styled from 'styled-components';
import { ReactComponent as Down } from '../../images/icons/down.svg';

export const DownIcon = styled(Down)`
  width: 10px;
  height: 5px;
  margin-left: 4px;
`;

export const Header = styled.header`
position:relative;
  padding-top: 24px;
  padding-bottom: 20px;
  background-color: #fefcff;
  border-bottom: 1px solid var(--accent-color);

  @media screen and (min-width: 768px) {
    padding-top: 26px;
    padding-bottom: 18px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 22px;
    padding-bottom: 22px;
  }
`;

export const ContainerAppBar = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  box-shadow: var(--border-shadow);
  background-color: var(--white-color);
  position:absolute;
  top:15px;
right:20px;

  @media screen and (min-width: 768px) {
    position:relative;
top:0;
right:0;
  }

  :hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  }
`;
