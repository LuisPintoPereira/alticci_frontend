$(() => {
    $("#goButton").click(function(){
        var input = $("#input").val();
        $.ajax({
            type: "GET",
            url: "http://localhost:8060/alticci/"+input,
            success: function(response) {
                $("#result").html(response);
            },
            error: function(response) {
                
                //Some error in ajax call
                alert("some Error  " + response);
            }
        }); 
    });
});