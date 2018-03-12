answer = "{"
for(i = 0; i < document.getElementsByClassName("TermText").length; i += 2)
    answer += '"'
    + document.getElementsByClassName("TermText")[i].textContent
    + '":"'
    + document.getElementsByClassName("TermText")[i+1].textContent
    + '", ';
answer = answer.substring(0, answer.length - 2) + "}"
console.log(answer)
