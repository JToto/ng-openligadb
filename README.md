# ng-openligadb
ng-openligadb ist eine Angular 7 Library zum Abrufen der von www.openligadb.de bereitgestellten Daten.

## Installation
### Installieren der Library über NPM

```npm install --save ng-openligadb```

### Import

In app.module.ts:

```javascript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOpenLigaDB
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
In der Komponente:

```javascript
import { OpenLigaDBService } from 'ng-openligadb';
import { MatchData } from "ng-openligadb/lib/shared/matchData";
import { Team } from "ng-openligadb/lib/shared/team";
[...]
```
### Verwendung

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(openLigaDB : OpenLigaDBService) {
    openLigaDB.setLeague("bl1");

    openLigaDB.getLatestMatchData().then(function(result) {
      let matchData : MatchData[] = result;
      console.log(matchData);
    });

    openLigaDB.getTeams("2018").then(function(result) {
      let teams : Team[] = result;
      console.log(teams);
    });
  }
}
```


