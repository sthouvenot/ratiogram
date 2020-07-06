var getItems = [];
getItems.push('disabled');
getItems.push('lenabled');
getItems.push('fenabled');
chrome.storage.local.get(getItems, data => {
    if (!data.disabled) {
var dict = {};

const targetNode = document.getElementById('react-root');
const config = { attributes: true, childList: true, subtree: true };

 const request = async (fetchname, name) => {
             fetchname = fetchname.concat("http://www.instagram.com/", name, "/?__a=1"); 
             const response = await fetch(fetchname);
             const json = await response.text();
             var start = json.search("edge_followed_by");
             var end = json.search("},\"followed_by_viewer\"");
             var answer =  json[(start+27)];

             for(var i = (start+28); i < end; i++)
             {
                answer = answer.concat(json[i]);
             }
             
              dict[name] = answer;
             }

const callback = function(mutationsList, observer) {

     var followpage = document.getElementsByClassName("g47SY ");
     if(followpage.length === 3){

        var followers = followpage[1].getAttribute("title");
        var ogfollowers = followers;
        followers = parseInt(followers.replace(/,/g, ''))
        var following = followpage[2].childNodes[0];
        following = following.nodeValue;
        following = parseInt(following.replace(/,/g, ''))
        var ratio = (followers/following);
        ratio = ratio.toFixed(3); 
        var headertext = document.getElementsByClassName("k9GMp ");
        if (typeof headertext === 'undefined'){
          headertext = document.getElementsByClassName(" _3dEHb ");
        }
        if (typeof headertext[0] !== 'undefined'){
        headertext[0].innerHTML = '';
        }
          var element = document.createElement("b");
          element.innerHTML = (ratio);
          element.style.fontWeight = "900";
          element.style.fontSize = "xx-large";
          var element2 = document.createElement("b");
          element2.innerHTML = (" follow ratio");
          element2.style.margin = "8px 0px 0px 8px";

          var element3 = document.createElement("b");
           element3.style.fontWeight = "790";
             element3.style.fontSize = "x-large";
          element3.innerHTML = (ogfollowers);
          element3.style.margin = "4px 0px 0px 24px";
           var element4 = document.createElement("b");
            element4.innerHTML = (" followers");
          element4.style.margin = "9px 0px 0px 3px";
          if (typeof headertext[0] !== 'undefined'){
          headertext[0].appendChild(element);
          headertext[0].appendChild(element2);

    if (data.fenabled) {
           headertext[0].appendChild(element3);
            headertext[0].appendChild(element4);
             } 
        }
     }

          var followpage = document.getElementsByClassName("g47SY lOXF2");


     if(followpage.length === 3){
        var followers = followpage[1].getAttribute("title");
        followers = parseInt(followers.replace(/,/g, ''))
        var following = followpage[2].childNodes[0];
        following = following.nodeValue;
        following = parseInt(following.replace(/,/g, ''))
        var ratio = (followers/following);
        ratio = ratio.toFixed(3); 
        var headertext = document.getElementsByClassName(" _3dEHb ");
        headertext[0].innerHTML = '';
          var element = document.createElement("b");
          element.innerHTML = (ratio);
          element.style.fontWeight = "900";
          element.style.fontSize = "x-large";
          var element2 = document.createElement("b");
          if (typeof headertext[0] !== 'undefined'){
          headertext[0].appendChild(element);
        }
     }

    var containers = document.getElementsByClassName("_8Rm4L M9sTE  L_LMM SgTZ1   ePUX4");

    if(containers.length === 0)
    {
      containers = document.getElementsByClassName("M9sTE  L_LMM  JyscU Tgarh ePUX4");
    }
    if(containers.length === 0)
    {
      containers = document.getElementsByClassName("M9sTE  L_LMM  JyscU  ePUX4");
    }
    for (var i = 0; i < containers.length; i++) {
        var usernameholder = containers[i].getElementsByClassName("sqdOP yWX7d     _8A5w5   ZIAjV ");
        if (typeof usernameholder !== 'undefined'){
        var username = usernameholder[0];
        if (typeof username !== 'undefined'){
        for (var j = 0; j < username.childNodes.length; j++) {
             var node = username.childNodes[j];
             var name = node.nodeValue;
             
             if (dict.hasOwnProperty(name)) {
            }
            else{
             var fetchname = '';
             var text = '';
             request(fetchname, name);
             dict[name] = -1;
         }
       }
        }      
        }

        if(dict[name] !== -1){
        var views = 0;
        var likes = 0;
        var increasebyOne = false;
        var dontaddagain = false;
        var textnode = '';
        var headerholder = containers[i].getElementsByClassName("vcOH2"); 
        if (typeof headerholder !== 'undefined'){
        for (var w = 0; w < headerholder.length; w++) { 
        var header = headerholder[w];  
        dontaddagain = false;
        for (var j = 0; j < header.childNodes.length; j++) {
            var node = header.childNodes[j];
            if (node.nodeType === 3)
            {

               var text = node.nodeValue;
                if (text === " ")
                {
                    dontaddagain = true;
                }
            }
          if(dontaddagain === false){
            var viewnumberholder = headerholder[w].getElementsByTagName("span");
            var node = viewnumberholder[0].childNodes[0];
            views = node.nodeValue;
            header.removeChild(header.childNodes[j]);
          }
        }       
          if(dontaddagain === false){
          if (dict[name] !== -1){
             header.innerHTML = ''; 

          var viewssaved = views;
          var totalviews = parseInt(views.replace(/,/g, ''))

          var hehe = totalviews /  parseInt(dict[name]);
          var hehe2 = (hehe * 100).toFixed(2);

          var symbol = document.createTextNode(" ")
          header.appendChild(symbol);

          var element = document.createElement("b");
          element.innerHTML = (hehe2 + "%");
          element.style.fontWeight = "900";
          var textnode = document.createTextNode(" views/followers");
          header.appendChild(element);
          header.appendChild(textnode);

          var element2 = document.createElement("b");
          element2.innerHTML = (viewssaved);
          element2.style.fontWeight = "900";
          element2.style.margin = "0px 0px 0px 6px";
          //element2.style.fontSize = "small";

          var element3 = document.createElement("b");
          element3.innerHTML = (" views");
           element3.style.margin ="0px 0px 0px -1px";
           //      element3.style.fontSize = "small";
  

    if (data.lenabled) {
          header.appendChild(element2);
          header.appendChild(element3);
            }
          console.log(name + " has " + totalviews + " views and " + dict[name] + " followers ");
        }
        }
      }

      }

        var headerholder = containers[i].getElementsByClassName("Nm9Fw"); 
        var likebuttonholder = containers[i].getElementsByClassName("_8-yf5 "); 
        if (typeof headerholder !== 'undefined'){
        for (var w = 0; w < headerholder.length; w++) { 
        var header = headerholder[w];  
        dontaddagain = false;
        for (var j = 0; j < header.childNodes.length; j++) {
            var node = header.childNodes[j];
            if (node.nodeType === 3)
            {
                var text = node.nodeValue;
                if (text === "Liked by ")
                {
                    increasebyOne = true;
                }
                if (text === " ")
                {
                    dontaddagain = true;
                }
            }
         
          if(dontaddagain === false){
            var likenumberholder = headerholder[w].getElementsByTagName("span");
            var node = likenumberholder[0].childNodes[0];
            likes = node.nodeValue;
            header.removeChild(header.childNodes[j]);
          }
        }        
          if(dontaddagain === false){
          if (dict[name] !== -1){
             header.innerHTML = ''; 
            var likessaved = likes;
          var totallikes = parseInt(likes.replace(/,/g, ''))

          if(increasebyOne){
            totallikes = totallikes + 1;
            likessaved = parseInt(likes.replace(/,/g, '')) + 1;
            likessaved = likessaved.toLocaleString()
          }

          var hehe = totallikes /  parseInt(dict[name]);
          var hehe2 = (hehe * 100).toFixed(2);

          var symbol = document.createTextNode(" ")
          header.appendChild(symbol);

          var element = document.createElement("b");
          element.innerHTML = (hehe2 + "%");
          element.style.fontWeight = "900";
          var textnode = document.createTextNode(" likes/followers");
          header.appendChild(element);
          header.appendChild(textnode);
          console.log(name + " has " + totallikes + " likes and " + dict[name] + " followers ");

         var element2 = document.createElement("b");
          element2.innerHTML = (likessaved);
          element2.style.fontWeight = "900";
          element2.style.margin = "0px 0px 0px 6px";
        //  element2.style.fontSize = "small";

          var element3 = document.createElement("b");
          element3.innerHTML = (" likes");
            element3.style.margin ="0px 0px 0px -1px";
            //     element3.style.fontSize = "small";
  
                     if (data.lenabled) {
              
          header.appendChild(element2);
          header.appendChild(element3);
 
  } 

          var likedhex = likebuttonholder[w].getAttribute("fill");
          if(likedhex === "#ed4956"){
            dict[name +"$oglike"] = likedhex;
          }
          else{
            dict[name+ "$oglike"] = likedhex;
          }
          dict[name + "$totallikes"] = totallikes;
        }
        }
        else if(dict[name + "$oglike"] !== likebuttonholder[w].getAttribute("fill")){

        var increase = true;
         var likedhex = likebuttonholder[w].getAttribute("fill");
          if(likedhex === "#ed4956"){
            dict[name +"$oglike"] = likedhex;
          }
          else{
            dict[name+ "$oglike"] = likedhex;
            increase = false;
          }

            var totallikes = 0;

          if(increase){
                totallikes = (dict[name+ "$totallikes"] + 1);
                dict[name + "$totallikes"] = (dict[name+ "$totallikes"] + 1);
          }
          else{
              totallikes = (dict[name+ "$totallikes"] - 1);
               dict[name + "$totallikes"] = (dict[name+ "$totallikes"] - 1);
          }
          var likessaved = totallikes;
          var hehe = totallikes /  parseInt(dict[name]);
          var hehe2 = (hehe * 100).toFixed(2);

             header.innerHTML = ''; 
             var symbol = document.createTextNode(" ")
          header.appendChild(symbol);

          var element = document.createElement("b");
          element.innerHTML = (hehe2 + "%");
          element.style.fontWeight = "900";
          var textnode = document.createTextNode(" likes/followers");
          header.appendChild(element);
          header.appendChild(textnode);
          j = 400;

            console.log(name + " has " + totallikes + " likes and " + dict[name] + " followers ");


         var element2 = document.createElement("b");
          element2.innerHTML = (likessaved);
          element2.style.fontWeight = "900";
          element2.style.margin = "0px 0px 0px 6px";
       //   element2.style.fontSize = "small";

          var element3 = document.createElement("b");
          element3.innerHTML = (" likes");
            element3.style.margin ="0px 0px 0px -1px";
            //     element3.style.fontSize = "small";
  

     if (data.lenabled) {
          header.appendChild(element2);
          header.appendChild(element3);
            } 

        }
        

      }
      }
      }
}
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

setInterval(callback,75);

 } else {
        //it is disabled
    }
});
