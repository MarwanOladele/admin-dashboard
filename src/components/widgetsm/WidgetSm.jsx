import "./WidgetSm.css";
import img from "../../assets/image1.png";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSm = () => {
  return (
    <div className="widgetsm">
      <span className="widgetsm_title">New Join Members</span>
      <ul className="widgetsm_list">
        <li className="widgetsm_listitem">
          <img src={img} alt="user" className="widgetsm_img" />
          <div className="widgersm_user">
            <span className="widgersm_user">Marwan Oladele</span>
            <span className="widgersm_title">Software Engineer</span>
          </div>
          <button className="widgersm_btn">
            <VisibilityIcon /> Display
          </button>
        </li>
        <li className="widgetsm_listitem">
          <img src={img} alt="user" className="widgetsm_img" />
          <div className="widgersm_user">
            <span className="widgersm_user">Marwan Oladele</span>
            <span className="widgersm_title">Software Engineer</span>
          </div>
          <button className="widgersm_btn">
            <VisibilityIcon /> Display
          </button>
        </li>
        <li className="widgetsm_listitem">
          <img src={img} alt="user" className="widgetsm_img" />
          <div className="widgersm_user">
            <span className="widgersm_user">Marwan Oladele</span>
            <span className="widgersm_title">Software Engineer</span>
          </div>
          <button className="widgersm_btn">
            <VisibilityIcon /> Display
          </button>
        </li>
        <li className="widgetsm_listitem">
          <img src={img} alt="user" className="widgetsm_img" />
          <div className="widgersm_user">
            <span className="widgersm_user">Marwan Oladele</span>
            <span className="widgersm_title">Software Engineer</span>
          </div>
          <button className="widgersm_btn">
            <VisibilityIcon /> Display
          </button>
        </li>
        <li className="widgetsm_listitem">
          <img src={img} alt="user" className="widgetsm_img" />
          <div className="widgersm_user">
            <span className="widgersm_user">Marwan Oladele</span>
            <span className="widgersm_title">Software Engineer</span>
          </div>
          <button className="widgersm_btn">
            <VisibilityIcon /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
