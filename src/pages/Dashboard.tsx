import { useState } from "react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiMessages, setAiMessages] = useState<Array<{type: 'user' | 'ai', content: string}>>([]);
  const [aiInput, setAiInput] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const navigate = useNavigate();

  const applications = [
    {
      id: "TL/2024/001234",
      type: "Trade License",
      status: "approved",
      progress: 100,
      dateApplied: "2024-01-15",
      lastUpdate: "2024-02-01"
    },
    {
      id: "NOC/2024/005678",
      type: "Fire NOC",
      status: "pending",
      progress: 75,
      dateApplied: "2024-01-20",
      lastUpdate: "2024-01-28"
    },
    {
      id: "ENV/2024/009876",
      type: "Environmental Clearance",
      status: "pending",
      progress: 30,
      dateApplied: "2024-01-25",
      lastUpdate: "2024-01-30"
    }
  ];

  const licenses = [
    {
      id: "TL-2024-001",
      name: "Trade License",
      validUntil: "2025-02-01",
      status: "active",
      daysToExpiry: 180
    },
    {
      id: "GST-2024-002",
      name: "GST Registration",
      validUntil: "2025-03-15",
      status: "active",
      daysToExpiry: 220
    },
    {
      id: "FSSAI-2024-003",
      name: "FSSAI License",
      validUntil: "2024-12-31",
      status: "expiring",
      daysToExpiry: 45
    }
  ];

  const profile = {
    name: "Rajesh Kumar",
    businessName: "Green Tech Solutions Pvt Ltd",
    businessType: "Manufacturing",
    stage: "Expansion Phase",
    location: "Bangalore, Karnataka",
    panNumber: "ABCDE1234F",
    gstNumber: "29ABCDE1234F1Z5",
    aadharVerified: true,
    documentsUploaded: 12,
    completionPercentage: 85
  };

  const pendingTasks = [
    "Upload Environmental Impact Assessment report",
    "Submit Fire Safety Compliance Certificate",
    "Renew FSSAI License (expires in 45 days)",
    "Complete GST Annual Return filing"
  ];

  const investorInterest = [
    {
      investor: "Green Ventures Capital",
      amount: "₹75 Lakhs",
      stage: "Due Diligence",
      contact: "Pending approval"
    },
    {
      investor: "Sustainable Growth Partners",
      amount: "₹1.2 Crores",
      stage: "Initial Interest",
      contact: "Meeting scheduled"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': case 'active': return 'status-approved';
      case 'pending': return 'status-pending';
      case 'expiring': return 'status-rejected';
      default: return 'status-pending';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'Approved';
      case 'pending': return 'Pending';
      case 'active': return 'Active';
      case 'expiring': return 'Expiring';
      case 'rejected': return 'Rejected';
      default: return 'Pending';
    }
  };

  const handleAiSend = async (message: string) => {
    if (!message.trim()) return;
    
    const userMessage = { type: 'user' as const, content: message };
    setAiMessages(prev => [...prev, userMessage]);
    setAiInput('');
    setIsAiTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAiResponse(message);
      setAiMessages(prev => [...prev, { type: 'ai', content: aiResponse }]);
      setIsAiTyping(false);
    }, 1500);
  };

  const generateAiResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('dpcc') || lowerMessage.includes('consent')) {
      return "To apply for DPCC consent, you need: 1) Environmental Impact Assessment report, 2) Pollution control measures plan, 3) Site location details, 4) Process flow diagram. The application takes 30-45 days for approval. Would you like me to help you start the application?";
    }
    
    if (lowerMessage.includes('mcd') || lowerMessage.includes('license')) {
      return "For MCD licensing, you need: 1) Trade license application form, 2) Property ownership/rental documents, 3) NOC from fire department, 4) Health department clearance. Processing time is 15-20 working days. I can help you track your application status.";
    }
    
    if (lowerMessage.includes('gst') || lowerMessage.includes('registration')) {
      return "GST registration requires: 1) PAN card, 2) Aadhaar card, 3) Business address proof, 4) Bank account details, 5) Digital signature. The process takes 3-7 working days. Would you like me to guide you through the process?";
    }
    
    if (lowerMessage.includes('startup') || lowerMessage.includes('delhi')) {
      return "Startup Delhi registration benefits include: 1) Tax exemptions, 2) Fast-track approvals, 3) Networking opportunities, 4) Mentorship programs. Eligibility: Business less than 5 years old, annual turnover under ₹25 crores. Should I help you apply?";
    }
    
    if (lowerMessage.includes('business') || lowerMessage.includes('scheme')) {
      return "Based on your business profile, I recommend these schemes: 1) PMEGP (Prime Minister's Employment Generation Programme) - for manufacturing, 2) MUDRA Yojana - for micro enterprises, 3) Stand-Up India - for women entrepreneurs, 4) Startup India Seed Fund. Would you like details on any specific scheme?";
    }
    
    return "I'm here to help with government services! You can ask me about license applications, document requirements, scheme eligibility, or application tracking. What would you like to know?";
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Welcome back, {profile.name}
                </h1>
                <p className="text-white/90">{profile.businessName}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gradient-accent">{profile.completionPercentage}%</div>
                <div className="text-sm text-white/90">Profile Complete</div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => navigate('/')}
                  className="btn-accent text-accent-foreground px-4 py-2 rounded-lg text-sm hover:scale-105 transition-all"
                >
                  <i className="fas fa-sign-out-alt mr-2"></i>Logout
                </button>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="glass-card rounded-2xl p-2 mb-8">
            <div className="flex space-x-2">
              {[
                { id: 'overview', label: 'Overview', icon: 'fas fa-chart-pie' },
                { id: 'applications', label: 'Applications', icon: 'fas fa-file-alt' },
                { id: 'licenses', label: 'Licenses', icon: 'fas fa-certificate' },
                { id: 'services', label: 'Services', icon: 'fas fa-cogs' },
                { id: 'ai-assistant', label: 'AI Assistant', icon: 'fas fa-robot' },
                { id: 'track-applications', label: 'Track Applications', icon: 'fas fa-search' },
                { id: 'profile', label: 'Profile', icon: 'fas fa-user' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-white hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Active Applications</h3>
                    <i className="fas fa-file-alt text-accent text-xl"></i>
                  </div>
                  <div className="text-3xl font-black text-gradient-accent">2</div>
                  <div className="text-sm text-white/90">In progress</div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Valid Licenses</h3>
                    <i className="fas fa-certificate text-success text-xl"></i>
                  </div>
                  <div className="text-3xl font-black text-gradient-accent">3</div>
                  <div className="text-sm text-white/90">All current</div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Pending Tasks</h3>
                    <i className="fas fa-tasks text-warning text-xl"></i>
                  </div>
                  <div className="text-3xl font-black text-gradient-accent">4</div>
                  <div className="text-sm text-white/90">Need attention</div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Business Score</h3>
                    <i className="fas fa-star text-primary text-xl"></i>
                  </div>
                  <div className="text-3xl font-black text-gradient-accent">85</div>
                  <div className="text-sm text-white/90">Excellent rating</div>
                </div>
              </div>

              {/* Pending Tasks */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Pending Tasks</h3>
                <div className="space-y-4">
                  {pendingTasks.map((task, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-secondary/50 transition-all">
                      <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
                        <i className="fas fa-exclamation text-warning text-sm"></i>
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground">{task}</span>
                      </div>
                      <button className="btn-primary text-primary-foreground px-4 py-2 rounded-lg text-sm">
                        Complete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="space-y-6">
              {applications.map((app) => (
                <div key={app.id} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{app.type}</h3>
                                             <p className="text-black">Application #{app.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Progress</span>
                                             <span className="text-sm text-black">{app.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${app.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                         <div>
                       <span className="text-black">Applied:</span>
                       <div className="font-semibold text-foreground">{app.dateApplied}</div>
                     </div>
                     <div>
                       <span className="text-black">Last Update:</span>
                       <div className="font-semibold text-foreground">{app.lastUpdate}</div>
                     </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="btn-primary text-primary-foreground px-4 py-2 rounded-lg text-sm">
                      View Details
                    </button>
                    <button className="glass-card border border-border text-foreground px-4 py-2 rounded-lg text-sm hover:border-accent">
                      Track Progress
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'licenses' && (
            <div className="space-y-6">
              {licenses.map((license) => (
                <div key={license.id} className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{license.name}</h3>
                                             <p className="text-black">License #{license.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(license.status)}`}>
                      {license.status.charAt(0).toUpperCase() + license.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                         <div>
                       <span className="text-black">Valid Until:</span>
                       <div className="font-semibold text-foreground">{license.validUntil}</div>
                     </div>
                     <div>
                       <span className="text-black">Days to Expiry:</span>
                       <div className={`font-semibold ${license.daysToExpiry < 60 ? 'text-destructive' : 'text-foreground'}`}>
                         {license.daysToExpiry} days
                       </div>
                     </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="btn-primary text-primary-foreground px-4 py-2 rounded-lg text-sm">
                      <i className="fas fa-download mr-2"></i>Download
                    </button>
                    {license.daysToExpiry < 90 && (
                      <button className="btn-accent text-accent-foreground px-4 py-2 rounded-lg text-sm">
                        <i className="fas fa-refresh mr-2"></i>Renew Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">Business Profile</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                                     <div>
                     <label className="text-sm text-black">Business Name</label>
                     <div className="font-semibold text-foreground text-lg">{profile.businessName}</div>
                   </div>
                   
                   <div>
                     <label className="text-sm text-black">Business Type</label>
                     <div className="font-semibold text-foreground text-lg">{profile.businessType}</div>
                   </div>
                   
                   <div>
                     <label className="text-sm text-black">Current Stage</label>
                     <div className="font-semibold text-foreground text-lg">{profile.stage}</div>
                   </div>
                   
                   <div>
                     <label className="text-sm text-black">Location</label>
                     <div className="font-semibold text-foreground text-lg">{profile.location}</div>
                   </div>
                </div>

                                 <div className="space-y-6">
                   <div>
                     <label className="text-sm text-black">PAN Number</label>
                     <div className="font-semibold text-foreground text-lg">{profile.panNumber}</div>
                   </div>
                   
                   <div>
                     <label className="text-sm text-black">GST Number</label>
                     <div className="font-semibold text-foreground text-lg">{profile.gstNumber}</div>
                   </div>
                   
                   <div>
                     <label className="text-sm text-black">Documents Uploaded</label>
                     <div className="font-semibold text-foreground text-lg">{profile.documentsUploaded}</div>
                   </div>
                   
                   <div>
                     <label className="text-sm text-black">Aadhaar Verification</label>
                     <div className="flex items-center space-x-2">
                       <i className="fas fa-check-circle text-success"></i>
                       <span className="font-semibold text-success">Verified</span>
                     </div>
                   </div>
                 </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <button className="btn-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold">
                  <i className="fas fa-edit mr-2"></i>Edit Profile
                </button>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Government Services</h2>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="px-4 py-2 rounded-xl bg-background/80 border border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-foreground"
                  />
                  <select className="px-4 py-2 rounded-xl bg-background/80 border border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-foreground">
                    <option value="">All Categories</option>
                    <option value="startup">Startup</option>
                    <option value="msme">MSME</option>
                    <option value="logistics">Logistics</option>
                    <option value="licensing">Licensing</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "DSIIDC Registration",
                    category: "Industrial",
                    description: "Delhi State Industrial and Infrastructure Development Corporation registration",
                    icon: "fas fa-industry",
                    status: "Available"
                  },
                  {
                    name: "MCD Licensing",
                    category: "Licensing",
                    description: "Municipal Corporation of Delhi business licensing services",
                    icon: "fas fa-building",
                    status: "Available"
                  },
                  {
                    name: "DPCC Approval",
                    category: "Industrial",
                    description: "Delhi Pollution Control Committee environmental clearance",
                    icon: "fas fa-leaf",
                    status: "Available"
                  },
                  {
                    name: "Startup Delhi Registration",
                    category: "Startup",
                    description: "Delhi government startup recognition and support",
                    icon: "fas fa-rocket",
                    status: "Available"
                  },
                  {
                    name: "MSME Registration",
                    category: "MSME",
                    description: "Ministry of MSME registration and certification",
                    icon: "fas fa-certificate",
                    status: "Available"
                  },
                  {
                    name: "Trade License",
                    category: "Licensing",
                    description: "Municipal trade license for business operations",
                    icon: "fas fa-store",
                    status: "Available"
                  }
                ].map((service, index) => (
                  <div key={index} className="glass-card rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg">
                        <i className={`${service.icon} text-primary text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">{service.name}</h3>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                          {service.category}
                        </span>
                      </div>
                    </div>
                                         <p className="text-black text-sm mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-green-500 text-sm font-medium">{service.status}</span>
                      <button className="bg-accent text-primary px-4 py-2 rounded-xl font-semibold hover:bg-accent-light transition-colors text-sm">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'ai-assistant' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">AI Assistant</h2>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-500 font-medium">AI Online</span>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-6 border border-accent/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg">
                    <i className="fas fa-robot text-primary text-xl"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">EasyBiz AI Assistant</h3>
                                         <p className="text-black">Ask me anything about government services, applications, or compliance requirements.</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {aiMessages.length === 0 && (
                    <div className="bg-background/50 rounded-xl p-4">
                      <p className="text-foreground text-sm mb-3">💡 <strong>Example queries:</strong></p>
                      <div className="grid gap-2">
                        <button 
                          onClick={() => handleAiSend("How to apply for DPCC consent?")}
                          className="text-left text-sm text-accent hover:text-accent-light transition-colors"
                        >
                          "How to apply for DPCC consent?"
                        </button>
                        <button 
                          onClick={() => handleAiSend("Track my MCD license application")}
                          className="text-left text-sm text-accent hover:text-accent-light transition-colors"
                        >
                          "Track my MCD license application"
                        </button>
                        <button 
                          onClick={() => handleAiSend("What documents are needed for GST registration?")}
                          className="text-left text-sm text-accent hover:text-accent-light transition-colors"
                        >
                          "What documents are needed for GST registration?"
                        </button>
                        <button 
                          onClick={() => handleAiSend("Check eligibility for Startup Delhi registration")}
                          className="text-left text-sm text-accent hover:text-accent-light transition-colors"
                        >
                          "Check eligibility for Startup Delhi registration"
                        </button>
                        <button 
                          onClick={() => handleAiSend("What schemes are available for my business?")}
                          className="text-left text-sm text-accent hover:text-accent-light transition-colors"
                        >
                          "What schemes are available for my business?"
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {aiMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl ${
                        msg.type === 'user' 
                          ? 'bg-accent text-primary' 
                          : 'bg-background/50 text-foreground'
                      }`}>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  
                  {isAiTyping && (
                    <div className="flex justify-start">
                      <div className="bg-background/50 text-foreground px-4 py-3 rounded-xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <input
                    type="text"
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAiSend(aiInput)}
                    placeholder="Ask me anything about government services..."
                    className="flex-1 px-4 py-3 rounded-xl bg-background/80 border border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-foreground"
                  />
                  <button 
                    onClick={() => handleAiSend(aiInput)}
                    className="bg-accent text-primary px-6 py-3 rounded-xl font-semibold hover:bg-accent-light transition-colors"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                  <button className="bg-secondary text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-secondary-dark transition-colors">
                    <i className="fas fa-microphone"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'track-applications' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Track Applications</h2>
                <button className="bg-accent text-primary px-4 py-2 rounded-xl font-semibold hover:bg-accent-light transition-colors">
                  <i className="fas fa-plus mr-2"></i>New Application
                </button>
              </div>
              
              <div className="space-y-6">
                {applications.map((app) => (
                  <div key={app.id} className="glass-card rounded-2xl p-6 border border-accent/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{app.type}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                            {getStatusText(app.status)}
                          </span>
                        </div>
                                                 <p className="text-black text-sm mb-2">ID: {app.id}</p>
                         <div className="flex items-center gap-4 mt-3 text-sm text-black">
                           <span>Applied: {app.dateApplied}</span>
                           <span>Updated: {app.lastUpdate}</span>
                         </div>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-foreground">{app.progress}%</div>
                                                     <div className="text-sm text-black">Complete</div>
                        </div>
                        <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all ${
                              app.status === 'approved' ? 'bg-green-500' : 
                              app.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${app.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex gap-3">
                        <button className="bg-accent text-primary px-4 py-2 rounded-xl font-semibold hover:bg-accent-light transition-colors text-sm">
                          <i className="fas fa-eye mr-2"></i>View Details
                        </button>
                        <button className="bg-secondary text-foreground px-4 py-2 rounded-xl font-semibold hover:bg-secondary-dark transition-colors text-sm">
                          <i className="fas fa-upload mr-2"></i>Upload Documents
                        </button>
                        <button className="bg-warning text-warning-foreground px-4 py-2 rounded-xl font-semibold hover:bg-warning/80 transition-colors text-sm">
                          <i className="fas fa-edit mr-2"></i>Request Revision
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'investors' && (
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Investor Inquiries</h3>
                
                {investorInterest.map((inquiry, index) => (
                  <div key={index} className="border-b border-border last:border-b-0 pb-6 last:pb-0 mb-6 last:mb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{inquiry.investor}</h4>
                                                 <p className="text-black">Investment Amount: {inquiry.amount}</p>
                      </div>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {inquiry.stage}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                                             <span className="text-sm text-black">{inquiry.contact}</span>
                      <div className="space-x-3">
                        <button className="btn-primary text-primary-foreground px-4 py-2 rounded-lg text-sm">
                          View Details
                        </button>
                        <button className="glass-card border border-border text-foreground px-4 py-2 rounded-lg text-sm hover:border-accent">
                          Schedule Meeting
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;