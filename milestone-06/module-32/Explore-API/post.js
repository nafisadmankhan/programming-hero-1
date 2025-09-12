const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        displayPosts(data)
    })
}

/**
 * 
 * {
        "userId": 10,
        "id": 93,
        "title": "beatae soluta recusandae",
        "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
    } 
 */

const displayPosts = (posts) => {

    // console.log(posts)
    
    // for (let i = 0; i < posts.length ; i++) {
        //     console.log(posts[i])
        // }
        
        // for (let post of posts) {
            //     console.log(post)
            // }
            
    // 1. get the container and empty the container

    const postContainer = document.getElementById("post-container")
    postContainer.innerHTML = ""

    console.log(postContainer)
    
    posts.forEach((post) => {
        // console.log(post)
        // console.log(post.id)
        // console.log(post.body)
        // console.log(post.title)

        // 2. create HTML element
        
        // const li = document.createElement("li")
        // li.innerText = post.title 
        // console.log(li)

        const postCard = document.createElement("div")
        postCard.innerHTML = `<div class="post-card">
            <h2>${post.title}</h2>
            <p>
                ${post.body}
            </p>
        </div>`

        // 3. add to the container

        // postContainer.appendChild(li)
        postContainer.appendChild(postCard)
    })
}

loadPost()