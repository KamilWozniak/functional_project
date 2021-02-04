import {
  curry,
  flow,
  toLower,
  trim,
}                                                           from 'lodash-es';
import { cSplit }                                           from '@/helpers/string-helpers';
import { cGetFirstItemsOfArray }                            from '@/helpers/array/getting-values-array-helpers';
import { Gender, GenderizeAPIResponse, UserServerResponse } from '@/root/root.types';
import { createNewExtendedObject }                          from '@/helpers/object-helpers';
import { menUserPhotoBaseURL, womenUserPhotoBaseURL }       from '@/helpers/vairables';

export const getNameFromUserName = (name: string): string => {
  const namesArray: string[] = name.split(' ');
  const isPrefix: boolean = ([ 'mr.', 'mrs.' ]).includes(namesArray[ 0 ].trim().toLowerCase());
  return isPrefix ? namesArray[ 1 ] : namesArray[ 0 ];
};

export const getNameForGenderPrediction = (name: string): string => {
  const potentialName: string = flow([
    cSplit(' '),
    cGetFirstItemsOfArray(1),
    trim,
    toLower,
  ])(name);

  if (([ 'mr.', 'mrs.' ]).includes(potentialName)) {
    return potentialName.slice(0, -1);
  }
  return potentialName;
};

const injectGenderToUser = (users: UserServerResponse[], gender: GenderizeAPIResponse): UserServerResponse & { gender: Gender | null } | null => {
  const user: UserServerResponse | undefined = users.find((user: UserServerResponse) => getNameForGenderPrediction(user.name) === gender.name);
  if (user) {
    return { ...user, gender: gender.gender };
  }
  return null;
};
export const cInjectGenderToUser = curry(injectGenderToUser);

export const injectPhotoToUser = (user: UserServerResponse & { gender: Gender | null }) => {
  if (user.gender === Gender.MALE) {
    return createNewExtendedObject('photoUrl', `${menUserPhotoBaseURL}${user.id}.jpg`, user);
  }
  return createNewExtendedObject('photoUrl', `${womenUserPhotoBaseURL}${user.id}.jpg`, user);
};
