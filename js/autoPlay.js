function startMove(obj,options,iSpeed,fn){

    clearInterval(obj.timer);

    obj.timer = setInterval(function(){

        obj.cur_val = 0;
        obj.flag = true;
        for( var attr in options ){

            if(attr === 'opacity'){
                obj.cur_val = Math.round(getStyle(obj,attr)*100);
            }else{
                obj.cur_val = parseInt(getStyle(obj,attr));
            }

            var iTarget = options[attr];
            var scale = ( iTarget - obj.cur_val ) * iSpeed;
            obj.scale = scale > 0 ? Math.ceil(scale) : Math.floor(scale);

            if(obj.cur_val !== options[attr]){

                obj.flag = false;
                if(attr === 'opacity'){
                    obj.style[attr] = ( obj.cur_val + obj.scale )/100;
                    obj.style.filter = 'alpha(opacity='+( obj.cur_val + obj.scale )+')';
                }else{
                    obj.style[attr] = ( obj.cur_val + obj.scale ) + 'px';
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