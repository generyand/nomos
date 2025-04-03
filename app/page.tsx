import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import HeroAnimation from './components/HeroAnimation';

export default function Home() {
  const features = [
    {
      icon: "file.svg",
      title: "Document Parsing",
      description: "Automated extraction and analysis of legal documents with precision and speed"
    },
    {
      icon: "window.svg",
      title: "Risk Assessment",
      description: "Advanced AI algorithms highlight potential risks and flag critical clauses" 
    },
    {
      icon: "globe.svg",
      title: "Smart Categorization",
      description: "Intelligently organize and tag documents based on content and context"
    },
    {
      icon: "file.svg",
      title: "Summary Generation",
      description: "Create concise summaries of complex legal documents in seconds"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="absolute inset-0">
          <HeroAnimation />
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white drop-shadow-sm">
              AI-Powered Legal<br />Document Analysis
            </h1>
            <p className="text-xl mb-8 text-white/90 drop-shadow-sm">
              Streamline your legal workflow with advanced artificial intelligence that extracts insights, identifies risks, and transforms complex documents into actionable intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-md">
                Request Demo
              </Link>
              <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-sm">
                Pricing
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-3/5 max-w-lg">
              <div className="absolute -top-5 -left-5 w-72 h-72 bg-secondary/60 rounded-full mix-blend-soft-light filter blur-2xl opacity-60 animate-blob"></div>
              <div className="absolute -bottom-5 -right-5 w-72 h-72 bg-secondary-light/60 rounded-full mix-blend-soft-light filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
              <div className="relative bg-white/10 backdrop-blur-sm px-4 py-6 rounded-2xl shadow-xl">
                <Image 
                  src="/nomos-logo.png" 
                  alt="Nomos Platform" 
                  width={400} 
                  height={300}
                  className="relative rounded-2xl shadow-lg w-full h-auto object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nomos transforms how legal professionals handle documents with cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="inline-block p-4 bg-secondary-light rounded-lg mb-5">
                  <Image src={`/${feature.icon}`} alt={feature.title} width={24} height={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform streamlines your legal document workflow in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-light text-primary text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Upload</h3>
              <p className="text-gray-600">Securely upload your legal documents through our intuitive interface</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-light text-primary text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Analyze</h3>
              <p className="text-gray-600">Our AI engine processes and analyzes the content with precision</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-light text-primary text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Review</h3>
              <p className="text-gray-600">Receive comprehensive insights, summaries, and risk assessments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-gray-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl font-medium mb-6">
              "Nomos has revolutionized our legal department's efficiency. We've reduced document review time by 70% while improving our risk assessment accuracy."
            </p>
            <div className="font-medium">
              <div className="text-secondary">Sarah Johnson</div>
              <div className="text-gray-400">General Counsel, Fortune 500 Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Legal Workflow?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join leading law firms and corporate legal departments using Nomos to streamline their document analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/demo" className="bg-white text-primary hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Schedule Demo
            </Link>
            <Link href="/signup" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/nomos-logo.png" alt="Nomos Logo" width={40} height={40} className="text-white rounded-lg" />
                <span className="font-bold text-2xl text-white tracking-tight">NOMOS</span>
              </div>
              <p className="max-w-xs">AI-powered legal document analysis for the modern legal professional.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-white font-semibold mb-4">Product</h5>
                <ul className="space-y-2">
                  <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                  <li><Link href="/demo" className="hover:text-white transition">Demo</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-4">Company</h5>
                <ul className="space-y-2">
                  <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-4">Resources</h5>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                  <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
                  <li><Link href="/legal" className="hover:text-white transition">Legal</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Nomos. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}