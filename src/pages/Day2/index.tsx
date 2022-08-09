import React from 'react';
import { Link } from 'dva/router';

export default function() {
  return (
    <div style={{ margin: 35 }}>
      <div>
        <h3>[html]:</h3>
        <h4>1) 说说你对html中的置换元素和非置换元素的理解</h4>
        <p>
          答：置换元素：没有实际的内容，只是一个空元素，浏览器根据元素的标签和属性来决定元素显示的具体内容；
          内容不受css约束，拥有默认宽度和高度。有：img、input、button、select、textarea、label
          非置换元素：浏览器直接展示其内容，且内容不可变，如：p、span等
        </p>
      </div>
      <div>
        <h3>[css]:</h3>
        <h4>1) 后台管理系统布局实现；</h4>
        <p>
          答：利用BFC布局实现
          <br />
          <Link to={'/day_2/back-stage-manage'}>后台管理系统布局 &gt;&gt;</Link>
          也可以使用flex
        </p>
      </div>
    </div>
  )
}