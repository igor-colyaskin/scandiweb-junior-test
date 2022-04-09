import styled, {css} from 'styled-components'

export const PriceUnitsWrapper = styled.div`
  position: relative;
  font-family: 'Raleway', sans-serif;
  color: var(--dark-color-default-theme);
  box-sizing: border-box;
  ${(props) => {
    if (props.view === 'forProductCard') {
      return css`
        height: 36px;
        font-size: 24px;
        font-weight: 700;
      `
    } else if (props.view === 'forBigCart') {
      return css`
        height: 36px;
        font-size: 24px;
        font-weight: 700;
      `
    } else if (props.view === 'forMiniCart') {
      return css`
        height: 24px;
        font-size: 16px;
        font-weight: 500;
      `
    } else if (props.view === 'forProductInCategory') {
      return css`
        top: 4px;
        left: 1px;
        height: 24px;
        font-size: 18px;
        font-weight: 500;
      `
    } else {
      return css`
        height: 25px;
        font-size: 18px;
        font-weight: 500;
      `
    }
  }}
`;

