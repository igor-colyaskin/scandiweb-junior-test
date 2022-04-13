import styled, {css} from 'styled-components'

export const AttributeBodyItemWrapper = styled.div`

  font-family: Source Sans Pro, sans-serif;
  font-weight: 400;
  text-decoration: none;
  box-sizing: border-box;
  cursor: ${props => props.view === 'for-product-card' ? 'pointer' : 'default'};

  ${(props) => {
    if ((props.view === 'for-product-card' || props.view === 'for-big-cart') && props.attrType === 'swatch') {
      return css`
        font-size: 18px;
        height: 45px;
        width: 50px;
        margin-right: 10px;
        background-color: ${props.value};
        background-image: ${props.isSelected ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='229.196' height='229.196' viewBox='0 0 229.196 229.196'%3E%3Cg id='Tick-Icon-SVG-psokcd' transform='translate(-4097.992 -3416.812)'%3E%3Cpath id='Path_136721' data-name='Path 136721' d='M159.34,2.206H69.856C19.629,2.206,0,21.835,0,72.062v89.485C0,211.773,19.629,231.4,69.856,231.4H159.34c49.938,0,69.856-19.629,69.856-69.856V72.062c0-50.227-19.918-69.856-69.856-69.856' transform='translate(4097.992 3414.606)' fill='%2348c300'/%3E%3Cpath id='Path_136722' data-name='Path 136722' d='M42.034,101.743.178,59.6,14.9,44.877,42.034,72.011,111.89,2.444l14.722,14.722Z' transform='translate(4149.224 3483.097)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E%0A")` : 'none'};
        border: 1px solid ${props.isSelected ? 'var(--dark-color-default-theme)' : 'var(--grey-color-default-theme)'};
        background-repeat: no-repeat;
        background-size: 30% 30%;
        background-position: 92% 86%;

        &:hover {
          box-shadow: 0 0 8px silver;
        }
      `
    } else if ((props.view === 'for-product-card' || props.view === 'for-big-cart') && props.attrType !== 'swatch') {
      return css`
        font-size: 18px;
        height: 45px;
        width: 64px;
        margin-right: 12px;
        padding-top: 11px;
        text-align: center;
        border: 1px solid var(--dark-color-default-theme);
        background-image: ${props.isSelected ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='229.196' height='229.196' viewBox='0 0 229.196 229.196'%3E%3Cg id='Tick-Icon-SVG-psokcd' transform='translate(-4097.992 -3416.812)'%3E%3Cpath id='Path_136721' data-name='Path 136721' d='M159.34,2.206H69.856C19.629,2.206,0,21.835,0,72.062v89.485C0,211.773,19.629,231.4,69.856,231.4H159.34c49.938,0,69.856-19.629,69.856-69.856V72.062c0-50.227-19.918-69.856-69.856-69.856' transform='translate(4097.992 3414.606)' fill='%2348c300'/%3E%3Cpath id='Path_136722' data-name='Path 136722' d='M42.034,101.743.178,59.6,14.9,44.877,42.034,72.011,111.89,2.444l14.722,14.722Z' transform='translate(4149.224 3483.097)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E%0A")` : 'none'};
        background-repeat: no-repeat;
        background-size: 25% 25%;
        background-position: 100% 94%;
        background-color: white;
        color: var(--dark-color-default-theme);
      `
    } else if (props.view === 'for-mini-cart' && props.attrType === 'swatch') {
      return css`
        font-size: 18px;
        height: 24px;
        width: 24px;
        margin-right: 8px;
        background-color: ${props.value};
        background-image: ${props.isSelected ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='229.196' height='229.196' viewBox='0 0 229.196 229.196'%3E%3Cg id='Tick-Icon-SVG-psokcd' transform='translate(-4097.992 -3416.812)'%3E%3Cpath id='Path_136721' data-name='Path 136721' d='M159.34,2.206H69.856C19.629,2.206,0,21.835,0,72.062v89.485C0,211.773,19.629,231.4,69.856,231.4H159.34c49.938,0,69.856-19.629,69.856-69.856V72.062c0-50.227-19.918-69.856-69.856-69.856' transform='translate(4097.992 3414.606)' fill='%2348c300'/%3E%3Cpath id='Path_136722' data-name='Path 136722' d='M42.034,101.743.178,59.6,14.9,44.877,42.034,72.011,111.89,2.444l14.722,14.722Z' transform='translate(4149.224 3483.097)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E%0A")` : 'none'};
        border: 1px solid ${props.isSelected ? 'var(--dark-color-default-theme)' : 'var(--grey-color-default-theme)'};
        background-repeat: no-repeat;
        background-size: 30% 30%;
        background-position: 92% 86%;
      `
    } else if (props.view === 'for-mini-cart' && props.attrType !== 'swatch') {
      return css`
        font-size: 14px;
        height: 24px;
        width: 24px;
        margin-right: 8px;
        padding-top: 2px;
        text-align: center;
        border: 1px solid var(--dark-color-default-theme);
        background-color: ${props.isSelected ? 'white' : 'var(--light-grey-color-default-theme)'};
        border: 1px solid ${props.isSelected ? 'var(--dark-color-default-theme)' : 'var(--grey-color-default-theme)'};
        color: ${props.isSelected ? 'var(--dark-color-default-theme)' : 'var(--grey-color-default-theme)'};
      `
    } else {
      return css`
        height: 48px;
        width: 48px;
        margin-right: 6px;
      `
    }
  }}
  &:hover {
    box-shadow: ${props => props.view === 'for-product-card' ? '0 0 8px silver' : 'none'};
  }
`;

