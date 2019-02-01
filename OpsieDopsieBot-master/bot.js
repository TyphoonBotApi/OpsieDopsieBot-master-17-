
const Discord = require('discord.js');
const client = new Discord.Client();
 
 client.on("ready", () => {


    client.user.setActivity("you found me in a good mood you little bastards", { type: "PLAYING"})

});

client.on('message', message => {
    
    if (message.content.startsWith("Poll:")) {
    	message.react('👍');
        message.react('👎');
   }    
   
if (message.content.startsWith("force online")) {
    	message.channel.send("Aye lads im here");
   }    

    if (message.content.startsWith("!info")) { 
message.channel.send({embed: {
color: 65535,
    title: "How was i made?",
description:  "<@488575209742532618> got drunk,played a few rounds of five finger filet,got bored and i was made.",
fields: [{
        name: "Help",
        value: "Use !helpme to see a list of a commands,use !opsie to see bot stats."
      }],
footer: {
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})}
    
   if (message.content.startsWith("!helpme")) { 
message.channel.send({embed: {
color: 65535,
    title: "Help",
description:  "Provides a basic list of all commands.",
fields: [{
        name: "Poll:",
        value: "Use as a prefix,starts a poll."
      },
      {
        name: "!opsie",
        value: "Provides bot info including uptime."
      },
      {
        name: "!server",
        value: "Displays server info."
      },
         {
        name: "!invite",
        value: "Displays a server invite"
      },
    {
        name: "!8ball",
        value: "Initiates a game of 8ball!Ask away!"
      },
    {
        name: "!t [Staff member]",
        value: "Provides a bio for each staff member including yoshi"
      },
    {
        name: "!flip",
        value: "Flips a coin!Flip flop plop plop."
      },
    {
        name: "!shrug",
        value: "Animated Shrug Emoji"
      },
    {
        name: "!whois [User]",
        value: "Displays user info for mentioned user."
      },
    {
        name: "!rps scissors/paper/rock",
        value: "Starts a game of rock paper scissors."
      },
    {
        name: "!t [Topic]",
        value: "Moderator command used to display certain information"
      },
    {
        name: "!card [card]",
        value: "Deals out a Yu Gi Oh card \nYou need to discover cards yourself"
      },
      {
        name: "!staff",
        value: "Instructions to apply for staff"
      }
      ],
footer: {
timestamp: new Date(),
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})}
    
   if (message.content.startsWith("!staff")) { 
message.channel.send({embed: {
color: 65535,
    title: "Application for staff",
description:  "How can i apply for staff?",
fields: [{
        name: "**Instructions**",
        value: "To apply for staff you must be active on this server,if you are active [Click Here to head over and apply](https://bit.ly/DinoStaff) .After that ping Jag or any other staff member to check your application,DO NOT SPAM PING OR ASK US TO HURRY UP IT WILL NOT HELP"
      }
      ],
footer: {
timestamp: new Date(),
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})} 
 
    if (message.content.startsWith("!invite")) { 
message.channel.send ('https://bit.ly/YoshisDiscord')
        }

   
    
   if (message.content.startsWith("!opsie")) { 
message.channel.send({embed: {
color: 65535,
author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "OpsieDopsie V3.9.0",
description:  "Bot statistics",
fields: [{
        name: "**Ping**",
        value: "20 ms"
      },
{
        name: "**Other Information**",
        value: "Uptime=48 hours+,Hosted in Central Europe."
      },
{
        name: "**Creator**",
        value: "<@488575209742532618>"
      },
{
        name: "**Discord**",
        value: "[Join my discord server](https://discord.gg/phJMVuk)"
      }
      ],
footer: {
timestamp: new Date(),
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})} 
 
if (message.content.startsWith("!server")) { 
message.channel.send({embed: {
color: 65535,
    title: "Server Information",
description:  "Information of the server,server staff and other nitty gritty details",
fields: [{
        name: "**Server Info**",
        value: "Server name:Dino Army \n <a:crownowner:536568840788639765> Server owner <a:crownowner:536568840788639765> : <a:Yoshi:536568842508304386> <@363672190970757129> <a:Yoshi:536568842508304386> \n Server Region:Central Europe"
      },
{
        name: "**<a:admin1:536567494954188802> Server Admins<a:admin1:536567494954188802>**",
        value: "<a:Solider76:536566477004865557> <@488575209742532618> <a:Solider76:536566477004865557> \n <a:bmo:536574682636222464> <@346681572478550017> <a:bmo:536574682636222464> \n<a:jag:536574678240722944> <@305299176470872064> <a:jag:536574678240722944> \n<a:emman:536574706610995200> <@412855730954305536> <a:emman:536574706610995200> " 
      },
{
        name: "**<a:helper2:536565261520732190> Helpers <a:helper2:536565261520732190>**",
        value: "<@330962814929862677>"
 }
      ],
footer: {
timestamp: new Date(),
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
 }})}


if(message.content.startsWith("!8ball"))
{
      function doRandHT() {
var rand = ['Good idea','I second that','Amazing idea','Sure','Why not','OfCourse','Thats a good idea','I like the sound of that','Umm maybe','Not sure about that one','Cant say','Not sure','Absolutely not','lmao no','Now why would you say that','Thats a no from me','No f**king way','Just no..no','Oh yeah yeah','Hell yeah','Dont ask me'];

return rand[Math.floor(Math.random()*rand.length*1)];
}

 const embed = {
"title": `Well if im honest`,
"description": doRandHT(),
"color": 65535,
};
message.channel.send({ embed });


};

//V3.8.1 !helpme needs to be updated
//cards

if (message.content.startsWith("!card rick")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538347084504629248/SNRglTc_d.jpg");
   }   

if (message.content.startsWith("!card no u")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538347083963301899/download_53.jpeg");
   }   

if (message.content.startsWith("!card pepe")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538347083434950687/LnHkSHT_d.jpg");
   }

if (message.content.startsWith("!card lies")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538347083434950686/yo5gI48_d.jpg");
   }

if (message.content.startsWith("!card candy")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538347082906599425/3BCFpQc_d.jpg");
   }

if (message.content.startsWith("!card hold up")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538347061482094593/x6WPGet_d.jpg");
   }

if (message.content.startsWith("!card chuck")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538347060315947038/jNpLrt6_d.jpg");
   }

if (message.content.startsWith("!card y")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538347059871481877/pSbeBQI_d.jpg");
   }

if (message.content.startsWith("!card troll")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538347058843746326/zjsiuz7_d.jpg");
   }

if (message.content.startsWith("!card kfc")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538346991940272137/vzah7i8_d.jpg");
   }

if (message.content.startsWith("!card angry")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538346991437086730/azCvaMm_d.jpg");
   }

if (message.content.startsWith("!card tyrone")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538346990052835328/ILx12UY_d.jpg");
   }

if (message.content.startsWith("!card what are those")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538346988966772776/t65EYpB_d.jpg");
   }

if (message.content.startsWith("!card deleted message")) {
    	message.channel.send("https://cdn.discordapp.com/attachments/529998998883270668/538351403773722634/image0-24-1.jpg");
   }
// end of cards
//3.8.1 command

if (message.content.toLowerCase().includes("!t yoshi")) {
    	message.channel.send({embed: {
color: 65535,
    title: "Lord Yoshirocks",
description:  "Hello everybody, its your favorite Minecraft Dinosaur here, Yoshirocks. My greetings and I welcome you to an awesome channel, with jam-packed gameplay. This green Dino Dude will always say hello to you and games, and will never stop. I hope you enjoy!",
fields: [{
        name: "Follow me!",
        value: "[My channel!](https://www.youtube.com/channel/UCXXwv_TOATDZdHNuq-lpLgw]) \n[My Instagram!](https://www.instagram.com/y0shirocks/?hl=en)\n`Editors note:Yoshi claims his Instagram is a joke i included the links nonetheless`"
      }],
footer: {
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
    
}})}

if (message.content.toLowerCase().includes("!t yoshirocks")) {
    	  	message.channel.send({embed: {
color: 65535,
    title: "Lord Yoshirocks",
description:  "Hello everybody, its your favorite Minecraft Dinosaur here, Yoshirocks. My greetings and I welcome you to an awesome channel, with jam-packed gameplay. This green Dino Dude will always say hello to you and games, and will never stop. I hope you enjoy!",
fields: [{
        name: "Follow me!",
        value: "[My channel!](https://www.youtube.com/channel/UCXXwv_TOATDZdHNuq-lpLgw]) \n[My Instagram!](https://www.instagram.com/y0shirocks/?hl=en)\n`Editors note:Yoshi claims his Instagram is a joke i included the links nonetheless`"
      }],
footer: {
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
    
}})}

if (message.content.toLowerCase().includes("!t jag")) {
    	message.channel.send({embed: {
color: 65535,
    title: "Commander Jag",
description:  "Oi,i play brawlhalla and I created punishments your welcome,i check staff apps and stuff \nIm very secretive",
footer: {
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})}
   
if (message.content.toLowerCase().includes("!t typhoon")) {
    	message.channel.send({embed: {
color: 65535,
    title: "Lord Typhoon",
description:  "You found me in a good mood you little bastards\nAye lads i have no life,ping me for help,im almost always online,aye now go subscribe to PewDiePie\nK im out *tips fedora*",
fields: [{
        name: "Notes",
        value: "[Click me!](http://bit.ly/myrickroll)\n[My reddit](https://www.reddit.com/u/TheNinthShade?utm_source=reddit-android}) that i dont use anymore"
      }],
footer: {
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})}
   
if (message.content.toLowerCase().includes("!t emman")) {
    	message.channel.send({embed: {
color: 65535,
    title: "Master Emman",
description:  "I draw......and stuff\nI like food a lot,yall can see that from my pfp.Aye thats it for me.Bye....you can leave now....why are you still here?",
footer: {
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})}
   
if (message.content.toLowerCase().includes("!t bmo")) {
    	message.channel.send({embed: {
color: 65535,
    title: "Our Lord and Saviour Bmo",
description:  "Hello there!I work with blender and like retro gaming",
footer: {
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})}
   
if (message.content.toLowerCase().includes("!t vektor")) {
    	message.channel.send({embed: {
color: 65535,
    title: "Our Lord and Saviour Bmo",
description:  "Hello there!I work with blender and like retro gaming",
footer: {
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})}

// end of staff tags
// 3.8.2 uselesss shit
if(message.content == "!shrug")
{
message.channel.send("¯\\_(ツ)_/¯").then(m => {
        setTimeout(() => {
            m.edit("¯\\\\\\-(ツ)-/¯").then(ms => {
                setTimeout(() => {
                    ms.edit("¯\\_(ツ)_/¯")
                }, 500)
            })
        }, 500)
   })
}
  
if(message.content == "!flip")
{
    
function doRandHT() {
var rand = ['HEADS!','TAILS!'];

return rand[Math.floor(Math.random()*rand.length*1)];
}

message.channel.send("° • •").then(m => {
        setTimeout(() => {
            m.edit("• ° •").then(ms => {
                setTimeout(() => {
                    ms.edit("• • °").then(m => {
        setTimeout(() => {
            m.edit(doRandHT())
           
                }, 500)
            })
                }, 500)
            })
        }, 500)
   })
}
    



//tags again
//experimental edit:succces

if(message.member.roles.find("name", "Staff") && message.content == "!t xp" ){
  message.channel.send({embed: {
color: 65535,
    title: "How levels work",
description:  "Each time you post a message you get a random number of XP between 15 and 25.\nTo avoid flood, you can only gain xp once per minute.\nIn the server, you can type !rank to get your rank and your level",
fields: [{
        name: "**Leaderboard**",
        value: "[Click me!](https://mee6.xyz/leaderboard/427899990984228874)"
      }
      ],
footer: {
      icon_url: client.user.avatarURL,
      text: "© Captain Midnight"
    }
}})}

if (message.member.roles.find("name", "Staff") && message.content.startsWith("!exile")) { 
let member = message.mentions.members.first();
member.addRole('527386149111726081')
message.channel.send("User has been muted from counting");
    
}

//rps

if (message.content.toLowerCase().includes("!rps scissor")) {
function doRPS() {
var rand = ['Scissors!\nAye itsa me,tie!','Paper!\nWhoop!You won!','Rock!\nR.I.P you have lost ;('];
return rand[Math.floor(Math.random()*rand.length*1)];
}
message.channel.send(doRPS());
}


if (message.content.toLowerCase().includes("!rps rock")) {
function doRPS() {
var rand = ['Scissors!\nThere goes my pair','Paper!\nAye i won!','Rock!\nIts a tie lads'];
return rand[Math.floor(Math.random()*rand.length*1)];
}
message.channel.send(doRPS());
}


if (message.content.toLowerCase().includes("!rps paper")) {
function doRPS() {
var rand = ['Scissors!\nYou Lost :(','Paper!\nIts a tie lads','Rock!\nAye youve won!'];
return rand[Math.floor(Math.random()*rand.length*1)];
}
message.channel.send(doRPS());
}

//end
//roulette

if (message.content.toLowerCase().includes("!russian roulette")) {
function doroulette() {
var rand = ['🔫 Lucky shot!','🔫Safe again!','🔫Gg you live!','🔫 Miss!','🔫 Not today!','💥🔫 Aye lad you dead ☠️'];
return rand[Math.floor(Math.random()*rand.length*1)];
}
message.reply(doroulette());
}


    if (message.content.startsWith("!whois")){
        
        let memberToFind = message.mentions.members.first(); 
 
        if (!memberToFind) {
            return message.channel.send('You must mention a member for this command');
        }
 
        let embed = new Discord.RichEmbed()
            .setAuthor(memberToFind.user.tag)  
            .setThumbnail(memberToFind.user.avatarURL)
            .addField('Account Created', memberToFind.user.createdAt, true) 
            .addField('Joined this Server', message.guild.members.find('id', memberToFind.id).joinedAt, true) 
            .addField('User ID', memberToFind.id, true) 
            
            .setColor(`RANDOM`) 
            .setFooter('Searched User') 
            .setTimestamp() 
 
        message.channel.send(embed);
    }
  

});
 

    
client.login(process.env.BOT_TOKEN);

 
