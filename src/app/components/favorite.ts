import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-favorite',
    template: `
    <div class="content">
        <ul>
            <a *ngFor="let favorite_link of favorite_links" href="{{favorite_link.url}}">
                <li>
                    <img src="http://www.google.com/s2/favicons?domain={{favorite_link.url}}" />
                    {{favorite_link.name}}
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
    }
    a {
        border-bottom: 1px solid #efefef;
    }
    a:last-child {
        border-bottom: none;
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
export class FavoriteComponent implements OnInit {
    favorite_links = [
        {
            name: 'Dagens Nyheter',
            url: 'https://dn.se/'
        },
        {
            name: 'Swedbank',
            url: 'https://swedbank.se/'
        },
        {
            name: 'Fotbollskanalen',
            url: 'http://fotbollskanalen.se/?tab=min-feed'
        },
        {
            name: 'TV.NU',
            url: 'http://tv.nu/'
        },
        {
            name: 'Psykologi Ifokus',
            url: 'http://psykologi.ifokus.se/'
        },
        {
            name: 'Google translate',
            url: 'https://translate.google.com/'
        },
        {
            name: 'Codepen',
            url: 'https://codepen.io/dashboard/'
        },
        {
            name: 'StackOverflow',
            url: 'https://stackoverflow.com/users/6277897/m-sundstrom'
        },
        {
            name: 'Stackblitz',
            url: 'https://stackblitz.com/@Mikael-Sundstrom'
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}
