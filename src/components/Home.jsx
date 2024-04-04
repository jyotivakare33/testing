import Sidebar from "./Sidebar";
import Tab from "./Tab";

const Home = () => {
  return (
    <div className="container">
      <div className="flex-1" />
      <Sidebar />
      <div className="flex-2">
        <div className="text-justify font-bold text-3xl">Home</div>
        <Tab />
      </div>
    </div>
  );
};

export default Home;
