//Problem:  It wraps the heading when the width of the page shrinks.
//Solution: Hide the text links and swap them out based on width.


//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option");
  
  //Deal with selected options depending on current page.
  if($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  }
 
  //option's value is the href of the link
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});

//Bind click to button
$select.change(function(){
  //go to selects location
  window.location = $select.val();
});

//Drag and drop presidents
<!-- this function when invoked allows the target item to be dragged -->
function dragIt(target, e) {
  e.dataTransfer.setData('SpanImg', target.id);
}

<!-- this function allows the item that is being dragged...to be dropped...it's a dropzone target. -->
function dropIt(target, e) {
  var id = e.dataTransfer.getData('SpanImg');
  <!-- this line adds the element that is being dropped...to the DOM in the location of the drop zone. -->
  target.appendChild(document.getElementById(id));
  e.preventDefault();
}

<!-- this function allows the item that is being dragged...to be dropped...it's  dropzone target #2. -->
function trashIt(target, e) {
  var id = e.dataTransfer.getData('SpanImg');
  <!-- this line calles the function below that removes the element that is being dropped from the DOM. -->
  removeElement(id);
  e.preventDefault();
}
function removeElement(id)    {
  var d_node = document.getElementById(id);
  d_node.parentNode.removeChild(d_node);
}




