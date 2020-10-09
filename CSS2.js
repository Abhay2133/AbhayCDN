const prop1 = {
    p : "padding",
    m : "margin",
    rc : "borderRadius",
    d : "display",
    bdr : "border",
    t : "textAlign",
    w : "width",
    f : "fontSize",
    bg : "backgroundColor"
}

const prop2 = {
    T : "top",
    B : "bottom",
    L : "left",
    R : "right"
}

const val = {
    xxs : "1px",
    xs : "3px",
    s : "5px",
    l : "15px",
    xl : "20px",
    xxl : "25px",
    xxxl : "30px",
    no : "none",
    b : "block",
    ib : "inline-block",
    c : "center",
    lft : "left",
    r : "right",
    "100" : "100%",
    drk : "#333",
    n : "0px"
}

const def = "10px";
const spProp = {
    "f-c-c" : {
        display : "flex", 
        flexDirection : "column",
        justifyContent : "center"
    },
    "f-r-c" : {
        display : "flex", 
        flexDirection : "row",
        justifyContent : "center"
    },
    bb : {
        boxSizing : "border-box"
    },
    bnw : {
        backgroundColor : "#333",
        color: "white"
    },
    bold : {
        fontWeight : "500"
    },
    bolder : {
        fontWeight : "900"
    },
    "bold-n" : {
        fontWeight : "100",
        color: "grey"
    }
}

function apply_CSS (cb)
{
    let body = document.body;
    let bc = body.children

    apply_style(body, body.className.split(" "))
    loop(bc)
    
    if(cb)
        cb();
}

var n=1;
var z = 0;

function loop (arr)
{
    for(let i of arr)
    {
        if(i.children.length)
        {
            let clas = i.className.split(" ");
            apply_style(i, clas);
            let cc = i.children;
            loop(cc);
        }
        else
        {
//console.log(++n+". "+i.className+","+ i.textContent)
            let clas = i.className.split(" ")
            apply_style(i, clas)
        }
    }
}

function apply_style (el, clas)
{

let styleRule = {};
    for(let i of clas)
    {
    
    if(Object.keys(spProp).includes(i))
    {
        css(el, spProp[i])
        continue;
    }
    
        let key ="", valu = "";
        let styleName = i.split("-");
        for(let j of styleName)
        {
            let cont = 0
            
            for(let k in prop1)
            {
                if(k == j)
                {
                    key = prop1[k];
                    cont = 1
                    break;
                }
            }
            if(cont)
            continue
            
            for(let k2 in prop2)
            {
                if(k2 == j)
                {
                    key += "-"+prop2[k2]
                    cont = 1
                   break;
                }
            }
            if(cont)
            continue
            
            for(let v in val)
            {
                if(v == j)
                {
                    valu = val[v];
                    break;
                }
            }
        }
       if(!valu)
      {
        if(Object.keys(prop2).includes(styleName[1]))
        valu = "3px solid"
        else
        if(styleName[0] == 'bdr')
        valu = "1px solid"
        else
          valu = def
    }
    styleRule[key] = valu;
   // console.log(JSON.stringify(styleRule))
    }
    
    css(el, styleRule)
}










