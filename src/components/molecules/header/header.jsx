import { Link } from 'react-router-dom';
import { useBoundStore } from '../../../hooks/stores/useBoundedStore';
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
        <p>{userInfo.name}</p>
        <img
          src={userInfo.picture}
          alt={`${userInfo.name}'s profile picture`}
        />
        <button onClick={dispatchLogOut}>Log out</button>
      </div>
    </header>
  );
}
