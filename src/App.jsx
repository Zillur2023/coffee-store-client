
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Conponents/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)
 

  return (
    <>
      
      <h1 className=' text-center p-5 text-6xl text-purple-600'>Coffees length : {coffees.length} </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}> </CoffeeCard>)
      }
      </div>
     
    </>
  )
}

export default App
