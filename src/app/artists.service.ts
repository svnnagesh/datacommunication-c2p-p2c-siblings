import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http:HttpClient) { }

  private Artists = [
    {
      id:1,
      photo:'../assets/images/vijay.jpg',
      name:'Vijay Deverakonda',
      title:'Start hero of Arjun Reddy',
      content:'A film which he got huge response in his career...',
      likesCount:0,
      sharesCount:0,
      commentCount:0
    },
    {
      id:2,
      photo:'../assets/images/chay.jpg',
      name:'Naga Chaithanya',
      title:'Yem Maya Chesave',
      content:'A film which he got huge response in his career...',
      likesCount:0,
      sharesCount:0,
      commentCount:0
    },
    {
      id:3,
      photo:'../assets/images/keerthi.jpeg',
      name:'Keerthi Suresh',
      title:'Mahanati',
      content:'A film which he got huge response in his career...',
      likesCount:0,
      sharesCount:0,
      commentCount:0
    },
    {
      id:4,
      photo:'../assets/images/sudheer.jpeg',
      name:'Sudheer Babu',
      title:'Sammohanam',
      content:'A film which he got huge response in his career...',
      likesCount:0,
      sharesCount:0,
      commentCount:0
    },
    {
      id:5,
      photo:'../assets/images/rahul.jpeg',
      name:'Rahul Ramakrishna',
      title:'Star comedian of Arjun Reddy',
      content:'A film which he got huge response in his career...',
      likesCount:0,
      sharesCount:0,
      commentCount:0
    }
  ]

  allArtists() {
    return this.Artists;
  }

  singleArtist(id:number) {
    return this.Artists.find(e => e.id === id);
  }

  //configUrl = 'models/artists.json'

  /* getConfig() {
    return this.http.get(this.configUrl);
  } */

}
