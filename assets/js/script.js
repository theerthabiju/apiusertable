
        $(document).ready(function() {
            $("#databtn").click(function() {
                $.ajax({
                    url: "https://jsonplaceholder.typicode.com/users",
                    type: "GET",
                    dataType: "json",
                    success: function(response) {
                        $("#userTableBody").empty(); 
                        response.forEach(user => {
                            $("#databody").append(
                                `<tr>
                                    <td>${user.id}</td>
                                    <td>${user.name}</td>
                                    <td>${user.username}</td>
                                    <td>${user.email}</td>
                                </tr>`
                            );
                        });
                    },
                    error: function(xhr, status, error) {
                        console.error("Error fetching data:", error);
                    }
                });
            });
        });
 