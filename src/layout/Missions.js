import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missions/missionsSlice';
import './styles/missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, []);

  const missionHandler = (missionId) => {
    const mission = missions.find((mission) => mission.mission_id === missionId);
    const newMission = { ...mission, joined: !mission.joined };
    const newMissions = missions.map((mission) => (mission.mission_id === missionId
      ? newMission
      : mission));
    dispatch(joinMission(newMissions));
  };

  return (
    <div className="mission_container">
      <table className="table_container">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="row">
              <td className="tbody_header">{mission.mission_name}</td>
              <td className="body_description pb-4">{mission.description}</td>
              <td>
                <span>{mission.joined ? 'Active member' : 'NOT A MEMBER'}</span>
              </td>
              <td>
                <button type="button" onClick={() => missionHandler(mission.mission_id)}>{mission.joined ? 'Leave mission' : 'Join mission'}</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>

  );
};

export default Missions;
