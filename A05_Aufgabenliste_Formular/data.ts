namespace A05_Aufgabenliste_Formular {

    export interface Item {
        id: number;
        title: string;
        comment: string;
        name: string;
        date: string;
        status: boolean;
    }


    export let data: Item[] = [
        { id: 1, title: "Spülmaschine ausräumen", comment: "Klarspüler auffüllen", name: "Selina", date: "16.04.23, 12:30", status: true },
        { id: 2, title: "Keller aufräumen", comment: "Mausefalle stellen", name: "Lea", date: "16.04.23, 19:30", status: true },

        { id: 3, title: "Flur fegen", comment: "jeden Stock", name: "Hanna", date: "16.04.23, 12:30", status: true },
        { id: 4, title: "Keller aufräumen", comment: "Mausefalle stellen", name: "Selina", date: "16.04.23, 19:30", status: true },

        { id: 5, title: "Müll rausbringen", comment: "Biomüll auf den Kompost", name: "Lea", date: "13.04.23, 12:30", status: true },
        { id: 6, title: "Kblabla", comment: "blablabla", name: "Hanna", date: "13.04.23, 19:30", status: true },
    ]
}