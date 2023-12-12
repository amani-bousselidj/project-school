import React  from 'react'
import Login from './Login'
import Logo from './Logo'
import { Navigation } from './Navigation'
import { Search } from './Search'
import SideBar from './SideBar'
import { useHeaderState } from './HeaderState'
export const Header = () => {
  const header = useHeaderState();
  return (
    <div className={`${header ? 'header' : 'scroll-header'}`}>
      <div className="container nav justify-content-between align-items-center">
        <Logo />
        <Navigation />
        <div className="justify-content-between align-items-center d-flex">
          <Search />
          <Login title="Login" header={true} />
      <SideBar />
     </div>
      </div>
    </div>
  )
}
