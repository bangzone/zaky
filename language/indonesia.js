exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Sebentar Kak Mohon Jangan Spam Bot~`
}
exports.ok = () => {
    return `✅ selesai kak jangan lupa owner jomblo~`
}

exports.err = () => {
    return `⚠️ Error Bang Makanya Jangan Di Spam`
}
exports.erorLink = () => {
    return `⚠️ Link Nya Error Mohon Pakai Link Yang Lain`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp. 
Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya, 
lapor owner agar segera di perbaiki, kalau masukin bot ke grup mohon bot jadikan admin dulu🙏      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu zakybot-MD:*

╭─❒ 「 Bot Info 」 
├001 ${prefix}owner
├002 ${prefix}rules
├003 ${prefix}sc
├004 ${prefix}ping
├005 ${prefix}runtime
├006 ${prefix}botstatus
├007 ${prefix}donate
╰❒

╭─❒ 「 Owner 」 
├008 < evaluate
├009 > evaluate
├010 $ exec
├011 => exec
├012 ${prefix}setmenu [query]
├013 ${prefix}setmenu templateLocation
├014 ${prefix}setmenu templateTenor
├015 ${prefix}setmenu katalog
├016 ${prefix}setmenu katalog2
├017 ${prefix}setmenu list
├018 ${prefix}setwm packname|author
├019 ${prefix}sendsesi
├020 ${prefix}listpc
├021 ${prefix}listgc
├022 ${prefix}broadcast [text]
├023 ${prefix}bc [text]
├024 ${prefix}bcgc [text]
├025 ${prefix}nsfw [on/off]
├026 ${prefix}autorespond [on/off]
├027 ${prefix}antiviewonce [on/off]
├028 ${prefix}join [link]
├029 ${prefix}self
├030 ${prefix}public [only bot]
├031 ${prefix}del [reply pesan bot]
├032 ${prefix}setppbot [reply image]
╰❒

╭─❒ 「 Database 」 
├033 ${prefix}setcmd [reply stiker]
├034 ${prefix}delcmd [reply stiker]
├035 ${prefix}listcmd
├036 ${prefix}absen
├037 ${prefix}cekabsen
├038 ${prefix}deleteabsen
├039 ${prefix}absenstart
├040 ${prefix}addmsg [nama file]
├041 ${prefix}getmsg [nama file]
├042 ${prefix}listmsg
├043 ${prefix}delmsg [nama file]
╰❒

╭─❒ 「 Group 」 
├044 ${prefix}listonline
├045 ${prefix}sider
├046 ${prefix}wm packname|author
├047 ${prefix}infochat
├048 ${prefix}setdesk [text]
├049 ${prefix}setppgrup [reply image]
├050 ${prefix}antilink [on/off]
├051 ${prefix}revoke
├052 ${prefix}leave
├053 ${prefix}add [62***]
├054 ${prefix}kick @tag
├055 ${prefix}leave
├056 ${prefix}linkgc
├057 ${prefix}take packname|author
├058 ${prefix}group [open/close]
├059 ${prefix}tagall [text]
├060 ${prefix}hidetag [text]
╰❒

╭─❒ 「 Anime 」 
├061 ${prefix}quotesanime
├062 ${prefix}anime [query]
├063 ${prefix}manga [query]
├064 ${prefix}character [query]
╰❒

╭─❒ 「 Tag 」 
├065 ${prefix}stickertag
├066 ${prefix}videotag [query]
├067 ${prefix}vntag [query]
├068 ${prefix}imagetag [query]
╰❒

╭─❒ 「 Stalking 」 
├069 ${prefix}igstalk [username]
├070 ${prefix}ghstalk [username]
├071 ${prefix}ytstalk [channel]
╰❒

╭─❒ 「 Search 」 
├072 ${prefix}ytsearch [query]
├073 ${prefix}wallpaper [query]
├074 ${prefix}wikimedia [query]
├075 ${prefix}hentai
├076 ${prefix}wattpad [query]
├077 ${prefix}webtoons [query]
├078 ${prefix}drakor [query]
├079 ${prefix}pinterest [query]
╰❒

╭─❒ 「 Converter 」
├080 ${prefix}toaudio [video]
├081 ${prefix}tomp3 [video]
├082 ${prefix}tovn [video]
├083 ${prefix}stiker [reply image]
├084 ${prefix}tourl [image/video/stiker]
├085 ${prefix}togif [sticker]
├086 ${prefix}tomp4 [sticker]
├087 ${prefix}toimg [reply sticker]
╰❒


╭─❒ 「 Image Effect 」 
├088 ${prefix}wanted [image/stiker]
├089 ${prefix}utatoo [image/stiker]
├090 ${prefix}unsharpen [image/stiker]
├091 ${prefix}thanos [[image/stiker]
├092 ${prefix}sniper [image/stiker]
├093 ${prefix}sharpen [image/stiker]
├094 ${prefix}sepia [[image/stiker]
├095 ${prefix}scary [image/stiker]
├096 ${prefix}rip [image/stiker]
├097 ${prefix}redple [image/stiker]
├098 ${prefix}rejected [image/stiker]
├099 ${prefix}posterize [image/stiker]
├100 ${prefix}ps4 [image/stiker]
├101 ${prefix}pixelize [image/stiker]
├102 ${prefix}missionpassed [image/stiker]
├103 ${prefix}moustache [image/stiker]
├104 ${prefix}lookwhatkarenhave [image/stiker]
├105 ${prefix}jail [image/stiker]
├106 ${prefix}invert [image/stiker]
├107 ${prefix}instagram [image/stiker]
├108 ${prefix}greyscale [image/stiker]
├109 ${prefix}glitch [image/stiker]
├110 ${prefix}gay [image/stiker]
├111 ${prefix}frame [image/stiker]
├112 ${prefix}fire [image/stiker]
├113 ${prefix}distort [image/stiker]
├114 ${prefix}dictator [image/stiker]
├115 ${prefix}deepfry [image/stiker]
├116 ${prefix}ddungeon [image/stiker]
├117 ${prefix}circle [image/stiker]
├118 ${prefix}challenger [image/stiker]
├119 ${prefix}burn [image/stiker]
├120 ${prefix}brazzers [image/stiker]
├121 ${prefix}beautiful [image/stiker]
╰❒


╭─❒ 「 Sticker Effect 」 
├122 ${prefix}jail [image/stiker]
├123 ${prefix}red [image/stiker]
├124 ${prefix}gay [image/stiker]
├125 ${prefix}bloo [image/stiker]
├126 ${prefix}blue [image/stiker]
├127 ${prefix}sepia [image/stiker]
├128 ${prefix}green [image/stiker]
├129 ${prefix}glass [image/stiker]
├130 ${prefix}invert [image/stiker]
├131 ${prefix}blurple [image/stiker]
├132 ${prefix}blurple2 [image/stiker]
├133 ${prefix}wasted [image/stiker]
├134 ${prefix}passed [image/stiker]
├135 ${prefix}triggered [image/stiker]
├136 ${prefix}comrade [image/stiker]
├137 ${prefix}greyscale [image/stiker]
├138 ${prefix}threshold [image/stiker]
├139 ${prefix}brightness [image/stiker]
├140 ${prefix}invertgreyscale [image/stiker]
╰❒


╭─❒ 「 Download 」 
├141 ${prefix}tiktok [link]
├142 ${prefix}tiktoknowm [link]
├143 ${prefix}tiktokwm [link]
├144 ${prefix}tiktokaudio [link]
├145 ${prefix}ytdl [link]
├146 ${prefix}play [query]
├147 ${prefix}ytmp3 [link]
├148 ${prefix}ytshortmp3 [link]
├149 ${prefix}ytmp4 [link]
├150 ${prefix}ytshorts [link]
├151 ${prefix}facebook [link]
├152 ${prefix}facebooksd [link]
├153 ${prefix}facebookhd [link]
├154 ${prefix}fbaudio [link]
├155 ${prefix}igstory [username]
├156 ${prefix}igdl [link]
├157 ${prefix}igphoto [link]
├158 ${prefix}igvideo [link]
├159 ${prefix}igreels [link]
├160 ${prefix}igtv [link]
├161 ${prefix}soundcloud [link]
├162 ${prefix}gitclone [link repo]
├163 ${prefix}gitrepo [username repo branch]
├164 ${prefix}mediafire [link]
├165 ${prefix}twitter link
╰❒

╭─❒ 「 Primbon 」
├166 ${prefix}nomorhoki 887435047326
├167 ${prefix}artimimpi [query]
├168 ${prefix}artinama [query]
├169 ${prefix}ramaljodoh
├170 ${prefix}ramaljodohbali
├171 ${prefix}suamiistri
├172 ${prefix}ramalcinta
├173 ${prefix}cocoknama
├174 ${prefix}pasangan
├175 ${prefix}jadiannikah
├176 ${prefix}sifatusaha
├177 ${prefix}rezeki
├178 ${prefix}pekerjaan
├179 ${prefix}nasib
├180 ${prefix}penyakit
├181 ${prefix}tarot
├182 ${prefix}fengshui
├183 ${prefix}haribaik
├184 ${prefix}harisangar
├185 ${prefix}harisial
├186 ${prefix}nagahari
├187 ${prefix}arahrezeki
├188 ${prefix}peruntungan
├189 ${prefix}weton
├190 ${prefix}karakter
├191 ${prefix}keberuntungan
├192 ${prefix}memancing
├193 ${prefix}masasubur
├194 ${prefix}zodiak 
├195 ${prefix}shio [query]
╰❒

╭─❒ 「 Random Anime 」
├196 ${prefix}loli
├197 ${prefix}neko
├198 ${prefix}waifu
├199 ${prefix}shinobu
├200 ${prefix}megumin
├201 ${prefix}bully
├202 ${prefix}cuddle
├203 ${prefix}cry
├204 ${prefix}hug
├205 ${prefix}awoo
├206 ${prefix}kiss
├207 ${prefix}lick
├208 ${prefix}pat
├209 ${prefix}smug
├210 ${prefix}bonk
├211 ${prefix}yeet
├212 ${prefix}blush
├213 ${prefix}smile
├214 ${prefix}wave
├215 ${prefix}highfive
├216 ${prefix}handhold
├217 ${prefix}nom
├218 ${prefix}bite
├219 ${prefix}glomp
├220 ${prefix}slap
├221 ${prefix}kill
├222 ${prefix}happy
├223 ${prefix}wink
├224 ${prefix}poke
├225 ${prefix}dance
├226 ${prefix}cringe
╰❒

╭─❒ 「 Nsfw & Sfw 」
├227 ${prefix}ahegao
├228 ${prefix}ass
├229 ${prefix}bdsm
├230 ${prefix}blowjob
├231 ${prefix}cuckold
├232 ${prefix}cum
├233 ${prefix}ero
├234 ${prefix}femdom
├235 ${prefix}foot
├236 ${prefix}gangbang
├237 ${prefix}glasses
├238 ${prefix}jahy
├239 ${prefix}manga
├240 ${prefix}masturbation
├241 ${prefix}neko
├242 ${prefix}orgy
├243 ${prefix}panties
├244 ${prefix}pussy
├245 ${prefix}tentacles
├246 ${prefix}thighs
├247 ${prefix}yuri
├248 ${prefix}feet
├249 ${prefix}lewdkemo
├250 ${prefix}woof
├251 ${prefix}gasm
├252 ${prefix}solo
├253 ${prefix}8ball
├254 ${prefix}goose
├255 ${prefix}avatar
├256 ${prefix}hololewd
├257 ${prefix}gecg
├258 ${prefix}holo
├259 ${prefix}fox_girl
├260 ${prefix}tits
├261 ${prefix}eroyuri
├262 ${prefix}holoyero
├263 ${prefix}lizard
├264 ${prefix}keta
├265 ${prefix}eron
├266 ${prefix}erok
├267 ${prefix}kemonomimi
├268 ${prefix}cum_jpg
├269 ${prefix}nsfw_avatar
├270 ${prefix}erofeet
├280 ${prefix}meow
├281 ${prefix}wallpaper
├282 ${prefix}waifu
├283 ${prefix}trap
├284 ${prefix}lewd
├285 ${prefix}pussy_jpg
├286 ${prefix}futanari
├287 ${prefix}lewdk
├288 ${prefix}solog
├289 ${prefix}smug
├290 ${prefix}cum
├291 ${prefix}slap
├292 ${prefix}les
├293 ${prefix}erokemo
├294 ${prefix}bj
├295 ${prefix}pwankg
├296 ${prefix}pat
├297 ${prefix}poke
├298 ${prefix}feed
├299 ${prefix}nsfw_neko_gif
├300 ${prefix}pussy
├301 ${prefix}feetg
├302 ${prefix}baka
├303 ${prefix}hug
├304 ${prefix}kiss
├305 ${prefix}tickle
├306 ${prefix}spank
├307 ${prefix}kuni
├308 ${prefix}classic
├309 ${prefix}boobs
├310 ${prefix}anal
├311 ${prefix}ngif
├312 ${prefix}cuddle
├313 ${prefix}zettai
╰❒

╭─❒ 「 Ephoto360 Menu 」
├314 ${prefix}youtubegold
├315 ${prefix}youtubesilver
├316 ${prefix}facebookgold
├317 ${prefix}facebooksilver
├318 ${prefix}instagramgold
├319 ${prefix}instagramsilver
├320 ${prefix}twittergold
├321 ${prefix}twittersilver
├322 ${prefix}retrotext
├323 ${prefix}halloweenbats
├324 ${prefix}texthalloween
├325 ${prefix}cardhalloween
├326 ${prefix}birthdaycake
├327 ${prefix}thundertext
├328 ${prefix}icetext
├329 ${prefix}milkcake
├330 ${prefix}snowontext
├331 ${prefix}metalstar
├332 ${prefix}dragonfire
├334 ${prefix}zombie3d
├335 ${prefix}merrycard
├336 ${prefix}generalexam 
├337 ${prefix}viettel
├338 ${prefix}embroider
├339 ${prefix}graffititext
├340 ${prefix}graffititext2
├341 ${prefix}graffititext3
├342 ${prefix}covergraffiti
├343 ${prefix}moderngold
├344 ${prefix}capercut
├345 ${prefix}lovecard
├346 ${prefix}heartflashlight
├347 ${prefix}heartcup
├348 ${prefix}sunglightshadow
├349 ${prefix}graffiti3d
├350 ${prefix}moderngoldsilver
├351 ${prefix}moderngold2
├352 ${prefix}moderngold3
├353 ${prefix}fabrictext
├354 ${prefix}masteryavatar
├355 ${prefix}messagecoffee
├356 ${prefix}announofwin
├357 ${prefix}writeblood
├358 ${prefix}horrorletter
├359 ${prefix}writehorror
├360 ${prefix}shirtclub
├361 ${prefix}angelwing
├362 ${prefix}christmasseason
├362 ${prefix}projectyasuo
├363 ${prefix}lovelycute
├364 ${prefix}womansday
├365 ${prefix}covergamepubg
├366 ${prefix}nameonheart
├367 ${prefix}funnyhalloween
├368 ${prefix}lightningpubg
├369 ${prefix}greetingcardvideo 
├370 ${prefix}christmascard 
├371 ${prefix}galaxybat
├372 ${prefix}writegalaxy
├373 ${prefix}starsnight
├374 ${prefix}noeltext
├375 ${prefix}textcakes
├376 ${prefix}pubgbirthday
├377 ${prefix}galaxywallpaper
├378 ${prefix}pubgglicthvideo 
├379 ${prefix}pubgmascotlogo
├380 ${prefix}realembroidery
├381 ${prefix}vintagetelevision
├382 ${prefix}funnyanimations
├383 ${prefix}glowingtext
├384 ${prefix}textonglass
├385 ${prefix}cartoonstyle
├386 ${prefix}multicolor
├387 ${prefix}watercolor2
├388 ${prefix}textsky
├389 ${prefix}summerbeach
├390 ${prefix}1917text
├391 ${prefix}puppycute
├392 ${prefix}rosebirthday
╰❒


╭─❒ 「 Textpro Menu 」
├393 ${prefix}halloween2 text|text2
├394 ${prefix}horror text|text2
├395 ${prefix}game8bit text|text2
├396 ${prefix}layered text|text2
├397 ${prefix}glitch2 text|text2
├398 ${prefix}coolg text|text2
├399 ${prefix}coolwg text|text2
├400 ${prefix}realistic text|text2
├401 ${prefix}space3d text|text2
├402 ${prefix}gtiktok text|text2
├403 ${prefix}stone text|text2
├404 ${prefix}marvel text|text2
├405 ${prefix}marvel2 text|text2
├406 ${prefix}pornhub text|text2
├407 ${prefix}avengers text|text2
├408 ${prefix}metalr text|text2
├409 ${prefix}metalg text|text2
├410 ${prefix}metalg2 text|text2
├411 ${prefix}halloween2 text|text2
├412 ${prefix}lion text|text2
├413 ${prefix}wolf_bw text|text2
├418 ${prefix}wolf_g text|text2
├419 ${prefix}ninja text|text2
├420 ${prefix}3dsteel text|text2
├421 ${prefix}horror2 text|text2
├422 ${prefix}lava text|text2
├423 ${prefix}bagel text|text2
├424 ${prefix}blackpink text
├425 ${prefix}rainbow2 text
├426 ${prefix}water_pipe text
├427 ${prefix}halloween text
├428 ${prefix}sketch text
├429 ${prefix}sircuit text
├430 ${prefix}discovery text
├431 ${prefix}metallic2 text
├432 ${prefix}fiction text
├433 ${prefix}demon text
├434 ${prefix}transformer text
├435 ${prefix}berry text
├436 ${prefix}thunder text
├437 ${prefix}magma text
├438 ${prefix}3dstone text
├439 ${prefix}neon text
├439 ${prefix}glitch text
├440 ${prefix}harry_potter text
├441 ${prefix}embossed text
├442 ${prefix}broken text
├443 ${prefix}papercut text
├444 ${prefix}gradient text
├445 ${prefix}glossy text
├446 ${prefix}watercolor text
├447 ${prefix}multicolor text
├448 ${prefix}neon_devil text
├449 ${prefix}underwater text
├450 ${prefix}bear text
├451 ${prefix}wonderfulg text
├452 ${prefix}christmas text
├452 ${prefix}neon_light text
├453 ${prefix}snow text
├454 ${prefix}cloudsky text
├455 ${prefix}luxury2 text
├456 ${prefix}gradient2 text
├457 ${prefix}summer text
├458 ${prefix}writing text
├459 ${prefix}engraved text
├460 ${prefix}summery text
├461 ${prefix}3dglue text
├462 ${prefix}metaldark text
├463 ${prefix}neonlight text
├464 ${prefix}oscar text
├465 ${prefix}minion text
├466 ${prefix}holographic text
├467 ${prefix}purple text
├468 ${prefix}glossyb text
├469 ${prefix}deluxe2 text
├470 ${prefix}glossyc text
├471 ${prefix}fabric text
├472 ${prefix}neonc text
├473 ${prefix}newyear text
├474 ${prefix}newyear2 text
├475 ${prefix}metals text
├476 ${prefix}xmas text
├477 ${prefix}blood text
├478 ${prefix}darkg text
├479 ${prefix}joker text
├480 ${prefix}wicker text
├481 ${prefix}natural text
├482 ${prefix}firework text
├483 ${prefix}skeleton text
├484 ${prefix}balloon text
├485 ${prefix}balloon2 text
├486 ${prefix}balloon3 text
├487 ${prefix}balloon4 text
├488 ${prefix}balloon5 text
├489 ${prefix}balloon6 text
├490 ${prefix}balloon7 text
├491 ${prefix}steel text
├492 ${prefix}gloss text
├493 ${prefix}denim text
├494 ${prefix}decorate text
├495 ${prefix}decorate2 text
├496 ${prefix}peridot text
├497 ${prefix}rock text
├498 ${prefix}glass text
├499 ${prefix}glass2 text
├500 ${prefix}glass3 text
├501 ${prefix}glass4 text
├502 ${prefix}glass5 text
├503 ${prefix}glass6 text
├504 ${prefix}glass7 text
├505 ${prefix}glass8 text
├506 ${prefix}captain_as2 text
├507 ${prefix}robot text
├508 ${prefix}equalizer text
├509 ${prefix}toxic text
├510 ${prefix}sparkling text
├511 ${prefix}sparkling2 text
├512 ${prefix}sparkling3 text
├513 ${prefix}sparkling4 text
├514 ${prefix}sparkling5 text
├515 ${prefix}sparkling6 text
├516 ${prefix}sparkling7 text
├517 ${prefix}decorative text
├518 ${prefix}chocolate text
├519 ${prefix}strawberry text
├520 ${prefix}koifish text
├521 ${prefix}bread text
├522 ${prefix}matrix text
├523 ${prefix}blood2 text
├524 ${prefix}neonligth2 text
├525 ${prefix}thunder2 text
├526 ${prefix}3dbox text
├527 ${prefix}neon2 text
├528 ${prefix}roadw text
├529 ${prefix}bokeh text
├530 ${prefix}gneon text
├531 ${prefix}advanced text
├532 ${prefix}dropwater text
├533 ${prefix}wall text
├534 ${prefix}chrismast text
├535 ${prefix}honey text
├536 ${prefix}drug text
├537 ${prefix}marble text
├538 ${prefix}marble2 text
├539 ${prefix}ice text
├540 ${prefix}juice text
├541 ${prefix}rusty text
├542 ${prefix}abstra text
├543 ${prefix}biscuit text
├544 ${prefix}wood text
├545 ${prefix}scifi text
├546 ${prefix}metalr text
├547 ${prefix}purpleg text
├548 ${prefix}shiny text 
├549 ${prefix}jewelry text
├550 ${prefix}jewelry2 text
├551 ${prefix}jewelry3 text
├552 ${prefix}jewelry4 text
├553 ${prefix}jewelry5 text
├554 ${prefix}jewelry6 text
├555 ${prefix}jewelry7 text
├556 ${prefix}jewelry8 text
├557 ${prefix}metalh text
├558 ${prefix}golden text
├559 ${prefix}glitter text
├560 ${prefix}glitter2 text
├561 ${prefix}glitter3 text
├562 ${prefix}glitter4 text
├563 ${prefix}glitter5 text
├564 ${prefix}glitter6 text
├565 ${prefix}glitter7 text
├566 ${prefix}metale text
├567 ${prefix}carbon text
├568 ${prefix}candy text
├569 ${prefix}metalb text
├570 ${prefix}gemb text
├571 ${prefix}3dchrome text
├572 ${prefix}metalb2 text
├573 ${prefix}metalg text
├574 ${prefix}metalg text
╰❒


╭─❒ 「 Others 」
├575 ${prefix}afk [reason]
├576 ${prefix}translate kode_bahasa text
├577 ${prefix}kalkulator [query]
├578 ${prefix}smeme [text]
├579 ${prefix}smeme2 [text|text]
├580 ${prefix}memegen [text|text]
╰❒

╭─❒ 「 Game Menu 」
├581 ${prefix}kuismath
├582 ${prefix}tebak [option]
├583 ${prefix}tekateki
├584 ${prefix}susunkata
├585 ${prefix}caklontong
╰❒


╭─❒ 「 Asupan Menu 」
├586 ${prefix}chika
├587 ${prefix}delvira
├588 ${prefix}ayu
├589 ${prefix}bunga
├590 ${prefix}aura
├591 ${prefix}nisa
├592 ${prefix}ziva
├593 ${prefix}yana
├594 ${prefix}viona
├595 ${prefix}syania
├596 ${prefix}riri
├597 ${prefix}syifa
├598 ${prefix}mama_gina
├599 ${prefix}alcakenya
├600 ${prefix}mangayutri
├601 ${prefix}rikagusriani
├602 ${prefix}asupan
├603 ${prefix}bocil
├604 ${prefix}geayubi
├605 ${prefix}santuy
├606 ${prefix}ukhty
├607 ${prefix}syifa
╰❒

╭─❒ 「 Telegram Sticker 」
├608 ${prefix}awoawo
├609 ${prefix}benedict
├610 ${prefix}chat
├611 ${prefix}dbfly
├612 ${prefix}dino_kuning
├613 ${prefix}doge
├614 ${prefix}gojosatoru
├615 ${prefix}hope_boy
├616 ${prefix}jisoo
├617 ${prefix}kr_robot
├618 ${prefix}kucing
├619 ${prefix}lonte
├620 ${prefix}manusia_lidi
├621 ${prefix}menjamet
├622 ${prefix}meow
├623 ${prefix}nicholas
├624 ${prefix}patrick
├625 ${prefix}popoci
├626 ${prefix}sponsbob
├627 ${prefix}kawan_sponsbob
├628 ${prefix}tyni
╰❒
,
╭─❒ 「 Random Cewe 」
├629 ${prefix}china 
├630 ${prefix}indonesia 
├631 ${prefix}malaysia 
├632 ${prefix}thailand 
├633 ${prefix}korea 
├634 ${prefix}japan 
├635 ${prefix}vietnam 
├636 ${prefix}jenni 
├637 ${prefix}jiso 
├638 ${prefix}lisa  
├639 ${prefix}rose
╰❒ sc zakybot-md

╭─❒ 「 TqTo 」 
├ My God
├ My Parents
├ Fatih A.
├ Ferdi
├ DikaArdnt
├ Mhankbarbar
├ Nurutomo
├ Rashid
├ Zaky Bang
├ Penyedia Module
╰❒ Sc upload di okteto
    `
}

