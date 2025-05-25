import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Play, Settings, Star } from 'lucide-react';

interface AgentPreviewProps {
  name: string;
  description: string;
  tokenPrice: string;
  code: string;
}

const AgentPreview: React.FC<AgentPreviewProps> = ({ 
  name, 
  description, 
  tokenPrice, 
  code 
}) => {
  const hasValidCode = code && code.includes('gradio') && code.includes('Interface');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Eye className="w-5 h-5 mr-2" />
          Live Preview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Agent Card Preview */}
          <Card className="border-2 border-dashed border-gray-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">
                    {name || 'Your Agent Name'}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">by You</p>
                </div>
                <Badge variant="secondary">Preview</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {description || 'Enter a description for your agent...'}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">New</span>
                  </div>
                  <span className="text-sm text-muted-foreground">0 users</span>
                </div>
                <div className="text-primary font-bold">
                  {tokenPrice || '5'} tokens
                </div>
              </div>

              <Button className="w-full" disabled={!hasValidCode}>
                <Play className="w-4 h-4 mr-2" />
                Try Agent
              </Button>
            </CardContent>
          </Card>

          {/* API Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Generated API Endpoint</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-600 mb-2">POST /api/v1/agents/your-agent/predict</div>
                <div className="text-gray-600 space-y-1">
                  <div>Content-Type: application/json</div>
                  <div>Authorization: Bearer YOUR_TOKEN</div>
                  <div className="mt-2">{`{`}</div>
                  <div className="ml-4 text-blue-600">"data": ["input_text"]</div>
                  <div>{`}`}</div>
                </div>
              </div>
              
              {hasValidCode ? (
                <Badge className="mt-2 bg-green-100 text-green-700 border-green-300">
                  ✓ Valid Gradio Interface Detected
                </Badge>
              ) : (
                <Badge className="mt-2 bg-yellow-100 text-yellow-700 border-yellow-300">
                  ⚠ Add Gradio Interface to Enable API
                </Badge>
              )}
            </CardContent>
          </Card>

          {/* Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Runtime:</span>
                <span className="text-gray-600">Python 3.9</span>
              </div>
              <div className="flex justify-between">
                <span>Framework:</span>
                <span className="text-gray-600">Gradio</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-gray-600">Draft</span>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">
            Publish Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentPreview;
