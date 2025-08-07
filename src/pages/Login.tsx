import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState('aadhaar');
  const [formData, setFormData] = useState({
    aadhaar: '',
    mobile: '',
    otp: '',
    email: '',
    password: ''
  });
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login process
    if (step === 1 && (loginMethod === 'aadhaar' || loginMethod === 'mobile')) {
      setStep(2); // Go to OTP verification
    } else {
      // Complete login and redirect to dashboard
      navigate('/dashboard');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className="fas fa-user text-primary-foreground text-3xl"></i>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to EasyBiz</h1>
              <p className="text-black">Choose your preferred login method</p>
            </div>

            {/* Login Method Selector */}
            <div className="flex space-x-2 mb-8">
              {[
                { id: 'aadhaar', label: 'Aadhaar', icon: 'fas fa-id-card' },
                { id: 'mobile', label: 'Mobile', icon: 'fas fa-mobile-alt' },
                { id: 'digilocker', label: 'DigiLocker', icon: 'fas fa-folder' },
                { id: 'email', label: 'Email', icon: 'fas fa-envelope' }
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => {
                    setLoginMethod(method.id);
                    setStep(1);
                  }}
                  className={`flex-1 p-3 rounded-xl font-semibold text-sm transition-all ${
                    loginMethod === method.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  <i className={`${method.icon} mb-1 block`}></i>
                  <span>{method.label}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {loginMethod === 'aadhaar' && (
                <div>
                  {step === 1 ? (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Aadhaar Number
                      </label>
                      <input
                        type="text"
                        name="aadhaar"
                        value={formData.aadhaar}
                        onChange={handleInputChange}
                        placeholder="Enter 12-digit Aadhaar number"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        required
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        name="otp"
                        value={formData.otp}
                        onChange={handleInputChange}
                        placeholder="Enter 6-digit OTP"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        required
                      />
                      <p className="text-sm text-black mt-2">
                        OTP sent to your registered mobile number
                      </p>
                    </div>
                  )}
                </div>
              )}

              {loginMethod === 'mobile' && (
                <div>
                  {step === 1 ? (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter 10-digit mobile number"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        required
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        name="otp"
                        value={formData.otp}
                        onChange={handleInputChange}
                        placeholder="Enter 6-digit OTP"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        required
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        OTP sent to {formData.mobile}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {loginMethod === 'digilocker' && (
                <div className="text-center">
                  <div className="mb-6">
                    <i className="fas fa-folder text-6xl text-accent mb-4 block"></i>
                                          <p className="text-black">
                        You will be redirected to DigiLocker for secure authentication
                      </p>
                  </div>
                </div>
              )}

              {loginMethod === 'email' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover-lift shadow-lg"
              >
                {step === 1 && (loginMethod === 'aadhaar' || loginMethod === 'mobile') 
                  ? 'Send OTP' 
                  : loginMethod === 'digilocker' 
                  ? 'Connect with DigiLocker'
                  : 'Login'
                }
              </button>

              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full glass-card border border-border text-foreground py-3 rounded-xl font-semibold hover:border-accent transition-all"
                >
                  Back
                </button>
              )}
            </form>

            <div className="mt-8 text-center">
              <p className="text-black">
                New user?{' '}
                <button 
                  onClick={() => navigate('/register')}
                  className="text-gradient-accent font-semibold hover:underline"
                >
                  Register here
                </button>
              </p>
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-accent/10 rounded-xl">
              <div className="flex items-start space-x-3">
                <i className="fas fa-shield-alt text-accent text-lg mt-1"></i>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Secure Login</h4>
                  <p className="text-sm text-black">
                    Your data is protected with bank-level security and end-to-end encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;