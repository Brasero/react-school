import { useTheme } from '../../utils/hooks'
import {
  StyledLink,
  StyledNav,
  StyledHeader,
  StyledBrandTitle,
  StyledSubtitle,
  StyledModeButton,
} from '../../utils/style/Atoms'
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material'

function Header() {
  const { theme, switchTheme } = useTheme()
  return (
    <StyledHeader>
      <StyledBrandTitle isdarkmode={theme}>digicci</StyledBrandTitle>
      <StyledSubtitle isdarkmode={theme}>
        Avec vous de l'idée au projet
      </StyledSubtitle>
      <StyledNav>
        <StyledModeButton isdarkmode={theme} onClick={() => switchTheme()}>
          {theme === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
        </StyledModeButton>
        <StyledLink to="/" isdarkmode={theme}>
          Acceuil
        </StyledLink>
        <StyledLink to="/Button" isdarkmode={theme}>
          Button/Card
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
