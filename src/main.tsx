import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { init } from '@emailjs/browser';

// Debug environment variables
console.log('Environment Check:', {
  serviceId: !!__EMAILJS_SERVICE_ID__,
  templateId: !!__EMAILJS_TEMPLATE_ID__,
  publicKey: !!__EMAILJS_PUBLIC_KEY__,
  mode: import.meta.env.MODE
});

// Initialize EmailJS
init(__EMAILJS_PUBLIC_KEY__);

// Create ErrorBoundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <pre style={{ marginTop: '10px', textAlign: 'left', color: 'red' }}>
            {this.state.error?.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// Render app with error boundary
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
