import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const navigate = useNavigate();

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
          <div className="animate-slide-up text-foreground">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight font-display">
              One Portal. <br />
              <span className="text-gradient-accent">All Approvals.</span> <br />
              <span>Zero Hassle.</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-muted-foreground font-light leading-relaxed">
              EasyBiz is your comprehensive government approval platform, streamlining all business registrations, 
              licenses, and compliance requirements in one unified interface.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button 
                onClick={() => navigate('/login')}
                className="btn-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover-lift shadow-2xl"
              >
                <i className="fas fa-rocket mr-3"></i>Get Started
              </button>
              <button 
                onClick={() => setShowChatbot(true)}
                className="btn-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover-lift shadow-2xl animate-glow"
              >
                <i className="fas fa-comments mr-3"></i>Talk to Our AI Assistant
              </button>
              <button 
                onClick={() => navigate('/schemes')}
                className="glass-card text-foreground px-8 py-4 rounded-xl font-bold text-lg hover-lift border-2 border-primary/30"
              >
                <i className="fas fa-search mr-3"></i>Explore Schemes for You
              </button>
            </div>
            
            {/* Key Highlights */}
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-success-foreground text-sm"></i>
                </div>
                <span className="text-muted-foreground">Apply for any government service — fast & paperless</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-success-foreground text-sm"></i>
                </div>
                <span className="text-muted-foreground">Track approvals & receive real-time alerts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-success-foreground text-sm"></i>
                </div>
                <span className="text-muted-foreground">Get scheme suggestions based on your profile</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-success-foreground text-sm"></i>
                </div>
                <span className="text-muted-foreground">Chatbot support in Hindi, English & regional languages</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-success-foreground text-sm"></i>
                </div>
                <span className="text-muted-foreground">One-stop portal for businesses, citizens, and MSMEs</span>
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
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full btn-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg shadow-lg hover-lift"
                >
                  <i className="fas fa-id-card mr-3"></i>Login with Aadhaar
                </button>
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full btn-success text-success-foreground py-4 rounded-xl font-semibold text-lg shadow-lg hover-lift"
                >
                  <i className="fas fa-folder mr-3"></i>DigiLocker Login
                </button>
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full glass-card border-2 border-border text-foreground py-4 rounded-xl font-semibold text-lg hover:border-accent hover:text-accent transition-all hover-lift"
                >
                  <i className="fas fa-mobile-alt mr-3"></i>Mobile OTP
                </button>
              </div>
              
              <div className="mt-8 text-center">
                <span className="text-muted-foreground">New user? </span>
                <a href="/register" className="text-gradient-accent font-semibold hover:underline">Register here</a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Trusted & Secure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Backed by secure DigiLocker integration and designed with government APIs to ensure safety, transparency, and accuracy.
            </p>
            <div className="flex justify-center items-center space-x-8 mt-6">
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-success text-xl"></i>
                <span className="text-sm text-muted-foreground">Bank-level Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-certificate text-success text-xl"></i>
                <span className="text-sm text-muted-foreground">Government Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-lock text-success text-xl"></i>
                <span className="text-sm text-muted-foreground">End-to-End Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Banner CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-accent rounded-3xl p-12 text-accent-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business approvals?</h2>
            <p className="text-xl mb-8 opacity-90">Let EasyBiz guide you — your personal assistant for government services.</p>
            <div className="flex justify-center gap-6">
              <button 
                onClick={() => navigate('/register')}
                className="bg-white/90 text-accent px-8 py-4 rounded-xl font-bold text-lg hover-lift shadow-2xl"
              >
                Get Started
              </button>
              <button 
                onClick={() => setShowChatbot(true)}
                className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover-lift"
              >
                Try the Chatbot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;