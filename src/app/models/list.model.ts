export class Friends {
    name: string;
    age: number;
    city: string;
}

export class Data {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export class EventsModel {
    name:string;
    location:string;
}

export class Events {
    private myEvents = [
        {
            name: 'Google IO Extended',
            location: 'USA'
        },
        {
            name:'TensorFlow Meetup',
            location:'NewYork'
        },
        {
            name:'All Meetup',
            location:'UK'
        },
        {
            name:'Angular Conference',
            location:'India'
        }
    ]

        allEvents() {
        return this.myEvents;
    }

}