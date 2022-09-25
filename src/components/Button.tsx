import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Button = () => {
  const { rows } = useContext(AppContext);
  return <button>{rows}</button>;
};
export default Button;
