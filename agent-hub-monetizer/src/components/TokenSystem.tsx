
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Coins, TrendingUp, Shield, Zap } from 'lucide-react';

const TokenSystem = () => {
  const [inputLength, setInputLength] = useState([1000]);
  const [outputLength, setOutputLength] = useState([500]);
  const [modelComplexity, setModelComplexity] = useState([2]);
  const [batchProcessing, setBatchProcessing] = useState(false);

  const calculateTokens = () => {
    const baseTokens = (inputLength[0] + outputLength[0]) / 100;
    const complexityMultiplier = [1, 1.5, 2.5, 4, 6][modelComplexity[0]];
    const batchDiscount = batchProcessing ? 0.7 : 1;
    return Math.ceil(baseTokens * complexityMultiplier * batchDiscount);
  };

  const models = ["Basic NLP", "Advanced GPT", "Computer Vision", "Multimodal", "Custom Enterprise"];

  return (
    <section id="token-system" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Token Monetization System</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fair, transparent pricing based on actual resource consumption. 
            Calculate costs in real-time and optimize your AI agent monetization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Coins className="w-6 h-6 mr-2 text-purple-400" />
                Interactive Token Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Input Text Length: {inputLength[0]} characters
                </label>
                <Slider
                  value={inputLength}
                  onValueChange={setInputLength}
                  max={5000}
                  min={100}
                  step={100}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Output Text Length: {outputLength[0]} characters
                </label>
                <Slider
                  value={outputLength}
                  onValueChange={setOutputLength}
                  max={3000}
                  min={50}
                  step={50}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Model Complexity: {models[modelComplexity[0]]}
                </label>
                <Slider
                  value={modelComplexity}
                  onValueChange={setModelComplexity}
                  max={4}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-white text-sm font-medium">Batch Processing (30% discount)</label>
                <Switch checked={batchProcessing} onCheckedChange={setBatchProcessing} />
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {calculateTokens()} tokens
                </div>
                <div className="text-gray-300">
                  ≈ ${(calculateTokens() * 0.002).toFixed(4)} USD
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-400" />
                Cost Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <div className="text-white font-medium">AI Agent Hub</div>
                    <div className="text-sm text-gray-400">Token-based pricing</div>
                  </div>
                  <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                    ${(calculateTokens() * 0.002).toFixed(4)}
                  </Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <div className="text-white font-medium">OpenAI API</div>
                    <div className="text-sm text-gray-400">Per request pricing</div>
                  </div>
                  <Badge variant="outline" className="border-gray-500 text-gray-300">
                    ${(calculateTokens() * 0.005).toFixed(4)}
                  </Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <div className="text-white font-medium">Traditional APIs</div>
                    <div className="text-sm text-gray-400">Fixed monthly fee</div>
                  </div>
                  <Badge variant="outline" className="border-gray-500 text-gray-300">
                    $29.99/mo
                  </Badge>
                </div>

                <div className="mt-6 p-4 bg-purple-600/10 border border-purple-500/20 rounded-lg">
                  <div className="text-purple-300 text-sm font-medium mb-2">Savings Calculator</div>
                  <div className="text-white">
                    Save up to <span className="text-purple-400 font-bold">60%</span> compared to traditional APIs
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 border-purple-500/20 text-center p-6">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Pricing</h3>
            <p className="text-gray-400">Dynamic token calculation based on actual resource usage</p>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 text-center p-6">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure Transactions</h3>
            <p className="text-gray-400">Blockchain-verified token transfers with audit trails</p>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 text-center p-6">
            <Coins className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Auto-recharge</h3>
            <p className="text-gray-400">Set thresholds for automatic token wallet replenishment</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TokenSystem;
