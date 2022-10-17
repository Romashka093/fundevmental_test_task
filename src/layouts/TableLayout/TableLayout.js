import { Table } from '../../components/Table';
import styles from './TableLayout.module.scss';

const { mainWrap } = styles;

const TableLayout = () => {
  return (
    <main className={mainWrap}>
      <Table />
    </main>
  );
};

export default TableLayout;
