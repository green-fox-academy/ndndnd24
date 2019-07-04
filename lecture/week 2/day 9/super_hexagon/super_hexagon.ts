'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
let moveOnXAxis: number = 0;
let moveOnYAxis: number = 0;



/*let sixtyDegreeHeigth: number = size * (Math.sqrt(3) / 2);
let startingPointOfX: number = canvas.width / 2 - size / 2 - ((hexagonCircles - 1) * (size + size / 2));
let startingPointOfY: number = canvas.height / 2 + sixtyDegreeHeigth + ((hexagonCircles - 1) * sixtyDegreeHeigth);
let size: number = 25;
let hexagonCircles: number = 2;


function drawHex(sizeHex: number, hexagonCirclesHex: number) {
    ctx.beginPath();
    ctx.moveTo(startingPointOfX, startingPointOfY);
    ctx.lineTo(startingPointOfX + sizeHex, startingPointOfY);
    ctx.moveTo(startingPointOfX, startingPointOfY - sixtyDegreeHeigth * 2);
    ctx.lineTo(startingPointOfX + sizeHex, startingPointOfY - sixtyDegreeHeigth * 2);
    ctx.lineTo(startingPointOfX + sizeHex + sizeHex / 2, startingPointOfY - sixtyDegreeHeigth);
    ctx.lineTo(startingPointOfX + sizeHex, startingPointOfY);
    ctx.moveTo(startingPointOfX, startingPointOfY - sixtyDegreeHeigth * 2);
    ctx.lineTo(startingPointOfX - sizeHex / 2, startingPointOfY - sixtyDegreeHeigth);
    ctx.lineTo(startingPointOfX, startingPointOfY);
    ctx.stroke();
    ctx.closePath();
}

function drawPattern(sizePattern: number, hexagonCirclesPattern: number) {
    for (let numberOfHex: number = 0; numberOfHex < 1 + ((hexagonCircles - 1) * 6); numberOfHex++) {
        // for (let rightAndDown: number = 1; rightAndDown < hexagonCircles; rightAndDown++) {
        drawHex(sizePattern, hexagonCirclesPattern);


        //  }
    }
}

drawPattern(size, hexagonCircles);
drawPattern(size, hexagonCircles);*/
































function drawHex(size: number, hexagonCircles: number) {
    let sixtyDegreeHeigth: number = size * (Math.sqrt(3) / 2);
    let startingPointOfX: number = canvas.width / 2 - size / 2 - ((hexagonCircles - 1) * (size + size / 2)) + moveOnXAxis;
    let startingPointOfY: number = canvas.height / 2 + sixtyDegreeHeigth + ((hexagonCircles - 1) * sixtyDegreeHeigth) + moveOnYAxis;
    ctx.beginPath();
    ctx.moveTo(startingPointOfX, startingPointOfY);
    ctx.lineTo(startingPointOfX + size, startingPointOfY);
    ctx.moveTo(startingPointOfX, startingPointOfY - sixtyDegreeHeigth * 2);
    ctx.lineTo(startingPointOfX + size, startingPointOfY - sixtyDegreeHeigth * 2);
    ctx.lineTo(startingPointOfX + size + size / 2, startingPointOfY - sixtyDegreeHeigth);
    ctx.lineTo(startingPointOfX + size, startingPointOfY);
    ctx.moveTo(startingPointOfX, startingPointOfY - sixtyDegreeHeigth * 2);
    ctx.lineTo(startingPointOfX - size / 2, startingPointOfY - sixtyDegreeHeigth);
    ctx.lineTo(startingPointOfX, startingPointOfY);
    ctx.stroke();
    ctx.closePath();
}

function drawPattern(size: number, hexagonCircles: number) {
    moveOnXAxis = 0;
    moveOnYAxis = 0;
    drawHex(size, hexagonCircles);
    for (let goCloserToCenter: number = 0; goCloserToCenter < hexagonCircles; goCloserToCenter++) {
        for (let rightAndDown: number = 1; rightAndDown < hexagonCircles - goCloserToCenter; rightAndDown++) {
            moveOnXAxis = moveOnXAxis + size + size / 2;
            moveOnYAxis = moveOnYAxis + (size * (Math.sqrt(3) / 2));
            drawHex(size, hexagonCircles);
        }
        for (let rightAndUp: number = 1; rightAndUp < hexagonCircles - goCloserToCenter; rightAndUp++) {
            moveOnXAxis = moveOnXAxis + size + size / 2;
            moveOnYAxis = moveOnYAxis - (size * (Math.sqrt(3) / 2));
            drawHex(size, hexagonCircles);
        }
        for (let onlyUp: number = 1; onlyUp < hexagonCircles - goCloserToCenter; onlyUp++) {
            moveOnYAxis = moveOnYAxis - (size * (Math.sqrt(3) / 2) * 2);
            drawHex(size, hexagonCircles);
        }
        for (let leftAndUp: number = 1; leftAndUp < hexagonCircles - goCloserToCenter; leftAndUp++) {
            moveOnXAxis = moveOnXAxis - size - size / 2;
            moveOnYAxis = moveOnYAxis - (size * (Math.sqrt(3) / 2));
            drawHex(size, hexagonCircles);
        }
        for (let leftAndDown: number = 1; leftAndDown < hexagonCircles - goCloserToCenter; leftAndDown++) {
            moveOnXAxis = moveOnXAxis - size - size / 2;
            moveOnYAxis = moveOnYAxis + (size * (Math.sqrt(3) / 2));
            drawHex(size, hexagonCircles);
        }
        for (let onlyDown: number = 1; onlyDown < hexagonCircles - goCloserToCenter; onlyDown++) {
            moveOnYAxis = moveOnYAxis + (size * (Math.sqrt(3) / 2) * 2);
            drawHex(size, hexagonCircles);
        }
        moveOnXAxis = moveOnXAxis + size + size / 2;
        moveOnYAxis = moveOnYAxis - (size * (Math.sqrt(3) / 2));
    }

}

//drawPattern(25, 2);
//drawPattern(25, 3);
drawPattern(24, 5);







