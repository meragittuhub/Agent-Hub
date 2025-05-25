
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Coins, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-100">
          <Zap className="w-4 h-4 mr-2" />
          Powered by Gradio & Hugging Face
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          The AI community
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            building the future.
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Collaborate on models, datasets and Spaces. Host unlimited models, build apps, and ship AI products.
          All with a token-based economy that rewards innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
            Join the community
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-3">
            Explore models
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Coins className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Token Economy</h3>
            <p className="text-gray-600 leading-relaxed">Fair, transparent pricing based on actual usage and model complexity</p>
          </Card>
          
          <Card className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant APIs</h3>
            <p className="text-gray-600 leading-relaxed">Upload code, get instant API endpoints with Gradio integration</p>
          </Card>
          
          <Card className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Ready</h3>
            <p className="text-gray-600 leading-relaxed">SOC 2 compliant with JWT auth and comprehensive audit logs</p>
          </Card>
        </div>

        <TokenFlowDiagram />
      </div>
    </section>
  );
};

const TokenFlowDiagram = () => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How it works</h3>
      <div className="flex items-center justify-between space-x-4 overflow-x-auto">
        {[
          { step: 1, title: "Upload", desc: "Share your AI model or code", icon: "📤" },
          { step: 2, title: "Deploy", desc: "Auto-generate API endpoints", icon: "⚡" },
          { step: 3, title: "Price", desc: "Set token cost per request", icon: "💰" },
          { step: 4, title: "Earn", desc: "Get paid when users access", icon: "🎯" }
        ].map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="text-center min-w-[180px]">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3">
                {item.icon}
              </div>
              <h4 className="text-gray-900 font-semibold text-lg mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
            {index < 3 && (
              <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-200 to-blue-200 mx-6 min-w-[60px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
