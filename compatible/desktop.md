1. [HD9001: 各浏览器对 URI 中非 ASCII 字符的处理有差异](http://w3help.org/zh-cn/causes/HD9001)
2. [RY8003: 各浏览器对 CSS 错误解析规则的差异及 CSS hack](http://w3help.org/zh-cn/causes/RY8003)
3. [HO3004: IE6 不支持 PNG24 格式图片的半透明效果
](http://w3help.org/zh-cn/causes/HO3004)
4. [HO1002: IMG 元素的 src 属性为空时其尺寸在各浏览器中不一致
](http://w3help.org/zh-cn/causes/HO1002)
5. IE6不支持子选择器、属性选择器、`:before``:after`伪类
6. [IE6 IE7(Q) IE8(Q) 不完全支持 !important 规则](http://w3help.org/zh-cn/causes/RA8003)
7. [IE6 IE7负边距 (margin) 导致元素溢出 hasLayout 容器时显示异常](http://w3help.org/zh-cn/causes/RB1001)
8. [尽量仅使用所有浏览器都支持的 'display' 特性值：'inline'、'block'、'list-item'、'none'。在 IE6 IE7 IE8(Q) 中实现块元素的 'display:inline-block' 特性值支持，需要先将块元素设置为行内元素，并设置可以在 IE6 IE7 IE8(Q) 内触发 haslayout 特性的专有特性 'zoom:1'。行内元素实现 'display:inline-block' 特性值支持只需直接设置此特性值或同样使用 'zoom:1' 即可。](http://w3help.org/zh-cn/causes/RM8001)
9. [RM8002: 不能同时在 IE6 IE7 IE8(Q) 中触发 hasLayout 并在其他浏览器中创建 Block Formatting Context 的元素在各浏览器中的表现会有差异](http://w3help.org/zh-cn/causes/RM8002)
10. [RM8003: 各浏览器中浮动元素与相邻的 Block Formatting Context 之间的关系有差异](http://w3help.org/zh-cn/causes/RM8003)
11. IE6不支持`position: fixed;` 不支持`min-width` `min-height`
12. [IE6 中浮动元素在某些情况下会有双倍外边距](http://w3help.org/zh-cn/causes/RX1001)
13. [IE8以下函数表达式中的标识符在该函数外围的作用域内也可以访问。](http://w3help.org/zh-cn/causes/SJ9001)
14. [SJ2004: 各浏览器中 Date 对象的 toLocaleString 方法的返回值不一致](http://w3help.org/zh-cn/causes/SJ2004)
15. [在 IE6 IE7 IE8 中，JavaScript 代码中语句块结束符号“}”之后的第一个分号“;”会被忽略。](http://w3help.org/zh-cn/causes/SJ9005)
16. [SJ9006: 在 IE6 IE7 IE8(Q) 中不能在 JSON 字符串或对象直接量的最后一个键值对后加 ','](http://w3help.org/zh-cn/causes/SJ9006)
17. [IE6 IE7 IE8 不会忽略数组直接量的末尾空元素](http://w3help.org/zh-cn/causes/SJ2007)
18. [Chrome Opera 中 for-in 语句遍历出对象属性的顺序与定义的不同](http://w3help.org/zh-cn/causes/SJ9011)
19. [IE6 IE7 IE8(Q) 不支持 JSON 对象]
20. [IE6 IE7 IE8(Q) 中的 getElementById 方法的参数不区分大小写]
21. [ IE 在创建 DOM 树时会忽略某些空白字符]
22. [ IE 混淆了 DOM 对象属性（property）及 HTML 标签属性（attribute），造成了对 setAttribute、getAttribute 的不正确实现] `value` `className` `style`
23. [事件模型在各浏览器中存在差异](http://w3help.org/zh-cn/causes/SD9011)
24. [各浏览器对页面 onload 事件处理方式不一致]IE8以下`document.body`, FireFox`window`，其他都可以
25. [IE6 IE7 IE8 IE9(Q) 中 change、select、submit、reset 事件均不产生事件冒泡。]
26. 只有 IE 支持条件注释、CSS Filter、CSS Expression
27. IE盒模型包括`border`和`padding`