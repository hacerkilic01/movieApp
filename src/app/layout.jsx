import React from 'react'
import Header from '@/components/Header'
import './globals.css'
import Tabs from '@/components/Tabs'
// import Provider from './Providers'

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            {/* <Providers> */}
            <Tabs/>
            <Header/>
            {children}
            {/* </Providers> */}
        </body>
    </html>
  )
}

export default Layout