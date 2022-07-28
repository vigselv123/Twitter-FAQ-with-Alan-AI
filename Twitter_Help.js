// Use this sample to create your own voice commands
intent('What is twitter', p => {
  p.play('Twitter is a service for friends, family, and coworkers to communicate and stay connected through the exchange of quick, frequent messages. People post Tweets, which may contain photos, videos, links, and text. These messages are posted to your profile, sent to your followers, and are searchable on Twitter search. Learn more about how to use Twitter.');


    
});

intent('Do I need anything special to use it', p => {
    p.play('All you need to use Twitter is an internet connection or a mobile phone. Join us here! Once you are in, begin finding and following accounts whose Tweets interest you. We will recommend great accounts once you are signed up.');
});


intent("What's a Tweet?", p => {
    p.play('A Tweet is any message posted to Twitter which may contain photos, videos, links, and text. Click or tap the Tweet button to post the update to your profile. Read our Posting a Tweet article for more information.');

           });

intent("What's a Retweet?", p => {
    p.play('A Retweet is a Tweet that you forward to your followers.');
});

intent('How can I send updates to Twitter?', p => {
    p.play('Read our article about how to post a Tweet. You can Tweet from twitter.com, a mobile device, or an application.');
});



intent('How do I post a picture to Twitter?', p => {
    p.play('Uploading and sharing images on Twitter is easy! Find step-by-step instructions and FAQs on how to post a picture on Twitter.');
});


intent("Can I edit a Tweet once I've posted it?", p => {
    p.play("No, you can’t edit a Tweet once you have posted it, but you can delete your Tweet.");
});
intent("How to customize your view", p => {
    p.play('To manage your font size, text color and background mode via twitter.com, click on More  then select Display from the menu. Choose your preferred font size and color. Use the radio buttons to choose between the default white background or the two dark mode options Dim and Lights Out. Dark mode options are also available on Twitter for iOS and Twitter for Android.');
});
intent("Who reads my updates?", p => {
    p.play("Your followers read your Tweets. If your Tweets are public, anyone who runs a search for a keyword in your Tweet may be able to see that message. Your Tweets are public by default; if you're hesitant to have people you may not know read your updates, protect your Tweets to approve followers and keep your updates out of search.");
});
intent("Can I put my Twitter updates on my blog?", p => {
    p.play('Yes! Put a Twitter widget on your blog or website – anywhere that accepts Javascript or HTML.');
});
intent("Why can't I see all my Tweets? Are they lost?", p => {
    p.play('We store all your Tweets. Navigate to your profile to view up to 3,200 of your most recent Tweets in your profile timeline. To view more, you can download your Twitter Archive and browse a snapshot of your Twitter information, starting with your first Tweet.');
});

intent("What does it mean to follow someone on Twitter?", p => {
    p.play("Following someone means you've chosen to subscribe to their Twitter updates. When you follow someone, every time they post a new message, it will appear on your Twitter Home timeline.");
});
intent("How do I find people to follow?", p => {
    p.play("When you create an account, you can search for people by name or username, import friends from other networks, or invite friends via email.");
});
intent("How do I know who I'm following?", p => {
    p.play("After you click or tap the Follow button on someone's profile, you're following them. See a list of people you're following by clicking on the following link on your profile page or on your home page's sidebar.");
});
intent("How do I know who is following me?", p => {
    p.play("Twitter sends you a notification when someone new follows you. Set up your email preferences and mobile push notifications to notify you when you have a new follower. The Followers link on your profile page will also tell you who is following you.");
});
intent("What are follow limits?", p => {
    p.play("Twitter has follow and update limits for stability and abuse control. Learn more about follow limits.");
});
intent("What are replies?", p => {
    p.play("A reply is a response to another person’s Tweet. Click or tap the reply icon  on another person's Tweet to reply to it. Please note that if your Tweets are protected, people who are not following you will not see your replies or mentions. ");
});
intent("What is the difference between a reply and a Direct Message?", p => {
    p.play("A reply is a public message sent regardless of follow-ship. Anyone can view it (if your Tweets are public). A Direct Message is a private message, and can only be seen by the sender and intended recipients.");
});
intent("What are Direct Messages?", p => {
    p.play("Direct Messages are private messages sent from one Twitter account to other Twitter account(s), and they do not appear in public for anyone else to read. You can start a conversation with anyone who follows you.");
});
intent("Why are accounts suspended?", p => {
    p.play("Accounts are suspended for Terms of Service violations or spam investigation. Read more about account suspension.");
});
intent("How do I report spam?", p => {
    p.play("Read our article about how to report spam on Twitter. We encourage you to always block any spammers you find.");
});
intent("Where can I find out more information about Twitter's Terms of Service?", p => {
    p.play("Read Twitter's Terms of Service and the Twitter Rules for more information.");
});

intent("How do I submit a complaint about copyright, impersonation, trademark, or other Terms of Service issues?", p => {
    p.play("Review our Terms of Service section to find out what constitutes a violation, and how to go about fixing a related problem.");
});

intent("What can you do?", p => {
    p.play("Ask one of the FAQ questions and I will give the answer");
});





//Alan popup on first time user clicks button

onUserEvent((p, e) => {
    console.info('EVENT', e.event);
    if (e.event == 'firstActivate') {
        p.showPopup({
            html:'<div class="info-popup"> <div class="info-popup_header"><object type="image/svg+xml" class="bot-image" data="https://alan.app/docs/_static/assets/img/script-concepts/popup2.svg" alt="Created by vectorjuice - freepik.com"/></object> <div class="buble">Ask me a question</br>or say</br> <span style="font-size:12px; color:#BD10E0; font-weight:800">"What can you do?"</span></div><div class="info-popup_pointer-button grey-arrow"></div></div></div>',
            style:".bot-image{width:250px;height:250px;margin-left: 4px;margin-top:-20px}.info-popup{background:linear-gradient(.45turn,#efefef,#fff);max-width:394px;height:280px;width:400px;max-height:280px;-webkit-box-shadow:0 5px 14px rgba(0,0,0,.25);box-shadow:0 5px 14px rgba(0,0,0,.25);overflow:hidden;border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.info-popup_header{position:relative;display:flex;height:100%;width:100%;color:#000;font-size:13px;font-weight:700;padding-top:48px;padding-right:18px;text-align:center;background:linear-gradient(102.76deg,#fbf7f7 2.32%,#e0e4e9 94.85%);background-repeat:no-repeat;background-position:center center;background-size:100% 100%}.info-popup_pointer-button{margin:22px auto 10px}.buble{min-width:186px;width:186px;height:104px;background-image:url(https://alan.app/docs/_static/assets/img/script-concepts/bubble.svg);background-repeat:no-repeat;background-size:100% auto;padding-left:28px;padding-top:18px;font-size:13px;line-height:20px;position:absolute;top:25px;right:29px}.grey-arrow{background-image:url(https://alan.app/docs/_static/assets/img/script-concepts/grey_arrow.svg);background-repeat:no-repeat;background-size:100% auto;-webkit-transform:rotate(357deg);-ms-transform:rotate(357deg);transform:rotate(357deg);width:104px;height:62px;position:absolute;bottom:14px;right:95px}.alan-overlay-popup__ok{background:none; opacity:0.3; color:#000}.alan-overlay-popup__ok:before{content:'✕';position: absolute;top:0;left:0;width:100%;height:100%;font-size:13px;color:#bfbfbf; opacity:1 !important}",
            overlay: true,
            buttonMarginInPopup: 15,
            force: false,
        });
    }
});
