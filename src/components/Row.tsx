import Circles from './Circles';
import Hints from './Hints';
import Submit from './Submit';

type Row = {
  row: number;
};

const Row = ({ row }: Row) => {
  return (
    <li className="row">
      <Circles />
      <Submit />
      <Hints />
    </li>
  );
};
export default Row;
