import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRocket, reserveRocket, cancelReserve } from '../redux/rockets/rocketsSlice';

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
              <p>
                {rocket.reserved === true ? <span className="reserve">Reserved</span> : ''}
                {rocket.description}
              </p>
              { rocket.reserved === false
                ? (
                  <button onClick={() => { dispatch(reserveRocket(rocket.id)); }} type="button">Reserve Rocket</button>
                )
                : (
                  <button className="cancel-btn" onClick={() => { dispatch(cancelReserve(rocket.id)); }} type="button">Cancel Reservation</button>
                )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rockets;
