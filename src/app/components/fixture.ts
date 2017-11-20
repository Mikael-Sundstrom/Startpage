import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

interface MatchFixtures {
    fixtures: Array<string>;
    date: string;
    matchday: number;
    homeTeamName: string;
    awayTeamName: string;
}

@Component({
    selector: 'app-fixture',
    template: `
    <div class="content" style="max-height:240px;overflow:auto;">
      <table width="100%">
        <caption style="font-size:22px;">
          Spelschema
        </caption>
        <tbody *ngFor="let match of data?.fixtures">
          <tr>
            <td style="padding-top:8px;font-size:16px;text-align:center;" colspan="3">Omgång {{match['matchday']}}</td>
          </tr>
          <tr>
            <td style="text-align:right;width:45%;">{{match['homeTeamName']}}</td>
            <td style="text-align:center;width:32px;font-size:16px;" [ngClass]="{'green-text':match['result']['goalsHomeTeam']>match['result']['goalsAwayTeam'],'red-text':match['result']['goalsHomeTeam']<match['result']['goalsAwayTeam'],'yellow-text':match['result']['goalsHomeTeam']==match['result']['goalsAwayTeam']}">{{match['result']['goalsHomeTeam']}}</td>
            <td>{{match['date']|date:'dd MMMM'}}</td>
          </tr>
          <tr>
            <td style="text-align:right;width:45%;">{{match['awayTeamName']}}</td>
            <td style="text-align:center;width:32px;font-size:16px;" [ngClass]="{'red-text':match['result']['goalsHomeTeam']>match['result']['goalsAwayTeam'],'green-text':match['result']['goalsHomeTeam']<match['result']['goalsAwayTeam'],'yellow-text':match['result']['goalsHomeTeam']==match['result']['goalsAwayTeam']}">{{match['result']['goalsAwayTeam']}}</td>
            <td>{{match['date']|date:'HH.mm'}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
    styles: [`
    table{width:100%;}
    tbody tr td{font-size:10px}
  `]
})


export class FixtureComponent implements OnInit {
    public data: MatchFixtures;
    private url = 'https://api.football-data.org/v1/teams/66/fixtures';
    private days = '?timeFrame=n10';// return n7 or p7
    private season = '?season=';// return integer year i.e. 2017
    // private apiKey = '21703283a7884751ab3600e48307da78';

    private today = new Date();
    private dd = this.today.getDate();
    private mm = this.today.getMonth() + 1; //January is 0!
    private yyyy = this.today.getFullYear();

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        if (this.dd < 10)
            this.dd = 0 + this.dd;
        if (this.mm < 10)
            this.mm = 0 + this.mm;

        this.http.get<MatchFixtures>(this.url + this.days).subscribe(
            data => {
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

        /* //post
        const req = this.http.post(this.url, {
          title: 'foo',
          body: 'bar',
          userId: 1
        })
          .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log('Error occured');
          }
          ) */
    }
}
/* 
Hi Mikael Sundström, 
thanks for registering for an API authentication token. 
Please modify your client to use a HTTP header named "X-Auth-Token" 
with the underneath personal token as value. 

Your API token: 21703283a7884751ab3600e48307da78 

Please verify your mail address by clicking here and tell me if you 
want me to keep you posted about updates and/or changes to the API.

Check the code samples, have a look at the third party libraries to 
see how to integrate the API in your project or go straight to the exhaustive documentation.

If you face bugs, problems or any question concerning the API in general, feel free to ask! 

Best,
daniel  
*/