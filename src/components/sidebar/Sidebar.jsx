import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaidIcon from "@mui/icons-material/Paid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import EmailIcon from "@mui/icons-material/Email";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list ">
            <Link to='/' className="link">
              <li className="sidebar-listitem active">
                <LineStyleIcon className="sidebar_icon" /> Home
              </li>
            </Link>
            <li className="sidebar-listitem">
              <TimelineIcon className="sidebar_icon" /> Analytics
            </li>
            <li className="sidebar-listitem">
              <TrendingUpIcon className="sidebar_icon" /> Sales
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">QUick Menu</h3>
          <ul className="sidebar-list ">
            <Link to="/users" className="link">
              <li className="sidebar-listitem ">
                <PersonIcon className="sidebar_icon" /> users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar-listitem">
                <InventoryIcon className="sidebar_icon" /> Products
              </li>
            </Link>
            <li className="sidebar-listitem">
              <PaidIcon className="sidebar_icon" /> Transactions
            </li>
            <li className="sidebar-listitem">
              <AssessmentIcon className="sidebar_icon" /> Reports
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list ">
            <li className="sidebar-listitem ">
              <MailOutlineIcon className="sidebar_icon" /> Mail
            </li>
            <li className="sidebar-listitem">
              <QuestionAnswerIcon className="sidebar_icon" /> Feedback
            </li>
            <li className="sidebar-listitem">
              <EmailIcon className="sidebar_icon" /> Messages
            </li>
          </ul>
        </div>

        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list ">
            <li className="sidebar-listitem">
              <ManageAccountsIcon className="sidebar_icon" /> Manage
            </li>
            <li className="sidebar-listitem">
              <TimelineIcon className="sidebar_icon" /> Analytics
            </li>
            <li className="sidebar-listitem">
              <AssessmentIcon className="sidebar_icon" /> Report
            </li>
          </ul>
        </div>
        <div className="color">
          <div className="white"></div>
          <div className="black"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
