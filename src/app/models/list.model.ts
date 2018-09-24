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

export class ArtistModel {
    id: number;
    photo: string;
    name: string;
    title: string;
    content: string;
    likesCount: number
    sharesCount: number;
    commentCount: number
}

export class EventsModel {
    id: number;
    name: string;
    location: string;
}

export class Events {
    private myEvents = [
        {
            id: 1,
            name: 'Google IO Extended',
            location: 'USA'
        },
        {
            id: 2,
            name: 'TensorFlow Meetup',
            location: 'NewYork'
        },
        {
            id: 3,
            name: 'All Meetup',
            location: 'UK'
        },
        {
            id: 4,
            name: 'Angular Conference',
            location: 'India'
        }
    ]

    allEvents() {
        return this.myEvents;
    }

}