import { useState } from 'react';
import PropTypes from 'prop-types';
import Portal from '../../templates/portal/portal';
import useModal from '../../../hooks/use-modal';
import formatDate, { stringToDate } from '../../../utilities/date-handler';
import UserServices from '../../../services/user';
import './post-header.css';

export default function PostHeader({ userId, shortInfo }) {
  const [userProfile, setUserProfile] = useState(null);
  const { isModalShowing, setShowModal } = useModal();
  const { picture, firstName, lastName } = shortInfo;

  const getUserProfile = async (userId) => {
    const userProfile = await UserServices.getUserProfileById(userId);
    setUserProfile(userProfile);
  };

  return (
    <>
      <button
        onClick={() => {
          getUserProfile(userId);
          setShowModal(true);
        }}
        className='post__header'
      >
        <img src={picture} alt={`${firstName}'s profile picture`} />
        <p>{`${firstName} ${lastName}`}</p>
      </button>
      {userProfile !== null && (
        <Portal modalState={{ state: isModalShowing, setter: setShowModal }}>
          <div className='profile'>
            <p className='profile__name'>{`${userProfile.title} ${userProfile.firstName} ${userProfile.lastName}`}</p>
            <img
              className='profile__image'
              src={userProfile.picture}
              alt={`${userProfile.firstName}'s profile picture`}
            />
            <div className='profile__info'>
              <p>
                Gender: <label>{userProfile.gender}</label>
              </p>
              <p>
                Email: <label>{userProfile.email}</label>
              </p>
              <p>
                Phone number: <label>{userProfile.phone}</label>
              </p>
              <p>
                Location:{' '}
                <label>{`${userProfile.location.street},${userProfile.location.city},${userProfile.location.state},${userProfile.location.country},${userProfile.location.timezone}`}</label>
              </p>
              <p>
                Birthday:
                <input
                  readOnly
                  type='date'
                  defaultValue={formatDate(
                    stringToDate(userProfile.dateOfBirth)
                  )}
                />
              </p>
              <p>
                Register date:
                <input
                  readOnly
                  type='date'
                  defaultValue={formatDate(
                    stringToDate(userProfile.registerDate)
                  )}
                />
              </p>
              <p>
                Updated Date:
                <input
                  readOnly
                  type='date'
                  defaultValue={formatDate(
                    stringToDate(userProfile.updatedDate)
                  )}
                />
              </p>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

PostHeader.propTypes = {
  userId: PropTypes.string,
  shortInfo: PropTypes.object,
};
