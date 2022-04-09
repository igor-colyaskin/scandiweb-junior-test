import styled, {css} from 'styled-components'

export const  ProductTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Raleway', sans-serif;
  margin-right: 2px;
  color: var(--dark-color-default-theme);
  text-decoration: none;
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forProductCard':
            return css`
              flex-direction: column;
              margin-top: 0;
              width: 292px;
        `;
        case 'forBigCart':
            return css`
              flex-direction: column;
              margin-top: 0;
              width: 292px;
        `;
        case 'forProductInCategory':
            return css`
              flex-direction: row;
              margin-top: 24px;
              width: auto;
        `;
        case 'forMiniCart':
            return css`
              flex-direction: column;
              margin-top: 0;
              width: 100%;
        `;
        default:
            return css`
              flex-direction: row;
              margin-top: 0;
              width: auto;
        `;
    }
}}
`;
