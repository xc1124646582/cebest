function Ajax(opt){
    if(window.XMLHttpRequest){
        var xhr = new XMLHttpRequest();
    }
    else{
        var xhr = new window.ActiveXObject( "Microsoft.XMLHTTP" );
    }
    if(opt.type=='get'){
        xhr.open(opt.type,opt.url+'?'+JsonToString(opt.data),true);
        xhr.send();
    }
    else if(opt.type=='post'){
        xhr.open(opt.type,opt.url,true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(JsonToString(opt.data));
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status>=200&&xhr.status<300||xhr.status==304){
                opt.success(xhr.responseText);
            }
            else{
                opt.error()
            }
        }
    };
    function JsonToString(json){
        var arr = [];
        for(var i in json){
            arr.push(i+'='+json[i])
        }
        return arr.join('&');
    };
}

export default Ajax;