import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../data";
import WidgetSm from "../../components/widgetsm/WidgetSm";
import WidgetBg from "../../components/widgetbg/WidgetBg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="Sale Analytics"
        data={userData}
        grid="true"
        dataKey="Active User"
      />
      <div className="home_widget">
        <WidgetSm />
        <WidgetBg />
      </div>
    </div>
  );
};

export default Home;
