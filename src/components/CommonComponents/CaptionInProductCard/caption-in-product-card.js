import styled, {css} from 'styled-components'

export const CaptionInProductCard = styled.div`
  display: flex;
  font-family: var(--caption-in-product-card-font);
  color: var(--dark-color-default-theme);
  text-decoration: none;
  text-transform: uppercase;
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
      case 'forProductCard':
        return css`
          font-weight: 700;
          font-size: 18px;
          line-height: 18px;
        `;
      case 'forBigCart':
        return css`
          font-weight: 700;
          font-size: 18px;
          line-height: 18px;
        `;
      case 'forMiniCart':
        return css`
          font-weight: 500;
          font-size: 13px;
          line-height: 14px;
        `;
      default:
        return css`
          font-weight: 500;
          font-size: 13px;
          line-height: 14px;
        `;
    }
  }}
`;
