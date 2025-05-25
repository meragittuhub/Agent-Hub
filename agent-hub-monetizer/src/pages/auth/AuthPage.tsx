import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Login } from '../../components/auth/Login';
import { Signup } from '../../components/auth/Signup';
import { Button } from '../../components/ui/button';

export function AuthPage() {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState<'login' | 'signup'>(
    searchParams.get('mode') === 'signup' ? 'signup' : 'login'
  );

  // Update mode when search params change
  useEffect(() => {
    const newMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
    setMode(newMode);
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-2">Welcome to Agent Hub</h1>
        <p className="text-muted-foreground text-center">Your AI Agent Marketplace</p>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {mode === 'login' ? <Login /> : <Signup />}
        
        <div className="text-sm text-muted-foreground">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => setMode('signup')}
              >
                Sign up
              </Button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => setMode('login')}
              >
                Log in
              </Button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 