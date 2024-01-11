import { Link } from 'react-router-dom';
import { useBoundStore } from '../../../hooks/stores/useBoundedStore';
import LogOutIcon from '../../../assets/icons/logout-icon.svg';
import './header.css';

export default function Header() {
  const userInfo = useBoundStore((state) => state.authUser);
  const dispatchLogOut = useBoundStore((state) => state.logOut);

  return (
    <header className='header'>
      <Link to='/home'>
        <h1>VITE SOCIAL MEDIA</h1>
      </Link>
      <div className='header__user'>
        <img
          src={userInfo.picture}
          alt={`${userInfo.name}'s profile picture`}
        />
        <p>{userInfo.name}</p>
        <button onClick={dispatchLogOut}>
          <img src={LogOutIcon} alt='Log out' />
        </button>
      </div>
    </header>
  );
}
