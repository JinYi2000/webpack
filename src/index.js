import _ from 'lodash'
import a from './style.css'

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');//拼接字符串   演示如何使用这个库
    element.classList.add('hello');
    return element
}

document.body.appendChild(component());