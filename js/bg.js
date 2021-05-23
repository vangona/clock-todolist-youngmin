const body = document.querySelector("body")

const userAgent = navigator.userAgent;

const IMG_NUMBER_LND = 3;
const IMG_NUMBER_POR = 2;

let number = 1;

function isMobile(){
	if (userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || userAgent.match(/LG|SAMSUNG|Samsung/) != null){
		return true;
    } else{
		return false;
	}
}

function paintImage(imgNumber){
    const image = new Image();
    if(isMobile()) {
        image.src = `./images/por/${imgNumber}.jpg`;
    }
    else {
        image.src = `./images/lan/${imgNumber}.jpg`;
    }
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    if(isMobile()) {
        number = 1 + Math.floor(Math.random() * IMG_NUMBER_POR);
    } else {
        number = 1 + Math.floor(Math.random() * IMG_NUMBER_LND);
    }
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();

