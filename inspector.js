/*
  Author : Hemanth.HM
  Site : h3manth.com
  License : GNU GPLV3
*/

/* Red block around selection */
function highlight_on(evt)
{
    element = evt.target;  
    element.style.borderWidth = '3px';
    element.style.borderStyle = 'solid';
    element.style.borderColor = 'red';
}
 
/* Remove the red highlight */
function hightlight_off(evt)
{
    evt.target.style.borderStyle = 'none';
}
 
/* Generated the @browser#method on click 
   As of now just console.logs */
function gen_code(evt)
{
    event.preventDefault() // Prevent click action.
    var elem = evt.target; // Get the elem under inspection.
    var tag_name = elem.tagName.toLowerCase(); // Get the tag_name.
    // Input type has few variations.
    if ( tag_name == "input" ){
         switch (elem.type) {
           case "button":
           case "reset":
           case "submit":
           case "image":
              tag_name = "button";
              break;
           case "radio":
              tag_name = "radio";
              break;
           case "checkbox":
              tag_name = "checkbox";
              break;
           case "file":
              tag_name = "file_field";
              break;
           default:
              tag_name = "text_field";
        }
    }
    var attribs = elem.attributes;
    for ( var i=0; i<attribs.length; i++ ){
      var name = attribs[i].nodeName;
      var val = attribs[i].nodeValue;
      // Avoding style and onclick attrs.
      if ( ['style','onclick'].indexOf(name) < 0 ){
        // Log all possible name=>val except 
        console.log("@browser."+tag_name+"(:"+name+"=>'"+val+"')"); 
      }
    }
    // Log :text=>text variant.
    console.log("@browser."+tag_name+"(:text=>'"+evt.target.innerText.toLowerCase()+"')");
    return false;
}
 
 // Event listners.
document.addEventListener("mouseover", highlight_on, true);
document.addEventListener("mouseout", hightlight_off, true);
document.addEventListener("click", gen_code, true);
