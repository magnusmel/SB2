
export class CampaignPageDetailDataService {

	getAllCampaignData() {

		return [{ id: 19, sub: 'Welcome Womens Era', list: 'List A', sentdate: '19 Aug, 2017 9.30 AM', openrate: 126, openpercent: 23.5, clickrate: 16, clickpercent: 2.5, unsubrate: 21, unsubpercent: 0.5 }, { id: 13, sub: 'Joe Brown Arrested', list: 'List B', sentdate: '16 Aug, 2017 9.30 AM', openrate: 26, openpercent: 13.5, clickrate: 116, clickpercent: 12, unsubrate: 29, unsubpercent: 1.1 }, { id: 14, sub: 'Trump goes Ballistic', list: 'List C', sentdate: '13 Aug, 2017 9.30 AM', openrate: 12, openpercent: 2.5, clickrate: 36, clickpercent: 50, unsubrate: 2, unsubpercent: 0.1 }];

	}

	getDraftCampaignData() {

		return [{ id: 1, sub: 'Joe Brown Arrested', list: 'List F', sentdate: '16 Aug, 2017 9.30 AM', openrate: 326, openpercent: 13.5, clickrate: 116, clickpercent: 12, unsubrate: 29, unsubpercent: 1.1 }];

	}
	

	getScheduledCampaignData() {

		return [];

	}


	getSuspendedCampaignData() {

		return [{ id: 32, sub: 'Todays Era', list: 'List A', sentdate: '19 Aug, 2017 9.30 AM', openrate: 126, openpercent: 23.5, clickrate: 16, clickpercent: 2.5, unsubrate: 21, unsubpercent: 0.5 }, { id: 313, sub: 'Trump on the Rampage', list: 'List B', sentdate: '16 Aug, 2017 9.30 AM', openrate: 26, openpercent: 13.5, clickrate: 116, clickpercent: 12, unsubrate: 29, unsubpercent: 1.1 }, { id: 14, sub: 'Trump goes Ballistic', list: 'List C', sentdate: '13 Aug, 2017 9.30 AM', openrate: 12, openpercent: 2.5, clickrate: 36, clickpercent: 50, unsubrate: 2, unsubpercent: 0.1 }];

	}


	getRunningCampaignData() {

		return [];

	}

	getArchivedCampaignData() {

		return [{ id: 319, sub: 'Football Now', list: 'List A', sentdate: '19 Aug, 2017 9.30 AM', openrate: 126, openpercent: 23.5, clickrate: 16, clickpercent: 2.5, unsubrate: 21, unsubpercent: 0.5 }, { id: 313, sub: 'Joe Brown Released', list: 'List X', sentdate: '16 Aug, 2017 9.30 AM', openrate: 26, openpercent: 13.5, clickrate: 116, clickpercent: 12, unsubrate: 29, unsubpercent: 1.1 }, { id: 14, sub: 'Trump goes Ballistic', list: 'List C', sentdate: '13 Aug, 2017 9.30 AM', openrate: 12, openpercent: 2.5, clickrate: 36, clickpercent: 50, unsubrate: 2, unsubpercent: 0.1 }];

	}
}