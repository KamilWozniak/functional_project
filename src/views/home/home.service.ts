import { users }     from '@/service/users';
import { curry }     from 'lodash-es';
import { posts }     from '@/service/posts';
import { genderize } from '@/service/genderize';

export const getSinglePostById = (id: number) => posts.get(id.toString());
export const cGetSinglePostById = curry(getSinglePostById);

export const cGetSingleUserById = curry((id: number) => users.get(id.toString()));

export const getUserGenderByName = (name: string) => genderize.get(`?name=${name}`);
export const cGetUserGenderByName = curry(getUserGenderByName);
