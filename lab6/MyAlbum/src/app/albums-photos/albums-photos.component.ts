import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AlbumsService } from '../albums.service';
import { Album, AlbumPhotos } from '../albums';
import { Location } from '@angular/common';

@Component({
  selector: 'app-albums-photos',
  templateUrl: './albums-photos.component.html',
  styleUrls: ['./albums-photos.component.css']
})
export class AlbumsPhotosComponent {
  AlbumPhotos: AlbumPhotos[];
  constructor(private route: ActivatedRoute, private albumService: AlbumsService, private location: Location) {
    this.AlbumPhotos = []
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe( (albumPhotos) => {
      this.AlbumPhotos = albumPhotos;
    })
  }
  returnBack() {
    this.location.back();
  }
}