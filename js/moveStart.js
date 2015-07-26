/**
 *
 * @param obj  目标对象
 * @param options  操作的属性  如： { left : xx , top : xx}
 * @param iSpeed   移动的速度
 * @param fn       回调函数
 */
function startMove(obj,options,iSpeed,fn){

    /***
     *  1.清除定时器
     *  2.设置定时器,并获取当前对象的属性值
     *  3.根据目标值与当前位置值 计算对象移动的距离
     *     即： obj.dis = (target-obj.cur_val) * iSpeed;
     *  4.如果当前值 不等于目标值，继续  否则清除定时器;
     */
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        obj.cur_val = 0;
        obj.flag = true;
        for(var attr in options){

            if(attr === 'opacity'){
                obj.cur_val = Math.round(getStyle(obj,attr)*100);
            }else{
                obj.cur_val = parseInt(getStyle(obj,attr));
            }

            var iTarget = ( options[attr] - obj.cur_val ) * iSpeed;
            obj.dis = iTarget > 0 ? Math.ceil( iTarget ) : Math.floor( iTarget );

            if(obj.cur_val !== options[attr]){
                obj.flag = false;

                if(attr === 'opacity'){
                    obj.style[attr] = ( obj.cur_val + obj.dis ) / 100;
                    obj.style.filter = 'alpha(opacity='+( obj.cur_val + obj.dis )+')';
                }else{
                    obj.style[attr] = obj.cur_val + obj.dis + 'px';
                }
            }
        }

        if(obj.flag){
            clearInterval(obj.timer);
            fn && fn(obj);
        }
    },30);
};

function getStyle(obj,attr){

    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }

};