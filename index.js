//Dom Management functions
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
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
function render(data){document.body.insertAdjacentHTML("afterend", data);}
function component(element, code) {
    $(element).insertAdjacentHTML("afterend", code);    
}
//Small Functions
function hide(element){element.style="display:none"}
function show(element){element.style="display:default"}
function log(out){console.log(out)}
