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
            {/* <th /> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thaicon</td>
            <td>dgdfhhgshkfbvfljavbfb kjfbajdfbvusdbsf sufbhalkhgvjadbvjv</td>
            <td>
              <span>Not a member</span>
            </td>
            <td>
              <button type="button" onClick={() => dispatch(missionHandler(missions.id))}>Join Mission</button>
            </td>
          </tr>

          <tr>
            <td>Thaicon</td>
            <td>dgdfhhgshkfbvfljavbfb kjfbajdfbvusdbsf sufbhalkhgvjadbvjv</td>
            <td>
              <span>Not a member</span>
            </td>
            <td>
              <button type="button" onClick={() => dispatch(missionHandler(missions.id))}>Join Mission</button>
            </td>
          </tr>

          <tr>
            <td>Thaicon</td>
            <td>dgdfhhgshkfbvfljavbfb kjfbajdfbvusdbsf sufbhalkhgvjadbvjv</td>
            <td>
              <span>Not a member</span>
            </td>
            <td>
              <button type="button" onClick={() => dispatch(missionHandler(missions.id))}>Join Mission</button>
            </td>
          </tr>
        </tbody>

      </table>

    </div>

  );
};

export default Missions;
