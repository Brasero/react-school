import React from 'react'
import { StyledAddFab } from '../../utils/style/Atoms'
import AddIcon from '@mui/icons-material/Add'
import { useTheme } from '../../utils/hooks'

function Devis() {
  const theme = useTheme()
  return (
    <React.Fragment>
      <div>
        <StyledAddFab size="large" color="primary" isdarkmode={theme}>
          <AddIcon />
        </StyledAddFab>
      </div>
    </React.Fragment>
  )
}

export default Devis
