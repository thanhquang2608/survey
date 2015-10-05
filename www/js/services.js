angular.module('starter.services', [])

.factory('Dealers', function () {
     //Might use a resource here that returns a JSON array

     //Some fake testing data
    var dealers = [];
    var dealer = {};
    var survey = {};
    return {
        all: function () {
            return dealers;
        },
        remove: function (dealer) {
            dealers.splice(dealers.indexOf(dealer), 1);
        },
        get: function (surveyId) {
            for (var i = 0; i < dealers.length; i++) {
                if (dealers[i].SurveyId === parseInt(surveyId)) {
                    return dealers[i];
                }
            }
            return null;
        },
        setDealers: function (data) {
            dealers = data;
        },
        setSurvey: function (data) {
            survey = data;
        },
        survey: function(){
            return survey;
        },
        setDealer: function (data) {
            dealer = data;
            var date = dealer.BirthDate.split('/');
            dealer.day = parseInt(date[0]);
            dealer.month = parseInt(date[1]);
            dealer.year = parseInt(date[2]);
            //console.log(dealer.day + ", " + dealer.month + ", " + dealer.year);

        },
        dealer: function () {
            return dealer;
        },
        getDay: function () {
            return dealer.day;
        },
        getMonth: function () {
            return dealer.month;
        }
    };
})

.service('SurveyService', function () {
    var surveyID = -2;
    var AC_PC = undefined;
    return {
        getSurveyID: function () {
            return surveyID;
        },
        setSurveyID: function (id) {
            surveyID = id;
        }
    }
})
.service('AuthService', function ($rootScope, $q, $http, USER_ROLES, AUTH_EVENTS, NETWORK) {
    var serviceBase = NETWORK.BASE_URL;
    var LOCAL_TOKEN_KEY = 'AncoTokenKey';
    var LOCAL_USER_KEY = 'AncoUserKey';
    var isAuthenticated = false;
    var role = '';
    var authToken;
    var user;

    function loadUserCredentials() {
        var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
        var retrievedUser = window.localStorage.getItem(LOCAL_USER_KEY);
        //console.log(retrievedUser);
        if (token && retrievedUser) {
            useCredentials(token);
            user = JSON.parse(retrievedUser);
        }

    }

    function storeUserCredentials(u, token) {
        window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
        window.localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(u));
        useCredentials(token);
        user = u;
        $rootScope.$broadcast(AUTH_EVENTS.authenticated);
    }

    function useCredentials(token) {
        isAuthenticated = true;
        authToken = token;
        //console.log(token);

        // Set the token as header for your requests!
        // $http.defaults.headers.common['X-Auth-Token'] = 'Bearer ' + token;
        // $http.defaults.headers.common.Authorization = 'Bearer ' + token;
    }

    function destroyUserCredentials() {
        authToken = undefined;
        username = '';
        isAuthenticated = false;
        window.localStorage.removeItem(LOCAL_TOKEN_KEY);
        window.localStorage.removeItem(LOCAL_USER_KEY);
    }

    var login = function (userdata) {
        //console.log("login");
        return $q(function (resolve, reject) {
            var id = userdata.id;
            var pass = userdata.password;


            var param = {
                id: id,
                password: pass
            }
            //console.log(param);
            //$http.post(serviceBase + '/login', { params: param })
            $http.post(serviceBase + '/login', param)
            .success(function (response) {
                var user = response.user;
                var token = response.token;

                storeUserCredentials(user, token);
                resolve('Login success.');
            }).error(function (err, status) {
                // var user = {};
                // var token = '';

                // user.AC_PC = 1;
                // storeUserCredentials(user, token);
                // resolve('Login success.');
                // return;
                console.log("login failed");
                console.log(err.toString());
                reject(err);
            });
        });
    };

    var logout = function () {
        destroyUserCredentials();
    };

    var isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
    };

    loadUserCredentials();

    return {
        login: login,
        logout: logout,
        isAuthorized: isAuthorized,
        token: function () { return authToken; },
        isAuthenticated: function () { return isAuthenticated; },
        user: function () { return user; }
    };
})

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
    return {
        responseError: function (response) {
            $rootScope.$broadcast({
                401: AUTH_EVENTS.notAuthenticated,
                403: AUTH_EVENTS.notAuthorized
            }[response.status], response);
            return $q.reject(response);
        }
    };
})

.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
});
