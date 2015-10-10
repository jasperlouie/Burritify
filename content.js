var elements = document.getElementsByTagName('*');
var pattern = /\$\d+,?\d*\.?\d*/;
var default_price = 8.25;

function loadPrice() {
    var price = localStorage["burrito_price"];
    if (price == undefined) {
        return default_price;
    } else {
        return price;
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var result = pattern.exec(text);
            if (result != null) {
                result = result[0];
                var result2 = result.replace(",","");
                var amount = parseFloat(result2.slice(1));
                var num_burritos = Math.round(amount/loadPrice()*100)/100;
                var replacedText = text.replace(result, num_burritos.toString()+" burritos");
                if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
