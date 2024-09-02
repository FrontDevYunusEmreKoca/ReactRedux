import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../component/Header'
import HomePage from '../component/HomePage'
import ContactPage from '../component/ContactPage'
import BlogDetailsPage from '../component/BlogDetailsPage'
import NotFoundPage from '../component/NotFoundPage'
import BlogList from '../component/BlogList'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs" element={<BlogList />} />
                <Route path="/blogs/:id" element={<BlogDetailsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
         </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter
