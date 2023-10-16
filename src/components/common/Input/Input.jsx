import { InputStyle } from "./input.style"

const Input = ({ width, contentPH, onChange }) => {
  return (
    <InputStyle type="text" width={width} placeholder={contentPH} onChange={onChange} />
  )
}

export default Input