(function(){
  
  //Cuando se clickea en el boton de busqueda se corre el siguiente codigo
  
  $('#buscar').click(function(){
    //Se obtienen la data del input
    var busqueda = $('#input').val();
    //Se utiliza el url del de API de wikipedia para obtener los datos
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + busqueda + "&format=json&callback=?";
    console.log(url);
    
    //Animando los elementos
    //$('body').css("margin", "0");
    
    
    
    //Se hace un llamado ajax dentro del evento de click
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function(data, textStatus, jqXHR){
          console.log(data);
          $('.output').html('');
          for(var i=0; i<data[1].length; i++){
            $('.output').prepend("<div><div class='btn-default articulos'><a href="+data[3][i]+"><h2 style='color:black; margin-top:5px;font-weight:600;'>" + data[1][i]+ "</h2>" + "<p style='color:#3D403F;'>" + data[2][i] + "</p></a></div></div>");
          }
          $('#input').val('');
      },
      error: function(mensajeError){
        alert('Error');
      }
    });
  
  }); 
  $("#input").keypress(function(e){
      if(e.which==13){
        $("#buscar").click();
      }
    });
  
}());
