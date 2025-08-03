import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InvestorSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const navigate = useNavigate();

  const businesses = [
    {
      id: 1,
      name: "Green Tech Solutions",
      sector: "Clean Energy",
      capitalNeeded: "₹50 Lakhs",
      stage: "Regulatory Approval",
      description: "Solar panel manufacturing unit seeking MSME license and environmental clearance",
      progress: 75,
      documents: "Complete",
      timeline: "2 months to completion"
    },
    {
      id: 2,
      name: "Organic Farm Co.",
      sector: "Agriculture",
      capitalNeeded: "₹25 Lakhs",
      stage: "License Processing",
      description: "Organic food processing unit with FSSAI approval in progress",
      progress: 60,
      documents: "Pending 2 docs",
      timeline: "3 months to completion"
    },
    {
      id: 3,
      name: "Digital Craft Studio",
      sector: "Handicrafts",
      capitalNeeded: "₹15 Lakhs",
      stage: "Scheme Application",
      description: "Traditional handicrafts export business applying for PM-MUDRA loan",
      progress: 40,
      documents: "Under review",
      timeline: "4 months to completion"
    }
  ];

  const filteredBusinesses = selectedFilter === 'all' 
    ? businesses 
    : businesses.filter(b => b.sector.toLowerCase().includes(selectedFilter));

  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      <div className="absolute inset-0 bg-background/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-black text-foreground mb-6 font-display">For Investors</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover verified small businesses navigating government compliance. See their capital needs, regulatory progress, and investment opportunities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-card rounded-2xl p-2 flex space-x-2">
            {['all', 'energy', 'agriculture', 'handicrafts', 'tech'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedFilter === filter
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Business Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((business, index) => (
            <div 
              key={business.id}
              className="glass-card rounded-2xl p-6 shadow-xl hover-lift animate-bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{business.name}</h3>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {business.sector}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-gradient-accent">{business.capitalNeeded}</div>
                  <div className="text-sm text-muted-foreground">Capital Needed</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {business.description}
              </p>

              {/* Progress Section */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Regulatory Progress</span>
                    <span className="text-sm text-muted-foreground">{business.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${business.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Stage:</span>
                    <div className="font-semibold text-foreground">{business.stage}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Documents:</span>
                    <div className="font-semibold text-foreground">{business.documents}</div>
                  </div>
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground">Timeline:</span>
                  <div className="font-semibold text-foreground">{business.timeline}</div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button 
                  onClick={() => navigate(`/business/${business.id}`)}
                  className="flex-1 btn-primary text-primary-foreground py-3 rounded-xl font-semibold hover-lift"
                >
                  View Details
                </button>
                <button className="flex-1 glass-card border-2 border-accent text-accent py-3 rounded-xl font-semibold hover-lift transition-all">
                  Express Interest
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Investor Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glass-card rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search-dollar text-accent-foreground text-2xl"></i>
            </div>
            <h4 className="font-bold text-foreground mb-2">Verified Opportunities</h4>
            <p className="text-sm text-muted-foreground">All businesses verified through government compliance tracking</p>
          </div>

          <div className="glass-card rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-success rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-chart-line text-success-foreground text-2xl"></i>
            </div>
            <h4 className="font-bold text-foreground mb-2">Real-time Progress</h4>
            <p className="text-sm text-muted-foreground">Track regulatory approval progress and milestones</p>
          </div>

          <div className="glass-card rounded-xl p-6 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-handshake text-primary-foreground text-2xl"></i>
            </div>
            <h4 className="font-bold text-foreground mb-2">Direct Connect</h4>
            <p className="text-sm text-muted-foreground">Connect directly with business owners and their compliance status</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/investor-signup')}
            className="btn-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover-lift shadow-2xl"
          >
            <i className="fas fa-user-tie mr-3"></i>Join as Investor
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;