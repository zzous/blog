import { Link, useLocation, useMatch } from 'react-router-dom';

const NoMatch = () => {
  const location = useLocation();
  const match = useMatch('*');

  return (
    <>
      Page Not Found: <Link to="/">Go to the home page</Link>
      <hr />
      <div>match: <br /> {JSON.stringify(match)}</div>
      <div>location : <br /> {JSON.stringify(location)}</div>
    </>
  );
};
export default NoMatch;