import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-localhost',
    template: `
    <div class="content">
        <ul>
            <a *ngFor="let localhost_link of localhost_links" href="{{localhost_link.url}}">
                <li>
                    <img src="http://www.google.com/s2/favicons?domain={{localhost_link.img}}" />
                    {{localhost_link.name}}
                </li>
            </a>
        </ul>
    </div>
  `,
    styles: [`
  ul {
      margin: 0;
      padding: 0;
  }
  li {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border-bottom: 1px solid #efefef;
  }
  li:hover {
      background-color: #f8f8f8;
  }
  a {
      display: block;
      line-height: 42px;
      font-size: 20px;
      text-decoration: none;
      color: #404040;
  }
  img {
      position: relative;
      left: 0;
      width: 16px;
      padding: 14px;
      vertical-align: top;
  }
  `]
})
export class LocalhostComponent implements OnInit {
    localhost_links = [
        {
            name: '0000 - Localhost',
            url: 'http://localhost',
            img: 'http://localhost'
        },
        {
            name: '3344 - Font Awesome',
            url: 'http://localhost:3344',
            img: 'http://fontawesome.com/'
        },
        {
            name: '4200 - Angular CLI',
            url: 'http://localhost:4200',
            img: 'http://angular.io/'
        },
        {
            name: '5000 - DotNet Core',
            url: 'http://localhost:5000',
            img: 'http://microsoft.com/'
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}
