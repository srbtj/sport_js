var oTime = null;
/** move target object */
function startMove(obj,target,speed){
    clearInterval(oTime);
    oTime = setInterval(function(){
        if(obj.offsetLeft >= target){
            clearInterval(oTime);
            obj.style.left = target + 'px';
        }else{
            obj.style.left = obj.offsetLeft + speed + 'px';
        }
    },50);
};

/** get target attr value */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
};

/** change object opacity */
function changeOpacity(obj,target,speed){
    clearInterval(oTime);
    var _opacity = 0;
    oTime = setInterval(function(){
        _opacity = Math.round(getStyle(obj,'opacity')*100);
        if(_opacity >= target){
            clearInterval(oTime);
            obj.style.opacity = ( target )/100;
            obj.style.filter = 'alpha(opacity='+( target )+')';
        }else{
            obj.style.opacity = ( _opacity + speed )/100;
            obj.style.filter = 'alpha(opacity='+(_opacity + speed )+')';
        }
    },30);
}