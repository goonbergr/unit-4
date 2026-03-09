class Post {
  constructor(id, userN, content, likes, timestamp) {
    this.id = id;
    this.userN = userN;
    this.content = content;
    this.likes = likes;
    this.timestamp = timestamp;
  }
}
feed = [];
let createPost = (userN, content) => {
  feed.push(
    new Post(this.id, this.userN, this.content, this.likes, this.timestamp),
  );
  return feed;
};
createPost("stuart", "goobering send pictures");
console.log(feed);
