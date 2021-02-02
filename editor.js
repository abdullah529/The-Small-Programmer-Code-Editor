var run = document.getElementById("run");
var save = document.getElementById("save");
var label = document.getElementById("label");
var remover = document.getElementById("remover");
var rcodes = document.getElementById("rcodes");
var csd = document.getElementById("csd");
var brand = document.getElementById("brand");
var code = document.getElementById("code");
var result = document.getElementById("result");
var buttons = document.getElementById("buttons");
var result_text = document.getElementById("result_text");
var nav = document.getElementById("nav");
var aside = document.getElementById("aside");
var main = document.getElementById("main");
var footer = document.getElementById("footer");
var label = document.getElementById("label");
code.style.height = screen.height/2+"px";
var saved_code = localStorage.getItem("Code");
onload = ()=>{
    if(saved_code!=null){
        code.innerText = saved_code;
        result.innerHTML = code.value;
    }else{
        
    }
};
run.onclick = ()=>{
    result.innerHTML = code.value;
};
yin_yang.onclick = ()=>{
    if(document.body.className==null){
        document.body.style.background = "rgb(40,42,52)";
        yin_yang.style.background = "#fff";
        code.style.background = "rgb(40,42,52)";
        yin_yang.style.color = "rgb(40,42,52)";
        document.body.classList.toggle('dark');
    }else{
        document.body.style.background = "#fff";
        yin_yang.style.background = "rgb(40,42,52)";
        code.style.background = "#fff";
        yin_yang.style.color = "#fff";
        document.body.className = "";
    }
};
save.onclick = ()=>{
    localStorage.setItem("Code",code.value);
    alert("Saved Code");
};
remover.onclick = ()=>{
    result.innerHTML = "";
};
rcodes.onclick = ()=>{
    code.value = "";
};
csd.onclick = ()=>{
    localStorage.removeItem("Code");
    alert("Removed Saved Code");
};
const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    nav.classList.toggle('dark');
    aside.classList.toggle('dark');
    main.classList.toggle('dark');
    footer.classList.toggle('dark');
    label.classList.toggle('dark');
    if(label.classList.contains('dark')){
        label.innerText = "Light Mode";
    }else{
        label.innerText = "Dark Mode";
    }
    brand.classList.toggle('dark');
    result_text.classList.toggle('dark');
    code.classList.toggle('dark');
    document.body.classList.toggle('dark');
});
document.getElementById("download_code").onclick = function() {
    // when clicked the button
    var content = document.getElementById('code').value;
    // a [save as] dialog will be shown
    var element = document.createElement("a");
    element.style.display = "none";
    element.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(content));
    element.setAttribute("download","The Small Programmer Code.html");
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
