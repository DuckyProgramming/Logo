function setup(){
    cnv=createCanvas(600,600)
    cnv.position((windowWidth-width)/2,(windowHeight-height)/2)
    graphics.full=createGraphics(600,600)
    graphics.full.angleMode(DEGREES)
    graphics.full.colorMode(RGB,255,255,255,1)
    graphics.full.textAlign(CENTER,CENTER)
}
function windowResized(){
    cnv.position((windowWidth-width)/2,(windowHeight-height)/2)
}