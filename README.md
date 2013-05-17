Autolike.js
===========
A bookmarklet for automatically liking each post on any facebook wall.

Instructions
============
- Copy the code from autolike.js and put it in a bookmark in your bookmarks toolbar
 - Or you can drag this link straight to your bookmarks toolbar: <a href="javascript:var%20delay=2000;function%20like(){elem=like_links[cnt];if(elem==undefined){clearInterval(timer);return}cnt++;elem.scrollIntoView(false);elem.style.backgroundColor='#00FF00';elem.click()}var%20cnt=0;var%20links=document.getElementsByTagName('a');var%20like_links=new%20Array;for(i%20in%20links){if(links[i].className=='UFILikeLink'&&links[i].title=='Like%20this'){like_links.push(links[i])}}timer=setInterval(like,delay);void%200" title="Autolike This">Autolike this</a>
- Go to a facebook page
- Click the bookmarklet and watch as each post is automatically 'liked'!
- Go get a burrito to celebrate and think about all the time and critical brain power you'll save by indiscriminately liking every facebook post you come across. Let Autolike.js do it's job while you do important non-facebook related tasks.

Features
========
- Likes links one at a time, with a definable delay between each like (so you don't get banned!)
- Scrolls the page automatically, so you can see what's happening and this also will load more posts so you can like things forever!
- Turns each 'like'd link green so you can see it's working

Configuration
=============
- The default delay is set to 2.0 seconds, which seems to be long enough to no automatically get moderated by the facebook system
- Change the delay by changing var%20delay=2000 to a different number of milliseconds

Notes
=====
- Use at your own risk!
- If you like things too fast facebook will put you on timeout where you will not be able to like anything for up to two days!