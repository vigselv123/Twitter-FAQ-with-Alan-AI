
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].onclick = function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  };
}








var alanBtnInstance = alanBtn({
    key: "26d8bda587531d402e4e963d32cdecb42e956eca572e1d8b807a3e2338fdd0dc/stage",

    onCommand: function (commandData) { 
      if (commandData.command === 'twit') {
  document.getElementById("Q1").click() 
  }
    if (commandData.command === 'special') {
    document.getElementById("Q2").click()
  }
  if (commandData.command === 'tweet') {
    document.getElementById("Q3").click()
  }
  if (commandData.command === 'updates') {
    document.getElementById("Q4").click()
  }
  if (commandData.command === 'retweet') {
    document.getElementById("Q5").click()
  }
  if (commandData.command === 'picture') {
    document.getElementById("Q6").click()
  }
  if (commandData.command === 'edit') {
    document.getElementById("Q7").click()
  }
  if (commandData.command === 'customize') {
    document.getElementById("Q8").click()
  }
  if (commandData.command === 'whoReads') {
    document.getElementById("Q9").click()
  }
  if (commandData.command === 'allTweets') {
    document.getElementById("Q10").click()
  }
  if (commandData.command === 'blog') {
    document.getElementById("Q11").click()
  }
  if (commandData.command === 'follow') {
    document.getElementById("Q12").click()
  }
  if (commandData.command === 'findPeople') {
    document.getElementById("Q13").click()
  }
  if (commandData.command === 'following') {
    document.getElementById("Q14").click()
  }
  if (commandData.command === 'followingMe') {
    document.getElementById("Q15").click()
  }
  if (commandData.command === 'followLimits') {
    document.getElementById("Q16").click()
  }
  if (commandData.command === 'replies') {
    document.getElementById("Q17").click()
  }
  if (commandData.command === 'difference') {
    document.getElementById("Q18").click()
  }
  if (commandData.command === 'messages') {
    document.getElementById("Q19").click()
  }
  if (commandData.command === 'suspended') {
    document.getElementById("Q20").click()
  }
  if (commandData.command === 'report') {
    document.getElementById("Q21").click()
  }
  if (commandData.command === 'TOS') {
    document.getElementById("Q22").click()
  }
  if (commandData.command === 'complaint') {
    document.getElementById("Q23").click()
  }
  if (commandData.command === 'postTweetHyperlink') {
    window.location.assign("https://help.twitter.com/en/using-twitter/how-to-tweet"); 
  }
  if (commandData.command === 'followersHyperlink') {
    window.location.assign("https://help.twitter.com/en/using-twitter/following-faqs"); 
  }
  if (commandData.command === 'retweetHyperlink') {
    window.location.assign("https://help.twitter.com/en/using-twitter/retweet-faqs"); 
  }
  if (commandData.command === 'deleteHyperlink') {
    window.location.assign("https://help.twitter.com/en/using-twitter/delete-tweets"); 
  }
  if (commandData.command === 'protectHyperlink') {
    window.location.assign("https://help.twitter.com/en/safety-and-security/public-and-protected-tweets"); 
  }
  if (commandData.command === 'archiveHyperlink') {
    window.location.assign("https://help.twitter.com/en/managing-your-account/how-to-download-your-twitter-archive"); 
  }
  if (commandData.command === 'widgetHyperlink') {
    window.location.assign("https://help.twitter.com/en/using-twitter/embed-twitter-feed"); 
  }
  if (commandData.command === 'searchHyperlink') {
    window.location.assign("https://twitter.com/who_to_follow/suggestions"); 
  }
  if (commandData.command === 'followingHyperlink') {
    window.location.assign("https://twitter.com/#!/following"); 
  }
  if (commandData.command === 'replyHyperlink') {
    window.location.assign("https://help.twitter.com/en/using-twitter/mentions-and-replies"); 
  }
  if (commandData.command === 'messageHyperlink') {
    window.location.assign("https://help.twitter.com/en/using-twitter/direct-messages"); 
  }
  if (commandData.command === 'tosHyperlink') {
    window.location.assign("https://twitter.com/tos?lang=en"); 
  }

  if (commandData.command === 'spamHyperlink') {
    window.location.assign("https://help.twitter.com/en") 
  }

  if (commandData.command === 'emailHyperlink') {
    window.location.assign("https://help.twitter.com/en/managing-your-account/updating-email-preferences") 
  }
  if (commandData.command === 'mobileHyperlink') {
    window.location.assign("https://help.twitter.com/en/managing-your-account/notifications-on-mobile-devices") 
  }
  if (commandData.command === 'followersHyperlink') {
    window.location.assign("https://twitter.com/followers") 
  }
  if (commandData.command === 'limitHyperlink') {
    window.location.assign("https://help.twitter.com/en/rules-and-policies/twitter-limits") 
  }
  if (commandData.command === 'rulesHyperlink') {
    window.location.assign("https://help.twitter.com/content/help-twitter/en/rules-and-policies/twitter-rules") 
  }
  if (commandData.command === 'sectionHyperlink') {
    window.location.assign("https://help.twitter.com/en/rules-and-policies/twitter-trademark-policy") 
  }
     
  if (commandData.command === 'suspensionHyperlink') {
    window.location.assign("https://help.twitter.com/content/help-twitter/en/managing-your-account/suspended-twitter-accounts") 
  }
      },
   
      
  
       
    rootEl: document.getElementById("alan-btn"),
  });

 


