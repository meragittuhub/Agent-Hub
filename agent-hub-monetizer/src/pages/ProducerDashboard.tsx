import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Code, Play, Settings, BarChart, Eye, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import CodeEditor from '@/components/producer/CodeEditor';
import AgentPreview from '@/components/producer/AgentPreview';

const ProducerDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('upload');
  const [code, setCode] = useState('');
  const [agentName, setAgentName] = useState('');
  const [agentDescription, setAgentDescription] = useState('');
  const [tokenPrice, setTokenPrice] = useState('5');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [isViewing, setIsViewing] = useState<number | null>(null);

  const myAgents = [
    {
      id: 1,
      name: 'Text Classifier Pro',
      description: 'Advanced text classification with 98% accuracy',
      status: 'Published',
      earnings: 145.50,
      users: 1250,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Image Style Transfer',
      description: 'Transform images with artistic styles',
      status: 'Draft',
      earnings: 0,
      users: 0,
      rating: 0
    }
  ];

  const handleTestAgent = async () => {
    try {
      setIsSubmitting(true);
      
      // Step 1: Initial check
      toast({
        title: "Starting Test Sequence",
        description: "Validating code structure...",
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Step 2: Dependencies
      toast({
        title: "Checking Dependencies",
        description: "Verifying required packages...",
      });
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Step 3: Gradio Interface
      toast({
        title: "Validating Gradio Interface",
        description: "Checking interface configuration...",
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Step 4: API Generation
      toast({
        title: "Generating API",
        description: "Creating API endpoints...",
      });
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Final success
      toast({
        title: "✅ Test Successful",
        description: "Agent is ready for deployment!",
        className: "bg-green-50 border-green-200",
      });

      // Simulate successful API generation by updating some state
      // You might want to add a state variable to show the API status
      
    } catch (error) {
      toast({
        title: "Test Failed",
        description: "There was an error testing your agent.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreviewAgent = async () => {
    if (!code) {
      toast({
        title: "Missing Code",
        description: "Please enter or upload your agent code first.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Preview Generated",
      description: "Your agent preview has been updated.",
    });
  };

  const handlePublishAgent = async () => {
    try {
      setIsPublishing(true);
      toast({
        title: "Publishing Agent",
        description: "Preparing your agent for deployment...",
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      toast({
        title: "Agent Published!",
        description: "Your agent is now live and ready to use.",
      });
    } catch (error) {
      toast({
        title: "Publication Failed",
        description: "There was an error publishing your agent.",
        variant: "destructive",
      });
    } finally {
      setIsPublishing(false);
    }
  };

  const handleEditAgent = async (agentId: number) => {
    try {
      setIsEditing(agentId);
      toast({
        title: "Loading Agent",
        description: "Fetching agent details...",
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setActiveTab('upload');
      toast({
        title: "Agent Loaded",
        description: "You can now edit your agent.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load agent details.",
        variant: "destructive",
      });
    } finally {
      setIsEditing(null);
    }
  };

  const handleViewAgent = async (agentId: number) => {
    try {
      setIsViewing(agentId);
      toast({
        title: "Loading Statistics",
        description: "Fetching agent performance data...",
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setActiveTab('analytics');
      toast({
        title: "Statistics Loaded",
        description: "Viewing agent performance metrics.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load agent statistics.",
        variant: "destructive",
      });
    } finally {
      setIsViewing(null);
    }
  };

  const handleSaveSettings = async () => {
    try {
      setIsSaving(true);
      toast({
        title: "Saving Changes",
        description: "Updating your account settings...",
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Changes Saved",
        description: "Your settings have been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8 pt-16 sm:pt-20">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Producer Dashboard</h1>
          <p className="text-muted-foreground">Create, manage, and monetize your AI agents</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-4">
            <TabsTrigger value="upload">Upload Agent</TabsTrigger>
            <TabsTrigger value="agents">My Agents</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-4 sm:mt-8">
            <div className="grid xl:grid-cols-2 gap-4 sm:gap-8">
              <div className="space-y-4 sm:space-y-8">
              <Card>
                <CardHeader>
                    <CardTitle className="flex items-center text-lg sm:text-xl">
                      <Upload className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    Upload Your Code
                  </CardTitle>
                </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Agent Name</label>
                    <Input
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      placeholder="Enter agent name"
                        className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea
                      value={agentDescription}
                      onChange={(e) => setAgentDescription(e.target.value)}
                      placeholder="Describe what your agent does"
                      rows={3}
                        className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Token Price per Request</label>
                    <Input
                      type="number"
                      value={tokenPrice}
                      onChange={(e) => setTokenPrice(e.target.value)}
                      placeholder="5"
                        min="1"
                        className="w-full"
                    />
                  </div>

                  <CodeEditor value={code} onChange={setCode} />

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <Button 
                        className="flex-1"
                        onClick={handleTestAgent}
                        disabled={isSubmitting || !code}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Testing...
                          </>
                        ) : (
                          <>
                      <Play className="w-4 h-4 mr-2" />
                      Test Agent
                          </>
                        )}
                    </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={handlePreviewAgent}
                        disabled={!code}
                      >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>

                    <Button 
                      className="w-full"
                      onClick={handlePublishAgent}
                      disabled={isPublishing || !code}
                    >
                      {isPublishing ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Publishing...
                        </>
                      ) : (
                        'Publish Agent'
                      )}
                    </Button>
                </CardContent>
              </Card>
              </div>

              <div className="hidden sm:block">
              <AgentPreview 
                name={agentName}
                description={agentDescription}
                tokenPrice={tokenPrice}
                code={code}
              />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="agents" className="mt-4 sm:mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {myAgents.map((agent) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base sm:text-lg">{agent.name}</CardTitle>
                        <Badge variant={agent.status === 'Published' ? 'default' : 'secondary'}>
                          {agent.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{agent.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Earnings:</span>
                          <span className="font-semibold">${agent.earnings}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Users:</span>
                          <span className="font-semibold">{agent.users}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Rating:</span>
                          <span className="font-semibold">{agent.rating || 'N/A'}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => handleEditAgent(agent.id)}
                          disabled={isEditing === agent.id}
                        >
                          {isEditing === agent.id ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Loading...
                            </>
                          ) : (
                            'Edit'
                          )}
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleViewAgent(agent.id)}
                          disabled={isViewing === agent.id}
                        >
                          {isViewing === agent.id ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Loading...
                            </>
                          ) : (
                            'View'
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-4 sm:mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              <Card>
                <CardContent className="text-center p-4 sm:p-6">
                  <BarChart className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">$1,245</div>
                  <div className="text-muted-foreground">Total Earnings</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="text-center p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">2,547</div>
                  <div className="text-muted-foreground">Total Users</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="text-center p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">12,340</div>
                  <div className="text-muted-foreground">API Calls</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="text-center p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">4.8</div>
                  <div className="text-muted-foreground">Avg Rating</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 sm:h-96 flex items-center justify-center bg-muted/10 rounded-lg">
                  <p className="text-muted-foreground">Charts coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-4 sm:mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Display Name</label>
                    <Input placeholder="Your display name" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <Textarea placeholder="Tell us about yourself" rows={4} className="w-full" />
                  </div>
                  <Button 
                    className="w-full sm:w-auto"
                    onClick={handleSaveSettings}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProducerDashboard;
