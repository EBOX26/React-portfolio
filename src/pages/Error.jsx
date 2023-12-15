import { useRouteError } from 'react-router-dom';

// ErrorPage component for displaying error information
const ErrorPage = () => {
  // Retrieve the error information from the route
  const error = useRouteError();

  // Log the error to the console for debugging purposes
  console.error(error);

  // JSX rendering of the ErrorPage component
  return (
    <div className="error-container">
      {/* Header section */}
      <header>
        <h1>Oops! Something Went Wrong</h1>
      </header>
      {/* Main content section */}
      <section>
        {/* Error message */}
        <p>We encountered an unexpected error.</p>
        <p>Please try again later or contact support.</p>
        {/* Display the status text or message from the error */}
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </section>
    </div>
  );
};

// Export the ErrorPage component as the default export
export default ErrorPage;
