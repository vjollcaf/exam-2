const api ='https://jsonplaceholder.typicode.com';

//reading data
fetch(`${api}/posts`)
.then(response => response.json())
.then(posts =>{
  posts.forEach(post => {
      let createdHtml = renderPosts(post);
      // console.log(createdHtml);
    document.getElementById('posts').appendChild(createdHtml);

  });


  // for(let i=0; i<posts.lenght;i++){
  //   let createdHtml = renderPosts(posts[i]);
  //   document.getElementById('posts').appendChild(createdHtml);
  // }
}).catch(error => console.error(error));



//render
function renderPosts(post){
   const userPost = document.createElement(`div`);

   //e mer id te post qe pranohet dhe ja dergon per me shfaq
   userPost.id = 'item-' + post.id;
  

   const createhtml = `
   <h1 class="heading--html">${post.title}</h1>
   <p class="post--html">${post.body}</p>


   <div class="post__container">
   <input type="text" id="title-${post.id}" placeholder="Title" value="${post.title}">
   <input type="number" name="userId" id="userId-${post.id}" placeholder="User Id" value="${post.userId}">
   <textarea name="body" id="body-${post.id}" cols="30" rows="10">${post.body} </textarea>

   <div class="post__buttons"> 
  <button onclick="updatePost(${post.id})" class="btn btn--update">Update Post</button>
   <button onclick="getComments(${post.id})" class="btn btn--getComments">Load Comments</button>   
   <button class="btn btn--delete" onclick="deletePost(${post.id})">Delete Post</button> 
   </div>
   </div>

   `
   userPost.innerHTML = createhtml;
   return  userPost;
}

//insert
function addPost(id){

  const title = document.getElementById('titlee').value;
  const body = document.getElementById('body').value;
  const userId = document.getElementById('userId').value;


  const postData = {
    title: title,
    body:body,
    userId: userId
  }

  fetch(`${api}/posts`,{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(postData)
  })
.then(response => response.json())

.then(post=>{
  let createdHtml = renderPosts(post);
  document.getElementById('posts').appendChild(createdHtml);
}).catch(error => console.error(error));
}

// .then(post=>{
//   let createdHtml = renderPosts(post);
//   document.getElementById('item-' + id).getElementsByTagName('h1')[0].innerText = post.title;
//   document.getElementById('item-'+ id).getElementsByTagName('p')[0].innerText =  post.textarea;
// }).catch(error => console.error(error));



function getComments(id){

}


//delete
// function deletePost(id){
//   console.log(id);

//   fetch(`${api}/posts/${id}`,{
//     method: 'DELETE',
//   }).then(response => response.json())
//   .then(post =>{
//     document.getElementById('item-'+id).remove();
//   })
// }

// Delete Post
function  deletePost(id) {
 
  fetch(`${api}/posts/${id}`,{
    method:'DELETE',
  }).then(response => response.json())
  .then(post=>{
   document.getElementById('item-' +id).remove();
  })
}

//update post
function updatePost(id) {
  console.log(id);
  const title = document.getElementById('title-'+id).value;
  const body = document.getElementById('body-'+id).value;
  const userId = document.getElementById('userId-'+id).value;

  // console.log("TITULLI:: " + title + ", TEXTAREA " + textarea + " ID:" + userId);
  const data = {
    title:title,
    body:body,
    userId:userId
  }
  fetch(`${api}/posts/${id}`,{
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  })
  .then(response => response.json())
  .then(post=>{
     document.getElementById('item-'+id).getElementsByTagName('h1')[0].innerText = post.title;
     document.getElementById('item-'+id).getElementsByTagName('p')[0].innerText = post.body;
  }).catch(error => console.error(error));
}



//render comments
function renderComments(comment){
  const commentSection = document.createElement('div');
  commentSection.id = 'comment-section-' + comment.id ;

  const html = `
    <div class="modal__container"> 
        <h1>${comment.name}</h1>
       <a href="mailto:${comment.email}">From: ${comment.email}</a>
        <p>${comment.body}</p>

    </div>
  `
  commentSection.innerHTML = html;
  return commentSection;
}


function getComments(id){
  fetch(`${api}/posts/${id}/comments`)
  .then(response => response.json())
  .then(comments => {
    document.getElementById('comments').innerHTML = '';
    comments.forEach(comment => {
      let createComment = renderComments(comment);
      document.getElementById('comments').appendChild(createComment);
   });
  document.getElementById('modal').classList.add('active');
})
.catch(error => console.error(error));

}



function closeModal() {
  document.getElementById('comments').innerHTML = '';
  document.getElementById('modal').classList.remove('active');
}
