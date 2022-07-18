//Dom Management functions
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
function echo(toPrint, size=16, color="#000") {
    var element = document.createElement("p");
    element.setAttribute("style", "font-size:" + size + ";" + "color:" + color);
    element.innerHTML = toPrint;
    document.body.appendChild(element);
}
//File Management functions
function saveFile(fileName, content) {
    var download = document.createElement('a');
    download.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    download.setAttribute('download', fileName);
    
    download.style.display = 'none';
    document.body.appendChild(download);
    
    download.click();
    
    document.body.removeChild(download);
}
function loadFile() {
    let input = document.getElementById('upload');
    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length == 0) return;
        const file = files[0];
    
        let reader = new FileReader();
    
        reader.onload = (e) => {
            const file = e.target.result;
            return file;
        };
    
        reader.onerror = (e) => alert(e.target.error.name);
    
        reader.readAsText(file);
    });
}
function upload() {
    var upload = document.createElement('input');
    upload.setAttribute('type', 'file');
    upload.style.display = 'none';
    upload.id = "upload";
    document.body.appendChild(upload);
    upload.click();
    loadFile();
    document.body.removeChild(upload);
}
function include(file){
    if(file.indexOf('.css') != -1) {
        var style = document.createElement('link');
        style.href = file;
        document.body.appendChild(style);
    }
    else {
        var script = document.createElement('script');
        script.src = file;
        document.body.appendChild(script)
    }
}
//UI functions
//Credit to the author of this fiddle https://jsfiddle.net/m2pozqyy/ for the reactivity engine.
function bind(b) {
    _this = this
    this.element = b.element    
    this.value = b.object[b.property]
    this.attribute = b.attribute
    this.valueGetter = function(){
        return _this.value;
    }
    this.valueSetter = function(val){
        _this.value = val
        _this.element[_this.attribute] = val
    }

    Object.defineProperty(b.object, b.property, {
        get: this.valueGetter,
        set: this.valueSetter
    }); 
    b.object[b.property] = this.value;

    this.element[this.attribute] = this.value

}
function cbind(object, element) {
    var varString = JSON.stringify(object) 
    var name = varString.slice(2, varString.indexOf(':')-1) 
    new bind({object: object,property: name,element: element,attribute: "innerHTML"})
}
//Small Functions
function hide(element){element.style="display:none"}
function show(element){element.style="display:default"}
function execute(code) {eval(code)}
function log(out){console.log(out)}
