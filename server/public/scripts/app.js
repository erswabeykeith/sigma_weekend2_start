var sigmaStudent = 0;
$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        displayPerson(data);
        button(data);
        setInterval(timer,10000, data);
      }

    });

    function displayPerson(array){
      $('#Sigma').append('<div class="person"></div>');
      var $el = $('#Sigma').children().last();
      $el.append('<h3>' + array.sigmanauts[sigmaStudent].name +'</h3>');
      $el.append('<h3>' + array.sigmanauts[sigmaStudent].git_username +'</h3>');
      $el.append('<h3>' + array.sigmanauts[sigmaStudent].shoutout +'</h3>');
      $("#td"+sigmaStudent).css('background', '#ff00ff');
    }
    function button(test){
      $("#next").on('click', function(event) {
        sigmaStudent++;
        if(sigmaStudent === 19){
        sigmaStudent = 0;
      }

      $("#Sigma").empty();
      $("td").css('background', 'none');
      displayPerson(test);

    });

      $("#previous").on('click', function(event) {
        sigmaStudent--;
        if(sigmaStudent == -1){
        sigmaStudent = 18;
      }
        $("#Sigma").empty();
        $("td").css('background', 'none');
        displayPerson(test);
      });
    }


function timer(test) {
  sigmaStudent++;
  if(sigmaStudent === 19){
  sigmaStudent = 0;
}

$("#Sigma").empty();
$("td").css('background', 'none');
displayPerson(test);

}
});
