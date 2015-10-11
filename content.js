var elements = document.getElementsByTagName('*');
var pattern = /\$\d+,?\d*\.?\d*/;
var default_price = 8.25;
function loadPrice() {
    chrome.storage.local.get("burrito_price", function(result) {
        //alert("fetched price: " + result.burrito_price);
        console.log(result);
        price = result['burrito_price'];
        if (price == undefined) {
            console.log("price undefined: "+price);
            price = default_price;
        } else {
            console.log("price defined, using "+price);
            //return price;
        }
        doReplace();
  });
}

function doReplace(){
    console.log("starting replacement, price is: "+price);
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
                    var num_burritos = Math.round((amount/price)*100)/100;
                    var replacedText = text.replace(result, num_burritos.toString()+" burritos");
                    if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }
            }
        }
    }
}
loadPrice();