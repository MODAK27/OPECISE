$(document).ready(function(){

    $(".yolo").load({
      click: function() {
        load("ContactFrom_v16\index.html");
      },
      error: function() {
        alert('Not linked!');
      }
    });
});