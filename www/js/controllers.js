angular.module('starter.controllers', ['ionic'])

.run(function($rootScope) {
  $rootScope.benefits = {
    "Physical Activity": false,
    "Independence": false,
    "Cognitive Reasoning": false,
    "Socializing With Peers": false,
    "Risk Management Skills": false,
    "Mastery of Skills": false,
    "Self-Esteem/Confidence": false,
    "Curriculum Links": false,
    "Conflict Resolution": false,
    "Problem Solving": false,
    "Spatial Awareness": false,
    "Fine Motor Skills": false,
    "Gross Motor Skills": false
  }

  $rootScope.groups = [ {name: "Height",
                    items: ["Discussion that if you can\'t get there on your own then you can\'t do it.",
                            "Keep three parts of body in contact with surface",
                            "Discussion and identification of dead versus living trees/branches",
                            "Encourage space",
                            "Keep educator/adult in close proximity",
                            "Clear fall zones"]},
                    {name: "Speed",
                    items: ["Establish site boundaries",
                            "Introduce wolf howl or owl hoot (call back)",
                            "Remove/prune sticks at eye level",
                            "Discussion of uneven ground",
                            "Identify and remove tripping hazards"]},
                    {name: "Dangerous Elements (Fire, Water, Animals, etc.)",
                    items: ["Wear hunting vests in season",
                            "Keep fires small",
                            "Remove tripping hazards",
                            "Identify poisonous plants",
                            "Slowly introduce fire (over 2-3 sessions)",
                            "Use protective gear",
                            "Remove dangling bits (scarves, hair)",
                            "Carry bear spray"]},
                    {name: "Use of Dangerous Tools",
                    items: ["Establish and mark tool area",
                            "Introduce concept of \"blood bubble\"",
                            "Use personal protective gear",
                            "Clear work zone and tripping hazards",
                            "Dialogue on safe tool usage and storage"]},
                    {name: "Potential to Become Lost",
                    items: ["Keep child:adult ratios low",
                            "Use wolf call and owl hoot",
                            "Identify potential \"runners\" and initiate dialogue with parents and children",
                            "Use GPS markers",
                            "Buddy system"]}]
})

.controller('BenefitListCtrl', function($scope) {
})

.controller('ControlMeasuresCtrl', function($scope) {
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})

.controller('RiskCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ControlCtrl', function($scope, $ionicPopup) {

  $scope.settings = {
    enableFriends: true
  };

  $scope.risk = {
    title: "RISK",
    template: "MSG"
  };

  $scope.high = {
    title: "High",
    template: "Are you sure you want to proceed?"
  };

  $scope.med = {
    title: "Medium",
    template: "Please proceed with caution."
  };

  $scope.low = {
    title: "Low Risk",
    template: "Go ahead and have fun!"
  };

  $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm($scope.risk);
   confirmPopup.then(function(res) {
     if(res) {
       // TO FILL IN LATER
     }
   });
  };
})

.controller('HomeCtrl', function($scope) {
    var _Name = (window.localStorage['A0Name']) ? window.localStorage['A0Name'] : "";
    var _Program = (window.localStorage['A0Program']) ? window.localStorage['A0Program'] : "";
    var _Email = (window.localStorage['A0Email']) ? window.localStorage['A0Email'] : "";
    $scope.A0 = {
        Name: function(newName) {
            window.localStorage['A0Name'] = arguments.length ? (_Name = newName) : _Name;
            return window.localStorage['A0Name'];
        },
        Program: function(newProgram) {
            window.localStorage['A0Program'] = arguments.length ? (_Program = newProgram) : _Program;
            return window.localStorage['A0Program'];
        },
        Email: function(newEmail) {
            window.localStorage['A0Email'] = arguments.length ? (_Email = newEmail) : _Email;
            return window.localStorage['A0Email'];
        },
    }
})

.controller('Assessment1Ctrl', function($scope) {
    var _Location = (window.localStorage['A1Location']) ? window.localStorage['A1Location'] : "";
    var _NumChildren = (window.localStorage['A1NumChildren']) ? window.localStorage['A1NumChildren'] : "";
    var _AgeChildren = (window.localStorage['A1AgeChildren']) ? window.localStorage['A1AgeChildren'] : "";
    var _Relationship = (window.localStorage['A1Relationship']) ? window.localStorage['A1Relationship'] : false;
    var _NumAdults = (window.localStorage['A1NumAdults']) ? window.localStorage['A1NumAdults'] : "";
    $scope.A1 = {
        Location: function(newLocation) {
            window.localStorage['A1Location'] = arguments.length ? (_Location = newLocation) : _Location;
            return window.localStorage['A1Location'];
        },
        NumChildren: function(newNumChildren) {
            window.localStorage['A1NumChildren'] = arguments.length ? (_NumChildren = newNumChildren) : _NumChildren;
            return window.localStorage['A1NumChildren'];
        },
        AgeChildren: function(newAgeChildren) {
            window.localStorage['A1AgeChildren'] = arguments.length ? (_AgeChildren = newAgeChildren) : _AgeChildren;
            return window.localStorage['A1AgeChildren'];
        },
        Relationship: function(newRelationship) {
            window.localStorage['A1Relationship'] = arguments.length ? (_Relationship = newRelationship) : _Relationship;
            return window.localStorage['A1Relationship'];
        },
        NumAdults: function(newNumAdults) {
            window.localStorage['A1NumAdults'] = arguments.length ? (_NumAdults = newNumAdults) : _NumAdults;
            return window.localStorage['A1NumAdults'];
        }
    }
})

