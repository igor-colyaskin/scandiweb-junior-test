import styled, {css} from 'styled-components'

export const  ProductBrand = styled.div`
  text-decoration: none;
  box-sizing: border-box;
  ${(props) => {
    switch (props.view) {
        case 'forProductCard':
            return css`
              margin: -2px 0 0 0;
              font-size: 30px;
              font-weight: 600;
              line-height: 27px;
              width: 292px;
        `;
        case 'forMiniCart':
            return css`
              margin-right: 0;
              font-size: 16px;
              font-weight: 300;
              line-height: 26px;
              width: 100%;
        `;
        case 'forProductInCategory':
            return css`
              margin-right: 8px;
              font-size: 18px;
              font-weight: 300;
              line-height: 29px;
              width: auto;
        `;
        default:
            return css`
              margin-right: 0;
              font-size: 30px;
              font-weight: 600;
              line-height: 27px;
              width: 292px;
        `;
    }
}}
`;
