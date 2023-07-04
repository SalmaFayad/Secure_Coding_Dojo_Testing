app.controller('hide_view_solutionsCtrl',function ($scope,$http){
    $scope.init = () => {
        
        $http.get('/api/hide_view_solutions', window.getAjaxOpts())
        .then(function(response){
            //console.log(response);
            if(response.status ==200){
                

            }else{
                window.location ='/main';
            }
        })
        .catch((err) =>(window.location='/main'));


    };

    $scope.showchallenges = function () {
        $http
          .get("static/lessons/blackBelt/definitions.json")
          .then(function (response) {
            if (response != null && response.data != null) {
              $scope.challengess = response.data;
               
            }
          });
      };

      $scope.okk = function () {
        var selectedChallengeNames = [];
      angular.forEach(
        document.querySelectorAll('input[type="checkbox"]'),
        function (checkbox) {
          if (checkbox.checked) {
            selectedChallengeNames.push(checkbox.value);
          }
        }
      );

      console.log(selectedChallengeNames)
      $http
        .post("/hiddedchallenges", {
          data: selectedChallengeNames,
          accountId: $scope.userid,
        })
        .then(function (response) {

            console.log(response)
            if(response.status == 200){
                window.location.reload()

            }else{
                window.location ='/main';
            }
        });
    };

});

    

 

// app.controller("hide_view_solutionsCtrl", function ($scope, $http) {
//     $scope.badges = null;


//     $scope.init=()=>{
//         $http.get("/api/user/badges",window.getAjaxOpts())
//         .then((response) => {
//             $scope.badges = response.data;
//         });
//     }

  
  
// });