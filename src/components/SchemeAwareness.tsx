const SchemeAwareness = () => {
  const schemes = [
    {
      title: "PM MUDRA Yojana",
      description: "Micro-finance scheme for small businesses",
      category: "MSME",
      amount: "Up to ₹10 Lakh",
      deadline: "31 Mar 2024",
      eligibility: "Small entrepreneurs, shopkeepers",
      status: "Open",
      icon: "fas fa-store"
    },
    {
      title: "Startup India Seed Fund",
      description: "Financial assistance for proof of concept",
      category: "Startup",
      amount: "Up to ₹50 Lakh",
      deadline: "Rolling basis",
      eligibility: "Recognized startups",
      status: "Open",
      icon: "fas fa-lightbulb"
    },
    {
      title: "Women Entrepreneurship Platform",
      description: "Support for women-led businesses",
      category: "Women",
      amount: "Up to ₹25 Lakh",
      deadline: "15 Apr 2024",
      eligibility: "Women entrepreneurs",
      status: "Limited",
      icon: "fas fa-female"
    },
    {
      title: "Digital India Land Records",
      description: "Digitization of land records and titles",
      category: "Property",
      amount: "Free Service",
      deadline: "Ongoing",
      eligibility: "All land owners",
      status: "Open",
      icon: "fas fa-map"
    },
    {
      title: "PM Kisan Samman Nidhi",
      description: "Direct income support to farmers",
      category: "Agriculture",
      amount: "₹6,000/year",
      deadline: "Ongoing",
      eligibility: "Small & marginal farmers",
      status: "Open",
      icon: "fas fa-leaf"
    },
    {
      title: "Skill India Mission",
      description: "Skill development and training programs",
      category: "Education",
      amount: "Free Training",
      deadline: "31 Dec 2024",
      eligibility: "Youth aged 15-45",
      status: "Open",
      icon: "fas fa-graduation-cap"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5" id="schemes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-black text-primary mb-6 font-display">Scheme Awareness Hub</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover government schemes tailored to your profile. Get personalized recommendations and never miss a deadline.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'MSME', 'Women', 'Agriculture', 'Education', 'Startup'].map((filter) => (
            <button 
              key={filter}
              className="px-6 py-3 glass-card rounded-full font-semibold text-primary hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((scheme, index) => (
            <div 
              key={scheme.title}
              className="glass-card rounded-2xl p-6 hover-lift animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <i className={`${scheme.icon} text-accent-foreground text-xl`}></i>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    scheme.status === 'Open' ? 'status-approved' : 
                    scheme.status === 'Limited' ? 'status-pending' : 'status-rejected'
                  }`}>
                    {scheme.status}
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    {scheme.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-accent mb-3">{scheme.title}</h3>
              <p className="text-accent mb-4 text-sm leading-relaxed">{scheme.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <i className="fas fa-rupee-sign text-accent mr-3 w-4"></i>
                  <span className="text-accent font-semibold">{scheme.amount}</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fas fa-calendar-alt text-accent mr-3 w-4"></i>
                  <span className="text-accent">Deadline: {scheme.deadline}</span>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fas fa-user-check text-accent mr-3 w-4"></i>
                  <span className="text-accent">{scheme.eligibility}</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 btn-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm">
                  <i className="fas fa-external-link-alt mr-2"></i>Apply Now
                </button>
                <button className="px-4 py-3 glass-card border border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-all">
                  <i className="fas fa-bookmark"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Personalized Recommendations */}
        <div className="mt-16 glass-card rounded-2xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
              <i className="fas fa-magic text-accent-foreground text-xl"></i>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-accent">AI-Powered Recommendations</h3>
              <p className="text-accent">Based on your profile and business type</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border border-accent/20">
              <div className="flex items-center mb-4">
                <i className="fas fa-star text-accent mr-3"></i>
                <span className="font-semibold text-accent">Highly Recommended</span>
              </div>
              <h4 className="font-bold text-accent mb-2">PLI Scheme for Manufacturing</h4>
              <p className="text-sm text-accent mb-4">
                Perfect match for your electronics manufacturing business
              </p>
              <div className="flex items-center justify-between">
                <span className="text-accent font-semibold">98% Match</span>
                <button className="btn-accent text-accent-foreground px-4 py-2 rounded-lg text-sm">
                  View Details
                </button>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-success/10 to-success/5 rounded-xl border border-success/20">
              <div className="flex items-center mb-4">
                <i className="fas fa-clock text-success mr-3"></i>
                <span className="font-semibold text-accent">Deadline Alert</span>
              </div>
              <h4 className="font-bold text-accent mb-2">Export Promotion Scheme</h4>
              <p className="text-sm text-accent mb-4">
                Application deadline in 15 days - Don't miss out!
              </p>
              <div className="flex items-center justify-between">
                <span className="text-success font-semibold">15 days left</span>
                <button className="btn-success text-success-foreground px-4 py-2 rounded-lg text-sm">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchemeAwareness;