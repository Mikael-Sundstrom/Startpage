import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserInfo {
    city: string;
    country: string;
    hostname: string;
    ip: string;
    loc: string;
    org: string;
    postal: string;
    region: string;
}

@Component({
    selector: 'app-information',
    template: `
    <div class="content shadow">
        <h2>{{data?.ip}}</h2>
        <ul>
            <li><img src="./../../assets/{{data?.country}}.svg" height="12px" /> {{data?.country}}, {{data?.region}}</li>
            <li>{{data?.postal}}, {{data?.city}}</li>
            <li>{{data?.loc}}</li>
            <li>{{data?.org}}</li>
            <li>{{data?.hostname}}</li>
        </ul>
    </div>
    `,
    styles: [`
    h2 {
        padding: 16px 0 0 0;
    }

    ul {
        list-style-type: none;
        padding-left: 4px;
    }

    li {
        word-break: break-all;
    }

    li:before {
        content: '';
        width: 0; 
        height: 0;
        left: 14px;
        position: absolute;
        border-top: 11px solid transparent;
        border-bottom: 11px solid transparent;
        border-left: 5px solid #404040;
    }
    `]
})
export class InformationComponent implements OnInit {
    public data: UserInfo;
    private url = 'https://ipinfo.io/json';
    private apiKey = '?token=7e772431b3eb5e';

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<UserInfo>(this.url + this.apiKey).subscribe(
            data => {
                this.data = data;
                console.log(data);
            },
            (errorHandler: HttpErrorResponse) => {
                if (errorHandler.error instanceof Error) {
                    console.log('Client-side error occured');
                } else {
                    console.log('Server-side error occured');
                }
            }
        );
    }
}
