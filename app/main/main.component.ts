import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { MainService } from "./main.service";
import { TextField } from "ui/text-field";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {


    public instructions: string;
    public items: Array<any> = [];
    public allGood: boolean = false;
    private payload: string = "hello";
    private textField: TextField;


    @ViewChild("inputTxt") inputTxt: ElementRef;

    constructor(private mainService: MainService) { }

    ngOnInit(): void {
        this.onTap();
        this.textField = this.inputTxt.nativeElement;

    }
    onTap() {
        if (this.payload !== "hello") {
            this.payload = this.textField.text;
        }
        this.mainService.makeCall(this.payload).subscribe(
            (response: any) => {
                //console.log("RESPONSE ", response._body.data);
                this.instructions = response._body.data;
                this.payload = "";
                this.textField.text = "";
            }
        )

    }
    reset() {
        this.payload = "hello";
        this.onTap();
    }
}
