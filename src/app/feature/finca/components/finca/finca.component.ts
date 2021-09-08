import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finca',
  templateUrl: './finca.component.html',
  styleUrls: ['./finca.component.css']
})
export class FincaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  this.router.navigate(['/finca/listar']);
  }

}
