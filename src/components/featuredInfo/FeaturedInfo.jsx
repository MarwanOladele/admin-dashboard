import "./FeaturedInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured_item">
        <span className="featured_title">Revenue</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,410</span>
          <span className="featured_rate">
            -11.4 <ArrowDownwardIcon />
          </span>
        </div>
        <span className="feature_sub">Compared to last month</span>
      </div>

      <div className="featured_item">
        <span className="featured_title">Cost</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,348</span>
          <span className="featured_rate">
           +1.4 <ArrowUpwardIcon />
          </span>
        </div>
        <span className="feature_sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
