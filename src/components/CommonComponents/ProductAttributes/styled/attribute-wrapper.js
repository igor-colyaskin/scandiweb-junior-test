import styled, {css} from 'styled-components'

export const  AttributeWrapper = styled.div`
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
              margin-bottom: 12px;
        `;
        case 'forBigCart':
            return css`
              flex-direction: column;
              width: 292px;
              margin-bottom: 12px;
        `;
        case 'forMiniCart':
            return css`
              flex-direction: column;
              width: 100%;
              margin-bottom: 6px;
        `;
        default:
            return css`
              flex-direction: column;
              width: 292px;
              margin-bottom: 12px;
        `;
    }
}}
`;
