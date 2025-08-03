const DashboardPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-accent/10 relative overflow-hidden" id="dashboard">
      <div className="absolute inset-0 bg-background/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-black text-foreground mb-6 font-display">Your Business Command Center</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive overview of all your government interactions in one powerful dashboard
          </p>
        </div>
        
        <div className="glass-card rounded-3xl p-8 shadow-2xl animate-fade-in">
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground hover-lift">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg">Active Applications</h4>
                <i className="fas fa-file-alt text-2xl opacity-80"></i>
              </div>
              <div className="text-4xl font-black mb-2">12</div>
              <div className="text-sm opacity-90">3 pending approval</div>
              <div className="mt-4 bg-primary-foreground/20 rounded-full h-2">
                <div className="bg-primary-foreground rounded-full h-2 w-3/4 animate-shimmer"></div>
              </div>
            </div>
            
            <div className="bg-gradient-accent rounded-2xl p-6 text-accent-foreground hover-lift">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg">Valid Licenses</h4>
                <i className="fas fa-certificate text-2xl opacity-80"></i>
              </div>
              <div className="text-4xl font-black mb-2">8</div>
              <div className="text-sm opacity-90">All up to date</div>
              <div className="mt-4 bg-accent-foreground/20 rounded-full h-2">
                <div className="bg-accent-foreground rounded-full h-2 w-full"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-warning to-warning/80 rounded-2xl p-6 text-warning-foreground hover-lift">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg">Expiring Soon</h4>
                <i className="fas fa-exclamation-triangle text-2xl opacity-80"></i>
              </div>
              <div className="text-4xl font-black mb-2">2</div>
              <div className="text-sm opacity-90">Within 30 days</div>
              <div className="mt-4 bg-warning-foreground/20 rounded-full h-2">
                <div className="bg-warning-foreground rounded-full h-2 w-1/4 animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-success rounded-2xl p-6 text-success-foreground hover-lift">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg">Available Schemes</h4>
                <i className="fas fa-gift text-2xl opacity-80"></i>
              </div>
              <div className="text-4xl font-black mb-2">5</div>
              <div className="text-sm opacity-90">New recommendations</div>
              <div className="mt-4 bg-success-foreground/20 rounded-full h-2">
                <div className="bg-success-foreground rounded-full h-2 w-4/5 animate-glow"></div>
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="border-t border-border pt-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Recent Activity</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-6 p-4 rounded-xl hover:bg-secondary/20 transition-all hover-lift">
                <div className="w-14 h-14 bg-gradient-success rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-check text-success-foreground text-xl"></i>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-foreground text-lg">Trade License Approved</div>
                  <div className="text-muted-foreground">Application #TL/2024/001234 • 2 hours ago</div>
                  <div className="mt-2 flex items-center">
                    <span className="status-approved px-3 py-1 rounded-full text-sm font-medium">Completed</span>
                  </div>
                </div>
                <button className="btn-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-lg">
                  <i className="fas fa-download mr-2"></i>Download
                </button>
              </div>
              
              <div className="flex items-center space-x-6 p-4 rounded-xl hover:bg-secondary/20 transition-all hover-lift">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-clock text-primary-foreground text-xl"></i>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-foreground text-lg">Fire NOC Under Review</div>
                  <div className="text-muted-foreground">Application #NOC/2024/005678 • 1 day ago</div>
                  <div className="mt-2 flex items-center">
                    <span className="status-pending px-3 py-1 rounded-full text-sm font-medium">In Progress</span>
                  </div>
                </div>
                <button className="glass-card border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all">
                  <i className="fas fa-eye mr-2"></i>Track
                </button>
              </div>
              
              <div className="flex items-center space-x-6 p-4 rounded-xl hover:bg-secondary/20 transition-all hover-lift">
                <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-lightbulb text-accent-foreground text-xl"></i>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-foreground text-lg">New Scheme Recommendation</div>
                  <div className="text-muted-foreground">MSME Technology Upgradation Scheme • 3 days ago</div>
                  <div className="mt-2 flex items-center">
                    <span className="status-approved px-3 py-1 rounded-full text-sm font-medium">Eligible</span>
                  </div>
                </div>
                <button className="btn-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-lg">
                  <i className="fas fa-external-link-alt mr-2"></i>Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;