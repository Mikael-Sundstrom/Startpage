import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    template: `
    <form method="get" action="http://www.google.com/search?q=" onsubmit="this.action+=this.q.value+=this.r.value;">
        <!--<button class="white" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="32px" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
        </button>-->
        <input type="text" name="q" size="25" maxlength="255" placeholder="Google search" onkeyup="if ( event.keyCode == 27 ) this.value=''" />
        <input type="hidden" name="r" value=" -angularjs" />
    </form>
  `,
    styles: [`
    form {
        margin-bottom:8px;
    }
    input {
        position:relative;
        width:calc(100% - 40px);
        border:0;
        border-radius:2px;
        padding:20px;
        color:#404040;
        font-size:26px;
        box-shadow:0px 1px 2px silver;
    }
  `]
})
export class SearchComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
