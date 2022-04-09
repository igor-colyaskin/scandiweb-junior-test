import styled from 'styled-components'

export const FrameImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: scale-down;
  cursor: ${props => props.frameCursorPointer ? 'pointer' : 'default'};
  &:hover {
    box-shadow: 0 0 16px lightgrey;
  }
`;
