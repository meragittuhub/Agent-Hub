import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Users, ArrowLeft, Play, Code, Heart, Share, MessageSquare } from 'lucide-react';
import { Header } from '@/components/Header';

const AgentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState('');

  // Mock agent data - in real app, fetch based on id
  const agent = {
    id: parseInt(id || '1'),
    name: 'GPT-4 Text Classifier',
    author: 'AI_Dev_Pro',
    description: 'Advanced text classification with 98% accuracy. Perfect for sentiment analysis, spam detection, and content categorization. This agent uses state-of-the-art transformer models to analyze text and provide detailed classification results.',
    longDescription: `This advanced text classifier leverages the power of GPT-4 to provide highly accurate text classification across multiple categories. Whether you're analyzing sentiment, detecting spam, categorizing content, or performing custom classification tasks, this agent delivers reliable results.

Key Features:
• 98% accuracy on standard benchmarks
• Multi-language support (English, Spanish, French, German)
• Real-time processing with sub-second response times
• Customizable classification categories
• Confidence scores for all predictions
• Batch processing capabilities

Use Cases:
• Social media sentiment analysis
• Email spam detection
• Customer feedback categorization
• Content moderation
• Document classification`,
    rating: 4.9,
    users: 1250,
    price: 5,
    category: 'NLP',
    tags: ['Text Processing', 'Classification', 'Machine Learning', 'GPT-4', 'NLP'],
    author_avatar: '/placeholder.svg',
    created_at: '2024-01-15',
    updated_at: '2024-01-20',
    version: '2.1.0'
  };

  const reviews = [
    {
      id: 1,
      user: 'DataScientist123',
      rating: 5,
      comment: 'Excellent accuracy and very fast response times. Perfect for our sentiment analysis pipeline.',
      date: '2024-01-18'
    },
    {
      id: 2,
      user: 'ContentModerator',
      rating: 5,
      comment: 'Great for content moderation. The confidence scores help us make better decisions.',
      date: '2024-01-16'
    },
    {
      id: 3,
      user: 'StartupFounder',
      rating: 4,
      comment: 'Works well for our customer feedback analysis. Would love to see more customization options.',
      date: '2024-01-14'
    }
  ];

  const handleRunAgent = async () => {
    if (!inputText.trim()) return;
    
    setIsRunning(true);
    // Simulate API call
    setTimeout(() => {
      const sentiments = ['positive', 'negative', 'neutral'];
      const sentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
      const confidence = (0.8 + Math.random() * 0.2).toFixed(3);
      
      setResult(`Classification: ${sentiment.toUpperCase()}
Confidence: ${confidence}
Category: Sentiment Analysis
Processing Time: 0.${Math.floor(Math.random() * 500) + 100}s

Additional Insights:
- Text length: ${inputText.length} characters
- Emotional tone: ${sentiment === 'positive' ? 'Optimistic' : sentiment === 'negative' ? 'Critical' : 'Neutral'}
- Complexity score: ${(Math.random() * 10).toFixed(1)}/10`);
      
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <button 
            onClick={() => navigate('/consumer')}
            className="flex items-center hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Marketplace
          </button>
          <span>/</span>
          <span>{agent.category}</span>
          <span>/</span>
          <span className="text-gray-900">{agent.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agent Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-orange-600">
                            {agent.author[0]}
                          </span>
                        </div>
                        <span className="font-medium">{agent.author}</span>
                      </div>
                      <Badge variant="secondary">{agent.category}</Badge>
                      <Badge variant="outline">v{agent.version}</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{agent.rating}</span>
                        <span className="text-gray-600">({agent.users} users)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{agent.users} users</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{agent.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {agent.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="demo" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="demo">Live Demo</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="api">API Docs</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="demo" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Play className="w-5 h-5 mr-2" />
                      Try the Agent
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Input Text for Classification
                      </label>
                      <Textarea
                        placeholder="Enter text to classify (e.g., 'I love this product! It works perfectly.')"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button 
                      onClick={handleRunAgent}
                      disabled={!inputText.trim() || isRunning}
                      className="w-full"
                    >
                      {isRunning ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Run Classification ({agent.price} tokens)
                        </>
                      )}
                    </Button>

                    {result && (
                      <Card className="bg-gray-50">
                        <CardHeader>
                          <CardTitle className="text-lg">Classification Result</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <pre className="whitespace-pre-wrap text-sm font-mono">
                            {result}
                          </pre>
                        </CardContent>
                      </Card>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose max-w-none">
                      <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {agent.longDescription}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="api" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      API Documentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Endpoint</h3>
                        <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                          POST https://api.lovable-ai.com/agents/{agent.id}/predict
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Headers</h3>
                        <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                          Content-Type: application/json<br/>
                          Authorization: Bearer YOUR_API_TOKEN
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Request Body</h3>
                        <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                          {`{
  "data": ["Your text to classify here"]
}`}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Response</h3>
                        <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                          {`{
  "data": ["positive"],
  "confidence": 0.94,
  "processing_time": 0.234,
  "tokens_used": ${agent.price}
}`}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-semibold text-blue-600">
                                {review.user[0]}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium">{review.user}</div>
                              <div className="text-sm text-gray-600">{review.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < review.rating 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Write a Review
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Rating</label>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer"
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Review</label>
                          <Textarea 
                            placeholder="Share your experience with this agent..."
                            rows={3}
                          />
                        </div>
                        <Button>Submit Review</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {agent.price} tokens
                  </div>
                  <div className="text-gray-600">per request</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Average response time:</span>
                    <span className="font-medium">0.3s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success rate:</span>
                    <span className="font-medium">99.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max input length:</span>
                    <span className="font-medium">4,096 chars</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Play className="w-4 h-4 mr-2" />
                  Use Agent
                </Button>

                <div className="text-center">
                  <Button variant="outline" className="w-full">
                    Buy Tokens
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agent Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total uses:</span>
                  <span className="font-medium">12,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">This month:</span>
                  <span className="font-medium">2,340</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Created:</span>
                  <span className="font-medium">{agent.created_at}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last updated:</span>
                  <span className="font-medium">{agent.updated_at}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Agents */}
            <Card>
              <CardHeader>
                <CardTitle>Related Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Advanced Sentiment Pro', price: 7, rating: 4.8 },
                    { name: 'Multi-lang Classifier', price: 6, rating: 4.7 },
                    { name: 'Content Moderator AI', price: 4, rating: 4.6 }
                  ].map((related, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                      <div>
                        <div className="font-medium text-sm">{related.name}</div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">{related.rating}</span>
                        </div>
                      </div>
                      <div className="text-orange-600 font-medium text-sm">
                        {related.price}t
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
