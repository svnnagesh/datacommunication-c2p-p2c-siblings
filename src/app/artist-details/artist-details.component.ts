import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { Routes, ActivatedRoute, ParamMap, Params } from '@angular/router';


@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  artists;
  id: number;

  constructor(private artistService: ArtistsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.artists = this.artistService.singleArtist(this.id);
    })
  }

}
