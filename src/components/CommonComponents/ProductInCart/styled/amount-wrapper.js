import styled, {css} from 'styled-components'

export const AmountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: none;
  font-family: var(--price-regular-font);
  color: var(--dark-color-default-theme);
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
      case 'forBigCart':
        return css`
          height: 69px;
          width: 45px;
          font-size: 18px;
          font-weight: 500;
        `;
      case 'forMiniCart':
        return css`
          height: 64px;
          width: 24px;
          font-size: 16px;
          font-weight: 500;
        `;
      default:
        return css`
          height: 45px;
          width: 45px;
          font-size: 18px;
          font-weight: 500;
        `;
    }
  }}
`;
