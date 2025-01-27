const data = [
    {
        pfp:"./assets/profile-pics/pfp1.jpeg",
        circle:"./assets/stories/story1.gif",
        userName:"Your story"
    },
    {
        pfp:"./assets/profile-pics/pfp2.jpg",
        circle:"./assets/stories/story.jpg",
        userName:"Rafaella"
    },
    {
        pfp:"./assets/profile-pics/pfp3.jpg",
        circle:"./assets/stories/story2.jpg",
        userName:"titov13"
    },
    {
        pfp:"./assets/profile-pics/pfp4.jpg",
        circle:"./assets/stories/story3.jpg",
        userName:"valerielash"
    },
    {
        pfp:"./assets/profile-pics/pfp5.jpg",
        circle:"./assets/stories/story3.jpg",
        userName:"nora06"
    },
    {
        pfp:"./assets/profile-pics/pfp6.jpg",
        circle:"./assets/stories/story5.jpg",
        userName:"raphael"
    },
    {
        pfp:"./assets/profile-pics/pfp7.jpg",
        circle:"./assets/stories/story6.jpg",
        userName:"stefan"
    },
    {
        pfp:"./assets/profile-pics/pfp8.jpg",
        circle:"./assets/stories/story7.jpg",
        userName:"judy"
    },
    {
        pfp:"./assets/profile-pics/pfp9.jpg",
        circle:"./assets/stories/story8.jpg",
        userName:"Hermoine"
    },
    {
        pfp:"./assets/profile-pics/pfp10.jpg",
        circle:"./assets/stories/story9.jpg",
        userName:"Anki.."
    },
]

let storyField = document.getElementById("stories")
let dataString = ""
let storyScreen = document.getElementById("storyScreen")
let post = document.getElementById("post")
let heart = document.getElementById("heart")
let feed = document.getElementById("feed")
data.forEach((element,index)=>{
    dataString+=`<div class="story">
                    <div class="circle">
                        <img src="${element.pfp}" alt="${element.userName}" id="${index}">
                    </div>
                    <p>${element.userName}</p>
                </div>`
})

storyField.innerHTML=dataString

storyField.addEventListener("click",(e)=>{
    storyScreen.style.display="block";
    storyScreen.style.backgroundImage=`url(${data[e.target.id].circle})`;
    console.log(data[e.target.id]);
    feed.style.display="none"
   setTimeout(() => {
    storyScreen.style.display="none";
    feed.style.display="block"
   }, 3000);  
})

post.addEventListener("dblclick",()=>{
    heart.style.transform=" translate(-50%, -50%)  scale(2.5)"
    heart.style.opacity="1"
    setTimeout(() => {
        heart.style.transform=" translate(-50%, -50%)  scale(1)"
        heart.style.opacity="0"
    }, 800);
})