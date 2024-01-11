import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useBoundStore } from '../../../hooks/stores/useBoundedStore';
import './google-login-button.css';

export default function GoogleLoginButton() {
  const dispatchLogIn = useBoundStore((state) => state.logIn);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      await fetch(import.meta.env.VITE_GOOGLE_API_USERINFO, {
        headers: {
          Authorization: `${tokenResponse.token_type} ${tokenResponse.access_token}`,
        },
      }).then(async (response) => {
        const userData = await response.json();
        dispatchLogIn(userData);
        navigate('/home');
      });
    },
  });
  return (
    <button className='google-button' onClick={login}>
      Login with Google
    </button>
  );
}
