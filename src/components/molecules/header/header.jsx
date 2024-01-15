import { Link } from 'react-router-dom';
import LogOutIcon from '../../../assets/icons/logout-icon.svg';
import useGlobalStore from '../../../hooks/use-store';
import './header.css';

export default function Header() {
  const {
    dispatchers: { setLogOut },
    states: { authUser },
  } = useGlobalStore();

  return (
    <header className='header'>
      <Link to='/home'>
        <h1>VITE SOCIAL MEDIA</h1>
      </Link>
      <div className='header__user'>
        <img
          src={authUser.picture}
          alt={`${authUser.name}'s profile picture`}
        />
        <p>{authUser.name}</p>
        <button onClick={setLogOut}>
          <img src={LogOutIcon} alt='Log out' />
        </button>
      </div>
    </header>
  );
}
