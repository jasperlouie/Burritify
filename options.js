var prices = new Array();
prices["chicken"] = 7.25;
prices["steak"] = 8.25;
prices["barbacoa"] = 8.25;
prices["carnitas"] = 7.65;
prices["sofritas"] = 7.15;
prices["veggie"] = 7.15;



// Saves options to chrome.storage
function save_options() {
  console.log("Saved");
  var meat = document.getElementById('meat').value;
  // var likesColor = document.getElementById('like').checked;
  console.log("check: " + prices[meat]);
  var obj = {};
  obj['burrito_price'] = prices[meat]; 
  chrome.storage.local.set(obj);
  var price = "";
  chrome.storage.local.get("burrito_price", function(result) {
        //alert("fetched price: " + result.burrito_price);
        console.log(result);
        price = result['burrito_price'];
  });
  console.log("Burrito Price is now: "+ price);
  document.getElementById('saveButton').value = "Saved";
}

document.getElementById('saveButton').addEventListener('click',
    save_options);
