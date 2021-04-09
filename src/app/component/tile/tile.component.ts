import { Tile } from './../../core/model/tile';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() tile!: Tile;

  constructor(private elm: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    if(this.tile.isFilled) {
      this.render.addClass(this.elm.nativeElement, 'filled')
    }
  }

}
