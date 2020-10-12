import _ from 'lodash'
import printMe from './print.js';
import a from './style.css'

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');//拼接字符串   演示如何使用这个库
    element.classList.add('hello');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element
}

document.body.appendChild(component());