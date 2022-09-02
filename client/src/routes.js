import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/create" element={<CreatePage />} />
                <Route path="/links" element={<LinksPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="*" element={<CreatePage />} />
            </Routes>
        )
    } else
        return (
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="*" element={<AuthPage />} />
            </Routes>
        )
}