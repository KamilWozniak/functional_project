export interface Post {
  userId: number;
  postId: number;
  title: string;
  body: string;
}

export interface Location {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Location;
}

export interface UserServerResponse {
  id: number;
  name: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: Company;
}

export interface User extends UserServerResponse {
  photoUrl: string;
}

export interface ApplicationState {
  isHeaderVisible: boolean;
  wallPosts: Post[];
  wallPostsOrder: number[];
  numberOfLoadedPosts: number;
  users: User[];
  [k: string]: any;
}

export interface RootState {
  [ key: string ]: any;
}
