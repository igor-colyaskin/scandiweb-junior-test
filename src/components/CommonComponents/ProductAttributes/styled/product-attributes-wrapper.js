import styled, {css} from 'styled-components'

export const  ProductAttributesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: var(--dark-color-default-theme);
  text-decoration: none;
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forProductCard':
            return css`
              flex-direction: column;
              width: 292px;
              margin-top: 44px;
        `;
        case 'forBigCart':
            return css`
              flex-direction: column;
              margin-top: 12px;
        `;
        case 'forMiniCart':
            return css`
              flex-direction: column;
              margin-top: 12px;
        `;
        default:
            return css`
              flex-direction: row;
              width: auto;
              margin-top: 16px;
        `;
    }
}}
`;
