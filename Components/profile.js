import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = {
    company: "",
    user: "",
    email: location.state.email,
    fName: "",
    lName: "",
    address: "",
    city: "",
    country: "",
    pcode: "",
    about: ""
  };
  const [info, setInfo] = useState(data);
  const handlefield = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleInput = async () => {
    let validate = validateInput(info);
    if (validate == false) return;
    try {
      let res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        info
      );
      console.log(info);
      setInfo(data);
      console.log("register sucess");
      navigate("/Success");
    } catch (e) {
      console.log(e.message);
    }
  };
  const validateInput = (data) => {
    if (data.fName === "") {
      return false;
    } else if (data.fName.length < 6) {
      return false;
    } else if (data.lName === "") {
      return false;
    } else if (data.lName.length < 6) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="profile">
      <h1>Edit Profile</h1>
      <div className="profile-detail">
        <label>COMPANY</label>
        <input
          type="text"
          value={info.company}
          name="company"
          onChange={handlefield}
        />
        <label>USER NAME</label>
        <input
          type="text"
          value={info.user}
          name="user"
          onChange={handlefield}
        />
        <label>EMAIL ADDRESS</label>
        <input
          type="email"
          value={info.email}
          name="email"
          onChange={handlefield}
        />
      </div>
      <div className="profile-detail1">
        <label>FIRST NAME*</label>
        <input
          type="text"
          value={info.fName}
          name="fName"
          onChange={handlefield}
        />
        <label>LAST NAME*</label>
        <input
          type="text"
          value={info.lName}
          name="lName"
          onChange={handlefield}
        />
      </div>
      <div className="profile-detail1">
        <label>ADDRESS</label>
        <input
          type="text"
          value={info.address}
          name="address"
          onChange={handlefield}
        />
      </div>
      <div className="profile-detail1">
        <label>CITY</label>
        <input
          type="text"
          value={info.city}
          name="city"
          onChange={handlefield}
        />
        <label>COUNTRY</label>
        <input
          type="text"
          value={info.country}
          name="country"
          onChange={handlefield}
        />
        <label>POSTAL CODE</label>
        <input
          type="text"
          value={info.pcode}
          name="pcode"
          onChange={handlefield}
        />
      </div>

      <div className="profile-detail1">
        <label>ABOUT ME</label>
        <textarea
          type="teaxt"
          value={info.about}
          name="about"
          onChange={handlefield}
        />
      </div>
      <button className="button-1" type="submit" onClick={handleInput}>
        Update Profile
      </button>
    </div>
  );
}
export default Profile;
