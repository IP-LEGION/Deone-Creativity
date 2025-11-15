import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const projects = [
    {
      title: 'TechStart Dashboard',
      category: 'Web Development',
      description: 'A comprehensive business dashboard with real-time analytics, user management, and automated reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      features: ['Real-time Analytics', 'User Management', 'Automated Reports', 'Mobile Responsive'],
      results: '300% increase in operational efficiency',
      link: '#',
      github: '#'
    },
    {
      title: 'AutoFlow Bot',
      category: 'Automation',
      description: 'WhatsApp automation bot that handles customer inquiries, appointment booking, and order processing for a local restaurant chain.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Python', 'WhatsApp API', 'MongoDB', 'AWS Lambda', 'Webhook Integration'],
      features: ['24/7 Customer Support', 'Appointment Booking', 'Order Processing', 'Multi-language Support'],
      results: 'Reduced response time by 90%',
      link: '#',
      github: '#'
    },
    {
      title: 'Creative Studio Rebrand',
      category: 'Design & Branding',
      description: 'Complete brand identity redesign for a creative agency, including logo, website, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Adobe Creative Suite', 'Brand Guidelines', 'Print Design', 'Web Design'],
      features: ['Logo Design', 'Brand Guidelines', 'Website Design', 'Marketing Materials'],
      results: '150% increase in client inquiries',
      link: '#',
      github: '#'
    },
    {
      title: 'BookingPro App',
      category: 'Custom App',
      description: 'Custom booking and scheduling application for service-based businesses with calendar integration and payment processing.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Stripe API', 'Google Calendar API', 'MongoDB'],
      features: ['Online Booking', 'Payment Processing', 'Calendar Sync', 'Customer Management'],
      results: '200% increase in bookings',
      link: '#',
      github: '#'
    },
    {
      title: 'AI Content Assistant',
      category: 'AI Integration',
      description: 'AI-powered content generation tool that helps businesses create blog posts, social media content, and marketing copy.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      technologies: ['OpenAI API', 'React', 'Python', 'FastAPI', 'Redis'],
      features: ['Content Generation', 'SEO Optimization', 'Multi-format Output', 'Brand Voice Training'],
      results: '500% faster content creation',
      link: '#',
      github: '#'
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Full-featured e-commerce platform with inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Vercel'],
      features: ['Product Management', 'Order Processing', 'Analytics', 'Mobile App'],
      results: '$100K+ in first quarter sales',
      link: '#',
      github: '#'
    }
  ];

  const categories = ['All', 'Web Development', 'Automation', 'Design & Branding', 'Custom App', 'AI Integration'];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Showcasing Our Best Work
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our portfolio of successful projects that have transformed businesses and delivered exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-800">Results:</div>
                    <div className="text-sm text-green-700">{project.results}</div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "DEONE CREATIVITY transformed our business with their automation solutions. We've saved 20+ hours per week and increased our efficiency by 300%.",
                author: "Sarah Johnson",
                title: "CEO, TechStart Inc.",
                rating: 5
              },
              {
                quote: "The custom dashboard they built for us is incredible. Real-time analytics and intuitive design have revolutionized how we make decisions.",
                author: "Michael Chen",
                title: "Founder, DataFlow Solutions",
                rating: 5
              },
              {
                quote: "Their AI integration helped us automate our content creation process. We're now producing 5x more content with better quality.",
                author: "Emily Rodriguez",
                title: "Marketing Director, ContentPro",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Get in touch to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}