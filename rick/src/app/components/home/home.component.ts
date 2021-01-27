import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { Episodes } from 'src/app/shared/entities/episodes';
import { Season } from 'src/app/shared/entities/Season';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private api: HomeService) { }
  public episodios: Episodes;
  private infoEpisode;
  private resultsEpisodes = [];
  public seasons: Season[];

  ngOnInit() {
    this.getAllEpisodes();
    this.getAllSeasons();
  }

  getAllSeasons() {
    this.seasons = [
      { title: "Temporada 1", description: 'Temporada 1', image: '/assets/t1.jpg' },
      { title: "Temporada 2", description: 'Temporada 2', image: '/assets/t2.jpg' },
      { title: "Temporada 3", description: 'Temporada 3', image: '/assets/t3.jpg' },
      { title: "Temporada 4", description: 'Temporada 4', image: '/assets/t4.jpg' },
    ];
  }


  getAllEpisodes() {
    this.api.getAllEpisodes().subscribe((episodios: Episodes) => {
      this.infoEpisode = episodios.info;
      console.log('Info', this.infoEpisode);
      for (let i = 0; i < episodios.results.length; i++) {
        this.resultsEpisodes.push(episodios.results[i]);
      }
      console.log('Results', this.resultsEpisodes);
    });
  }


}
