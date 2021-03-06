const SERVER = "http://172.26.1.1/";
export const apiConstants = {
  MediaServer: "http://169.254.146.101:9000/",
  auth: SERVER + "api/auth",
  media: SERVER + "api/p/new_media/",
  getProfile: SERVER+"api/u/read/",
  editProfile: SERVER+"api/u/update/",
  getMyPosts: SERVER+"api/p/read_my_posts/",
  getFeed: SERVER+"api/p/feed/",
  getUserPosts: SERVER+"api/p/read_my_posts/",
  getPosting: SERVER+"api/p/read/",
  newPost: SERVER+"api/p/create/",
  deletePost: SERVER+"api/p/delete/",
  likePost: SERVER+"api/p/like/",
  search: SERVER+"api/search/",
  getFollow: SERVER+"api/u/get_follow/",
  follow: SERVER+"api/u/follow/",
  unfollow: SERVER+"api/u/unfollow/"
};

