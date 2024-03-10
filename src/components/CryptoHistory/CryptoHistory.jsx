import style from "./CryptoHistory.module.css";
import TableCrypto from "./TableCrypto";

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      {items.map(({ id, price, amount, date }, idx) => {
        return (
          <TableCrypto
            key={id}
            idx={idx}
            price={price}
            amount={amount}
            date={date}
          />
        );
      })}
    </table>
  );
};

export default CryptoHistory;
