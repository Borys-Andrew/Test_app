import { RootState } from 'app/store';
import { useSelector } from 'react-redux';

export function useAuth() {
  const { id, name, email, token } = useSelector(
    (state: RootState) => state.user,
  );

  return { isAuth: !!email, id, name, email, token };
}
