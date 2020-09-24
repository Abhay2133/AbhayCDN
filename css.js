
function css(el, props, callback)
{

    for (let i in props)
        el.style[i] = props[i];

    if (callback)
        callback();
}
