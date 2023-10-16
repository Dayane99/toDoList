import { ButtonStyle } from './button.style'

const Button = ({ icone, onClick }) => {
  return (
    <ButtonStyle onClick={onClick}>
      {icone}
    </ButtonStyle>
  )
}

export default Button