import { posts } from '@/service/users';
import { curry } from 'lodash-es';

export const getSinglePostById = (id: number) => posts.get(id.toString());
export const cGetSinglePostById = curry(getSinglePostById);
