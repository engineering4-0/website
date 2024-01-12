import "./ProfileCard.style.scss";

const ProfileCard = ({ profileLink, imageUrl, name, position }) => {
  return (
    <div className="card">
      <div className="card__img"></div>
      <div className="card__avatar">
        <img alt="profile-pic" src={imageUrl} />
      </div>
      <div className="card__title">
        <b>{name}</b>
      </div>
      <div className="card__subtitle">{position}</div>
      <div className="card__wrapper">
        <a href={profileLink} target="_blank" rel="noreferrer">
          <button className="card__btn card__btn-solid">Connect</button>
        </a>{" "}
      </div>
    </div>
  );
};

export default ProfileCard;
