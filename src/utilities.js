const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return item; });
    return images;
}

module.exports = {
    importAll
}