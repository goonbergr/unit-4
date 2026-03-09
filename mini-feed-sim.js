class Post {
  constructor(id, userN, content, likes, timestamp) {
    this.id = id;
    this.userN = userN;
    this.content = content;
    this.likes = likes;
    this.timestamp = timestamp;
  }
  feed = [];
  creatPost(usrN, content) {
    post = {
      addName(userN) {
        return post.userN.push(userN);
      },
      addContent(content) {
        return post.content.push(content);
      },
      genId() {
        id = 0;
        id += 1;
        return id;
      },
    };
    post.addName(usrN);
    post.addContent(content);
    post.genId();
    feed.push(post);
    console.log(feed);
  }
}
creatPost("stuart", "goobing rn, need inspo");
