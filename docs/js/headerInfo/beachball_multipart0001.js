// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const img = urlParams.get('img')
// const script = urlParams.get('script')
// document.getElementById("EXRHeaderInfo").src="images/openexr-images/"+img;
// var headerInfoLink = "js/headerInfo/" + img.slice(0,-4) + ".js"
// console.log(headerInfoLink)
var container = document.getElementById('EXRHeaderInfoDiv');
var content = document.createElement("span");
content.innerHTML = '<p class="pHeaderInfo">\
Hello\
file multipart.0001.exr:<br>\
file format version: 2, flags 0x1000<br>\
part 0:<br>\
channels (type chlist):<br>\
    A, 16-bit floating-point, sampling 1 1<br>\
    B, 16-bit floating-point, sampling 1 1<br>\
    G, 16-bit floating-point, sampling 1 1<br>\
    R, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 876<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (654 245) - (1530 1120)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "rgba_right"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
view (type string): "right"<br>\
<br>\
 part 1:<br>\
channels (type chlist):<br>\
    Z, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 876<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (688 245) - (1564 1120)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "depth_left"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
view (type string): "left"<br>\
<br>\
 part 2:<br>\
channels (type chlist):<br>\
    forward.u, 16-bit floating-point, sampling 1 1<br>\
    forward.v, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 876<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (688 245) - (1564 1120)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "forward_left"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
view (type string): "left"<br>\
<br>\
 part 3:<br>\
channels (type chlist):<br>\
    whitebarmask.mask, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 769<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (1106 245) - (1490 1013)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "whitebarmask_left"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
view (type string): "left"<br>\
<br>\
 part 4:<br>\
channels (type chlist):<br>\
    A, 16-bit floating-point, sampling 1 1<br>\
    B, 16-bit floating-point, sampling 1 1<br>\
    G, 16-bit floating-point, sampling 1 1<br>\
    R, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 876<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (688 245) - (1564 1120)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "rgba_left"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
view (type string): "left"<br>\
<br>\
 part 5:<br>\
channels (type chlist):<br>\
    Z, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 876<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (654 245) - (1530 1120)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "depth_right"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
view (type string): "right"<br>\
<br>\
 part 6:<br>\
channels (type chlist):<br>\
    forward.u, 16-bit floating-point, sampling 1 1<br>\
    forward.v, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 876<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (654 245) - (1530 1120)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "forward_right"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
view (type string): "right"<br>\
<br>\
 part 7:<br>\
channels (type chlist):<br>\
    disparityL.x, 16-bit floating-point, sampling 1 1<br>\
    disparityL.y, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 876<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (654 245) - (1564 1120)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "disparityL"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
<br>\
 part 8:<br>\
channels (type chlist):<br>\
    disparityR.x, 16-bit floating-point, sampling 1 1<br>\
    disparityR.y, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 876<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (654 245) - (1564 1120)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "disparityR"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
<br>\
 part 9:<br>\
channels (type chlist):<br>\
    whitebarmask.mask, 16-bit floating-point, sampling 1 1<br>\
chunkCount (type int): 769<br>\
compression (type compression): zip, individual scanlines<br>\
dataWindow (type box2i): (1070 245) - (1455 1013)<br>\
displayWindow (type box2i): (0 0) - (2047 1555)<br>\
lineOrder (type lineOrder): increasing y<br>\
name (type string): "whitebarmask_right"<br>\
pixelAspectRatio (type float): 1<br>\
screenWindowCenter (type v2f): (0 0)<br>\
screenWindowWidth (type float): 1<br>\
type (type string): "scanlineimage"<br>\
view (type string): "right"<br>\
</p><br>\
';
container.appendChild(content);