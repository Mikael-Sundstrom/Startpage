import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-password',
    template: `
    <form class="content shadow">
        <input id="passwordOutput" #passwordOutput value="{{newPassword}}" />
        <input type="range" (change)="updatePasswordLength($event)" min="4" max="32" step="1" value="{{passwordLenght}}" />
        <input type="text" value="{{passwordLenght}}" />

        <div class="flex">
            <span *ngFor="let checkbox of checkboxes">
                <input type="checkbox" (change)="updateCheckboxValue($event)" id="{{checkbox.id}}" [checked]="checkbox.checked" />
                <label for="{{checkbox.id}}">{{checkbox.label}}</label>
            </span>
        </div>

        <button type="button" (click)="generatePassword()">{{buttonLabel}}</button>
    </form>
    `,
    styles: [`.content,form{background:#fff}form button:focus,form input[type=text]:focus,form input[type=range]:focus{outline:0}.content{position:relative;padding:8px;box-shadow:0 2px 2px silver}.shadow{padding-left:26px;box-shadow:0 2px 2px silver,inset 8px 0 0 #ffa90d,inset 14px 0 0 #404040}form input[type=text],form input[type=range]{margin:0;padding:0 6px;background-color:#fff;height:40px;-moz-appearance:none;-webkit-appearance:none;position:relative}form{display:block;width:calc(100% - 34px);font-family:monospace}form #passwordOutput{position:relative;background-color:#f5f5f5;height:64px;width:calc(100% - 34px);line-height:64px;margin-bottom:12px;padding:0 12px;font-size:34px;color:#ffa90d;text-align:center;text-shadow:1px 1px #999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}form #passwordOutput::-moz-selection,form #passwordOutput::selection{background:0 0}form input[type=text]{width:50px;border:0;font-size:26px;color:#ffa90d;text-shadow:1px 1px #404040;text-align:center}form input[type=range]{float:left;width:calc(100% - 74px)}form input[type=range]::-moz-focus-outer{border:0}form input[type=range]::-webkit-slider-runnable-track{height:8px;width:100%;cursor:pointer;background:#ffc45a;border-radius:2px;border:0;box-shadow:inset rgba(140,140,140,.5) -.1em .1em 0 0}form input[type=range]::-webkit-slider-thumb{-moz-appearance:none;-webkit-appearance:none;cursor:pointer;height:40px;width:22px;margin-top:-16px;border-radius:2px;background:#ffa90d;box-shadow:inset #ffa90d 0 .5em 0 0,inset #d98c00 0 .6em 0 0,inset #f39c00 0 .85em 0 0,inset #ffb227 0 .9em 0 0,inset #ffa90d 0 1.2em 0 0,inset #d98c00 0 1.3em 0 0,inset #f39c00 0 1.55em 0 0,inset #ffb227 0 1.6em 0 0,inset #ffa90d 0 1.9em 0 0,inset #d98c00 0 2em 0 0,inset #f39c00 0 2.25em 0 0,inset #ffb227 0 2.3em 0 0,rgba(0,0,0,.2) -.15em .15em 0 0;border-bottom:.15em solid #d98c00;border-left:.15em solid #d98c00;border-top:.15em solid #ffb227;border-right:.15em solid #ffb227}form input[type=range]:focus::-webkit-slider-runnable-track{background:#ffc45a}form input[type=range]::-moz-range-track{width:100%;height:8px;cursor:pointer;background:#ffc45a;border-radius:2px;border:0;box-shadow:inset rgba(140,140,140,.5) -.1em .1em 0 0}form input[type=range]::-moz-range-thumb{cursor:pointer;height:28px;border-radius:2px;background:#ffa90d;box-shadow:inset #ffa90d 0 .4em 0 0,inset #d98c00 0 .5em 0 0,inset #f39c00 0 .6em 0 0,inset #ffb227 0 .65em 0 0,inset #ffa90d 0 .8em 0 0,inset #d98c00 0 .9em 0 0,inset #f39c00 0 1em 0 0,inset #ffb227 0 1.05em 0 0,inset #ffa90d 0 1.2em 0 0,inset #d98c00 0 1.25em 0 0,inset #f39c00 0 1.35em 0 0,inset #ffb227 0 1.4em 0 0,rgba(0,0,0,.2) -.15em .15em 0 0;border-bottom:.15em solid #d98c00;border-left:.15em solid #d98c00;border-top:.15em solid #ffb227;border-right:.15em solid #ffb227}form input[type=range]::-ms-track{width:100%;height:8px;cursor:pointer;color:transparent;box-shadow:inset rgba(39,25,0,.5) -.1em .1em 0 0;border:0}form input[type=range]::-ms-fill-lower,form input[type=range]::-ms-fill-upper{box-shadow:inset #5a3a00 -.1em .1em 0 0;background:#ffc45a;border-radius:1px}form input[type=range]::-ms-tooltip{display:none}form input[type=range]::-ms-thumb{cursor:pointer;height:28px;width:14px;margin-top:-2px;border-radius:2px;background:#ffa90d;box-shadow:inset #ffa90d 0 .4em 0 0,inset #d98c00 0 .5em 0 0,inset #f39c00 0 .6em 0 0,inset #ffb227 0 .65em 0 0,inset #ffa90d 0 .8em 0 0,inset #d98c00 0 .9em 0 0,inset #f39c00 0 1em 0 0,inset #ffb227 0 1.05em 0 0,inset #ffa90d 0 1.2em 0 0,inset #d98c00 0 1.25em 0 0,inset #f39c00 0 1.35em 0 0,inset #ffb227 0 1.4em 0 0,rgba(0,0,0,.2) -.15em .15em 0 0;border-bottom:.15em solid #d98c00;border-left:.15em solid #d98c00;border-top:.15em solid #ffb227;border-right:.15em solid #ffb227}form div.flex{display:flex;justify-content:center;margin:10px 0 6px}form div.flex span input[type=checkbox]{-moz-appearance:none;-webkit-appearance:none;display:none;position:relative}form div.flex span input[type=checkbox]+label[for=lowercase]{border-radius:4px 0 0 4px}form div.flex span input[type=checkbox]+label[for=symbols]{border-radius:0 4px 4px 0}form div.flex span input[type=checkbox]+label{position:relative;padding:6px 16px;line-height:64px;text-align:center;color:#fff;text-shadow:1px 1px #404040;font-size:16px;font-weight:700;background:#ffa90d;box-shadow:0 6px #d98c00,1px 0 #ffcd73 inset}form div.flex span input[type=checkbox]:checked+label{top:4px;background-color:#ffa503;box-shadow:0 2px #d98c00,inset -1px 0 0 #ffcd73}form button{position:relative;background:#ffa90d;width:calc(100% - 18px);margin-bottom:16px;margin-left:6px;line-height:56px;border:0;border-radius:4px;font-size:22px;font-weight:700;color:#fff;text-shadow:1px 1px #404040;box-shadow:0 6px #d98c00}form button:active{top:4px;box-shadow:0 2px #d98c00}`]
})
export class PasswordComponent {
    // Alternative for checkboxes
    checkboxes = [
        {
            "id": "lowercase",
            "label": "a-z",
            "library": "abcdefghijklmnopqrstuvwxyz",
            "checked": true
        }, {
            "id": "uppercase",
            "label": "A-Z",
            "library": "ABCDEFGHIJKLMNOPWRSTUVWXYZ",
            "checked": true
        }, {
            "id": "numbers",
            "label": "0-9",
            "library": "0123456789",
            "checked": true
        }, {
            "id": "symbols",
            "label": "!-?",
            "library": "!@#$%^&*-_=+\\|:;',.\<>/?~",
            "checked": false
        }
    ]

