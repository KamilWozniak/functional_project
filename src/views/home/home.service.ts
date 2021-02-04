import { partial }                      from 'lodash-es';
import { AxiosPromise }                 from 'axios';
import { users }                        from '@/service/users';
import { posts }                        from '@/service/posts';
import { genderize }                    from '@/service/genderize';
import { performGetRequestForGivenParam } from '@/helpers/service-helpers';

export const getPosts: (ids: number[]) => AxiosPromise = partial(performGetRequestForGivenParam, posts, 'id');
export const getUsers: (ids: number[]) => AxiosPromise = partial(performGetRequestForGivenParam, users, 'id');
export const getGenders: (names: string[]) => AxiosPromise = partial(performGetRequestForGivenParam, genderize, 'name');
