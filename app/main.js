//main.js
import {render} from 'react-dom'
import React from 'react'
import Greeter from './Greeter';

import './main.css';  // 会和 js 打包到同一个文件中

render(
    <Greeter />,
    document.getElementById('root')
)
