import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar, Footer } from '~/components'
import { Favorites, HomePage, Profiles } from '~/pages'

const Navigations = () => {
  return (
    <>
      <Navbar />
      <div id='container'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profiles' element={<Profiles />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  )
}

export default Navigations
