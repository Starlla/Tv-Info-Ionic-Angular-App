import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Cast, Tv} from '../types';
import {TvService} from '../services/tv.service';
import {ActivatedRoute} from '@angular/router';
import {CastService} from '../services/cast.service';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.page.html',
  styleUrls: ['./tv-detail.page.scss'],
})
export class TvDetailPage implements OnInit {

  tvDetail: Observable<Tv>;
  castList: Observable<Cast[]>;

  constructor(private tvService: TvService, private castService: CastService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const tvID = this.activatedRoute.snapshot.params.ID;
    this.tvDetail = this.tvService.getTv(tvID);
    this.castList = this.castService.getCasts(tvID);
    // this.tvDetail.subscribe((result) => {
    //   console.log(result);
    // });
  }

}
