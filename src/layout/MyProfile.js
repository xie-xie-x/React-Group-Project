import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions.missions);
  const reservedMission = missions.filter((mission) => mission.joined);

  return (
    <div className="myprofile">
      <div className="my_missions">
        <h2>My Missions</h2>
        <ul>
          {reservedMission.map((mission) => (
            <li key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
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
