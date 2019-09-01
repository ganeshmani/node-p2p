module.exports = Player

function Player (data) {
  data = data || {}
  this.color = data.color || randomColor()
  this.x = data.x;
  this.y = data.y;
  this.top = data.top;
  this.left = data.left;
  this.name = data.name;
  this.element = document.createElement('video')
  Object.assign(this.element.style, {
    width: '40%',
    height: '50%',
    position: 'absolute',
    top: data.top+'px',
    left: data.left+'px',
    backgroundColor: this.color
  })
  document.body.appendChild(this.element)
}

Player.prototype.addStream = function (stream) {
  this.element.srcObject = stream
  this.element.play()
}

Player.prototype.update = function (data) {
  data = data || {}
  this.x = data.x || this.x
  this.y = data.y || this.y
  Object.assign(this.element.style, {
    top: this.y + 'px',
    left: this.x + 'px'
  })
}

function randomColor () {
  return '#' + Math.random().toString(16).substr(-6)
}