    // Declarations
    dictionary: Array<String>;

    lowercase: Boolean = this.checkboxes[0].checked;
    uppercase: Boolean = this.checkboxes[1].checked;
    numbers: Boolean = this.checkboxes[2].checked;
    symbols: Boolean = this.checkboxes[3].checked;

    passwordLenght: number = 16;
    buttonLabel: string = "Generate";
    newPassword: string;

    // Password length
    public updatePasswordLength(event) {
        this.passwordLenght = event.target.value;
    }

    // Checkbox value
    private updateCheckboxValue(event) {
        if (event.target.id == "lowercase")
            this.lowercase = event.target.checked;

        if (event.target.id == "uppercase")
            this.uppercase = event.target.checked;

        if (event.target.id == "numbers")
            this.numbers = event.target.checked;

        if (event.target.id == "symbols")
            this.symbols = event.target.checked;
    }

    // Copy password to clipboard
    @ViewChild('passwordOutput') password: ElementRef;
    private copyPassword() {
        let input = document.createElement('input');

        input.style.position = 'fixed';
        input.style.left = '0';
        input.style.top = '0';
        input.style.opacity = '0';
        input.value = this.newPassword;

        document.body.appendChild(input);
        input.focus();
        input.select();

        document.execCommand('copy');
        document.body.removeChild(input);
    }

    // Generate password
    public generatePassword() {
        if (this.lowercase === false && this.uppercase === false && this.numbers === false && this.symbols === false) {
            return this.newPassword = "...";
        }

        // Create array from chosen checkboxes
        this.dictionary = [].concat(
            this.lowercase ? this.checkboxes[0].library.split("") : [],
            this.uppercase ? this.checkboxes[1].library.split("") : [],
            this.numbers ? this.checkboxes[2].library.split("") : [],
            this.symbols ? this.checkboxes[3].library.split("") : []
        );

        // Generate random password from array
        var newPassword = "";
        for (var i = 0; i < this.passwordLenght; i++) {
            newPassword += this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
        }
        this.newPassword = newPassword;

        // Call copy function
        this.copyPassword();

        // Change text on button when clicked
        this.buttonLabel = "Copied!";
        setTimeout(() => { this.buttonLabel = "Generate" }, 1500);
    }
}
