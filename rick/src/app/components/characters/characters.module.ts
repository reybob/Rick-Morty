import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from 'src/app/shared/paginator/paginator/paginator.component';

@NgModule({
  declarations: [CharactersComponent, PaginatorComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CharactersComponent
  ],
})
export class CharactersModule { }
