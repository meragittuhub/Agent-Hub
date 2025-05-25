import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Users, Play } from 'lucide-react';

interface Agent {
  id: number;
  name: string;
  author: string;
  description: string;
  rating: number;
  users: number;
  price: number;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

interface AgentCardProps {
  agent: Agent;
  viewMode: 'grid' | 'list';
  onClick: () => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, viewMode, onClick }) => {
  if (viewMode === 'list') {
    return (
      <Card
        className="cursor-pointer border-primary/20 hover:border-primary/40 transition-colors"
        onClick={onClick}
      >
        <div className="flex p-6">
          <div className="w-24 h-24 bg-primary/5 rounded-lg flex-shrink-0 mr-6 flex items-center justify-center">
            <div className="text-2xl">🤖</div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold">{agent.name}</h3>
                <p className="text-sm text-muted-foreground">by {agent.author}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">{agent.category}</Badge>
                <div className="text-primary font-bold">{agent.price} tokens</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-3 line-clamp-2">{agent.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {agent.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{agent.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{agent.users}</span>
                </div>
              </div>
              <Button size="sm">
                <Play className="w-4 h-4 mr-2" />
                Try Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className="h-full cursor-pointer border-primary/20 hover:border-primary/40 transition-colors"
      onClick={onClick}
    >
      <CardHeader>
        <div className="w-full h-32 bg-primary/5 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-4xl">🤖</div>
        </div>
        
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">{agent.category}</Badge>
          {agent.featured && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Featured
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-lg">{agent.name}</CardTitle>
        <p className="text-sm text-muted-foreground">by {agent.author}</p>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">{agent.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{agent.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{agent.users}</span>
            </div>
          </div>
          <div className="text-primary font-bold">
            {agent.price} tokens
          </div>
        </div>

        <Button className="w-full">
          <Play className="w-4 h-4 mr-2" />
          Try Agent
        </Button>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
