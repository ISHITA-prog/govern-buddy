const Footer = () => {
  const footerLinks = {
    services: [
      "Business Licenses",
      "Tax Filing",
      "Property Registration",
      "Citizen Services",
      "MSME Support",
      "Social Schemes"
    ],
    resources: [
      "Help Center",
      "Application Forms",
      "Document Checklist",
      "Video Tutorials",
      "FAQ",
      "Contact Support"
    ],
    about: [
      "About ComplianceGPT",
      "Privacy Policy",
      "Terms of Service",
      "Security",
      "Careers",
      "Press"
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <i className="fas fa-brain text-primary-foreground text-xl"></i>
              </div>
              <span className="text-2xl font-bold font-display">ComplianceGPT</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              India's first AI-powered government services portal. Simplifying compliance, 
              empowering citizens, and building digital India one application at a time.
            </p>
            <div className="flex space-x-4 mb-6">
              <button className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <i className="fab fa-twitter text-primary-foreground"></i>
              </button>
              <button className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <i className="fab fa-linkedin text-primary-foreground"></i>
              </button>
              <button className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <i className="fab fa-youtube text-primary-foreground"></i>
              </button>
              <button className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <i className="fab fa-instagram text-primary-foreground"></i>
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <i className="fas fa-shield-alt mr-2 text-accent"></i>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-lock mr-2 text-accent"></i>
                <span>SSL Secured</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/70">
                Get the latest news about new schemes, policy updates, and platform features.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/70 text-sm mb-4 md:mb-0">
              © 2024 ComplianceGPT. All rights reserved. | Made with ❤️ for Digital India
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <i className="fas fa-users mr-2 text-accent"></i>
                <span>50,000+ Happy Users</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-star mr-2 text-accent"></i>
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock mr-2 text-accent"></i>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;