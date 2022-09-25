import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Row from './Row';

const Rows = () => {
  const { gameSettings } = useContext(AppContext);
  return (
    <ul className="rows">
      {Array.from(Array(gameSettings.rows), (e, i) => {
        return <Row key={i} row={i} />;
      })}
    </ul>
  );
};
export default Rows;
