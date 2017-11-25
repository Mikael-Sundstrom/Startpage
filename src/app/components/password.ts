import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-password',
    template: `
    <div id="password-generator" class="content shadow">
        <input id="passwordOutput" #passwordOutput value="{{newPassword}}" />
        <input type="range" (change)="updatePasswordLength($event)" min="4" max="64" step="1" value="8" id="password-length" />
        <input type="text" value="{{passwordLenght}}" />

        <div class="flex">
            <label for="lowercase">
                <input type="checkbox" id="lowercase" checked="checked" />
                a-z
            </label>
            <label for="uppercase">
                <input type="checkbox" id="uppercase" checked="checked" />
                A-Z
            </label>
            <label for="numbers">
                <input type="checkbox" id="numbers" checked="checked" />
                0-9
            </label>
            <label for="symbols">
                <input type="checkbox" id="symbols" />
                !-?
            </label>
        </div>

        <button type="button" (click)="generatePassword()">{{buttonLabel}}</button>
    </div>
    `,
    styles: [``]
})
export class PasswordComponent {
    @ViewChild('passwordOutput') password: ElementRef;

    alphaLowercase: Array<String>;
    alphaUppercase: Array<String>;
    alphaNumbers: Array<String>;
    alphaSymbols: Array<String>;
    dictionary: Array<String>;

    lowercase: Boolean = false;
    uppercase: Boolean = false;
    numbers: Boolean = false;
    symbols: Boolean = true;

    passwordLenght: Number = 8;
    newPassword: String;
    buttonLabel: String = "Generate";

    updatePasswordLength(event) {
        this.passwordLenght = event.target.value;
    }

    public generatePassword() {
        this.alphaLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
        this.alphaUppercase = "ABCDEFGHIJKLMNOPWRSTUVWXYZ".split("");
        this.alphaNumbers = "0123456789".split("");
        this.alphaSymbols = "!@#$%^&*-_=+\\|:;',.\<>/?~".split("");

        this.dictionary = [].concat(
            this.lowercase ? this.alphaLowercase : [],
            this.uppercase ? this.alphaUppercase : [],
            this.numbers ? this.alphaNumbers : [],
            this.symbols ? this.alphaSymbols : []
        );

        // generate random password
        var newPassword = "";
        for (var i = 0; i < this.passwordLenght; i++) {
            newPassword += this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
        this.newPassword = newPassword;

        /* Change text on button when clicked */
        this.buttonLabel = "Copied!";
        setTimeout(() => { this.buttonLabel = "Generate" }, 1500);

        /* Select and copy */
        const inputElem = <HTMLInputElement>this.password.nativeElement;
        inputElem.select();
        document.execCommand("copy");
    }
}
