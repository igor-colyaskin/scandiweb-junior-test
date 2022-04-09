import styled, {css} from 'styled-components'

export const GalleryStrip = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  ${(props) => {
    switch (props.isVertical) {
        case true:
            return css`
          flex-direction: column;
          left: 0;
          top: -${props => props.shift || 0}px;
          width: ${props => props.frameWidth}px;
          height: ${props => (props.frameHeight + props.gap) * props.frameNumber}px;
        `;
        case false:
            return css`
          flex-direction: row;
          top: 0;
          left: -${props => props.shift || 0}px;
          height: ${props => props.frameHeight}px;
          width: ${props => (props.frameWidth + props.gap) * props.frameNumber}px;
        `;
        default:
            return css`
          flex-direction: row;
          top: 0;
          left: -${props => props.shift || 0}px;
          height: ${props => props.frameHeight}px;
          width: ${props => (props.frameWidth + props.gap) * props.frameNumber}px;
        `;
    }
}}
`;
