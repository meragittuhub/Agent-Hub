import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Coins, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfileMenu } from './ProfileMenu';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tokenBalance] = useState(1250);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Agent Hub</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/consumer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Marketplace
            </Link>
            <Link
              to="/producer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Create Agent
            </Link>
            <Link
              to="/faq"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="hidden md:flex">
            <Coins className="w-3 h-3 mr-1" />
            {tokenBalance.toLocaleString()} credits
          </Badge>
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
          <ProfileMenu />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/consumer"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              to="/producer"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Agent
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
