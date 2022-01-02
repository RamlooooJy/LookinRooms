import {uid} from "../../common/utils";
import React, {FC} from "react";
import {StyledAdminHeader, StyledAdminHeaderSubHeaders} from "./styled";
import {TableHeadersT} from "./AdminTable";

const AdminTableHeader: FC<{ tableHeaders: TableHeadersT }> = ({tableHeaders}) => {
  return <StyledAdminHeader headers={tableHeaders} className="header">
    <div className="row">
      {
        tableHeaders.map(header =>
          <div key={uid()} className="item">
            <div className={`head ${typeof header !== 'object' ? 'simple' : ''}`}>
              {typeof header === 'object' ? header.head : header}
            </div>
            {
              typeof header === 'object' &&
              <StyledAdminHeaderSubHeaders className='subheaders' length={header.body.length}>
                {
                    header.body.map((item: string) => <div key={uid()}
                                                             className='subheader'>{item}</div>)
                }
              </StyledAdminHeaderSubHeaders>
            }

          </div>
        )
      }
    </div>
  </StyledAdminHeader>
};

export default AdminTableHeader;

//tableHeaders.map(header => {
//         return <div key={uid()} className="item">
//           {
//             typeof header === 'object' ?
//               <div className='subheader'>
//                 <div className="row">{header.head}</div>
//                 <div className="row">{header.body.map((bodyItem:any) =>
//                   <div key={uid()} className='column'>
//                     {bodyItem}
//                   </div>
//                 )}</div>
//               </div>
//               :
//               header
//           }
//         </div>
//       })
