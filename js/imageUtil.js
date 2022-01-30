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

// 指定キャンバス常時に赤線マーカーを引く
// 時計用（文字盤に合わせて12等分する）
function drawCrossOnCanvas4Clock(_canvasElement) {
    let canvasContext = _canvasElement.getContext("2d");
    canvasContext.strokeStyle = "red";

    canvasContext.beginPath(); // 描画開始準備

    let originX = _canvasElement.clientWidth / 2;
    let originY = _canvasElement.clientHeight / 2;

    // // 0時
    // canvasContext.moveTo(_canvasElement.clientWidth / 2, 0); // 中央縦線
    // canvasContext.lineTo(_canvasElement.clientWidth / 2, _canvasElement.clientHeight);

    // 1時
    let speed = _canvasElement.clientWidth;
    let anglePerHour = 360 / 12;
    let angle = 0;
    let radians = 0;
    let vx = 0;
    let vy = 0;

    for (let i = 0; i < 12; i++) {
        angle = anglePerHour * i;
        radians = angle * Math.PI / 180;
        vx = Math.cos(radians) * speed;
        vy = Math.sin(radians) * speed;

        canvasContext.moveTo(originX, originY);
        canvasContext.lineTo(originX + vx, originY + vy);
    }


    // // canvasContext.moveTo(_canvasElement.clientWidth * 0.8, 0);
    // // canvasContext.lineTo(_canvasElement.clientWidth * 0.2, _canvasElement.clientHeight);

    // // 2時
    // canvasContext.moveTo(_canvasElement.clientWidth, _canvasElement.clientHeight * 0.2); // 中央縦線
    // canvasContext.lineTo(0, _canvasElement.clientHeight * 0.8);

    // // 3時
    // canvasContext.moveTo(0, _canvasElement.clientHeight / 2); // 中央横線
    // canvasContext.lineTo(_canvasElement.clientWidth, _canvasElement.clientHeight / 2);

    // // 4時
    // canvasContext.moveTo(_canvasElement.clientWidth, _canvasElement.clientHeight * 0.8); // 中央縦線
    // canvasContext.lineTo(0, _canvasElement.clientHeight * 0.2);

    // // 5時
    // canvasContext.moveTo(_canvasElement.clientWidth * 0.2, 0);
    // canvasContext.lineTo(_canvasElement.clientWidth * 0.8, _canvasElement.clientHeight);

    // // canvasContext.moveTo(0, 0); // 斜め右下線
    // // canvasContext.lineTo(_canvasElement.clientWidth, _canvasElement.clientHeight);
    // // canvasContext.moveTo(_canvasElement.clientWidth, 0); // 斜め左下線
    // // canvasContext.lineTo(0, _canvasElement.clientHeight);

    canvasContext.stroke(); // 描画
}