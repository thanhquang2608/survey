app.controller('SurveyController', function ($rootScope, $scope, $state, $http, $ionicHistory,
     AuthService, SurveyService, AUTH_EVENTS, $ionicLoading, NETWORK) {
    var serviceBase = NETWORK.BASE_URL;
    //Model
    ////adress
    $scope.provineId = "";
    $scope.districtId = "";
    $scope.wardId = ""

    $scope.dealerCode = "";
    //$scope.surveyCode autoscreate in server

    ////GPS
    $scope.lat = "";
    $scope.long = "";

    ////Dealer
    $scope.dealer = {};
    $scope.dealerIndex = -1;
    $scope.dealer.AC_PC = 2;
    $scope.dealer.day = 1;
    $scope.dealer.month = 1;
    $scope.dealerLabel = "";
    $scope.dealerName = "";
    $scope.dealerBirthday = "";
    $scope.dealerIdCard = "";
    $scope.dealerIdCardImgFront = "";
    $scope.dealerIdCardImgBehind = "";
    $scope.dealerPhone = "";
    $scope.dealerImg = "";
    $scope.shopImg = "";
    $scope.warehouseImg = "";

    //// Survey
    $scope.survey = {};
    $scope.surveyID = -1;
    $scope.survey.NUOI_TT = 0;
    /////// HEO
    //// ANCO
    $scope.survey.HEO_ANCO = 0;
    $scope.survey.HEO_ANCO_MUA_TT = 0;
    $scope.survey.HEO_ANCO_SL = 0;
    $scope.survey.HEO_ANCO_HEO = 0;
    $scope.survey.HEO_ANCO_THIT = 0;
    $scope.survey.HEO_ANCO_NAI = 0;
    //// CONCO
    $scope.survey.HEO_CONCO = 0;
    $scope.survey.HEO_CONCO_MUA_TT = 0;
    $scope.survey.HEO_CONCO_SL = 0;
    $scope.survey.HEO_CONCO_HEO = 0;
    $scope.survey.HEO_CONCO_THIT = 0;
    $scope.survey.HEO_CONCO_NAI = 0;
    //// CP
    $scope.survey.HEO_CP = 0;
    $scope.survey.HEO_CP_MUA_TT = 0;
    $scope.survey.HEO_CP_SL = 0;
    $scope.survey.HEO_CP_HEO = 0;
    $scope.survey.HEO_CP_THIT = 0;
    $scope.survey.HEO_CP_NAI = 0;
    //// CG
    $scope.survey.HEO_CG = 0;
    $scope.survey.HEO_CG_MUA_TT = 0;
    $scope.survey.HEO_CG_HEO = 0;
    $scope.survey.HEO_CG_THIT = 0;
    $scope.survey.HEO_CG_NAI = 0;
    //// GF
    $scope.survey.HEO_GF = 0;
    $scope.survey.HEO_GF_MUA_TT = 0;
    $scope.survey.HEO_GF_HEO = 0;
    $scope.survey.HEO_GF_THIT = 0;
    $scope.survey.HEO_GF_NAI = 0;
    //// ANOTHER
    $scope.survey.HEO_ANOTHER = 0;
    $scope.survey.HEO_ANOTHER_MUA_TT = 0;
    $scope.survey.HEO_ANOTHER_HEO = 0;
    $scope.survey.HEO_ANOTHER_THIT = 0;
    $scope.survey.HEO_ANOTHER_NAI = 0;

    //////// GA
    //// CON CO
    $scope.survey.GA_CC = 0;
    $scope.survey.GA_CC_MUA_TT = 0;
    $scope.survey.GA_CC_GD = 0;
    $scope.survey.GA_CC_LT = 0;
    $scope.survey.GA_CC_LM = 0;
    //// CP
    $scope.survey.GA_CP = 0;
    $scope.survey.GA_CP_MUA_TT = 0;
    $scope.survey.GA_CP_GD = 0;
    $scope.survey.GA_CP_LT = 0;
    $scope.survey.GA_CP_LM = 0;
    //// GF
    $scope.survey.GA_GF = 0;
    $scope.survey.GA_GF_MUA_TT = 0;
    $scope.survey.GA_GF_GD = 0;
    $scope.survey.GA_GF_LT = 0;
    $scope.survey.GA_GF_LM = 0;
    //// JF
    $scope.survey.GA_JF = 0;
    $scope.survey.GA_JF_MUA_TT = 0;
    $scope.survey.GA_JF_GD = 0;
    $scope.survey.GA_JF_LT = 0;
    $scope.survey.GA_JF_LM = 0;
    //// DB
    $scope.survey.GA_DB = 0;
    $scope.survey.GA_DB_MUA_TT = 0;
    $scope.survey.GA_DB_GD = 0;
    $scope.survey.GA_DB_LT = 0;
    $scope.survey.GA_DB_LM = 0;
    //// NH
    $scope.survey.GA_NH = 0;
    $scope.survey.GA_NH_MUA_TT = 0;
    $scope.survey.GA_NH_GD = 0;
    $scope.survey.GA_NH_LT = 0;
    $scope.survey.GA_NH_LM = 0;
    //// ANOTHER
    $scope.survey.GA_ANOTHER = 0;
    $scope.survey.GA_ANOTHER_MUA_TT = 0;
    $scope.survey.GA_ANOTHER_GD = 0;
    $scope.survey.GA_ANOTHER_LT = 0;
    $scope.survey.GA_ANOTHER_LM = 0;

    //////// VIT
    ///// CON CO
    $scope.survey.VIT_CC = 0;
    $scope.survey.VIT_CC_MUA_TT = 0;
    $scope.survey.VIT_CC_VD = 0;
    $scope.survey.VIT_CC_VT = 0;
    //// DH
    $scope.survey.VIT_DH = 0;
    $scope.survey.VIT_DH_MUA_TT = 0;
    $scope.survey.VIT_DH_VD = 0;
    $scope.survey.VIT_DH_VT = 0;
    ///// CG
    $scope.survey.VIT_CG = 0;
    $scope.survey.VIT_CG_MUA_TT = 0;
    $scope.survey.VIT_CG_VD = 0;
    $scope.survey.VIT_CG_VT = 0;
    //// NH
    $scope.survey.VIT_NH = 0;
    $scope.survey.VIT_NH_MUA_TT = 0;
    $scope.survey.VIT_NH_VD = 0;
    $scope.survey.VIT_NH_VT = 0;
    //// GF
    $scope.survey.VIT_GF = 0;
    $scope.survey.VIT_GF_MUA_TT = 0
    $scope.survey.VIT_GF_VD = 0;
    $scope.survey.VIT_GF_VT = 0;
    //// LT
    $scope.survey.VIT_LT = 0;
    $scope.survey.VIT_LT_MUA_TT = 0;
    $scope.survey.VIT_LT_VD = 0;
    $scope.survey.VIT_LT_VT = 0;
    //// ANOTHER
    $scope.survey.VIT_ANOTHER = 0;
    $scope.survey.VIT_ANOTHER_MUA_TT = 0;
    $scope.survey.VIT_ANOTHER_VD = 0;
    $scope.survey.VIT_ANOTHER_VT = 0;

    //////// BO
    //// CON CO
    $scope.survey.BO_CC = 0;
    $scope.survey.BO_CC_MUA_TT = 0;
    $scope.survey.BO_CC_SL = 0;
    //// DH
    $scope.survey.BO_DH = 0;
    $scope.survey.BO_DH_MUA_TT = 0
    $scope.survey.BO_DH_SL = 0;
    //// CP
    $scope.survey.BO_CP = 0;
    $scope.survey.BO_CP_MUA_TT = 0;
    $scope.survey.BO_CP_SL = 0;
    //// UP
    $scope.survey.BO_UP = 0;
    $scope.survey.BO_UP_MUA_TT = 0;
    $scope.survey.BO_UP_SL = 0;
    //// ANOTHER
    $scope.survey.BO_ANOTHER = 0;
    $scope.survey.BO_ANOTHER_MUA_TT = 0;
    $scope.survey.BO_ANOTHER_SL = 0;

    ////// GIA CAM
    $scope.survey.GIA_CAM_GA = 0;
    $scope.survey.GIA_CAM_VIT = 0;
    $scope.survey.GIA_CAM_CUT = 0;

    $scope.daiLyCap2 = "";
    $scope.hoTraiDangBan = "";
    $scope.chanNuoiTT = false;
    $scope.nai = "";
    $scope.thit = "";
    $scope.noc = "";

    $scope.heo = "";
    $scope.ga = "";
    $scope.vit = "";
    $scope.bo = "";
    //End model;

    $scope.dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    $scope.months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    $scope.getUser = function () {
        $scope.user = AuthService.user();
        loadProvinces();
    }

    $scope.getUser();

    $rootScope.$on(AUTH_EVENTS.authenticated, function (event) {
        $scope.user = AuthService.user();
        loadProvinces();
    });
    // check change sate to set needUpdate = false
    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        //console.log("change state");
        //$scope.update = false;
        ////use to check update image
        //$scope.update1 = false;
        //$scope.update2 = false;
        //$scope.update3 = false;
        //$scope.update4 = false;
        //$scope.update5 = false;
    });
    $scope.update = false;
    //use to check update image
    $scope.update1 = false;
    $scope.update2 = false;
    $scope.update3 = false;
    $scope.update4 = false;
    $scope.update5 = false;

    $scope.setUpdate = function () {
        console.log("SET UPDATE");
        $scope.update = true;
    }
    $scope.setUpdate = function (id) {
        switch (id) {
            case 1:
                $scope.update1 = true;
                break;
            case 2: $scope.update2 = true; break;
            case 3: $scope.update3 = true; break;
            case 4: $scope.update4 = true; break;
            case 5: $scope.update5 = true; break;
        }
    }
    // ---------------------HEO--------------------------
    $scope.saveHeo = function (ac_pc) {
        console.log("HEO NEED UPDATE");
        console.log($scope.update);
        if ($scope.update) {
            console.log("func: saveHeo " + SurveyService.getSurveyID());
            $ionicLoading.show({ template: 'Đang lưu...' });

            var param = {
                token: AuthService.token(),
                surveyid: SurveyService.getSurveyID(),
                ac_kd: $scope.survey.HEO_ANCO,
                ac_mua: $scope.survey.HEO_ANCO_MUA_TT,
                ac_sl: $scope.survey.HEO_ANCO_SL,
                ac_con: $scope.survey.HEO_ANCO_HEO,
                ac_thit: $scope.survey.HEO_ANCO_THIT,
                ac_nai: $scope.survey.HEO_ANCO_NAI,

                cc_kd: $scope.survey.HEO_CONCO,
                cc_mua: $scope.survey.HEO_CONCO_MUA_TT,
                cc_sl: $scope.survey.HEO_CONCO_SL,
                cc_con: $scope.survey.HEO_CONCO_HEO,
                cc_thit: $scope.survey.HEO_CONCO_THIT,
                cc_nai: $scope.survey.HEO_CONCO_NAI,

                cp_kd: $scope.survey.HEO_CP,
                cp_mua: $scope.survey.HEO_CP_MUA_TT,
                cp_sl: $scope.survey.HEO_CP_SL,
                cp_con: $scope.survey.HEO_CP_HEO,
                cp_thit: $scope.survey.HEO_CP_THIT,
                cp_nai: $scope.survey.HEO_CP_NAI,

                cg_kd: $scope.survey.HEO_CG,
                cg_mua: $scope.survey.HEO_CG_MUA_TT,
                cg_sl: $scope.survey.HEO_CG_SL,
                cg_con: $scope.survey.HEO_CG_HEO,
                cg_thit: $scope.survey.HEO_CG_THIT,
                cg_nai: $scope.survey.HEO_CG_NAI,

                gf_kd: $scope.survey.HEO_GF,
                gf_mua: $scope.survey.HEO_GF_MUA_TT,
                gf_sl: $scope.survey.HEO_GF_SL,
                gf_con: $scope.survey.HEO_GF_HEO,
                gf_thit: $scope.survey.HEO_GF_THIT,
                gf_nai: $scope.survey.HEO_GF_NAI,

                o_kd: $scope.survey.HEO_ANOTHER,
                o_mua: $scope.survey.HEO_ANOTHER_MUA_TT,
                o_sl: $scope.survey.HEO_ANOTHER_SL,
                o_con: $scope.survey.HEO_ANOTHER_HEO,
                o_thit: $scope.survey.HEO_ANOTHER_THIT,
                o_nai: $scope.survey.HEO_ANOTHER_NAI
            }

            console.log(param);

            $http.post(serviceBase + '/survey/create/heo', param)
                .success(function (response) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                    console.log("AC_PC: " + ac_pc);
                    $scope.survey.HEO_ID = response.HeoId;
                    $scope.update = false;
                    if (ac_pc == 0)
                        $state.go('tabs.sales-giacam', {});
                    else
                        $state.go('tabs.sales-ga', {});

                }).error(function (err, status) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n' + err.toString(), noBackdrop: true, duration: 2000 });
                });
        }
        else {
            $scope.update = false;
            if (ac_pc == 0)
                $state.go('tabs.sales-giacam', {});
            else
                $state.go('tabs.sales-ga', {});
        }
    }
    // ---------------------GA--------------------------
    $scope.saveGa = function () {
        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });

            var param = {
                token: AuthService.token(),
                surveyid: SurveyService.getSurveyID(),

                cc_kd: $scope.survey.GA_CC,
                cc_mua: $scope.survey.GA_CC_MUA_TT,
                cc_gade: $scope.survey.GA_CC_GD,
                cc_lt: $scope.survey.GA_CC_LT,
                cc_lm: $scope.survey.GA_CC_LM,

                cp_kd: $scope.survey.GA_CP,
                cp_mua: $scope.survey.GA_CP_MUA_TT,
                cp_gade: $scope.survey.GA_CP_GD,
                cp_lt: $scope.survey.GA_CP_LT,
                cp_lm: $scope.survey.GA_CP_LM,

                gf_kd: $scope.survey.GA_GF,
                gf_mua: $scope.survey.GA_GF_MUA_TT,
                gf_gade: $scope.survey.GA_GF_GD,
                gf_lt: $scope.survey.GA_GF_LT,
                gf_lm: $scope.survey.GA_GF_LM,

                jf_kd: $scope.survey.GA_JF,
                jf_mua: $scope.survey.GA_JF_MUA_TT,
                jf_gade: $scope.survey.GA_JF_GD,
                jf_lt: $scope.survey.GA_JF_LT,
                jf_lm: $scope.survey.GA_JF_LM,

                db_kd: $scope.survey.GA_DB,
                db_mua: $scope.survey.GA_DB_MUA_TT,
                db_gade: $scope.survey.GA_DB_GD,
                db_lt: $scope.survey.GA_DB_LT,
                db_lm: $scope.survey.GA_DB_LM,

                nh_kd: $scope.survey.GA_NH,
                nh_mua: $scope.survey.GA_NH_MUA_TT,
                nh_gade: $scope.survey.GA_NH_GD,
                nh_lt: $scope.survey.GA_NH_LT,
                nh_lm: $scope.survey.GA_NH_LM,

                o_kd: $scope.survey.GA_ANOTHER,
                o_mua: $scope.survey.GA_ANOTHER_MUA_TT,
                o_gade: $scope.survey.GA_ANOTHER_GD,
                o_lt: $scope.survey.GA_ANOTHER_LT,
                o_lm: $scope.survey.GA_ANOTHER_LM
            }
            if ($scope.survey.GA_ID) {
                param.gaid = $scope.survey.GA_ID;
            }
            console.log(param);

            $http.post(serviceBase + '/survey/create/ga', param)
                .success(function (response) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                    $scope.survey.GA_ID = response.GaId;
                    $scope.update = false;

                    $state.go('tabs.sales-vit', {});

                }).error(function (err, status) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n' + err.toString(), noBackdrop: true, duration: 2000 });
                });
        }
        else {
            $scope.update = false;
            $state.go('tabs.sales-vit', {});
        }
    }
    // ---------------------VIT--------------------------
    $scope.saveVit = function () {
        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });

            var param = {
                token: AuthService.token(),
                surveyid: SurveyService.getSurveyID(),

                cg_kd: $scope.survey.VIT_CG,
                cg_mua: $scope.survey.VIT_CG_MUA_TT,
                cg_vd: $scope.survey.VIT_CG_VD,
                cg_vt: $scope.survey.VIT_CG_VT,

                cc_kd: $scope.survey.VIT_CC,
                cc_mua: $scope.survey.VIT_CC_MUA_TT,
                cc_vd: $scope.survey.VIT_CC_VD,
                cc_vt: $scope.survey.VIT_CC_VT,

                dh_kd: $scope.survey.VIT_DH,
                dh_mua: $scope.survey.VIT_DH_MUA_TT,
                dh_vd: $scope.survey.VIT_DH_VD,
                dh_vt: $scope.survey.VIT_DH_VT,

                nh_kd: $scope.survey.VIT_NH,
                nh_mua: $scope.survey.VIT_NH_MUA_TT,
                nh_vd: $scope.survey.VIT_NH_VD,
                nh_vt: $scope.survey.VIT_NH_VT,

                gf_kd: $scope.survey.VIT_GF,
                gf_mua: $scope.survey.VIT_GF_MUA_TT,
                gf_vd: $scope.survey.VIT_GF_VD,
                gf_vt: $scope.survey.VIT_GF_VT,

                lt_kd: $scope.survey.VIT_LT,
                lt_mua: $scope.survey.VIT_LT_MUA_TT,
                lt_vd: $scope.survey.VIT_LT_VD,
                lt_vt: $scope.survey.VIT_LT_VT,

                o_kd: $scope.survey.VIT_ANOTHER,
                o_mua: $scope.survey.VIT_ANOTHER_MUA_TT,
                o_vd: $scope.survey.VIT_ANOTHER_VD,
                o_vt: $scope.survey.VIT_ANOTHER_VT
            }
            if ($scope.survey.VIT_ID) {
                param.vitid = $scope.survey.VIT_ID;
            }
            console.log(param);

            $http.post(serviceBase + '/survey/create/vit', param)
                .success(function (response) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                    $scope.survey.VIT_ID = response.VitId;
                    $scope.update = false;

                    $state.go('tabs.sales-bo', {});

                }).error(function (err, status) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n' + err.toString(), noBackdrop: true, duration: 2000 });
                });
        }
        else {
            $scope.update = false;
            $state.go('tabs.sales-bo', {});
        }
    }
    // ---------------------BO--------------------------
    $scope.saveBo = function () {
        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });

            var param = {
                token: AuthService.token(),
                surveyid: SurveyService.getSurveyID(),

                cc_kd: $scope.BO_CC,
                cc_mua: $scope.BO_CC_MUA_TT,
                cc_sl: $scope.BO_CC_SL,

                dh_kd: $scope.BO_DH,
                dh_mua: $scope.BO_DH_MUA_TT,
                dh_sl: $scope.BO_DH_SL,

                cp_kd: $scope.BO_CP,
                cp_mua: $scope.BO_CP_MUA_TT,
                cp_sl: $scope.BO_CP_SL,

                up_kd: $scope.BO_UP,
                up_mua: $scope.BO_UP_MUA_TT,
                up_sl: $scope.BO_UP_SL,

                o_kd: $scope.BO_ANOTHER,
                o_mua: $scope.BO_ANOTHER_MUA_TT,
                o_sl: $scope.BO_ANOTHER_SL
            }
            if ($scope.survey.BO_ID) {
                param.boid = $scope.survey.BO_ID;
            }
            console.log(param);

            $http.post(serviceBase + '/survey/create/bo', param)
                .success(function (response) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                    $scope.BO_ID = response.BoId;
                    $scope.update = false;
                    $ionicHistory.clearCache();
                    $state.go('tabs.survey', {}, { reload: true });

                }).error(function (err, status) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n' + err.toString(), noBackdrop: true, duration: 2000 });
                });
        }
        else {
            $scope.update = false;
            $ionicHistory.clearCache();
            $state.go('tabs.survey', {}, { reload: true });
        }
    }
    // ---------------------GIA CAM--------------------------
    $scope.saveGiaCam = function () {
        if ($scope.update) {
            $ionicLoading.show({ template: 'Đang lưu...' });

            var param = {
                token: AuthService.token(),
                surveyid: SurveyService.getSurveyID(),

                ga: $scope.GIA_CAM_GA,
                vit: $scope.GIA_CAM_VIT,
                cut: $scope.GIA_CAM_CUT
            }
            if ($scope.survey.GIA_CAM_ID) {
                param.giacamid = $scope.survey.GIA_CAM_ID;
            }

            console.log(param);

            $http.post(serviceBase + '/survey/create/giacam', param)
                .success(function (response) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                    $scope.survey.GIA_CAM_ID = response.giaCamId;
                    $scope.update = false;
                    $ionicHistory.clearCache();
                    $state.go('tabs.survey', {}, { reload: true });

                }).error(function (err, status) {
                    $ionicLoading.hide();
                    $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n' + err.toString(), noBackdrop: true, duration: 2000 });
                });
        }
        else {
            $ionicHistory.clearCache();
            $state.go('tabs.survey', {}, { reload: true });
        }
    }
    // ---------------------Dealer------------------------
    function loadProvinces() {
        var param = {
            token: AuthService.token(),
            region: $scope.user.RegionId,
            ac_pc: $scope.user.AC_PC
        }

        console.log(param);

        $http.get(serviceBase + '/provinces', { params: param })
            .success(function (response) {
                $scope.provinces = [];
                $scope.provinces.push.apply($scope.provinces, response);

                if ($scope.provinces.length > 0) {
                    $scope.dealer.provinceId = $scope.provinces[0].ProvinceId;
                    $scope.loadDistrict();
                }
            }).error(function (err, status) {

            });
    }

    $scope.setDealer = function (index) {
        var dealer = $scope.dealers[index];
        $scope.update = true;

        if (!dealer) return;

        $scope.dealer.dealerId = dealer.DealerId;
        $scope.dealer.dealerCode = dealer.DealerCode;
        $scope.dealer.dealerName = dealer.DealerName;
        $scope.dealer.districtId = dealer.DistrictId;
        $scope.dealer.districtName = dealer.DistrictName;
        $scope.dealer.address = dealer.Address;

        console.log($scope.dealer);
    }

    $scope.clearDealerSelected = function () {
        //$scope.update = true;
        $scope.dealer.dealerId = undefined;
        $scope.dealer.dealerCode = undefined;
        $scope.dealer.dealerName = undefined;
        $scope.dealer.districtId = undefined;
        $scope.dealer.districtName = undefined;
        $scope.dealer.address = undefined;
    }

    $scope.checkInput = function () {
        if ($scope.survey.SL_DL2 != undefined && !isInt($scope.survey.SL_DL2))
            return false;
        if ($scope.survey.SL_HO != undefined && !isInt($scope.survey.SL_HO))
            return false;
        if ($scope.survey.NUOI_TT != undefined && !isInt($scope.survey.NUOI_TT))
            return false;
        if ($scope.survey.SL_NAI != undefined && !isInt($scope.survey.SL_NAI))
            return false;
        if ($scope.survey.SL_THIT != undefined && !isInt($scope.survey.SL_THIT))
            return false;
        if ($scope.survey.SL_NOC != undefined && !isInt($scope.survey.SL_NOC))
            return false;

        if ($scope.dealer.cmnd != undefined && !isInt($scope.dealer.cmnd))
            return false;

        if ($scope.dealer.phoneNumber != undefined && !isInt($scope.dealer.phoneNumber))
            return false;

        if ($scope.dealer.dealerName == undefined || $scope.dealer.dealerName == "")
            return false;
        if ($scope.dealer.fullName == undefined || $scope.dealer.fullName == "")
            return false;

        if ($scope.dealer.year != undefined && !isInt($scope.dealer.year))
            return false;

        return true;
    }

    function isInt(value) {
        var x;
        return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
    }

    $scope.saveDealer = function () {
        if ($scope.update) {
            if ($scope.checkInput() == true) {
                $ionicLoading.show({ template: 'Đang lưu...' });

                var param = {
                    token: AuthService.token(),

                    ac_pc: $scope.dealer.AC_PC,
                    dealername: $scope.dealer.dealerName,
                    dealercode: $scope.dealer.dealerCode,
                    fullname: $scope.dealer.fullName,
                    phonenumber: $scope.dealer.phoneNumber,
                    birthday: $scope.dealer.day + "/" + $scope.dealer.month + "/" + $scope.dealer.year,
                    districtid: $scope.dealer.districtId,
                    address: $scope.dealer.address,
                    cmnd: $scope.dealer.cmnd,
                    // cmndfont : $scope.dealer.cmndFront,
                    // cmndback : $scope.dealer.cmndBack,

                    long: $scope.survey.long,
                    lat: $scope.survey.lat,
                    // dealerphoto : $scope.survey.dealerPhoto,
                    // storephoto : $scope.survey.storePhoto,
                    // stockphoto : $scope.survey.stockPhoto,
                    sldl2: $scope.survey.SL_DL2,
                    slho: $scope.survey.SL_HO,
                    nuoitt: $scope.survey.NUOI_TT,
                    slnai: $scope.survey.SL_NAI,
                    slthit: $scope.survey.SL_THIT,
                    slnoc: $scope.survey.SL_NOC,
                    saleid: $scope.user.SaleRepId
                }

                if ($scope.dealer.dealerId) {
                    param.dealerid = $scope.dealer.dealerId;
                }

                console.log(param);

                $http.post(serviceBase + '/survey/create_or_update', param)
                    .success(function (response) {
                        console.log(response);
                        SurveyService.setSurveyID(response.SurveyId);
                        $scope.dealer.dealerId = response.DealerId;
                        $ionicLoading.hide();
                        $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
                        $scope.update = false;
                        //use to check update image
                        $scope.update1 = false;
                        $scope.update2 = false;
                        $scope.update3 = false;
                        $scope.update4 = false;
                        $scope.update5 = false;

                        if ($scope.update1)
                            uploadImage($scope.imgCMND1, 1);
                        if ($scope.update2)
                            uploadImage($scope.imgCMND2, 2);
                        if ($scope.update3)
                            uploadImage($scope.imgDealer, 3);
                        if ($scope.update4)
                            uploadImage($scope.imgShop, 4);
                        if ($scope.update5)
                            uploadImage($scope.imgWarehouse, 5);
                        $state.go('tabs.sales-heo');
                        //$window.location.href = "#/tab/sales-heo";

                    }).error(function (err, status) {
                        $ionicLoading.hide();
                        $ionicLoading.show({ template: 'Lỗi trong quá trình xử lý!\n' + err.toString(), noBackdrop: true, duration: 2000 });
                        console.log(err);
                    });
            }
            else {
                $ionicLoading.hide();
                $ionicLoading.show({ template: 'Vui lòng nhập đúng thông tin!\n', noBackdrop: true, duration: 2000 });
            }
        }
        else {
            $ionicLoading.hide();
            $ionicLoading.show({ template: 'Vui lòng nhập thông tin!\n', noBackdrop: true, duration: 2000 });
        }
    }
    // ---upload image
    function uploadImage(uri, typeId) {
        console.log(uri);
        var fileURL = uri;
        //var options = {
        //    fileKey: "uploadFile",
        //    fileName: fileURL.substr(fileURL.lastIndexOf('/') + 1),
        //    chunkedMode: false,
        //    mimeType: "image/jpeg"
        //};

        var params = {
            dealerid: $scope.dealer.dealerId,
            surveyid: SurveyService.getSurveyID(),
            type: typeId
        };

        $scope.showToast('start upload ' + uri, 'short', 'bottom');
        var win = function (r) {
            $scope.showToast("SUCCESS: " + JSON.stringify(r.response), 'long', 'bottom');
        }

        var fail = function (error) {
            $scope.showToast("ERROR: " + JSON.stringify(err), 'long', 'bottom');
        }

        var options = new FileUploadOptions();
        options.fileKey = "uploadFile";
        options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
        options.params = params;
        try {
            var ft = new FileTransfer();
            ft.onprogress = function (progressEvent) {
                $scope.showToast("PROGREss: " + JSON.stringify(err), 'long', 'bottom');
            };
            ft.upload(fileURL, encodeURI(serviceBase + '/images/upload'), win, fail, options);
        }
        catch (err) {
            $scope.showToast('exception ' + err, 'short', 'bottom');
        }
    }

    $scope.showToast = function (message, duration, location) {
        window.plugins.toast.show(message, duration, location,
            function (success) {
                console.log("The toast was shown");
            }, function (error) {
                console.log("The toast was not shown due to " + error);
            });
    }

    $scope.loadDealer = function () {
        $scope.dealer.dealerCode = undefined;
        $scope.dealerIndex = undefined;
        //$scope.update = true;

        var param = {
            token: AuthService.token(),
            province: $scope.dealer.provinceId,
            ac_pc: $scope.dealer.AC_PC,
            uac_pc: $scope.user.AC_PC
        }

        console.log(param);

        $http.get(serviceBase + '/dealers', { params: param })
            .success(function (response) {
                $scope.dealers = [];
                $scope.dealers.push.apply($scope.dealers, response);

                if ($scope.dealers.length > 0) {
                    $scope.setDealer(0);
                }
            }).error(function (err, status) {
            });
    }
    // ------------------- CLEAR DATA--------------------------------
    function clearData() {
        ////Dealer
        $scope.dealer = {};
        $scope.dealerIndex = -1;
        $scope.dealer.AC_PC = 2;
        $scope.dealer.day = 1;
        $scope.dealer.month = 1;
        $scope.dealerLabel = "";
        $scope.dealerName = "";
        $scope.dealerBirthday = "";
        $scope.dealerIdCard = "";
        $scope.dealerIdCardImgFront = "";
        $scope.dealerIdCardImgBehind = "";
        $scope.dealerPhone = "";
        $scope.dealerImg = "";
        $scope.shopImg = "";
        $scope.warehouseImg = "";

        //// Survey
        $scope.survey = {};
        $scope.survey.NUOI_TT = 0;
        /////// HEO
        $scope.survey.HEO_ANCO = 0;
        $scope.survey.HEO_ANCO_MUA_TT = 0;
        $scope.survey.HEO_CONCO = 0;
        $scope.survey.HEO_CONCO_MUA_TT = 0;
        $scope.survey.HEO_CP = 0;
        $scope.survey.HEO_CP_MUA_TT = 0;
        $scope.survey.HEO_CG = 0;
        $scope.survey.HEO_CG_MUA_TT = 0;
        $scope.survey.HEO_GF = 0;
        $scope.survey.HEO_GF_MUA_TT = 0;
        $scope.survey.HEO_ANOTHER = 0;
        $scope.survey.HEO_ANOTHER_MUA_TT = 0;
        //////// GA
        $scope.survey.GA_CC = 0;
        $scope.survey.GA_CC_MUA_TT = 0;
        $scope.survey.GA_CP = 0;
        $scope.survey.GA_CP_MUA_TT = 0;
        $scope.survey.GA_GF = 0;
        $scope.survey.GA_GF_MUA_TT = 0;
        $scope.survey.GA_JF = 0;
        $scope.survey.GA_JF_MUA_TT = 0;
        $scope.survey.GA_DB = 0;
        $scope.survey.GA_DB_MUA_TT = 0;
        $scope.survey.GA_NH = 0;
        $scope.survey.GA_NH_MUA_TT = 0;
        $scope.survey.GA_ANOTHER = 0;
        $scope.survey.GA_ANOTHER_MUA_TT = 0;
        //////// VIT
        $scope.survey.VIT_CC = 0;
        $scope.survey.VIT_CC_MUA_TT = 0;
        $scope.survey.VIT_DH = 0;
        $scope.survey.VIT_DH_MUA_TT = 0;
        $scope.survey.VIT_CG = 0;
        $scope.survey.VIT_CG_MUA_TT = 0;
        $scope.survey.VIT_NH = 0;
        $scope.survey.VIT_NH_MUA_TT = 0;
        $scope.survey.VIT_GF = 0;
        $scope.survey.VIT_GF_MUA_TT = 0;
        $scope.survey.VIT_LT = 0;
        $scope.survey.VIT_LT_MUA_TT = 0;
        $scope.survey.VIT_ANOTHER = 0;
        $scope.survey.VIT_ANOTHER_MUA_TT = 0;
        //////// BO
        $scope.survey.BO_CC = 0;
        $scope.survey.BO_CC_MUA_TT = 0;
        $scope.survey.BO_DH = 0;
        $scope.survey.BO_DH_MUA_TT = 0;
        $scope.survey.BO_CP = 0;
        $scope.survey.BO_CP_MUA_TT = 0;
        $scope.survey.BO_UP = 0;
        $scope.survey.BO_UP_MUA_TT = 0;
        $scope.survey.BO_ANOTHER = 0;
        $scope.survey.BO_ANOTHER_MUA_TT = 0;

        $scope.daiLyCap2 = "";
        $scope.hoTraiDangBan = "";
        $scope.chanNuoiTT = false;
        $scope.nai = "";
        $scope.thit = "";
        $scope.noc = "";

        $scope.heo = "";
        $scope.ga = "";
        $scope.vit = "";
        $scope.bo = "";
    }

    $scope.complete = function () {
        $ionicLoading.show({ template: 'Dữ liệu đã được lưu trên hệ thống!', noBackdrop: true, duration: 2000 });
        clearData();
        $state.go('tabs.survey', {}, { reload: true });
    };

    $scope.loadDistrict = function () {
        var param = {
            token: AuthService.token(),
            province: $scope.dealer.provinceId,
            uac_pc: $scope.user.AC_PC
        }

        console.log(param);

        $http.get(serviceBase + '/districts', { params: param })
            .success(function (response) {
                $scope.districts = [];
                $scope.districts.push.apply($scope.districts, response);

                if ($scope.districts.length > 0) {
                    $scope.dealer.districtId = $scope.districts[0].DistrictId;
                }
            }).error(function (err, status) {
            });
    }

    //$scope.dealers = Dealers.all();
    //$scope.remove = function (dealer) {
    //    Dealers.remove(dealer);
    //}
    // -----------------------upload picture--------------------------------------
    $scope.upload = function (id) {
        console.log(id);
        $scope.id = id;
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.FILE_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            //allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false
        };

        navigator.camera.getPicture(onSuccess, onFail, options);
    }

    function onSuccess(imageURI) {
        switch ($scope.id) {
            case 1:
                $scope.imgCMND1 = imageURI;
                $scope.setUpdate($scope.id);
                break;
            case 2:
                $scope.imgCMND2 = imageURI;
                $scope.setUpdate($scope.id);
                break;
            case 3:
                $scope.imgDealer = imageURI;
                $scope.setUpdate($scope.id);
                break;
            case 4:
                $scope.imgShop = imageURI;
                $scope.setUpdate($scope.id);
                break;
            case 5:
                $scope.imgWarehouse = imageURI;
                $scope.setUpdate($scope.id);
                break;
        }
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

    function id(element) {
        return document.getElementById(element);
    }

    //document.addEventListener("deviceready", onDeviceReady, false);
    // ---------------------------GPS---------------------------------
    $scope.watch = function () {
        //navigator.splashscreen.hide();
        console.log("run");
        geolocationApp = new geolocationApp();
        geolocationApp.run();
    }

    function geolocationApp() {
    }

    geolocationApp.prototype = {
        _watchID: null,

        run: function () {
            var that = this;
            that._handleWatch.apply(that, arguments);
            //document.getElementById("watchButton").addEventListener("click", function () {
            //    that._handleWatch.apply(that, arguments);
            //}, false);
            //document.getElementById("refreshButton").addEventListener("click", function () {
            //    that._handleRefresh.apply(that, arguments);
            //}, false);
        },

        _handleRefresh: function () {
            var options = {
                enableHighAccuracy: true
            },
                that = this;

            that._setResults("Waiting for geolocation information...");

            navigator.geolocation.getCurrentPosition(function () {
                that._onSuccess.apply(that, arguments);
            }, function () {
                that._onError.apply(that, arguments);
            }, options);
        },

        _handleWatch: function () {
            var that = this;
            // If watch is running, clear it now. Otherwise, start it.
            //button = document.getElementById("watchButton");

            if (that._watchID != null) {
                that._setResults();
                navigator.geolocation.clearWatch(that._watchID);
                that._watchID = null;

                //button.innerHTML = "Start Geolocation Watch";
            }
            else {
                that._setResults("Waiting for geolocation information...");
                // Update the watch every second.
                var options = {
                    frequency: 5000,
                    enableHighAccuracy: true
                };
                that._watchID = navigator.geolocation.watchPosition(function () {
                    that._onSuccess.apply(that, arguments);
                }, function () {
                    that._onError.apply(that, arguments);
                }, options);
                //button.innerHTML = "Clear Geolocation Watch";

            }
        },

        _onSuccess: function (position) {
            // Successfully retrieved the geolocation information. Display it all.
            this._setResults('(' + Math.round(position.coords.latitude * 1000) / 1000 + ', ' +
                             Math.round(position.coords.longitude * 1000) / 1000 + ')');
            //this._setResults('Latitude: ' + position.coords.latitude + ', ' +
            //                 'Longitude: ' + position.coords.longitude + ', ' +
            //                 //'Altitude: ' + position.coords.altitude + '<br />' +
            //                 //'Accuracy: ' + position.coords.accuracy + '<br />' +
            //                 //'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
            //                 //'Heading: ' + position.coords.heading + '<br />' +
            //                 //'Speed: ' + position.coords.speed + '<br />' +
            //                 'Timestamp: ' + new Date(position.timestamp).toLocaleTimeString().split(" ")[0] + '<br />');

            $scope.$apply(function () {
                $scope.survey.lat = position.coords.latitude;
                $scope.survey.long = position.coords.longitude;
            });
        },

        _onError: function (error) {
            this._setResults('code: ' + error.code + '<br/>' +
                             'message: ' + error.message + '<br/>');
        },

        _setResults: function (value) {
            if (!value) {
                document.getElementById("latlong").innerHTML = "error";
            }
            else {
                document.getElementById("latlong").innerHTML = value;
            }
        },
    }
});