import { Component, OnInit } from '@angular/core';
import { CampaignPageDetailDataService } from './../../campaignpagedetaildata.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

	campSentData;
	campDraftData;
	campScheduledData;
	campSuspendedData;
	campRunningData;
	campArchivedData;

	constructor(service: CampaignPageDetailDataService) {
		this.campSentData = service.getAllCampaignData();
		this.campDraftData = service.getDraftCampaignData();
		this.campScheduledData = service.getScheduledCampaignData();
		this.campSuspendedData = service.getSuspendedCampaignData();
		this.campRunningData = service.getRunningCampaignData();
		this.campArchivedData = service.getArchivedCampaignData();



	}


  ngOnInit() {
  }

}
