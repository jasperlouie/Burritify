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
  localStorage["burrito_price"] = prices[meat];
  document.getElementById('save').value = "Saved";
}

document.getElementById('save').addEventListener('click',
    save_options);
