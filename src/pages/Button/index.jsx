import { StyledCard, StyledButton, StyledSwitch } from '../../utils/style/Atoms'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { useTheme } from '../../utils/hooks'

function Button() {
  const { theme, switchTheme } = useTheme()

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div">
          Hello Card
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton isdarkmode={theme} onClick={() => switchTheme()}>
          Change mode: {theme === 'dark' ? 'jour' : 'nuit'}
        </StyledButton>
        <StyledSwitch isdarkmode={theme} />
      </CardActions>
    </StyledCard>
  )
}

export default Button
