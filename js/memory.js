// @ts-check

function setup() {
    let homebar = document.querySelector('home-bar');
    if (homebar) {
        homebar.setAttribute("menu",
            `<i class="material-icons">menu</i>
            <ul>
            <li>hjem
            <li>easy
            <li>normal
            <li>hard
          </ul>
        `)
        homebar.addEventListener("menu", menuHandler);
    }
    
   
    function menuHandler(e) {
        let info = homebar.info;
        let text = info.target.innerHTML.trim();
        if (text) {
            location.href = text + ".html";
        }
    }
}