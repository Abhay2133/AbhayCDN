const se = (key, val) => {
        switch (key) {
            
 case 'i': return document.getElementById(val);
    break;
 case 'c': return document.getElementsByClassName(val);
    break;
 case 't': return document.getElementsByTagName(val);
    break;
    
        }
        
        return 0;
    }
    
function ae(el,event, method, params, callback)
{
    el.addEventListener(event, function (){
        method(this, params);
    });
    
    if(callback)
    callback();
}
