import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const whatsappNumber = '2349117564724';

    const whatsappMessage = `
*📩 NEW PROJECT ENQUIRY*

━━━━━━━━━━━━━━━
*👤 Client Info*
━━━━━━━━━━━━━━━
*Name:* ${formData.name}
*Email:* ${formData.email}
*Company:* ${formData.company || 'N/A'}

━━━━━━━━━━━━━━━
*🛠 Project Scope*
━━━━━━━━━━━━━━━
*Service:* ${formData.service || 'Not specified'}
*Budget:* ${formData.budget || 'Not specified'}

━━━━━━━━━━━━━━━
*📝 Project Details*
━━━━━━━━━━━━━━━
\`\`\`
${formData.message}
\`\`\`
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Success animation first
    setTimeout(() => {
      setIsSuccess(true);
    }, 400);

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 900);

    // Reset form after redirect
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
      setIsSending(false);
      setIsSuccess(false);
    }, 1500);
  };

  const services = [
    'Web Development',
    'Automation Tools',
    'Design & Branding',
    'Custom Apps',
    'AI Integration',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Not sure yet'
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Let’s Build Something Amazing Together
          </h1>
          <p className="text-xl text-gray-600">
            Describe your idea — we’ll handle the rest.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-xl border-0 relative overflow-hidden">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Your message will be sent directly via WhatsApp.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={e => handleChange('name', e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                  />
                </div>

                <Input
                  placeholder="Company Name (optional)"
                  value={formData.company}
                  onChange={e => handleChange('company', e.target.value)}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    value={formData.service}
                    onValueChange={value => handleChange('service', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Service Needed" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(service => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select
                    value={formData.budget}
                    onValueChange={value => handleChange('budget', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map(range => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  rows={5}
                  placeholder="Describe the type of website, system, or idea you want..."
                  required
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                />

                <Button
                  type="submit"
                  disabled={isSending}
                  size="lg"
                  className={`w-full transition-all ${
                    isSuccess
                      ? 'bg-green-600 hover:bg-green-600'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}
                >
                  {isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2 animate-scale-in" />
                      Message Ready ✓
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
