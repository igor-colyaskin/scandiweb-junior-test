import styled from 'styled-components'

export const Pointer = styled.div`
  position: absolute;
  z-index: 10;
  box-sizing: border-box;
  cursor: pointer;
`;

export const PointerUp = styled(Pointer)`
  left: ${props => props.windowWidth / 4}px;
  top: 3px;
  height: ${props => props.windowWidth / 6}px;
  width: ${props => props.windowWidth / 2}px;
  background: transparent url("data:image/svg+xml,%0A%3Csvg 
  width='17px' 
  height='17px' 
  viewBox='0 -0.5 17 17' 
  version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' 
  class='si-glyph si-glyph-arrow-up'%3E%3Ctitle%3E1191%3C/title%3E%3Cdefs%3E%3C/defs%3E%3Cg 
  stroke='red' 
  stroke-width='1' 
  fill='none' 
  fill-rule='evenodd'%3E%3Cpath d='M15.812,9.896 C15.587,9.896 15.361,9.834 15.162,9.699 L8.932,5.543 L2.895,9.74 C2.354,10.099 1.625,9.953 1.266,9.412 C0.905,8.873 1.051,8.142 1.592,7.783 L8.28,3.152 C8.673,2.888 9.188,2.888 9.583,3.15 L16.464,7.74 C17.005,8.099 17.152,8.832 16.792,9.371 C16.564,9.713 16.191,9.896 15.812,9.896 L15.812,9.896 Z' 
  fill='white' 
  class='si-glyph-fill'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") no-repeat 50% 0;
  background-size: contain;
`;

export const PointerDown = styled(Pointer)`
  left: ${props => props.windowWidth / 4}px;
  bottom: 0;
  height: ${props => props.windowWidth / 6}px;
  width: ${props => props.windowWidth / 2}px;
  background: transparent url("data:image/svg+xml,%3Csvg 
  width='17px' 
  height='17px' 
  viewBox='0 0 17 17' 
  version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' 
  class='si-glyph si-glyph-arrow-down'%3E%3Ctitle%3E1190%3C/title%3E%3Cdefs%3E%3C/defs%3E%3Cg 
  stroke='red' 
  stroke-width='1' 
  fill='none' 
  fill-rule='evenodd'%3E%3Cpath d='M2.16,6.246 C2.385,6.246 2.61,6.308 2.81,6.442 L9.039,10.598 L15.076,6.401 C15.617,6.042 16.346,6.188 16.705,6.729 C17.065,7.268 16.92,8 16.38,8.359 L9.692,12.989 C9.298,13.253 8.784,13.254 8.388,12.991 L1.508,8.402 C0.966,8.042 0.82,7.31 1.179,6.77 C1.407,6.429 1.78,6.246 2.16,6.246 L2.16,6.246 Z' 
  fill='white'
  class='si-glyph-fill'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") no-repeat 50% 0;
  background-size: contain;
`;

