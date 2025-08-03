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
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-brain text-primary-foreground text-lg animate-pulse"></i>
              </div>
              <span className="text-xl font-bold text-primary font-display">ComplianceGPT</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium">
              Dashboard
            </a>
            <a href="#services" className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium">
              Services
            </a>
            <a href="#schemes" className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium">
              Schemes
            </a>
            <a href="#help" className="text-primary/80 hover:text-primary transition-all duration-300 hover:scale-105 font-medium">
              Help
            </a>
            
            <div className="flex items-center space-x-4">
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="glass-card border-0 rounded-lg px-3 py-2 text-sm text-primary bg-transparent"
              >
                <option value="en" className="text-primary bg-background">English</option>
                <option value="hi" className="text-primary bg-background">हिंदी</option>
              </select>
              
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-lg glass-card hover:bg-secondary/20 transition-all duration-300 group"
              >
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-primary group-hover:scale-110 transition-transform`}></i>
              </button>
              
              <div className="relative">
                <button className="relative p-2 rounded-lg glass-card hover:bg-secondary/20 transition-all duration-300 group">
                  <i className="fas fa-bell text-primary group-hover:scale-110 transition-transform"></i>
                  <span className="notification-dot absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
                </button>
              </div>
              
              <button className="btn-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold shadow-lg">
                <i className="fas fa-user mr-2"></i>Login
              </button>
            </div>
          </div>
          
          <button className="md:hidden p-2 text-primary">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;