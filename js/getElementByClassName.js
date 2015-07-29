function getElementByClassName(obj,iTarget,className){

    var oTarget , arr = [];

    oTarget = obj.getElementsByTagName(iTarget);

    for(var i = 0; i < oTarget.length; i++){

        var cName = oTarget[i].className.split(' ');

        for(var attr in cName){

            if(cName[attr] === className){

                arr.push(oTarget[i]);

                break;
            }
        }

//        for(var j = 0; j < cName.length ; j++){
//
//            if(cName[j] === className){
//                arr.push(oTarget[i]);
//                break;
//            }
//        }
    }

    return arr;
};

function $(id){
    return document.getElementById(id);
};