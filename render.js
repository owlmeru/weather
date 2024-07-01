

class RENDERJS {

    constructor() {

    }
  
    render(to, content) {
        var to = document.getElementById(to);
        to.innerHTML = content;
    }

    append(to, content) {
        var to = document.getElementById(to);
        to.innerHTML = to.innerHTML + content;
    }




  
  }
  
   window.rjs = new RENDERJS();
