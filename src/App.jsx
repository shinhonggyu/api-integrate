import Users from "./Users";
import { UsersProvier } from "./UsersContext";

const App = () => {
  return (
    <UsersProvier>
      <Users />
    </UsersProvier>
  );
};

export default App;
