import { Component } from '@angular/core';
import {TvService} from "../services/tv.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tvList: any;

  constructor(private tvService: TvService) {}
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.tvService.queryTvs(query).subscribe(
        (result) => {
          this.tvList = result;
          console.log('Result:', result);
        }
    );
  }

}
