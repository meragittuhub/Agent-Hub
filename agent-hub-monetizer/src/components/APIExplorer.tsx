
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Code, Gift, Zap } from 'lucide-react';

const APIExplorer = () => {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tokensUsed, setTokensUsed] = useState(0);
  const [freeTokens, setFreeTokens] = useState(50);

  const handleTryAPI = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const tokens = Math.ceil(inputText.length / 10);
      setTokensUsed(tokens);
      setFreeTokens(prev => Math.max(0, prev - tokens));
      setResponse(`{
  "result": "Sample AI response for: ${inputText}",
  "confidence": 0.95,
  "processing_time": "1.2s",
  "tokens_used": ${tokens}
}`);
      setIsLoading(false);
    }, 2000);
  };

  const sampleRequests = [
    {
      name: "Text Classification",
      endpoint: "/api/v1/classify",
      sample: "Analyze the sentiment of this product review",
      category: "NLP"
    },
    {
      name: "Image Analysis",
      endpoint: "/api/v1/vision/analyze",
      sample: "Detect objects in uploaded image",
      category: "Computer Vision"
    },
    {
      name: "Code Generation",
      endpoint: "/api/v1/code/generate",
      sample: "Create a Python function to sort a list",
      category: "Code AI"
    }
  ];

  return (
    <section id="api-explorer" className="py-16 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-500/30">
            <Gift className="w-4 h-4 mr-2" />
            50 Free Tokens to Get Started
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">API Explorer Sandbox</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test our AI agents live before committing. Experience the power of our marketplace 
            with interactive demos and real API responses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white flex items-center">
                  <Play className="w-6 h-6 mr-2 text-green-400" />
                  Live API Tester
                </CardTitle>
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                  <Zap className="w-4 h-4 mr-1" />
                  {freeTokens} tokens left
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  API Endpoint
                </label>
                <Input 
                  value="/api/v1/agents/gpt-classifier"
                  readOnly
                  className="bg-slate-700/50 border-purple-500/30 text-gray-300"
                />
              </div>
              
              <div>
                <label className="text-white text-sm font-medium block mb-2">
                  Input Data
                </label>
                <Textarea
                  placeholder="Enter your test data here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="bg-slate-700/50 border-purple-500/30 text-white min-h-[100px]"
                />
              </div>

              <Button 
                onClick={handleTryAPI}
                disabled={!inputText || isLoading || freeTokens <= 0}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                {isLoading ? 'Processing...' : 'Try API (Free)'}
              </Button>

              {response && (
                <div>
                  <label className="text-white text-sm font-medium block mb-2">
                    Response ({tokensUsed} tokens used)
                  </label>
                  <pre className="bg-slate-900/50 p-4 rounded-lg text-green-400 text-sm font-mono overflow-x-auto">
                    {response}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-400" />
                Sample Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="classification" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-700/50">
                  <TabsTrigger value="classification">NLP</TabsTrigger>
                  <TabsTrigger value="vision">Vision</TabsTrigger>
                  <TabsTrigger value="code">Code AI</TabsTrigger>
                </TabsList>

                <TabsContent value="classification" className="mt-4">
                  <div className="space-y-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Text Classification</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Classify text into categories with confidence scores
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-purple-500/50"
                        onClick={() => setInputText("This product is amazing! I love the quality and fast shipping.")}
                      >
                        Load Sample
                      </Button>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Sentiment Analysis</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Analyze emotional tone and sentiment
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-purple-500/50"
                        onClick={() => setInputText("The customer service was disappointing and slow.")}
                      >
                        Load Sample
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="vision" className="mt-4">
                  <div className="space-y-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Object Detection</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Identify objects and their locations in images
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-purple-500/50"
                        onClick={() => setInputText("image_url: https://example.com/image.jpg")}
                      >
                        Load Sample
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="mt-4">
                  <div className="space-y-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="text-white font-medium mb-2">Code Generation</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        Generate code snippets from natural language
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-purple-500/50"
                        onClick={() => setInputText("Create a Python function that calculates factorial")}
                      >
                        Load Sample
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 p-4 bg-purple-600/10 border border-purple-500/20 rounded-lg">
                <h4 className="text-purple-300 font-medium mb-2">Ready to build?</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Join thousands of developers already monetizing their AI agents
                </p>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  Start Building
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default APIExplorer;
