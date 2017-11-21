import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-password',
    template: `
    <div id="password-generator">
        <p id="password-output" value="test">...</p>
        <input type="range" oninput="document.getElementById('display-password-length').value=this.value" min="4" max="12" step="1" value="8" id="password-length" />
        <input type="text" value="8" id="display-password-length" />
    
        <div class="flex">
            <input type="checkbox" id="lowercase" checked="checked" />
            <label for="lowercase">a-z</label>
            <input type="checkbox" id="uppercase" checked="checked" />
            <label for="uppercase">A-Z</label>
            <input type="checkbox" id="numbers" checked="checked" />
            <label for="numbers">0-9</label>
            <input type="checkbox" id="symbols" />
            <label for="symbols">!-?</label>
        </div>
    
        <button id="generateButton" type="button" data-clipboard-target="#password-output" onclick="generatePassword()">Generate</button>
    </div>
    `,
    styles: [`
    div#password-generator{display:block;width:256px;height:256px;font-family:monospace;background:#fa8072}div#password-generator #password-output{position:relative;background-color:#fb8d81;max-width:232px;height:64px;line-height:64px;margin-bottom:12px;padding:0 12px;font-size:34px;color:#fee;text-align:center;text-shadow:1px 1px #f85441;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}div#password-generator #password-output::selection{background:transparent}div#password-generator input[type="text"]#display-password-length{position:relative;-moz-appearance:none;-webkit-appearance:none;height:40px;width:50px;margin:0;padding:0 6px;border:0;font-size:26px;color:#fee;text-shadow:1px 1px #f85441;background-color:#fa8072;text-align:center}div#password-generator input[type="text"]#display-password-length:focus{outline:none}div#password-generator input[type="range"]{-moz-appearance:none;-webkit-appearance:none;position:relative;float:left;height:40px;width:182px;margin:0;padding:0 6px;background-color:#fa8072}div#password-generator input[type="range"]:focus{outline:none}div#password-generator input[type="range"]::-moz-focus-outer{border:0}div#password-generator input[type="range"]::-webkit-slider-runnable-track{height:8px;width:100%;cursor:pointer;background:#fdc3bc;border-radius:2px;border:0;box-shadow:inset rgba(130,18,5,0.5) -.1em .1em 0 0}div#password-generator input[type="range"]::-webkit-slider-thumb{-moz-appearance:none;-webkit-appearance:none;cursor:pointer;height:40px;width:22px;margin-top:-16px;border-radius:2px;background:#fee;box-shadow:inset #fee 0 .5em 0 0,inset #fbb 0 .6em 0 0,inset #ffd5d5 0 .85em 0 0,inset #fff 0 .9em 0 0,inset #fee 0 1.2em 0 0,inset #fbb 0 1.3em 0 0,inset #ffd5d5 0 1.55em 0 0,inset #fff 0 1.6em 0 0,inset #fee 0 1.9em 0 0,inset #fbb 0 2em 0 0,inset #ffd5d5 0 2.25em 0 0,inset #fff 0 2.3em 0 0,rgba(0,0,0,0.2) -.15em .15em 0 0;border-bottom:.15em solid #fbb;border-left:.15em solid #fbb;border-top:.15em solid #fff;border-right:.15em solid #fff}div#password-generator input[type="range"]:focus::-webkit-slider-runnable-track{background:#fdc3bc}div#password-generator input[type="range"]::-moz-range-track{width:100%;height:8px;cursor:pointer;background:#fdc3bc;border-radius:2px;border:0;box-shadow:inset rgba(130,18,5,0.5) -.1em .1em 0 0}div#password-generator input[type="range"]::-moz-range-thumb{cursor:pointer;height:28px;border-radius:2px;background:#fee;box-shadow:inset #fee 0 .4em 0 0,inset #fbb 0 .5em 0 0,inset #ffd5d5 0 .6em 0 0,inset #fff 0 .65em 0 0,inset #fee 0 .8em 0 0,inset #fbb 0 .9em 0 0,inset #ffd5d5 0 1em 0 0,inset #fff 0 1.05em 0 0,inset #fee 0 1.2em 0 0,inset #fbb 0 1.25em 0 0,inset #ffd5d5 0 1.35em 0 0,inset #fff 0 1.4em 0 0,rgba(0,0,0,0.2) -.15em .15em 0 0;border-bottom:.15em solid #fbb;border-left:.15em solid #fbb;border-top:.15em solid #fff;border-right:.15em solid #fff}div#password-generator input[type="range"]::-ms-track{width:100%;height:8px;cursor:pointer;color:transparent;box-shadow:inset rgba(130,18,5,0.5) -.1em .1em 0 0;border:0}div#password-generator input[type="range"]::-ms-fill-lower,div#password-generator input[type="range"]::-ms-fill-upper{box-shadow:inset #b31806 -.1em .1em 0 0;background:#fdc3bc;border-radius:1px}div#password-generator input[type="range"]::-ms-tooltip{display:none}div#password-generator input[type="range"]::-ms-thumb{cursor:pointer;height:28px;width:14px;margin-top:-2px;border-radius:2px;background:#fee;box-shadow:inset #fee 0 .4em 0 0,inset #fbb 0 .5em 0 0,inset #ffd5d5 0 .6em 0 0,inset #fff 0 .65em 0 0,inset #fee 0 .8em 0 0,inset #fbb 0 .9em 0 0,inset #ffd5d5 0 1em 0 0,inset #fff 0 1.05em 0 0,inset #fee 0 1.2em 0 0,inset #fbb 0 1.25em 0 0,inset #ffd5d5 0 1.35em 0 0,inset #fff 0 1.4em 0 0,rgba(0,0,0,0.2) -.15em .15em 0 0;border-bottom:.15em solid #fbb;border-left:.15em solid #fbb;border-top:.15em solid #fff;border-right:.15em solid #fff}div#password-generator div.flex{display:flex;justify-content:center;margin:10px 0 6px}div#password-generator div.flex input[type="checkbox"]{-moz-appearance:none;-webkit-appearance:none;display:none;position:relative}div#password-generator div.flex input[type="checkbox"] + label[for="lowercase"]{border-radius:4px 0 0 4px}div#password-generator div.flex input[type="checkbox"] + label[for="symbols"]{border-radius:0 4px 4px 0}div#password-generator div.flex input[type="checkbox"] + label{position:relative;width:61px;line-height:36px;margin:6px 0 12px;text-align:center;color:#fa8072;text-shadow:1px 1px #fff;font-size:16px;font-weight:700;background:#fee;box-shadow:0 6px #ffbbbb,1px 0 #fdd9d5 inset}div#password-generator div.flex input[type="checkbox"]:checked + label{top:4px;background-color:#ffe4e4;box-shadow:0 2px #ffbbbb,inset -1px 0 0 #fdd9d5}div#password-generator button{position:relative;background:#fee;width:244px;margin-bottom:16px;margin-left:6px;line-height:56px;border:0;border-radius:4px;font-size:22px;font-weight:700;color:#fa8072;text-shadow:1px 1px #fff;box-shadow:0 6px #fbb}div#password-generator button:active{top:4px;box-shadow:0 2px #fbb}div#password-generator button:focus{outline:none}
  `]
})
export class PasswordComponent implements OnInit {
    /* 
    <input type="text" value="Hello World" id="myInput">
    <button onclick="myFunction()">Copy text</button>
    <script>
    function myFunction() {
      var copyText = document.getElementById("myInput");
      copyText.select();
      document.execCommand("Copy");
      alert("Copied the text: " + copyText.value);
    }
    </script>
    */
    public items: Array<string>;

