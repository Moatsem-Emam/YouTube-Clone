let sidebarElement = document.getElementById('sidebar')
function sidebar(){
    // set the sidebar to none
    let asideElement = document.getElementById('aside')
    // main
    let mainElement = document.getElementById('main')
    // video_container
    let video_container = document.getElementsByClassName('video-container');

    if(asideElement.style.display=="none")
    {
        mainElement.style.margin=""
        asideElement.style.display="";
        for (let i = 0; i < video_container.length; i++) {
            video_container[i].classList.remove('wide');
            video_container[i].classList.add('narrow');
        }
    }
    else{
        mainElement.style.margin="10px 0px 0px 20px"
        asideElement.style.display="none";
        for (let i = 0; i < video_container.length; i++) {
        video_container[i].classList.remove('narrow');
        video_container[i].classList.add('wide');
        }
    }

}
// let asideElement = document.getElementById('aside')
// console.log(asideElement)
// asideElement.style.display="none";

