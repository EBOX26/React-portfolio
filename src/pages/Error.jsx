// import { useRouteError } from 'react-router-dom';

// export default function ErrorPage() {
//   const error = useRouteError();
//   console.error(error);

//   return (
//     <div>
//       <h1>Error</h1>
//       <p>An unforseen error has occurred.</p>
//       <p>
//         <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   );
// }


import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <header>
        <h1>Oops! Something Went Wrong</h1>
      </header>
      <section>
        <p>We encountered an unexpected error.</p>
        <p>Please try again later or contact support.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </section>
    </div>
  );
};

export default ErrorPage;
