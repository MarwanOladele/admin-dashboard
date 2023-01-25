import "./User.css";
import img from "../../assets/image1.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublishIcon from "@mui/icons-material/Publish";

const User = () => {
  return (
    <div className="user">
      <div className="usertitle_container">
        <h1 className="usertitle">Edit User</h1>
        <button className="useraddbutton">Create</button>
      </div>
      <div className="usercontainer">
        <div className="usershow">
          <div className="usershowtop">
            <img src={img} alt="img" className="userimg" />
            <div className="usershowtoptitle">
              <span className="usershowusername">Anna Becker</span>
              <span className="usershowusertitle">Software Engineer</span>
            </div>
          </div>
          <div className="usershowbottom">
            <span className="usershowtitle">Account Details</span>
            <div className="usershownfo">
              <PermIdentityIcon className="usershowicon" />
              <span className="usershowinfotitle">Annabeck99</span>
            </div>
            <div className="usershownfo">
              <CalendarTodayIcon className="usershowicon" />
              <span className="usershowinfotitle">23. 01. 1992.</span>
            </div>
            <span className="usershowtitle">Contact Details</span>
            <div className="usershownfo">
              <PhoneIcon className="usershowicon" />
              <span className="usershowinfotitle">+234 70 58574353</span>
            </div>
            <div className="usershownfo">
              <MailOutlineIcon className="usershowicon" />
              <span className="usershowinfotitle">Annabeck99@gmail.com</span>
            </div>
            <div className="usershownfo">
              <LocationOnIcon className="usershowicon" />
              <span className="usershowinfotitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userupdate">
          <span className="userupdatetitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="phone"
                  placeholder="234 70 58574353"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userupdateupload">
                <img src={img} alt="img" className="userUploadImg" />
                <label htmlFor="file">
                  <PublishIcon style={{cursor: 'pointer'}}/>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
