import React from 'react';
import { en } from '../../../utility/langs/en';
const { ops } = en;

const EmptyRow = () => {
  return (
    <tr>
      <td colSpan={7}>{ops}</td>
    </tr>
  );
};

export default EmptyRow;
