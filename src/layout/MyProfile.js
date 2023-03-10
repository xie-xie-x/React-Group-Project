import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const reservedMission = missions.filter((mission) => mission.joined);

  return (
    <div className="myprofile">
      <div className="mymissions">
        <h2>My Missions</h2>
        <ul>
          {reservedMission.map((mission) => (
            <li key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="missions">
        <h2>My Rockets</h2>
      </div>
    </div>
  );
};

export default MyProfile;
