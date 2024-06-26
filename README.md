Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


Recupero i dati immessi dall'utente nel form memorizzandoli in una variabile
Dichiaro una variabile assegnando come valore il prezzo del biglietto per km (0.21 € al km)
Dichiaro una variabile assegnando come valore il prezzo del biglietto, calcolato moltiplicando il costo al km per i km scelti dal passeggero
Dichiaro una variabile per la riduzione del biglietto, che inizializzo a 0.
? SE il passeggero è minorenne
  assegno come valore della variabile di riduzione del ticket il 20% di sconto
? SE INVECE il passeggero ha un'età maggiore o uguale di 65 anni
  assegno come valore della variabile di riduzione del ticket il 40% di sconto
Dichiaro una variabile che calcoli l'importo di sconto, moltiplicando il prezzo del ticket del passeggero per l'eventuale riduzione
Dichiaro una variabile per calcolare l'eventuale prezzo scontato, sottraendo al prezzo pieno il valore dell'importo di sconto
Applico all'ultimo calcolo il metodo toFixed() per mostrare il totale fino a un massimo di due decimali dopo la virgola
Aggiungo con la proprietà innerHTML un messaggio con il recap dei dati e il totale del pagamento.