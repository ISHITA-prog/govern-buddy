const ServicesGrid = () => {
  const services = [
    {
      category: "Business Licenses",
      icon: "fas fa-building",
      items: ["Trade License", "Shop & Establishment", "Professional Tax", "Fire NOC"],
      gradient: "bg-gradient-primary"
    },
    {
      category: "Tax & Compliance",
      icon: "fas fa-calculator",
      items: ["GST Registration", "Income Tax Filing", "TDS Returns", "ESI/PF"],
      gradient: "bg-gradient-accent"
    },
    {
      category: "MSME & Startups",
      icon: "fas fa-rocket",
      items: ["MSME Registration", "Startup India", "Import-Export Code", "FSSAI License"],
      gradient: "bg-gradient-success"
    },
    {
      category: "Property & Assets",
      icon: "fas fa-home",
      items: ["Property Registration", "Building Plan Approval", "Mutation Certificate", "Encumbrance Certificate"],
      gradient: "bg-gradient-primary"
    },
    {
      category: "Citizen Services",
      icon: "fas fa-users",
      items: ["Passport", "Driving License", "Voter ID", "Ration Card"],
      gradient: "bg-gradient-accent"
    },
    {
      category: "Women & Social",
      icon: "fas fa-female",
      items: ["Women Welfare Schemes", "Senior Citizen Benefits", "Disability Certificates", "Scholarship Applications"],
      gradient: "bg-gradient-success"
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-black text-foreground mb-6 font-display">Government Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access 500+ government services across central, state, and local departments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.category}
              className="glass-card rounded-2xl p-8 hover-lift animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <i className={`${service.icon} text-primary-foreground text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">{service.category}</h3>
              
              <ul className="space-y-3 mb-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full btn-primary text-primary-foreground py-3 rounded-lg font-semibold">
                <i className="fas fa-arrow-right mr-2"></i>
                View All Services
              </button>
            </div>
          ))}
        </div>
        
        {/* Quick Actions */}
        <div className="mt-16 glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Quick Actions</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <button className="flex flex-col items-center p-6 rounded-xl hover:bg-secondary/20 transition-all hover-lift group">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-search text-accent-foreground text-2xl"></i>
              </div>
              <span className="font-semibold text-foreground">Search Services</span>
              <span className="text-sm text-muted-foreground mt-1">Find by keywords</span>
            </button>
            
            <button className="flex flex-col items-center p-6 rounded-xl hover:bg-secondary/20 transition-all hover-lift group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-bookmark text-primary-foreground text-2xl"></i>
              </div>
              <span className="font-semibold text-foreground">Saved Applications</span>
              <span className="text-sm text-muted-foreground mt-1">Continue drafts</span>
            </button>
            
            <button className="flex flex-col items-center p-6 rounded-xl hover:bg-secondary/20 transition-all hover-lift group">
              <div className="w-16 h-16 bg-gradient-success rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-history text-success-foreground text-2xl"></i>
              </div>
              <span className="font-semibold text-foreground">Application History</span>
              <span className="text-sm text-muted-foreground mt-1">View past submissions</span>
            </button>
            
            <button className="flex flex-col items-center p-6 rounded-xl hover:bg-secondary/20 transition-all hover-lift group">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-headset text-accent-foreground text-2xl"></i>
              </div>
              <span className="font-semibold text-foreground">Help & Support</span>
              <span className="text-sm text-muted-foreground mt-1">Get assistance</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;