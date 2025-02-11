
import './App.css'
import Stepper from './Stepper'
import UserDetails from './Components/UserDetails'
import PaymentInfo from './Components/PaymentInfo'
import AddressDetails from './Components/AddressDetails'
import Complete from './Components/Complete'


function App() {


  const CHECKOUT_STEPS=[
    {
    name:"Common details",
    Component:UserDetails,
   

  },
{
  name:"Address details",
  Component:AddressDetails,
 
},
{
  name:"Payment info",
  Component:PaymentInfo,
  
},
{
  name:"Successful",
  Component:Complete,
 
},


]

  return (
     <Stepper stepsConfig={CHECKOUT_STEPS}/>
  )
}

export default App
