answers = {};// JSON with answers

delay = 6800;

function clickOnPair(first, grids) {
    var second = getPairByValue(first);
    for (var i = 0; i < grids.length; i++)
        if (grids[i].textContent === second) {
            grids[i].click();
            grids.removeById(i);
            return;
        }
}

function getPairByValue(value) {
    if (answers.hasOwnProperty(value))
        return answers[value];
    for (var key in answers)
        if (answers[key] === value)
            return key;
}

Array.prototype.removeById = function(element) {
    this.splice(element, 1);
}

document.getElementsByClassName("UIButton--hero")[0].addEventListener("click",
    function() {
        var grids = "";
        setTimeout(function() {
        grids = Array.from(document.getElementsByClassName("MatchModeQuestionGridTile-text"));
        setTimeout(function() {
            var solver = setInterval(function() {
		if (grids.length == 0) clearInterval(solver);
                grids[0].click();
                clickOnPair(grids[0].textContent, grids);
                grids.removeById(0);
            }, 5);
        },  delay);
        }, 10);
    });
