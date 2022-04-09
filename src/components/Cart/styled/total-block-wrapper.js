import styled, {css} from 'styled-components'

export const  TotalBlockWrapper = styled.div`
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forBigCart':
            return css`
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              width: 1097px;
              margin-top: 36px;
              background-color: var(--c-white);
        `;
        case 'forMiniCart':
            return css`
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              width: 293px;
              margin-top: 42px;
              background-color: var(--c-white);
        `;
        default:
            return css`
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              width: 1097px;
              margin-top: 36px;
              background-color: var(--c-white);
        `;
    }
}}
`;

export const  TotalBlockCaptionWrapper = styled.div`
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forBigCart':
            return css`
              font-family: var(--price-regular-font);
              font-weight: 700;
              font-size: 24px;
        `;
        case 'forMiniCart':
            return css`
              font-family: var(--amount-in-cart-font);
              font-weight: 500;
              font-size: 16px;
        `;
        default:
            return css`
              font-family: var(--amount-in-cart-font);
              font-weight: 500;
              font-size: 16px;
        `;
    }
}}
`;

export const  TotalBlockAmountWrapper = styled.div`
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forBigCart':
            return css`
              font-family: var(--price-regular-font);
              font-weight: 700;
              font-size: 24px;
        `;
        case 'forMiniCart':
            return css`
              font-family: var(--price-regular-font);
              font-weight: 700;
              font-size: 16px;
        `;
        default:
            return css`
              font-family: var(--amount-in-cart-font);
              font-weight: 500;
              font-size: 16px;
        `;
    }
}}
`;
