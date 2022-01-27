/*
 * @Author: Hao
 * @Date: 2021-08-23 17:56:12
 * @Last Modified by: Hao
 * @Last Modified time: 2022-01-07 14:19:16
 * @desc 水印文件
 */
// 设置水印
const setWatermark = (str) => {
  let id = '1.23452384164.123412415'
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }
  creatDIvDom(id,creatCanvas(str))

}
// 创建图层
const creatDIvDom = (id,backImg) =>{
    // 创建一个div，并追加到文档流中
    let div = document.createElement('div')
    div.id = id
    div.style.pointerEvents = 'none'
    div.style.top = '0px'
    div.style.left = '0px'
    div.style.position = 'fixed'
    div.style.zIndex = '100000'
    div.style.width = document.documentElement.clientWidth + 'px'
    div.style.height = document.documentElement.clientHeight + 'px'
    div.style.background = 'url(' + backImg.toDataURL('image/png') + ') left top repeat'
    document.body.appendChild(div)
    return id
}
// 创建画布
const creatCanvas = (cont) =>{
  let can = document.createElement('canvas')
  can.height = (String(cont).length) *15
  can.width = (String(cont).length) *20
  let cans = can.getContext('2d')
  // 画布旋转
  cans.rotate(-50 * Math.PI / 280)
  // 设置水印文案UI
  cans.font = '14px Vedana'
  cans.fillStyle = 'rgba(255, 255,255, 0.35)'
  // cans.fillStyle = 'rgba(100, 100, 100, 0.15)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  // 设置文案宽高
  cans.fillText(cont, parseInt(can.width /80), parseInt(can.height /1))
  // cans.fillText(cont, 100, 100)
  return can
}

// 删除水印方法(将指定id的div进行控制显示与隐藏)
const outWatermark = (id) => {
  if (document.getElementById(id) !== null) {
    const div = document.getElementById(id)
    div.style.display = 'none'
  }
}

// 设置水印对外模块
export function WatermarkSet(str = '仅用于办理入职手续使用') {
  setWatermark(str)
}
// 删除水印对外模块
export function WatermarkRemove() {
  let id = '1.23452384164.123412415'
  outWatermark(id)
}


