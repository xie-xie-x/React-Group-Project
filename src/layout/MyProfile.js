import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMission = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="myprofile">
      <div className="mymissions">
        <h2>My Missions</h2>
        <ul>
          {reservedMission.map((mission) => (
            <li key={mission.id}>{mission.name} isRe</li>
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
