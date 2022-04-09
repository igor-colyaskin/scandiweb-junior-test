import styled, {css} from 'styled-components'

export const PlusMinusButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 1px solid var(--dark-color-default-theme);
  background-image: ${props => !props.isPlus
          ? `url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg enable-background='new 0 0 50 50' height='50px' id='Layer_1' version='1.1' viewBox='0 0 50 50' width='50px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Crect fill='none' height='50' width='50'/%3E%3Cline fill='none' stroke='%23000000' stroke-miterlimit='10' stroke-width='2' x1='9' x2='41' y1='25' y2='25'/%3E%3C/svg%3E")`
          : `url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg enable-background='new 0 0 50 50' height='50px' id='Layer_1' version='1.1' viewBox='0 0 50 50' width='50px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Crect fill='none' height='50' width='50'/%3E%3Cline fill='none' stroke='%23000000' stroke-miterlimit='10' stroke-width='2' x1='9' x2='41' y1='25' y2='25'/%3E%3Cline fill='none' stroke='%23000000' stroke-miterlimit='10' stroke-width='2' x1='25' x2='25' y1='9' y2='41'/%3E%3C/svg%3E")`};
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--c-white);
  color: var(--dark-color-default-theme);
  box-sizing: border-box;
  cursor: pointer;
  ${(props) => {
    switch (props.view) {
      case 'forBigCart':
        return css`
          height: 45px;
          width: 45px;
          background-size: 25px 25px;
        `;
      case 'forMiniCart':
        return css`
          height: 24px;
          width: 24px;
          background-size: 12px 12px;
        `;
      default:
        return css`
          height: 45px;
          width: 45px;
          background-size: 25px 25px;
        `;
    }
  }}
`;
