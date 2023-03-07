import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRocket } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket());
  }, []);

  return (
    <>
      <div className="rocket-container">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket">
            <img src={rocket.flickr_images} alt={rocket.id} />
            <div className="rocket-detail">
              <h2>{rocket.name}</h2>
              <p>{rocket.description}</p>
              <button type="button">Reserve Rocket</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rockets;
