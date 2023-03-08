import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="myprofile">
      <div className="mymissions">
        <h2>My Missons</h2>
      </div>
      <div className="myrockets">
        <h2>My Rockets</h2>
        <ul>
          {reservedRocket.map((rocket) => (
            <li key={rocket.name}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
