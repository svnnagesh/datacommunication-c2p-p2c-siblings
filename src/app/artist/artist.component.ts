import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { ArtistModel } from '../models/list.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artists;
  id;

  constructor(private artistService: ArtistsService, private router: Router) { }

  ngOnInit() {
    this.artists = this.artistService.allArtists();
    //this.configActors();
  }

  actors(id) {
    //console.log(id);
    this.router.navigate(['/artist-details', id]);
  }

  commentCount = 0;
  likesCount = 0;
  sharesCount = 0;

  like(likes) {
    likes.likesCount++;
  }

  comment(comments) {
    comments.commentCount++;
  }

  share(shares) {
    shares.sharesCount++;
  }

  /* myActors;

  configActors() {
    this.artistService.getConfig().subscribe(
      (data) => this.myActors = data
    )
    
  } */

}
