import React from 'react'
import "./Regi.scss"
import { Route, Routes, Link } from 'react-router-dom'
import Log from "./Login"
import Regi from "./Regi"
const Router = () => {

    return (
        <div className="login-page">
            <div className='cnox'>
                <div className="mayrdiv">
                    <Link to={"/login"}> <button>Login </button></Link>

                    <Link to={"/registration"}><button> Registration</button></Link>
                </div>
            </div>
            <Routes>
                <Route path="/registration" element={<Regi />} />
                <Route path="/login" element={<Log />} />
            </Routes>
        </div>
    )
}

export default Router