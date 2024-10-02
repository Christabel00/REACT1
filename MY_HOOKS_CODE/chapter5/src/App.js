import React from 'react'
import Products from './Products'
import Rating from './Rating'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import JumbotronComponent from './JumbotronComponent'; 

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function App() {
  const isValid = true

  return (
    <div>
      {/* <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' /> */}
      {/* <Products />   
      <Button  variant="danger">Default</Button>   */}
      <JumbotronComponent/>
    </div>
  )
}

export default App
