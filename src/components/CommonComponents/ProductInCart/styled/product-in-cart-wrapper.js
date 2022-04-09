import styled, {css} from 'styled-components'

export const  ProductInCartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forBigCart':
            return css`
              max-width: 1097px;
              border-top: 1px solid #E5E5E5;
              padding-bottom: 8px;
        `;
        case 'forMiniCart':
            return css`
              width: 293px;
              border-top: none;
              padding-bottom: 0;
        `;
        default:
            return css`
              max-width: 1097px;
              border-top: 1px solid #E5E5E5;
              padding-bottom: 8px;
        `;
    }
}}
`;
