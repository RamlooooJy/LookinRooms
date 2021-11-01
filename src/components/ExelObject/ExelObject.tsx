import {FC} from "react";

const ExelObject: FC = (props: any) => {
  const handleFileSelect = (evt: any) => {
    const files = evt.target.files
    const isExel = (evt.target.files[0].name.match('.xlsx'))
    isExel && parseExcel(files[0], props.setLog)
  }
  return <>
    <input onChange={handleFileSelect} type="file"/>
  </>
}

export default ExelObject

const parseExcel = (file: any, callback: (el: any) => void) => {
  const reader = new FileReader();
  reader.onload = function (e: any) {
    const data = e.target.result;
    // @ts-ignore
    const workbook = window.XLSX.read(data, {
      type: 'binary'
    });
    workbook.SheetNames.forEach(function (sheetName: any) {
      // @ts-ignore
      const XL_row_object = window.XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
      const json_object = JSON.stringify(XL_row_object);
      callback(json_object)
      console.log(json_object)
    })
  };
  reader.readAsBinaryString(file);
};
