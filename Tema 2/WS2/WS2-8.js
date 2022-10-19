function getRandomInt(end){
    return Math.floor(Math.random()*end);
}

img = ["https://i.blogs.es/ceda9c/dalle/1024_2000.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg", "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"];
imgInitHtml = "<img src=\"";
imgFinHtml = "\"/>"

let pos = getRandomInt(3);
let image = img[pos];
document.write(imgInitHtml+image+imgFinHtml);