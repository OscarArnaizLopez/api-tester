"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var main_service_1 = require("./main.service");
var MainComponent = (function () {
    function MainComponent(mainService) {
        this.mainService = mainService;
        this.instructions = "";
        this.payload = "hello";
    }
    MainComponent.prototype.ngOnInit = function () {
        this.onTap();
        this.textField = this.inputTxt.nativeElement;
        this.scrollViewFrame = this._scrollView.nativeElement;
    };
    MainComponent.prototype.onTap = function () {
        var _this = this;
        if (this.payload !== "hello") {
            this.payload = this.textField.text;
            this.instructions = this.instructions + this.payload + "\n\n -------------------------------------- \n\n";
            this.scrollViewFrame.scrollToVerticalOffset(this.scrollViewFrame.scrollableHeight, true); //this.scrollViewFrame.verticalOffset, false);
        }
        this.mainService.makeCall(this.payload).subscribe(function (response) {
            console.log("RESPONSE ", response._body.data);
            _this.instructions = _this.instructions + response._body.data + "\n\n -------------------------------------- \n\n";
            _this.payload = "";
            _this.textField.text = "";
            console.log("this.scrollViewFrame.scrollableHeight " + _this.scrollViewFrame.scrollableHeight);
            _this.scrollViewFrame.scrollToVerticalOffset(_this.scrollViewFrame.scrollableHeight, true); //this.scrollViewFrame.verticalOffset, false);
        });
    };
    MainComponent.prototype.reset = function () {
        this.instructions = "";
        this.payload = "hello";
        this.onTap();
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild("inputTxt"),
    __metadata("design:type", core_1.ElementRef)
], MainComponent.prototype, "inputTxt", void 0);
__decorate([
    core_1.ViewChild("scrollView"),
    __metadata("design:type", core_1.ElementRef)
], MainComponent.prototype, "_scrollView", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSwrQ0FBNkM7QUFTN0MsSUFBYSxhQUFhO0lBWXRCLHVCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVRyQyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQVcsT0FBTyxDQUFDO0lBUWMsQ0FBQztJQUVqRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBRTFELENBQUM7SUFDRCw2QkFBSyxHQUFMO1FBQUEsaUJBaUJDO1FBaEJHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsT0FBTyxHQUFHLGtEQUFrRCxDQUFDO1lBQzNHLElBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFBLDhDQUE4QztRQUMxSSxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDN0MsVUFBQyxRQUFhO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsa0RBQWtELENBQUM7WUFDakgsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQzdGLEtBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFBLDhDQUE4QztRQUMxSSxDQUFDLENBQ0osQ0FBQTtJQUVMLENBQUM7SUFDRCw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUFsQzBCO0lBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDOzhCQUFXLGlCQUFVOytDQUFDO0FBQ25CO0lBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzhCQUFjLGlCQUFVO2tEQUFDO0FBVnhDLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3RDLENBQUM7cUNBYW1DLDBCQUFXO0dBWm5DLGFBQWEsQ0EyQ3pCO0FBM0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTY3JvbGxWaWV3IH0gZnJvbSBcInVpL3Njcm9sbC12aWV3XCI7XG5pbXBvcnQgeyBNYWluU2VydmljZSB9IGZyb20gXCIuL21haW4uc2VydmljZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWFpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9tYWluLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICAgIHB1YmxpYyBpbnN0cnVjdGlvbnM6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwYXlsb2FkOiBzdHJpbmcgPSBcImhlbGxvXCI7XG4gICAgcHJpdmF0ZSB0ZXh0RmllbGQ6IFRleHRGaWVsZDtcbiAgICBwcml2YXRlIHNjcm9sbFZpZXdGcmFtZTogU2Nyb2xsVmlldztcblxuXG4gICAgQFZpZXdDaGlsZChcImlucHV0VHh0XCIpIGlucHV0VHh0OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJzY3JvbGxWaWV3XCIpIF9zY3JvbGxWaWV3OiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtYWluU2VydmljZTogTWFpblNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25UYXAoKTtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQgPSB0aGlzLmlucHV0VHh0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlld0ZyYW1lID0gdGhpcy5fc2Nyb2xsVmlldy5uYXRpdmVFbGVtZW50O1xuXG4gICAgfVxuICAgIG9uVGFwKCkge1xuICAgICAgICBpZiAodGhpcy5wYXlsb2FkICE9PSBcImhlbGxvXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGF5bG9hZCA9IHRoaXMudGV4dEZpZWxkLnRleHQ7XG4gICAgICAgICAgICB0aGlzLmluc3RydWN0aW9ucyA9IHRoaXMuaW5zdHJ1Y3Rpb25zICArIHRoaXMucGF5bG9hZCArIFwiXFxuXFxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxcblxcblwiO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3RnJhbWUuc2Nyb2xsVG9WZXJ0aWNhbE9mZnNldCh0aGlzLnNjcm9sbFZpZXdGcmFtZS5zY3JvbGxhYmxlSGVpZ2h0LCB0cnVlKS8vdGhpcy5zY3JvbGxWaWV3RnJhbWUudmVydGljYWxPZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1haW5TZXJ2aWNlLm1ha2VDYWxsKHRoaXMucGF5bG9hZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU1BPTlNFIFwiLCByZXNwb25zZS5fYm9keS5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RydWN0aW9ucyA9IHRoaXMuaW5zdHJ1Y3Rpb25zICsgcmVzcG9uc2UuX2JvZHkuZGF0YSArIFwiXFxuXFxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxcblxcblwiO1xuICAgICAgICAgICAgICAgIHRoaXMucGF5bG9hZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQudGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnNjcm9sbFZpZXdGcmFtZS5zY3JvbGxhYmxlSGVpZ2h0IFwiICsgdGhpcy5zY3JvbGxWaWV3RnJhbWUuc2Nyb2xsYWJsZUhlaWdodClcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXdGcmFtZS5zY3JvbGxUb1ZlcnRpY2FsT2Zmc2V0KHRoaXMuc2Nyb2xsVmlld0ZyYW1lLnNjcm9sbGFibGVIZWlnaHQsIHRydWUpLy90aGlzLnNjcm9sbFZpZXdGcmFtZS52ZXJ0aWNhbE9mZnNldCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gXCJcIjtcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gXCJoZWxsb1wiO1xuICAgICAgICB0aGlzLm9uVGFwKCk7XG4gICAgfVxufVxuIl19