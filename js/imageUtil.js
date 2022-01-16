function getImageSize(_imgFilePath, _onComplete) {
    var element = document.createElement("img");
    element.addEventListener("load", function () {
        if (_onComplete != null) _onComplete(element);
        else console.log("onComplete callback is null. _imgFilePath : " + _imgFilePath);
    });
    element.src = _imgFilePath;
}