import styled, {css} from 'styled-components'

export const ProductPriceWrapper = styled.div`
  box-sizing: border-box;
  ${(props) => {
    if (props.view === 'forProductCard') {
      return css`
        display: flex;
        flex-direction: column;
        width: 292px;
        margin-top: 10px;
      `
    } else if (props.view === 'forBigCart') {
      return css`
        display: block;
        width: 64px;
        margin-top: 18px;
      `
    } else if (props.view === 'forMiniCart') {
      return css`
        display: block;
        width: 64px;
        margin: 9px 0 0 1px;
        font-size: 16px;
      `
    } else if (props.view === 'forProductInCategory') {
      return css`
        display: block;
        width: 64px;
        margin-right: 12px;
      `
    } else {
      return css`
        height: 48px;
        width: 48px;
        margin-right: 6px;
      `
    }
  }}
`;

