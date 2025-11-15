import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Zap, Palette, Smartphone, Brain, ArrowRight, CheckCircle, Globe, Bot, Brush, Monitor, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Professional websites and web applications built with modern technologies',
      features: [
        'Responsive business websites',
        'Landing pages that convert',
        'Custom dashboards',
        'Portfolio sites',
        'E-commerce platforms',
        'Progressive Web Apps (PWA)'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      startingPrice: '$1,500',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Automation Tools',
      description: 'Streamline your workflows and save time with custom automation solutions',
      features: [
        'WhatsApp business bots',
        'Workflow automation',
        'Web scraping tools',
        'Internal system integration',
        'Data processing automation',
        'Email marketing automation'
      ],
      technologies: ['Python', 'Zapier', 'API Integration', 'Webhooks', 'Cloud Functions'],
      startingPrice: '$800',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Design & Branding',
      description: 'Create a memorable brand identity that resonates with your audience',
      features: [
        'Logo design & brand identity',
        'Brand guidelines & style guides',
        'Color palette & typography',
        'Marketing materials',
        'Social media assets',
        'UI/UX design'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Principle', 'InVision'],
      startingPrice: '$600',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Custom Apps',
      description: 'Tailored web applications designed specifically for your business needs',
      features: [
        'Admin panels & dashboards',
        'Booking & scheduling systems',
        'Customer management tools',
        'Inventory management',
        'Project management apps',
        'Custom business tools'
      ],
      technologies: ['React', 'Vue.js', 'Database Design', 'API Development', 'Cloud Hosting'],
      startingPrice: '$2,500',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI / API Integration',
      description: 'Leverage artificial intelligence to enhance your business capabilities',
      features: [
        'ChatGPT-like chatbots',
        'Text summarization tools',
        'Code assistants',
        'Content generation',
        'Image processing AI',
        'Custom AI solutions'
      ],
      technologies: ['OpenAI API', 'Machine Learning', 'Natural Language Processing', 'TensorFlow', 'Python'],
      startingPrice: '$1,200',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your needs, goals, and requirements through detailed consultation.'
    },
    {
      step: '02',
      title: 'Design & Strategy',
      description: 'Create wireframes, mockups, and technical architecture for your project.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using modern technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing, deployment, and training to ensure smooth operation.'
    },
    {
      step: '05',
      title: 'Support & Growth',
      description: 'Ongoing maintenance, updates, and scaling as your business grows.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From web development to AI integration, we provide end-to-end services that drive growth and efficiency for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`${service.bgColor} rounded-3xl p-8 md:p-12`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-600">Starting from</span>
                        <div className="text-2xl font-bold text-gray-900">{service.startingPrice}</div>
                      </div>
                      <Button asChild className={`bg-gradient-to-r ${service.color} hover:opacity-90`}>
                        <Link to="/contact">
                          Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <Globe className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                          <div className="text-sm font-medium">Modern</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <Monitor className="w-8 h-8 mx-auto mb-2 text-green-600" />
                          <div className="text-sm font-medium">Responsive</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <Cpu className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                          <div className="text-sm font-medium">Scalable</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <Bot className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                          <div className="text-sm font-medium">Automated</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project requirements and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}