import React from 'react';

import AppNav from './components/AppNav/AppNav'
import AppIntro from './components/AppIntro/AppIntro'
import AppCards from './components/AppCards/AppCards'
import AppExplore from './components/AppExplore/AppExplore'
import AppFeatures from './components/AppFeatures/AppFeatures'
import DownloadApp from './components/DownloadApp/DownloadApp'
import AppFooter from './components/AppFooter/AppFooter'
import AppPricing from './components/AppPricing/AppPricing'
import MenuIcon from "@material-ui/icons/Menu";


import './App.css';

function App() {
  return (
    <div className="container" style={{marginTop: '20rem'}}>
      <AppNav />
      <AppIntro />  
      <AppCards />
      <AppFeatures />
      <AppPricing />
      <DownloadApp />
      <AppFooter />
    </div>
  );
}


export default App;
