import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar, Footer } from '~/components'
import { Favorites, HomePage, Profiles } from '~/pages'

const Navigations = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div id='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<Profiles />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default Navigations
