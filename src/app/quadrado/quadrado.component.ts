import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss']
})
export class QuadradoComponent {


  @Input() jogada: 'X' | 'O';

}
