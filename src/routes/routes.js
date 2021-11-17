import React from 'react'
import { Router, BrowserRouter } from 'react-router-dom'

import Main from "../pages/Main/Main"
import Singup from "../pages/Singup/Singup"

const Routes = () => {
    return (
        <BrowserRouter>
            <Router component={ Singup } path="/" exact/>
            <Router component={ Main } path="/main" />
        </BrowserRouter>
    )
}

export default Routes