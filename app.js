import mockData from './data.json' assert {type: 'json'}
console.log(mockData)

function createComment() {
  const commentsContainer = document.querySelector(".notifications");
  const commentTemplate = document.querySelector(".comment-template");
  var commentNode = commentTemplate.cloneNode(true);
  commentsContainer.appendChild(commentNode)

  commentNode.querySelector(".comment-template .user-name").innerText = mockData.comments[1].user.username;
  commentNode.querySelector(".avatar").src = mockData.comments[1].user.image.webp;
  commentNode.querySelector(".score").innerText = mockData.comments[1].score;
  commentNode.querySelector(".created-at").innerText = mockData.comments[1].createdAt;
  commentNode.querySelector(".comment-content").innerText = mockData.comments[1].content;

}
createComment()