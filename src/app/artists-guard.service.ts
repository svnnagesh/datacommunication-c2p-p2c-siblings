import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ArtistsService } from './artists.service';


@Injectable({
  providedIn: 'root'
})
export class ArtistsGuardService implements CanActivate {

  constructor(private artistService:ArtistsService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const artistExits = !!this.artistService.singleArtist(+route.paramMap.get('id'));

    if(artistExits) {
      return true;
    } else {
      this.router.navigate(['notfound']);
      return false;
    }

  }

}
