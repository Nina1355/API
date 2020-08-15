function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.pantone_value+'</p>\n' +
        '        <div style="background:'+item.color+';">'+item.color+'</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

// addItem({"id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"});
let newItem=[];
const displayItem=document.querySelector("#list-items");
const itemsContainer = document.getElementById("list-items");

function fetchColorsList(){
    //TODO implement this function
    fetch('https://reqres.in/api/unknown')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) { 
          for(i=0;i<data["data"].length;i++)
          addItem(data["data"][i]);
          newItem[i] = (data['data'][i]);
         console.log(newItem);
         localStorage.setItem("colorList", JSON.stringify(data['data']));
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function loadColorsFromStorage(){
    //TODO implement this function
     localStorage.setItem("colorList", JSON.stringify(newItem));
    var newColorList=JSON.parse(localStorage.getItem("colorList")) || [];
     for(let i=0;i<this.newColorList.length;i++){
      addItem(newColorList[i]);
       localStorage.setItem("newColorList",JSON.stringify(newColorList[i]));
       break;
    }
}
function  clearColorStorage() { 

  localStorage.removeItem("colorList");
  itemsContainer.innerHTML="";

}

fetchColorsList();
loadColorsFromStorage();
