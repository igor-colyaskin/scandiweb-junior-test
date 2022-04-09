import styled, {css} from 'styled-components'

export const  CartButtonBlockWrapper = styled.div`
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forBigCart':
            return css`
              min-height: 531px;
              max-width: 1098px;
              padding-bottom: 36px;
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
              min-height: 531px;
              max-width: 1098px;
              padding-bottom: 36px;
        `;
    }
}}
`;
