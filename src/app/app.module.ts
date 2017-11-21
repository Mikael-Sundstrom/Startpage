import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar';
import { FavoriteComponent } from './components/favorite';
import { FixtureComponent } from './components/fixture';
import { InformationComponent } from './components/information';
import { LocalhostComponent } from './components/localhost';
import { PasswordComponent } from './components/password';
import { SearchComponent } from './components/search';
import { SoccerAuthInterceptor } from './global/soccer.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        FavoriteComponent,
        FixtureComponent,
        InformationComponent,
        LocalhostComponent,
        PasswordComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FlexLayoutModule
    ],
    providers: [
        /* { provide: LOCALE_ID, useValue: 'sv-SV' }, */
        { provide: HTTP_INTERCEPTORS, useClass: SoccerAuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