.controller('Assessment2Ctrl', function($scope, $cordovaCamera) {
    var _ExperienceActivity = (window.localStorage['A2ExperienceActivity']) ? window.localStorage['A2ExperienceActivity'] : "";
    $scope.A2 = {
        ExperienceActivity: function(newExperienceActivity) {
            window.localStorage['A2ExperienceActivity'] = arguments.length ? (_ExperienceActivity = newExperienceActivity) : _ExperienceActivity;
            return window.localStorage['A2ExperienceActivity'];
        }
    }
    $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
})

.controller('Assessment3Ctrl', function($scope) {
  var _Benefits = (window.localStorage['A3Benefits']) ? window.localStorage['A3Benefits'] : {};
  
  /*$scope.updateValue = function(name) {
    window.localStorage['A3Benefits'][name] = benefits[name] ? "YES" : "NO"
    return window.localStorage['A3Benefits'];
  }*/

  $scope.updateValue = function(name) {
    return window.localStorage['A3Benefits'][name];
  }
    
})

.controller('Assessment4Ctrl', function($scope, $cordovaCamera) {
    var _CausesOfHarm = (window.localStorage['A4CausesOfHarm']) ? window.localStorage['A4CausesOfHarm'] : "";
    $scope.A4 = {
        CausesOfHarm: function(newCausesOfHarm) {
            window.localStorage['A4CausesOfHarm'] = arguments.length ? (_CausesOfHarm = newCausesOfHarm) : _CausesOfHarm;
            return window.localStorage['A4CausesOfHarm'];
        },
    }
    $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
})

.controller('Assessment5Ctrl', function($scope) {
    var _LevelOfRisk = (window.localStorage['A5LevelOfRisk']) ? window.localStorage['A5LevelOfRisk'] : "";
    $scope.A5 = {
        LevelOfRisk: function(newLevelOfRisk) {
            window.localStorage['A5LevelOfRisk'] = arguments.length ? (_LevelOfRisk = newLevelOfRisk) : _LevelOfRisk;
            return window.localStorage['A5LevelOfRisk'];
        },
    }
})

.controller('Assessment6Ctrl', function($scope) {
})

.controller('Assessment7Ctrl', function($scope, $ionicPopup) {
    var _NewLevelOfRisk = (window.localStorage['A7NewLevelOfRisk']) ? window.localStorage['A7NewLevelOfRisk'] : "";
    $scope.A7 = {
        NewLevelOfRisk: function(newNewLevelOfRisk) {
            window.localStorage['A7NewLevelOfRisk'] = arguments.length ? (_NewLevelOfRisk = newNewLevelOfRisk) : _NewLevelOfRisk;
            return window.localStorage['A7NewLevelOfRisk'];
        },
    }

  $scope.risk = {
    title: "RISK",
    template: "MSG"
  };


  $scope.showConfirm = function() {
   var confirmPopup;
   if (window.localStorage['A7NewLevelOfRisk'] == "high")
     confirmPopup = {title: "High", template: "This may not be a great idea. Are you sure you want to proceed?"};
   else if (window.localStorage['A7NewLevelOfRisk'] == "med")
     confirmPopup = {title: "Medium", template: "Okay. Please proceed with caution." };
   else
     confirmPopup = {title: "Low Risk", template: "Go ahead and have fun!"};

   var confirmPopup = $ionicPopup.confirm(confirmPopup);
   confirmPopup.then(function(res) {
     if(res) {
       // SOMETHING LATER
     }
   });
  };
})

.controller('Assessment8Ctrl', function($scope, $ionicPopup, $http) {
    $scope.risk = {
        prevLevel: window.localStorage['A5LevelOfRisk'],
        newLevel: window.localStorage['A7NewLevelOfRisk']
    }

    $scope.submitData = function() {
        var data = [];
        for(var i=0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //console.log(key + " " + value);
            data.push([key, value]);
            //console.log(data);
        }
        console.log(JSON.stringify(data));
        
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        var msgdata = { message : JSON.stringify(data) };
        //console.log(msgdata);
        var res = $http.post('https://clients.bv02.com/rhokforestschool/form-submit-handler/', msgdata);
        res.success(function(data, status, headers, config) { console.log(data); });
    }
    $scope.sendEmail = function() {
        var body =
            "Name: " + window.localStorage['A0Name'] + "\n" +
            "Program: " + window.localStorage['A0Program'] + "\n" +
            "Email: " + window.localStorage['A0Email'] + "\n\n" +
            window.localStorage['A1Location'] + " " +
            window.localStorage['A1NumChildren'] + " " +
            window.localStorage['A1AgeChildren'] + " " +
            window.localStorage['A1Relationship'] + " " +
            window.localStorage['A1NumAdults'];
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            "Risk Assessment",       // Subject
            body,                    // Body
            ["timpark@gmail.com"],   // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }
  $scope.clearData = function() {
   var confirmPopup = {title: "Delete Assessment", template: "Are you sure you want to clear the data?"};
   var confirmPopup = $ionicPopup.confirm(confirmPopup);
   confirmPopup.then(function(res) {
     if(res) {
       //window.localStorage.clear();
       // https://stackoverflow.com/questions/24551578/clear-localstorage-values-with-certain-prefix
       var arr = []; // Array to hold the keys
       for (var i = 0; i < localStorage.length; i++){
           if (window.localStorage.key(i).substring(0,2) != 'A0') {
               arr.push(localStorage.key(i));
           }
       }
       for (var i = 0; i < arr.length; i++) {
           window.localStorage.removeItem(arr[i]);
       }
     }
   });
  };
})

.controller('AboutCtrl', function($scope) {
})
