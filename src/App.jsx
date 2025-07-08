import { useState} from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';

function App() {
  const [isLoading, setIsLoading] = useState(false) ;
  const [menuOpen, setMenuOpen] = useState(false);

  

  return( 
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)}/>} {""}
      <div 
        className={`min-h-screen transition-opacity duration-800 
        ${isLoading ? 'opacity-100' : 'opacity-0'} 
        bg-#401662 text-gray-100`}
      >
        <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
        <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
        <Home />
      </div>
    </>
  );
}

export default App
