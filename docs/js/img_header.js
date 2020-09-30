var container = document.getElementById('EXRHeaderInfoDiv');
var content = document.createElement("span");
content.innerHTML = '<!DOCTYPE html>\
<html lang="en">\
    <script src="js/header.js" language="javascript"> </script>\
    <div class="page">\
        <script src="js/navigation.js" language="javascript"> </script>\
        <!-- begin content -->\
        <div class="content">\
            <h1 id=ImageInfoHeader></h1>\
            <hr class="divider">\
            <div class="img-info">\
                <img id="EXRImg"></img>\
            </div>\
            <h3>OpenEXR Header Information</h3>\
            <hr class="divider">\
            <div id="EXRHeaderInfoDiv">\
            </div>';
container.appendChild(content);