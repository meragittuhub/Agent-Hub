import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Users, Zap, Heart, ArrowRight, Code, Globe, Shield } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-founder',
      bio: 'Former AI researcher at Google. Passionate about democratizing AI technology.',
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Co-founder',
      bio: 'Ex-OpenAI engineer. Expert in ML infrastructure and scalable systems.',
      avatar: '👩‍💻'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader with 10+ years experience in developer tools.',
      avatar: '👨‍🎯'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Community',
      bio: 'Building vibrant developer communities for the past 8 years.',
      avatar: '👩‍🤝‍👩'
    }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community First',
      description: 'We believe the best AI solutions come from collaborative communities, not isolated teams.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI, making cutting-edge technology accessible.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Security',
      description: 'We prioritize security, privacy, and ethical AI practices in everything we build.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Lovable Experience',
      description: 'We create delightful, intuitive experiences that make AI development enjoyable.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Lovable AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building the future of AI agent development and deployment. 
            Our mission is to democratize artificial intelligence by creating a 
            platform where anyone can build, share, and monetize AI solutions.
          </p>
        </motion.div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Lovable AI, we believe that artificial intelligence should be accessible 
                to everyone, not just large corporations with massive resources. We're creating 
                a marketplace where developers can easily turn their AI code into profitable 
                agents, and users can discover powerful AI solutions for their needs.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our platform bridges the gap between AI innovation and practical application, 
                fostering a community where creativity meets commerce, and where the best 
                ideas can thrive regardless of their origin.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  <Code className="w-4 h-4 mr-2" />
                  Developer Friendly
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Globe className="w-4 h-4 mr-2" />
                  Global Community
                </Badge>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Innovation
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Empowering Innovation
                  </h3>
                  <p className="text-gray-600">
                    Making AI accessible to everyone
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-orange-600 mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working together to democratize AI technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{member.avatar}</div>
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
            <CardContent className="py-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">10K+</div>
                  <div className="text-orange-100">AI Agents</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-orange-100">Developers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <div className="text-orange-100">API Calls</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-orange-100">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gray-900 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you're a developer looking to monetize your AI innovations or 
                a business seeking powerful AI solutions, we'd love to have you on board.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
