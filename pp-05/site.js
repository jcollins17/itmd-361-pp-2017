$(document).ready(function(){
  $("#nonjsdoorbell").remove();
  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
}
$("#RINGYOUMOTHERFUCKER").click(function(){
  ringDoorbell();
});
});
