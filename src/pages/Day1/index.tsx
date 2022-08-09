import React from 'react';
import { Link } from 'dva/router';

export default function() {
  return (
    <div style={{ margin: 35 }}>
      <div>
        <h3>[HTML]:</h3>
        <h4>1) HTML(5)全局属性(global attribute)有哪些？</h4>
        <p>
          答：在HTML5中新增了全局属性的概念，表示对任何元素都能使用的属性，分别为：
          <ul>
            <li>accesskey: 规定访问元素的键盘快捷键</li>
            <li>class: 元素的类名</li>
            <li>contenteditable: 是否允许用户编辑内容 <span>(h5)</span></li>
            <li>contextmenu: 规定元素的上下文菜单，用户点击该元素，出现上下文菜单 <span>(h5 暂无主流浏览器支持)</span></li>
            <li>data-*: 存储页面的自定义数据 <span>(h5)</span></li>
            <li>dir: 设置文本方向</li>
            <li>draggable: 元素是否可以拖动 <span>(h5)</span></li>
            <li>dropzone: 是否将数据复制、移动、链接、删除 <span>(h5 暂无主流浏览器支持)</span></li>
            <li>hidden: 对元素进行隐藏 <span>(h5 页面中有html标签但没有显示)</span></li>
            <li>id: 元素的唯一id</li>
            <li>lang: 设置语言代码</li>
            <li>spellcheck: 检查元素是否拼写错误 <span>(h5)</span></li>
            <li>style: 规定元素的行内样式</li>
            <li>tabindex: 设置元素的tab键来控制次序</li>
            <li>title: 规定元素的额外信息</li>
            <li>translate: 元素的值在载入时是否需要翻译 <span>(h5 暂无主流浏览器支持)</span></li>
          </ul>
        </p>
      </div>
      <div>
        <h3>[CSS]:</h3>
        <h4>1) 圣杯布局和双飞翼布局的理解和区别，并用代码实现；</h4>
        <p>
          答：两者的功能相同，都遵循了以下4点：
          <ul>
            <li>两侧宽度固定，中间宽度自适应</li>
            <li>中间部分在DOM结构上优先，以便先行渲染</li>
            <li>允许三列中的任意一列成为最高列</li>
            <li>只需要使用一个额外的div标签</li>
          </ul>
          不同点：圣杯布局在DOM结构上显得更加直观和自然，且在日常开发过程中，更容易形成这样的DOM结构
          （通常&lt;aside&gt;和&lt;article&gt;/&lt;section&gt;一起被嵌套在&lt;main&gt;中）；
            而双飞翼布局在实现上由于不需要使用定位，所以更加简洁，且允许的页面最小宽度通常比圣杯布局更小
            <br />
            <br />
          <Link to={'/day_1/grail'}>圣杯布局 &gt;&gt;</Link>
          <br />
          <Link to={'/day_1/doubleFly'}>双飞翼布局 &gt;&gt;</Link>
        </p>
        <p>
          <h5>不用额外的div：</h5>
          1) 通过calc()可以十分方便地计算出center应该占据的自适应宽度，目前calc()支持到IE9：
          .center: margin-left: 200px;margin-right: 150px;width: calc(100% - 350px);
        </p>
        <p>
          2) 使用border-box可以将center的整个盒模型宽度设置为父元素的100%宽度，此时再利用padding-left和padding-right
          可以自动得到中间栏的自适应宽度。不过需要注意的是，由于padding是盒子的一部分，所以padding部分会具有中间栏的背景色，
          目前box-sizing支持到IE8：
          .center: padding-left: 200px;padding-right: 150px;box-sizing: border-box;width: 100%;
        </p>
        <p>3) 还是使用额外的div，flex写法更简洁：.container: display: flex; .center: flex: 1; 
          .left: flex: 0 0 200px; order: -1; .right: flex: 0 0 150px;
        </p>
      </div>
      <div>
        <h3>[git]:</h3>
        <h4>1) 怎么把多个commit合并？</h4>
        <p>答：先用git log查看commit信息，然后用git rebase -i HEAD~[最近提交的要合并的commit数]，
          执行命令后终端会输出信息，根据信息提示：
          <ul>
            <li>pick：保留该commit（缩写:p）</li>
            <li>reword：保留该commit，但我需要修改该commit的注释（缩写:r）</li>
            <li>edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）</li>
            <li>squash：将该commit和前一个commit合并（缩写:s）</li>
            <li>fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）</li>
            <li>exec：执行shell命令（缩写:x）</li>
            <li>drop：我要丢弃该commit（缩写:d）</li>
          </ul>
          根据以上操作进行修改后，保存退出，git会自动合并提交，并弹出合并提示两次的 commit message, 
          将这两个修改成新的 commit message，保存后退出即可
        </p>
      </div>
    </div>
  )
}