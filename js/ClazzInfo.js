/**
 * 根据class查找元素对象
 * @param obj  目标对象的父级对象
 * @param target  目标对象
 * @param className  类名
 */
function getElementByClassName(obj,target,className){

    var iTarget = obj.getElementsByTagName(target);

    for(var i = 0; i < iTarget.length; i++){

        var arr = [];
        var iClass = iTarget[i].className.split(' ');

        for(var attr in iClass){

            if(iClass[attr] === className){

                arr.push(iTarget[i]);
                break;
            }
        }
    }
    return arr;
};

/**
 *  为目标元素添加指定的class属性
 * @param obj
 * @param className
 */
function addClass(obj,className){

    if(obj.className){

        var iClass = obj.className.split(' ');
        var _index = getIndex(iClass,className);

        if(_index === -1){
            obj.className = obj.className + ' ' + className;
        }

    }else{
        obj.className = className;
    }
}

/**
 *  为目标元素删除指定的class属性
 * @param obj
 * @param className
 */
function removeClass(obj,className){

    if(obj.className){

        var iClass = obj.className.split(' ');

        var _index = getIndex(iClass,className);

        if(_index !== 0){
            iClass.splice(_index,1);
            obj.className = iClass;
        }
    }
}

/**
 *  判断添加的className在原有的class中是否存在
 * @param arr
 * @param className
 * @returns {number}  className出现的位置
 */
function getIndex(arr,className){
    var _index = -1;
    for(var attr in arr){

        if(arr[attr] === className){
            _index = attr;
            break;
        }
    }
    return _index;
}

/**
 *  根据指定的id查找对象
 * @param id
 * @returns {HTMLElement}
 */
function $(id){
    return document.getElementById(id);
}