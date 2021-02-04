import { partial }                      from 'lodash-es';
import { AxiosPromise }                 from 'axios';
import { users }                        from '@/service/users';
import { posts }                        from '@/service/posts';
import { genderize }                    from '@/service/genderize';
import { performGetRequestForGivenIds } from '@/helpers/service-helpers';

export const getPosts: (ids: number[]) => AxiosPromise = partial(performGetRequestForGivenIds, posts);
export const getUsers: (ids: number[]) => AxiosPromise = partial(performGetRequestForGivenIds, users);

export const getUserGenderByName = (name: string) => genderize.get(`?name=${name}`);
