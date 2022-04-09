import styled, {css} from 'styled-components'

export const RightBlockWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
      case 'forBigCart':
        return css`
          justify-content: flex-start;
          margin-top: 20px;
        `;
      case 'forMiniCart':
        return css`
          justify-content: flex-end;
          width: 140px;
          margin-top: 25px;
        `;
      default:
        return css`
          justify-content: flex-start;
          margin-top: 20px;
        `;
    }
  }}
`;
