import { getFormattedDatePp } from "../../helpers/formatDataPp";
import style from "./TableCrypto.module.css";

const TableCrypto = ({ price, amount, date, idx }) => {
  return (
    <tbody>
      <tr className={style.tr}>
        <td className={style.td}>{idx + 1}</td>
        <td className={style.td}>{price}</td>
        <td className={style.td}>{amount}</td>
        <td className={style.td}>{getFormattedDatePp(date)}</td>
      </tr>
    </tbody>
  );
};

export default TableCrypto;
