function getZipcode(zipcode){
  console.log(zipcode)
}
    //Functions that users will interact with go in the doc ready
$(document).ready(function() {
    //Event Handlers
    $("#go-btn").click(function() {
      var zipcode = $("#zipcode").val();

      getZipcode(zipcode);
    });

});
