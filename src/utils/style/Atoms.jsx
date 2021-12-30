import { Link } from 'react-router-dom'
import { styled } from '@mui/styles'
import { purple } from '@mui/material/colors'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import Switch from '@mui/material/Switch'
import colors from './colors'
import Card from '@mui/material/Card'

export const StyledLink = styled(({ isdarkmode, ...other }) => (
  <Link {...other} />
))({
  padding: '10px 15px',
  textDecoration: 'none',
  fontSize: '18px',
  textAlign: 'center',
  background: (props) =>
    props.isdarkmode === 'dark'
      ? colors.backgroundDark
      : colors.backgroundLight,
  color: (props) =>
    props.isdarkmode === 'dark' ? colors.primary : colors.secondary,
})

export const StyledButton = styled(({ isdarkmode, ...other }) => (
  <ButtonUnstyled {...other} />
))({
  padding: '7px 8px',
  textAlign: 'center',
  fontFamily: 'Helvetica',
  border: (props) =>
    props.isdarkmode === 'dark'
      ? '1px solid ' + colors.backgroundLight
      : '1px solid ' + colors.secondary,
  background: (props) =>
    props.isdarkmode === 'dark'
      ? colors.backgroundDark
      : colors.backgroundLight,
  color: (props) =>
    props.isdarkmode === 'dark' ? colors.backgroundLight : colors.primary,
  borderRadius: 15,
})

export const StyledModeButton = styled(({ isdarkmode, ...other }) => (
  <ButtonUnstyled {...other} />
))({
  padding: '7px 8px',
  textAlign: 'center',
  fontFamily: 'Impact',
  border: (props) =>
    props.isdarkmode === 'dark' ? '0px' : '1px solid ' + colors.secondary,
  color: (props) =>
    props.isdarkmode === 'dark' ? colors.backgroundLight : colors.secondary,
  background: (props) =>
    props.isdarkmode === 'dark'
      ? colors.backgroundDark
      : colors.backgroundLight,
  borderRadius: 5,
  transitionDuration: 500,
  marginRight: 'auto',
})

const InitialTitle = styled('h1')({
  fontSize: '32px',
  fontFamily: 'Helvetica, sans-serif',
})

export const StyledBrandTitle = styled(({ isdarkmode, ...other }) => (
  <InitialTitle {...other} />
))({
  color: (props) =>
    props.isdarkmode === 'dark' ? colors.primary : colors.secondary,
  backgroundColor: (props) =>
    props.isdarkmode === 'dark'
      ? colors.backgroundDark
      : colors.backgroundLight,
  textTransform: 'upperCase',
})

export const StyledNav = styled('nav')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
})

export const StyledHeader = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 20,
})

const InitialSubtitle = styled('h2')({
  fontSize: '15px',
  fontFamily: 'Helvetica',
  marginTop: 0,
  marginLeft: 2,
})

export const StyledSubtitle = styled(({ isdarkmode, ...other }) => (
  <InitialSubtitle {...other} />
))({
  color: (props) =>
    props.isdarkmode === 'dark' ? colors.backgroundLight : colors.primary,
})

export const StyledCard = styled(Card)({
  width: '25vw',
})

//FIX ME BAD COLOR
export const StyledSwitch = styled(({ isdarkmode, ...other }) => (
  <Switch {...other} />
))({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: (props) => props.isdarkmode === 'dark' && purple[100],
    '$:hover': {
      backgroundColor: purple[100],
    },
  },
  '& .MuiSwitch-swicthBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: purple[200],
  },
})
