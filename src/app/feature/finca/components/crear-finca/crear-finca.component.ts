import { Component, OnInit } from '@angular/core';
import { FincaService } from 'src/app/feature/finca/shared/service/finca.service';
import { Finca } from 'src/app/feature/finca/shared/model/finca';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-finca',
  templateUrl: './crear-finca.component.html',
  styleUrls: ['./crear-finca.component.css']
})
export class CrearFincaComponent implements OnInit {

  public finca: Finca;

  constructor(protected fincaService: FincaService, protected router: Router) { }

  ngOnInit(): void {
  }

  public crear(): void{
    this.fincaService.crear(this.finca).subscribe(
      a => {
        this.router.navigate(['/finca/listar']),
        swal.fire('Finca creada', 'Finca ${this.finca.nombre} creada con éxito', 'success');
      }
    );
  }

}