export const PointerLeft = styled(Pointer)`
  left: 0;
  top: ${props => props.windowHeight / 4}px;
  height: ${props => props.windowHeight / 2}px;
  width: ${props => props.windowWidth / 6}px;
  background: transparent url("data:image/svg+xml,%3Csvg 
  width='17px' 
  height='17px' 
  viewBox='0 -0.5 17 17' 
  version='1.1' 
  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' 
  class='si-glyph si-glyph-arrow-left'%3E%3Ctitle%3E1225%3C/title%3E%3Cdefs%3E%3C/defs%3E%3Cg 
  stroke='grey' 
  stroke-width='.3' 
  fill='none' 
  fill-rule='evenodd'%3E%3Cpath 
  d='M10.978 1.162 C10.978 1.387 10.916 1.612 10.782 1.812 L6.626 8.041 L10.823 14.078 C11.182 14.619 11.036 15.348 10.495 15.707 C9.956 16.068 9.224 15.922 8.865 15.382 L4.235 8.694 C3.971 8.3 3.969 7.786 4.233 7.39 L8.822 0.51 C9.182 -0.032 9.914 -0.178 10.454 0.181 C10.795 0.409 10.978 0.782 10.978 1.162 L10.978 1.162 Z' 
  fill='lightgrey' 
  class='si-glyph-fill'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") no-repeat -2px 50%;
  background-size: contain;

  &:hover {
    background: transparent url("data:image/svg+xml,%3Csvg 
  width='17px' 
  height='17px' 
  viewBox='0 -0.5 17 17' 
  version='1.1' 
  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' 
  class='si-glyph si-glyph-arrow-left'%3E%3Ctitle%3E1225%3C/title%3E%3Cdefs%3E%3C/defs%3E%3Cg 
  stroke='black' 
  stroke-width='.3' 
  fill='none' 
  fill-rule='evenodd'%3E%3Cpath 
  d='M10.978 1.162 C10.978 1.387 10.916 1.612 10.782 1.812 L6.626 8.041 L10.823 14.078 C11.182 14.619 11.036 15.348 10.495 15.707 C9.956 16.068 9.224 15.922 8.865 15.382 L4.235 8.694 C3.971 8.3 3.969 7.786 4.233 7.39 L8.822 0.51 C9.182 -0.032 9.914 -0.178 10.454 0.181 C10.795 0.409 10.978 0.782 10.978 1.162 L10.978 1.162 Z' 
  fill='grey' 
  class='si-glyph-fill'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") no-repeat -2px 50%;
    background-size: contain;
  }
`;

export const PointerRight = styled(Pointer)`
  right: 0;
  top: ${props => props.windowHeight / 4}px;
  height: ${props => props.windowHeight / 2}px;
  width: ${props => props.windowWidth / 6}px;
  background: transparent url("data:image/svg+xml,%0A%3Csvg 
  width='17px' 
  height='17px' 
  viewBox='0 -0.5 17 17' 
  version='1.1' xmlns='http://www.w3.org/2000/svg' 
  xmlns:xlink='http://www.w3.org/1999/xlink' 
  class='si-glyph si-glyph-arrow-right'%3E%3Ctitle%3E1178%3C/title%3E%3Cdefs%3E%3C/defs%3E%3Cg 
  stroke='grey' 
  stroke-width='.3'
  fill='none' 
  fill-rule='evenodd'%3E%3Cpath 
  d='M6.077,1.162 C6.077,1.387 6.139,1.612 6.273,1.812 L10.429,8.041 L6.232,14.078 C5.873,14.619 6.019,15.348 6.56,15.707 C7.099,16.068 7.831,15.922 8.19,15.382 L12.82,8.694 C13.084,8.3 13.086,7.786 12.822,7.39 L8.233,0.51 C7.873,-0.032 7.141,-0.178 6.601,0.181 C6.26,0.409 6.077,0.782 6.077,1.162 L6.077,1.162 Z' 
  fill='lightgrey' 
  class='si-glyph-fill'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") no-repeat 0 50%;
  background-size: contain;
  &:hover {
    background: transparent url("data:image/svg+xml,%0A%3Csvg 
  width='17px' 
  height='17px' 
  viewBox='0 -0.5 17 17' 
  version='1.1' xmlns='http://www.w3.org/2000/svg' 
  xmlns:xlink='http://www.w3.org/1999/xlink' 
  class='si-glyph si-glyph-arrow-right'%3E%3Ctitle%3E1178%3C/title%3E%3Cdefs%3E%3C/defs%3E%3Cg 
  stroke='black' 
  stroke-width='.3' 
  fill='none' 
  fill-rule='evenodd'%3E%3Cpath 
  d='M6.077,1.162 C6.077,1.387 6.139,1.612 6.273,1.812 L10.429,8.041 L6.232,14.078 C5.873,14.619 6.019,15.348 6.56,15.707 C7.099,16.068 7.831,15.922 8.19,15.382 L12.82,8.694 C13.084,8.3 13.086,7.786 12.822,7.39 L8.233,0.51 C7.873,-0.032 7.141,-0.178 6.601,0.181 C6.26,0.409 6.077,0.782 6.077,1.162 L6.077,1.162 Z' 
  fill='grey' 
  class='si-glyph-fill'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") no-repeat 0 50%;
    background-size: contain;
  }
`;
