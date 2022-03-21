import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext";
import { useState } from "react";
import User from "./User";

const Users = () => {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;

  const fetchUsers = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!users) return <button onClick={fetchUsers}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
