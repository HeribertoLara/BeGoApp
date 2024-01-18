//import { useState } from 'react'

import './App.css'
import SearchBar from './assets/components/searchbar/searchbar'
import Container from './assets/components/container/container'
import Header from './assets/components/header/header'
import { Fragment } from 'react'
 import { DataProvider } from './context/Context' 

function App() {

  
  

  return (
    <DataProvider>

      <Fragment>
        <Header/>
        <SearchBar/>
        <Container/>
      </Fragment>
    </DataProvider>
        
   
  )
}

export default App
