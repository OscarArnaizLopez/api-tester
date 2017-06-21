"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var main_service_1 = require("./main.service");
var MainComponent = (function () {
    function MainComponent(mainService) {
        this.mainService = mainService;
        this.items = [];
        this.allGood = false;
        this.payload = "hello";
    }
    MainComponent.prototype.ngOnInit = function () {
        this.onTap();
        this.textField = this.inputTxt.nativeElement;
    };
    MainComponent.prototype.onTap = function () {
        var _this = this;
        if (this.payload !== "hello") {
            this.payload = this.textField.text;
        }
        this.mainService.makeCall(this.payload).subscribe(function (response) {
            //console.log("RESPONSE ", response._body.data);
            _this.instructions = response._body.data;
            _this.payload = "";
            _this.textField.text = "";
        });
    };
    MainComponent.prototype.reset = function () {
        this.payload = "hello";
        this.onTap();
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild("inputTxt"),
    __metadata("design:type", core_1.ElementRef)
], MainComponent.prototype, "inputTxt", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./main.component.html",
        styleUrls: ["./main.component.css"]
    }),
    __metadata("design:paramtypes", [main_service_1.MainService])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSwrQ0FBNkM7QUFTN0MsSUFBYSxhQUFhO0lBWXRCLHVCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVJyQyxVQUFLLEdBQWUsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDeEIsWUFBTyxHQUFXLE9BQU8sQ0FBQztJQU1jLENBQUM7SUFFakQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFFakQsQ0FBQztJQUNELDZCQUFLLEdBQUw7UUFBQSxpQkFhQztRQVpHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUM3QyxVQUFDLFFBQWE7WUFDVixnREFBZ0Q7WUFDaEQsS0FBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUNKLENBQUE7SUFFTCxDQUFDO0lBQ0QsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBM0IwQjtJQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQzs4QkFBVyxpQkFBVTsrQ0FBQztBQVZuQyxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUN0QyxDQUFDO3FDQWFtQywwQkFBVztHQVpuQyxhQUFhLENBcUN6QjtBQXJDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBNYWluU2VydmljZSB9IGZyb20gXCIuL21haW4uc2VydmljZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWFpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9tYWluLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAgIHB1YmxpYyBpbnN0cnVjdGlvbnM6IHN0cmluZztcbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBwdWJsaWMgYWxsR29vZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgcGF5bG9hZDogc3RyaW5nID0gXCJoZWxsb1wiO1xuICAgIHByaXZhdGUgdGV4dEZpZWxkOiBUZXh0RmllbGQ7XG5cblxuICAgIEBWaWV3Q2hpbGQoXCJpbnB1dFR4dFwiKSBpbnB1dFR4dDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFpblNlcnZpY2U6IE1haW5TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVGFwKCk7XG4gICAgICAgIHRoaXMudGV4dEZpZWxkID0gdGhpcy5pbnB1dFR4dC5uYXRpdmVFbGVtZW50O1xuXG4gICAgfVxuICAgIG9uVGFwKCkge1xuICAgICAgICBpZiAodGhpcy5wYXlsb2FkICE9PSBcImhlbGxvXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGF5bG9hZCA9IHRoaXMudGV4dEZpZWxkLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYWluU2VydmljZS5tYWtlQ2FsbCh0aGlzLnBheWxvYWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJFU1BPTlNFIFwiLCByZXNwb25zZS5fYm9keS5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RydWN0aW9ucyA9IHJlc3BvbnNlLl9ib2R5LmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXlsb2FkID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRGaWVsZC50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnBheWxvYWQgPSBcImhlbGxvXCI7XG4gICAgICAgIHRoaXMub25UYXAoKTtcbiAgICB9XG59XG4iXX0=