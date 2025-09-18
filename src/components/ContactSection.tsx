import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, Calendar, Globe, Phone, MapPin } from 'lucide-react'

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'For business inquiries and collaborations',
      contact: 'hello@edenroberts.com',
      action: 'Send Email',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: MessageSquare,
      title: 'Direct Message',
      description: 'Quick questions and personal messages',
      contact: 'DM me on Instagram',
      action: 'Send DM',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Bookings',
      description: 'Schedule a consultation or meeting',
      contact: 'Available slots',
      action: 'Book Now',
      color: 'from-green-500 to-blue-600'
    }
  ]

  const businessInfo = [
    { icon: Globe, label: 'Location', value: 'Los Angeles, CA' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Timezone', value: 'PST (UTC-8)' }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether it's a collaboration opportunity, question, or just to say hi.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">{method.title}</CardTitle>
                <CardDescription className="text-gray-600">{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-lg font-semibold text-gray-800">{method.contact}</div>
                <Button 
                  className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white`}
                  onClick={() => {
                    if (method.title === 'Email') {
                      window.open('mailto:hello@edenroberts.com', '_blank')
                    } else if (method.title === 'Direct Message') {
                      window.open('https://instagram.com/edenroberts', '_blank')
                    } else {
                      // Handle booking
                      alert('Booking functionality would be implemented here')
                    }
                  }}
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Business Information</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {businessInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-gray-600" />
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{info.label}</div>
                <div className="text-gray-600">{info.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-gray-800">Send Me a Message</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Fill out the form below and I'll get back to you as soon as possible!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Select a subject</option>
                <option>Business Collaboration</option>
                <option>General Inquiry</option>
                <option>Content Request</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell me more about your inquiry..."
              ></textarea>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 text-lg">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            I typically respond within 24-48 hours. For urgent matters, please DM me on Instagram!
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
