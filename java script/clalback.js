setTimeout(() => {
    console.log("i am inside settimeout");

}, 2000);

const fn = () => {
    console.log("nothing");
}
const callback = (arg,fn) => {
    console.log(arg);
    fn()
}
const loadscript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("ashutosh",fn )

    document.head.append(sc)

}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)