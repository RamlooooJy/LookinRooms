import {FC, InputHTMLAttributes} from "react";
import Input from "../Input";

interface EditableInputI extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue: string
}

const EditableInput:FC<EditableInputI> = ({defaultValue}) => {
  return <Input defaultValue={defaultValue} />
}
export default EditableInput
