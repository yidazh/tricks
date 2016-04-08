###1.isiOS7绝对定位父元素下的`img`的`max-height`失效。（iPod, iOS7, Safari）

**现象:**

```
.wrapper {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.wrapper img {
	max-width: 100%;
	max-height: 100%;
}
```
此时我们的`img`的高度没有遵循`max-height`规则，宽度正常。调试时将`.wrapper`改成固定高度后，`img`高度恢复正常。

**解决:**

取消百分比高度。

```
.wrapper {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
```

###2.部分Android机型下的`margin-top`取值百分比时，基值不是父元素的宽，而是高。

经查，是Webkit下面的一个Bug，[Vertical margin percentage values are resolved against logical height, not logical width](https://bugs.webkit.org/show_bug.cgi?id=103246)

###3.部分安卓机型下用HTML5的`XMLHTTPRequest`上传文件名称有中文空格等非ascii码的文件时，上传失败。

经查，是Android WebView下的一个Bug。[File upload does not work on latest webview if name has spaces in it.	](https://bugs.chromium.org/p/chromium/issues/detail?id=488443)