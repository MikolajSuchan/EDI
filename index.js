// wywołanie głównej funkcji, która wszystko robi
main()
// alert("Jeżeli w tablicy jest wszędzie undefined, a wykresy są dziwne to znaczy, że przekroczyliśmy limit 200 zapytań API dziennie. Dane w takim wypadku są hardcodowane w skrypcie. Usuń ten alert ze skryptu przed oddaniem projektu.")

//  async - funkcja asynchroniczna. Deklarujemy jej taki typ, żebyśmy mogli używać funkcji, które działają na Promisach (fetch).
// Dzięki temu możemy użyć słowa "await", żeby poczekać aż dane się załadują i dopiero kod się wykona dalej
async function main() {
    // elementy w htmlu do których będą wrzucane wykresy
    const chart1 = document.querySelector("#chart1")
    const chart2 = document.querySelector("#chart2")

    // bierzemy tablicę danych z API
    let persons = await fetchDataFromAPI();

    // LOSOWE DANE NA WYPADEK GDYBY API PRZEKROCZYŁO DZIENNY LIMIT
    if (typeof persons === "object"){
       persons = [
            {
                "Main income": "1",
                "Place in the ranking": "1",
                "First name": "Norbert",
                "Last name": "Gierczak",
                "Money": "1 pln",
                "Age": "12",
            },
            {
                "Main income": "2",
                "Place in the ranking": "2",
                "Money": "2 pln",
                "Age": "13",
            },
            {
                "Main income": "3",
                "Place in the ranking": "3",
                "Money": "3 pln",
                "Age": "41",
            },
            {
                "Main income": "4",
                "Place in the ranking": "4",
                "Money": "4 pln",
                "Age": "61",
            },
            {
                "Main income": "5",
                "Place in the ranking": "5",
                "Money": "5 pln",
                "Age": "17",
            },
            {
                "Main income": "6",
                "Place in the ranking": "6",
                "Money": "6 pln",
                "Age": "81",
            },
            {
                "Main income": "7",
                "Place in the ranking": "7",
                "Money": "7 pln",
                "Age": "19",
            },
            {
                "Main income": "8",
                "Place in the ranking": "8",
                "Money": "8 pln",
                "Age": "51",
            },
            {
                "Main income": "9",
                "Place in the ranking": "9",
                "Money": "9 pln",
                "Age": "31",
            },
            {
                "Main income": "10",
                "Place in the ranking": "10",
                "Money": "10 pln",
                "Age": "44",
            },
            {
                "Main income": "1",
                "Place in the ranking": "11",
                "Money": "33 pln",
                "Age": "44",
            },
            {
                "Main income": "3",
                "Place in the ranking": "12",
                "Money": "20 pln",
                "Age": "12",
            },
            {"Main income": "3","Place in the ranking": "13","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "14","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "15","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "16","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "17","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "18","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "19","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "20","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "21","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "22","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "23","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "24","Money": "20 pln","Age": "12",}
,{"Main income": "1","Place in the ranking": "25","Money": "20 pln","Age": "12",}
,{"Main income": "1","Place in the ranking": "26","Money": "20 pln","Age": "12",}
,{"Main income": "8","Place in the ranking": "27","Money": "20 pln","Age": "12",}
,{"Main income": "8","Place in the ranking": "28","Money": "20 pln","Age": "12",}
,{"Main income": "1","Place in the ranking": "29","Money": "20 pln","Age": "12",}
,{"Main income": "2","Place in the ranking": "30","Money": "20 pln","Age": "12",}
,{"Main income": "2","Place in the ranking": "31","Money": "20 pln","Age": "12",}
,{"Main income": "2","Place in the ranking": "32","Money": "20 pln","Age": "12",}
,{"Main income": "2","Place in the ranking": "33","Money": "20 pln","Age": "12",}
,{"Main income": "2","Place in the ranking": "34","Money": "20 pln","Age": "12",}
,{"Main income": "10","Place in the ranking": "35","Money": "20 pln","Age": "12",}
,{"Main income": "10","Place in the ranking": "36","Money": "20 pln","Age": "12",}
,{"Main income": "10","Place in the ranking": "37","Money": "20 pln","Age": "12",}
,{"Main income": "10","Place in the ranking": "38","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "39","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "40","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "41","Money": "20 pln","Age": "12",}
,{"Main income": "5","Place in the ranking": "42","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "43","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "44","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "45","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "46","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "47","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "48","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "49","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "50","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "51","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "52","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "53","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "54","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "55","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "56","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "57","Money": "20 pln","Age": "12",}
,{"Main income": "4","Place in the ranking": "58","Money": "20 pln","Age": "12",}
,{"Main income": "4","Place in the ranking": "59","Money": "20 pln","Age": "12",}
,{"Main income": "4","Place in the ranking": "60","Money": "20 pln","Age": "12",}
,{"Main income": "4","Place in the ranking": "61","Money": "20 pln","Age": "12",}
,{"Main income": "4","Place in the ranking": "62","Money": "20 pln","Age": "12",}
,{"Main income": "4","Place in the ranking": "63","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "64","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "65","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "66","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "67","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "68","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "69","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "70","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "71","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "72","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "73","Money": "20 pln","Age": "12",}
,{"Main income": "7","Place in the ranking": "74","Money": "20 pln","Age": "12",}
,{"Main income": "6","Place in the ranking": "75","Money": "20 pln","Age": "12",}
,{"Main income": "6","Place in the ranking": "76","Money": "20 pln","Age": "12",}
,{"Main income": "6","Place in the ranking": "77","Money": "20 pln","Age": "12",}
,{"Main income": "6","Place in the ranking": "78","Money": "20 pln","Age": "12",}
,{"Main income": "6","Place in the ranking": "79","Money": "20 pln","Age": "12",}
,{"Main income": "6","Place in the ranking": "80","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "81","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "82","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "83","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "84","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "85","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "86","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "87","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "88","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "89","Money": "20 pln","Age": "12",}
,{"Main income": "9","Place in the ranking": "90","Money": "20 pln","Age": "12",}
,{"Main income": "9","Place in the ranking": "91","Money": "20 pln","Age": "12",}
,{"Main income": "9","Place in the ranking": "92","Money": "20 pln","Age": "12",}
,{"Main income": "9","Place in the ranking": "93","Money": "20 pln","Age": "12",}
,{"Main income": "9","Place in the ranking": "94","Money": "20 pln","Age": "12",}
,{"Main income": "9","Place in the ranking": "95","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "96","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "97","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "98","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "99","Money": "20 pln","Age": "12",}
,{"Main income": "3","Place in the ranking": "100","Money": "20 pln","Age": "12",}

        ]
    }

    // Tablica typów zarobków
    const mainIncomes = getMainIncomes(persons)
    // Tablica sumy pieniędzy dla poszczególnych typów zarobków
    const money = getAllMoney(persons, mainIncomes)
    // Tablica wieków osób
    const ages = getAllAges(persons);
    // Tablica numerów zajętych miejsc
    const places = getAllPlaces(persons);

    // Generowanie Wykresów
    createChart1(chart1, mainIncomes, money)
    createChart2(chart2, places, ages)


    // Generowanie rekordów tablicy i wrzucanie ich do HTML'a
    insertPeopleToTable(persons)
}
    
async function fetchDataFromAPI(){
    // Pobieramy dane z api za pomocą funkcji fetch. Czekamy await'em aż się to zrobi. Potem bierzemy te dane i parsujemy z JSON'a.
    // W ten sposób dostajemy dane w tablicy, którą zwracamy
    const data = await fetch('https://my.api.mockaroo.com/dane_projektowe.json?key=ce86b420');
    const persons = await data.json();
    return persons;
}

function insertPeopleToTable(persons){
    //Pobieramy ciało tabeli, do której będziemy wrzucać rekordy
    const tbody = document.querySelector("tbody");

    // Pętla po wszystkich osobach jakie dostaliśmy z API
    for (const person of persons) {
        // tworzymy rekord tabeli
        const tr = document.createElement("tr")

        // tworzymy 5 komórek dla rekordu
        const number = document.createElement("td");
        const name = document.createElement("td");
        const age = document.createElement("td");
        const type = document.createElement("td");
        const money = document.createElement("td");

        // Wrzucamy do komórek odpowiednie dane
        number.innerText = person["Place in the ranking"]
        name.innerText = person["First name"] + " " + person["Last name"]
        age.innerText = person["Age"]
        type.innerText = person["Main income"]
        money.innerText = person["Money"]

        // Dodajemy komórki do rekordu
        tr.appendChild(number)
        tr.appendChild(name)
        tr.appendChild(age)
        tr.appendChild(type)
        tr.appendChild(money)
    
        // Dodajemy rekord do tabeli
        tbody.appendChild(tr)
    }
}

function getAllAges(persons){
    const ages = [];
    for (const person of persons) {
        ages.push(person["Age"]);
    }
    return ages
}

function getAllPlaces(persons) {
    const places = [];
    
    for (const person of persons) {
        places.push(person["Place in the ranking"]);
    }
    return places;
}

function getMainIncomes(persons){
    const incomes = [];
    
    // Dla każdej osoby z API bierzemy jej typ przychodu i wrzucamy do tablicy
    for (const person of persons) {
        incomes.push(person["Main income"]);
    }

    // Z tablicy tworzymy "Set'a", który usuwa zduplikowane elementy.
    const incomesSet = new Set(incomes)
    // Potem z Set'a tworzymy tablicę i ją zwracamy
    return Array.from(incomesSet);
}

function getAllMoney(persons, mainIncomes){
    const money = [];
    // wypełniamy tablicę tyloma zerami ile jest typów zarobków
    for (const income of mainIncomes) {
        money.push(0)
    }

    for (const person of persons) {
        // dla każdej osoby bierzemy jej typ zarobku i sprawdzamy na jakim indeksie
        // w tabeli typów ona jest.
        // Dla tego indeksu dodajemy w tabeli z pieniędzmi kwotę tej osoby.
        // Dzięki temu wiadomo, że dla indeksu 3 w tabeli pieniądze przechowywana jest
        // ilośc pieniędzy dla typu zarobku znajdującego się w tabeli typów pod indeksem 3.
        const index = mainIncomes.indexOf(person["Main income"])
        const amount = Number(person["Money"].substring(0, person["Money"].length - 4));
        money[index] = money[index] + amount

    }
    return money // zwracamy tablicę sumy zarobków.
}

function createChart1(canvas, labels, data) {
    // tworzymy wykres według dokumentacji
    // potrzebujemy canvasu do którego wrzucamy wykres,
    // dane poziome i pionowe (labels, data)
    const chartData = {
        labels,
        datasets: [{
          label: 'Types of Incomes',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 235, 0.2)',
            'rgba(153, 102, 245, 0.2)',
            'rgba(153, 102, 225, 0.2)',
            'rgba(153, 102, 215, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
    };
    const chartConfig = {
        type: 'bar',
        data: chartData,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Ilość pieniędzy według poszczególnych typów przychodów'
                },
            },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
    };
    // Tworzymy wykres według dokumentacji
    new Chart(canvas, chartConfig);
}

function createChart2(canvas, labels, data) {
    const chartData = {
    labels: labels,
    datasets: [{
        label: 'Wiek',
        data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    };

    const chartConfig = {
        type: 'line',
        data: chartData,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Wiek poszczególnych ludzi z danym numerem rankingu'
                },
                legend: {
                    display: true,
                    
                }
            }
        }
      };

    new Chart(canvas, chartConfig);
}
