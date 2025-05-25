
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Zap, Shield, Crown } from 'lucide-react';

const PricingCalculator = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 0,
      tokens: 1000,
      icon: Zap,
      color: 'text-green-400',
      features: [
        '1,000 tokens/month',
        'Basic API access',
        'Community support',
        'Standard rate limits'
      ]
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 29,
      tokens: 25000,
      icon: Shield,
      color: 'text-purple-400',
      popular: true,
      features: [
        '25,000 tokens/month',
        'Priority API access',
        'Advanced analytics',
        'Email support',
        'Custom rate limits'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 199,
      tokens: 250000,
      icon: Crown,
      color: 'text-yellow-400',
      features: [
        '250,000 tokens/month',
        'Dedicated infrastructure',
        'White-label solutions',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantees'
      ]
    }
  ];

  const tokenPackages = [
    { tokens: 5000, price: 10, bonus: 0 },
    { tokens: 15000, price: 25, bonus: 2000 },
    { tokens: 50000, price: 75, bonus: 10000 },
    { tokens: 150000, price: 200, bonus: 50000 }
  ];

  return (
    <section id="pricing" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Scale up or down anytime with our token-based system.
          </p>
        </div>

        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-purple-500/20 max-w-md mx-auto">
            <TabsTrigger value="plans" className="data-[state=active]:bg-purple-600/20">Monthly Plans</TabsTrigger>
            <TabsTrigger value="tokens" className="data-[state=active]:bg-purple-600/20">Buy Tokens</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="mt-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <Card 
                    key={plan.id}
                    className={`relative bg-slate-800/50 border-purple-500/20 ${
                      plan.popular ? 'border-purple-400 scale-105' : ''
                    } transition-all duration-300 hover:border-purple-400/60`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <Icon className={`w-12 h-12 ${plan.color} mx-auto mb-4`} />
                      <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-white">
                        ${plan.price}
                        <span className="text-lg text-gray-400">/month</span>
                      </div>
                      <div className="text-purple-400">
                        {plan.tokens.toLocaleString()} tokens included
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                            : 'bg-slate-700 hover:bg-slate-600'
                        }`}
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        {plan.price === 0 ? 'Start Free' : 'Choose Plan'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="tokens" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {tokenPackages.map((pkg, index) => (
                <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/60 transition-colors">
                  <CardHeader className="text-center">
                    <div className="text-3xl font-bold text-white">
                      {pkg.tokens.toLocaleString()}
                    </div>
                    <div className="text-gray-400">tokens</div>
                    {pkg.bonus > 0 && (
                      <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                        +{pkg.bonus.toLocaleString()} bonus
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-4">
                      ${pkg.price}
                    </div>
                    <div className="text-sm text-gray-400 mb-4">
                      ${(pkg.price / (pkg.tokens + pkg.bonus) * 1000).toFixed(2)} per 1K tokens
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                      Buy Tokens
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Card className="bg-slate-800/30 border-purple-500/20 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
            <p className="text-gray-300 mb-6">
              Need custom pricing, dedicated infrastructure, or white-label solutions? 
              Our enterprise team is ready to help scale your AI operations.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Contact Enterprise Sales
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
