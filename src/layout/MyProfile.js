import { useSelector } from 'react-redux';
import './styles/myprofile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions.missions);
  const reservedMission = missions.filter((mission) => mission.joined);

  return (
    <div className="myprofile">
      <div className="mymissions">
        <h3>My Missions</h3>
        <ul>
          {reservedMission.map((mission) => (
            <li key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="myrockets">
        <h3>My Rockets</h3>
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
