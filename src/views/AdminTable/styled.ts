import styled, {css} from "styled-components";

export const StyledAdminTable = styled.div`
  width: 100%;
  min-width: 1500px;
  font-size: 14px;
`
const template = '40px 2fr 3fr 2fr 2fr 1fr 2fr'

type TableProps = { headers: any }

export const StyledAdminHeader = styled.div<TableProps>`
  display: grid;
  .row {
    display: grid;
    grid-template-columns: ${template};
    border: 1px solid ${props => props.theme.colors.borderColor};
  }
  .item {
    display: grid;
    grid-template-rows: 4ch auto;
    align-items: stretch;
    text-align: center;
    &:not(:first-child) {
       border-left: 1px solid ${props => props.theme.colors.borderColor};
    }
  }
  .subheader {
    display: grid;
    align-items: center;
    &:not(:first-child) {
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    }
  }
  .head {
    font-weight: bold;
    display: grid;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    &.simple {
      height: 200%;
      border: none;
    }
  }
`
export const StyledAdminHeaderSubHeaders = styled.div<{length: number}>`
  display: grid;
  grid-template-columns: repeat(${props=>props.length}, 1fr);
  // .subheader:not(.subheader:first-child) {
  //   border-left: 1px solid ${props => props.theme.colors.borderColor};
  // }
`
// border: 1px solid ${props => props.theme.colors.borderColor};
// .column:not(.column:first-child),
// .item:not(.item:first-child) {
//   border-left: 1px solid ${props => props.theme.colors.borderColor};
// }
//
// .subheader {
//   display: grid;
//   grid-template-rows: 2ch auto;
// }
//
// .column,
// .row {
//   padding: 0 10px;
// }
//
// .item,
// .row {
//   &:first-child {
//     border-bottom: 1px solid ${props => props.theme.colors.borderColor};
//   }
//
//   display: grid;
//   justify-content: center;
//   text-align: center;
// }
//
// ${({headers}) => headers.map((item: any, idx: number) => {
//   return css`
//       .item:nth-child(${idx + 1}) {
//         padding: ${typeof headers[idx] !== 'object' ? '0 10px' : 0};
//
//         .subheader .row:last-child {
//           grid-gap: 10px;
//           grid-template-columns: repeat(${(props) => typeof headers[idx] === 'object' ? headers[idx].body.length : 1}, 1fr);
//         }
//       }
//     `
// })}
export const StyledAdminTableBody = styled.div<TableProps>`
  .row {
    display: grid;
    grid-template-columns: ${template};
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    border-left: 1px solid ${props => props.theme.colors.borderColor};
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    & > .column:first-child {
      font-weight: bold;
    }
    & > .column:not(:first-child) {
      border-left: 1px solid ${props => props.theme.colors.borderColor};
      .column:not(:first-child) {
        border-left: 1px solid ${props => props.theme.colors.borderColor};
      }
    }
    &.title {
      font-size: 24px;
      padding: 5px;
    }
  }
  .column {
    text-align: center;
    display: grid;
    align-items: center;
    grid-template-rows: 4ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${props=>props.headers.map((item: any, idx: number) => {
    console.log(item.body && item.body.lenth)
    return typeof item === 'object' ? css`
      .column:nth-child(${idx + 1}) .subrow {
        display: grid;
        grid-template-columns: repeat(${item.body.length}, 1fr);
      }
    ` : ''
  })}
  display: grid;
`




