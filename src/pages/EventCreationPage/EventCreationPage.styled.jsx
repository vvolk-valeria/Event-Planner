import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { ReactComponent as Cross } from '../../images/icons/cross.svg';

export const CrossIcon = styled(Cross)`
width:8px;
height: 8px;
  `;
  
  export const BtnClear = styled.button`
position:absolute;
top:40px;
right:10px;
  padding:0;
  width: 24px;
  height: 24px;
  background-color:transparent;
  border:none; 
    `;

export const FormContainer = styled(Form)`
  padding: 40px 16px;
  border-radius: 8px;
  box-shadow: var(--border-shadow);
  margin-bottom: 8px;
  background-color:var(--white-color);
  margin-left:auto;
  margin-right:auto;

  @media (min-width: 320px) and (max-width: 767px) {
 width:272px;

  }
  @media screen and (min-width: 768px) {
    padding-left:24px;
    padding-right:24px;
    margin-bottom:40px;

  }
`;

export const Label = styled.label`
 position:relative;
  display: flex;
  flex-direction: column;
  font-size: var(--title-size);
  font-weight: var(--regular-weight);
  color: var(--accent-color);
  margin-bottom: 20px;
`;
export const LabelPicture = styled.label`

  font-size: var(--title-size);
  font-weight: var(--regular-weight);
  color: var(--divider-color);

`;
export const LabelPictureField = styled.label`

  display:block;
  margin-top: 8px;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color);
  outline-color: var(--accent-color);
  font-size: var(--title-size);
  font-weight: var(--regular-weight);
  color: var(--divider-color);
  margin-bottom: 20px;

`;
export const InputPicture = styled(Field)`

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

`;

export const Input = styled(Field)`
  margin-top: 8px;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid var(--divider-color);
  outline-color: var(--accent-color);
  font-size: var(--title-size);
  font-weight: var(--regular-weight);
  color: var(--text-color);
  cursor: pointer;

  :valid{
    border: 1px solid var(--divider-color);
  }
  
:required:invalid{
    border: 1px solid var(--divider-color);
  }

:invalid{
    border: 1px solid var(--hight-color);
  }
`;

export const Btn = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  border: none;
  border-radius: 8px;
  font-size: var(--title-size);
  font-weight: var(--medium-weight);
  background-color: var(--button-default);
  color: var(--white-color);
  margin-top: 20px;
  width: 100%;
  cursor: pointer;

  :hover {
    background-color: var(--button-hover);
  }
  @media screen and (min-width: 768px) {
    display:block;
    width: auto;
    padding:16px 55px;
    margin-left:auto;
    z-index:1000;
    position: relative;
  }
`;

export const Option = styled.option`
  font-size: var(--title-size);
  font-weight: var(--regular-weight);
  color: var(--text-color);
`;

export const OptionHigh = styled.option`
  color: var(--hight-color);
`;
export const OptionMedium = styled.option`
  color: var(--medium-color);
`;
export const OptionLow = styled.option`
  color: var(--low-color);
`;

export const Error = styled(ErrorMessage)`
  margin-top: 4px;
  color: var(--hight-color);
  font-size: 12px;
  font-weight: var(--regular-weight);
  text-align: right;
`;


export const GridContainer = styled.div`

@media screen and (min-width: 768px) {
display: grid;
 grid-template-columns:308px 308px;
 grid-column-gap: 24px;
}

@media screen and (min-width: 1280px) {
 grid-template-columns:355px 355px 355px;
 grid-column-gap: 42px;
}
`;



export const LabelOne = styled(Label)`
@media screen and (min-width: 768px) {

}
  @media screen and (min-width: 1280px) {

}
`;
export const LabelTwo = styled(Label)`
@media screen and (min-width: 768px) {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
}
  @media screen and (min-width: 1280px) {

}
`;
export const LabelThree = styled(Label)`
@media screen and (min-width: 768px) {
  grid-column-start: 1;
  grid-column-end: 2;
}
  @media screen and (min-width: 1280px) {
    grid-column-start: 2;
    grid-row-start: 1;
}
`;
export const LabelFour = styled(Label)`
@media screen and (min-width: 768px) {
  grid-column-start: 1;
  grid-column-end: 2;
}
  @media screen and (min-width: 1280px) {
    grid-column-start: 2;
    grid-row-start: 2;
}
`;
export const LabelFive = styled(Label)`
@media screen and (min-width: 768px) {
  grid-column-start: 2;
  grid-row-start: 1;
}
  @media screen and (min-width: 1280px) {
    grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  position: relative;
 top:95px;
}
`;
export const LabelSix = styled(Label)`
@media screen and (min-width: 768px) {
  grid-column-start: 2;
  grid-row-start: 2;
}
  @media screen and (min-width: 1280px) {
  
}
`;
export const LabelSeven = styled.div`
@media screen and (min-width: 768px) {
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
  @media screen and (min-width: 1280px) {
    grid-column-start: 3;
  grid-row-start: 1;
}
`;
export const LabelEight = styled(Label)`
@media screen and (min-width: 768px) {
  grid-column-start: 2;
  grid-row-start: 3;
  
}
  @media screen and (min-width: 1280px) {
    grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  position: relative;
 top:95px;
}
`;

