const ap = new APlayer({
    container: document.getElementById('aplayer'),
    //lrcType: 1,
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: "爱如潮水",
        artist: '张信哲',
        url: 'https://m801.music.126.net/20240114230849/4278582de446b0733e4679dfd3b6e43e/jdyyaac/565a/0e0b/540e/a018f512139a628140c5cdfb1bb47e72.m4a',
        cover: 'https://p1.music.126.net/xt_oovsCzByJNCVOZLWgkA==/2946691201348447.jpg?param=200y200',	

        
    },
     /** 
    {
        name: 'Ngay Tho (Remix)',
        artist: '无忧',
        url: 'https://m801.music.126.net/20240115004135/7a99a2eb2f00cbca9c53fcbf78cdb634/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/5415126558/0438/27e9/0261/fb50d2c575e99bee52e84fc65ee507eb.m4a',
        cover: 'https://p2.music.126.net/vveHW4P1RYjCo_YO20lcQg==/109951165562089246.jpg?param=200y200',
        //lrc: '[00:00.00]时间不会等谁 直到我意识到\n[00:00.30]爱情就像个愚蠢的笑话\n[00:00.33]还是你天真地相信我?\n[00:00.39]花瓣凋零 细雨飘洒\n心因你跳跃 脑海都是你的身影\n躺下两个多小时了 但我还未进入梦乡\n我的脑袋还在想些什么\n以前每晚都会打个电话\n现在已经忘了你的声音\n在你耳边低语\n我爱你 都是谎言\n那是因为你太天真了以为是个梦\n因为你太天真了以为爱情是一场梦\n时间不会等谁 直到我意识到\n 爱情就像个愚蠢的笑话\n 还是你天真地相信我?\n花瓣凋零 细雨飘洒\n心因你跳跃 脑海都是你的身影\n躺下两个多小时了 但我还未进入梦乡\n我的脑袋还在想些什么\n 以前每晚都会打个电话\n现在已经忘了你的声音\n在你耳边低语\n我爱你 都是谎言\n那是因为你太天真了以为是个梦\n因为你太天真了以为爱情是一场梦\n因为你太天真了以为爱情是一场梦[00:04.17]',
       
    },
    {
        name: '痒',
        artist: '黄龄',
        url: 'https://m801.music.126.net/20240115023136/f53a4d969b262e52a207416ffe85a986/jdyyaac/020e/040b/0e58/5d737e851a3a574581259254415ae32f.m4a',
        cover: 'https://p2.music.126.net/qj4rZNBubkcai5715oSWAw==/5688873162175327.jpg?param=200y200',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    },
   
    {
        name: '扇子舞——仙女版',
        artist: '以鸿鹄之名 / 比非图RamessesII / 盛姝 / 青璃 / 遥安_ / 秦碧莹',
        url: 'https://m801.music.126.net/20240115024050/e8de212eab2f5a297e70058626e2f401/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/9979963254/fd27/a9e3/27d2/5cdccb2e9b2e8605dbda90b25c3111bf.m4a',
        cover: 'https://p1.music.126.net/5i47Pdn_HqXcdqKM8WTYzg==/109951166204842659.jpg?param=200y200',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    },
    {
        name: '是妈妈是女儿',
        artist: '黄绮珊 / 希林娜依高',
        url: 'https://m701.music.126.net/20240115024220/3115303a5649e053f08d26fc53bfff99/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/24201207688/f774/744f/2359/c76019859cd0d83d91c99a4e81e9e8b4.m4a',
        cover: 'https://p1.music.126.net/9F4_dKm4XHQEKmzNKdz-gg==/109951168249562066.jpg?param=200y200',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    },
    {
        name: '浮光',
        artist: '周深',
        url: 'https://m801.music.126.net/20240115025221/ed8971d71d48390c60fc36fa0e16abc2/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32407770950/f487/a2dd/4965/b425a706f22e4c733c07d428571217fe.m4a',
        cover: 'https://p2.music.126.net/zfdCU3cL-dsTqVvjmKPrjg==/109951169222823883.jpg?param=200y200',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    },
    
    {
        name: 'Sống Xa Anh Chẳng Dễ Dàng Remix',
        artist: 'Sống Xa Anh Chẳng Dễ Dàng Remix',
        url: 'https://m801.music.126.net/20240115025542/54c9b72ad89b8829127a8f07c8d19c89/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/31268663044/dd52/5640/5b66/a16f4578852f6baf91b5d21565031fa0.m4a',
        cover: 'https://p2.music.126.net/aAgErlqVabjKUpgXjiigKQ==/109951169026760001.jpg?param=200y200',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    },
     /** 
    {
        name: 'Headlong Into Love',
        artist: 'aTôi không hiểu',
        url: 'https://m701.music.126.net/20240115025802/c42b69fe475dc4f4e6dc309d265d1309/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32222623206/cd14/93b6/504b/93ac780748b95a977f0d6e97accbdf0c.m4a',
        cover: 'https://p2.music.126.net/t-P2z80z3bsvXTisOY8bmw==/109951169173321339.jpg?param=200y200',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    },
   
    {
        name: 'Dạ Vũ',
        artist: 'Tăng Duy Tân / BAE',
        url: 'https://m801.music.126.net/20240115030041/98f60550c1c2fa707ba9878507d3a1b2/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/10300472158/88d3/0e41/2637/6c1c66777c14d39d507ea880dc354943.m4a',
        cover: 'https://p1.music.126.net/tQpeRoAmmfojAFKJS43x3A==/109951166276229498.jpg?param=200y200',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    },
     /** 
    {
        name: '你别太帅了',
        artist: '泽源屿 / DJ阿布',
        url: 'https://m801.music.126.net/20240115030236/6e4483be9d6063d7064c27b84e05b41c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/31803467183/f9c8/94b7/96a1/660f6c9a8606da622dc521d73d7e5fef.m4a',
        cover: 'https://p1.music.126.net/-0qXeNN1NfMUJY676yr1VQ==/109951168634452376.jpg?param=200y200',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    }
    */
   { name:'Rainight',
    artist:'Saiakoup',
    url:'https://m701.music.126.net/20240120005145/3151b4d1e875e6ad9233f2a0c3631aaf/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/7480445438/226a/2971/b13c/7ab42d0a19ce921667a807057cbda1b6.m4a',
    cover:'https://p1.music.126.net/WCea_apnaozqcQaArqb2tw==/17716430858713079.jpg?param=200y200',

   },
   {
    name:'凤舞九天',
    artist:'MC石头',
    url:'https://m801.music.126.net/20240120005938/cb0e50f979e00ede449760a08af53f14/jdyyaac/005d/535e/5553/770fb17dcdd40deba54fb97ff60d8234.m4a',
    cover:'https://p1.music.126.net/KsCzD1Kea0WOOOOb3RMnnQ==/17658156742409508.jpg?param=200y200',
   }

	]
});





