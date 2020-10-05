
function css(el, props, callback)
{

    for (let i in props)
        el.style[i] = props[i];

    if (callback)
        callback();
}

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

const ses = (str, callback) => {

let arr = [...str];
let key = arr[0];
arr.shift()
let val = arr.join("");

        switch (key) {
            
 case '#': return document.getElementById(val);
    break;
 case '.': return document.getElementsByClassName(val);
    break;
 default : return document.getElementsByTagName(val);
    break;
    
        }
        
if(callback)
    callback ();
        
        return 0;
    }
