import styled, {css} from 'styled-components'

export const  ProductName = styled.div`
  box-sizing: border-box;
  ${(props) => {
      switch (props.view) {
          case 'forProductCard':
              return css`
                font-size: 30px;
                font-weight: 400;
                line-height: 27px;
                margin-top: 16px;
                width: 292px;
          `;
          case 'forBigCart':
              return css`
                font-size: 30px;
                font-weight: 400;
                line-height: 27px;
                margin-top: 16px;
                width: 292px;
          `;
          case 'forMiniCart':
              return css`
                font-size: 16px;
                font-weight: 300;
                line-height: 26px;
                margin-top: 0;
                width: 100%;
          `;
          case 'forProductInCategory':
              return css`
                font-size: 18px;
                font-weight: 300;
                line-height: 29px;
                margin-top: 0;
                width: auto;
          `;
          default:
              return css`
                font-size: 30px;
                font-weight: 600;
                line-height: 27px;
                margin-top: 16px;
                width: 292px;
          `;
      }
  }}
`;
