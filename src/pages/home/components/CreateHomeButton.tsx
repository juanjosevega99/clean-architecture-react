import { useState, useEffect } from 'react';
import { createUser } from '@/redux/slices/user.slice';
import { useDispatch } from 'react-redux';

import { UserEmptyState } from '../../../models/user.type';
import { fetchMorty, rickAndMortyUrl } from '../services';

export default function CreateHomeButton() {
  const dispatch = useDispatch();
  const [morty, setMorty] = useState(UserEmptyState);
  const getMorty = async () => {
    const result = await fetchMorty(rickAndMortyUrl);
    setMorty(result);
  };

  useEffect(() => {
    getMorty()
  }, [])

  const dispathAction = () => {
    dispatch(createUser(morty))
  }

  return <button onClick={dispathAction}>Dispatch create action</button>
}
