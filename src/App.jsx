import CakeView from "../features/cake/cakeView";
import IceCreamView from "../features/iceCream/IceCreamView";
import UserList from "../features/user/UserList";

const App = () => {
  return (
    <div>
      <CakeView />
      <UserList />
      <IceCreamView />
    </div>
  );
};

export default App;
