import React from 'react'
import Navbar from './Navbar'
const Layout:React.FC = ({children}) => {
    return (
        <>
          <Navbar siteTitle="Ligma IT" />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Moon Spiders Inc.
              {` `}
              
            </footer>
          </div>
        </>
      )
}
export default Layout