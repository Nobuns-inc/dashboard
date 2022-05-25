import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart" 
import { userData } from "../../pages/home/dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import "./home.css";


export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data = {userData} title = "Events Analytics" grid dataKey ="Active User"/>
      
      <div className = "homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        
      </div>
     </div> 
       

  );
}