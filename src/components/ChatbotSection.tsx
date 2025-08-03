import { useState } from "react";

const ChatbotSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m ComplianceGPT. How can I help you with government services today?',
      time: '10:30 AM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sampleQuestions = [
    "How to apply for trade license?",
    "What documents needed for GST registration?",
    "Tell me about MSME schemes",
    "Track my application status",
    "Help with property registration"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, {
        type: 'user',
        content: inputMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: 'I understand you\'re asking about "' + inputMessage + '". Let me help you with that. Based on your query, I can provide step-by-step guidance and required documents.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1000);
      
      setInputMessage('');
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 btn-accent text-accent-foreground rounded-full shadow-2xl hover-lift animate-glow relative"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-xl`}></i>
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
              3
            </div>
          )}
        </button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-40 animate-slide-up">
          <div className="glass-card rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-primary p-4 text-primary-foreground">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-robot text-lg"></i>
                </div>
                <div>
                  <div className="font-bold">ComplianceGPT</div>
                  <div className="text-sm opacity-90">
                    <i className="fas fa-circle text-success mr-1 text-xs"></i>
                    Online • Multilingual Support
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-gradient-accent text-accent-foreground' 
                      : 'bg-glass-card border border-glass-border text-foreground'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-border">
              <div className="mb-4">
                <div className="text-sm font-semibold text-foreground mb-2">Quick Questions:</div>
                <div className="space-y-2">
                  {sampleQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(question)}
                      className="w-full text-left px-3 py-2 text-xs bg-secondary/50 hover:bg-secondary rounded-lg transition-all text-foreground"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-accent text-sm bg-background text-foreground"
                />
                <button
                  onClick={handleSendMessage}
                  className="btn-accent text-accent-foreground px-4 py-3 rounded-xl"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>

              {/* Voice Input */}
              <div className="flex justify-center mt-3">
                <button className="flex items-center space-x-2 text-sm text-accent hover:text-accent-light transition-colors">
                  <i className="fas fa-microphone"></i>
                  <span>Voice Input</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Chatbot Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10" id="help">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-black text-foreground mb-6 font-display">AI-Powered Assistant</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get instant help in your preferred language. Voice-enabled support for accessibility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-language text-accent-foreground text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Multilingual Support</h3>
                    <p className="text-muted-foreground">
                      Communicate in Hindi, English, Tamil, Bengali, Marathi, and 8+ regional languages. 
                      Voice input available for hands-free interaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-brain text-primary-foreground text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Smart Understanding</h3>
                    <p className="text-muted-foreground">
                      Advanced AI understands complex queries, provides step-by-step guidance, 
                      and suggests relevant forms and documents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-success rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-success-foreground text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">24/7 Availability</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock assistance for urgent queries. Get immediate responses 
                      to application status, deadlines, and requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button 
                  onClick={() => setIsOpen(true)}
                  className="btn-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover-lift"
                >
                  <i className="fas fa-comments mr-3"></i>Start Chat
                </button>
                <button className="glass-card border-2 border-accent text-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all">
                  <i className="fas fa-microphone mr-3"></i>Voice Chat
                </button>
              </div>
            </div>

            <div className="animate-float">
              <div className="glass-card rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-robot text-accent-foreground text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">ComplianceGPT Assistant</div>
                    <div className="text-sm text-success">
                      <i className="fas fa-circle mr-1 text-xs"></i>
                      Active • Ready to help
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="text-sm text-muted-foreground">Popular questions today:</div>
                  {sampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setIsOpen(true)}
                      className="w-full text-left p-3 bg-secondary/30 hover:bg-secondary/50 rounded-lg transition-all text-sm text-foreground hover-lift"
                    >
                      <i className="fas fa-question-circle text-accent mr-2"></i>
                      {question}
                    </button>
                  ))}
                </div>

                <div className="border-t border-border pt-4">
                  <div className="text-center text-sm text-muted-foreground">
                    Average response time: <span className="text-accent font-semibold">2.3 seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatbotSection;