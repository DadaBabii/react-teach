import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./datasJSON/userData.json";
import FriendList from "./components/Friendlist/FriendList";
import friends from "./datasJSON/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./datasJSON/transactions.json";
import CryptoHistory from "./components/CryptoHistory/CryptoHistory";
import crypto from "./datasJSON/crypto.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <CryptoHistory items={crypto} />
    </>
  );
};

export default App;
