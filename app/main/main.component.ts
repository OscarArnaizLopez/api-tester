import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ScrollView } from "ui/scroll-view";
import { MainService } from "./main.service";
import { TextField } from "ui/text-field";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {


    public instructions: string = "";
    private payload: string = "hello";
    private textField: TextField;
    private scrollViewFrame: ScrollView;


    @ViewChild("inputTxt") inputTxt: ElementRef;
    @ViewChild("scrollView") _scrollView: ElementRef;

    constructor(private mainService: MainService) { }

    ngOnInit(): void {
        this.onTap();
        this.textField = this.inputTxt.nativeElement;
        this.scrollViewFrame = this._scrollView.nativeElement;

    }
    onTap() {
        if (this.payload !== "hello") {
            this.payload = this.textField.text;
            this.instructions = this.instructions  + this.payload + "\n\n -------------------------------------- \n\n";
            this.scrollViewFrame.scrollToVerticalOffset(this.scrollViewFrame.scrollableHeight, true)//this.scrollViewFrame.verticalOffset, false);
        }
        this.mainService.makeCall(this.payload).subscribe(
            (response: any) => {
                console.log("RESPONSE ", response._body.data);
                this.instructions = this.instructions + response._body.data + "\n\n -------------------------------------- \n\n";
                this.payload = "";
                this.textField.text = "";
                console.log("this.scrollViewFrame.scrollableHeight " + this.scrollViewFrame.scrollableHeight)
                this.scrollViewFrame.scrollToVerticalOffset(this.scrollViewFrame.scrollableHeight, true)//this.scrollViewFrame.verticalOffset, false);
            }
        )

    }
    reset() {
        this.instructions = "";
        this.payload = "hello";
        this.onTap();
    }
}
