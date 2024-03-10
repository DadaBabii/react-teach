import css from "./Friendlist.module.css";
import FriendlistItem from "../FriendlistItem/FriendlistItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map((friend) => {
        return (
          <FriendlistItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;

// : вміст_якщо_умова_false
// friend.isOnline ?