exports.rules = (prefix) => {
    return `
*── 「⚠️ WARNING⚠️ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Zakybot-md di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Zakybot
😖🙏
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
╭ 𝖭𝖺𝗆𝖺 :
├ 𝖴𝗆𝗎𝗋 :
├ 𝖦𝖾𝗇𝖽𝖾𝗋 :
├ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : maaf bang sc ini masih private jika mau sc nya chat owner
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Tapi saya masih membuat bot ini gratis karena sc nya masih dalam pengembangan jadi semua gratis 👍

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}setmenu katalog
├ ${prefix}setmenu katalog2
├ ${prefix}setmenu list
├ ${prefix}setwm packname|author
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast [text]
├ ${prefix}bc [text]
├ ${prefix}bcgc [text]
├ ${prefix}nsfw [on/off]
├ ${prefix}autorespond [on/off]
├ ${prefix}antiviewonce [on/off]
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
├ ${prefix}setcmd [reply stiker]
├ ${prefix}delcmd [reply stiker]
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg [nama file]
├ ${prefix}getmsg [nama file]
├ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}wm packname|author
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [reply image]
├ ${prefix}antilink [on/off]
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}take packname|author
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag [query]
├ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
├ ${prefix}toaudio [video]
├ ${prefix}tomp3 [video]
├ ${prefix}tovn [video]
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image/stiker]
├ ${prefix}utatoo [reply image/stiker]
├ ${prefix}unsharpen [reply image/stiker]
├ ${prefix}thanos [reply image/stiker]
├ ${prefix}sniper [reply image/stiker]
├ ${prefix}sharpen [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}scary [reply image/stiker]
├ ${prefix}rip [reply image/stiker]
├ ${prefix}redple [reply image/stiker]
├ ${prefix}rejected [reply image/stiker]
├ ${prefix}posterize [reply image/stiker]
├ ${prefix}ps4 [reply image/stiker]
├ ${prefix}pixelize [reply image/stiker]
├ ${prefix}missionpassed [reply image/stiker]
├ ${prefix}moustache [reply image/stiker]
├ ${prefix}lookwhatkarenhave [reply image/stiker]
├ ${prefix}jail [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}instagram [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}glitch [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}frame [reply image/stiker]
├ ${prefix}fire [reply image/stiker]
├ ${prefix}distort [reply image/stiker]
├ ${prefix}dictator [reply image/stiker]
├ ${prefix}deepfry [reply image/stiker]
├ ${prefix}ddungeon [reply image/stiker]
├ ${prefix}circle [reply image/stiker]
├ ${prefix}challenger [reply image/stiker]
├ ${prefix}burn [reply image/stiker]
├ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail [reply image/stiker]
├ ${prefix}red [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}bloo [reply image/stiker]
├ ${prefix}blue [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}green [reply image/stiker]
├ ${prefix}glass [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}blurple [reply image/stiker]
├ ${prefix}blurple2 [reply image/stiker]
├ ${prefix}wasted [reply image/stiker]
├ ${prefix}passed [reply image/stiker]
├ ${prefix}triggered [reply image/stiker]
├ ${prefix}comrade [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}threshold [reply image/stiker]
├ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
├ ${prefix}soundcloud [link]
├ ${prefix}gitclone [link repo]
├ ${prefix}gitrepo [username repo branch]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
├ ${prefix}ahegao
├ ${prefix}ass
├ ${prefix}bdsm
├ ${prefix}blowjob
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}ero
├ ${prefix}femdom
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}manga
├ ${prefix}masturbation
├ ${prefix}neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}pussy
├ ${prefix}tentacles
├ ${prefix}thighs
├ ${prefix}yuri
├ ${prefix}feet
├ ${prefix}lewdkemo
├ ${prefix}woof
├ ${prefix}gasm
├ ${prefix}solo
├ ${prefix}8ball
├ ${prefix}goose
├ ${prefix}avatar
├ ${prefix}hololewd
├ ${prefix}gecg
├ ${prefix}holo
├ ${prefix}fox_girl
├ ${prefix}tits
├ ${prefix}eroyuri
├ ${prefix}holoyero
├ ${prefix}lizard
├ ${prefix}keta
├ ${prefix}eron
├ ${prefix}erok
├ ${prefix}kemonomimi
├ ${prefix}cum_jpg
├ ${prefix}nsfw_avatar
├ ${prefix}erofeet
├ ${prefix}meow
├ ${prefix}wallpaper
├ ${prefix}waifu
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}pussy_jpg
├ ${prefix}futanari
├ ${prefix}lewdk
├ ${prefix}solog
├ ${prefix}smug
├ ${prefix}cum
├ ${prefix}slap
├ ${prefix}les
├ ${prefix}erokemo
├ ${prefix}bj
├ ${prefix}pwankg
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}feed
├ ${prefix}nsfw_neko_gif
├ ${prefix}pussy
├ ${prefix}feetg
├ ${prefix}baka
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}tickle
├ ${prefix}spank
├ ${prefix}kuni
├ ${prefix}classic
├ ${prefix}boobs
├ ${prefix}anal
├ ${prefix}ngif
├ ${prefix}cuddle
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}pornhub text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
├ ${prefix}ttp [text]
├ ${prefix}attp [text]
├ ${prefix}afk [reason]
├ ${prefix}translate kode_bahasa text
├ ${prefix}kalkulator [query]
├ ${prefix}smeme [text]
├ ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
├ ${prefix}kuismath
├ ${prefix}tebak [option]
├ ${prefix}tekateki
├ ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
├ ${prefix}chika
├ ${prefix}delvira
├ ${prefix}ayu
├ ${prefix}bunga
├ ${prefix}aura
├ ${prefix}nisa
├ ${prefix}ziva
├ ${prefix}yana
├ ${prefix}viona
├ ${prefix}syania
├ ${prefix}riri
├ ${prefix}syifa
├ ${prefix}mama_gina
├ ${prefix}alcakenya
├ ${prefix}mangayutri
├ ${prefix}rikagusriani
├ ${prefix}asupan
├ ${prefix}bocil
├ ${prefix}geayubi
├ ${prefix}santuy
├ ${prefix}ukhty
╰❒ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
├ ${prefix}china 
├ ${prefix}indonesia 
├ ${prefix}malaysia 
├ ${prefix}thailand 
├ ${prefix}korea 
├ ${prefix}japan 
├ ${prefix}vietnam 
├ ${prefix}jenni 
├ ${prefix}jiso 
├ ${prefix}lisa  
╰❒ ${prefix}rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
├ My God
├ My Parents
├ Fatih A.
├ Ferdi
├ DikaArdnt
├ Mhankbarbar
├ Nurutomo
├ Rashid
├ Zaky⚠️
├ Penyedia Module
╰❒ Sc ini upload di okteto
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
├ ${prefix}nomorhoki 887435047326
├ ${prefix}artimimpi [query]
├ ${prefix}artinama [query]
├ ${prefix}ramaljodoh
├ ${prefix}ramaljodohbali
├ ${prefix}suamiistri
├ ${prefix}ramalcinta
├ ${prefix}cocoknama
├ ${prefix}pasangan
├ ${prefix}jadiannikah
├ ${prefix}sifatusaha
├ ${prefix}rezeki
├ ${prefix}pekerjaan
├ ${prefix}nasib
├ ${prefix}penyakit
├ ${prefix}tarot
├ ${prefix}fengshui
├ ${prefix}haribaik
├ ${prefix}harisangar
├ ${prefix}harisial
├ ${prefix}nagahari
├ ${prefix}arahrezeki
├ ${prefix}peruntungan
├ ${prefix}weton
├ ${prefix}karakter
├ ${prefix}keberuntungan
├ ${prefix}memancing
├ ${prefix}masasubur
├ ${prefix}zodiak 
╰❒ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
├ ${prefix}awoawo
├ ${prefix}benedict
├ ${prefix}chat
├ ${prefix}dbfly
├ ${prefix}dino_kuning
├ ${prefix}doge
├ ${prefix}gojosatoru
├ ${prefix}hope_boy
├ ${prefix}jisoo
├ ${prefix}kr_robot
├ ${prefix}kucing
├ ${prefix}lonte
├ ${prefix}manusia_lidi
├ ${prefix}menjamet
├ ${prefix}meow
├ ${prefix}nicholas
├ ${prefix}patrick
├ ${prefix}popoci
├ ${prefix}sponsbob
├ ${prefix}kawan_sponsbob
╰❒ ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
├ ${prefix}youtubegold text
├ ${prefix}youtubesilver text
├ ${prefix}facebookgold text
├ ${prefix}facebooksilver text
├ ${prefix}instagramgold text
├ ${prefix}instagramsilver text
├ ${prefix}twittergold text
├ ${prefix}twittersilver text
├ ${prefix}retrotext text
├ ${prefix}halloweenbats text
├ ${prefix}texthalloween text
├ ${prefix}cardhalloween text
├ ${prefix}birthdaycake text
├ ${prefix}thundertext text
├ ${prefix}icetext text
├ ${prefix}milkcake text
├ ${prefix}snowontext text
├ ${prefix}metalstar text
├ ${prefix}dragonfire text
├ ${prefix}zombie3d text
├ ${prefix}merrycard text
├ ${prefix}generalexam text 
├ ${prefix}viettel text
├ ${prefix}embroider text
├ ${prefix}graffititext text
├ ${prefix}graffititext2 text
├ ${prefix}graffititext3 text
├ ${prefix}covergraffiti text
├ ${prefix}moderngold text
├ ${prefix}capercut text
├ ${prefix}lovecard text
├ ${prefix}heartflashlight text
├ ${prefix}heartcup text
├ ${prefix}sunglightshadow text
├ ${prefix}graffiti3d text
├ ${prefix}moderngoldsilver text
├ ${prefix}moderngold2 text
├ ${prefix}moderngold3 text
├ ${prefix}fabrictext text
├ ${prefix}masteryavatar text
├ ${prefix}messagecoffee text
├ ${prefix}announofwin text
├ ${prefix}writeblood text
├ ${prefix}horrorletter text
├ ${prefix}writehorror text
├ ${prefix}shirtclub text
├ ${prefix}angelwing text
├ ${prefix}christmasseason text
├ ${prefix}projectyasuo text
├ ${prefix}lovelycute text
├ ${prefix}womansday text
├ ${prefix}covergamepubg text
├ ${prefix}nameonheart text
├ ${prefix}funnyhalloween text
├ ${prefix}lightningpubg text
├ ${prefix}greetingcardvideo text 
├ ${prefix}christmascard text 
├ ${prefix}galaxybat text
├ ${prefix}writegalaxy text
├ ${prefix}starsnight text
├ ${prefix}noeltext text
├ ${prefix}textcakes text
├ ${prefix}pubgbirthday text
├ ${prefix}galaxywallpaper text
├ ${prefix}pubgglicthvideo text 
├ ${prefix}pubgmascotlogo text
├ ${prefix}realembroidery text
├ ${prefix}vintagetelevision text
├ ${prefix}funnyanimations text
├ ${prefix}glowingtext text
├ ${prefix}textonglass text
├ ${prefix}cartoonstyle text
├ ${prefix}multicolor text
├ ${prefix}watercolor2 text
├ ${prefix}textsky text
├ ${prefix}summerbeach text
├ ${prefix}1917text text
├ ${prefix}puppycute text
├ ${prefix}rosebirthday text
├ ${prefix}steellettering text|text2
├ ${prefix}letterstext text|text2
├ ${prefix}barcashirt text|text2
├ ${prefix}premiercup text|text2
├ ${prefix}stylepoligon text|text2
├ ${prefix}lifebuoys text|text2
╰❒ ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
├ ${prefix}coverbannerlol text|heroes
├ ${prefix}pubglogomaker text|style
├ ${prefix}colorfulpubg text|color
├ ${prefix}astronotspace text|style
├ ${prefix}wallpaperaov text|heroes
├ ${prefix}maketeamlogo text|style
├ ${prefix}circlemarcotteam text|logo
├ ${prefix}wallpaperml text|heroes
├ ${prefix}dragonballfb text|character
├ ${prefix}bannerofaov text|character
├ ${prefix}effect3donbeach text|background
├ ${prefix}cutegirlgamer text|logo
├ ${prefix}footballteam text|logo
├ ${prefix}beautifulshimmering text|champion
├ ${prefix}pubgcutelogo text|logo
├ ${prefix}elegantrotation text|logo
├ ${prefix}logogamingassasin text|logo
├ ${prefix}introvideomaker text|logo
├ ${prefix}gaminglogo4fvs text|logo
├ ${prefix}blueneon text|logo
├ ${prefix}metalmascot text|logo
├ ${prefix}anonymous text|style
├ ${prefix}lolpentakill text|style
├ ${prefix}avatarleagueofking text|style
├ ${prefix}avatarff text|character
├ ${prefix}overwatchwallpaper text|character
├ ${prefix}rovwallpaperhd text|hero
├ ${prefix}rovwallpaper text|avatar
├ ${prefix}beautifulgalaxylol text|style
├ ${prefix}crossfirecover text|character
├ ${prefix}lolwallpaper text|wallpaper
├ ${prefix}coverdota2 text|heroes
├ ${prefix}coverleagueofking text|character
├ ${prefix}avatar3q360 text|avatar
├ ${prefix}coverofwarface text|character
├ ${prefix}newlolavatar text|avatar
├ ${prefix}csgocover text|background
├ ${prefix}coverloknew text|hero
├ ${prefix}coverfblol text|letters
├ ${prefix}overwatchcover text|hero
├ ${prefix}crossfirestyle text|avatar
├ ${prefix}avatarlolbyname text|style
├ ${prefix}lolcoverbyname text|avatar
├ ${prefix}cyberhunterfb text|character
├ ${prefix}coverfreefirefb text|character
├ ${prefix}gamingmascot text|style
├ ${prefix}coveronepiecefb text|character
├ ${prefix}bannerytcsgo text|banner
├ ${prefix}fbgamepubgcover text|template
├ ${prefix}banneroflol text|text2|banner
├ ${prefix}bannerofaov2 text|text2|banner
├ ${prefix}teamlogo text|text2|background
├ ${prefix}companylogo2 text|text2|background
├ ${prefix}companylogo text|text2|background
├ ${prefix}gradientlogo text|text2|background
├ ${prefix}pencilsketch text|text2|icon
├ ${prefix}gunlogogaming text|text2|background
├ ${prefix}banneroffreefire text|text2|background
├ ${prefix}letterlogos text|text2|thumb
├ ${prefix}bannerofoverwatch text|text2|background
├ ${prefix}bannerofapex text|text2|background
├ ${prefix}bannerofpubg text|text2|background
├ ${prefix}mascotstyle text|text2|thumb
├ ${prefix}logoaccording text|text2|thumb
╰❒ ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
├ ${prefix}asmaulhusna
├ ${prefix}kisahnabi [nabi]
├ ${prefix}jadwalshalat [daerah]
├ ${prefix}randomquran
├ ${prefix}randomquran2
├ ${prefix}listsurah
├ ${prefix}tafsirsurah [surah]
╰❒ ${prefix}alquranaudio [surah|ayat]
`
}

exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
├ ${prefix}sound1
├ ${prefix}sound2
├ ${prefix}sound3
├ ${prefix}sound4
├ ${prefix}sound5
├ ${prefix}sound6
├ ${prefix}sound7
├ ${prefix}sound8
├ ${prefix}sound9
├ ${prefix}sound10
├ ${prefix}sound11
├ ${prefix}sound12
├ ${prefix}sound13
├ ${prefix}sound14
├ ${prefix}sound15
├ ${prefix}sound16
├ ${prefix}sound17
├ ${prefix}sound18 
├ ${prefix}sound19
├ ${prefix}sound20
├ ${prefix}sound21
├ ${prefix}sound22
├ ${prefix}sound23
├ ${prefix}sound24
├ ${prefix}sound25
├ ${prefix}sound26
├ ${prefix}sound27
├ ${prefix}sound28
├ ${prefix}sound29
├ ${prefix}sound30
├ ${prefix}sound31
├ ${prefix}sound32
├ ${prefix}sound33
├ ${prefix}sound34
├ ${prefix}sound35
├ ${prefix}sound36
├ ${prefix}sound37
├ ${prefix}sound38
├ ${prefix}sound39
├ ${prefix}sound40
├ ${prefix}sound41
├ ${prefix}sound42
├ ${prefix}sound43
├ ${prefix}sound44
├ ${prefix}sound45
├ ${prefix}sound46
├ ${prefix}sound47
├ ${prefix}sound48
├ ${prefix}sound49
├ ${prefix}sound50
├ ${prefix}sound51
├ ${prefix}sound52
├ ${prefix}sound53
├ ${prefix}sound54
├ ${prefix}sound55
├ ${prefix}sound56
├ ${prefix}sound57
├ ${prefix}sound58
├ ${prefix}sound59
├ ${prefix}sound60
├ ${prefix}sound61
├ ${prefix}sound62
├ ${prefix}sound63
├ ${prefix}sound64
├ ${prefix}sound65
├ ${prefix}sound66
├ ${prefix}sound67
├ ${prefix}sound68
├ ${prefix}sound69
╰❒ ${prefix}sound70
`
}
