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
    T : "Top",
    B : "Bottom",
    L : "Left",
    R : "Right"
}

const val = {
    xxs : "1px",
    xs : "3px",
    s : "5px",
    l : "15px",
    xl : "20px",
    xxl : "25px",
    xxxl : "30px",
    n : "none",
    b : "block",
    ib : "inline-block",
    c : "center",
    lft : "left",
    r : "right",
    "100" : "100%",
    drk : "#333"
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
    }
}

function apply_spCSS ()
{
    for(let i in spProp)
    {
        el = se("c", i);
        for(let j of el)
        {
            if(typeof(j) == "object")
            css(j, spProp[i]);
        }
    }
}


function apply_CSS (cb)
{
    for(let i in prop1)
    {
//                        1
let cls1 = i;
let el1 = se("c", cls1);
let style1 = prop1[i];
for(let l1 in el1)
{
    if(typeof(el1[l1]) == "object")
    {
     if(cls1 == "bdr")
     el1[l1].style[style1] = "1px solid";
     else
     el1[l1].style[style1] = def;
    }
}

        for(let j in prop2)
        {
//                         2
let cls2 = i + "-" + j;
let el2 = se("c", cls2);
let style2 = prop1[i] + prop2[j];
for(let l2 in el2)
{
    if(typeof(el2[l2]) == "object")
    {
     if(i == "bdr")
     el2[l2].style[style2] = "3px solid";
     else
     el2[l2].style[style2] = def;
    }
}

            for(let k in val)
            {
//                        3
let cls3 = i + "-" + j + "-" + k;
let el3 = se("c", cls3);
let style3 = ""+prop1[i]+prop2[j];
for(let l3 in el3)
{
    if(typeof(el3[l3]) == "object")
    el3[l3].style[style3] = val[k];
}

let cls13 = i + "-" + k;
let el13 = se("c", cls13);
let style13 = prop1[i];
for(let l13 in el13)
{
    if(typeof(el13[l13]) == "object")
    el13[l13].style[style13] = val[k]
}
            


            }
        }
    }

if(cb)
cb();
//    End of apply_CSS ()
}

apply_CSS(apply_spCSS);










