const version = 1.0;

module.exports.randomString = function (lenght) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < lenght; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports.getInfoLink = (link, isWWW = false) => {
    if (!link) return null;
    try {
        const result = {};
        result.origin = link;

        const _s = (link.startsWith("https://")) ? "https://" : "http://";
        const tt = link.substr(_s.length, link.length);
        const p = tt.substr(0, tt.indexOf("/"));

        result.href = _s + (p || tt);
        result.host = p || tt;
        result.protocol = result.href.substring(0, result.href.indexOf(result.host));
        result.path = (link.length > result.href.length) ? link.substr(link.indexOf(result.href) + result.href.length, link.length) : "/";
        const list = result.host.split(".");
        if (list.length >= 3) {
            result.domen = list[list.length - 2] + "." + list[list.length - 1];
        } else result.domen = result.host;

        if (isWWW) {
            if (!result.host.startsWith("wwww")) {
                result.host = "www."+result.host;
                result.href = result.protocol + result.host;
                result.origin = result.protocol + result.host + result.path;
            }
        }
        return result;
    } catch (e) {
        console.log(e);
    }
    return null;
}


