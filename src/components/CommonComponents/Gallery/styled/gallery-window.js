import styled from 'styled-components'

export const GalleryWindow = styled.div`
  position: relative;
  height: ${props => props.windowHeight}px;
  width: ${props => props.windowWidth}px;
  margin: ${props => props.margin};
  overflow: hidden;
  box-sizing: border-box;
`;
