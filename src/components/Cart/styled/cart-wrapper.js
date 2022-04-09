import styled, {css} from 'styled-components'

export const  CartWrapper = styled.div`
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
              position: relative;
              left: 1029px;
              top: 0;
              width: 325px;
              padding: 6px 16px 20px;
              margin-bottom: 12px;
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
