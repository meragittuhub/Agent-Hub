
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, Shield, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🤗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Agent Hub</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The AI community platform for sharing models, datasets, and applications 
              with token-based monetization.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="border-gray-300 p-2 hover:bg-gray-100">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-300 p-2 hover:bg-gray-100">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-300 p-2 hover:bg-gray-100">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Models</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Datasets</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Spaces</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-600 mb-4">
              Get the latest updates on new models and platform features.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="border-gray-300 focus:ring-orange-500 focus:border-orange-500"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200 mb-8" />

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-green-600" />
            <div>
              <h5 className="text-gray-900 font-medium">Enterprise Security</h5>
              <p className="text-gray-600 text-sm">SOC 2 Type II, GDPR compliant</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Zap className="w-6 h-6 text-orange-600" />
            <div>
              <h5 className="text-gray-900 font-medium">99.9% Uptime</h5>
              <p className="text-gray-600 text-sm">Reliable infrastructure</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-blue-600" />
            <div>
              <h5 className="text-gray-900 font-medium">24/7 Support</h5>
              <p className="text-gray-600 text-sm">Enterprise customers</p>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2024 Agent Hub. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-600 text-sm">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
