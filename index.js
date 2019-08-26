window.onload = function() {
    const modalItem1 = document.getElementById("modal-item-1");
    const modalItem2 = document.getElementById("modal-item-2");
    let windowWidth = window.innerWidth;

    function resizeDivs() {
        let width = parseInt(modalItem2.style.width);

        const currentWindowWidth = window.innerWidth;
        let resizeVar = currentWindowWidth - windowWidth;

        windowWidth = currentWindowWidth;
        width += resizeVar;
        modalItem2.style.width = `${width}px`;
        modalItem1.style.height = `${width}px`;

        console.log("Div1's height was resized:", `${width}px`);
        console.log("Div2's width was resized:", `${width}px`);
    }

    window.addEventListener('resize', resizeDivs) ;
};