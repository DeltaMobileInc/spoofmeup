/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener("backbutton",  this.backButtonEvent, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		
        //console.log("device ready fired");
    },
	//back button event
	backButtonEvent : function(){
	
			 	
			 if (activePageId == "spoofHomePage") {
	                
	                var didConfirm = confirm("Are you sure you want to exit?");
	                if (didConfirm === true) {
	                	//exit App here
						navigator.app.exitApp();
	                   
	                }
	               
	            }else if(activePageId == "spoofMenuPage"){
	            	window.location.href = "index.html";
	            	
	            }
	            else {
	                if (typeof (navigator.app) !== "undefined") {
	                    navigator.app.backHistory();
	                }
	                else {
	                    history.back();
	                }
	            }
	            return false;
	},
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {			
       //alert ("device ready");
	   app.adSetter();
       //console.log('Received Event: ' + id);
    },
	
	//ad mob ads
	adSetter : function(){
		
		//alert("adSetter");
			if(admob){
				var adPublisherIds = {
					android :{
						banner : "ca-app-pub-7431249322290483/5894175856",
						interstitial :"ca-app-pub-7431249322290483/7370909058"
					
					},
					ios :{
						banner : "ca-app-pub-7431249322290483/5894175856",
						interstitial :"ca-app-pub-7431249322290483/7370909058"
					
					}
				
				};
				
				
				var admobid = (/(android)/i.test(navigator.useragent)) ? adPublisherIds.android : adPublisherIds.ios;
				
				admob.setOptions({
					publisherId : admobid.banner,
					interstitialAdId : admobid.interstitial
				
				});
				admob.createBannerView();
				
			}else {
				//if no admob
			
			}
		
		
		
	}
};




/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



 $( document ).ready(function() {
    console.log( "ready!" );
   // apply overrides here
   // Handler for .ready() called.
   $.mobile.phonegapNavigationEnabled = true;
   $.mobile.allowCrossDomainPages = true;
  	spoofup.home.init();
	
}); 
  
var spoofup = {};


