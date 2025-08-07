import { useState } from "react";

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="glass-nav fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4 animate-slide-up">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Bar chart with line graph */}
                  <rect x="2" y="12" width="2" height="8" fill="#2F3745" rx="1"/>
                  <rect x="6" y="8" width="2" height="12" fill="#2F3745" rx="1"/>
                  <rect x="10" y="6" width="2" height="14" fill="#2F3745" rx="1"/>
                  <rect x="14" y="4" width="2" height="16" fill="#2F3745" rx="1"/>
                  <rect x="18" y="2" width="2" height="18" fill="#2F3745" rx="1"/>
                  
                  {/* Line graph */}
                  <path d="M3 14 L7 10 L11 12 L15 8 L19 6" stroke="#18E0DB" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  
                  {/* Arrow at the end */}
                  <path d="M19 6 L17 4 M19 6 L17 8" stroke="#18E0DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white font-display">EasyBiz</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 font-medium">
              Dashboard
            </a>
            <a href="#services" className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 font-medium">
              Services
            </a>
            <a href="#schemes" className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 font-medium">
              Schemes
            </a>
            <a href="#help" className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 font-medium">
              Help
            </a>
            
            <div className="flex items-center space-x-4">
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="glass-card border-0 rounded-lg px-3 py-2 text-sm text-white bg-background/80"
              >
                <option value="en" className="text-white bg-background">English</option>
                <option value="hi" className="text-white bg-background">हिंदी</option>
              </select>
              
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-lg glass-card hover:bg-secondary/20 transition-all duration-300 group"
              >
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-white group-hover:scale-110 transition-transform`}></i>
              </button>
              
              <div className="relative">
                <button className="relative p-2 rounded-lg glass-card hover:bg-secondary/20 transition-all duration-300 group">
                  <i className="fas fa-bell text-white group-hover:scale-110 transition-transform"></i>
                  <span className="notification-dot absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              </div>
              
              <button className="bg-gradient-to-r from-accent to-accent-light text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:from-accent-light hover:to-accent transition-all duration-300">
                <i className="fas fa-user mr-2"></i>Login
              </button>
            </div>
          </div>
          
          <button className="md:hidden p-2 text-white">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;