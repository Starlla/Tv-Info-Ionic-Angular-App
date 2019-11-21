import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Tv} from '../types';
import {TvService} from '../services/tv.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  tvList: Observable<Tv[]>;

  constructor(private tvService: TvService) {
  }

  ngOnInit() {
    this.tvList = this.tvService.getTvs();
    console.log(this.tvList);

    // this.tvService.getTvs().subscribe(
    //     (result) => {
    //       this.tvList = result;
    //       console.log('Result:', result);
    //     }
    // );
  }


}