spoofup.home = function()
{			var spoof_data = {};	
			spoof_data.youtube_base_api = "https://www.googleapis.com/youtube/v3/";
			spoof_data.tvf_palylistid = "PLTB0eCoUXErb4EZL6dL_xPfGeHyge-Z2A";
			spoof_data.tvf_channelid  = "UCNJcSUSzUeFm8W9P7UUlSeQ";
			
			spoof_data.sde_channelid  = "UCF-aIi0zXNwZZucGtWk4pug";
			spoof_data.SDE_Playlistid = "PLvBmlvO_JMlTkihta0UqrTR7oXYCUR5XG";
			
			spoof_data.TotalBc_Playlistid = "PLmRuqEEuysVcZ_8S27uT4RBHaKGpXl4JZ";
			spoof_data.maniakiduniya_channelid  = "UCQUZV73fh96v6itGV1tZHUQ";
			
			spoof_data.AIB_Playlistid = "PLF05eR2VJLBmv4gY1v3513gDve1lGm2YY";
			spoof_data.AIB_channelid  = "UCzUYuC_9XdUUdrnyLii8WYg";
			
			spoof_data.userkey  = "AIzaSyDFYMGu-wC9oFOGPiLAnMcXHNSY27FrpR4";
			spoof_data.max_result = "50";

				
			//Function to load on specific page load
			$(document).on("pagecontainershow", function () {
				var activePage = $.mobile.pageContainer.pagecontainer("getActivePage");

			  activePageId = activePage[0].id;
				switch (activePageId) {
					case 'spoofHomePage':
						console.log("spoofHomePage");
							$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
						// remove isMenu 
						localStorage.setItem("isMenu","");
						loadvideos("TVF_Playlist");
				        loadvideos("SDE_Playlist");
						loadvideos("AIB_Playlist");
				        loadvideos("TotalBc_Playlist");
						break;
					case 'spoofMenuPage':
					console.log("tvftohome");
					$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
					loadvideos('Page-Menu');
						break;
					case 'videoPlayBack':
					console.log("tvftohome");
					$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
					loadvideos('loadVideoPlayBack',window.localStorage.getItem("playlistIdIs"));
						break;
					case 'PlayVideo':
					console.log("PlayVideo");
					$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
						//Playing video
					    playVideo(window.localStorage.getItem("videoId"));
						break;
					default:
				}
			});  
			//change page 
			$(document).on('click','#toMenuPage',function(e){
				console.log(e.currentTarget.dataset.ismenu);
				var isMenu = e.currentTarget.dataset.ismenu;
				localStorage.setItem("isMenu","");
				$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
				switch(isMenu)
				{
					case 'tvfMenu' :				
					localStorage.setItem("isMenu",isMenu);
							break;
					case 'sdeMenu' :
					localStorage.setItem("isMenu",isMenu);
							break;
					case 'totalBcMenu' :
					localStorage.setItem("isMenu",isMenu);
							break;
					case 'aibMenu' :
					localStorage.setItem("isMenu",isMenu);
							break;
					default:		
				}
				//redirecting home page to menu page
				window.location.href = "Menu.html";
				});
			//Back
			$('#tvftohome').on('click',function(){
				$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
				window.location.href = "index.html";
			});
			$('#toMenu').on('click',function(){
				$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
				window.location.href = "Menu.html";
			});
			$('#toplaylistpage').on('click',function(){
				$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
				window.location.href = "VideoPlayback.html";
			});
			
			//list click on menu page
			$('#spoof-menu-list').on('click','li',function(){ 
				localStorage.setItem("playlistIdIs","");	
				localStorage.setItem("playlistIdIs",this.firstChild.dataset.hasid);	
				$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
				window.location.href = "VideoPlayback.html";
				//			
				});
			//list click on video play back page
			$('#list-playvideo').on('click','li',function(){ 				
			    localStorage.setItem("videoId","");	
				localStorage.setItem("videoId",this.firstChild.dataset.hasvideoid);
				$.mobile.loading( "show", {
								  text: "Loading...",
								  textVisible: true,
								   textonly : true,
								  theme: "b",
								  html: ""
								});
				window.location.href = "PlayVideo.html";
				});

			$('#ui-app-delete').on('click',function(){

					var didConfirm = confirm("Are you sure you want to exit?");
	                if (didConfirm === true) {
	                	//exit App here
						navigator.app.exitApp();
	                   
	                }

			});
			
			
	//main function
	var load_data = function(){	
			console.log("data loading....")	;
			//applying carousel to divs
			$('.my-carousel').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 6000
			});		  	
			
		};
	//load best videos youtube	
	var	loadvideos = function(_videoOf,_id)
	{		
		var isId = "";
		var appendCardsTo = "";
		var options = "";
		var part = "part=snippet,contentDetails";
		var ofID = "";
		var iscase = ""
		if(_videoOf == 'TVF_Playlist'){
			isId = spoof_data.tvf_palylistid;
			ofID ="&playlistId";	
			appendCardsTo = ".my-tvf-div ";
			var part = "part=snippet,contentDetails";
			options = "playlistItems?";
			iscase = 1;
		}else if(_videoOf == 'SDE_Playlist'){
			isId = spoof_data.SDE_Playlistid;
			options = "playlistItems?";
			ofID ="&playlistId";	
			appendCardsTo = ".my-sde-div";
			var part = "part=snippet,contentDetails";
			iscase = 1;
		}else if(_videoOf == 'TotalBc_Playlist'){
			isId = spoof_data.TotalBc_Playlistid;
			options = "playlistItems?";
			ofID ="&playlistId";	
			appendCardsTo = ".my-totalbc-div";
			var part = "part=snippet,contentDetails";
			iscase = 1;
		}else if(_videoOf == 'AIB_Playlist'){
			isId = spoof_data.AIB_Playlistid;
			options = "playlistItems?";
			ofID ="&playlistId";	
			appendCardsTo = ".my-aib-div";
			var part = "part=snippet,contentDetails";
			iscase = 1;
		}else if(_videoOf == 'Page-Menu'){
			//console.log("Page Tvf in load videos");
			var part = "part=snippet,contentDetails";
			options = "playlists?";
			ofID = "channelId";
			isId = spoof_data.tvf_channelid;
			iscase = 2;
			var localMenu = window.localStorage.getItem("isMenu") ;
	        if(localMenu == "tvfMenu")
			{
				isId = spoof_data.tvf_channelid;
			}else if(localMenu == "sdeMenu")
			{
				isId = spoof_data.sde_channelid;
			}else if(localMenu == "totalBcMenu")
			{
				isId = spoof_data.maniakiduniya_channelid;
			}else if(localMenu == "aibMenu")
			{
				isId = spoof_data.AIB_channelid;
			}
			
		}else if(_videoOf ==  'loadVideoPlayBack'){
			isId = _id;
			ofID ="&playlistId";	
			appendCardsTo = ".my-tvf-div ";
			var part = "part=snippet,contentDetails";
			options = "playlistItems?";
			iscase = 3;
	
		}
		else{
			console.log("error from the ajax call");
		}
		

		
		  $.ajax(
         {
            type: 'GET',
            url: spoof_data.youtube_base_api+""+options+""+part+"&maxResults="+spoof_data.max_result+"&"+ofID+"="+isId+"&key="+spoof_data.userkey+"",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data)
            {
			  console.log("Loading list");
              window.channeldetail= data;
				//adding cards in the list
			    for (var i = 0; i < data.items.length; i++)
                  {	
			  
					if(iscase == 1)
					{
					 $(appendCardsTo).append('<div class="card"><div class="card-image"><img alt="home" src="'+data.items[i].snippet.thumbnails.high.url+'"><div class="banner"></div><h3>'+data.items[i].snippet.title+'</h3></div></div></div></div>');                 
					}else if(iscase == 2)
					{
						$('#spoof-menu-list').append('<li class= "ui-li-has-thumb ui-first-child"><a href="#" class ="ui-btn ui-btn-icon-right ui-icon-carat-r"  data-hasId = "'+data.items[i].id+'"><img src="'+data.items[i].snippet.thumbnails.default.url+'" style = "width:100% ; height : 100%"><h2>'+data.items[i].snippet.title+'</h2><p>'+data.items[i].snippet.channelTitle+'</p><span class="ui-li-count">'+data.items[i].contentDetails.itemCount+'</span></a></li>');
					}else if(iscase == 3) {
						$('#list-playvideo').append('<li class= "ui-li-has-thumb ui-first-child"><a href="#" class ="ui-btn  ui-icon-carat-r" data-hasVideoId = "'+data.items[i].contentDetails.videoId +'"><img src="'+data.items[i].snippet.thumbnails.default.url+'" style = "width:100% ; height : 100%"><h2>'+data.items[i].snippet.title+'</h2><p>'+data.items[i].snippet.channelTitle+'</p></a></li>');
									
					}
					
                  }
				      // appending carousel to cards
					  $(appendCardsTo).slick({
						   infinite: true,
							  slidesToShow: 2,
							  slidesToScroll: 1
					});	
					
					$.mobile.loading( "hide" );
            },
            error: function (err)
            {
			   console.log("error");
               console.log(err);
            }
         });
		
	
	
	};
	
	var playVideo = function(_videoID)
	{
		
			$('#player-1').player({
			 video: _videoID,
			});
		$.mobile.loading( "hide" );
	};
		
	return {
		  init: function ()
		  {

			 $(load_data);
		  }
	}


}();
