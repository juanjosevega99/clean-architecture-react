import { ApiUser, User } from '@/models';

export const RickAndMortyAdapter = (user: ApiUser): User => {
  return {
    id: User.id,
    name: User.name,
    status: User.status,
    species: User.species
  };
};
