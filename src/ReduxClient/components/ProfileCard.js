import React from 'react';

const profileCard = (props) => {
  return (
    <div id="userprofileouter">
      <div id="userprofile">
        <div id="userprofileleft">
          <i id="avatar" className="fas fa-user"></i>
          <div id="userinfo">
            <p id="username"></p>
            <p id="useremail"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports= profileCard;
