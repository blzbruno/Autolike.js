var delay = 500;

function like() {
    elem = like_links[cnt];
    if (elem == undefined) {
        clearInterval(timer);
        return
    }
    cnt++;
    elem.scrollIntoView(false);
    elem.style.backgroundColor = '#00FF00';
    elem.click()
}
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
var cnt = 0;
var links = document.getElementsByTagName('a');
var like_links = new Array;
for (i in links) {
    if (hasClass(links[i] , 'UFILikeLink') && links[i].text == 'Curtir' && links[i].getAttribute("aria-pressed") == "false") {
        like_links.push(links[i])
    }
}

timer = setInterval(like, delay);

void 0;
