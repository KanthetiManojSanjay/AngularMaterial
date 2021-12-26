import {Component, OnInit, ViewChild} from '@angular/core';
import {DiseaseCovidService} from "../disease-covid.service";
import {CountryReport} from "../countryReport";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  constructor(private diseaseCovidService: DiseaseCovidService) {
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, {static: true}) sort: MatSort | undefined;

  ELEMENT_DATA: CountryReport[] | undefined;
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active', 'critical', 'casesPerOneMillion', 'deathsPerOneMillion', 'tests', 'testsPerOneMillion'];
  dataSource = new MatTableDataSource<CountryReport>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.getALlReports();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getALlReports() {
    let resp = this.diseaseCovidService.covid19Reports();
    resp.subscribe(report => this.dataSource.data = report as CountryReport[])

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
