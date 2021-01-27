import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent implements OnInit {

  @Input() pages: [];
  @Input() activePage: number;
  @Input() totalPages: number;
  @Output() onChangePageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(page: number){
    console.log(page);
    this.onChangePageEvent.emit(page);
    
  }


}
