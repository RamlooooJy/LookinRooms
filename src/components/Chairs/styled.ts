import styled from "styled-components";

const size = '36px'
export const StyledChair = styled.div<{ color: 'default' | 'active' | 'more' }>`
  display: block;
  min-width: ${size};
  min-height: ${size};
  border-radius: 50%;
  background: ${({color, theme}) =>
  color === 'active'
    ? theme.colors.red
    : color === 'more'
    ? theme.colors.primary
    : theme.colors.colorDefault};

`
