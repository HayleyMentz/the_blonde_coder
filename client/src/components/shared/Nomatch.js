import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
  <div backgroundColor="#ffaaab">
    <h1>404 -  Page Not Found</h1>
    <Link to='/'>
      Return Home
    </Link>
    </div>
  </>
)

export default Nomatch;

