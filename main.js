import "./style.scss";

let waypoint = new Waypoint({
    element: document.getElementById('main-nav'),
    handler: function(direction) {
        this.element.classList.toggle(".shadow");
        this.element.classList.toggle(".bg-light");
    },
    offset: '75%'
})

