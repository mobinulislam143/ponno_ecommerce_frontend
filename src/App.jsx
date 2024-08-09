import { Fragment } from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegistrationPage from './Pages/RegistrationPage';
import VerifyOtpPage from './Pages/VerifyOtpPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import PostAdsPage from './Pages/PostAdsPage';
import AdsDetailPage from './Pages/AdsDetailPage';
import AllAdsPage from './Pages/AllAdsPage';
import AdminLoginPage from './components/Dashboard/Pages/AdminLoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import FullScreenLoader from './components/MasterLayout/FullScreenLoader';
import ProductByCategoryPage from './Pages/ProductByCategoryPage';
import SafetyPage from './Pages/SafetyPage';
import NotFoundPage from './Pages/NotFoundPage';
import UserAdsPage from './Pages/UserAdsPage';
import SettingsPage from './Pages/SettingsPage';
import EditProfilePage from './Pages/EditProfilePage';
import UserProfilePage from './Pages/UserProfilePage';
import TermsConditionPage from './Pages/TermsConditionPage';
import UpdateAdsPage from './Pages/UpdateAdsPage';
import SocialMediaIcons from './components/Utility/SocialMediaIcons';
 

function App() {
  return(
    <>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            {/* Admin */}
            <Route path='/admin' element={<AdminLoginPage/>} />
            <Route path='/dashboard' element={<Dashboard/>} />

            {/* user */}
            <Route path='/registration' element={<RegistrationPage/>} />
            <Route path='/verifyEmail' element={<VerifyOtpPage/>} />
            <Route path='/login' element={<LoginPage/>} />
          
            <Route path='/user-profile' element={<UserProfilePage/>} />
            <Route path='/user-ads' element={<UserAdsPage/>} />
            <Route path='/edit-profile' element={<EditProfilePage/>} />
            <Route path='/settings' element={<SettingsPage/>} />

            {/* product */}
            <Route path='/post-ads' element={<PostAdsPage/>} />
            <Route path='/ads-details/:id' element={<AdsDetailPage/>} />
            <Route path='/all-ads' element={<AllAdsPage/>} />
            <Route path='/update-ads/:id' element={<UpdateAdsPage/>} />
            <Route path='/by-category/:id' element={<ProductByCategoryPage/>} />

            {/* Other Page */}
            <Route path='/safety-tips' element={<SafetyPage/>} />
            <Route path='/terms-and-condition' element={<TermsConditionPage/>} />

            <Route path='*' element={<NotFoundPage/>} />

          </Routes>
        </BrowserRouter>
       
        <FullScreenLoader/>
      </Fragment>
    </>
  )
}

export default App
