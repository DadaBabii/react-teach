

const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(friend => {
                return friend.isOnline ?  
                ( <li key={friend.id}>
                    <div>
                        <img src={friend.avatar} alt="Avatar" width="48" />
                        <p>{friend.name}</p>
                        <p>Online</p>
                    </div>
                </li>): ( <li key={friend.id}>
                    <div>
                        <img src={friend.avatar} alt="Avatar" width="48" />
                        <p>{friend.name}</p>
                        <p>Offline</p>
                    </div>
                </li>)
            })}
        </ul>
    );
};

export default FriendList

// : вміст_якщо_умова_false
