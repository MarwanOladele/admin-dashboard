import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="newuser_title">New User</h1>
      <form className="newuser_form">
        <div className="newuser_item">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newuser_item">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newuser_item">
          <label>Email</label>
          <input type="email" placeholder="johnsmith@gmail.com" />
        </div>
        <div className="newuser_item">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newuser_item">
          <label>Phone</label>
          <input type="text" placeholder="+234 7058 573243" />
        </div>
        <div className="newuser_item">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newuser_item">
          <label>Gender</label>
          <div className="input_radio ">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Others</label>
            
          </div>
        </div>
        <div className="newuser_item">
          <label>Active</label>
          <select name="active" id="active" className="newuser_select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
