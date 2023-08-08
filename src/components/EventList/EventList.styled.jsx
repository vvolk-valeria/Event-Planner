import styled from 'styled-components';

export const Title = styled.h2`
  color: var(text-color);
  font-size: var(--header-size);
  font-weight: var(--semibold-weight);
  margin-bottom: 24px;

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

export const List = styled.ul`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 332px 332px;
  grid-gap: 24px;

  @media screen and (min-width: 1280px) {
    grid-template-columns: 280px 280px 280px 280px;
    grid-column-gap: 24px;
    grid-row-gap: 40px;
    margin-bottom: 32px;
  }
`;
