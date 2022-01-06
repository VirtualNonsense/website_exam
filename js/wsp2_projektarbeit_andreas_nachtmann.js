// JavaScript-Dokument zu wsp2_projektarbeit_vorname_nachname.html von Name Vorname - falls benötigt

Chart.register(ChartDataLabels);
const demographie = ["16 - 29", "30-49", "50-64", "65 Jahre +",];

const massnahmen = [
    ['Löschen überflüssiger Mail,', ' Daten und Apps'],
    ['Vermeidung von Stand-by, also', ' komplettes Abschalten meiner', 'Geräte'],
    ['Geringere Bildschirmhelligkeit', ' bei meinen Geräten'],
    ['Verwendung eines', ' kleineren Bildschirms']

];

function get_massnahmen_ueber_prozent(context) {

    return new Chart(context, {
        type: 'bar', data: {
            labels: massnahmen, datasets: [{
                label: 'Nutze ich bereits',
                data: [61, 51, 21, 19],
                backgroundColor: ['rgb(23,154,215)',],
                borderColor: ['rgb(23,154,215)',],
                borderWidth: 1
            }, {
                label: 'Kann ich mir vorstellen',
                data: [18, 30, 41, 31],
                backgroundColor: ['rgb(0,126,180)',],
                borderColor: ['rgb(0,126,180)',],
                borderWidth: 1
            }, {
                label: 'Kann ich mir nicht vorstellen',
                data: [19, 16, 34, 48],
                backgroundColor: ['rgb(3,36,44)',],
                borderColor: ['rgb(3,36,44)',],
                borderWidth: 1
            }],
        }, options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
                x: {
                    min: 0,
                    max: 100,

                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value) {
                            return `${value}%`;
                        }
                    }
                }
            },
            indexAxis: "y",
            plugins: {
                datalabels: {
                    font: function (context) {
                        const avgSize = Math.round((context.chart.height + context.chart.width) / 2);
                        let size = Math.round(avgSize / 32);
                        size = size > 12? 12 : size;
                        return {
                            size: size,
                            weight: 'bold'
                        };
                    },
                    anchor: 'end',
                    align: 'end',
                    formatter: function(value) {
                        return value + '%';
                    }
                }
            }
        },
    });
}