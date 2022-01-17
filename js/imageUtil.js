// 指定の画像のサイズを取得する
function getImageSize(_imgFilePath, _onComplete) {
    var element = document.createElement("img");
    element.addEventListener("load", function () {
        if (_onComplete != null) _onComplete(element);
        else console.log("onComplete callback is null. _imgFilePath : " + _imgFilePath);
    });
    element.src = _imgFilePath;
}

// 指定座標、指定サイズのキャンバスを生成して返す
function createCanvasElement(_startX, _startY, _width, _height) {
    let canvasElement = document.createElement("canvas");
    canvasElement.setAttribute("style", "position: fixed; left: " + _startX + "px; top: " + _startY + "px; border: 1px solid silver; z-index: 1; overflow: scroll;");
    canvasElement.setAttribute("width", _width + "px");
    canvasElement.setAttribute("height", _height + "px");
    return canvasElement;
}

// 指定キャンバス常時に赤線マーカーを引く
function drawCrossOnCanvas(_canvasElement) {
    let canvasContext = _canvasElement.getContext("2d");
    canvasContext.strokeStyle = "red";

    canvasContext.beginPath(); // 描画開始準備
    canvasContext.moveTo(0, 0); // 斜め右下線
    canvasContext.lineTo(_canvasElement.clientWidth, _canvasElement.clientHeight);
    canvasContext.moveTo(_canvasElement.clientWidth, 0); // 斜め左下線
    canvasContext.lineTo(0, _canvasElement.clientHeight);
    canvasContext.moveTo(_canvasElement.clientWidth / 2, 0); // 中央縦線
    canvasContext.lineTo(_canvasElement.clientWidth / 2, _canvasElement.clientHeight);
    canvasContext.moveTo(0, _canvasElement.clientHeight / 2); // 中央横線
    canvasContext.lineTo(_canvasElement.clientWidth, _canvasElement.clientHeight / 2);

    canvasContext.stroke(); // 描画
}