# Oppretter Sprint Review-issue på GitHub. Kjør: gh auth login (først gang), deretter: .\create-sprint-review-issue.ps1
$body = @"
**Hva ble fullført:**

- Prosjektet er satt opp med React, Vite og Tailwind CSS
- Mock-data for 9 treningsklasser og 3 instruktører er på plass
- Layout med header og footer er implementert
- KlasseKort-komponent viser klassenavn, tidspunkt, instruktør, varighet, nivå og kapasitetsstatus
- Timeplan-side viser alle klasser gruppert per ukedag i et responsivt grid

**Hva fungerte bra:**

- Mappestrukturen er ryddig og gjør det enkelt å vite hvor nye filer skal legges
- Mock-data med hjelpefunksjoner gjør det enkelt å hente og filtrere klasser
- Tailwind med egendefinerte NordicFitness-farger gir konsistent stil uten mye ekstra kode
- Én branch per issue ga en oversiktlig og sporbar Git-historikk

**Hva var utfordrende:**

- Å forstå riktig Git-arbeidsflyt med branches, PR og merge tok litt tid å sette seg inn i
- Tailwind måtte konfigureres korrekt med content-feltet for at klassene skulle fungere

**Hva tas med til Sprint 2:**

- Legge til klikk på KlasseKort som navigerer til detaljside (/klasse/:id)
- Bygge KlasseDetalj-side med full informasjon om én klasse
- Implementere bookingskjema med lokal lagring i localStorage
- Legge til MineBookinger-side med oversikt over aktive bookinger
- Utvide navigasjonen i header med lenke til Mine bookinger
"@

$bodyFile = [System.IO.Path]::GetTempFileName()
$body | Out-File -FilePath $bodyFile -Encoding utf8

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
Set-Location $PSScriptRoot
gh issue create --title "sprint-review: Sprint 1 gjennomgang" --body-file $bodyFile
Remove-Item $bodyFile -ErrorAction SilentlyContinue
