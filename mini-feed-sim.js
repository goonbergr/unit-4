let id = 0;
feed = [];
let creatPost = (usrN, content) => {
  id++;
    post = {
        id: id,
        userN: [],
        content: [],
        likes: 0,
        timestamp: 0,
        addName(userN) {
            return post.userN.push(userN);
        },
        addContent(content) {
            return post.content.push(content);
        },
    ;
  post.addName(usrN);
  post.addContent(content);
  feed.push(post);
  console.log(feed);
};
creatPost("stuart", "goobing rn, need inspo");
creatPost("stuart", "goobering");
creatPost("stuart", "goober");
