const FeatureHighlights = () => {
  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      <div className="absolute inset-0 bg-background/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-black text-foreground mb-6 font-display">Why Choose ComplianceGPT?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of government services with our AI-powered platform designed for efficiency, transparency, and user satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 shadow-xl hover-lift animate-bounce-in">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <i className="fas fa-tachometer-alt text-primary-foreground text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Unified Dashboard</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Manage all your applications, licenses, and compliance requirements from a single, intuitive dashboard with real-time updates.
            </p>
            <div className="progress-bar h-2 rounded-full mb-3"></div>
            <span className="text-sm font-semibold text-gradient-accent">100% Digital Experience</span>
          </div>
          
          <div className="glass-card rounded-2xl p-8 shadow-xl hover-lift animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <i className="fas fa-eye text-accent-foreground text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Real-Time Tracking</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get instant updates on your application status with SMS, WhatsApp, and email notifications. Never miss a deadline again.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-success">Live Updates Active</span>
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-8 shadow-xl hover-lift animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <i className="fas fa-robot text-accent-foreground text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">AI Assistant</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get 24/7 multilingual support in Hindi and English. Voice-enabled for accessibility and enhanced user experience.
            </p>
            <button className="text-gradient-accent font-semibold hover:underline">
              Try Assistant <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
        
        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="glass-card rounded-xl p-6 hover-lift text-center">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-accent-foreground text-xl"></i>
            </div>
            <h4 className="font-bold text-foreground mb-2">Secure & Safe</h4>
            <p className="text-sm text-muted-foreground">Bank-level security with end-to-end encryption</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 hover-lift text-center">
            <div className="w-12 h-12 bg-gradient-success rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-language text-success-foreground text-xl"></i>
            </div>
            <h4 className="font-bold text-foreground mb-2">Multilingual</h4>
            <p className="text-sm text-muted-foreground">Support in 12+ Indian languages</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 hover-lift text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-mobile-alt text-primary-foreground text-xl"></i>
            </div>
            <h4 className="font-bold text-foreground mb-2">Mobile First</h4>
            <p className="text-sm text-muted-foreground">Optimized for smartphones and tablets</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 hover-lift text-center">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-clock text-accent-foreground text-xl"></i>
            </div>
            <h4 className="font-bold text-foreground mb-2">24/7 Available</h4>
            <p className="text-sm text-muted-foreground">Round-the-clock service availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;