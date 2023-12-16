import {Routes, Route } from 'react-router-dom';
import './globals.css';
import { Home } from './_root/pages';
import SignInForm from './_auth/forms/SignInForm';
import AuthLayout from './_auth/AuthLayout';
import SignUpForm from './_auth/forms/SignUpForm';
import { RootLayout } from './_root/RootLayout';

export default function App() {
  return (
     <main>
        <Routes>
            <Route element={<AuthLayout />}>
                {/* public routes which are accessible to everyone like login/signup/registration page */}
                <Route path="/sign-in" element={<SignInForm />}/>
                <Route path="/sign-up" element={<SignUpForm />}/>
            </Route>
            <Route element={<RootLayout/>}>
                {/* private routes which are accessible to only authorized users */}
                <Route path="/index" element={<Home/>}/>
            </Route>
            
        </Routes>
    </main>
  )
}
