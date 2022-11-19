
//add user
$("#add_user").submit(function(event){
    alert("New patient created successfully!");
})
//uppdare user
$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

//perform put request on API running on local server
    var request = {
        "url" : `http://localhost:80/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Patient Updated Successfully!");
    })

})
//ask user for confirmation of deletion from table
if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:80/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Patient deleted Successfully!");
                location.reload();
            })
        }

    })
}