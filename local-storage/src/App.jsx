import React from 'react'

const App = () => {

// 1. Local Storage SetItem Method
const countries = {
  countryName: 'Pak',
  countryCode: '044',
  regionName: 'Oceana'
}
localStorage.setItem('countries', JSON.stringify(countries)) 
// 

// 2. Local Storage GetItem Method
const countries = JSON.parse(localStorage.getItem('countries'))
// 

console.log(user)
  return (
    <div>App</div>
  )
}

export default App