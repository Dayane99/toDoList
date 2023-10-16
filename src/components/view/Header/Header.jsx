import { HeaderStyle } from './header.style'
import florDir from '/florDir.png'
import florEsq from '/florEsq.png'

const Header = () => {
  return (
    <HeaderStyle>
      <img src={florEsq} alt="Imagem de flor em arabesco" />
      <h1>To Do List</h1>
      <img src={florDir} alt="Imagem de flor em arabesco" />
    </HeaderStyle>
  )
}

export default Header