export interface Post {
  userId: number;
  postId: number;
  title: string;
  body: string;
}

export interface ApplicationState {
  isHeaderVisible: boolean;
  wallPosts: Post[];
  wallPostsOrder: number[];
  numberOfLoadedPosts: number;
  [k: string]: any;
}

export interface RootState {
  [ key: string ]: any;
}
