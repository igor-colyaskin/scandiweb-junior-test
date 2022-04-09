import styled, {css} from 'styled-components'

export const GalleryFrame = styled.div`
  height: ${props => props.frameHeight}px;
  width: ${props => props.frameWidth}px;
  background-color: var(--light-grey-color-default-theme);
  border: ${props => !props.active ? 'none' : '1px solid red'};
  box-sizing: border-box;
  ${(props) => {
    switch (props.isVertical) {
        case true:
            return css`
          margin-bottom: ${props => props.gap}px;
          margin-right: 0;
        `;
        case false:
            return css`
          margin-right: ${props => props.gap}px;
          margin-bottom: 0;
        `;
        default:
            return css`
          margin-right: ${props => props.gap}px;
          margin-bottom: 0;
        `;
    }
}}
`;
