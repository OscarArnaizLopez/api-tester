"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var main_config_1 = require("../config/main.config");
var http_1 = require("@angular/http");
var MainService = (function () {
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.makeCall = function (payload) {
        return this.http.post(main_config_1.MainConfig.apiUrl, { "reply": payload });
    };
    return MainService;
}());
MainService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MainService);
exports.MainService = MainService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHFEQUFtRDtBQUNuRCxzQ0FBOEM7QUFJOUMsSUFBYSxXQUFXO0lBR3BCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFFLENBQUM7SUFFakMsOEJBQVEsR0FBUixVQUFTLE9BQU87UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUVqRSxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FJaUIsV0FBSTtHQUhyQixXQUFXLENBVXZCO0FBVlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1haW5Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnL21haW4uY29uZmlnXCI7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFpblNlcnZpY2Uge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApe31cbiAgICBcbiAgICBtYWtlQ2FsbChwYXlsb2FkKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KE1haW5Db25maWcuYXBpVXJsLCB7XCJyZXBseVwiOiBwYXlsb2FkfSk7XG4gICAgXG4gICAgfVxuXG59XG4iXX0=