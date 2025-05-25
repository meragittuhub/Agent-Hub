import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageSquare, Book } from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Getting Started', value: 'getting-started' },
    { name: 'Producers', value: 'producers' },
    { name: 'Consumers', value: 'consumers' },
    { name: 'Pricing', value: 'pricing' },
    { name: 'Technical', value: 'technical' },
    { name: 'Account', value: 'account' }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'What is Agent Hub Marketplace? 💙',
      answer: 'Agent Hub is a revolutionary AI marketplace where developers can transform their code into powerful AI agents using Gradio, and monetize their creations. Our platform makes it easy to deploy, share, and earn from your AI innovations while helping users discover and utilize cutting-edge AI solutions.'
    },
    {
      category: 'getting-started',
      question: 'How do I get started?',
      answer: 'Simply sign up for an account and choose whether you want to be a Producer (create and sell AI agents) or Consumer (use AI agents). You can also do both! After signing up, you\'ll be guided through the setup process.'
    },
    {
      category: 'producers',
      question: 'What types of AI models can I upload?',
      answer: 'You can upload any Python-based AI model that can be integrated with Gradio interfaces. This includes NLP models, computer vision applications, audio processing tools, data analysis scripts, and more. Your code should include a Gradio interface for automatic API generation.'
    },
    {
      category: 'producers',
      question: 'How does the automatic API generation work?',
      answer: 'When you upload code with a Gradio interface, our system automatically analyzes your code, creates API endpoints, generates documentation using Gradio\'s view_api() method, and deploys your agent. You don\'t need to worry about server management or API infrastructure.'
    },
    {
      category: 'producers',
      question: 'How do I set pricing for my agents?',
      answer: 'You can set the token cost per API request for your agent. Consider factors like computational complexity, processing time, and value provided. You can adjust pricing anytime, and we provide analytics to help you optimize your pricing strategy.'
    },
    {
      category: 'producers',
      question: 'What percentage does Lovable AI take?',
      answer: 'We take a 20% platform fee on all earnings. This covers hosting, infrastructure, payment processing, and platform maintenance. You keep 80% of all tokens earned from your agents.'
    },
    {
      category: 'consumers',
      question: 'How do I purchase and use tokens?',
      answer: 'You can purchase tokens through our secure payment system using credit cards or other supported payment methods. Tokens are stored in your account and automatically deducted when you use AI agents. You can also set up auto-recharge for convenience.'
    },
    {
      category: 'consumers',
      question: 'Can I try agents before purchasing tokens?',
      answer: 'Yes! Many agents offer free trial runs or have preview modes. You can also see detailed descriptions, sample inputs/outputs, and user reviews before deciding to use an agent. Some agents may offer limited free usage.'
    },
    {
      category: 'consumers',
      question: 'How do I know which agent to choose?',
      answer: 'Each agent has detailed information including descriptions, user ratings, usage statistics, sample inputs/outputs, and reviews. You can also filter agents by category, price, rating, and popularity to find the best fit for your needs.'
    },
    {
      category: 'pricing',
      question: 'What determines the token price of an agent?',
      answer: 'Agent creators set their own pricing based on factors like computational complexity, processing time, accuracy, and value provided. More complex or specialized agents typically cost more tokens per request.'
    },
    {
      category: 'pricing',
      question: 'Do tokens expire?',
      answer: 'No, tokens do not expire. Once purchased, they remain in your account until used. This gives you flexibility to use agents when you need them without worrying about time limits.'
    },
    {
      category: 'pricing',
      question: 'Can I get a refund for unused tokens?',
      answer: 'Generally, tokens are non-refundable once purchased. However, we may consider refunds on a case-by-case basis for technical issues or exceptional circumstances. Contact our support team for assistance.'
    },
    {
      category: 'technical',
      question: 'What programming languages are supported?',
      answer: 'Currently, we support Python-based AI models with Gradio interfaces. We\'re working on expanding support for other languages and frameworks. Your Python code should be compatible with our hosting environment.'
    },
    {
      category: 'technical',
      question: 'Are there any limitations on model size or complexity?',
      answer: 'We have reasonable limits on model size (up to 5GB), memory usage (16GB RAM), and processing time (5 minutes per request). If you need higher limits for enterprise use cases, contact us about custom plans.'
    },
    {
      category: 'technical',
      question: 'How is security handled?',
      answer: 'We implement multiple security layers including code sandboxing, secure API endpoints, JWT authentication, encrypted data transmission, and regular security audits. User data and code are protected with enterprise-grade security measures.'
    },
    {
      category: 'technical',
      question: 'What about rate limiting?',
      answer: 'We implement fair usage policies with rate limits to ensure platform stability. Typical limits allow for reasonable usage patterns. If you need higher rate limits for production use, consider our enterprise plans.'
    },
    {
      category: 'account',
      question: 'How do I update my profile or settings?',
      answer: 'Go to your account settings page where you can update your profile information, notification preferences, payment methods, and API keys. Changes are saved automatically.'
    },
    {
      category: 'account',
      question: 'Can I delete my account?',
      answer: 'Yes, you can delete your account at any time from the account settings page. This will remove your profile, agents, and associated data. Note that this action is irreversible.'
    },
    {
      category: 'account',
      question: 'How do I contact support?',
      answer: 'You can contact our support team through the contact form, email (hello@lovable-ai.com), or through the help chat widget. We typically respond within 24 hours during business days.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers to common questions about Lovable AI. Can't find what you're looking for? 
            Contact our support team for personalized help.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge 
              key={category.value}
              variant="outline"
              className="cursor-pointer hover:bg-orange-50 hover:border-orange-200 px-4 py-2"
            >
              {category.name}
            </Badge>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <HelpCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="font-semibold">{faq.question}</span>
                    </div>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="px-6 py-4 ml-9">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <HelpCircle className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search terms or browse all categories
            </p>
            <Button variant="outline" onClick={() => setSearchQuery('')}>
              Clear Search
            </Button>
          </div>
        )}

        {/* Help Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed with Lovable AI. 
                Get personalized assistance with your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Book className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default FAQ;
