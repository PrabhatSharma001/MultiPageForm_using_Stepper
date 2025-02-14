
import './App.css'
import Stepper from './Stepper'
import UserDetails from './Components/UserDetails'
// import PaymentInfo from './Components/PaymentInfo'
import AddressDetails from './Components/AddressDetails'
import Complete from './Components/Complete'
import CreditCard from './Components/CreditCard'


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
  Component:CreditCard,
  
},
{
  name:"Successful",
  Component:Complete,
 
},


]

  return (
    <div className='h-full p-8'>
 <Stepper stepsConfig={CHECKOUT_STEPS}/>
    </div>
    
  )
}

export default App
