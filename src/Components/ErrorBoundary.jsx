// ErrorBoundary.js
import{ Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };


  componentDidCatch(error, info) {
    // Log error details for debugging
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // If error occurs, show this fallback UI
      return <h1>Something went wrong! Please try again later.</h1>;
    }

    // If no error, render children
  
  }
}

export default ErrorBoundary;
