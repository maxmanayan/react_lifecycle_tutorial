import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import Clock from './Clock';


const NavBar = () => {
  const { pathname } = useLocation()
  return(
    <Menu>
      <Link to='/'>
        <Menu.Item active={pathname == '/'}>
          Home
        </Menu.Item>
      </Link>
      <Link to='/about'>
        <Menu.Item active={pathname == '/about'}>
          About
        </Menu.Item>
      </Link>
      <Link to='/componentDemo'>
        <Menu.Item active={pathname == '/componentDemo'}>
          Component Demo
        </Menu.Item>
      </Link>
      <Link to='/clock'>
        <Menu.Item active={pathname == '/clock'}>
          Clock
        </Menu.Item>
      </Link>
      <Link to='/use_state_tutorial'>
        <Menu.Item active={pathname == '/use_state_tutorial'}>
          UseState Tutorial
        </Menu.Item>
      </Link>
      <Link to='/use_effect_tutorial'>
        <Menu.Item active={pathname == '/use_effect_tutorial'}>
          UseEffect Tutorial
        </Menu.Item>
      </Link>
    </Menu>
  )
}


// Class Component
// class NavBar extends React.Component {
//   render(){
//     const { location } = this.props
//     return(
//       <Menu>
//         <Link to='/'>
//           <Menu.Item active={location.pathname == '/'}>
//             Home
//           </Menu.Item>
//         </Link>
//         <Link to='/about'>
//           <Menu.Item active={location.pathname == '/about'}>
//             About
//           </Menu.Item>
//         </Link>
//       </Menu>
//     )
//   }
// }


export default NavBar;