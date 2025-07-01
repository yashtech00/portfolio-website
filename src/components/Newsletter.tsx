
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="mb-16">
      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-500/20 rounded-full">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Subscribe to get notified about my latest projects and tech insights
        </p>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors text-sm"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-1 text-sm"
            >
              <Send size={14} />
              Subscribe
            </button>
          </form>
        ) : (
          <div className="text-green-400 text-sm">
            ✓ Thank you for subscribing! You'll hear from me soon.
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
