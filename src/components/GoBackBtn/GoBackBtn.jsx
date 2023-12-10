import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';
const GoBackBtn = ({ path }) => {
  return (
    <Link to={path} className={css.link}>
      Go Back
    </Link>
  );
};
export default GoBackBtn;
