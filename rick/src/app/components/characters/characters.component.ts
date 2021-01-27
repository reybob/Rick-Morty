import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { HomeService } from "src/app/shared/services/home.service";
import { Characters } from "src/app/shared/entities/Characters";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ResultsEntity } from 'src/app/shared/entities/ResultsEntity';
import { Info } from "src/app/shared/entities/Info";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.sass"],
})
export class CharactersComponent implements OnInit {
  public characters: Characters;
  public personajes: ResultsEntity[];
  public info: Info;
  constructor(private api: HomeService) { }
  private $unsubscribe = new Subject();
  public pages = [];
  public activePage: number = 1;
  public totalPages: number;

  ngOnInit() {
    this.getAllCharacters();
  }

  getValue(key) {
    console.log(key);
    return Object.values(key);
  }

  public getAllCharacters() {
    this.api
      .getAllCharacters()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe((response) => {
        this.personajes = response.results;
        this.info = response.info;
        this.totalPages = this.info.pages;
        this.showPagesPaginator(this.activePage);
      });
  }

  public getCharactersByPage(page: number) {
    this.activePage = page;
    this.api.getCharactersByPage(page)
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe((response) => {
        this.personajes = response.results;
        this.info = response.info;
        this.showPagesPaginator(this.activePage);
      });
  }

  // TODO: pagination
  private showPagesPaginator(page: number) {
    this.pages = [];
    if (page != 1) {
      this.pages.push(page - 1);
    }
    this.pages.push(page);
    if (this.totalPages != page) {
      this.pages.push(page + 1);
    }
  }

  public changePage(page: number) {
    this.getCharactersByPage(page);
  }


}
