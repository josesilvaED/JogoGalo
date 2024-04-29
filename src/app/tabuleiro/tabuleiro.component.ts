import { Component } from '@angular/core';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent  {
    jogo: string[][];
    jogador: string;
    vencedor: string;
    gameover: boolean;

  constructor(){
    this.iniciaJogo();
    // ...
  }

  iniciaJogo(){
      this.jogo = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ];

      this.jogador = 'X';
      this.vencedor = '';
      this.gameover= false;

    }

    espacoClick(row: number, col: number) {
      if (!this.jogo[row][col] && !this.gameover) {
        this.jogo[row][col] = this.jogador;
        if (this.vencer()) {
          this.vencedor = this.jogador;
          this.gameover = true;
        } else if (this.empatar()) {
          this.vencedor = 'Empate';
          this.gameover = true;
        } else {
          this.jogador = this.jogador === 'X' ? 'O' : 'X';
        }
      }
    }

    vencer(): boolean {

      for (let i = 0; i < 3; i++) {
        if (this.jogo[i][0] === this.jogador &&  this.jogo[i][1] === this.jogador &&  this.jogo[i][2] === this.jogador) {
          return true;
        }
      }

      for (let j = 0; j < 3; j++) {
        if (this.jogo[0][j] === this.jogador && this.jogo[1][j] === this.jogador && this.jogo[2][j] === this.jogador) {
          return true;
        }
      }

      if ((this.jogo[0][0] === this.jogador && this.jogo[1][1] === this.jogador && this.jogo[2][2] === this.jogador) ||
          (this.jogo[0][2] === this.jogador && this.jogo[1][1] === this.jogador && this.jogo[2][0] === this.jogador)) {
        return true;
      }
      return false;
    }

    empatar(): boolean {
      for (let fila of this.jogo) {
        for (let quadrado of fila) {
          if (!quadrado) {
            return false;
          }
        }
      }
      return true;
    }




}
