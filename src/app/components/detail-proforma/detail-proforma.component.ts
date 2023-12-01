import { proforma } from '@/model/proforma.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-detail-proforma',
  templateUrl: './detail-proforma.component.html',
  styleUrls: ['./detail-proforma.component.scss']
})
export class DetailProformaComponent implements OnInit{
  proforma: proforma[]=[{}];


  constructor(
    private service: ApiService,
    private router: Router
  ){}

ngOnInit(): void {
  this.proforma = this.getProforma();
  console.log(this.proforma)
}
getProforma(): proforma[]{
  return this.service.getProforma();
}


}
