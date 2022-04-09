import styled, {css} from 'styled-components'

export const DescriptionWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 292px;
  overflow: hidden;
  background-color: var(--c-white);
  ${(props) => {
    if (props.isDescriptionWrapperCollapsed) {
      return css`
        height: ${props => props.height}px;
      `
    } else {
      return css`
        height: auto;
      `
    }
  }}

`;

