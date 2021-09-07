import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {

  titulo = 'Reserva de fincas';

  @Input()
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
