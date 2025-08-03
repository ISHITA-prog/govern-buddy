import { useState } from "react";

const HeroSection = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <section className="bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-4 h-4 bg-accent/30 rounded-full top-20 left-10 animate-float"></div>
        <div className="absolute w-6 h-6 bg-success/30 rounded-full top-40 right-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-3 h-3 bg-primary/30 rounded-full bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute w-5 h-5 bg-accent-light/30 rounded-full bottom-20 right-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-2 h-2 bg-warning/30 rounded-full top-60 left-1/2 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-4 h-4 bg-primary-light/30 rounded-full bottom-60 right-1/3 animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up text-primary">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight font-display">
              One Portal. <br />
              <span className="text-gradient-accent">All Government Services.</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary/80 font-light leading-relaxed">
              Streamline your compliance journey with AI-powered assistance. Apply for licenses, track applications, and stay compliant - all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="btn-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover-lift shadow-2xl">
                <i className="fas fa-rocket mr-3"></i>Apply Now
              </button>
              <button className="glass-card text-primary px-8 py-4 rounded-xl font-bold text-lg hover-lift border-2 border-primary/30">
                <i className="fas fa-search mr-3"></i>Track Application
              </button>
              <button 
                onClick={() => setShowChatbot(true)}
                className="btn-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover-lift relative overflow-hidden shadow-2xl animate-glow"
              >
                <i className="fas fa-comments mr-3 relative z-10"></i>
                <span className="relative z-10">Ask ComplianceGPT</span>
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-in">
              <div className="text-center glass-card rounded-xl p-4 hover-lift">
                <div className="text-4xl font-black text-gradient-accent mb-2">87%</div>
                <div className="text-sm text-primary/70 font-medium">Time Saved</div>
              </div>
              <div className="text-center glass-card rounded-xl p-4 hover-lift">
                <div className="text-4xl font-black text-gradient-accent mb-2">₹2.5L+</div>
                <div className="text-sm text-primary/70 font-medium">Cost Reduced</div>
              </div>
              <div className="text-center glass-card rounded-xl p-4 hover-lift">
                <div className="text-4xl font-black text-gradient-accent mb-2">50K+</div>
                <div className="text-sm text-primary/70 font-medium">Citizens Served</div>
              </div>
            </div>
          </div>
          
          <div className="animate-float">
            <div className="glass-card rounded-3xl p-8 shadow-2xl hover-lift">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-user text-primary-foreground text-2xl"></i>
                </div>
                <div className="ml-6">
                  <div className="font-bold text-foreground text-xl">Quick Access</div>
                  <div className="text-muted-foreground">Aadhaar • DigiLocker • Mobile OTP</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full btn-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg shadow-lg hover-lift">
                  <i className="fas fa-id-card mr-3"></i>Login with Aadhaar
                </button>
                <button className="w-full btn-success text-success-foreground py-4 rounded-xl font-semibold text-lg shadow-lg hover-lift">
                  <i className="fas fa-folder mr-3"></i>DigiLocker Login
                </button>
                <button className="w-full glass-card border-2 border-border text-foreground py-4 rounded-xl font-semibold text-lg hover:border-accent hover:text-accent transition-all hover-lift">
                  <i className="fas fa-mobile-alt mr-3"></i>Mobile OTP
                </button>
              </div>
              
              <div className="mt-8 text-center">
                <span className="text-muted-foreground">New user? </span>
                <a href="#" className="text-gradient-accent font-semibold hover:underline">Register here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;