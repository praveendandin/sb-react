import React from 'react'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'

class Layout extends React.Component {
    render(){
      return (
        <>
          <Header />
           <main>{this.props.children}</main>
          <Footer />
        </>
      )
    }
  }
export default Layout