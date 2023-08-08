import styled from 'styled-components';
import { ReactComponent as Search } from '../../images/icons/search.svg';
import { ReactComponent as Cross } from '../../images/icons/cross.svg';

export const Form = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  padding: 12px 12px 12px 12px;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: var(--border-shadow);
  cursor: pointer;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 368px;
    margin-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 410px;
  }
`;

export const Btn = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
`;

export const BtnClear = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  margin-left: auto;
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
`;

export const CrossIcon = styled(Cross)`
  width: 8px;
  height: 8px;
`;

export const Input = styled.input`
  padding-left: 12px;
  max-width: 100%;
  border: none;
  outline-color: transparent;
  cursor: pointer;
  color: var(--accent-color);
  font-size: var(--body-caption-size);
  font-weight: var(--regular-weight);
`;
