/*
*Create a TreeView component 
 Initially only the top items must be visible 
 On item click 
 If its children are hidden (collapsed), 
they must be made visible (expanded) 
 If its children are visible (expanded), 
they must be made hidden (collapsed) 
 Research about events 
*/

window.onload = function () {
    var liTags = document.getElementsByTagName('li');

    var i = 0;
    var len = liTags.length;

    for (i = 0; i < len; i++) {
        liTags[i].addEventListener('click', revealSubList);
    }

    function revealSubList(event) {
        // check to make shure there is child ul
        if (typeof this.getElementsByTagName('ul')[0] == 'undefined') return 0;

        // event target and 'this' point to the same object 
        // this === event.target is necessary because otherwise when we click 
        // on one LI item the event will affect the parent LI as well
        if (this === event.target &&
            this.getElementsByTagName('ul')[0].style.display == 'block') {
            this.getElementsByTagName('ul')[0].style.display = 'none';
        }
        else {
            this.getElementsByTagName('ul')[0].style.display = 'block';
        }
    }

};