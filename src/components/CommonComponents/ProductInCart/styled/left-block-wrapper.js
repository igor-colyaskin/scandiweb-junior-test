import styled, {css} from 'styled-components'

export const  LeftBlockWrapper = styled.div`
  background-color: var(--c-white);
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forBigCart':
            return css`
              margin-top: 19px;
        `;
        case 'forMiniCart':
            return css`
              margin-top: 28px;
              width: 152px;
        `;
        default:
            return css`
              margin-top: 19px;
              background-color: black;
        `;
    }
}}
`;
