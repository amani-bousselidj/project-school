// Staff.js
import React from 'react';

const Staff = ({ profile, name, post }) => {
  return (
    <div className="staff col-lg-3 col-md-4 col-sm-6">
      <div className="staff-team-img">
        <img src={profile} alt={`Profile of ${name}`} />
      </div>
      <div className="staff-content">
        <div className="name">{name}</div>
        <div className="post">{post}</div>
      </div>
    </div>
  );
};

export default Staff;
