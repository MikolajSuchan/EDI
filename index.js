//Pobieramy wszystkie osoby, używamy [...dane], aby zdestrukturyzować node listę do tablicy 
const teamMates = [...document.querySelectorAll(".teamMate")]
teamMates[0].classList.add("choosen")

// wywołanie głównej funkcji, która wszystko robi
main("./data1.json")

// alert("Jeżeli w tablicy jest wszędzie undefined, a wykresy są dziwne to znaczy, że przekroczyliśmy limit 200 zapytań API dziennie. Dane w takim wypadku są hardcodowane w skrypcie. Usuń ten alert ze skryptu przed oddaniem projektu.")

//  async - funkcja asynchroniczna. Deklarujemy jej taki typ, żebyśmy mogli używać funkcji, które działają na Promisach (fetch).
// Dzięki temu możemy użyć słowa "await", żeby poczekać aż dane się załadują i dopiero kod się wykona dalej


// Jako, że będziemy na stronie zmieniać dane to funkcja główna
// resetuje stan poprzedni i wykonuje wszystko ponownie dla innych zmiennych.

async function main(dane) {
    // elementy w htmlu do których będą wrzucane wykresy
    const canvases = document.querySelector(".canvases")
    // usuwamy wszystko co w elemencie
    canvases.innerHTML = "";
    // tworzymy nowe canvasy i dodajemy do kontenera
    const canvas1 = document.createElement("canvas")
    const canvas2 = document.createElement("canvas")

    canvas1.id = "chart1"
    canvas2.id = "chart2"

    canvases.appendChild(canvas1)
    canvases.appendChild(canvas2)

    const chart1 = document.querySelector("#chart1")
    const chart2 = document.querySelector("#chart2")

    //resetuj wykresy

    // bierzemy tablicę danych z API
    let persons = await fetchDataFromAPI(dane);

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
    
async function fetchDataFromAPI(dane){
    // Pobieramy dane z api za pomocą funkcji fetch. Czekamy await'em aż się to zrobi. Potem bierzemy te dane i parsujemy z JSON'a.
    // W ten sposób dostajemy dane w tablicy, którą zwracamy. Dane to ścieżka do pliku json (lokalnego) podawana jako parametr funkcji 
    const data = await fetch(dane);
    const persons = await data.json();
    return persons;
}

function insertPeopleToTable(persons){
    //Pobieramy ciało tabeli, do której będziemy wrzucać rekordy
    const tbody = document.querySelector("tbody");
    // usuwamy poprzednie rekordy
    tbody.innerHTML = ""
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
        const amount = Number(person["Money"].substring(2, person["Money"].length - 4));
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


// Wywoływanie funkcji na kliknięcie, zmiana wyglądu
for (const teamMate of teamMates) {
    teamMate.addEventListener("click", ()=>{
        main("./data" + teamMate.id + ".json")
        teamMates[0].classList.remove("choosen")
        teamMates[1].classList.remove("choosen")
        teamMates[2].classList.remove("choosen")
        teamMate.classList.add("choosen")
    })
}