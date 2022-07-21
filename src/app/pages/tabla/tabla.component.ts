import { Component, OnInit } from '@angular/core';

// Modesl
import { CharactersInterfe } from 'src/app/models/characters.model';

// Service
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'sofka-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  characteres?: CharactersInterfe;
  loading: boolean;

  constructor(
    private rickAndMorty$: RickAndMortyService
  ) {
    this.loading = false;
  }

  ngOnInit(): void { }

  loadData(): void {
    this.loading = true;
    const data = this.rickAndMorty$.getCharacters();
    data.subscribe({
      next: characteres => {
        this.characteres = characteres;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

}
