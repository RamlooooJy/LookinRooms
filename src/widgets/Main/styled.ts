import styled, {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  .application * {
    box-sizing: border-box;
  }
  .application a {
    color: #61dafb;
    text-decoration: none;

  }
`
export const StyledApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
`

export const defaultColors = {
  primary: '#6C5DD3'
}
