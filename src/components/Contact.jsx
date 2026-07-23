import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Github = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import confetti from 'canvas-confetti';

export default function Contact({ currentMode }) {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      
      // Fire confetti burst!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: currentMode === 'sde' ? ['#6366f1', '#8b5cf6', '#3b82f6'] : ['#10b981', '#06b6d4', '#14b8a6']
      });

      // Reset form
      setFormState({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const accentColor = currentMode === 'sde' ? 'text-indigo-400' : 'text-emerald-400';
  const borderTheme = currentMode === 'sde' ? 'border-indigo-500/20' : 'border-emerald-500/20';
  const borderHover = currentMode === 'sde' ? 'hover:border-indigo-500/40' : 'hover:border-emerald-500/40';
  const bgBadge = currentMode === 'sde' ? 'bg-indigo-950/20' : 'bg-emerald-950/20';
  
  const submitBtnStyle = () => {
    if (currentMode === 'sde') {
      return 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20';
    }
    return 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20';
  };

  const contactDetails = [
    {
      label: 'Email Address',
      value: 'priyanjulsonkar@gmail.com',
      href: 'mailto:priyanjulsonkar@gmail.com',
      icon: <Mail size={20} />,
      id: 'contact-email-card'
    },
    {
      label: 'Phone Number',
      value: '+91-8932049699',
      href: 'tel:+918932049699',
      icon: <Phone size={20} />,
      id: 'contact-phone-card'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/priyanjul-sonkar-073277282',
      href: 'https://linkedin.com/in/priyanjul-sonkar-073277282',
      icon: <Linkedin size={20} />,
      id: 'contact-linkedin-card'
    },
    {
      label: 'GitHub Profile',
      value: 'https://github.com/priyanjul-beep',
      href: 'https://github.com/priyanjul-beep',
      icon: <Github size={20} />,
      id: 'contact-github-card'
    }
  ];

  return (
    <section id="contact" className="py-20 border-t border-slate-900 bg-slate-950/20 relative">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full filter blur-[150px] opacity-10 bg-indigo-500/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className={accentColor}>Touch</span>
          </h2>
          <div className={`h-1 w-12 mx-auto mt-3 rounded-full ${
            currentMode === 'sde' ? 'bg-indigo-500' : 'bg-emerald-500'
          }`} />
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Have a project in mind, a job opportunity, or just want to chat? Reach out directly or drop a message through the form.
          </p>
        </div>

        {/* Form & Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">
            
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">Contact Information</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Feel free to connect on social platforms or call directly. Open to backend, systems programming, and machine learning engineer roles.
              </p>
            </div>

            <div className="space-y-4 flex-grow flex flex-col justify-around">
              {contactDetails.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  id={item.id}
                  className={`glass-card p-4 rounded-xl border ${borderTheme} ${borderHover} transition-all duration-300 flex items-center gap-4 group`}
                >
                  <div className={`p-2.5 rounded-lg ${bgBadge} ${accentColor} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      {item.label}
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-slate-200 truncate mt-0.5 group-hover:text-white">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <div className={`glass-card p-6 sm:p-8 rounded-2xl border ${borderTheme} text-left`}>
              
              <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

              {isSent ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                  <div className={`p-4 rounded-full bg-slate-900 border ${borderTheme} ${accentColor}`}>
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 placeholder-slate-650 text-sm focus:outline-none focus:border-slate-700 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 placeholder-slate-650 text-sm focus:outline-none focus:border-slate-700 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Collaboration opportunity..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 placeholder-slate-650 text-sm focus:outline-none focus:border-slate-700 transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Hi Priyanjul, I would love to connect about..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 placeholder-slate-650 text-sm focus:outline-none focus:border-slate-700 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    id="submit-message-btn"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                      submitBtnStyle()
                    } disabled:opacity-50 disabled:transform-none`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
