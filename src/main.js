var getInfo = function(scratcher) {
	var http = {
		
		// HTTP GET Request function
		get: function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},
		
		// HTML POST Request function WIP
		post: function(e,t,n){var o="string"==typeof t?t:Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"),s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return s.open("POST",e),s.onreadystatechange=function(){s.readyState>3&&200==s.status&&n(s.responseText)},s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(o),s}
	};

	// Scratcher's basic info
	var data = JSON.parse(http.get('https://cors-everywhere.herokuapp.com/api.scratch.mit.edu/users/' + scratcher));
	var fp = http.get('https://cors-everywhere.herokuapp.com/scratch.mit.edu/users/' + scratcher + '/followers');
	var fi = http.get('https://cors-everywhere.herokuapp.com/scratch.mit.edu/users/' + scratcher + '/following');

	Scratch = {};
	// List of ISO 3166-1 a2 countries and their codes
	Scratch.countries = {'Afghanistan':'AF','Aland Islands':'AX','Albania':'AL','Algeria':'DZ','American Samoa':'AS','Andorra':'AD','Angola':'AO','Anguilla':'AI','Antarctica':'AQ','Antigua And Barbuda':'AG','Argentina':'AR','Armenia':'AM','Aruba':'AW','Australia':'AU','Austria':'AT','Azerbaijan':'AZ','Bahamas':'BS','Bahrain':'BH','Bangladesh':'BD','Barbados':'BB','Belarus':'BY','Belgium':'BE','Belize':'BZ','Benin':'BJ','Bermuda':'BM','Bhutan':'BT','Bolivia':'BO','Bosnia And Herzegovina':'BA','Botswana':'BW','Bouvet Island':'BV','Brazil':'BR','British Indian Ocean Territory':'IO','Brunei Darussalam':'BN','Bulgaria':'BG','Burkina Faso':'BF','Burundi':'BI','Cambodia':'KH','Cameroon':'CM','Canada':'CA','Cape Verde':'CV','Cayman Islands':'KY','Central African Republic':'CF','Chad':'TD','Chile':'CL','China':'CN','Christmas Island':'CX','Cocos (Keeling) Islands':'CC','Colombia':'CO','Comoros':'KM','Congo':'CG','Congo, Democratic Republic':'CD','Cook Islands':'CK','Costa Rica':'CR','Cote D\'Ivoire':'CI','Croatia':'HR','Cuba':'CU','Cyprus':'CY','Czech Republic':'CZ','Denmark':'DK','Djibouti':'DJ','Dominica':'DM','Dominican Republic':'DO','Ecuador':'EC','Egypt':'EG','El Salvador':'SV','Equatorial Guinea':'GQ','Eritrea':'ER','Estonia':'EE','Ethiopia':'ET','Falkland Islands':'FK','Faroe Islands':'FO','Fiji':'FJ','Finland':'FI','France':'FR','French Guiana':'GF','French Polynesia':'PF','French Southern Territories':'TF','Gabon':'GA','Gambia':'GM','Georgia':'GE','Germany':'DE','Ghana':'GH','Gibraltar':'GI','Greece':'GR','Greenland':'GL','Grenada':'GD','Guadeloupe':'GP','Guam':'GU','Guatemala':'GT','Guernsey':'GG','Guinea':'GN','Guinea-Bissau':'GW','Guyana':'GY','Haiti':'HT','Heard Island & Mcdonald Islands':'HM','Holy See (Vatican City State)':'VA','Honduras':'HN','Hong Kong':'HK','Hungary':'HU','Iceland':'IS','India':'IN','Indonesia':'ID','Iran, Islamic Republic Of':'IR','Iraq':'IQ','Ireland':'IE','Isle Of Man':'IM','Israel':'IL','Italy':'IT','Jamaica':'JM','Japan':'JP','Jersey':'JE','Jordan':'JO','Kazakhstan':'KZ','Kenya':'KE','Kiribati':'KI','Korea':'KR','Kuwait':'KW','Kyrgyzstan':'KG','Lao People\'s Democratic Republic':'LA','Latvia':'LV','Lebanon':'LB','Lesotho':'LS','Liberia':'LR','Libyan Arab Jamahiriya':'LY','Liechtenstein':'LI','Lithuania':'LT','Luxembourg':'LU','Macao':'MO','Macedonia':'MK','Madagascar':'MG','Malawi':'MW','Malaysia':'MY','Maldives':'MV','Mali':'ML','Malta':'MT','Marshall Islands':'MH','Martinique':'MQ','Mauritania':'MR','Mauritius':'MU','Mayotte':'YT','Mexico':'MX','Micronesia, Federated States Of':'FM','Moldova':'MD','Monaco':'MC','Mongolia':'MN','Montenegro':'ME','Montserrat':'MS','Morocco':'MA','Mozambique':'MZ','Myanmar':'MM','Namibia':'NA','Nauru':'NR','Nepal':'NP','Netherlands':'NL','Netherlands Antilles':'AN','New Caledonia':'NC','New Zealand':'NZ','Nicaragua':'NI','Niger':'NE','Nigeria':'NG','Niue':'NU','Norfolk Island':'NF','Northern Mariana Islands':'MP','Norway':'NO','Oman':'OM','Pakistan':'PK','Palau':'PW','Palestinian Territory, Occupied':'PS','Panama':'PA','Papua New Guinea':'PG','Paraguay':'PY','Peru':'PE','Philippines':'PH','Pitcairn':'PN','Poland':'PL','Portugal':'PT','Puerto Rico':'PR','Qatar':'QA','Reunion':'RE','Romania':'RO','Russian Federation':'RU','Rwanda':'RW','Saint Barthelemy':'BL','Saint Helena':'SH','Saint Kitts And Nevis':'KN','Saint Lucia':'LC','Saint Martin':'MF','Saint Pierre And Miquelon':'PM','Saint Vincent And Grenadines':'VC','Samoa':'WS','San Marino':'SM','Sao Tome And Principe':'ST','Saudi Arabia':'SA','Senegal':'SN','Serbia':'RS','Seychelles':'SC','Sierra Leone':'SL','Singapore':'SG','Slovakia':'SK','Slovenia':'SI','Solomon Islands':'SB','Somalia':'SO','South Africa':'ZA','South Georgia And Sandwich Isl.':'GS','Spain':'ES','Sri Lanka':'LK','Sudan':'SD','Suriname':'SR','Svalbard And Jan Mayen':'SJ','Swaziland':'SZ','Sweden':'SE','Switzerland':'CH','Syrian Arab Republic':'SY','Taiwan':'TW','Tajikistan':'TJ','Tanzania':'TZ','Thailand':'TH','Timor-Leste':'TL','Togo':'TG','Tokelau':'TK','Tonga':'TO','Trinidad And Tobago':'TT','Tunisia':'TN','Turkey':'TR','Turkmenistan':'TM','Turks And Caicos Islands':'TC','Tuvalu':'TV','Uganda':'UG','Ukraine':'UA','United Arab Emirates':'AE','United Kingdom':'GB','United States':'US','United States Outlying Islands':'UM','Uruguay':'UY','Uzbekistan':'UZ','Vanuatu':'VU','Venezuela':'VE','Vietnam':'VN','Virgin Islands, British':'VG','Virgin Islands, U.S.':'VI','Wallis And Futuna':'WF','Western Sahara':'EH','Yemen':'YE','Zambia':'ZM','Zimbabwe':'ZW'};
	
	// Convert ISO 3166-1 a2 to ISO 3166-1 a3
	Scratch.two2three = {'AF':'AFG','AX':'ALA','AL':'ALB','DZ':'DZA','AS':'ASM','AD':'AND','AO':'AGO','AI':'AIA','AQ':'ATA','AG':'ATG','AR':'ARG','AM':'ARM','AW':'ABW','AU':'AUS','AT':'AUT','AZ':'AZE','BS':'BHS','BH':'BHR','BD':'BGD','BB':'BRB','BY':'BLR','BE':'BEL','BZ':'BLZ','BJ':'BEN','BM':'BMU','BT':'BTN','BO':'BOL','BQ':'BES','BA':'BIH','BW':'BWA','BV':'BVT','BR':'BRA','IO':'IOT','BN':'BRN','BG':'BGR','BF':'BFA','BI':'BDI','CV':'CPV','KH':'KHM','CM':'CMR','CA':'CAN','KY':'CYM','CF':'CAF','TD':'TCD','CL':'CHL','CN':'CHN','CX':'CXR','CC':'CCK','CO':'COL','KM':'COM','CG':'COG','CD':'COD','CK':'COK','CR':'CRI','CI':'CIV','HR':'HRV','CU':'CUB','CW':'CUW','CY':'CYP','CZ':'CZE','DK':'DNK','DJ':'DJI','DM':'DMA','DO':'DOM','EC':'ECU','EG':'EGY','SV':'SLV','GQ':'GNQ','ER':'ERI','EE':'EST','ET':'ETH','FK':'FLK','FO':'FRO','FJ':'FJI','FI':'FIN','FR':'FRA','GF':'GUF','PF':'PYF','TF':'ATF','GA':'GAB','GM':'GMB','GE':'GEO','DE':'DEU','GH':'GHA','GI':'GIB','GR':'GRC','GL':'GRL','GD':'GRD','GP':'GLP','GU':'GUM','GT':'GTM','GG':'GGY','GN':'GIN','GW':'GNB','GY':'GUY','HT':'HTI','HM':'HMD','VA':'VAT','HN':'HND','HK':'HKG','HU':'HUN','IS':'ISL','IN':'IND','ID':'IDN','IR':'IRN','IQ':'IRQ','IE':'IRL','IM':'IMN','IL':'ISR','IT':'ITA','JM':'JAM','JP':'JPN','JE':'JEY','JO':'JOR','KZ':'KAZ','KE':'KEN','KI':'KIR','KP':'PRK','KR':'KOR','KW':'KWT','KG':'KGZ','LA':'LAO','LV':'LVA','LB':'LBN','LS':'LSO','LR':'LBR','LY':'LBY','LI':'LIE','LT':'LTU','LU':'LUX','MO':'MAC','MK':'MKD','MG':'MDG','MW':'MWI','MY':'MYS','MV':'MDV','ML':'MLI','MT':'MLT','MH':'MHL','MQ':'MTQ','MR':'MRT','MU':'MUS','YT':'MYT','MX':'MEX','FM':'FSM','MD':'MDA','MC':'MCO','MN':'MNG','ME':'MNE','MS':'MSR','MA':'MAR','MZ':'MOZ','MM':'MMR','NA':'NAM','NR':'NRU','NP':'NPL','NL':'NLD','NC':'NCL','NZ':'NZL','NI':'NIC','NE':'NER','NG':'NGA','NU':'NIU','NF':'NFK','MP':'MNP','NO':'NOR','OM':'OMN','PK':'PAK','PW':'PLW','PS':'PSE','PA':'PAN','PG':'PNG','PY':'PRY','PE':'PER','PH':'PHL','PN':'PCN','PL':'POL','PT':'PRT','PR':'PRI','QA':'QAT','RE':'REU','RO':'ROU','RU':'RUS','RW':'RWA','BL':'BLM','SH':'SHN','KN':'KNA','LC':'LCA','MF':'MAF','PM':'SPM','VC':'VCT','WS':'WSM','SM':'SMR','ST':'STP','SA':'SAU','SN':'SEN','RS':'SRB','SC':'SYC','SL':'SLE','SG':'SGP','SX':'SXM','SK':'SVK','SI':'SVN','SB':'SLB','SO':'SOM','ZA':'ZAF','GS':'SGS','SS':'SSD','ES':'ESP','LK':'LKA','SD':'SDN','SR':'SUR','SJ':'SJM','SZ':'SWZ','SE':'SWE','CH':'CHE','SY':'SYR','TW':'TWN','TJ':'TJK','TZ':'TZA','TH':'THA','TL':'TLS','TG':'TGO','TK':'TKL','TO':'TON','TT':'TTO','TN':'TUN','TR':'TUR','TM':'TKM','TC':'TCA','TV':'TUV','UG':'UGA','UA':'UKR','AE':'ARE','GB':'GBR','US':'USA','UM':'UMI','UY':'URY','UZ':'UZB','VU':'VUT','VE':'VEN','VN':'VNM','VG':'VGB','VI':'VIR','WF':'WLF','EH':'ESH','YE':'YEM','ZM':'ZMB','ZW':'ZWE'};
	
	// Timeago function made by @csf30816
	Scratch.timeago = function(e,s,a){s=s||days,a=a||new Date;var t=Date.parse(a)-Date.parse(e),n={centuries:31536e8,decades:31536e7,years:31556952e3,months:2629746e3,weeks:604800000,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1};return t/n[s]};
	var info = {
		id: data.id, // Scratcher's SID
		joined: data.history.joined, // Date Scratcher joined Scratch
		joined_data: { // Special %method's ago from date joined
			centuries_ago: Scratch.timeago(data.history.joined, 'centuries'),
			decades_ago: Scratch.timeago(data.history.joined, 'decades'),
			years_ago: Scratch.timeago(data.history.joined, 'years'),
			months_ago: Scratch.timeago(data.history.joined, 'months'),
			weeks_ago: Scratch.timeago(data.history.joined, 'weeks'),
			days_ago: Scratch.timeago(data.history.joined, 'days'),
			hours_ago: Scratch.timeago(data.history.joined, 'hours'),
			minutes_ago: Scratch.timeago(data.history.joined, 'minutes'),
			seconds_ago: Scratch.timeago(data.history.joined, 'seconds'),
			millis_ago: Scratch.timeago(data.history.joined, 'milliseconds'),
		},
		messages: JSON.parse(http.get('https://api.scratch.mit.edu/proxy/users/' + scratcher + '/activity/count')).msg_count, // Scratcher's message count
		avatars: data.profile.images, // Scratcher's avatar's
		about_me: data.profile.bio, // Scratcher's "About me"
		working_on: data.profile.status, // Scratcher's "What I am working on"
		country: data.profile.country, // Scratcher's country
		country_code: {
			ISO_3166_a2: Scratch.countries[data.profile.country], // Scratcher's country code (ISO 3166-1 a2)
			ISO_3166_a3: Scratch.two2three[Scratch.countries[data.profile.country]] // Scratcher's country code (ISO 3166-1 a3)
		},
		follower_data: {
			num: parseInt(fp.substring(fp.search('Followers '), fp.search('Followers ') + 20).replace('Followers (', '').replace(')', '')),
			pages: Math.ceil(parseInt(fp.substring(fp.search('Followers '), fp.search('Followers ') + 20).replace('Followers (', '').replace(')', '')) / 60),
		},
		following_data: {
			num: parseInt(fi.substring(fi.search('Following '), fi.search('Following ') + 20).replace('Following (', '').replace(')', '')),
			pages: Math.ceil(parseInt(fi.substring(fi.search('Following '), fi.search('Following ') + 20).replace('Following (', '').replace(')', '')) / 60)
		},
	};
	return info;
};
