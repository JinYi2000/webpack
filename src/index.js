import _ from 'lodash'

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');//拼接字符串   演示如何使用这个库
    return element
}

document.body.appendChild(component());


