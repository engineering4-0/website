import "./ProfileCard.style.scss";

const ProfileCard = ({ profileLink, imageUrl, name, position }) => {
  return (
    <div className="card">
      <div className="card__img"></div>
      <div className="card__avatar">
        <img
          alt="profile-pic"
          style={{
            height: "inherit",
            width: "inherit",
            borderRadius: "50%",
            border: "2px solid black",
          }}
          src={imageUrl}
        />
      </div>
      <div className="card__title">
        <b>{name}</b>
      </div>
      <div className="card__subtitle">{position}</div>
      <div className="card__wrapper">
        <button className="card__btn card__btn-solid">Connect</button>
      </div>
    </div>
  );
};

export default ProfileCard;
