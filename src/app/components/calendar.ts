import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface UserResponse {
    dagar: Array<string>;
    datum: string;
    veckodag: string;
    vecka: string;
    helgdag: string;
    namnsdag: Array<string>;
    flaggdag: string;
}

@Component({
    selector: 'app-calendar',
    template: `
    <div class="content shadow" *ngFor="let dag of data?.dagar">
        <h2>Vecka {{dag['vecka']}}</h2>
        <!--{{dag['veckodag']}}en den {{dag['datum'] | date:'d'}}:e {{dag['datum'] | date:'MMMM'}}-->
        <div fxLayout="row" fxLayoutAlign="space-evenly center">
            <div fxFlex style="text-align:center;" *ngFor="let namn of dag['namnsdag']">
                <span class="black-text" style="font-size:17px;font-weight:bold;border-bottom:2px #ffa90d solid;">&nbsp; {{namn}} &nbsp;</span>
            </div>
        </div>
        <br>

        <span *ngIf="dag['arbetsfri dag'] == 'Ja'; else arbetsfriDag;">
            <svg fill="#ffa90d" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        </span>
        <ng-template #arbetsfriDag>
            <svg fill="#404040" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </ng-template>
        <span class="label">Arbetsfri dag</span>
        <br>
        
        <span *ngIf="dag['röd dag'] == 'Ja'; else radDag;">
            <svg fill="#ffa90d" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        </span>
        <ng-template #radDag>
            <svg fill="#404040" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </ng-template>
        <span class="label">Röd dag</span>
        <br>
        
        <span *ngIf="dag['helgdag'] == null||dag['helgdag'] == ''; else helgdag;">
            <svg fill="#404040" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            <span class="label">Helgdag</span>
        </span>
        <ng-template #helgdag>
            <svg fill="#ffa90d" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            <span class="label">{{dag['helgdag']}}</span>
        </ng-template>
        <br>
        
        <span *ngIf="dag['flaggdag'] == null||dag['flaggdag'] == ''; else flaggdag;">
            <svg fill="#404040" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            <span class="label">Flaggdag</span>
        </span>
        <ng-template #flaggdag>
            <svg fill="#ffa90d" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            <span class="label">{{dag['flaggdag']}}</span>
        </ng-template>
    </div>
  `,
    styles: [`
    span.label {
        font-size:17px;
        vertical-align:top;
    }
  `]
})
export class CalendarComponent implements OnInit {
    public data: UserResponse;
    private url = 'http://api.dryg.net/dagar/v2.1';
    private today = new Date();
    private dd = this.today.getDate();
    private mm = this.today.getMonth() + 1; //January is 0!
    private yyyy = this.today.getFullYear();

    constructor(private http: HttpClient) { }

    ngOnInit() {
        if (this.dd < 10)
            this.dd = 0 + this.dd;
        if (this.mm < 10)
            this.mm = 0 + this.mm;

        this.http.get<UserResponse>(this.url + '/' + this.yyyy + '/' + this.mm + '/' + this.dd).subscribe(
            data => {
                console.log(data);
                this.data = data;
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
