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
        return this.http.post(main_config_1.MainConfig.apiUrl, { "reply": payload, "key": main_config_1.MainConfig.key });
    };
    return MainService;
}());
MainService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MainService);
exports.MainService = MainService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHFEQUFtRDtBQUNuRCxzQ0FBOEM7QUFJOUMsSUFBYSxXQUFXO0lBR3BCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFFLENBQUM7SUFFakMsOEJBQVEsR0FBUixVQUFTLE9BQU87UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSx3QkFBVSxDQUFDLEdBQUcsRUFBRSxDQUFFLENBQUM7SUFFMUYsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBSWlCLFdBQUk7R0FIckIsV0FBVyxDQVV2QjtBQVZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYWluQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZy9tYWluLmNvbmZpZ1wiO1xuaW1wb3J0IHsgSGVhZGVycywgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1haW5TZXJ2aWNlIHtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXt9XG4gICAgXG4gICAgbWFrZUNhbGwocGF5bG9hZCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChNYWluQ29uZmlnLmFwaVVybCwge1wicmVwbHlcIjogcGF5bG9hZCwgXCJrZXlcIjogTWFpbkNvbmZpZy5rZXkgfSApO1xuICAgIFxuICAgIH1cblxufVxuIl19