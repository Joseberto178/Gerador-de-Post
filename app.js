class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" data-name="app" data-file="app.js">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <div className="icon-brain text-2xl text-white"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Gerador de Posts
            </h1>
            <p className="text-xl gradient-text font-semibold">Mente Bilionária</p>
            <p className="text-gray-600 mt-2">Crie posts incríveis para seu Instagram sobre crescimento e mindset</p>
          </header>
          
          <PostGenerator />
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);