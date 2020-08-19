//Check off speficic todos by clicking.

//IMPORTANT ** If we add the listener to $('li') the first time, it will only work for the LI events that exist at the time. Therefore, if we are planning to add more later, we should add it for the parent and specify the child elements in the parentheses.

//When an LI is clicked inside of an UL, run this code...

$("ul").on('click', "li", function() {
  $(this).toggleClass('done');
})

//Remove entire todo on clicking X
//As above, we need to run the event on the parent, as we are planning on adding more children.

$('ul').on('click', 'span', function(event) {
  //Add JQuery method to stop event bubbling up and also effecting the LI
  event.stopPropagation();
  //Remove parent container
  //FadeOut does not remove element, only hides it.
  //Fade out LI and then after a second remove.
  $(this).parent().fadeOut(1000, function() {
    $(this).remove()
  });
})

//Add new todo when pressing enter

$('input[type="text"]').on('keypress', function(event) {
  if (event.which === 13) {
    //Grab new text from input
    let newToDo = $(this).val();
    //Create a new LI and add(append) to UL.
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + newToDo + "</li>");
    //Clear input
    $(this).val("")
  }
})

// Add and remove "add new to-do" when clicking plus button

$('.plus').on('click', function() {
  $('input[type="text"]').fadeToggle();
})
