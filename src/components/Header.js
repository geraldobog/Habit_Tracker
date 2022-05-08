import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    //const onClick = () => {
        //console.log('Click')
   // }
const location = useLocation()



  return (
      
    <div>
    <header className = 'header'>
       <h1>{title}</h1> 
       {location.pathname ==='/'&& (<Button 
       color = {showAdd?'Maroon':'LightSeaGreen'}
       text = {showAdd?'Close':'Add'}
       onClick = {onAdd}/>)}
       {/* Example of Reusable Components 
       <Button color = 'blue' text = 'Hello2'/>
       <Button color = 'red' text = 'Hello3'/>
        */}
       
    </header>
    </div>
  )
}
Header.defaultProps = {
    title: 'Habit Tracker 2022',
}
// CSS in JS
// const headingStyle = {
//     color: 'red', backgroundColor:'black'
// }
Header.propTypes ={
    title: PropTypes.string.isRequired,
    }

export default Header