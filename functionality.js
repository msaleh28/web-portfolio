function dynamic_adjust_div(){
    const nav_bar = document.querySelector("navigation-bar");
    prev_width = nav_bar.getAttribute(width)
    nav_bar.setAttribute(width, prev_width += 50)
}