import styled, {css} from 'styled-components'

export const  PlusMinusBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: var(--dark-color-default-theme);
  text-decoration: none;
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forBigCart':
            return css`
              width: 45px;
              margin-right: 12px;
        `;
        case 'forMiniCart':
            return css`
              width: 24px;
              margin-right: 10px;
        `;
        default:
            return css`
              width: 46px;
              margin-right: 11px;
        `;
    }
}}
`;
