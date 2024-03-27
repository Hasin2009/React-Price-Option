
import './App.css'
import LineChart from './Components/LineChart'
import NavBar from './Components/NavBar'
import Phones from './Components/Phones'
import PriceOptions from './Components/PriceOptions'
// import DaisyNav from './Components/DaisyNav'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
   {/* <DaisyNav></DaisyNav> */}
     <LineChart></LineChart>
     <Phones></Phones>
    </>
  )
}

export default App
