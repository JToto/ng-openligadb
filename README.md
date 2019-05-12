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

## Einstellungen

Der Shortcut der gewünschten Liga bzw. des gewünschten Tourniers wird folgendermaßen gesetzt:

```javascript
openLigaDB.setLeague("bl1");
```

Der Standard-Timeout beträgt 20 Sekunden, kann aber angepasst werden:

```javascript
this.openLigaDB.setTimeout(1000); // setzt den Timeout auf 1 Sekunde
```

## Funktionen

Eine genaue Auflistung aller Funktionen der Library folgt. Grundsätzlich ist aber jede Schnittstelle, die in folgendem GitHub-Repo unter "API-Schema" aufgelistet wird, implementiert:

https://github.com/OpenLigaDB/OpenLigaDB-Samples



