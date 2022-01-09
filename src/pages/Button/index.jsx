import {
  StyledCard,
  StyledButton,
  StyledSwitch,
  StyledActionButton,
} from '../../utils/style/Atoms'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { useTheme } from '../../utils/hooks'
import React from 'react'

function Button() {
  const { theme, switchTheme } = useTheme()

  return (
    <React.Fragment>
      <StyledCard isdarkmode={theme}>
        <CardContent>
          <Typography variant="h5" component="div">
            Card theme
          </Typography>
          <Typography variant="h5" component="div">
            Theme actuel : {theme}
          </Typography>
        </CardContent>
        <CardActions>
          <StyledButton isdarkmode={theme} onClick={() => switchTheme()}>
            Changer de mode: {theme === 'dark' ? 'jour' : 'nuit'}
          </StyledButton>
          <StyledSwitch
            isdarkmode={theme}
            checked={theme === 'dark' ? true : false}
            onChange={() => switchTheme()}
          />
        </CardActions>
      </StyledCard>
      <StyledActionButton isdarkmode={theme}>
        Bouton d'action
      </StyledActionButton>
    </React.Fragment>
  )
}

export default Button
