import { useState } from "react";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
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
                <p className="text-muted-foreground">{profile.businessName}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gradient-accent">{profile.completionPercentage}%</div>
                <div className="text-sm text-muted-foreground">Profile Complete</div>
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
                { id: 'profile', label: 'Profile', icon: 'fas fa-user' },
                { id: 'investors', label: 'Investor Interest', icon: 'fas fa-handshake' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
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
                  <div className="text-sm text-muted-foreground">In progress</div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Valid Licenses</h3>
                    <i className="fas fa-certificate text-success text-xl"></i>
                  </div>
                  <div className="text-3xl font-black text-gradient-accent">3</div>
                  <div className="text-sm text-muted-foreground">All current</div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Pending Tasks</h3>
                    <i className="fas fa-tasks text-warning text-xl"></i>
                  </div>
                  <div className="text-3xl font-black text-gradient-accent">4</div>
                  <div className="text-sm text-muted-foreground">Need attention</div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Investor Interest</h3>
                    <i className="fas fa-chart-line text-primary text-xl"></i>
                  </div>
                  <div className="text-3xl font-black text-gradient-accent">2</div>
                  <div className="text-sm text-muted-foreground">Active inquiries</div>
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
                      <p className="text-muted-foreground">Application #{app.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(app.status)}`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Progress</span>
                      <span className="text-sm text-muted-foreground">{app.progress}%</span>
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
                      <span className="text-muted-foreground">Applied:</span>
                      <div className="font-semibold text-foreground">{app.dateApplied}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Last Update:</span>
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
                      <p className="text-muted-foreground">License #{license.id}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(license.status)}`}>
                      {license.status.charAt(0).toUpperCase() + license.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-muted-foreground">Valid Until:</span>
                      <div className="font-semibold text-foreground">{license.validUntil}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Days to Expiry:</span>
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
                    <label className="text-sm text-muted-foreground">Business Name</label>
                    <div className="font-semibold text-foreground text-lg">{profile.businessName}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground">Business Type</label>
                    <div className="font-semibold text-foreground text-lg">{profile.businessType}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground">Current Stage</label>
                    <div className="font-semibold text-foreground text-lg">{profile.stage}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground">Location</label>
                    <div className="font-semibold text-foreground text-lg">{profile.location}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm text-muted-foreground">PAN Number</label>
                    <div className="font-semibold text-foreground text-lg">{profile.panNumber}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground">GST Number</label>
                    <div className="font-semibold text-foreground text-lg">{profile.gstNumber}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground">Documents Uploaded</label>
                    <div className="font-semibold text-foreground text-lg">{profile.documentsUploaded}</div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground">Aadhaar Verification</label>
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

          {activeTab === 'investors' && (
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Investor Inquiries</h3>
                
                {investorInterest.map((inquiry, index) => (
                  <div key={index} className="border-b border-border last:border-b-0 pb-6 last:pb-0 mb-6 last:mb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{inquiry.investor}</h4>
                        <p className="text-muted-foreground">Investment Amount: {inquiry.amount}</p>
                      </div>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {inquiry.stage}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{inquiry.contact}</span>
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