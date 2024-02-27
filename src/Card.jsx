import profilePic from "./assets/logo-epic-game-news-200x200.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile-picture"></img>
      <h2 className="card-title">Epic Game News</h2>
      <p className="card-text">Check out our gaming news</p>
    </div>
  );
}

export default Card;
