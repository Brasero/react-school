import { useContext } from 'react'
import { ThemeContext } from '../context/index'

export function useTheme() {
  const { theme, switchTheme } = useContext(ThemeContext)
  return { theme, switchTheme }
}
