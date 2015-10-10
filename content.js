var elements = document.getElementsByTagName('*');
var pattern = /\$\d+\.?\d*/;///\$\d+/;
var burrito_price = 8.25;

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var result = pattern.exec(text);
            if (result != null) {
                result = result[0];
                //var amount = 5.0;
                var amount = parseFloat(result.slice(1));
                // var amount = 1;
                var num_burritos = Math.round(amount/burrito_price*10000)/10000;
                var replacedText = text.replace(result, num_burritos.toString()+" burritos");
                // replacedText = "as;ldkfja;lsdfj";
                if (replacedText !== text) {
            //     element.replaceChild(document.createTextNode(replacedText), node);
                element.replaceChild(document.createTextNode(replacedText), node);
                }

            }
            // var replacedText = text.replace('Millennials', 'snake people');
            //
            // if (replacedText !== text) {
            //     element.replaceChild(document.createTextNode(replacedText), node);
            //     // element.replaceChild(document.createTextNode(replacedText), node);
            // }
        }
    }
}
