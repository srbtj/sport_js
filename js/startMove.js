window.onload = function(){

    var oDiv = document.getElementById('box'),
        oSpan = oDiv.getElementsByTagName('span'),
        oUl = oDiv.getElementsByTagName('ul')[0],
        oLi = oUl.getElementsByTagName('li'),
        startIndex = 0,
        len = oLi.length - 2 > 0 ? oLi.length - 2 :oLi.length;

    /* 计算ul的宽度 */
    var iWidth = parseInt(getStyle(oLi[0],'width')) + parseInt(getStyle(oLi[0],'border'))*2 + parseInt(getStyle(oLi[0],'marginLeft'));
    oUl.style.width = iWidth*oLi.length + 'px';

    /** 为每一个li添加鼠标事件 */
    for(var i = 0;i<oLi.length;i++){
        oLi[i].index = i;
        oLi[i].onmouseover = function(){
            clearInterval(timer);
            startIndex = this.index;
            oLi[this.index].style.cursor = 'pointer';
            oLi[this.index].onclick = function(){
                // alert(this.index);
            }
        };
        oLi[i].onmouseout = function(){
            timer = setInterval(startPlay,2000);
        }
    };

    /***
     *  上一张/下一张 事件;
     */

    oSpan[0].onclick = function(){
        clearInterval(timer);
//            var len = oLi.length - 2 > 0 ? oLi.length - 2 : len;
        if(len > 2){
            if(startIndex === 0){
                startIndex = oLi.length - 3;
            }else{
                startIndex--;
            }
            var iLeft =  -(iWidth * startIndex);
            startMove(oUl,{left:iLeft},0.2);
        }
        timer = setInterval(startPlay,2000);
    };

    oSpan[1].onclick = function(){
        clearInterval(timer);
        if(len > 2){
            if(startIndex >= oLi.length - 3){
                startIndex = 0;
            }else{
                startIndex++;
            }
            var iLeft =  -(iWidth * startIndex);
            startMove(oUl,{left:iLeft},0.2);
        }
        timer = setInterval(startPlay,2000);
    }

    timer = setInterval(startPlay,2000);


    function startPlay(){

        if(len > 2){
            if(startIndex >=  len){
                startIndex = 0;
            }
            /* 计算 ul的左距离 */
            var iLeft =  -(iWidth * startIndex);
            startMove(oUl,{left:iLeft},0.2)
            startIndex++;
        }
    };
}