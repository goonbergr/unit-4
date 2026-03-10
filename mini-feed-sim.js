let id = 0;
feed = [];
let creatPost = (usrN, content) => {
  id++;
  post = {
    id: id,
    userN: [],
    content: [],
    likes: 0,
    timestamp: Date.now(),
    addName(userN) {
      return post.userN.push(userN);
    },
    addContent(content) {
      return post.content.push(content);
    },
  };
  post.addName(usrN);
  post.addContent(content);
  feed.push(post);
};
let likePost = (id) => {
  feed.map((post) => {
    if (id === post.id) {
      post.likes++;
    }
  });
};
let getFeed = () => {
  return feed;
};

creatPost("stuart", "goobing rn, need inspo");
creatPost("stuart", "goobering");
creatPost("stuart", "goober");
likePost(2);
likePost(2);
console.log(feed);
