import styled, {css} from 'styled-components'

export const  CartCaptionWrapper = styled.div`
  font-family: var(--price-regular-font);
  color: var(--dark-color-default-theme);
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forBigCart':
            return css`
              height: 179px;
              max-width: 1097px;
              font-size: 32px;
              font-weight: 700;
              padding-top: 81px;
        `;
        case 'forMiniCart':
            return css`
              font-size: 16px;
              padding: 5px 0 0 1px;
        `;
        default:
            return css`
              font-size: 16px;
              padding: 5px 0 0 1px;
        `;
    }
}}
`;
