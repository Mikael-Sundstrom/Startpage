import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-password',
    template: `
    <div class="content">
        password
    </div>
  `,
    styles: [`
    
  `]
})
export class PasswordComponent implements OnInit {
    /* 
    <!DOCTYPE html>
    <html>
    <body>
    
    <p>Click on the button to copy the text from the text field. Try to paste the text (e.g. ctrl+v) afterwards in a different window, to see the effect.</p>
    
    <input type="text" value="Hello World" id="myInput">
    <button onclick="myFunction()">Copy text</button>
    
    <p>The document.execCommand() method is not supported in IE9 and earlier.</p>
    
    <script>
    function myFunction() {
      var copyText = document.getElementById("myInput");
      copyText.select();
      document.execCommand("Copy");
      alert("Copied the text: " + copyText.value);
    }
    </script>
    
    </body>
    </html>
    */
    constructor() { }

    ngOnInit() {
    }

}