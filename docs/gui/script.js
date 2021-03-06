function show(type)
{
    let count = 0;
    for (let key in methods) {
        const row = document.getElementById(key);
        if ((methods[key] &  type) !== 0) {
            row.style.display = '';
            row.className = (count++ % 2) ? rowColor : altColor;
        }
        else
            row.style.display = 'none';
    }
    updateTabs(type);
}

function updateTabs(type)
{
    for (let value in tabs) {
        const sNode = document.getElementById(tabs[value][0]);
        const spanNode = sNode.firstChild;
        if (value === type) {
            sNode.className = activeTableTab;
            spanNode.innerHTML = tabs[value][1];
        }
        else {
            sNode.className = tableTab;
            spanNode.innerHTML = "<a href=\"javascript:show("+ value + ");\">" + tabs[value][1] + "</a>";
        }
    }
}