    constructor() {
        this.items = ["item1", "item2", "item3"]
    }
    public open(event, item) {
        alert('Open ' + item);
    }


    public generatePassword(event) {
        var alphaLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
        var alphaUppercase = "ABCDEFGHIJKLMNOPWRSTUVWXYZ".split("");
        var alphaNumbers = "0123456789".split("");
        var alphaSymbols = "!@#$%^&*-_=+\|:;',.>/?~".split("");
        var passwordOutput = document.getElementById("password-output");

        var dictionary = [].concat(
            /* document.getElementById('lowercase').checked ? alphaLowercase : [],
            document.getElementById('uppercase').checked ? alphaUppercase : [],
            document.getElementById('numbers').checked ? alphaNumbers : [],
            document.getElementById('symbols').checked ? alphaSymbols : [] */
        );

        /* var length = parseInt(document.getElementById("display-password-length").value); */
        var newPassword = "";

        // if none checkbox is selected
        if (dictionary.length === 0) {
            passwordOutput.innerHTML = "...";
            return;
        }

        // generate random password
        for (var i = 0; i < length; i++) {
            newPassword += dictionary[Math.floor(Math.random() * dictionary.length)];
        }
        passwordOutput.innerHTML = newPassword;
    }


    ngOnInit() {

    }

}
