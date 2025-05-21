import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import HeroAnimation from './components/HeroAnimation';
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/app/components/ui/hover-card";
import { Separator } from "@/app/components/ui/separator";

export default function Home() {
  const features = [
    {
      icon: "file.svg",
      title: "Document Parsing",
      description: "Automated extraction and analysis of legal documents with precision and speed",
      details: "Our AI-powered system can process complex legal documents, contracts, and agreements with high accuracy and speed."
    },
    {
      icon: "window.svg",
      title: "Risk Assessment",
      description: "Advanced AI algorithms highlight potential risks and flag critical clauses",
      details: "Get instant risk analysis and recommendations for mitigating potential legal issues."
    },
    {
      icon: "globe.svg",
      title: "Smart Categorization",
      description: "Intelligently organize and tag documents based on content and context",
      details: "Automatically categorize and tag documents for easy retrieval and management."
    },
    {
      icon: "file.svg",
      title: "Summary Generation",
      description: "Create concise summaries of complex legal documents in seconds",
      details: "Generate comprehensive summaries that capture the essence of lengthy legal documents."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="absolute inset-0">
          <HeroAnimation />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 py-20">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <span className="flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-secondary-light opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-light"></span>
                  </span>
                  <p className="text-sm font-medium text-white/90">Powered by Advanced AI Technology</p>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                  <span className="block text-white drop-shadow-sm">
                    AI-Powered Legal
                  </span>
                  <span className="block mt-2 text-white relative">
                    <span className="absolute -inset-x-2 inset-y-0 bg-gradient-to-r from-secondary/50 to-secondary-light/50 blur-2xl"></span>
                    <span className="relative">Document Analysis</span>
                  </span>
                </h1>
              </div>

              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Streamline your legal workflow with advanced artificial intelligence that extracts insights, 
                identifies risks, and transforms complex documents into actionable intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-xl hover:shadow-secondary/25 transition-all duration-300">
                  <Link href="/demo" className="flex items-center justify-center gap-2">
                    Request Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-semibold">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>

            </div>

            {/* Right Content - Hero Image/Animation - Hidden on mobile */}
            <div className="hidden md:flex md:w-1/2 justify-center md:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Animated Blobs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -right-4 -top-4 w-72 h-72 bg-secondary-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                {/* Main Content Card */}
                <Card className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="relative aspect-[4/3] w-full">
                      <Image 
                        src="/nomos-logo.png" 
                        alt="Nomos Platform" 
                        fill
                        className="object-contain" 
                      />
                    </div>
                    {/* Interactive Elements */}
                    <div className="absolute -bottom-4 -right-4 transform translate-x-1/2 translate-y-1/2">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary text-white shadow-lg transform rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave - Only visible on desktop */}
        <div className="absolute -bottom-24 left-0 right-0 hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nomos transforms how legal professionals handle documents with cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <CardHeader>
                      <div className="inline-block p-4 bg-secondary-light rounded-lg mb-5">
                        <Image src={`/${feature.icon}`} alt={feature.title} width={24} height={24} className="text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-primary">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.details}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform streamlines your legal document workflow in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Upload",
                description: "Securely upload your legal documents through our intuitive interface"
              },
              {
                step: "2",
                title: "Analyze",
                description: "Our AI engine processes and analyzes the content with precision"
              },
              {
                step: "3",
                title: "Review",
                description: "Receive comprehensive insights, summaries, and risk assessments"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-light text-primary text-2xl font-bold mb-6">
                    {item.step}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-3 text-primary">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-gray-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              &ldquo;Nomos has revolutionized our legal department&apos;s efficiency. We&apos;ve reduced document review time by 70% while improving our risk assessment accuracy.&rdquo;
            </p>
            <div className="font-medium">
              <div className="text-secondary text-xl">Sarah Johnson</div>
              <div className="text-gray-400">General Counsel, Fortune 500 Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Legal Workflow?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join leading law firms and corporate legal departments using Nomos to streamline their document analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold shadow-lg">
              <Link href="/demo">Schedule Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold">
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image src="/nomos-logo.png" alt="Nomos Logo" width={40} height={40} className="text-white rounded-lg" />
                <span className="font-bold text-2xl text-white tracking-tight">NOMOS</span>
              </div>
              <p className="text-gray-400">AI-powered legal document analysis for the modern legal professional.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-6">Product</h5>
              <ul className="space-y-4">
                <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/demo" className="hover:text-white transition">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-6">Company</h5>
              <ul className="space-y-4">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-6">Resources</h5>
              <ul className="space-y-4">
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
                <li><Link href="/legal" className="hover:text-white transition">Legal</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="my-12 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Nomos. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}