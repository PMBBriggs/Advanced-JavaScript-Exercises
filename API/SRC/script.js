console.log("is this thing on?")
// Chuck Norris Jokes
// fetch("https://api.chucknorris.io/jokes/random")
// .then( response  =>  response.json() )
// .then ( data => {
//     // console.log(data.value);
//     let p = document.createElement("P");
//     p.innerText = data.value;
//     document.body.appendChild(p);
    
// });

// Reddit Response



document.querySelector("#submit").addEventListener("click", (e) => {
    // e.preventDefault();

    var subReddit = document.querySelector("#subReddit").value;

    fetch(`https://www.reddit.com/r/${subReddit}/.json`)
    .then(response => response.json() )
    .then(data => {
        let posts = data.data.children; //array of posts
        console.log({posts}); // console logs what you named it
    
        for (let i = 0; i < 10; i++){
            let eachPost = document.createElement("div")
            eachPost.classList.add("posts")
            eachPost.innerText = posts[i].data.title
            document.body.append(eachPost);
            console.log(eachPost);
            // put images on page
            let eachImage = document.createElement("img");
            eachImage.src = posts[i].data.thumbnail;
            eachPost.append(eachImage);
    
            let eachLink = document.createElement("a");
            eachLink.href = posts[i].data.url ;
            eachLink.innerText = "Check out this Link!" ;
            eachPost.append(eachLink);
           
        }
         
    })
})