import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useToast } from '../../components/ui/use-toast';

export function AuthCallback() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the URL parameters
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const queryParams = new URLSearchParams(window.location.search);
        
        // Check for error in URL
        const errorDescription = queryParams.get('error_description') || hashParams.get('error_description');
        if (errorDescription) {
          throw new Error(errorDescription);
        }

        // Get the type of auth callback
        const type = queryParams.get('type') || hashParams.get('type');
        console.log('Auth callback type:', type); // Debug log

        // Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) throw sessionError;

        if (session) {
          // If we have a session, show success message based on type
          const message = type === 'signup' 
            ? "Email verified successfully! You can now log in."
            : "Authentication successful!";
          
          toast({
            title: "Success",
            description: message,
          });

          // Clear any temporary storage
          localStorage.removeItem('tempEmail');

          // Redirect based on type
          if (type === 'signup' || type === 'recovery') {
            navigate('/auth', { replace: true });
          } else {
            // Redirect to producer dashboard after successful login
            navigate('/producer', { replace: true });
          }
        } else {
          // If no session, try to exchange the token
          const accessToken = hashParams.get('access_token');
          const refreshToken = hashParams.get('refresh_token');

          if (accessToken && refreshToken) {
            const { data, error: setSessionError } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });

            if (setSessionError) throw setSessionError;

            if (data.session) {
              navigate('/producer', { replace: true });
              return;
            }
          }
          
          throw new Error('No session found');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        const errorMessage = error instanceof Error ? error.message : "Authentication failed";
        setError(errorMessage);
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
        navigate('/auth', { replace: true });
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Authentication failed: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse">Completing authentication...</div>
    </div>
  );
} 