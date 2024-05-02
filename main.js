const btn = document.querySelector(".btn")
const content = document.querySelector(".content")

let images = [
    "https://www.technojobs.co.uk/info/sites/www.technojobs.co.uk/files/styles/article_image_large/public/Blog%20Banner%20%2842%29.png?itok=kr_38j8u",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_u6UsnhpOkvbMGlQQOqSjaK2e2547Kj_fOXdKePiE9w&s",
    "https://cdn.sanity.io/images/tlr8oxjg/production/d2f16531bde974464ad7ab74dc335790dbdebffa-1192x668.png?w=3840&q=80&fit=clip&auto=format",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2yvW9_yESDaluM5UHzrro0Ma6Xqva6Jh7wPh_ot1FN_6PvmQzygipX_nPO3oH1xN9LoA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPA8-cBJz5okdIxsLqQi8RMeabkmVqFPJkfI3cb7tf_viRl-IJi3NjVPYy16K0x0Ys6ww&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkKaU6s0rFs3EzatqLU7rsbFd99L3LYGMCW5EuQOdd1YtR29Hvd7EYNixDj8q9z_gwf4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjmc765--1YVU6Mn84zTZoNz8foxcZqy8KHtlfMj-CB1YGViNVum_oZ5MZQFso77zsxs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4JMgJ_CagjnmUyQkIZI7H2gRsROIa0nxw6ytUxMuYA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvY9Sz1IxSqf1vQA3VkFd7-gb0vORuXPPEdv-naL7bI1S8UK9TQM1lO2YEAajiBsViVFQ&usqp=CAU",
    "https://miro.medium.com/v2/resize:fit:1400/1*mYTQe3aP6IxOVqFiy2C6qw.jpeg"
];

btn.addEventListener("click", () => {

    let rnd = Math.floor(Math.random() * images.length)
    let box = document.createElement("div");
    box.setAttribute("class", "salom");
    
    box.style.backgroundImage = `url(${images[rnd]})`
    
    content.append(box)
    
    
    });




