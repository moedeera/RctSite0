import React from "react";
import Searchbar from "../../components/Searchbar";
import pic from "../../blank-avatar.png";

export const Connections = ({ SetFriend }) => {
  return (
    <div className="main-prof">
      <Searchbar setAuth={SetFriend} />
      <div className="ConnectMain">
        <div className="UpperConnect">
          <div className="LeftUC">
            <div><h3>Users</h3></div>
            <div className="UCSearch">
              <i className="fas fa-search fa-2x" style={{ color: "grey" }}></i>
              <input
                type="text"
                placeholder="Search for people"
                name="text"
                
              />
            </div>
          </div>
          <div className="RightUC">
            <div className="UCList">
              <ul>
                <li className="UCSelected">Friends</li>
                <li>Followers</li>
                <li>Following</li>
                <li>Suggestions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="LowerConnect">
          <div className="CProfile PSelected">
            <img src={pic} alt="" className="images" />
            <div><h3>Jenny</h3>
            <h5>Edmonton,Ab</h5>
            <p className="tag" style={{background:'green', color:'white'}}>message</p>
            </div>
          </div>

          <div className="CProfile">
            <img src={pic} alt="" className="images" />
            <div><h3>Jenny</h3>
            <h5>Edmonton,Ab</h5>
            <p className="tag" style={{background:'green', color:'white'}}>message</p>
            </div>
          </div>


          <div className="CProfile">
            <img src={pic} alt="" className="images" />
            <div><h3>Jenny</h3>
            <h5>Edmonton,Ab</h5>
            <p className="tag" style={{background:'green', color:'white'}}>message</p>
            </div>
          </div>


          <div className="CProfile">
            <img src={pic} alt="" className="images" />
            <div><h3>Jenny</h3>
            <h5>Edmonton,Ab</h5>
            <p className="tag" style={{background:'green', color:'white'}}>message</p>
            </div>
          </div>


          <div className="CProfile">
            <img src={pic} alt="" className="images" />
            <div><h3>Jenny</h3>
            <h5>Edmonton,Ab</h5>
            <p className="tag" style={{background:'green', color:'white'}}>message</p>
            </div>
          </div>

          <div className="CProfile">
            <img src={pic} alt="" className="images" />
            <div><h3>Jenny</h3>
            <h5>Edmonton,Ab</h5>
            <p className="tag" style={{background:'green', color:'white'}}>message</p>
            </div>
          </div>


          <div className="CProfile">
            <img src={pic} alt="" className="images" />
            <div><h3>Jenny</h3>
            <h5>Edmonton,Ab</h5>
            <p className="tag" style={{background:'green', color:'white'}}>message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
