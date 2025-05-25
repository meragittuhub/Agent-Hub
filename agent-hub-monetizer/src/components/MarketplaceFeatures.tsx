
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Code, Zap, Star, Users, TrendingUp } from 'lucide-react';

const MarketplaceFeatures = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  const featuredAgents = [
    {
      name: "GPT-4 Text Classifier",
      author: "AI_Dev_Pro",
      rating: 4.9,
      users: 1250,
      price: 5,
      category: "NLP",
      description: "Advanced text classification with 98% accuracy"
    },
    {
      name: "Image Style Transfer",
      author: "VisionCraft",
      rating: 4.8,
      users: 890,
      price: 8,
      category: "Computer Vision",
      description: "Transform images with artistic style transfer"
    },
    {
      name: "Sentiment Analyzer Pro",
      author: "DataSciLab",
      rating: 4.7,
      users: 2100,
      price: 3,
      category: "Analytics",
      description: "Real-time sentiment analysis for social media"
    }
  ];

  return (
    <section id="marketplace" className="py-16 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">AI Agent Marketplace</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions or monetize your own agents. 
            Upload code, set pricing, and start earning from day one.
          </p>
        </div>

        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border border-purple-500/20">
            <TabsTrigger value="upload" className="data-[state=active]:bg-purple-600/20">Upload Agent</TabsTrigger>
            <TabsTrigger value="browse" className="data-[state=active]:bg-purple-600/20">Browse Marketplace</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600/20">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Upload className="w-6 h-6 mr-2 text-purple-400" />
                    Code Upload Zone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive 
                        ? 'border-purple-400 bg-purple-600/10' 
                        : 'border-gray-600 hover:border-purple-500'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Drag & Drop Your AI Agent Code
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Supports Python, Jupyter notebooks, and containerized applications
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                      Choose Files
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Code className="w-6 h-6 mr-2 text-blue-400" />
                    Real-time API Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400 mb-2">$ gradio.Interface.view_api()</div>
                    <div className="text-gray-300 space-y-1">
                      <div>POST /api/v1/predict</div>
                      <div className="text-blue-400">Content-Type: application/json</div>
                      <div>{`{`}</div>
                      <div className="ml-4 text-yellow-400">"data": [input_data]</div>
                      <div>{`}`}</div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                      <Zap className="w-3 h-3 mr-1" />
                      Auto-generated
                    </Badge>
                    <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      OpenAPI 3.0 Compatible
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="browse" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAgents.map((agent, index) => (
                <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">{agent.name}</CardTitle>
                        <p className="text-gray-400 text-sm">by {agent.author}</p>
                      </div>
                      <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                        {agent.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{agent.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white">{agent.rating}</span>
                        <span className="text-gray-400">({agent.users} users)</span>
                      </div>
                      <div className="text-purple-400 font-bold">
                        {agent.price} tokens/request
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                      Try Agent
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-purple-500/20 text-center p-6">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">$12,450</div>
                <div className="text-gray-400">Monthly Revenue</div>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/20 text-center p-6">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">3,247</div>
                <div className="text-gray-400">Total Users</div>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/20 text-center p-6">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">89,120</div>
                <div className="text-gray-400">API Calls</div>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/20 text-center p-6">
                <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">4.8</div>
                <div className="text-gray-400">Avg Rating</div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MarketplaceFeatures;
