import { Component, OnInit } from '@angular/core';
import { CampaignDataService } from './../../campaigndata.service';



@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {


// type MyArrayType = Array<{ id: number, text: string }>;

// var arr: MyArrayType = [
// 	{ id: 1, text: 'Sentence 1' },
// 	{ id: 2, text: 'Sentence 2' },
// 	{ id: 3, text: 'Sentence 3' },
// 	{ id: 4, text: 'Sentenc4 ' },
// ];
	// campData = [{ id: 15, sub: 'Welcome Womens Era', list: 'List A', sentdate: '19 Aug, 2017 9.30 AM', openrate: 126, openpercent: 23.5, clickrate: 16, clickpercent: 2.5, unsubrate: 21, unsubpercent: 0.5 }, { id: 13, sub: 'Joe Brown Arrested', list: 'List B', sentdate: '16 Aug, 2017 9.30 AM', openrate: 26, openpercent: 13.5, clickrate: 116, clickpercent: 12, unsubrate: 29, unsubpercent: 1.1 }, { id: 14, sub: 'Trump goes Ballistic', list: 'List C', sentdate: '13 Aug, 2017 9.30 AM', openrate: 12, openpercent: 2.5, clickrate: 36, clickpercent: 50, unsubrate: 2, unsubpercent: 0.1 }];
  // subjects = ['Womens Era', 'Joe Arrested', 'Trump goes Ballistic', 'Astronomy TOday', 'Tennis', 'MGTow New Episode'];
  campData;

  	constructor(service: CampaignDataService) { 
			this.campData = service.getCampaignData();
  }


  previewCampaign(id: string) : void {
    console.log('Preview Campaign: ' + id);
  }


  viewReport(id: string) : void {
    console.log('View Report: ' + id);
  }


  ngOnInit() {
  }

}
