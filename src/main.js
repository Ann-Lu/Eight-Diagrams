let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*大家好，我是代号627
我给大家表演画一个八卦图
首先画个红方框*/
#div1 {
    border:1px solid red;
    width:200px;
    height:200px;
 }
 /*注意看，我把他变成圆形*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦图是白加黑的*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*给里面加上两个小球
先加上面黑色的*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
}
/*再加下面的白色的*/
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    
}
/*中间掏个洞*/
#div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/*好嘞，我的表演结束了，谢谢观看！*/`;
string2 = '';
let n = 0;
let step = () => {
    setTimeout(() => {
        // console.log(n)
        if (string[n] === '\n')
            string2 += '<br>';
        else if (string[n] === ' ') {
            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        n = n + 1;
        if (n < string.length) {
            step();
        } else {
            return;
        }
    }, 10)
};
step();