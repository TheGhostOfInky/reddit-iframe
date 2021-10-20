var subreddit = window.frameElement.getAttribute("sub")
var url = "https://www.reddit.com/r/" + subreddit + "/new.json?limit=3"

fetch(url)
    .then(response => response.json())
    .then(data => parsedata(data))

function parsedata(data) {
    var posts = data.data.children
    for (var i=0; i < posts.length; i++) {
        document.getElementById(`link${i}`).href = `https://www.reddit.com${posts[i].data.permalink}`
        if (posts[i].data.thumbnail != ""){
            document.getElementById(`img${i}`).src = posts[i].data.thumbnail
        } else {
            document.getElementById(`img${i}`).src = "https://www.redditinc.com/assets/images/site/reddit-logo.png"
        }
        document.getElementById(`title${i}`).innerHTML = posts[i].data.title
        document.getElementById(`ups${i}`).innerHTML = `${posts[i].data.ups} upvotes`
        console.log(posts[i].data.permalink)
        console.log(posts[i].data.title)
        console.log(posts[i].data.thumbnail)
        console.log(posts[i].data.ups)
    }
}