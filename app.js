import mockData from './data.json' assert {type: 'json'}
// console.log(mockData)
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const score = document.querySelector(".score")
plusBtn.addEventListener('click', addScore)
minusBtn.addEventListener('click', subtractScore)
let addOne = false;
let minusOne = false;
function addScore() {
  if (!addOne) {
    score.innerText++;
  }
  addOne = true;
}
function subtractScore() {
  if (!minusOne) {
    score.innerText--;
  }
  minusOne = true;
}


function createComment() {
  const commentsContainer = document.querySelector(".notifications");
  const commentTemplate = document.querySelector(".comment-template");
  var commentNode1 = commentTemplate.cloneNode(true);
  var commentNode2 = commentTemplate.cloneNode(true);
  var commentNode3 = commentTemplate.cloneNode(true);
  commentsContainer.appendChild(commentNode1);
  commentsContainer.appendChild(commentNode2)
  commentsContainer.appendChild(commentNode3)

  commentNode1.querySelector(".user-name").innerText = mockData.comments[1].user.username;
  commentNode1.querySelector(".avatar").src = mockData.comments[1].user.image.webp;
  commentNode1.querySelector(".score").innerText = mockData.comments[1].score;
  commentNode1.querySelector(".created-at").innerText = mockData.comments[1].createdAt;
  commentNode1.querySelector(".comment-content").innerText = mockData.comments[1].content;

  commentNode2.querySelector(".user-name").innerText = mockData.comments[1].replies[0].user.username;
  commentNode2.querySelector(".avatar").src = mockData.comments[1].replies[0].user.image.webp;
  commentNode2.querySelector(".score").innerText = mockData.comments[1].replies[0].score;
  commentNode2.querySelector(".created-at").innerText = mockData.comments[1].replies[0].createdAt;
  commentNode2.querySelector(".comment-content").innerText = mockData.comments[1].replies[0].content;

  commentNode3.querySelector(".user-name").innerText = mockData.comments[1].replies[1].user.username;
  commentNode3.querySelector(".avatar").src = mockData.comments[1].replies[1].user.image.webp;
  commentNode3.querySelector(".score").innerText = mockData.comments[1].replies[1].score;
  commentNode3.querySelector(".created-at").innerText = mockData.comments[1].replies[1].createdAt;
  commentNode3.querySelector(".comment-content").innerText = mockData.comments[1].replies[1].content;


}
createComment()