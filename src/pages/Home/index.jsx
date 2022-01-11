import '../../Home.css'
import Clock from '../../components/Clock'
import { useTheme } from '../../utils/hooks'

function Home() {
  const theme = useTheme()
  return (
    <div className="App">
      <div className="ClockContainer">
        <Clock mode={theme} />
      </div>
    </div>
  )
}

export default Home
