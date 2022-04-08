const Profile = (props) => {
  return (
    <div className="profile__container arrowdown">
      <div>
        <div className="profile--user"></div>
        <p className="profile--user-text">Albert</p>
      </div>
      <div className="profile profile__dropdown">
        <p className="profile-textOutside">Account</p>
        <p className="profile-textOutside">Help Center</p>
        <p className="profile-textOutside">Sign out of Netflix</p>
      </div>
    </div>
  );
};

export default Profile;
