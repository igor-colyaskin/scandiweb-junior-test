import styled, {css} from 'styled-components'

export const  AttributeBodyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  color: var(--dark-color-default-theme);
  text-decoration: none;
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forProductCard':
            return css`
              flex-direction: row;
              width: 304px;
              margin-top: 7px;
        `;
        case 'forBigCart':
            return css`
              flex-direction: row;
              width: 304px;
              margin-top: 6px;
        `;
        case 'forMiniCart':
            return css`
              flex-direction: row;
              width: 100%;
              margin-top: 4px;
        `;
        default:
            return css`
              flex-direction: row;
              width: 304px;
              margin-top: 6px;
        `;
    }
}}
`;
