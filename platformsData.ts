import { Platform } from "./types";
import { getLogo } from "./services/logoService";

export const SUPPORTED_PLATFORMS: Platform[] = [
  {
    id: "10play",
    name: "10play",
    color: "#FF0000",
    logoUrl: getLogo("10play.com"),
    exampleUrl: "",
    description: "[*10play*](## \"netrc machine\")"
  },
  {
    id: "17live",
    name: "17live",
    color: "#000000",
    logoUrl: getLogo("17live.com"),
    exampleUrl: "",
    description: "Support for 17live extraction."
  },
  {
    id: "1news",
    name: "1News",
    color: "#E1306C",
    logoUrl: getLogo("1news.co.nz"),
    exampleUrl: "",
    description: "1news.co.nz article videos"
  },
  {
    id: "1tv",
    name: "1tv",
    color: "#1877F2",
    logoUrl: getLogo("1tv.com"),
    exampleUrl: "",
    description: "Первый канал"
  },
  {
    id: "23video",
    name: "23video",
    color: "#1DA1F2",
    logoUrl: getLogo("23video.com"),
    exampleUrl: "",
    description: "Support for 23video extraction."
  },
  {
    id: "24tv_ua",
    name: "24tv.ua",
    color: "#9146FF",
    logoUrl: getLogo("24tv.ua.com"),
    exampleUrl: "",
    description: "Support for 24tv.ua extraction."
  },
  {
    id: "3qsdn",
    name: "3qsdn",
    color: "#BD081C",
    logoUrl: getLogo("3qsdn.com"),
    exampleUrl: "",
    description: "3Q SDN"
  },
  {
    id: "3sat",
    name: "3sat",
    color: "#FF4500",
    logoUrl: getLogo("3sat.com"),
    exampleUrl: "",
    description: "Support for 3sat extraction."
  },
  {
    id: "56_com",
    name: "56.com",
    color: "#1AB7EA",
    logoUrl: getLogo("56.com.com"),
    exampleUrl: "",
    description: "Support for 56.com extraction."
  },
  {
    id: "7plus",
    name: "7plus",
    color: "#FF5500",
    logoUrl: getLogo("7plus.com"),
    exampleUrl: "",
    description: "Support for 7plus extraction."
  },
  {
    id: "8tracks",
    name: "8tracks",
    color: "#0062D2",
    logoUrl: getLogo("8tracks.com"),
    exampleUrl: "",
    description: "Support for 8tracks extraction."
  },
  {
    id: "9c9media",
    name: "9c9media",
    color: "#00A1D6",
    logoUrl: getLogo("9c9media.com"),
    exampleUrl: "",
    description: "Support for 9c9media extraction."
  },
  {
    id: "9gag",
    name: "9gag",
    color: "#0085ff",
    logoUrl: getLogo("9gag.com"),
    exampleUrl: "",
    description: "9GAG"
  },
  {
    id: "9news",
    name: "9News",
    color: "#625DF5",
    logoUrl: getLogo("9news.com"),
    exampleUrl: "",
    description: "Support for 9News extraction."
  },
  {
    id: "9now_com_au",
    name: "9now.com.au",
    color: "#ED812B",
    logoUrl: getLogo("9now.com.au.com"),
    exampleUrl: "",
    description: "Support for 9now.com.au extraction."
  },
  {
    id: "abc_net_au",
    name: "abc.net.au",
    color: "#FDA238",
    logoUrl: getLogo("abc.net.au.com"),
    exampleUrl: "",
    description: "Support for abc.net.au extraction."
  },
  {
    id: "abcnews",
    name: "abcnews",
    color: "#FF0000",
    logoUrl: getLogo("abcnews.com"),
    exampleUrl: "",
    description: "Support for abcnews extraction."
  },
  {
    id: "abcotvs",
    name: "abcotvs",
    color: "#000000",
    logoUrl: getLogo("abcotvs.com"),
    exampleUrl: "",
    description: "ABC Owned Television Stations"
  },
  {
    id: "abematv",
    name: "AbemaTV",
    color: "#E1306C",
    logoUrl: getLogo("abematv.com"),
    exampleUrl: "",
    description: "[*abematv*](## \"netrc machine\")"
  },
  {
    id: "abematvtitle",
    name: "AbemaTVTitle",
    color: "#1877F2",
    logoUrl: getLogo("abematvtitle.com"),
    exampleUrl: "",
    description: "[*abematv*](## \"netrc machine\")"
  },
  {
    id: "acast",
    name: "acast",
    color: "#1DA1F2",
    logoUrl: getLogo("acast.com"),
    exampleUrl: "",
    description: "Support for acast extraction."
  },
  {
    id: "acfunbangumi",
    name: "AcFunBangumi",
    color: "#9146FF",
    logoUrl: getLogo("acfunbangumi.com"),
    exampleUrl: "",
    description: "Support for AcFunBangumi extraction."
  },
  {
    id: "acfunvideo",
    name: "AcFunVideo",
    color: "#BD081C",
    logoUrl: getLogo("acfunvideo.com"),
    exampleUrl: "",
    description: "Support for AcFunVideo extraction."
  },
  {
    id: "adn",
    name: "ADN",
    color: "#FF4500",
    logoUrl: getLogo("adn.com"),
    exampleUrl: "",
    description: "[*animationdigitalnetwork*](## \"netrc machine\") Animation Digital Network"
  },
  {
    id: "adnseason",
    name: "ADNSeason",
    color: "#0A66C2",
    logoUrl: getLogo("adnseason.com"),
    exampleUrl: "",
    description: "[*animationdigitalnetwork*](## \"netrc machine\") Animation Digital Network"
  },
  {
    id: "adobeconnect",
    name: "AdobeConnect",
    color: "#1AB7EA",
    logoUrl: getLogo("adobeconnect.com"),
    exampleUrl: "",
    description: "Support for AdobeConnect extraction."
  },
  {
    id: "adobetv",
    name: "adobetv",
    color: "#FF5500",
    logoUrl: getLogo("adobetv.com"),
    exampleUrl: "",
    description: "Support for adobetv extraction."
  },
  {
    id: "adultswim",
    name: "AdultSwim",
    color: "#0062D2",
    logoUrl: getLogo("adultswim.com"),
    exampleUrl: "",
    description: "Support for AdultSwim extraction."
  },
  {
    id: "aenetworks",
    name: "aenetworks",
    color: "#00A1D6",
    logoUrl: getLogo("History.com"),
    exampleUrl: "",
    description: "A+E Networks: A&E, Lifetime, History.com, FYI Network and History Vault"
  },
  {
    id: "aeonco",
    name: "AeonCo",
    color: "#0085ff",
    logoUrl: getLogo("aeonco.com"),
    exampleUrl: "",
    description: "Support for AeonCo extraction."
  },
  {
    id: "airtv",
    name: "AirTV",
    color: "#625DF5",
    logoUrl: getLogo("airtv.com"),
    exampleUrl: "",
    description: "Support for AirTV extraction."
  },
  {
    id: "aitubekzvideo",
    name: "AitubeKZVideo",
    color: "#ED812B",
    logoUrl: getLogo("aitubekzvideo.com"),
    exampleUrl: "",
    description: "Support for AitubeKZVideo extraction."
  },
  {
    id: "alibaba",
    name: "Alibaba",
    color: "#FDA238",
    logoUrl: getLogo("alibaba.com"),
    exampleUrl: "",
    description: "Support for Alibaba extraction."
  },
  {
    id: "aliexpresslive",
    name: "AliExpressLive",
    color: "#FF0000",
    logoUrl: getLogo("aliexpresslive.com"),
    exampleUrl: "",
    description: "Support for AliExpressLive extraction."
  },
  {
    id: "aljazeera",
    name: "AlJazeera",
    color: "#000000",
    logoUrl: getLogo("aljazeera.com"),
    exampleUrl: "",
    description: "Support for AlJazeera extraction."
  },
  {
    id: "allocine",
    name: "Allocine",
    color: "#E1306C",
    logoUrl: getLogo("allocine.com"),
    exampleUrl: "",
    description: "Support for Allocine extraction."
  },
  {
    id: "allstar",
    name: "Allstar",
    color: "#1877F2",
    logoUrl: getLogo("allstar.com"),
    exampleUrl: "",
    description: "Support for Allstar extraction."
  },
  {
    id: "allstarprofile",
    name: "AllstarProfile",
    color: "#1DA1F2",
    logoUrl: getLogo("allstarprofile.com"),
    exampleUrl: "",
    description: "Support for AllstarProfile extraction."
  },
  {
    id: "alsace20tv",
    name: "Alsace20TV",
    color: "#BD081C",
    logoUrl: getLogo("alsace20tv.com"),
    exampleUrl: "",
    description: "Support for Alsace20TV extraction."
  },
  {
    id: "alsace20tvembed",
    name: "Alsace20TVEmbed",
    color: "#FF4500",
    logoUrl: getLogo("alsace20tvembed.com"),
    exampleUrl: "",
    description: "Support for Alsace20TVEmbed extraction."
  },
  {
    id: "altcensored",
    name: "altcensored",
    color: "#0A66C2",
    logoUrl: getLogo("altcensored.com"),
    exampleUrl: "",
    description: "Support for altcensored extraction."
  },
  {
    id: "alura",
    name: "Alura",
    color: "#1AB7EA",
    logoUrl: getLogo("alura.com"),
    exampleUrl: "",
    description: "[*alura*](## \"netrc machine\")"
  },
  {
    id: "aluracourse",
    name: "AluraCourse",
    color: "#FF5500",
    logoUrl: getLogo("aluracourse.com"),
    exampleUrl: "",
    description: "[*aluracourse*](## \"netrc machine\")"
  },
  {
    id: "amadeustv",
    name: "AmadeusTV",
    color: "#0062D2",
    logoUrl: getLogo("amadeustv.com"),
    exampleUrl: "",
    description: "Support for AmadeusTV extraction."
  },
  {
    id: "amara",
    name: "Amara",
    color: "#00A1D6",
    logoUrl: getLogo("amara.com"),
    exampleUrl: "",
    description: "Support for Amara extraction."
  },
  {
    id: "amazonminitv",
    name: "AmazonMiniTV",
    color: "#0085ff",
    logoUrl: getLogo("amazonminitv.com"),
    exampleUrl: "",
    description: "Support for AmazonMiniTV extraction."
  },
  {
    id: "amazonreviews",
    name: "AmazonReviews",
    color: "#625DF5",
    logoUrl: getLogo("amazonreviews.com"),
    exampleUrl: "",
    description: "Support for AmazonReviews extraction."
  },
  {
    id: "amazonstore",
    name: "AmazonStore",
    color: "#ED812B",
    logoUrl: getLogo("amazonstore.com"),
    exampleUrl: "",
    description: "Support for AmazonStore extraction."
  },
  {
    id: "amcnetworks",
    name: "AMCNetworks",
    color: "#FDA238",
    logoUrl: getLogo("amcnetworks.com"),
    exampleUrl: "",
    description: "Support for AMCNetworks extraction."
  },
  {
    id: "americastestkitchen",
    name: "AmericasTestKitchen",
    color: "#FF0000",
    logoUrl: getLogo("americastestkitchen.com"),
    exampleUrl: "",
    description: "Support for AmericasTestKitchen extraction."
  },
  {
    id: "americastestkitchenseason",
    name: "AmericasTestKitchenSeason",
    color: "#000000",
    logoUrl: getLogo("americastestkitchenseason.com"),
    exampleUrl: "",
    description: "Support for AmericasTestKitchenSeason extraction."
  },
  {
    id: "amhistorychannel",
    name: "AmHistoryChannel",
    color: "#E1306C",
    logoUrl: getLogo("amhistorychannel.com"),
    exampleUrl: "",
    description: "Support for AmHistoryChannel extraction."
  },
  {
    id: "anchorfmepisode",
    name: "AnchorFMEpisode",
    color: "#1877F2",
    logoUrl: getLogo("anchorfmepisode.com"),
    exampleUrl: "",
    description: "Support for AnchorFMEpisode extraction."
  },
  {
    id: "anderetijden",
    name: "anderetijden",
    color: "#1DA1F2",
    logoUrl: getLogo("npo.nl"),
    exampleUrl: "",
    description: "npo.nl, ntr.nl, omroepwnl.nl, zapp.nl and npo3.nl"
  },
  {
    id: "angel",
    name: "Angel",
    color: "#9146FF",
    logoUrl: getLogo("angel.com"),
    exampleUrl: "",
    description: "Support for Angel extraction."
  },
  {
    id: "animalplanet",
    name: "AnimalPlanet",
    color: "#BD081C",
    logoUrl: getLogo("animalplanet.com"),
    exampleUrl: "",
    description: "Support for AnimalPlanet extraction."
  },
  {
    id: "anvato",
    name: "Anvato",
    color: "#FF4500",
    logoUrl: getLogo("anvato.com"),
    exampleUrl: "",
    description: "Support for Anvato extraction."
  },
  {
    id: "apa",
    name: "APA",
    color: "#0A66C2",
    logoUrl: getLogo("apa.com"),
    exampleUrl: "",
    description: "Support for APA extraction."
  },
  {
    id: "aparat",
    name: "Aparat",
    color: "#1AB7EA",
    logoUrl: getLogo("aparat.com"),
    exampleUrl: "",
    description: "Support for Aparat extraction."
  },
  {
    id: "applepodcasts",
    name: "ApplePodcasts",
    color: "#FF5500",
    logoUrl: getLogo("applepodcasts.com"),
    exampleUrl: "",
    description: "Support for ApplePodcasts extraction."
  },
  {
    id: "appletrailers",
    name: "appletrailers",
    color: "#0062D2",
    logoUrl: getLogo("appletrailers.com"),
    exampleUrl: "",
    description: "Support for appletrailers extraction."
  },
  {
    id: "archive_org",
    name: "archive.org",
    color: "#00A1D6",
    logoUrl: getLogo("archive.org"),
    exampleUrl: "",
    description: "archive.org video and audio"
  },
  {
    id: "arcpublishing",
    name: "ArcPublishing",
    color: "#0085ff",
    logoUrl: getLogo("arcpublishing.com"),
    exampleUrl: "",
    description: "Support for ArcPublishing extraction."
  },
  {
    id: "ard",
    name: "ARD",
    color: "#625DF5",
    logoUrl: getLogo("ard.com"),
    exampleUrl: "",
    description: "Support for ARD extraction."
  },
  {
    id: "ardaudiothek",
    name: "ARDAudiothek",
    color: "#ED812B",
    logoUrl: getLogo("ardaudiothek.com"),
    exampleUrl: "",
    description: "Support for ARDAudiothek extraction."
  },
  {
    id: "ardaudiothekplaylist",
    name: "ARDAudiothekPlaylist",
    color: "#FDA238",
    logoUrl: getLogo("ardaudiothekplaylist.com"),
    exampleUrl: "",
    description: "Support for ARDAudiothekPlaylist extraction."
  },
  {
    id: "ardmediathek",
    name: "ARDMediathek",
    color: "#FF0000",
    logoUrl: getLogo("ardmediathek.com"),
    exampleUrl: "",
    description: "Support for ARDMediathek extraction."
  },
  {
    id: "ardmediathekcollection",
    name: "ARDMediathekCollection",
    color: "#000000",
    logoUrl: getLogo("ardmediathekcollection.com"),
    exampleUrl: "",
    description: "Support for ARDMediathekCollection extraction."
  },
  {
    id: "art19",
    name: "Art19",
    color: "#E1306C",
    logoUrl: getLogo("art19.com"),
    exampleUrl: "",
    description: "Support for Art19 extraction."
  },
  {
    id: "art19show",
    name: "Art19Show",
    color: "#1877F2",
    logoUrl: getLogo("art19show.com"),
    exampleUrl: "",
    description: "Support for Art19Show extraction."
  },
  {
    id: "arte_sky_it",
    name: "arte.sky.it",
    color: "#1DA1F2",
    logoUrl: getLogo("arte.sky.it.com"),
    exampleUrl: "",
    description: "Support for arte.sky.it extraction."
  },
  {
    id: "artetv",
    name: "ArteTV",
    color: "#9146FF",
    logoUrl: getLogo("artetv.com"),
    exampleUrl: "",
    description: "Support for ArteTV extraction."
  },
  {
    id: "artetvcategory",
    name: "ArteTVCategory",
    color: "#BD081C",
    logoUrl: getLogo("artetvcategory.com"),
    exampleUrl: "",
    description: "Support for ArteTVCategory extraction."
  },
  {
    id: "artetvembed",
    name: "ArteTVEmbed",
    color: "#FF4500",
    logoUrl: getLogo("artetvembed.com"),
    exampleUrl: "",
    description: "Support for ArteTVEmbed extraction."
  },
  {
    id: "artetvplaylist",
    name: "ArteTVPlaylist",
    color: "#0A66C2",
    logoUrl: getLogo("artetvplaylist.com"),
    exampleUrl: "",
    description: "Support for ArteTVPlaylist extraction."
  },
  {
    id: "asobichannel",
    name: "asobichannel",
    color: "#1AB7EA",
    logoUrl: getLogo("asobichannel.com"),
    exampleUrl: "",
    description: "ASOBI CHANNEL"
  },
  {
    id: "asobistage",
    name: "AsobiStage",
    color: "#FF5500",
    logoUrl: getLogo("asobistage.com"),
    exampleUrl: "",
    description: "ASOBISTAGE (アソビステージ)"
  },
  {
    id: "atresplayer",
    name: "AtresPlayer",
    color: "#0062D2",
    logoUrl: getLogo("atresplayer.com"),
    exampleUrl: "",
    description: "[*atresplayer*](## \"netrc machine\")"
  },
  {
    id: "atscaleconfevent",
    name: "AtScaleConfEvent",
    color: "#00A1D6",
    logoUrl: getLogo("atscaleconfevent.com"),
    exampleUrl: "",
    description: "Support for AtScaleConfEvent extraction."
  },
  {
    id: "atvat",
    name: "ATVAt",
    color: "#0085ff",
    logoUrl: getLogo("atvat.com"),
    exampleUrl: "",
    description: "Support for ATVAt extraction."
  },
  {
    id: "audimedia",
    name: "AudiMedia",
    color: "#625DF5",
    logoUrl: getLogo("audimedia.com"),
    exampleUrl: "",
    description: "Support for AudiMedia extraction."
  },
  {
    id: "audioboom",
    name: "AudioBoom",
    color: "#ED812B",
    logoUrl: getLogo("audioboom.com"),
    exampleUrl: "",
    description: "Support for AudioBoom extraction."
  },
  {
    id: "audiomack",
    name: "audiomack",
    color: "#FDA238",
    logoUrl: getLogo("audiomack.com"),
    exampleUrl: "",
    description: "Support for audiomack extraction."
  },
  {
    id: "audius",
    name: "Audius",
    color: "#FF0000",
    logoUrl: getLogo("Audius.co"),
    exampleUrl: "",
    description: "Audius.co"
  },
  {
    id: "awaan",
    name: "AWAAN",
    color: "#000000",
    logoUrl: getLogo("awaan.com"),
    exampleUrl: "",
    description: "Support for AWAAN extraction."
  },
  {
    id: "axs_tv",
    name: "axs.tv",
    color: "#E1306C",
    logoUrl: getLogo("axs.tv.com"),
    exampleUrl: "",
    description: "Support for axs.tv extraction."
  },
  {
    id: "azmedien",
    name: "AZMedien",
    color: "#1877F2",
    logoUrl: getLogo("azmedien.com"),
    exampleUrl: "",
    description: "AZ Medien videos"
  },
  {
    id: "baiduvideo",
    name: "BaiduVideo",
    color: "#1DA1F2",
    logoUrl: getLogo("baiduvideo.com"),
    exampleUrl: "",
    description: "百度视频"
  },
  {
    id: "banbye",
    name: "BanBye",
    color: "#9146FF",
    logoUrl: getLogo("banbye.com"),
    exampleUrl: "",
    description: "Support for BanBye extraction."
  },
  {
    id: "banbyechannel",
    name: "BanByeChannel",
    color: "#BD081C",
    logoUrl: getLogo("banbyechannel.com"),
    exampleUrl: "",
    description: "Support for BanByeChannel extraction."
  },
  {
    id: "bandcamp",
    name: "Bandcamp",
    color: "#FF4500",
    logoUrl: getLogo("bandcamp.com"),
    exampleUrl: "",
    description: "Support for Bandcamp extraction."
  },
  {
    id: "bandlab",
    name: "Bandlab",
    color: "#0A66C2",
    logoUrl: getLogo("bandlab.com"),
    exampleUrl: "",
    description: "Support for Bandlab extraction."
  },
  {
    id: "bandlabplaylist",
    name: "BandlabPlaylist",
    color: "#1AB7EA",
    logoUrl: getLogo("bandlabplaylist.com"),
    exampleUrl: "",
    description: "Support for BandlabPlaylist extraction."
  },
  {
    id: "bannedvideo",
    name: "BannedVideo",
    color: "#FF5500",
    logoUrl: getLogo("bannedvideo.com"),
    exampleUrl: "",
    description: "Support for BannedVideo extraction."
  },
  {
    id: "bbc",
    name: "bbc",
    color: "#0062D2",
    logoUrl: getLogo("bbc.com"),
    exampleUrl: "",
    description: "[*bbc*](## \"netrc machine\") BBC"
  },
  {
    id: "bbc_co_uk",
    name: "bbc.co.uk",
    color: "#00A1D6",
    logoUrl: getLogo("bbc.co.uk.com"),
    exampleUrl: "",
    description: "[*bbc*](## \"netrc machine\") BBC iPlayer"
  },
  {
    id: "bbvtv",
    name: "BBVTV",
    color: "#0085ff",
    logoUrl: getLogo("bbvtv.com"),
    exampleUrl: "",
    description: "[*bbvtv*](## \"netrc machine\")"
  },
  {
    id: "bbvtvlive",
    name: "BBVTVLive",
    color: "#625DF5",
    logoUrl: getLogo("bbvtvlive.com"),
    exampleUrl: "",
    description: "[*bbvtv*](## \"netrc machine\")"
  },
  {
    id: "bbvtvrecordings",
    name: "BBVTVRecordings",
    color: "#ED812B",
    logoUrl: getLogo("bbvtvrecordings.com"),
    exampleUrl: "",
    description: "[*bbvtv*](## \"netrc machine\")"
  },
  {
    id: "beacontv",
    name: "BeaconTv",
    color: "#FDA238",
    logoUrl: getLogo("beacontv.com"),
    exampleUrl: "",
    description: "Support for BeaconTv extraction."
  },
  {
    id: "beatbumpplaylist",
    name: "BeatBumpPlaylist",
    color: "#FF0000",
    logoUrl: getLogo("beatbumpplaylist.com"),
    exampleUrl: "",
    description: "Support for BeatBumpPlaylist extraction."
  },
  {
    id: "beatbumpvideo",
    name: "BeatBumpVideo",
    color: "#000000",
    logoUrl: getLogo("beatbumpvideo.com"),
    exampleUrl: "",
    description: "Support for BeatBumpVideo extraction."
  },
  {
    id: "beatport",
    name: "Beatport",
    color: "#E1306C",
    logoUrl: getLogo("beatport.com"),
    exampleUrl: "",
    description: "Support for Beatport extraction."
  },
  {
    id: "beeg",
    name: "Beeg",
    color: "#1877F2",
    logoUrl: getLogo("beeg.com"),
    exampleUrl: "",
    description: "Support for Beeg extraction."
  },
  {
    id: "berufetv",
    name: "BerufeTV",
    color: "#1DA1F2",
    logoUrl: getLogo("berufetv.com"),
    exampleUrl: "",
    description: "Support for BerufeTV extraction."
  },
  {
    id: "bet",
    name: "Bet",
    color: "#9146FF",
    logoUrl: getLogo("bet.com"),
    exampleUrl: "",
    description: "Support for Bet extraction."
  },
  {
    id: "bfmtv",
    name: "bfmtv",
    color: "#BD081C",
    logoUrl: getLogo("bfmtv.com"),
    exampleUrl: "",
    description: "Support for bfmtv extraction."
  },
  {
    id: "bigflix",
    name: "Bigflix",
    color: "#FF4500",
    logoUrl: getLogo("bigflix.com"),
    exampleUrl: "",
    description: "Support for Bigflix extraction."
  },
  {
    id: "bigo",
    name: "Bigo",
    color: "#0A66C2",
    logoUrl: getLogo("bigo.com"),
    exampleUrl: "",
    description: "Support for Bigo extraction."
  },
  {
    id: "bild",
    name: "Bild",
    color: "#1AB7EA",
    logoUrl: getLogo("Bild.de"),
    exampleUrl: "",
    description: "Bild.de"
  },
  {
    id: "bilibili",
    name: "BiliBili",
    color: "#FF5500",
    logoUrl: getLogo("bilibili.com"),
    exampleUrl: "",
    description: "Support for BiliBili extraction."
  },
  {
    id: "bilibili_category_extractor",
    name: "Bilibili category extractor",
    color: "#0062D2",
    logoUrl: getLogo("bilibili category extractor.com"),
    exampleUrl: "",
    description: "Support for Bilibili category extractor extraction."
  },
  {
    id: "bilibiliaudio",
    name: "BilibiliAudio",
    color: "#00A1D6",
    logoUrl: getLogo("bilibiliaudio.com"),
    exampleUrl: "",
    description: "Support for BilibiliAudio extraction."
  },
  {
    id: "bilibiliaudioalbum",
    name: "BilibiliAudioAlbum",
    color: "#0085ff",
    logoUrl: getLogo("bilibiliaudioalbum.com"),
    exampleUrl: "",
    description: "Support for BilibiliAudioAlbum extraction."
  },
  {
    id: "bilibilibangumi",
    name: "BiliBiliBangumi",
    color: "#625DF5",
    logoUrl: getLogo("bilibilibangumi.com"),
    exampleUrl: "",
    description: "Support for BiliBiliBangumi extraction."
  },
  {
    id: "bilibilibangumimedia",
    name: "BiliBiliBangumiMedia",
    color: "#ED812B",
    logoUrl: getLogo("bilibilibangumimedia.com"),
    exampleUrl: "",
    description: "Support for BiliBiliBangumiMedia extraction."
  },
  {
    id: "bilibilibangumiseason",
    name: "BiliBiliBangumiSeason",
    color: "#FDA238",
    logoUrl: getLogo("bilibilibangumiseason.com"),
    exampleUrl: "",
    description: "Support for BiliBiliBangumiSeason extraction."
  },
  {
    id: "bilibilicheese",
    name: "BilibiliCheese",
    color: "#FF0000",
    logoUrl: getLogo("bilibilicheese.com"),
    exampleUrl: "",
    description: "Support for BilibiliCheese extraction."
  },
  {
    id: "bilibilicheeseseason",
    name: "BilibiliCheeseSeason",
    color: "#000000",
    logoUrl: getLogo("bilibilicheeseseason.com"),
    exampleUrl: "",
    description: "Support for BilibiliCheeseSeason extraction."
  },
  {
    id: "bilibilicollectionlist",
    name: "BilibiliCollectionList",
    color: "#E1306C",
    logoUrl: getLogo("bilibilicollectionlist.com"),
    exampleUrl: "",
    description: "Support for BilibiliCollectionList extraction."
  },
  {
    id: "bilibilidynamic",
    name: "BiliBiliDynamic",
    color: "#1877F2",
    logoUrl: getLogo("bilibilidynamic.com"),
    exampleUrl: "",
    description: "Support for BiliBiliDynamic extraction."
  },
  {
    id: "bilibilifavoriteslist",
    name: "BilibiliFavoritesList",
    color: "#1DA1F2",
    logoUrl: getLogo("bilibilifavoriteslist.com"),
    exampleUrl: "",
    description: "Support for BilibiliFavoritesList extraction."
  },
  {
    id: "bilibiliplayer",
    name: "BiliBiliPlayer",
    color: "#9146FF",
    logoUrl: getLogo("bilibiliplayer.com"),
    exampleUrl: "",
    description: "Support for BiliBiliPlayer extraction."
  },
  {
    id: "bilibiliplaylist",
    name: "BilibiliPlaylist",
    color: "#BD081C",
    logoUrl: getLogo("bilibiliplaylist.com"),
    exampleUrl: "",
    description: "Support for BilibiliPlaylist extraction."
  },
  {
    id: "bilibilisearch",
    name: "BiliBiliSearch",
    color: "#FF4500",
    logoUrl: getLogo("bilibilisearch.com"),
    exampleUrl: "",
    description: "Bilibili video search; \"bilisearch:\" prefix"
  },
  {
    id: "bilibiliserieslist",
    name: "BilibiliSeriesList",
    color: "#0A66C2",
    logoUrl: getLogo("bilibiliserieslist.com"),
    exampleUrl: "",
    description: "Support for BilibiliSeriesList extraction."
  },
  {
    id: "bilibilispaceaudio",
    name: "BilibiliSpaceAudio",
    color: "#1AB7EA",
    logoUrl: getLogo("bilibilispaceaudio.com"),
    exampleUrl: "",
    description: "Support for BilibiliSpaceAudio extraction."
  },
  {
    id: "bilibilispacevideo",
    name: "BilibiliSpaceVideo",
    color: "#FF5500",
    logoUrl: getLogo("bilibilispacevideo.com"),
    exampleUrl: "",
    description: "Support for BilibiliSpaceVideo extraction."
  },
  {
    id: "bilibiliwatchlater",
    name: "BilibiliWatchlater",
    color: "#0062D2",
    logoUrl: getLogo("bilibiliwatchlater.com"),
    exampleUrl: "",
    description: "Support for BilibiliWatchlater extraction."
  },
  {
    id: "biliintl",
    name: "BiliIntl",
    color: "#00A1D6",
    logoUrl: getLogo("biliintl.com"),
    exampleUrl: "",
    description: "[*biliintl*](## \"netrc machine\")"
  },
  {
    id: "bililive",
    name: "BiliLive",
    color: "#0085ff",
    logoUrl: getLogo("bililive.com"),
    exampleUrl: "",
    description: "Support for BiliLive extraction."
  },
  {
    id: "biobiochiletv",
    name: "BioBioChileTV",
    color: "#625DF5",
    logoUrl: getLogo("biobiochiletv.com"),
    exampleUrl: "",
    description: "Support for BioBioChileTV extraction."
  },
  {
    id: "biography",
    name: "Biography",
    color: "#ED812B",
    logoUrl: getLogo("biography.com"),
    exampleUrl: "",
    description: "Support for Biography extraction."
  },
  {
    id: "bitchute",
    name: "BitChute",
    color: "#FDA238",
    logoUrl: getLogo("bitchute.com"),
    exampleUrl: "",
    description: "Support for BitChute extraction."
  },
  {
    id: "bitchutechannel",
    name: "BitChuteChannel",
    color: "#FF0000",
    logoUrl: getLogo("bitchutechannel.com"),
    exampleUrl: "",
    description: "Support for BitChuteChannel extraction."
  },
  {
    id: "bitmovin",
    name: "Bitmovin",
    color: "#000000",
    logoUrl: getLogo("bitmovin.com"),
    exampleUrl: "",
    description: "Support for Bitmovin extraction."
  },
  {
    id: "blackboardcollaborate",
    name: "BlackboardCollaborate",
    color: "#E1306C",
    logoUrl: getLogo("blackboardcollaborate.com"),
    exampleUrl: "",
    description: "Support for BlackboardCollaborate extraction."
  },
  {
    id: "blackboardcollaboratelaunch",
    name: "BlackboardCollaborateLaunch",
    color: "#1877F2",
    logoUrl: getLogo("blackboardcollaboratelaunch.com"),
    exampleUrl: "",
    description: "Support for BlackboardCollaborateLaunch extraction."
  },
  {
    id: "blerp",
    name: "blerp",
    color: "#1DA1F2",
    logoUrl: getLogo("blerp.com"),
    exampleUrl: "",
    description: "Support for blerp extraction."
  },
  {
    id: "blogger_com",
    name: "blogger.com",
    color: "#9146FF",
    logoUrl: getLogo("blogger.com.com"),
    exampleUrl: "",
    description: "Support for blogger.com extraction."
  },
  {
    id: "bloomberg",
    name: "Bloomberg",
    color: "#BD081C",
    logoUrl: getLogo("bloomberg.com"),
    exampleUrl: "",
    description: "Support for Bloomberg extraction."
  },
  {
    id: "bluesky",
    name: "Bluesky",
    color: "#FF4500",
    logoUrl: getLogo("bluesky.com"),
    exampleUrl: "",
    description: "Support for Bluesky extraction."
  },
  {
    id: "bokecc",
    name: "BokeCC",
    color: "#0A66C2",
    logoUrl: getLogo("bokecc.com"),
    exampleUrl: "",
    description: "CC视频"
  },
  {
    id: "bongacams",
    name: "BongaCams",
    color: "#1AB7EA",
    logoUrl: getLogo("bongacams.com"),
    exampleUrl: "",
    description: "Support for BongaCams extraction."
  },
  {
    id: "boosty",
    name: "Boosty",
    color: "#FF5500",
    logoUrl: getLogo("boosty.com"),
    exampleUrl: "",
    description: "Support for Boosty extraction."
  },
  {
    id: "bostonglobe",
    name: "BostonGlobe",
    color: "#0062D2",
    logoUrl: getLogo("bostonglobe.com"),
    exampleUrl: "",
    description: "Support for BostonGlobe extraction."
  },
  {
    id: "box",
    name: "Box",
    color: "#00A1D6",
    logoUrl: getLogo("box.com"),
    exampleUrl: "",
    description: "Support for Box extraction."
  },
  {
    id: "boxcastvideo",
    name: "BoxCastVideo",
    color: "#0085ff",
    logoUrl: getLogo("boxcastvideo.com"),
    exampleUrl: "",
    description: "Support for BoxCastVideo extraction."
  },
  {
    id: "bpb",
    name: "Bpb",
    color: "#625DF5",
    logoUrl: getLogo("bpb.com"),
    exampleUrl: "",
    description: "Bundeszentrale für politische Bildung"
  },
  {
    id: "brainpop",
    name: "BrainPOP",
    color: "#ED812B",
    logoUrl: getLogo("brainpop.com"),
    exampleUrl: "",
    description: "[*brainpop*](## \"netrc machine\")"
  },
  {
    id: "brainpopell",
    name: "BrainPOPELL",
    color: "#FDA238",
    logoUrl: getLogo("brainpopell.com"),
    exampleUrl: "",
    description: "[*brainpop*](## \"netrc machine\")"
  },
  {
    id: "brainpopesp",
    name: "BrainPOPEsp",
    color: "#FF0000",
    logoUrl: getLogo("brainpopesp.com"),
    exampleUrl: "",
    description: "[*brainpop*](## \"netrc machine\") BrainPOP Español"
  },
  {
    id: "brainpopfr",
    name: "BrainPOPFr",
    color: "#000000",
    logoUrl: getLogo("brainpopfr.com"),
    exampleUrl: "",
    description: "[*brainpop*](## \"netrc machine\") BrainPOP Français"
  },
  {
    id: "brainpopil",
    name: "BrainPOPIl",
    color: "#E1306C",
    logoUrl: getLogo("brainpopil.com"),
    exampleUrl: "",
    description: "[*brainpop*](## \"netrc machine\") BrainPOP Hebrew"
  },
  {
    id: "brainpopjr",
    name: "BrainPOPJr",
    color: "#1877F2",
    logoUrl: getLogo("brainpopjr.com"),
    exampleUrl: "",
    description: "[*brainpop*](## \"netrc machine\")"
  },
  {
    id: "bravotv",
    name: "BravoTV",
    color: "#1DA1F2",
    logoUrl: getLogo("bravotv.com"),
    exampleUrl: "",
    description: "Support for BravoTV extraction."
  },
  {
    id: "breitbart",
    name: "BreitBart",
    color: "#9146FF",
    logoUrl: getLogo("breitbart.com"),
    exampleUrl: "",
    description: "Support for BreitBart extraction."
  },
  {
    id: "btvplus",
    name: "BTVPlus",
    color: "#BD081C",
    logoUrl: getLogo("btvplus.com"),
    exampleUrl: "",
    description: "Support for BTVPlus extraction."
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    color: "#FF4500",
    logoUrl: getLogo("bundesliga.com"),
    exampleUrl: "",
    description: "Support for Bundesliga extraction."
  },
  {
    id: "bundestag",
    name: "Bundestag",
    color: "#0A66C2",
    logoUrl: getLogo("bundestag.com"),
    exampleUrl: "",
    description: "Support for Bundestag extraction."
  },
  {
    id: "bunnycdn",
    name: "BunnyCdn",
    color: "#1AB7EA",
    logoUrl: getLogo("bunnycdn.com"),
    exampleUrl: "",
    description: "Support for BunnyCdn extraction."
  },
  {
    id: "businessinsider",
    name: "BusinessInsider",
    color: "#FF5500",
    logoUrl: getLogo("businessinsider.com"),
    exampleUrl: "",
    description: "Support for BusinessInsider extraction."
  },
  {
    id: "buzzfeed",
    name: "BuzzFeed",
    color: "#0062D2",
    logoUrl: getLogo("buzzfeed.com"),
    exampleUrl: "",
    description: "Support for BuzzFeed extraction."
  },
  {
    id: "caffeinetv",
    name: "CaffeineTV",
    color: "#00A1D6",
    logoUrl: getLogo("caffeinetv.com"),
    exampleUrl: "",
    description: "Support for CaffeineTV extraction."
  },
  {
    id: "callin",
    name: "Callin",
    color: "#0085ff",
    logoUrl: getLogo("callin.com"),
    exampleUrl: "",
    description: "Support for Callin extraction."
  },
  {
    id: "caltrans",
    name: "Caltrans",
    color: "#625DF5",
    logoUrl: getLogo("caltrans.com"),
    exampleUrl: "",
    description: "Support for Caltrans extraction."
  },
  {
    id: "cam4",
    name: "CAM4",
    color: "#ED812B",
    logoUrl: getLogo("cam4.com"),
    exampleUrl: "",
    description: "Support for CAM4 extraction."
  },
  {
    id: "camdemy",
    name: "Camdemy",
    color: "#FDA238",
    logoUrl: getLogo("camdemy.com"),
    exampleUrl: "",
    description: "Support for Camdemy extraction."
  },
  {
    id: "camdemyfolder",
    name: "CamdemyFolder",
    color: "#FF0000",
    logoUrl: getLogo("camdemyfolder.com"),
    exampleUrl: "",
    description: "Support for CamdemyFolder extraction."
  },
  {
    id: "camfmepisode",
    name: "CamFMEpisode",
    color: "#000000",
    logoUrl: getLogo("camfmepisode.com"),
    exampleUrl: "",
    description: "Support for CamFMEpisode extraction."
  },
  {
    id: "camfmshow",
    name: "CamFMShow",
    color: "#E1306C",
    logoUrl: getLogo("camfmshow.com"),
    exampleUrl: "",
    description: "Support for CamFMShow extraction."
  },
  {
    id: "cammodels",
    name: "CamModels",
    color: "#1877F2",
    logoUrl: getLogo("cammodels.com"),
    exampleUrl: "",
    description: "Support for CamModels extraction."
  },
  {
    id: "camsoda",
    name: "Camsoda",
    color: "#1DA1F2",
    logoUrl: getLogo("camsoda.com"),
    exampleUrl: "",
    description: "Support for Camsoda extraction."
  },
  {
    id: "camtasiaembed",
    name: "CamtasiaEmbed",
    color: "#9146FF",
    logoUrl: getLogo("camtasiaembed.com"),
    exampleUrl: "",
    description: "Support for CamtasiaEmbed extraction."
  },
  {
    id: "canal1",
    name: "Canal1",
    color: "#BD081C",
    logoUrl: getLogo("canal1.com"),
    exampleUrl: "",
    description: "Support for Canal1 extraction."
  },
  {
    id: "canalalpha",
    name: "CanalAlpha",
    color: "#FF4500",
    logoUrl: getLogo("canalalpha.com"),
    exampleUrl: "",
    description: "Support for CanalAlpha extraction."
  },
  {
    id: "canalc2_tv",
    name: "canalc2.tv",
    color: "#0A66C2",
    logoUrl: getLogo("canalc2.tv.com"),
    exampleUrl: "",
    description: "Support for canalc2.tv extraction."
  },
  {
    id: "canalplus",
    name: "Canalplus",
    color: "#1AB7EA",
    logoUrl: getLogo("mycanal.fr"),
    exampleUrl: "",
    description: "mycanal.fr and piwiplus.fr"
  },
  {
    id: "canalsurmas",
    name: "Canalsurmas",
    color: "#FF5500",
    logoUrl: getLogo("canalsurmas.com"),
    exampleUrl: "",
    description: "Support for Canalsurmas extraction."
  },
  {
    id: "caracoltvplay",
    name: "CaracolTvPlay",
    color: "#0062D2",
    logoUrl: getLogo("caracoltvplay.com"),
    exampleUrl: "",
    description: "[*caracoltv-play*](## \"netrc machine\")"
  },
  {
    id: "cbc_ca",
    name: "cbc.ca",
    color: "#00A1D6",
    logoUrl: getLogo("cbc.ca.com"),
    exampleUrl: "",
    description: "Support for cbc.ca extraction."
  },
  {
    id: "cbslocal",
    name: "CBSLocal",
    color: "#0085ff",
    logoUrl: getLogo("cbslocal.com"),
    exampleUrl: "",
    description: "Support for CBSLocal extraction."
  },
  {
    id: "cbslocalarticle",
    name: "CBSLocalArticle",
    color: "#625DF5",
    logoUrl: getLogo("cbslocalarticle.com"),
    exampleUrl: "",
    description: "Support for CBSLocalArticle extraction."
  },
  {
    id: "cbslocallive",
    name: "CBSLocalLive",
    color: "#ED812B",
    logoUrl: getLogo("cbslocallive.com"),
    exampleUrl: "",
    description: "Support for CBSLocalLive extraction."
  },
  {
    id: "cbsnews",
    name: "cbsnews",
    color: "#FDA238",
    logoUrl: getLogo("cbsnews.com"),
    exampleUrl: "",
    description: "CBS News"
  },
  {
    id: "ccma",
    name: "CCMA",
    color: "#FF0000",
    logoUrl: getLogo("ccma.com"),
    exampleUrl: "",
    description: "3Cat, TV3 and Catalunya Ràdio"
  },
  {
    id: "cctv",
    name: "CCTV",
    color: "#000000",
    logoUrl: getLogo("cctv.com"),
    exampleUrl: "",
    description: "央视网"
  },
  {
    id: "cda",
    name: "CDA",
    color: "#E1306C",
    logoUrl: getLogo("cda.com"),
    exampleUrl: "",
    description: "[*cdapl*](## \"netrc machine\")"
  },
  {
    id: "cdafolder",
    name: "CDAFolder",
    color: "#1877F2",
    logoUrl: getLogo("cdafolder.com"),
    exampleUrl: "",
    description: "Support for CDAFolder extraction."
  },
  {
    id: "cellebrite",
    name: "Cellebrite",
    color: "#1DA1F2",
    logoUrl: getLogo("cellebrite.com"),
    exampleUrl: "",
    description: "Support for Cellebrite extraction."
  },
  {
    id: "ceskatelevize",
    name: "CeskaTelevize",
    color: "#9146FF",
    logoUrl: getLogo("ceskatelevize.com"),
    exampleUrl: "",
    description: "Support for CeskaTelevize extraction."
  },
  {
    id: "cgtn",
    name: "CGTN",
    color: "#BD081C",
    logoUrl: getLogo("cgtn.com"),
    exampleUrl: "",
    description: "Support for CGTN extraction."
  },
  {
    id: "charlierose",
    name: "CharlieRose",
    color: "#FF4500",
    logoUrl: getLogo("charlierose.com"),
    exampleUrl: "",
    description: "Support for CharlieRose extraction."
  },
  {
    id: "chaturbate",
    name: "Chaturbate",
    color: "#0A66C2",
    logoUrl: getLogo("chaturbate.com"),
    exampleUrl: "",
    description: "Support for Chaturbate extraction."
  },
  {
    id: "chilloutzone",
    name: "Chilloutzone",
    color: "#1AB7EA",
    logoUrl: getLogo("chilloutzone.com"),
    exampleUrl: "",
    description: "Support for Chilloutzone extraction."
  },
  {
    id: "cielotv_it",
    name: "cielotv.it",
    color: "#FF5500",
    logoUrl: getLogo("cielotv.it.com"),
    exampleUrl: "",
    description: "Support for cielotv.it extraction."
  },
  {
    id: "cinetecamilano",
    name: "CinetecaMilano",
    color: "#0062D2",
    logoUrl: getLogo("cinetecamilano.com"),
    exampleUrl: "",
    description: "Support for CinetecaMilano extraction."
  },
  {
    id: "cineverse",
    name: "Cineverse",
    color: "#00A1D6",
    logoUrl: getLogo("cineverse.com"),
    exampleUrl: "",
    description: "Support for Cineverse extraction."
  },
  {
    id: "cineversedetails",
    name: "CineverseDetails",
    color: "#0085ff",
    logoUrl: getLogo("cineversedetails.com"),
    exampleUrl: "",
    description: "Support for CineverseDetails extraction."
  },
  {
    id: "ciscolivesearch",
    name: "CiscoLiveSearch",
    color: "#625DF5",
    logoUrl: getLogo("ciscolivesearch.com"),
    exampleUrl: "",
    description: "Support for CiscoLiveSearch extraction."
  },
  {
    id: "ciscolivesession",
    name: "CiscoLiveSession",
    color: "#ED812B",
    logoUrl: getLogo("ciscolivesession.com"),
    exampleUrl: "",
    description: "Support for CiscoLiveSession extraction."
  },
  {
    id: "ciscowebex",
    name: "ciscowebex",
    color: "#FDA238",
    logoUrl: getLogo("ciscowebex.com"),
    exampleUrl: "",
    description: "Cisco Webex"
  },
  {
    id: "cjsw",
    name: "CJSW",
    color: "#FF0000",
    logoUrl: getLogo("cjsw.com"),
    exampleUrl: "",
    description: "Support for CJSW extraction."
  },
  {
    id: "clipchamp",
    name: "Clipchamp",
    color: "#000000",
    logoUrl: getLogo("clipchamp.com"),
    exampleUrl: "",
    description: "Support for Clipchamp extraction."
  },
  {
    id: "clippit",
    name: "Clippit",
    color: "#E1306C",
    logoUrl: getLogo("clippit.com"),
    exampleUrl: "",
    description: "Support for Clippit extraction."
  },
  {
    id: "cloudflarestream",
    name: "CloudflareStream",
    color: "#1877F2",
    logoUrl: getLogo("cloudflarestream.com"),
    exampleUrl: "",
    description: "Support for CloudflareStream extraction."
  },
  {
    id: "cloudycdn",
    name: "CloudyCDN",
    color: "#1DA1F2",
    logoUrl: getLogo("cloudycdn.com"),
    exampleUrl: "",
    description: "Support for CloudyCDN extraction."
  },
  {
    id: "clyp",
    name: "Clyp",
    color: "#9146FF",
    logoUrl: getLogo("clyp.com"),
    exampleUrl: "",
    description: "Support for Clyp extraction."
  },
  {
    id: "cnbcvideo",
    name: "CNBCVideo",
    color: "#BD081C",
    logoUrl: getLogo("cnbcvideo.com"),
    exampleUrl: "",
    description: "Support for CNBCVideo extraction."
  },
  {
    id: "cnn",
    name: "CNN",
    color: "#FF4500",
    logoUrl: getLogo("cnn.com"),
    exampleUrl: "",
    description: "Support for CNN extraction."
  },
  {
    id: "cnnindonesia",
    name: "CNNIndonesia",
    color: "#0A66C2",
    logoUrl: getLogo("cnnindonesia.com"),
    exampleUrl: "",
    description: "Support for CNNIndonesia extraction."
  },
  {
    id: "comedycentral",
    name: "ComedyCentral",
    color: "#1AB7EA",
    logoUrl: getLogo("comedycentral.com"),
    exampleUrl: "",
    description: "Support for ComedyCentral extraction."
  },
  {
    id: "condenast",
    name: "CondeNast",
    color: "#FF5500",
    logoUrl: getLogo("condenast.com"),
    exampleUrl: "",
    description: "Condé Nast media group: Allure, Architectural Digest, Ars Technica, Bon Appétit, Brides, Condé Nast, Condé Nast Traveler, Details, Epicurious, GQ, Glamour, Golf Digest, SELF, Teen Vogue, The New Yorker, Vanity Fair, Vogue, W Magazine, WIRED"
  },
  {
    id: "contv",
    name: "CONtv",
    color: "#0062D2",
    logoUrl: getLogo("contv.com"),
    exampleUrl: "",
    description: "Support for CONtv extraction."
  },
  {
    id: "cookingchannel",
    name: "CookingChannel",
    color: "#00A1D6",
    logoUrl: getLogo("cookingchannel.com"),
    exampleUrl: "",
    description: "Support for CookingChannel extraction."
  },
  {
    id: "corus",
    name: "Corus",
    color: "#0085ff",
    logoUrl: getLogo("corus.com"),
    exampleUrl: "",
    description: "Support for Corus extraction."
  },
  {
    id: "coub",
    name: "Coub",
    color: "#625DF5",
    logoUrl: getLogo("coub.com"),
    exampleUrl: "",
    description: "Support for Coub extraction."
  },
  {
    id: "cozytv",
    name: "CozyTV",
    color: "#ED812B",
    logoUrl: getLogo("cozytv.com"),
    exampleUrl: "",
    description: "Support for CozyTV extraction."
  },
  {
    id: "cp24",
    name: "cp24",
    color: "#FDA238",
    logoUrl: getLogo("cp24.com"),
    exampleUrl: "",
    description: "Support for cp24 extraction."
  },
  {
    id: "cpac",
    name: "cpac",
    color: "#FF0000",
    logoUrl: getLogo("cpac.com"),
    exampleUrl: "",
    description: "Support for cpac extraction."
  },
  {
    id: "cracked",
    name: "Cracked",
    color: "#000000",
    logoUrl: getLogo("cracked.com"),
    exampleUrl: "",
    description: "Support for Cracked extraction."
  },
  {
    id: "craftsy",
    name: "Craftsy",
    color: "#E1306C",
    logoUrl: getLogo("craftsy.com"),
    exampleUrl: "",
    description: "Support for Craftsy extraction."
  },
  {
    id: "croatian_film",
    name: "croatian.film",
    color: "#1877F2",
    logoUrl: getLogo("croatian.film.com"),
    exampleUrl: "",
    description: "Support for croatian.film extraction."
  },
  {
    id: "crooksandliars",
    name: "CrooksAndLiars",
    color: "#1DA1F2",
    logoUrl: getLogo("crooksandliars.com"),
    exampleUrl: "",
    description: "Support for CrooksAndLiars extraction."
  },
  {
    id: "crowdbunker",
    name: "CrowdBunker",
    color: "#9146FF",
    logoUrl: getLogo("crowdbunker.com"),
    exampleUrl: "",
    description: "Support for CrowdBunker extraction."
  },
  {
    id: "crowdbunkerchannel",
    name: "CrowdBunkerChannel",
    color: "#BD081C",
    logoUrl: getLogo("crowdbunkerchannel.com"),
    exampleUrl: "",
    description: "Support for CrowdBunkerChannel extraction."
  },
  {
    id: "crtvg",
    name: "Crtvg",
    color: "#FF4500",
    logoUrl: getLogo("crtvg.com"),
    exampleUrl: "",
    description: "Support for Crtvg extraction."
  },
  {
    id: "cspan",
    name: "CSpan",
    color: "#0A66C2",
    logoUrl: getLogo("cspan.com"),
    exampleUrl: "",
    description: "C-SPAN"
  },
  {
    id: "cspancongress",
    name: "CSpanCongress",
    color: "#1AB7EA",
    logoUrl: getLogo("cspancongress.com"),
    exampleUrl: "",
    description: "Support for CSpanCongress extraction."
  },
  {
    id: "ctsnews",
    name: "CtsNews",
    color: "#FF5500",
    logoUrl: getLogo("ctsnews.com"),
    exampleUrl: "",
    description: "華視新聞"
  },
  {
    id: "ctvnews",
    name: "CTVNews",
    color: "#0062D2",
    logoUrl: getLogo("ctvnews.com"),
    exampleUrl: "",
    description: "Support for CTVNews extraction."
  },
  {
    id: "cu_ntv_co_jp",
    name: "cu.ntv.co.jp",
    color: "#00A1D6",
    logoUrl: getLogo("cu.ntv.co.jp.com"),
    exampleUrl: "",
    description: "日テレ無料TADA!"
  },
  {
    id: "cultureunplugged",
    name: "CultureUnplugged",
    color: "#0085ff",
    logoUrl: getLogo("cultureunplugged.com"),
    exampleUrl: "",
    description: "Support for CultureUnplugged extraction."
  },
  {
    id: "curiositystream",
    name: "curiositystream",
    color: "#625DF5",
    logoUrl: getLogo("curiositystream.com"),
    exampleUrl: "",
    description: "[*curiositystream*](## \"netrc machine\")"
  },
  {
    id: "cybrary",
    name: "Cybrary",
    color: "#ED812B",
    logoUrl: getLogo("cybrary.com"),
    exampleUrl: "",
    description: "[*cybrary*](## \"netrc machine\")"
  },
  {
    id: "cybrarycourse",
    name: "CybraryCourse",
    color: "#FDA238",
    logoUrl: getLogo("cybrarycourse.com"),
    exampleUrl: "",
    description: "[*cybrary*](## \"netrc machine\")"
  },
  {
    id: "dacastplaylist",
    name: "DacastPlaylist",
    color: "#FF0000",
    logoUrl: getLogo("dacastplaylist.com"),
    exampleUrl: "",
    description: "Support for DacastPlaylist extraction."
  },
  {
    id: "dacastvod",
    name: "DacastVOD",
    color: "#000000",
    logoUrl: getLogo("dacastvod.com"),
    exampleUrl: "",
    description: "Support for DacastVOD extraction."
  },
  {
    id: "dagelijksekost",
    name: "DagelijkseKost",
    color: "#E1306C",
    logoUrl: getLogo("dagelijksekost.een.be"),
    exampleUrl: "",
    description: "dagelijksekost.een.be"
  },
  {
    id: "dailymail",
    name: "DailyMail",
    color: "#1877F2",
    logoUrl: getLogo("dailymail.com"),
    exampleUrl: "",
    description: "Support for DailyMail extraction."
  },
  {
    id: "dailymotion",
    name: "dailymotion",
    color: "#1DA1F2",
    logoUrl: getLogo("dailymotion.com"),
    exampleUrl: "",
    description: "[*dailymotion*](## \"netrc machine\")"
  },
  {
    id: "dailywire",
    name: "DailyWire",
    color: "#9146FF",
    logoUrl: getLogo("dailywire.com"),
    exampleUrl: "",
    description: "Support for DailyWire extraction."
  },
  {
    id: "dailywirepodcast",
    name: "DailyWirePodcast",
    color: "#BD081C",
    logoUrl: getLogo("dailywirepodcast.com"),
    exampleUrl: "",
    description: "Support for DailyWirePodcast extraction."
  },
  {
    id: "dangalplay",
    name: "dangalplay",
    color: "#FF4500",
    logoUrl: getLogo("dangalplay.com"),
    exampleUrl: "",
    description: "[*dangalplay*](## \"netrc machine\")"
  },
  {
    id: "daum_net",
    name: "daum.net",
    color: "#0A66C2",
    logoUrl: getLogo("daum.net.com"),
    exampleUrl: "",
    description: "Support for daum.net extraction."
  },
  {
    id: "dbtv",
    name: "DBTV",
    color: "#1AB7EA",
    logoUrl: getLogo("dbtv.com"),
    exampleUrl: "",
    description: "Support for DBTV extraction."
  },
  {
    id: "dctptv",
    name: "DctpTv",
    color: "#FF5500",
    logoUrl: getLogo("dctptv.com"),
    exampleUrl: "",
    description: "Support for DctpTv extraction."
  },
  {
    id: "democracynow",
    name: "democracynow",
    color: "#0062D2",
    logoUrl: getLogo("democracynow.com"),
    exampleUrl: "",
    description: "Support for democracynow extraction."
  },
  {
    id: "destinationamerica",
    name: "DestinationAmerica",
    color: "#00A1D6",
    logoUrl: getLogo("destinationamerica.com"),
    exampleUrl: "",
    description: "Support for DestinationAmerica extraction."
  },
  {
    id: "detikembed",
    name: "DetikEmbed",
    color: "#0085ff",
    logoUrl: getLogo("detikembed.com"),
    exampleUrl: "",
    description: "Support for DetikEmbed extraction."
  },
  {
    id: "deuxm",
    name: "DeuxM",
    color: "#625DF5",
    logoUrl: getLogo("deuxm.com"),
    exampleUrl: "",
    description: "Support for DeuxM extraction."
  },
  {
    id: "deuxmnews",
    name: "DeuxMNews",
    color: "#ED812B",
    logoUrl: getLogo("deuxmnews.com"),
    exampleUrl: "",
    description: "Support for DeuxMNews extraction."
  },
  {
    id: "digitalconcerthall",
    name: "DigitalConcertHall",
    color: "#FDA238",
    logoUrl: getLogo("digitalconcerthall.com"),
    exampleUrl: "",
    description: "[*digitalconcerthall*](## \"netrc machine\") DigitalConcertHall extractor"
  },
  {
    id: "digitallyspeaking",
    name: "DigitallySpeaking",
    color: "#FF0000",
    logoUrl: getLogo("digitallyspeaking.com"),
    exampleUrl: "",
    description: "Support for DigitallySpeaking extraction."
  },
  {
    id: "digiteka",
    name: "Digiteka",
    color: "#000000",
    logoUrl: getLogo("digiteka.com"),
    exampleUrl: "",
    description: "Support for Digiteka extraction."
  },
  {
    id: "digiview",
    name: "Digiview",
    color: "#E1306C",
    logoUrl: getLogo("digiview.com"),
    exampleUrl: "",
    description: "Support for Digiview extraction."
  },
  {
    id: "discogsreleaseplaylist",
    name: "DiscogsReleasePlaylist",
    color: "#1877F2",
    logoUrl: getLogo("discogsreleaseplaylist.com"),
    exampleUrl: "",
    description: "Support for DiscogsReleasePlaylist extraction."
  },
  {
    id: "discoverylife",
    name: "DiscoveryLife",
    color: "#1DA1F2",
    logoUrl: getLogo("discoverylife.com"),
    exampleUrl: "",
    description: "Support for DiscoveryLife extraction."
  },
  {
    id: "discoverynetworksde",
    name: "DiscoveryNetworksDe",
    color: "#9146FF",
    logoUrl: getLogo("discoverynetworksde.com"),
    exampleUrl: "",
    description: "Support for DiscoveryNetworksDe extraction."
  },
  {
    id: "discoveryplus",
    name: "DiscoveryPlus",
    color: "#BD081C",
    logoUrl: getLogo("discoveryplus.com"),
    exampleUrl: "",
    description: "Support for DiscoveryPlus extraction."
  },
  {
    id: "discoveryplusindia",
    name: "DiscoveryPlusIndia",
    color: "#FF4500",
    logoUrl: getLogo("discoveryplusindia.com"),
    exampleUrl: "",
    description: "Support for DiscoveryPlusIndia extraction."
  },
  {
    id: "discoveryplusindiashow",
    name: "DiscoveryPlusIndiaShow",
    color: "#0A66C2",
    logoUrl: getLogo("discoveryplusindiashow.com"),
    exampleUrl: "",
    description: "Support for DiscoveryPlusIndiaShow extraction."
  },
  {
    id: "discoveryplusitaly",
    name: "DiscoveryPlusItaly",
    color: "#1AB7EA",
    logoUrl: getLogo("discoveryplusitaly.com"),
    exampleUrl: "",
    description: "Support for DiscoveryPlusItaly extraction."
  },
  {
    id: "discoveryplusitalyshow",
    name: "DiscoveryPlusItalyShow",
    color: "#FF5500",
    logoUrl: getLogo("discoveryplusitalyshow.com"),
    exampleUrl: "",
    description: "Support for DiscoveryPlusItalyShow extraction."
  },
  {
    id: "disney",
    name: "Disney",
    color: "#0062D2",
    logoUrl: getLogo("disney.com"),
    exampleUrl: "",
    description: "Support for Disney extraction."
  },
  {
    id: "dlf",
    name: "dlf",
    color: "#00A1D6",
    logoUrl: getLogo("dlf.com"),
    exampleUrl: "",
    description: "Support for dlf extraction."
  },
  {
    id: "douyin",
    name: "Douyin",
    color: "#0085ff",
    logoUrl: getLogo("douyin.com"),
    exampleUrl: "",
    description: "Support for Douyin extraction."
  },
  {
    id: "douyushow",
    name: "DouyuShow",
    color: "#625DF5",
    logoUrl: getLogo("douyushow.com"),
    exampleUrl: "",
    description: "Support for DouyuShow extraction."
  },
  {
    id: "douyutv",
    name: "DouyuTV",
    color: "#ED812B",
    logoUrl: getLogo("douyutv.com"),
    exampleUrl: "",
    description: "斗鱼直播"
  },
  {
    id: "dplay",
    name: "DPlay",
    color: "#FDA238",
    logoUrl: getLogo("dplay.com"),
    exampleUrl: "",
    description: "Support for DPlay extraction."
  },
  {
    id: "drbonanza",
    name: "DRBonanza",
    color: "#FF0000",
    logoUrl: getLogo("drbonanza.com"),
    exampleUrl: "",
    description: "Support for DRBonanza extraction."
  },
  {
    id: "drooble",
    name: "Drooble",
    color: "#000000",
    logoUrl: getLogo("drooble.com"),
    exampleUrl: "",
    description: "Support for Drooble extraction."
  },
  {
    id: "dropbox",
    name: "Dropbox",
    color: "#E1306C",
    logoUrl: getLogo("dropbox.com"),
    exampleUrl: "",
    description: "Support for Dropbox extraction."
  },
  {
    id: "dropout",
    name: "Dropout",
    color: "#1877F2",
    logoUrl: getLogo("dropout.com"),
    exampleUrl: "",
    description: "[*dropout*](## \"netrc machine\")"
  },
  {
    id: "dropoutseason",
    name: "DropoutSeason",
    color: "#1DA1F2",
    logoUrl: getLogo("dropoutseason.com"),
    exampleUrl: "",
    description: "Support for DropoutSeason extraction."
  },
  {
    id: "drtalks",
    name: "DrTalks",
    color: "#9146FF",
    logoUrl: getLogo("drtalks.com"),
    exampleUrl: "",
    description: "Support for DrTalks extraction."
  },
  {
    id: "drtv",
    name: "drtv",
    color: "#FF4500",
    logoUrl: getLogo("drtv.com"),
    exampleUrl: "",
    description: "Support for drtv extraction."
  },
  {
    id: "duboku",
    name: "duboku",
    color: "#0A66C2",
    logoUrl: getLogo("www.duboku.io"),
    exampleUrl: "",
    description: "www.duboku.io"
  },
  {
    id: "dumpert",
    name: "Dumpert",
    color: "#1AB7EA",
    logoUrl: getLogo("dumpert.com"),
    exampleUrl: "",
    description: "Support for Dumpert extraction."
  },
  {
    id: "duoplay",
    name: "Duoplay",
    color: "#FF5500",
    logoUrl: getLogo("duoplay.com"),
    exampleUrl: "",
    description: "Support for Duoplay extraction."
  },
  {
    id: "dvtv",
    name: "dvtv",
    color: "#0062D2",
    logoUrl: getLogo("video.aktualne.cz"),
    exampleUrl: "",
    description: "http://video.aktualne.cz/"
  },
  {
    id: "dzen_ru",
    name: "dzen.ru",
    color: "#00A1D6",
    logoUrl: getLogo("dzen.ru.com"),
    exampleUrl: "",
    description: "Дзен (dzen) formerly Яндекс.Дзен (Yandex Zen)"
  },
  {
    id: "ebaumsworld",
    name: "EbaumsWorld",
    color: "#0085ff",
    logoUrl: getLogo("ebaumsworld.com"),
    exampleUrl: "",
    description: "Support for EbaumsWorld extraction."
  },
  {
    id: "ebay",
    name: "Ebay",
    color: "#625DF5",
    logoUrl: getLogo("ebay.com"),
    exampleUrl: "",
    description: "Support for Ebay extraction."
  },
  {
    id: "einsundeinstv",
    name: "EinsUndEinsTV",
    color: "#ED812B",
    logoUrl: getLogo("einsundeinstv.com"),
    exampleUrl: "",
    description: "[*1und1tv*](## \"netrc machine\")"
  },
  {
    id: "einsundeinstvlive",
    name: "EinsUndEinsTVLive",
    color: "#FDA238",
    logoUrl: getLogo("einsundeinstvlive.com"),
    exampleUrl: "",
    description: "[*1und1tv*](## \"netrc machine\")"
  },
  {
    id: "einsundeinstvrecordings",
    name: "EinsUndEinsTVRecordings",
    color: "#FF0000",
    logoUrl: getLogo("einsundeinstvrecordings.com"),
    exampleUrl: "",
    description: "[*1und1tv*](## \"netrc machine\")"
  },
  {
    id: "eitb_tv",
    name: "eitb.tv",
    color: "#000000",
    logoUrl: getLogo("eitb.tv.com"),
    exampleUrl: "",
    description: "Support for eitb.tv extraction."
  },
  {
    id: "elementorembed",
    name: "ElementorEmbed",
    color: "#E1306C",
    logoUrl: getLogo("elementorembed.com"),
    exampleUrl: "",
    description: "Support for ElementorEmbed extraction."
  },
  {
    id: "elonet",
    name: "Elonet",
    color: "#1877F2",
    logoUrl: getLogo("elonet.com"),
    exampleUrl: "",
    description: "Support for Elonet extraction."
  },
  {
    id: "elpais",
    name: "ElPais",
    color: "#1DA1F2",
    logoUrl: getLogo("elpais.com"),
    exampleUrl: "",
    description: "El País"
  },
  {
    id: "eltrecetv",
    name: "ElTreceTV",
    color: "#9146FF",
    logoUrl: getLogo("eltrecetv.com"),
    exampleUrl: "",
    description: "El Trece TV (Argentina)"
  },
  {
    id: "embedly",
    name: "Embedly",
    color: "#BD081C",
    logoUrl: getLogo("embedly.com"),
    exampleUrl: "",
    description: "Support for Embedly extraction."
  },
  {
    id: "empflix",
    name: "EMPFlix",
    color: "#FF4500",
    logoUrl: getLogo("empflix.com"),
    exampleUrl: "",
    description: "Support for EMPFlix extraction."
  },
  {
    id: "epicon",
    name: "Epicon",
    color: "#0A66C2",
    logoUrl: getLogo("epicon.com"),
    exampleUrl: "",
    description: "Support for Epicon extraction."
  },
  {
    id: "epiconseries",
    name: "EpiconSeries",
    color: "#1AB7EA",
    logoUrl: getLogo("epiconseries.com"),
    exampleUrl: "",
    description: "Support for EpiconSeries extraction."
  },
  {
    id: "epidemicsound",
    name: "EpidemicSound",
    color: "#FF5500",
    logoUrl: getLogo("epidemicsound.com"),
    exampleUrl: "",
    description: "Support for EpidemicSound extraction."
  },
  {
    id: "eplus",
    name: "eplus",
    color: "#0062D2",
    logoUrl: getLogo("eplus.com"),
    exampleUrl: "",
    description: "[*eplus*](## \"netrc machine\") e+ (イープラス)"
  },
  {
    id: "epoch",
    name: "Epoch",
    color: "#00A1D6",
    logoUrl: getLogo("epoch.com"),
    exampleUrl: "",
    description: "Support for Epoch extraction."
  },
  {
    id: "erocast",
    name: "Erocast",
    color: "#625DF5",
    logoUrl: getLogo("erocast.com"),
    exampleUrl: "",
    description: "Support for Erocast extraction."
  },
  {
    id: "eroprofile",
    name: "EroProfile",
    color: "#ED812B",
    logoUrl: getLogo("eroprofile.com"),
    exampleUrl: "",
    description: "[*eroprofile*](## \"netrc machine\")"
  },
  {
    id: "errarhiiv",
    name: "ERRArhiiv",
    color: "#FDA238",
    logoUrl: getLogo("errarhiiv.com"),
    exampleUrl: "",
    description: "Support for ERRArhiiv extraction."
  },
  {
    id: "errjupiter",
    name: "ERRJupiter",
    color: "#FF0000",
    logoUrl: getLogo("errjupiter.com"),
    exampleUrl: "",
    description: "Support for ERRJupiter extraction."
  },
  {
    id: "ertflix",
    name: "ertflix",
    color: "#000000",
    logoUrl: getLogo("ertflix.com"),
    exampleUrl: "",
    description: "ERTFLIX videos"
  },
  {
    id: "espn",
    name: "ESPN",
    color: "#E1306C",
    logoUrl: getLogo("espn.com"),
    exampleUrl: "",
    description: "Support for ESPN extraction."
  },
  {
    id: "espnarticle",
    name: "ESPNArticle",
    color: "#1877F2",
    logoUrl: getLogo("espnarticle.com"),
    exampleUrl: "",
    description: "Support for ESPNArticle extraction."
  },
  {
    id: "espncricinfo",
    name: "ESPNCricInfo",
    color: "#1DA1F2",
    logoUrl: getLogo("espncricinfo.com"),
    exampleUrl: "",
    description: "Support for ESPNCricInfo extraction."
  },
  {
    id: "ettutv",
    name: "EttuTv",
    color: "#9146FF",
    logoUrl: getLogo("ettutv.com"),
    exampleUrl: "",
    description: "Support for EttuTv extraction."
  },
  {
    id: "europarlwebstream",
    name: "EuroParlWebstream",
    color: "#BD081C",
    logoUrl: getLogo("europarlwebstream.com"),
    exampleUrl: "",
    description: "Support for EuroParlWebstream extraction."
  },
  {
    id: "europeantour",
    name: "EuropeanTour",
    color: "#FF4500",
    logoUrl: getLogo("europeantour.com"),
    exampleUrl: "",
    description: "Support for EuropeanTour extraction."
  },
  {
    id: "eurosport",
    name: "Eurosport",
    color: "#0A66C2",
    logoUrl: getLogo("eurosport.com"),
    exampleUrl: "",
    description: "Support for Eurosport extraction."
  },
  {
    id: "euscreen",
    name: "EUScreen",
    color: "#1AB7EA",
    logoUrl: getLogo("euscreen.com"),
    exampleUrl: "",
    description: "Support for EUScreen extraction."
  },
  {
    id: "ewetv",
    name: "EWETV",
    color: "#FF5500",
    logoUrl: getLogo("ewetv.com"),
    exampleUrl: "",
    description: "[*ewetv*](## \"netrc machine\")"
  },
  {
    id: "ewetvlive",
    name: "EWETVLive",
    color: "#0062D2",
    logoUrl: getLogo("ewetvlive.com"),
    exampleUrl: "",
    description: "[*ewetv*](## \"netrc machine\")"
  },
  {
    id: "ewetvrecordings",
    name: "EWETVRecordings",
    color: "#00A1D6",
    logoUrl: getLogo("ewetvrecordings.com"),
    exampleUrl: "",
    description: "[*ewetv*](## \"netrc machine\")"
  },
  {
    id: "expressen",
    name: "Expressen",
    color: "#0085ff",
    logoUrl: getLogo("expressen.com"),
    exampleUrl: "",
    description: "Support for Expressen extraction."
  },
  {
    id: "eyedotv",
    name: "EyedoTV",
    color: "#625DF5",
    logoUrl: getLogo("eyedotv.com"),
    exampleUrl: "",
    description: "Support for EyedoTV extraction."
  },
  {
    id: "facebook",
    name: "facebook",
    color: "#ED812B",
    logoUrl: getLogo("facebook.com"),
    exampleUrl: "",
    description: "Support for facebook extraction."
  },
  {
    id: "facebookpluginsvideo",
    name: "FacebookPluginsVideo",
    color: "#FDA238",
    logoUrl: getLogo("facebookpluginsvideo.com"),
    exampleUrl: "",
    description: "Support for FacebookPluginsVideo extraction."
  },
  {
    id: "fathom",
    name: "Fathom",
    color: "#FF0000",
    logoUrl: getLogo("fathom.com"),
    exampleUrl: "",
    description: "Support for Fathom extraction."
  },
  {
    id: "faulio",
    name: "Faulio",
    color: "#000000",
    logoUrl: getLogo("faulio.com"),
    exampleUrl: "",
    description: "Support for Faulio extraction."
  },
  {
    id: "fauliolive",
    name: "FaulioLive",
    color: "#E1306C",
    logoUrl: getLogo("fauliolive.com"),
    exampleUrl: "",
    description: "Support for FaulioLive extraction."
  },
  {
    id: "faz_net",
    name: "faz.net",
    color: "#1877F2",
    logoUrl: getLogo("faz.net.com"),
    exampleUrl: "",
    description: "Support for faz.net extraction."
  },
  {
    id: "fc2",
    name: "fc2",
    color: "#1DA1F2",
    logoUrl: getLogo("fc2.com"),
    exampleUrl: "",
    description: "[*fc2*](## \"netrc machine\")"
  },
  {
    id: "fczenit",
    name: "Fczenit",
    color: "#9146FF",
    logoUrl: getLogo("fczenit.com"),
    exampleUrl: "",
    description: "Support for Fczenit extraction."
  },
  {
    id: "fifa",
    name: "Fifa",
    color: "#BD081C",
    logoUrl: getLogo("fifa.com"),
    exampleUrl: "",
    description: "Support for Fifa extraction."
  },
  {
    id: "filmarchiv",
    name: "FilmArchiv",
    color: "#FF4500",
    logoUrl: getLogo("filmarchiv.com"),
    exampleUrl: "",
    description: "FILMARCHIV ON"
  },
  {
    id: "filmon",
    name: "filmon",
    color: "#0A66C2",
    logoUrl: getLogo("filmon.com"),
    exampleUrl: "",
    description: "Support for filmon extraction."
  },
  {
    id: "filmweb",
    name: "Filmweb",
    color: "#1AB7EA",
    logoUrl: getLogo("filmweb.com"),
    exampleUrl: "",
    description: "Support for Filmweb extraction."
  },
  {
    id: "fivethirtyeight",
    name: "FiveThirtyEight",
    color: "#FF5500",
    logoUrl: getLogo("fivethirtyeight.com"),
    exampleUrl: "",
    description: "Support for FiveThirtyEight extraction."
  },
  {
    id: "fivetv",
    name: "FiveTV",
    color: "#0062D2",
    logoUrl: getLogo("fivetv.com"),
    exampleUrl: "",
    description: "Support for FiveTV extraction."
  },
  {
    id: "flickr",
    name: "Flickr",
    color: "#00A1D6",
    logoUrl: getLogo("flickr.com"),
    exampleUrl: "",
    description: "Support for Flickr extraction."
  },
  {
    id: "floatplane",
    name: "Floatplane",
    color: "#0085ff",
    logoUrl: getLogo("floatplane.com"),
    exampleUrl: "",
    description: "Support for Floatplane extraction."
  },
  {
    id: "floatplanechannel",
    name: "FloatplaneChannel",
    color: "#625DF5",
    logoUrl: getLogo("floatplanechannel.com"),
    exampleUrl: "",
    description: "Support for FloatplaneChannel extraction."
  },
  {
    id: "folketinget",
    name: "Folketinget",
    color: "#ED812B",
    logoUrl: getLogo("ft.dk"),
    exampleUrl: "",
    description: "Folketinget (ft.dk; Danish parliament)"
  },
  {
    id: "foodnetwork",
    name: "FoodNetwork",
    color: "#FDA238",
    logoUrl: getLogo("foodnetwork.com"),
    exampleUrl: "",
    description: "Support for FoodNetwork extraction."
  },
  {
    id: "footyroom",
    name: "FootyRoom",
    color: "#FF0000",
    logoUrl: getLogo("footyroom.com"),
    exampleUrl: "",
    description: "Support for FootyRoom extraction."
  },
  {
    id: "formula1",
    name: "Formula1",
    color: "#000000",
    logoUrl: getLogo("formula1.com"),
    exampleUrl: "",
    description: "Support for Formula1 extraction."
  },
  {
    id: "fox",
    name: "FOX",
    color: "#E1306C",
    logoUrl: getLogo("fox.com"),
    exampleUrl: "",
    description: "Support for FOX extraction."
  },
  {
    id: "fox9",
    name: "FOX9",
    color: "#1877F2",
    logoUrl: getLogo("fox9.com"),
    exampleUrl: "",
    description: "Support for FOX9 extraction."
  },
  {
    id: "fox9news",
    name: "FOX9News",
    color: "#1DA1F2",
    logoUrl: getLogo("fox9news.com"),
    exampleUrl: "",
    description: "Support for FOX9News extraction."
  },
  {
    id: "foxnews",
    name: "foxnews",
    color: "#9146FF",
    logoUrl: getLogo("foxnews.com"),
    exampleUrl: "",
    description: "Fox News and Fox Business Video"
  },
  {
    id: "foxnewsvideo",
    name: "FoxNewsVideo",
    color: "#BD081C",
    logoUrl: getLogo("foxnewsvideo.com"),
    exampleUrl: "",
    description: "Support for FoxNewsVideo extraction."
  },
  {
    id: "foxsports",
    name: "FoxSports",
    color: "#FF4500",
    logoUrl: getLogo("foxsports.com"),
    exampleUrl: "",
    description: "Support for FoxSports extraction."
  },
  {
    id: "fptplay",
    name: "fptplay",
    color: "#0A66C2",
    logoUrl: getLogo("fptplay.vn"),
    exampleUrl: "",
    description: "fptplay.vn"
  },
  {
    id: "francaisfacile",
    name: "FrancaisFacile",
    color: "#1AB7EA",
    logoUrl: getLogo("francaisfacile.com"),
    exampleUrl: "",
    description: "Support for FrancaisFacile extraction."
  },
  {
    id: "franceculture",
    name: "FranceCulture",
    color: "#FF5500",
    logoUrl: getLogo("franceculture.com"),
    exampleUrl: "",
    description: "Support for FranceCulture extraction."
  },
  {
    id: "franceinfo",
    name: "franceinfo",
    color: "#0062D2",
    logoUrl: getLogo("franceinfo.fr"),
    exampleUrl: "",
    description: "franceinfo.fr (formerly francetvinfo.fr)"
  },
  {
    id: "franceinter",
    name: "FranceInter",
    color: "#00A1D6",
    logoUrl: getLogo("franceinter.com"),
    exampleUrl: "",
    description: "Support for FranceInter extraction."
  },
  {
    id: "francetv",
    name: "francetv",
    color: "#0085ff",
    logoUrl: getLogo("francetv.com"),
    exampleUrl: "",
    description: "Support for francetv extraction."
  },
  {
    id: "freesound",
    name: "Freesound",
    color: "#625DF5",
    logoUrl: getLogo("freesound.com"),
    exampleUrl: "",
    description: "Support for Freesound extraction."
  },
  {
    id: "freespeech_org",
    name: "freespeech.org",
    color: "#ED812B",
    logoUrl: getLogo("freespeech.org.com"),
    exampleUrl: "",
    description: "Support for freespeech.org extraction."
  },
  {
    id: "freetvmovies",
    name: "FreeTvMovies",
    color: "#FDA238",
    logoUrl: getLogo("freetvmovies.com"),
    exampleUrl: "",
    description: "Support for FreeTvMovies extraction."
  },
  {
    id: "frontendmasters",
    name: "FrontendMasters",
    color: "#FF0000",
    logoUrl: getLogo("frontendmasters.com"),
    exampleUrl: "",
    description: "[*frontendmasters*](## \"netrc machine\")"
  },
  {
    id: "frontendmasterscourse",
    name: "FrontendMastersCourse",
    color: "#000000",
    logoUrl: getLogo("frontendmasterscourse.com"),
    exampleUrl: "",
    description: "[*frontendmasters*](## \"netrc machine\")"
  },
  {
    id: "frontendmasterslesson",
    name: "FrontendMastersLesson",
    color: "#E1306C",
    logoUrl: getLogo("frontendmasterslesson.com"),
    exampleUrl: "",
    description: "[*frontendmasters*](## \"netrc machine\")"
  },
  {
    id: "fujitvfodplus7",
    name: "FujiTVFODPlus7",
    color: "#1877F2",
    logoUrl: getLogo("fujitvfodplus7.com"),
    exampleUrl: "",
    description: "Support for FujiTVFODPlus7 extraction."
  },
  {
    id: "funk",
    name: "Funk",
    color: "#1DA1F2",
    logoUrl: getLogo("funk.com"),
    exampleUrl: "",
    description: "Support for Funk extraction."
  },
  {
    id: "funker530",
    name: "Funker530",
    color: "#9146FF",
    logoUrl: getLogo("funker530.com"),
    exampleUrl: "",
    description: "Support for Funker530 extraction."
  },
  {
    id: "fux",
    name: "Fux",
    color: "#BD081C",
    logoUrl: getLogo("fux.com"),
    exampleUrl: "",
    description: "Support for Fux extraction."
  },
  {
    id: "fuyintv",
    name: "FuyinTV",
    color: "#FF4500",
    logoUrl: getLogo("fuyintv.com"),
    exampleUrl: "",
    description: "Support for FuyinTV extraction."
  },
  {
    id: "gab",
    name: "Gab",
    color: "#0A66C2",
    logoUrl: getLogo("gab.com"),
    exampleUrl: "",
    description: "Support for Gab extraction."
  },
  {
    id: "gabtv",
    name: "GabTV",
    color: "#1AB7EA",
    logoUrl: getLogo("gabtv.com"),
    exampleUrl: "",
    description: "Support for GabTV extraction."
  },
  {
    id: "gaia",
    name: "Gaia",
    color: "#FF5500",
    logoUrl: getLogo("gaia.com"),
    exampleUrl: "",
    description: "[*gaia*](## \"netrc machine\")"
  },
  {
    id: "gamedevtvdashboard",
    name: "GameDevTVDashboard",
    color: "#0062D2",
    logoUrl: getLogo("gamedevtvdashboard.com"),
    exampleUrl: "",
    description: "[*gamedevtv*](## \"netrc machine\")"
  },
  {
    id: "gamejolt",
    name: "GameJolt",
    color: "#00A1D6",
    logoUrl: getLogo("gamejolt.com"),
    exampleUrl: "",
    description: "Support for GameJolt extraction."
  },
  {
    id: "gamejoltcommunity",
    name: "GameJoltCommunity",
    color: "#0085ff",
    logoUrl: getLogo("gamejoltcommunity.com"),
    exampleUrl: "",
    description: "Support for GameJoltCommunity extraction."
  },
  {
    id: "gamejoltgame",
    name: "GameJoltGame",
    color: "#625DF5",
    logoUrl: getLogo("gamejoltgame.com"),
    exampleUrl: "",
    description: "Support for GameJoltGame extraction."
  },
  {
    id: "gamejoltgamesoundtrack",
    name: "GameJoltGameSoundtrack",
    color: "#ED812B",
    logoUrl: getLogo("gamejoltgamesoundtrack.com"),
    exampleUrl: "",
    description: "Support for GameJoltGameSoundtrack extraction."
  },
  {
    id: "gamejoltsearch",
    name: "GameJoltSearch",
    color: "#FDA238",
    logoUrl: getLogo("gamejoltsearch.com"),
    exampleUrl: "",
    description: "Support for GameJoltSearch extraction."
  },
  {
    id: "gamejoltuser",
    name: "GameJoltUser",
    color: "#FF0000",
    logoUrl: getLogo("gamejoltuser.com"),
    exampleUrl: "",
    description: "Support for GameJoltUser extraction."
  },
  {
    id: "gamespot",
    name: "GameSpot",
    color: "#000000",
    logoUrl: getLogo("gamespot.com"),
    exampleUrl: "",
    description: "Support for GameSpot extraction."
  },
  {
    id: "gamestar",
    name: "GameStar",
    color: "#E1306C",
    logoUrl: getLogo("gamestar.com"),
    exampleUrl: "",
    description: "Support for GameStar extraction."
  },
  {
    id: "gaskrank",
    name: "Gaskrank",
    color: "#1877F2",
    logoUrl: getLogo("gaskrank.com"),
    exampleUrl: "",
    description: "Support for Gaskrank extraction."
  },
  {
    id: "gbnews",
    name: "GBNews",
    color: "#1DA1F2",
    logoUrl: getLogo("gbnews.com"),
    exampleUrl: "",
    description: "GB News clips, features and live streams"
  },
  {
    id: "gedidigital",
    name: "GediDigital",
    color: "#9146FF",
    logoUrl: getLogo("gedidigital.com"),
    exampleUrl: "",
    description: "Support for GediDigital extraction."
  },
  {
    id: "gem_cbc_ca",
    name: "gem.cbc.ca",
    color: "#BD081C",
    logoUrl: getLogo("gem.cbc.ca.com"),
    exampleUrl: "",
    description: "[*cbcgem*](## \"netrc machine\")"
  },
  {
    id: "genius",
    name: "Genius",
    color: "#FF4500",
    logoUrl: getLogo("genius.com"),
    exampleUrl: "",
    description: "Support for Genius extraction."
  },
  {
    id: "geniuslyrics",
    name: "GeniusLyrics",
    color: "#0A66C2",
    logoUrl: getLogo("geniuslyrics.com"),
    exampleUrl: "",
    description: "Support for GeniusLyrics extraction."
  },
  {
    id: "germanupa",
    name: "Germanupa",
    color: "#1AB7EA",
    logoUrl: getLogo("germanupa.de"),
    exampleUrl: "",
    description: "germanupa.de"
  },
  {
    id: "getcourseru",
    name: "GetCourseRu",
    color: "#FF5500",
    logoUrl: getLogo("getcourseru.com"),
    exampleUrl: "",
    description: "[*getcourseru*](## \"netrc machine\")"
  },
  {
    id: "getcourseruplayer",
    name: "GetCourseRuPlayer",
    color: "#0062D2",
    logoUrl: getLogo("getcourseruplayer.com"),
    exampleUrl: "",
    description: "Support for GetCourseRuPlayer extraction."
  },
  {
    id: "gettr",
    name: "Gettr",
    color: "#00A1D6",
    logoUrl: getLogo("gettr.com"),
    exampleUrl: "",
    description: "Support for Gettr extraction."
  },
  {
    id: "gettrstreaming",
    name: "GettrStreaming",
    color: "#0085ff",
    logoUrl: getLogo("gettrstreaming.com"),
    exampleUrl: "",
    description: "Support for GettrStreaming extraction."
  },
  {
    id: "giantbomb",
    name: "GiantBomb",
    color: "#625DF5",
    logoUrl: getLogo("giantbomb.com"),
    exampleUrl: "",
    description: "Support for GiantBomb extraction."
  },
  {
    id: "glattvisiontv",
    name: "GlattvisionTV",
    color: "#ED812B",
    logoUrl: getLogo("glattvisiontv.com"),
    exampleUrl: "",
    description: "[*glattvisiontv*](## \"netrc machine\")"
  },
  {
    id: "glattvisiontvlive",
    name: "GlattvisionTVLive",
    color: "#FDA238",
    logoUrl: getLogo("glattvisiontvlive.com"),
    exampleUrl: "",
    description: "[*glattvisiontv*](## \"netrc machine\")"
  },
  {
    id: "glattvisiontvrecordings",
    name: "GlattvisionTVRecordings",
    color: "#FF0000",
    logoUrl: getLogo("glattvisiontvrecordings.com"),
    exampleUrl: "",
    description: "[*glattvisiontv*](## \"netrc machine\")"
  },
  {
    id: "glide",
    name: "Glide",
    color: "#000000",
    logoUrl: getLogo("glide.me"),
    exampleUrl: "",
    description: "Glide mobile video messages (glide.me)"
  },
  {
    id: "globalplayeraudio",
    name: "GlobalPlayerAudio",
    color: "#E1306C",
    logoUrl: getLogo("globalplayeraudio.com"),
    exampleUrl: "",
    description: "Support for GlobalPlayerAudio extraction."
  },
  {
    id: "globalplayeraudioepisode",
    name: "GlobalPlayerAudioEpisode",
    color: "#1877F2",
    logoUrl: getLogo("globalplayeraudioepisode.com"),
    exampleUrl: "",
    description: "Support for GlobalPlayerAudioEpisode extraction."
  },
  {
    id: "globalplayerlive",
    name: "GlobalPlayerLive",
    color: "#1DA1F2",
    logoUrl: getLogo("globalplayerlive.com"),
    exampleUrl: "",
    description: "Support for GlobalPlayerLive extraction."
  },
  {
    id: "globalplayerliveplaylist",
    name: "GlobalPlayerLivePlaylist",
    color: "#9146FF",
    logoUrl: getLogo("globalplayerliveplaylist.com"),
    exampleUrl: "",
    description: "Support for GlobalPlayerLivePlaylist extraction."
  },
  {
    id: "globalplayervideo",
    name: "GlobalPlayerVideo",
    color: "#BD081C",
    logoUrl: getLogo("globalplayervideo.com"),
    exampleUrl: "",
    description: "Support for GlobalPlayerVideo extraction."
  },
  {
    id: "globo",
    name: "Globo",
    color: "#FF4500",
    logoUrl: getLogo("globo.com"),
    exampleUrl: "",
    description: "[*globo*](## \"netrc machine\")"
  },
  {
    id: "globoarticle",
    name: "GloboArticle",
    color: "#0A66C2",
    logoUrl: getLogo("globoarticle.com"),
    exampleUrl: "",
    description: "Support for GloboArticle extraction."
  },
  {
    id: "glomex",
    name: "glomex",
    color: "#1AB7EA",
    logoUrl: getLogo("glomex.com"),
    exampleUrl: "",
    description: "Glomex videos"
  },
  {
    id: "gmanetworkvideo",
    name: "GMANetworkVideo",
    color: "#FF5500",
    logoUrl: getLogo("gmanetworkvideo.com"),
    exampleUrl: "",
    description: "Support for GMANetworkVideo extraction."
  },
  {
    id: "go",
    name: "Go",
    color: "#0062D2",
    logoUrl: getLogo("go.com"),
    exampleUrl: "",
    description: "Support for Go extraction."
  },
  {
    id: "godiscovery",
    name: "GoDiscovery",
    color: "#00A1D6",
    logoUrl: getLogo("godiscovery.com"),
    exampleUrl: "",
    description: "Support for GoDiscovery extraction."
  },
  {
    id: "godresource",
    name: "GodResource",
    color: "#0085ff",
    logoUrl: getLogo("godresource.com"),
    exampleUrl: "",
    description: "Support for GodResource extraction."
  },
  {
    id: "gofile",
    name: "Gofile",
    color: "#625DF5",
    logoUrl: getLogo("gofile.com"),
    exampleUrl: "",
    description: "Support for Gofile extraction."
  },
  {
    id: "golem",
    name: "Golem",
    color: "#ED812B",
    logoUrl: getLogo("golem.com"),
    exampleUrl: "",
    description: "Support for Golem extraction."
  },
  {
    id: "googledrive",
    name: "GoogleDrive",
    color: "#FDA238",
    logoUrl: getLogo("googledrive.com"),
    exampleUrl: "",
    description: "Support for GoogleDrive extraction."
  },
  {
    id: "gopro",
    name: "GoPro",
    color: "#FF0000",
    logoUrl: getLogo("gopro.com"),
    exampleUrl: "",
    description: "Support for GoPro extraction."
  },
  {
    id: "goshgay",
    name: "Goshgay",
    color: "#000000",
    logoUrl: getLogo("goshgay.com"),
    exampleUrl: "",
    description: "Support for Goshgay extraction."
  },
  {
    id: "gotostage",
    name: "GoToStage",
    color: "#E1306C",
    logoUrl: getLogo("gotostage.com"),
    exampleUrl: "",
    description: "Support for GoToStage extraction."
  },
  {
    id: "gputechconf",
    name: "GPUTechConf",
    color: "#1877F2",
    logoUrl: getLogo("gputechconf.com"),
    exampleUrl: "",
    description: "Support for GPUTechConf extraction."
  },
  {
    id: "graspop",
    name: "Graspop",
    color: "#1DA1F2",
    logoUrl: getLogo("graspop.com"),
    exampleUrl: "",
    description: "Support for Graspop extraction."
  },
  {
    id: "gronkh",
    name: "Gronkh",
    color: "#9146FF",
    logoUrl: getLogo("gronkh.com"),
    exampleUrl: "",
    description: "Support for Gronkh extraction."
  },
  {
    id: "groupon",
    name: "Groupon",
    color: "#BD081C",
    logoUrl: getLogo("groupon.com"),
    exampleUrl: "",
    description: "Support for Groupon extraction."
  },
  {
    id: "harpodeon",
    name: "Harpodeon",
    color: "#FF4500",
    logoUrl: getLogo("harpodeon.com"),
    exampleUrl: "",
    description: "Support for Harpodeon extraction."
  },
  {
    id: "hbo",
    name: "hbo",
    color: "#0A66C2",
    logoUrl: getLogo("hbo.com"),
    exampleUrl: "",
    description: "Support for hbo extraction."
  },
  {
    id: "hearthisat",
    name: "HearThisAt",
    color: "#1AB7EA",
    logoUrl: getLogo("hearthisat.com"),
    exampleUrl: "",
    description: "Support for HearThisAt extraction."
  },
  {
    id: "heise",
    name: "Heise",
    color: "#FF5500",
    logoUrl: getLogo("heise.com"),
    exampleUrl: "",
    description: "Support for Heise extraction."
  },
  {
    id: "hetklokhuis",
    name: "hetklokhuis",
    color: "#00A1D6",
    logoUrl: getLogo("hetklokhuis.com"),
    exampleUrl: "",
    description: "Support for hetklokhuis extraction."
  },
  {
    id: "hgtvde",
    name: "HGTVDe",
    color: "#0085ff",
    logoUrl: getLogo("hgtvde.com"),
    exampleUrl: "",
    description: "Support for HGTVDe extraction."
  },
  {
    id: "hgtvusa",
    name: "HGTVUsa",
    color: "#625DF5",
    logoUrl: getLogo("hgtvusa.com"),
    exampleUrl: "",
    description: "Support for HGTVUsa extraction."
  },
  {
    id: "hidive",
    name: "HiDive",
    color: "#ED812B",
    logoUrl: getLogo("hidive.com"),
    exampleUrl: "",
    description: "[*hidive*](## \"netrc machine\")"
  },
  {
    id: "historicfilms",
    name: "HistoricFilms",
    color: "#FDA238",
    logoUrl: getLogo("historicfilms.com"),
    exampleUrl: "",
    description: "Support for HistoricFilms extraction."
  },
  {
    id: "hitrecord",
    name: "HitRecord",
    color: "#FF0000",
    logoUrl: getLogo("hitrecord.com"),
    exampleUrl: "",
    description: "Support for HitRecord extraction."
  },
  {
    id: "hketv",
    name: "hketv",
    color: "#000000",
    logoUrl: getLogo("hketv.com"),
    exampleUrl: "",
    description: "香港教育局教育電視 (HKETV) Educational Television, Hong Kong Educational Bureau"
  },
  {
    id: "hollywoodreporter",
    name: "HollywoodReporter",
    color: "#E1306C",
    logoUrl: getLogo("hollywoodreporter.com"),
    exampleUrl: "",
    description: "Support for HollywoodReporter extraction."
  },
  {
    id: "hollywoodreporterplaylist",
    name: "HollywoodReporterPlaylist",
    color: "#1877F2",
    logoUrl: getLogo("hollywoodreporterplaylist.com"),
    exampleUrl: "",
    description: "Support for HollywoodReporterPlaylist extraction."
  },
  {
    id: "holodex",
    name: "Holodex",
    color: "#1DA1F2",
    logoUrl: getLogo("holodex.com"),
    exampleUrl: "",
    description: "Support for Holodex extraction."
  },
  {
    id: "hotstar",
    name: "hotstar",
    color: "#9146FF",
    logoUrl: getLogo("hotstar.com"),
    exampleUrl: "",
    description: "JioHotstar"
  },
  {
    id: "hrfernsehen",
    name: "hrfernsehen",
    color: "#BD081C",
    logoUrl: getLogo("hrfernsehen.com"),
    exampleUrl: "",
    description: "Support for hrfernsehen extraction."
  },
  {
    id: "hrti",
    name: "HRTi",
    color: "#FF4500",
    logoUrl: getLogo("hrti.com"),
    exampleUrl: "",
    description: "[*hrti*](## \"netrc machine\")"
  },
  {
    id: "hrtiplaylist",
    name: "HRTiPlaylist",
    color: "#0A66C2",
    logoUrl: getLogo("hrtiplaylist.com"),
    exampleUrl: "",
    description: "[*hrti*](## \"netrc machine\")"
  },
  {
    id: "hseproduct",
    name: "HSEProduct",
    color: "#1AB7EA",
    logoUrl: getLogo("hseproduct.com"),
    exampleUrl: "",
    description: "Support for HSEProduct extraction."
  },
  {
    id: "hseshow",
    name: "HSEShow",
    color: "#FF5500",
    logoUrl: getLogo("hseshow.com"),
    exampleUrl: "",
    description: "Support for HSEShow extraction."
  },
  {
    id: "html5",
    name: "html5",
    color: "#0062D2",
    logoUrl: getLogo("html5.com"),
    exampleUrl: "",
    description: "Support for html5 extraction."
  },
  {
    id: "huajiao",
    name: "Huajiao",
    color: "#00A1D6",
    logoUrl: getLogo("huajiao.com"),
    exampleUrl: "",
    description: "花椒直播"
  },
  {
    id: "huffpost",
    name: "HuffPost",
    color: "#0085ff",
    logoUrl: getLogo("huffpost.com"),
    exampleUrl: "",
    description: "Huffington Post"
  },
  {
    id: "hungama",
    name: "Hungama",
    color: "#625DF5",
    logoUrl: getLogo("hungama.com"),
    exampleUrl: "",
    description: "Support for Hungama extraction."
  },
  {
    id: "hungamaalbumplaylist",
    name: "HungamaAlbumPlaylist",
    color: "#ED812B",
    logoUrl: getLogo("hungamaalbumplaylist.com"),
    exampleUrl: "",
    description: "Support for HungamaAlbumPlaylist extraction."
  },
  {
    id: "hungamasong",
    name: "HungamaSong",
    color: "#FDA238",
    logoUrl: getLogo("hungamasong.com"),
    exampleUrl: "",
    description: "Support for HungamaSong extraction."
  },
  {
    id: "hypem",
    name: "Hypem",
    color: "#FF0000",
    logoUrl: getLogo("hypem.com"),
    exampleUrl: "",
    description: "Support for Hypem extraction."
  },
  {
    id: "hytale",
    name: "Hytale",
    color: "#000000",
    logoUrl: getLogo("hytale.com"),
    exampleUrl: "",
    description: "Support for Hytale extraction."
  },
  {
    id: "icareus",
    name: "Icareus",
    color: "#E1306C",
    logoUrl: getLogo("icareus.com"),
    exampleUrl: "",
    description: "Support for Icareus extraction."
  },
  {
    id: "idagioalbum",
    name: "IdagioAlbum",
    color: "#1877F2",
    logoUrl: getLogo("idagioalbum.com"),
    exampleUrl: "",
    description: "Support for IdagioAlbum extraction."
  },
  {
    id: "idagiopersonalplaylist",
    name: "IdagioPersonalPlaylist",
    color: "#1DA1F2",
    logoUrl: getLogo("idagiopersonalplaylist.com"),
    exampleUrl: "",
    description: "Support for IdagioPersonalPlaylist extraction."
  },
  {
    id: "idagioplaylist",
    name: "IdagioPlaylist",
    color: "#9146FF",
    logoUrl: getLogo("idagioplaylist.com"),
    exampleUrl: "",
    description: "Support for IdagioPlaylist extraction."
  },
  {
    id: "idagiorecording",
    name: "IdagioRecording",
    color: "#BD081C",
    logoUrl: getLogo("idagiorecording.com"),
    exampleUrl: "",
    description: "Support for IdagioRecording extraction."
  },
  {
    id: "idagiotrack",
    name: "IdagioTrack",
    color: "#FF4500",
    logoUrl: getLogo("idagiotrack.com"),
    exampleUrl: "",
    description: "Support for IdagioTrack extraction."
  },
  {
    id: "idolplus",
    name: "IdolPlus",
    color: "#0A66C2",
    logoUrl: getLogo("idolplus.com"),
    exampleUrl: "",
    description: "Support for IdolPlus extraction."
  },
  {
    id: "iflixseries",
    name: "IflixSeries",
    color: "#1AB7EA",
    logoUrl: getLogo("iflixseries.com"),
    exampleUrl: "",
    description: "Support for IflixSeries extraction."
  },
  {
    id: "ign_com",
    name: "ign.com",
    color: "#FF5500",
    logoUrl: getLogo("ign.com.com"),
    exampleUrl: "",
    description: "Support for ign.com extraction."
  },
  {
    id: "ignarticle",
    name: "IGNArticle",
    color: "#0062D2",
    logoUrl: getLogo("ignarticle.com"),
    exampleUrl: "",
    description: "Support for IGNArticle extraction."
  },
  {
    id: "ignvideo",
    name: "IGNVideo",
    color: "#00A1D6",
    logoUrl: getLogo("ignvideo.com"),
    exampleUrl: "",
    description: "Support for IGNVideo extraction."
  },
  {
    id: "iheartradio",
    name: "iheartradio",
    color: "#0085ff",
    logoUrl: getLogo("iheartradio.com"),
    exampleUrl: "",
    description: "Support for iheartradio extraction."
  },
  {
    id: "ilpost",
    name: "IlPost",
    color: "#625DF5",
    logoUrl: getLogo("ilpost.com"),
    exampleUrl: "",
    description: "Support for IlPost extraction."
  },
  {
    id: "iltalehti",
    name: "Iltalehti",
    color: "#ED812B",
    logoUrl: getLogo("iltalehti.com"),
    exampleUrl: "",
    description: "Support for Iltalehti extraction."
  },
  {
    id: "imdb",
    name: "imdb",
    color: "#FDA238",
    logoUrl: getLogo("imdb.com"),
    exampleUrl: "",
    description: "Internet Movie Database trailers"
  },
  {
    id: "imgur",
    name: "Imgur",
    color: "#FF0000",
    logoUrl: getLogo("imgur.com"),
    exampleUrl: "",
    description: "Support for Imgur extraction."
  },
  {
    id: "ina",
    name: "Ina",
    color: "#000000",
    logoUrl: getLogo("ina.com"),
    exampleUrl: "",
    description: "Support for Ina extraction."
  },
  {
    id: "inc",
    name: "Inc",
    color: "#E1306C",
    logoUrl: getLogo("inc.com"),
    exampleUrl: "",
    description: "Support for Inc extraction."
  },
  {
    id: "indavideoembed",
    name: "IndavideoEmbed",
    color: "#1877F2",
    logoUrl: getLogo("indavideoembed.com"),
    exampleUrl: "",
    description: "Support for IndavideoEmbed extraction."
  },
  {
    id: "infoq",
    name: "InfoQ",
    color: "#1DA1F2",
    logoUrl: getLogo("infoq.com"),
    exampleUrl: "",
    description: "Support for InfoQ extraction."
  },
  {
    id: "instagram",
    name: "Instagram",
    color: "#9146FF",
    logoUrl: getLogo("instagram.com"),
    exampleUrl: "",
    description: "Support for Instagram extraction."
  },
  {
    id: "instagramios",
    name: "InstagramIOS",
    color: "#BD081C",
    logoUrl: getLogo("instagramios.com"),
    exampleUrl: "",
    description: "IOS instagram:// URL"
  },
  {
    id: "internazionale",
    name: "Internazionale",
    color: "#FF4500",
    logoUrl: getLogo("internazionale.com"),
    exampleUrl: "",
    description: "Support for Internazionale extraction."
  },
  {
    id: "internetvideoarchive",
    name: "InternetVideoArchive",
    color: "#0A66C2",
    logoUrl: getLogo("internetvideoarchive.com"),
    exampleUrl: "",
    description: "Support for InternetVideoArchive extraction."
  },
  {
    id: "investigationdiscovery",
    name: "InvestigationDiscovery",
    color: "#1AB7EA",
    logoUrl: getLogo("investigationdiscovery.com"),
    exampleUrl: "",
    description: "Support for InvestigationDiscovery extraction."
  },
  {
    id: "iprima",
    name: "IPrima",
    color: "#FF5500",
    logoUrl: getLogo("iprima.com"),
    exampleUrl: "",
    description: "[*iprima*](## \"netrc machine\")"
  },
  {
    id: "iprimacnn",
    name: "IPrimaCNN",
    color: "#0062D2",
    logoUrl: getLogo("iprimacnn.com"),
    exampleUrl: "",
    description: "Support for IPrimaCNN extraction."
  },
  {
    id: "iq_com",
    name: "iq.com",
    color: "#00A1D6",
    logoUrl: getLogo("iq.com.com"),
    exampleUrl: "",
    description: "International version of iQiyi"
  },
  {
    id: "iqiyi",
    name: "iqiyi",
    color: "#0085ff",
    logoUrl: getLogo("iqiyi.com"),
    exampleUrl: "",
    description: "爱奇艺"
  },
  {
    id: "islamchannel",
    name: "IslamChannel",
    color: "#625DF5",
    logoUrl: getLogo("islamchannel.com"),
    exampleUrl: "",
    description: "Support for IslamChannel extraction."
  },
  {
    id: "islamchannelseries",
    name: "IslamChannelSeries",
    color: "#ED812B",
    logoUrl: getLogo("islamchannelseries.com"),
    exampleUrl: "",
    description: "Support for IslamChannelSeries extraction."
  },
  {
    id: "israelnationalnews",
    name: "IsraelNationalNews",
    color: "#FDA238",
    logoUrl: getLogo("israelnationalnews.com"),
    exampleUrl: "",
    description: "Support for IsraelNationalNews extraction."
  },
  {
    id: "itprotv",
    name: "ITProTV",
    color: "#FF0000",
    logoUrl: getLogo("itprotv.com"),
    exampleUrl: "",
    description: "Support for ITProTV extraction."
  },
  {
    id: "itprotvcourse",
    name: "ITProTVCourse",
    color: "#000000",
    logoUrl: getLogo("itprotvcourse.com"),
    exampleUrl: "",
    description: "Support for ITProTVCourse extraction."
  },
  {
    id: "itv",
    name: "ITV",
    color: "#E1306C",
    logoUrl: getLogo("itv.com"),
    exampleUrl: "",
    description: "Support for ITV extraction."
  },
  {
    id: "itvbtcc",
    name: "ITVBTCC",
    color: "#1877F2",
    logoUrl: getLogo("itvbtcc.com"),
    exampleUrl: "",
    description: "Support for ITVBTCC extraction."
  },
  {
    id: "ivi",
    name: "ivi",
    color: "#1DA1F2",
    logoUrl: getLogo("ivi.ru"),
    exampleUrl: "",
    description: "ivi.ru"
  },
  {
    id: "ivideon",
    name: "ivideon",
    color: "#9146FF",
    logoUrl: getLogo("ivideon.com"),
    exampleUrl: "",
    description: "Ivideon TV"
  },
  {
    id: "ivoox",
    name: "Ivoox",
    color: "#BD081C",
    logoUrl: getLogo("ivoox.com"),
    exampleUrl: "",
    description: "Support for Ivoox extraction."
  },
  {
    id: "ivxplayer",
    name: "IVXPlayer",
    color: "#FF4500",
    logoUrl: getLogo("ivxplayer.com"),
    exampleUrl: "",
    description: "Support for IVXPlayer extraction."
  },
  {
    id: "iwara",
    name: "iwara",
    color: "#0A66C2",
    logoUrl: getLogo("iwara.com"),
    exampleUrl: "",
    description: "[*iwara*](## \"netrc machine\")"
  },
  {
    id: "ixigua",
    name: "Ixigua",
    color: "#1AB7EA",
    logoUrl: getLogo("ixigua.com"),
    exampleUrl: "",
    description: "Support for Ixigua extraction."
  },
  {
    id: "izlesene",
    name: "Izlesene",
    color: "#FF5500",
    logoUrl: getLogo("izlesene.com"),
    exampleUrl: "",
    description: "Support for Izlesene extraction."
  },
  {
    id: "jamendo",
    name: "Jamendo",
    color: "#0062D2",
    logoUrl: getLogo("jamendo.com"),
    exampleUrl: "",
    description: "Support for Jamendo extraction."
  },
  {
    id: "jamendoalbum",
    name: "JamendoAlbum",
    color: "#00A1D6",
    logoUrl: getLogo("jamendoalbum.com"),
    exampleUrl: "",
    description: "Support for JamendoAlbum extraction."
  },
  {
    id: "joj",
    name: "Joj",
    color: "#0085ff",
    logoUrl: getLogo("joj.com"),
    exampleUrl: "",
    description: "Support for Joj extraction."
  },
  {
    id: "jove",
    name: "Jove",
    color: "#625DF5",
    logoUrl: getLogo("jove.com"),
    exampleUrl: "",
    description: "Support for Jove extraction."
  },
  {
    id: "jstream",
    name: "JStream",
    color: "#ED812B",
    logoUrl: getLogo("jstream.com"),
    exampleUrl: "",
    description: "Support for JStream extraction."
  },
  {
    id: "jtbc",
    name: "JTBC",
    color: "#FDA238",
    logoUrl: getLogo("jtbc.co.kr"),
    exampleUrl: "",
    description: "jtbc.co.kr"
  },
  {
    id: "jwplatform",
    name: "JWPlatform",
    color: "#FF0000",
    logoUrl: getLogo("jwplatform.com"),
    exampleUrl: "",
    description: "Support for JWPlatform extraction."
  },
  {
    id: "kakao",
    name: "Kakao",
    color: "#000000",
    logoUrl: getLogo("kakao.com"),
    exampleUrl: "",
    description: "Support for Kakao extraction."
  },
  {
    id: "kaltura",
    name: "Kaltura",
    color: "#E1306C",
    logoUrl: getLogo("kaltura.com"),
    exampleUrl: "",
    description: "Support for Kaltura extraction."
  },
  {
    id: "karaoketv",
    name: "Karaoketv",
    color: "#1877F2",
    logoUrl: getLogo("karaoketv.com"),
    exampleUrl: "",
    description: "Support for Karaoketv extraction."
  },
  {
    id: "kenh14playlist",
    name: "Kenh14Playlist",
    color: "#1DA1F2",
    logoUrl: getLogo("kenh14playlist.com"),
    exampleUrl: "",
    description: "Support for Kenh14Playlist extraction."
  },
  {
    id: "kenh14video",
    name: "Kenh14Video",
    color: "#9146FF",
    logoUrl: getLogo("kenh14video.com"),
    exampleUrl: "",
    description: "Support for Kenh14Video extraction."
  },
  {
    id: "khanacademy",
    name: "khanacademy",
    color: "#BD081C",
    logoUrl: getLogo("khanacademy.com"),
    exampleUrl: "",
    description: "Support for khanacademy extraction."
  },
  {
    id: "kicker",
    name: "Kicker",
    color: "#FF4500",
    logoUrl: getLogo("kicker.com"),
    exampleUrl: "",
    description: "Support for Kicker extraction."
  },
  {
    id: "kickstarter",
    name: "KickStarter",
    color: "#0A66C2",
    logoUrl: getLogo("kickstarter.com"),
    exampleUrl: "",
    description: "Support for KickStarter extraction."
  },
  {
    id: "kika",
    name: "Kika",
    color: "#1AB7EA",
    logoUrl: getLogo("KiKA.de"),
    exampleUrl: "",
    description: "KiKA.de"
  },
  {
    id: "kikaplaylist",
    name: "KikaPlaylist",
    color: "#FF5500",
    logoUrl: getLogo("kikaplaylist.com"),
    exampleUrl: "",
    description: "Support for KikaPlaylist extraction."
  },
  {
    id: "kinopoisk",
    name: "KinoPoisk",
    color: "#0062D2",
    logoUrl: getLogo("kinopoisk.com"),
    exampleUrl: "",
    description: "Support for KinoPoisk extraction."
  },
  {
    id: "kommunetv",
    name: "Kommunetv",
    color: "#00A1D6",
    logoUrl: getLogo("kommunetv.com"),
    exampleUrl: "",
    description: "Support for Kommunetv extraction."
  },
  {
    id: "kompasvideo",
    name: "KompasVideo",
    color: "#0085ff",
    logoUrl: getLogo("kompasvideo.com"),
    exampleUrl: "",
    description: "Support for KompasVideo extraction."
  },
  {
    id: "kth",
    name: "KTH",
    color: "#625DF5",
    logoUrl: getLogo("kth.com"),
    exampleUrl: "",
    description: "Support for KTH extraction."
  },
  {
    id: "ku6",
    name: "Ku6",
    color: "#ED812B",
    logoUrl: getLogo("ku6.com"),
    exampleUrl: "",
    description: "Support for Ku6 extraction."
  },
  {
    id: "kukululive",
    name: "KukuluLive",
    color: "#FDA238",
    logoUrl: getLogo("kukululive.com"),
    exampleUrl: "",
    description: "Support for KukuluLive extraction."
  },
  {
    id: "la7_it",
    name: "la7.it",
    color: "#FF0000",
    logoUrl: getLogo("la7.it.com"),
    exampleUrl: "",
    description: "Support for la7.it extraction."
  },
  {
    id: "laracasts",
    name: "laracasts",
    color: "#000000",
    logoUrl: getLogo("laracasts.com"),
    exampleUrl: "",
    description: "Support for laracasts extraction."
  },
  {
    id: "lastfm",
    name: "LastFM",
    color: "#E1306C",
    logoUrl: getLogo("lastfm.com"),
    exampleUrl: "",
    description: "Support for LastFM extraction."
  },
  {
    id: "lastfmplaylist",
    name: "LastFMPlaylist",
    color: "#1877F2",
    logoUrl: getLogo("lastfmplaylist.com"),
    exampleUrl: "",
    description: "Support for LastFMPlaylist extraction."
  },
  {
    id: "lastfmuser",
    name: "LastFMUser",
    color: "#1DA1F2",
    logoUrl: getLogo("lastfmuser.com"),
    exampleUrl: "",
    description: "Support for LastFMUser extraction."
  },
  {
    id: "laxarxames",
    name: "LaXarxaMes",
    color: "#9146FF",
    logoUrl: getLogo("laxarxames.com"),
    exampleUrl: "",
    description: "[*laxarxames*](## \"netrc machine\")"
  },
  {
    id: "lbry",
    name: "lbry",
    color: "#BD081C",
    logoUrl: getLogo("odysee.com"),
    exampleUrl: "",
    description: "odysee.com"
  },
  {
    id: "lci",
    name: "LCI",
    color: "#FF4500",
    logoUrl: getLogo("lci.com"),
    exampleUrl: "",
    description: "Support for LCI extraction."
  },
  {
    id: "le",
    name: "Le",
    color: "#0A66C2",
    logoUrl: getLogo("le.com"),
    exampleUrl: "",
    description: "乐视网"
  },
  {
    id: "learningonscreen",
    name: "LearningOnScreen",
    color: "#1AB7EA",
    logoUrl: getLogo("learningonscreen.com"),
    exampleUrl: "",
    description: "Support for LearningOnScreen extraction."
  },
  {
    id: "lecturio",
    name: "Lecturio",
    color: "#FF5500",
    logoUrl: getLogo("lecturio.com"),
    exampleUrl: "",
    description: "[*lecturio*](## \"netrc machine\")"
  },
  {
    id: "lecturiocourse",
    name: "LecturioCourse",
    color: "#0062D2",
    logoUrl: getLogo("lecturiocourse.com"),
    exampleUrl: "",
    description: "[*lecturio*](## \"netrc machine\")"
  },
  {
    id: "lecturiodecourse",
    name: "LecturioDeCourse",
    color: "#00A1D6",
    logoUrl: getLogo("lecturiodecourse.com"),
    exampleUrl: "",
    description: "[*lecturio*](## \"netrc machine\")"
  },
  {
    id: "lefigarovideoembed",
    name: "LeFigaroVideoEmbed",
    color: "#0085ff",
    logoUrl: getLogo("lefigarovideoembed.com"),
    exampleUrl: "",
    description: "Support for LeFigaroVideoEmbed extraction."
  },
  {
    id: "lefigarovideosection",
    name: "LeFigaroVideoSection",
    color: "#625DF5",
    logoUrl: getLogo("lefigarovideosection.com"),
    exampleUrl: "",
    description: "Support for LeFigaroVideoSection extraction."
  },
  {
    id: "lego",
    name: "LEGO",
    color: "#ED812B",
    logoUrl: getLogo("lego.com"),
    exampleUrl: "",
    description: "Support for LEGO extraction."
  },
  {
    id: "lemonde",
    name: "Lemonde",
    color: "#FDA238",
    logoUrl: getLogo("lemonde.com"),
    exampleUrl: "",
    description: "Support for Lemonde extraction."
  },
  {
    id: "leplaylist",
    name: "LePlaylist",
    color: "#FF0000",
    logoUrl: getLogo("leplaylist.com"),
    exampleUrl: "",
    description: "Support for LePlaylist extraction."
  },
  {
    id: "letvcloud",
    name: "LetvCloud",
    color: "#000000",
    logoUrl: getLogo("letvcloud.com"),
    exampleUrl: "",
    description: "乐视云"
  },
  {
    id: "libsyn",
    name: "Libsyn",
    color: "#E1306C",
    logoUrl: getLogo("libsyn.com"),
    exampleUrl: "",
    description: "Support for Libsyn extraction."
  },
  {
    id: "life",
    name: "life",
    color: "#1877F2",
    logoUrl: getLogo("Life.ru"),
    exampleUrl: "",
    description: "Life.ru"
  },
  {
    id: "likee",
    name: "likee",
    color: "#1DA1F2",
    logoUrl: getLogo("likee.com"),
    exampleUrl: "",
    description: "Support for likee extraction."
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    color: "#9146FF",
    logoUrl: getLogo("linkedin.com"),
    exampleUrl: "",
    description: "[*linkedin*](## \"netrc machine\")"
  },
  {
    id: "liputan6",
    name: "Liputan6",
    color: "#BD081C",
    logoUrl: getLogo("liputan6.com"),
    exampleUrl: "",
    description: "Support for Liputan6 extraction."
  },
  {
    id: "listennotes",
    name: "ListenNotes",
    color: "#FF4500",
    logoUrl: getLogo("listennotes.com"),
    exampleUrl: "",
    description: "Support for ListenNotes extraction."
  },
  {
    id: "litv",
    name: "LiTV",
    color: "#0A66C2",
    logoUrl: getLogo("litv.com"),
    exampleUrl: "",
    description: "Support for LiTV extraction."
  },
  {
    id: "livestream",
    name: "livestream",
    color: "#1AB7EA",
    logoUrl: getLogo("livestream.com"),
    exampleUrl: "",
    description: "Support for livestream extraction."
  },
  {
    id: "livestreamfails",
    name: "Livestreamfails",
    color: "#FF5500",
    logoUrl: getLogo("livestreamfails.com"),
    exampleUrl: "",
    description: "Support for Livestreamfails extraction."
  },
  {
    id: "lnk",
    name: "Lnk",
    color: "#0062D2",
    logoUrl: getLogo("lnk.com"),
    exampleUrl: "",
    description: "Support for Lnk extraction."
  },
  {
    id: "loc",
    name: "loc",
    color: "#00A1D6",
    logoUrl: getLogo("loc.com"),
    exampleUrl: "",
    description: "Library of Congress"
  },
  {
    id: "loco",
    name: "Loco",
    color: "#0085ff",
    logoUrl: getLogo("loco.com"),
    exampleUrl: "",
    description: "Support for Loco extraction."
  },
  {
    id: "loom",
    name: "loom",
    color: "#625DF5",
    logoUrl: getLogo("loom.com"),
    exampleUrl: "",
    description: "Support for loom extraction."
  },
  {
    id: "lrtradio",
    name: "LRTRadio",
    color: "#FDA238",
    logoUrl: getLogo("lrtradio.com"),
    exampleUrl: "",
    description: "Support for LRTRadio extraction."
  },
  {
    id: "lrtstream",
    name: "LRTStream",
    color: "#FF0000",
    logoUrl: getLogo("lrtstream.com"),
    exampleUrl: "",
    description: "Support for LRTStream extraction."
  },
  {
    id: "lrtvod",
    name: "LRTVOD",
    color: "#000000",
    logoUrl: getLogo("lrtvod.com"),
    exampleUrl: "",
    description: "Support for LRTVOD extraction."
  },
  {
    id: "lsmlrembed",
    name: "LSMLREmbed",
    color: "#E1306C",
    logoUrl: getLogo("lsmlrembed.com"),
    exampleUrl: "",
    description: "Support for LSMLREmbed extraction."
  },
  {
    id: "lsmltvembed",
    name: "LSMLTVEmbed",
    color: "#1877F2",
    logoUrl: getLogo("lsmltvembed.com"),
    exampleUrl: "",
    description: "Support for LSMLTVEmbed extraction."
  },
  {
    id: "lsmreplay",
    name: "LSMReplay",
    color: "#1DA1F2",
    logoUrl: getLogo("lsmreplay.com"),
    exampleUrl: "",
    description: "Support for LSMReplay extraction."
  },
  {
    id: "lumni",
    name: "Lumni",
    color: "#9146FF",
    logoUrl: getLogo("lumni.com"),
    exampleUrl: "",
    description: "Support for Lumni extraction."
  },
  {
    id: "lynda",
    name: "lynda",
    color: "#BD081C",
    logoUrl: getLogo("lynda.com"),
    exampleUrl: "",
    description: "[*lynda*](## \"netrc machine\") lynda.com videos"
  },
  {
    id: "maariv_co_il",
    name: "maariv.co.il",
    color: "#FF4500",
    logoUrl: getLogo("maariv.co.il.com"),
    exampleUrl: "",
    description: "Support for maariv.co.il extraction."
  },
  {
    id: "magellantv",
    name: "MagellanTV",
    color: "#0A66C2",
    logoUrl: getLogo("magellantv.com"),
    exampleUrl: "",
    description: "Support for MagellanTV extraction."
  },
  {
    id: "magentamusik",
    name: "MagentaMusik",
    color: "#1AB7EA",
    logoUrl: getLogo("magentamusik.com"),
    exampleUrl: "",
    description: "Support for MagentaMusik extraction."
  },
  {
    id: "mailru",
    name: "mailru",
    color: "#FF5500",
    logoUrl: getLogo("Mail.Ru"),
    exampleUrl: "",
    description: "Видео@Mail.Ru"
  },
  {
    id: "mainstreaming",
    name: "MainStreaming",
    color: "#0062D2",
    logoUrl: getLogo("mainstreaming.com"),
    exampleUrl: "",
    description: "MainStreaming Player"
  },
  {
    id: "mangotv",
    name: "MangoTV",
    color: "#00A1D6",
    logoUrl: getLogo("mangotv.com"),
    exampleUrl: "",
    description: "芒果TV"
  },
  {
    id: "manyvids",
    name: "ManyVids",
    color: "#0085ff",
    logoUrl: getLogo("manyvids.com"),
    exampleUrl: "",
    description: "Support for ManyVids extraction."
  },
  {
    id: "maoritv",
    name: "MaoriTV",
    color: "#625DF5",
    logoUrl: getLogo("maoritv.com"),
    exampleUrl: "",
    description: "Support for MaoriTV extraction."
  },
  {
    id: "massengeschmack_tv",
    name: "massengeschmack.tv",
    color: "#ED812B",
    logoUrl: getLogo("massengeschmack.tv.com"),
    exampleUrl: "",
    description: "Support for massengeschmack.tv extraction."
  },
  {
    id: "masters",
    name: "Masters",
    color: "#FDA238",
    logoUrl: getLogo("masters.com"),
    exampleUrl: "",
    description: "Support for Masters extraction."
  },
  {
    id: "matchtv",
    name: "MatchTV",
    color: "#FF0000",
    logoUrl: getLogo("matchtv.com"),
    exampleUrl: "",
    description: "Support for MatchTV extraction."
  },
  {
    id: "mave",
    name: "mave",
    color: "#000000",
    logoUrl: getLogo("mave.com"),
    exampleUrl: "",
    description: "Support for mave extraction."
  },
  {
    id: "mbn",
    name: "MBN",
    color: "#E1306C",
    logoUrl: getLogo("mbn.co.kr"),
    exampleUrl: "",
    description: "mbn.co.kr (매일방송)"
  },
  {
    id: "mdr",
    name: "MDR",
    color: "#1877F2",
    logoUrl: getLogo("MDR.DE"),
    exampleUrl: "",
    description: "MDR.DE"
  },
  {
    id: "medaltv",
    name: "MedalTV",
    color: "#1DA1F2",
    logoUrl: getLogo("medaltv.com"),
    exampleUrl: "",
    description: "Support for MedalTV extraction."
  },
  {
    id: "media_ccc_de",
    name: "media.ccc.de",
    color: "#9146FF",
    logoUrl: getLogo("media.ccc.de.com"),
    exampleUrl: "",
    description: "Support for media.ccc.de extraction."
  },
  {
    id: "mediaite",
    name: "Mediaite",
    color: "#BD081C",
    logoUrl: getLogo("mediaite.com"),
    exampleUrl: "",
    description: "Support for Mediaite extraction."
  },
  {
    id: "mediaklikk",
    name: "MediaKlikk",
    color: "#FF4500",
    logoUrl: getLogo("mediaklikk.com"),
    exampleUrl: "",
    description: "Support for MediaKlikk extraction."
  },
  {
    id: "medialaan",
    name: "Medialaan",
    color: "#0A66C2",
    logoUrl: getLogo("medialaan.com"),
    exampleUrl: "",
    description: "Support for Medialaan extraction."
  },
  {
    id: "mediaset",
    name: "Mediaset",
    color: "#1AB7EA",
    logoUrl: getLogo("mediaset.com"),
    exampleUrl: "",
    description: "Support for Mediaset extraction."
  },
  {
    id: "mediasetshow",
    name: "MediasetShow",
    color: "#FF5500",
    logoUrl: getLogo("mediasetshow.com"),
    exampleUrl: "",
    description: "Support for MediasetShow extraction."
  },
  {
    id: "mediasite",
    name: "Mediasite",
    color: "#0062D2",
    logoUrl: getLogo("mediasite.com"),
    exampleUrl: "",
    description: "Support for Mediasite extraction."
  },
  {
    id: "mediasitecatalog",
    name: "MediasiteCatalog",
    color: "#00A1D6",
    logoUrl: getLogo("mediasitecatalog.com"),
    exampleUrl: "",
    description: "Support for MediasiteCatalog extraction."
  },
  {
    id: "mediasitenamedcatalog",
    name: "MediasiteNamedCatalog",
    color: "#0085ff",
    logoUrl: getLogo("mediasitenamedcatalog.com"),
    exampleUrl: "",
    description: "Support for MediasiteNamedCatalog extraction."
  },
  {
    id: "mediastream",
    name: "MediaStream",
    color: "#625DF5",
    logoUrl: getLogo("mediastream.com"),
    exampleUrl: "",
    description: "Support for MediaStream extraction."
  },
  {
    id: "mediaworksnzvod",
    name: "MediaWorksNZVOD",
    color: "#ED812B",
    logoUrl: getLogo("mediaworksnzvod.com"),
    exampleUrl: "",
    description: "Support for MediaWorksNZVOD extraction."
  },
  {
    id: "medici",
    name: "Medici",
    color: "#FDA238",
    logoUrl: getLogo("medici.com"),
    exampleUrl: "",
    description: "Support for Medici extraction."
  },
  {
    id: "megaphone_fm",
    name: "megaphone.fm",
    color: "#FF0000",
    logoUrl: getLogo("megaphone.fm"),
    exampleUrl: "",
    description: "megaphone.fm embedded players"
  },
  {
    id: "megatvcom",
    name: "megatvcom",
    color: "#000000",
    logoUrl: getLogo("megatv.com"),
    exampleUrl: "",
    description: "megatv.com videos"
  },
  {
    id: "meipai",
    name: "Meipai",
    color: "#E1306C",
    logoUrl: getLogo("meipai.com"),
    exampleUrl: "",
    description: "美拍"
  },
  {
    id: "melonvod",
    name: "MelonVOD",
    color: "#1877F2",
    logoUrl: getLogo("melonvod.com"),
    exampleUrl: "",
    description: "Support for MelonVOD extraction."
  },
  {
    id: "metacritic",
    name: "Metacritic",
    color: "#1DA1F2",
    logoUrl: getLogo("metacritic.com"),
    exampleUrl: "",
    description: "Support for Metacritic extraction."
  },
  {
    id: "mewatch",
    name: "mewatch",
    color: "#9146FF",
    logoUrl: getLogo("mewatch.com"),
    exampleUrl: "",
    description: "Support for mewatch extraction."
  },
  {
    id: "microsoftbuild",
    name: "MicrosoftBuild",
    color: "#BD081C",
    logoUrl: getLogo("microsoftbuild.com"),
    exampleUrl: "",
    description: "Support for MicrosoftBuild extraction."
  },
  {
    id: "microsoftembed",
    name: "MicrosoftEmbed",
    color: "#FF4500",
    logoUrl: getLogo("microsoftembed.com"),
    exampleUrl: "",
    description: "Support for MicrosoftEmbed extraction."
  },
  {
    id: "microsoftlearnepisode",
    name: "MicrosoftLearnEpisode",
    color: "#0A66C2",
    logoUrl: getLogo("microsoftlearnepisode.com"),
    exampleUrl: "",
    description: "Support for MicrosoftLearnEpisode extraction."
  },
  {
    id: "microsoftlearnplaylist",
    name: "MicrosoftLearnPlaylist",
    color: "#1AB7EA",
    logoUrl: getLogo("microsoftlearnplaylist.com"),
    exampleUrl: "",
    description: "Support for MicrosoftLearnPlaylist extraction."
  },
  {
    id: "microsoftlearnsession",
    name: "MicrosoftLearnSession",
    color: "#FF5500",
    logoUrl: getLogo("microsoftlearnsession.com"),
    exampleUrl: "",
    description: "Support for MicrosoftLearnSession extraction."
  },
  {
    id: "microsoftmedius",
    name: "MicrosoftMedius",
    color: "#0062D2",
    logoUrl: getLogo("microsoftmedius.com"),
    exampleUrl: "",
    description: "Support for MicrosoftMedius extraction."
  },
  {
    id: "microsoftstream",
    name: "microsoftstream",
    color: "#00A1D6",
    logoUrl: getLogo("microsoftstream.com"),
    exampleUrl: "",
    description: "Microsoft Stream"
  },
  {
    id: "minds",
    name: "minds",
    color: "#0085ff",
    logoUrl: getLogo("minds.com"),
    exampleUrl: "",
    description: "Support for minds extraction."
  },
  {
    id: "minoto",
    name: "Minoto",
    color: "#625DF5",
    logoUrl: getLogo("minoto.com"),
    exampleUrl: "",
    description: "Support for Minoto extraction."
  },
  {
    id: "mir24_tv",
    name: "mir24.tv",
    color: "#ED812B",
    logoUrl: getLogo("mir24.tv.com"),
    exampleUrl: "",
    description: "Support for mir24.tv extraction."
  },
  {
    id: "mirrativ",
    name: "mirrativ",
    color: "#FDA238",
    logoUrl: getLogo("mirrativ.com"),
    exampleUrl: "",
    description: "Support for mirrativ extraction."
  },
  {
    id: "mirrorcouk",
    name: "MirrorCoUK",
    color: "#FF0000",
    logoUrl: getLogo("mirrorcouk.com"),
    exampleUrl: "",
    description: "Support for MirrorCoUK extraction."
  },
  {
    id: "mixch",
    name: "mixch",
    color: "#000000",
    logoUrl: getLogo("mixch.com"),
    exampleUrl: "",
    description: "Support for mixch extraction."
  },
  {
    id: "mixcloud",
    name: "mixcloud",
    color: "#E1306C",
    logoUrl: getLogo("mixcloud.com"),
    exampleUrl: "",
    description: "Support for mixcloud extraction."
  },
  {
    id: "mixlr",
    name: "Mixlr",
    color: "#1877F2",
    logoUrl: getLogo("mixlr.com"),
    exampleUrl: "",
    description: "Support for Mixlr extraction."
  },
  {
    id: "mixlrrecoring",
    name: "MixlrRecoring",
    color: "#1DA1F2",
    logoUrl: getLogo("mixlrrecoring.com"),
    exampleUrl: "",
    description: "Support for MixlrRecoring extraction."
  },
  {
    id: "mlb",
    name: "MLB",
    color: "#9146FF",
    logoUrl: getLogo("mlb.com"),
    exampleUrl: "",
    description: "Support for MLB extraction."
  },
  {
    id: "mlbarticle",
    name: "MLBArticle",
    color: "#BD081C",
    logoUrl: getLogo("mlbarticle.com"),
    exampleUrl: "",
    description: "Support for MLBArticle extraction."
  },
  {
    id: "mlbtv",
    name: "MLBTV",
    color: "#FF4500",
    logoUrl: getLogo("mlbtv.com"),
    exampleUrl: "",
    description: "[*mlb*](## \"netrc machine\")"
  },
  {
    id: "mlbvideo",
    name: "MLBVideo",
    color: "#0A66C2",
    logoUrl: getLogo("mlbvideo.com"),
    exampleUrl: "",
    description: "Support for MLBVideo extraction."
  },
  {
    id: "mlssoccer",
    name: "MLSSoccer",
    color: "#1AB7EA",
    logoUrl: getLogo("mlssoccer.com"),
    exampleUrl: "",
    description: "Support for MLSSoccer extraction."
  },
  {
    id: "mnettv",
    name: "MNetTV",
    color: "#FF5500",
    logoUrl: getLogo("mnettv.com"),
    exampleUrl: "",
    description: "[*mnettv*](## \"netrc machine\")"
  },
  {
    id: "mnettvlive",
    name: "MNetTVLive",
    color: "#0062D2",
    logoUrl: getLogo("mnettvlive.com"),
    exampleUrl: "",
    description: "[*mnettv*](## \"netrc machine\")"
  },
  {
    id: "mnettvrecordings",
    name: "MNetTVRecordings",
    color: "#00A1D6",
    logoUrl: getLogo("mnettvrecordings.com"),
    exampleUrl: "",
    description: "[*mnettv*](## \"netrc machine\")"
  },
  {
    id: "mochavideo",
    name: "MochaVideo",
    color: "#0085ff",
    logoUrl: getLogo("mochavideo.com"),
    exampleUrl: "",
    description: "Support for MochaVideo extraction."
  },
  {
    id: "mojevideo",
    name: "Mojevideo",
    color: "#625DF5",
    logoUrl: getLogo("mojevideo.sk"),
    exampleUrl: "",
    description: "mojevideo.sk"
  },
  {
    id: "mojvideo",
    name: "Mojvideo",
    color: "#ED812B",
    logoUrl: getLogo("mojvideo.com"),
    exampleUrl: "",
    description: "Support for Mojvideo extraction."
  },
  {
    id: "monstercat",
    name: "Monstercat",
    color: "#FDA238",
    logoUrl: getLogo("monstercat.com"),
    exampleUrl: "",
    description: "Support for Monstercat extraction."
  },
  {
    id: "monstersiren",
    name: "monstersiren",
    color: "#FF0000",
    logoUrl: getLogo("monstersiren.com"),
    exampleUrl: "",
    description: "塞壬唱片"
  },
  {
    id: "motherless",
    name: "Motherless",
    color: "#000000",
    logoUrl: getLogo("motherless.com"),
    exampleUrl: "",
    description: "Support for Motherless extraction."
  },
  {
    id: "motherlessgallery",
    name: "MotherlessGallery",
    color: "#E1306C",
    logoUrl: getLogo("motherlessgallery.com"),
    exampleUrl: "",
    description: "Support for MotherlessGallery extraction."
  },
  {
    id: "motherlessgroup",
    name: "MotherlessGroup",
    color: "#1877F2",
    logoUrl: getLogo("motherlessgroup.com"),
    exampleUrl: "",
    description: "Support for MotherlessGroup extraction."
  },
  {
    id: "motherlessuploader",
    name: "MotherlessUploader",
    color: "#1DA1F2",
    logoUrl: getLogo("motherlessuploader.com"),
    exampleUrl: "",
    description: "Support for MotherlessUploader extraction."
  },
  {
    id: "moviefap",
    name: "MovieFap",
    color: "#9146FF",
    logoUrl: getLogo("moviefap.com"),
    exampleUrl: "",
    description: "Support for MovieFap extraction."
  },
  {
    id: "moviepilot",
    name: "moviepilot",
    color: "#BD081C",
    logoUrl: getLogo("moviepilot.com"),
    exampleUrl: "",
    description: "Moviepilot trailer"
  },
  {
    id: "moviewplay",
    name: "MoviewPlay",
    color: "#FF4500",
    logoUrl: getLogo("moviewplay.com"),
    exampleUrl: "",
    description: "Support for MoviewPlay extraction."
  },
  {
    id: "moviezine",
    name: "Moviezine",
    color: "#0A66C2",
    logoUrl: getLogo("moviezine.com"),
    exampleUrl: "",
    description: "Support for Moviezine extraction."
  },
  {
    id: "movingimage",
    name: "MovingImage",
    color: "#1AB7EA",
    logoUrl: getLogo("movingimage.com"),
    exampleUrl: "",
    description: "Support for MovingImage extraction."
  },
  {
    id: "msn",
    name: "MSN",
    color: "#FF5500",
    logoUrl: getLogo("msn.com"),
    exampleUrl: "",
    description: "Support for MSN extraction."
  },
  {
    id: "mtg",
    name: "mtg",
    color: "#0062D2",
    logoUrl: getLogo("mtg.com"),
    exampleUrl: "",
    description: "MTG services"
  },
  {
    id: "mtv",
    name: "mtv",
    color: "#00A1D6",
    logoUrl: getLogo("mtv.com"),
    exampleUrl: "",
    description: "Support for mtv extraction."
  },
  {
    id: "mujrozhlas",
    name: "MujRozhlas",
    color: "#0085ff",
    logoUrl: getLogo("mujrozhlas.com"),
    exampleUrl: "",
    description: "Support for MujRozhlas extraction."
  },
  {
    id: "museai",
    name: "MuseAI",
    color: "#ED812B",
    logoUrl: getLogo("museai.com"),
    exampleUrl: "",
    description: "Support for MuseAI extraction."
  },
  {
    id: "musescore",
    name: "MuseScore",
    color: "#FDA238",
    logoUrl: getLogo("musescore.com"),
    exampleUrl: "",
    description: "Support for MuseScore extraction."
  },
  {
    id: "musicdexalbum",
    name: "MusicdexAlbum",
    color: "#FF0000",
    logoUrl: getLogo("musicdexalbum.com"),
    exampleUrl: "",
    description: "Support for MusicdexAlbum extraction."
  },
  {
    id: "musicdexartist",
    name: "MusicdexArtist",
    color: "#000000",
    logoUrl: getLogo("musicdexartist.com"),
    exampleUrl: "",
    description: "Support for MusicdexArtist extraction."
  },
  {
    id: "musicdexplaylist",
    name: "MusicdexPlaylist",
    color: "#E1306C",
    logoUrl: getLogo("musicdexplaylist.com"),
    exampleUrl: "",
    description: "Support for MusicdexPlaylist extraction."
  },
  {
    id: "musicdexsong",
    name: "MusicdexSong",
    color: "#1877F2",
    logoUrl: getLogo("musicdexsong.com"),
    exampleUrl: "",
    description: "Support for MusicdexSong extraction."
  },
  {
    id: "mux",
    name: "Mux",
    color: "#1DA1F2",
    logoUrl: getLogo("mux.com"),
    exampleUrl: "",
    description: "Support for Mux extraction."
  },
  {
    id: "mx3",
    name: "Mx3",
    color: "#9146FF",
    logoUrl: getLogo("mx3.com"),
    exampleUrl: "",
    description: "Support for Mx3 extraction."
  },
  {
    id: "mx3neo",
    name: "Mx3Neo",
    color: "#BD081C",
    logoUrl: getLogo("mx3neo.com"),
    exampleUrl: "",
    description: "Support for Mx3Neo extraction."
  },
  {
    id: "mx3volksmusik",
    name: "Mx3Volksmusik",
    color: "#FF4500",
    logoUrl: getLogo("mx3volksmusik.com"),
    exampleUrl: "",
    description: "Support for Mx3Volksmusik extraction."
  },
  {
    id: "mxplayer",
    name: "Mxplayer",
    color: "#0A66C2",
    logoUrl: getLogo("mxplayer.com"),
    exampleUrl: "",
    description: "Support for Mxplayer extraction."
  },
  {
    id: "mxplayershow",
    name: "MxplayerShow",
    color: "#1AB7EA",
    logoUrl: getLogo("mxplayershow.com"),
    exampleUrl: "",
    description: "Support for MxplayerShow extraction."
  },
  {
    id: "myspace",
    name: "MySpace",
    color: "#FF5500",
    logoUrl: getLogo("myspace.com"),
    exampleUrl: "",
    description: "Support for MySpace extraction."
  },
  {
    id: "myspass",
    name: "MySpass",
    color: "#0062D2",
    logoUrl: getLogo("myspass.com"),
    exampleUrl: "",
    description: "Support for MySpass extraction."
  },
  {
    id: "myvideoge",
    name: "MyVideoGe",
    color: "#00A1D6",
    logoUrl: getLogo("myvideoge.com"),
    exampleUrl: "",
    description: "Support for MyVideoGe extraction."
  },
  {
    id: "myvidster",
    name: "MyVidster",
    color: "#0085ff",
    logoUrl: getLogo("myvidster.com"),
    exampleUrl: "",
    description: "Support for MyVidster extraction."
  },
  {
    id: "mzaalo",
    name: "Mzaalo",
    color: "#625DF5",
    logoUrl: getLogo("mzaalo.com"),
    exampleUrl: "",
    description: "Support for Mzaalo extraction."
  },
  {
    id: "n_tv_de",
    name: "n-tv.de",
    color: "#ED812B",
    logoUrl: getLogo("n-tv.de.com"),
    exampleUrl: "",
    description: "Support for n-tv.de extraction."
  },
  {
    id: "n1infoasset",
    name: "N1InfoAsset",
    color: "#FDA238",
    logoUrl: getLogo("n1infoasset.com"),
    exampleUrl: "",
    description: "Support for N1InfoAsset extraction."
  },
  {
    id: "nascarclassics",
    name: "NascarClassics",
    color: "#FF0000",
    logoUrl: getLogo("nascarclassics.com"),
    exampleUrl: "",
    description: "Support for NascarClassics extraction."
  },
  {
    id: "nate",
    name: "Nate",
    color: "#000000",
    logoUrl: getLogo("nate.com"),
    exampleUrl: "",
    description: "Support for Nate extraction."
  },
  {
    id: "nateprogram",
    name: "NateProgram",
    color: "#E1306C",
    logoUrl: getLogo("nateprogram.com"),
    exampleUrl: "",
    description: "Support for NateProgram extraction."
  },
  {
    id: "nationalgeographictv",
    name: "NationalGeographicTV",
    color: "#1877F2",
    logoUrl: getLogo("nationalgeographictv.com"),
    exampleUrl: "",
    description: "Support for NationalGeographicTV extraction."
  },
  {
    id: "naver",
    name: "Naver",
    color: "#1DA1F2",
    logoUrl: getLogo("naver.com"),
    exampleUrl: "",
    description: "Support for Naver extraction."
  },
  {
    id: "navernow",
    name: "navernow",
    color: "#9146FF",
    logoUrl: getLogo("navernow.com"),
    exampleUrl: "",
    description: "Support for navernow extraction."
  },
  {
    id: "nbc",
    name: "NBC",
    color: "#BD081C",
    logoUrl: getLogo("nbc.com"),
    exampleUrl: "",
    description: "Support for NBC extraction."
  },
  {
    id: "nbcnews",
    name: "NBCNews",
    color: "#FF4500",
    logoUrl: getLogo("nbcnews.com"),
    exampleUrl: "",
    description: "Support for NBCNews extraction."
  },
  {
    id: "nbcolympics",
    name: "nbcolympics",
    color: "#0A66C2",
    logoUrl: getLogo("nbcolympics.com"),
    exampleUrl: "",
    description: "Support for nbcolympics extraction."
  },
  {
    id: "nbcstations",
    name: "NBCStations",
    color: "#1AB7EA",
    logoUrl: getLogo("nbcstations.com"),
    exampleUrl: "",
    description: "Support for NBCStations extraction."
  },
  {
    id: "ndr",
    name: "ndr",
    color: "#FF5500",
    logoUrl: getLogo("NDR.de"),
    exampleUrl: "",
    description: "NDR.de - Norddeutscher Rundfunk"
  },
  {
    id: "nekohacker",
    name: "NekoHacker",
    color: "#0062D2",
    logoUrl: getLogo("nekohacker.com"),
    exampleUrl: "",
    description: "Support for NekoHacker extraction."
  },
  {
    id: "nerdcubedfeed",
    name: "NerdCubedFeed",
    color: "#00A1D6",
    logoUrl: getLogo("nerdcubedfeed.com"),
    exampleUrl: "",
    description: "Support for NerdCubedFeed extraction."
  },
  {
    id: "nest",
    name: "Nest",
    color: "#0085ff",
    logoUrl: getLogo("nest.com"),
    exampleUrl: "",
    description: "Support for Nest extraction."
  },
  {
    id: "nestclip",
    name: "NestClip",
    color: "#625DF5",
    logoUrl: getLogo("nestclip.com"),
    exampleUrl: "",
    description: "Support for NestClip extraction."
  },
  {
    id: "netappcollection",
    name: "NetAppCollection",
    color: "#ED812B",
    logoUrl: getLogo("netappcollection.com"),
    exampleUrl: "",
    description: "Support for NetAppCollection extraction."
  },
  {
    id: "netappvideo",
    name: "NetAppVideo",
    color: "#FDA238",
    logoUrl: getLogo("netappvideo.com"),
    exampleUrl: "",
    description: "Support for NetAppVideo extraction."
  },
  {
    id: "netplustv",
    name: "NetPlusTV",
    color: "#FF0000",
    logoUrl: getLogo("netplustv.com"),
    exampleUrl: "",
    description: "[*netplus*](## \"netrc machine\")"
  },
  {
    id: "netplustvlive",
    name: "NetPlusTVLive",
    color: "#000000",
    logoUrl: getLogo("netplustvlive.com"),
    exampleUrl: "",
    description: "[*netplus*](## \"netrc machine\")"
  },
  {
    id: "netplustvrecordings",
    name: "NetPlusTVRecordings",
    color: "#E1306C",
    logoUrl: getLogo("netplustvrecordings.com"),
    exampleUrl: "",
    description: "[*netplus*](## \"netrc machine\")"
  },
  {
    id: "netverse",
    name: "Netverse",
    color: "#1877F2",
    logoUrl: getLogo("netverse.com"),
    exampleUrl: "",
    description: "Support for Netverse extraction."
  },
  {
    id: "netverseplaylist",
    name: "NetversePlaylist",
    color: "#1DA1F2",
    logoUrl: getLogo("netverseplaylist.com"),
    exampleUrl: "",
    description: "Support for NetversePlaylist extraction."
  },
  {
    id: "netversesearch",
    name: "NetverseSearch",
    color: "#9146FF",
    logoUrl: getLogo("netversesearch.com"),
    exampleUrl: "",
    description: "\"netsearch:\" prefix"
  },
  {
    id: "netzkino",
    name: "Netzkino",
    color: "#BD081C",
    logoUrl: getLogo("netzkino.com"),
    exampleUrl: "",
    description: "Support for Netzkino extraction."
  },
  {
    id: "newgrounds",
    name: "Newgrounds",
    color: "#FF4500",
    logoUrl: getLogo("newgrounds.com"),
    exampleUrl: "",
    description: "[*newgrounds*](## \"netrc machine\")"
  },
  {
    id: "newspicks",
    name: "NewsPicks",
    color: "#0A66C2",
    logoUrl: getLogo("newspicks.com"),
    exampleUrl: "",
    description: "Support for NewsPicks extraction."
  },
  {
    id: "newsy",
    name: "Newsy",
    color: "#1AB7EA",
    logoUrl: getLogo("newsy.com"),
    exampleUrl: "",
    description: "Support for Newsy extraction."
  },
  {
    id: "nexx",
    name: "Nexx",
    color: "#FF5500",
    logoUrl: getLogo("nexx.com"),
    exampleUrl: "",
    description: "Support for Nexx extraction."
  },
  {
    id: "nexxembed",
    name: "NexxEmbed",
    color: "#0062D2",
    logoUrl: getLogo("nexxembed.com"),
    exampleUrl: "",
    description: "Support for NexxEmbed extraction."
  },
  {
    id: "nfb",
    name: "nfb",
    color: "#00A1D6",
    logoUrl: getLogo("nfb.ca"),
    exampleUrl: "",
    description: "nfb.ca and onf.ca films and episodes"
  },
  {
    id: "nfhsnetwork",
    name: "NFHSNetwork",
    color: "#0085ff",
    logoUrl: getLogo("nfhsnetwork.com"),
    exampleUrl: "",
    description: "Support for NFHSNetwork extraction."
  },
  {
    id: "nfl_com",
    name: "nfl.com",
    color: "#625DF5",
    logoUrl: getLogo("nfl.com.com"),
    exampleUrl: "",
    description: "Support for nfl.com extraction."
  },
  {
    id: "nhkforschoolbangumi",
    name: "NhkForSchoolBangumi",
    color: "#ED812B",
    logoUrl: getLogo("nhkforschoolbangumi.com"),
    exampleUrl: "",
    description: "Support for NhkForSchoolBangumi extraction."
  },
  {
    id: "nhkforschoolprogramlist",
    name: "NhkForSchoolProgramList",
    color: "#FDA238",
    logoUrl: getLogo("nhkforschoolprogramlist.com"),
    exampleUrl: "",
    description: "Support for NhkForSchoolProgramList extraction."
  },
  {
    id: "nhkforschoolsubject",
    name: "NhkForSchoolSubject",
    color: "#FF0000",
    logoUrl: getLogo("nhkforschoolsubject.com"),
    exampleUrl: "",
    description: "Portal page for each school subjects, like Japanese (kokugo, 国語) or math (sansuu/suugaku or 算数・数学)"
  },
  {
    id: "nhkradionewspage",
    name: "NhkRadioNewsPage",
    color: "#000000",
    logoUrl: getLogo("nhkradionewspage.com"),
    exampleUrl: "",
    description: "Support for NhkRadioNewsPage extraction."
  },
  {
    id: "nhkradiru",
    name: "NhkRadiru",
    color: "#E1306C",
    logoUrl: getLogo("nhkradiru.com"),
    exampleUrl: "",
    description: "NHK らじる (Radiru/Rajiru)"
  },
  {
    id: "nhkradirulive",
    name: "NhkRadiruLive",
    color: "#1877F2",
    logoUrl: getLogo("nhkradirulive.com"),
    exampleUrl: "",
    description: "Support for NhkRadiruLive extraction."
  },
  {
    id: "nhkvod",
    name: "NhkVod",
    color: "#1DA1F2",
    logoUrl: getLogo("nhkvod.com"),
    exampleUrl: "",
    description: "Support for NhkVod extraction."
  },
  {
    id: "nhkvodprogram",
    name: "NhkVodProgram",
    color: "#9146FF",
    logoUrl: getLogo("nhkvodprogram.com"),
    exampleUrl: "",
    description: "Support for NhkVodProgram extraction."
  },
  {
    id: "nhl_com",
    name: "nhl.com",
    color: "#BD081C",
    logoUrl: getLogo("nhl.com.com"),
    exampleUrl: "",
    description: "Support for nhl.com extraction."
  },
  {
    id: "nick_com",
    name: "nick.com",
    color: "#FF4500",
    logoUrl: getLogo("nick.com.com"),
    exampleUrl: "",
    description: "Support for nick.com extraction."
  },
  {
    id: "niconico",
    name: "niconico",
    color: "#0A66C2",
    logoUrl: getLogo("niconico.com"),
    exampleUrl: "",
    description: "[*niconico*](## \"netrc machine\") ニコニコ動画"
  },
  {
    id: "niconicochannelplus",
    name: "NiconicoChannelPlus",
    color: "#1AB7EA",
    logoUrl: getLogo("niconicochannelplus.com"),
    exampleUrl: "",
    description: "ニコニコチャンネルプラス"
  },
  {
    id: "niconicouser",
    name: "NiconicoUser",
    color: "#FF5500",
    logoUrl: getLogo("niconicouser.com"),
    exampleUrl: "",
    description: "Support for NiconicoUser extraction."
  },
  {
    id: "ninaprotocol",
    name: "NinaProtocol",
    color: "#0062D2",
    logoUrl: getLogo("ninaprotocol.com"),
    exampleUrl: "",
    description: "Support for NinaProtocol extraction."
  },
  {
    id: "nintendo",
    name: "Nintendo",
    color: "#00A1D6",
    logoUrl: getLogo("nintendo.com"),
    exampleUrl: "",
    description: "Support for Nintendo extraction."
  },
  {
    id: "nitter",
    name: "Nitter",
    color: "#0085ff",
    logoUrl: getLogo("nitter.com"),
    exampleUrl: "",
    description: "Support for Nitter extraction."
  },
  {
    id: "njoy",
    name: "njoy",
    color: "#625DF5",
    logoUrl: getLogo("njoy.com"),
    exampleUrl: "",
    description: "N-JOY"
  },
  {
    id: "nobelprize",
    name: "NobelPrize",
    color: "#ED812B",
    logoUrl: getLogo("nobelprize.com"),
    exampleUrl: "",
    description: "Support for NobelPrize extraction."
  },
  {
    id: "noicepodcast",
    name: "NoicePodcast",
    color: "#FDA238",
    logoUrl: getLogo("noicepodcast.com"),
    exampleUrl: "",
    description: "Support for NoicePodcast extraction."
  },
  {
    id: "noodlemagazine",
    name: "NoodleMagazine",
    color: "#000000",
    logoUrl: getLogo("noodlemagazine.com"),
    exampleUrl: "",
    description: "Support for NoodleMagazine extraction."
  },
  {
    id: "nosnlarticle",
    name: "NOSNLArticle",
    color: "#E1306C",
    logoUrl: getLogo("nosnlarticle.com"),
    exampleUrl: "",
    description: "Support for NOSNLArticle extraction."
  },
  {
    id: "nova",
    name: "Nova",
    color: "#1877F2",
    logoUrl: getLogo("TN.cz"),
    exampleUrl: "",
    description: "TN.cz, Prásk.tv, Nova.cz, Novaplus.cz, FANDA.tv, Krásná.cz and Doma.cz"
  },
  {
    id: "novaembed",
    name: "NovaEmbed",
    color: "#1DA1F2",
    logoUrl: getLogo("novaembed.com"),
    exampleUrl: "",
    description: "Support for NovaEmbed extraction."
  },
  {
    id: "novaplay",
    name: "NovaPlay",
    color: "#9146FF",
    logoUrl: getLogo("novaplay.com"),
    exampleUrl: "",
    description: "Support for NovaPlay extraction."
  },
  {
    id: "nowcanal",
    name: "NowCanal",
    color: "#BD081C",
    logoUrl: getLogo("nowcanal.com"),
    exampleUrl: "",
    description: "Support for NowCanal extraction."
  },
  {
    id: "nowness",
    name: "nowness",
    color: "#FF4500",
    logoUrl: getLogo("nowness.com"),
    exampleUrl: "",
    description: "Support for nowness extraction."
  },
  {
    id: "npo",
    name: "npo",
    color: "#0A66C2",
    logoUrl: getLogo("npo.nl"),
    exampleUrl: "",
    description: "npo.nl, ntr.nl, omroepwnl.nl, zapp.nl and npo3.nl"
  },
  {
    id: "npr",
    name: "Npr",
    color: "#1AB7EA",
    logoUrl: getLogo("npr.com"),
    exampleUrl: "",
    description: "Support for Npr extraction."
  },
  {
    id: "nrk",
    name: "NRK",
    color: "#FF5500",
    logoUrl: getLogo("nrk.com"),
    exampleUrl: "",
    description: "Support for NRK extraction."
  },
  {
    id: "nrkplaylist",
    name: "NRKPlaylist",
    color: "#0062D2",
    logoUrl: getLogo("nrkplaylist.com"),
    exampleUrl: "",
    description: "Support for NRKPlaylist extraction."
  },
  {
    id: "nrkradiopodkast",
    name: "NRKRadioPodkast",
    color: "#00A1D6",
    logoUrl: getLogo("nrkradiopodkast.com"),
    exampleUrl: "",
    description: "Support for NRKRadioPodkast extraction."
  },
  {
    id: "nrkskole",
    name: "NRKSkole",
    color: "#0085ff",
    logoUrl: getLogo("nrkskole.com"),
    exampleUrl: "",
    description: "NRK Skole"
  },
  {
    id: "nrktv",
    name: "NRKTV",
    color: "#625DF5",
    logoUrl: getLogo("nrktv.com"),
    exampleUrl: "",
    description: "NRK TV and NRK Radio"
  },
  {
    id: "nrktvdirekte",
    name: "NRKTVDirekte",
    color: "#ED812B",
    logoUrl: getLogo("nrktvdirekte.com"),
    exampleUrl: "",
    description: "NRK TV Direkte and NRK Radio Direkte"
  },
  {
    id: "nrktvepisode",
    name: "NRKTVEpisode",
    color: "#FDA238",
    logoUrl: getLogo("nrktvepisode.com"),
    exampleUrl: "",
    description: "Support for NRKTVEpisode extraction."
  },
  {
    id: "nrktvepisodes",
    name: "NRKTVEpisodes",
    color: "#FF0000",
    logoUrl: getLogo("nrktvepisodes.com"),
    exampleUrl: "",
    description: "Support for NRKTVEpisodes extraction."
  },
  {
    id: "nrktvseason",
    name: "NRKTVSeason",
    color: "#000000",
    logoUrl: getLogo("nrktvseason.com"),
    exampleUrl: "",
    description: "Support for NRKTVSeason extraction."
  },
  {
    id: "nrktvseries",
    name: "NRKTVSeries",
    color: "#E1306C",
    logoUrl: getLogo("nrktvseries.com"),
    exampleUrl: "",
    description: "Support for NRKTVSeries extraction."
  },
  {
    id: "nts_live",
    name: "nts.live",
    color: "#1877F2",
    logoUrl: getLogo("nts.live.com"),
    exampleUrl: "",
    description: "Support for nts.live extraction."
  },
  {
    id: "ntv_ru",
    name: "ntv.ru",
    color: "#1DA1F2",
    logoUrl: getLogo("ntv.ru.com"),
    exampleUrl: "",
    description: "Support for ntv.ru extraction."
  },
  {
    id: "nuvid",
    name: "Nuvid",
    color: "#BD081C",
    logoUrl: getLogo("nuvid.com"),
    exampleUrl: "",
    description: "Support for Nuvid extraction."
  },
  {
    id: "nytimes",
    name: "NYTimes",
    color: "#FF4500",
    logoUrl: getLogo("nytimes.com"),
    exampleUrl: "",
    description: "Support for NYTimes extraction."
  },
  {
    id: "nytimesarticle",
    name: "NYTimesArticle",
    color: "#0A66C2",
    logoUrl: getLogo("nytimesarticle.com"),
    exampleUrl: "",
    description: "Support for NYTimesArticle extraction."
  },
  {
    id: "nytimescookingguide",
    name: "NYTimesCookingGuide",
    color: "#1AB7EA",
    logoUrl: getLogo("nytimescookingguide.com"),
    exampleUrl: "",
    description: "Support for NYTimesCookingGuide extraction."
  },
  {
    id: "nytimescookingrecipe",
    name: "NYTimesCookingRecipe",
    color: "#FF5500",
    logoUrl: getLogo("nytimescookingrecipe.com"),
    exampleUrl: "",
    description: "Support for NYTimesCookingRecipe extraction."
  },
  {
    id: "nzherald",
    name: "nzherald",
    color: "#0062D2",
    logoUrl: getLogo("nzherald.com"),
    exampleUrl: "",
    description: "Support for nzherald extraction."
  },
  {
    id: "nzonscreen",
    name: "NZOnScreen",
    color: "#00A1D6",
    logoUrl: getLogo("nzonscreen.com"),
    exampleUrl: "",
    description: "Support for NZOnScreen extraction."
  },
  {
    id: "nzz",
    name: "NZZ",
    color: "#0085ff",
    logoUrl: getLogo("nzz.com"),
    exampleUrl: "",
    description: "Support for NZZ extraction."
  },
  {
    id: "ocw_mit_edu",
    name: "ocw.mit.edu",
    color: "#625DF5",
    logoUrl: getLogo("ocw.mit.edu.com"),
    exampleUrl: "",
    description: "Support for ocw.mit.edu extraction."
  },
  {
    id: "odnoklassniki",
    name: "Odnoklassniki",
    color: "#ED812B",
    logoUrl: getLogo("odnoklassniki.com"),
    exampleUrl: "",
    description: "Support for Odnoklassniki extraction."
  },
  {
    id: "oftv",
    name: "OfTV",
    color: "#FDA238",
    logoUrl: getLogo("oftv.com"),
    exampleUrl: "",
    description: "Support for OfTV extraction."
  },
  {
    id: "oftvplaylist",
    name: "OfTVPlaylist",
    color: "#FF0000",
    logoUrl: getLogo("oftvplaylist.com"),
    exampleUrl: "",
    description: "Support for OfTVPlaylist extraction."
  },
  {
    id: "oktoberfesttv",
    name: "OktoberfestTV",
    color: "#000000",
    logoUrl: getLogo("oktoberfesttv.com"),
    exampleUrl: "",
    description: "Support for OktoberfestTV extraction."
  },
  {
    id: "olympicsreplay",
    name: "OlympicsReplay",
    color: "#E1306C",
    logoUrl: getLogo("olympicsreplay.com"),
    exampleUrl: "",
    description: "Support for OlympicsReplay extraction."
  },
  {
    id: "on24",
    name: "on24",
    color: "#1877F2",
    logoUrl: getLogo("on24.com"),
    exampleUrl: "",
    description: "ON24"
  },
  {
    id: "ondemandchinaepisode",
    name: "OnDemandChinaEpisode",
    color: "#1DA1F2",
    logoUrl: getLogo("ondemandchinaepisode.com"),
    exampleUrl: "",
    description: "Support for OnDemandChinaEpisode extraction."
  },
  {
    id: "ondemandkorea",
    name: "OnDemandKorea",
    color: "#9146FF",
    logoUrl: getLogo("ondemandkorea.com"),
    exampleUrl: "",
    description: "Support for OnDemandKorea extraction."
  },
  {
    id: "ondemandkoreaprogram",
    name: "OnDemandKoreaProgram",
    color: "#BD081C",
    logoUrl: getLogo("ondemandkoreaprogram.com"),
    exampleUrl: "",
    description: "Support for OnDemandKoreaProgram extraction."
  },
  {
    id: "onefootball",
    name: "OneFootball",
    color: "#FF4500",
    logoUrl: getLogo("onefootball.com"),
    exampleUrl: "",
    description: "Support for OneFootball extraction."
  },
  {
    id: "oneplacepodcast",
    name: "OnePlacePodcast",
    color: "#0A66C2",
    logoUrl: getLogo("oneplacepodcast.com"),
    exampleUrl: "",
    description: "Support for OnePlacePodcast extraction."
  },
  {
    id: "onet_pl",
    name: "onet.pl",
    color: "#1AB7EA",
    logoUrl: getLogo("onet.pl.com"),
    exampleUrl: "",
    description: "Support for onet.pl extraction."
  },
  {
    id: "onet_tv",
    name: "onet.tv",
    color: "#FF5500",
    logoUrl: getLogo("onet.tv.com"),
    exampleUrl: "",
    description: "Support for onet.tv extraction."
  },
  {
    id: "onetmvp",
    name: "OnetMVP",
    color: "#0062D2",
    logoUrl: getLogo("onetmvp.com"),
    exampleUrl: "",
    description: "Support for OnetMVP extraction."
  },
  {
    id: "onionstudios",
    name: "OnionStudios",
    color: "#00A1D6",
    logoUrl: getLogo("onionstudios.com"),
    exampleUrl: "",
    description: "Support for OnionStudios extraction."
  },
  {
    id: "onsen",
    name: "onsen",
    color: "#0085ff",
    logoUrl: getLogo("onsen.com"),
    exampleUrl: "",
    description: "[*onsen*](## \"netrc machine\") インターネットラジオステーション＜音泉＞"
  },
  {
    id: "opencast",
    name: "Opencast",
    color: "#625DF5",
    logoUrl: getLogo("opencast.com"),
    exampleUrl: "",
    description: "Support for Opencast extraction."
  },
  {
    id: "opencastplaylist",
    name: "OpencastPlaylist",
    color: "#ED812B",
    logoUrl: getLogo("opencastplaylist.com"),
    exampleUrl: "",
    description: "Support for OpencastPlaylist extraction."
  },
  {
    id: "openrec",
    name: "openrec",
    color: "#FDA238",
    logoUrl: getLogo("openrec.com"),
    exampleUrl: "",
    description: "Support for openrec extraction."
  },
  {
    id: "oratv",
    name: "OraTV",
    color: "#FF0000",
    logoUrl: getLogo("oratv.com"),
    exampleUrl: "",
    description: "Support for OraTV extraction."
  },
  {
    id: "osnateltv",
    name: "OsnatelTV",
    color: "#000000",
    logoUrl: getLogo("osnateltv.com"),
    exampleUrl: "",
    description: "[*osnateltv*](## \"netrc machine\")"
  },
  {
    id: "osnateltvlive",
    name: "OsnatelTVLive",
    color: "#E1306C",
    logoUrl: getLogo("osnateltvlive.com"),
    exampleUrl: "",
    description: "[*osnateltv*](## \"netrc machine\")"
  },
  {
    id: "osnateltvrecordings",
    name: "OsnatelTVRecordings",
    color: "#1877F2",
    logoUrl: getLogo("osnateltvrecordings.com"),
    exampleUrl: "",
    description: "[*osnateltv*](## \"netrc machine\")"
  },
  {
    id: "outsidetv",
    name: "OutsideTV",
    color: "#1DA1F2",
    logoUrl: getLogo("outsidetv.com"),
    exampleUrl: "",
    description: "Support for OutsideTV extraction."
  },
  {
    id: "owncloud",
    name: "OwnCloud",
    color: "#9146FF",
    logoUrl: getLogo("owncloud.com"),
    exampleUrl: "",
    description: "Support for OwnCloud extraction."
  },
  {
    id: "packtpub",
    name: "PacktPub",
    color: "#BD081C",
    logoUrl: getLogo("packtpub.com"),
    exampleUrl: "",
    description: "[*packtpub*](## \"netrc machine\")"
  },
  {
    id: "packtpubcourse",
    name: "PacktPubCourse",
    color: "#FF4500",
    logoUrl: getLogo("packtpubcourse.com"),
    exampleUrl: "",
    description: "Support for PacktPubCourse extraction."
  },
  {
    id: "pandatv",
    name: "PandaTv",
    color: "#0A66C2",
    logoUrl: getLogo("pandalive.co.kr"),
    exampleUrl: "",
    description: "pandalive.co.kr (팬더티비)"
  },
  {
    id: "panopto",
    name: "Panopto",
    color: "#1AB7EA",
    logoUrl: getLogo("panopto.com"),
    exampleUrl: "",
    description: "Support for Panopto extraction."
  },
  {
    id: "panoptolist",
    name: "PanoptoList",
    color: "#FF5500",
    logoUrl: getLogo("panoptolist.com"),
    exampleUrl: "",
    description: "Support for PanoptoList extraction."
  },
  {
    id: "panoptoplaylist",
    name: "PanoptoPlaylist",
    color: "#0062D2",
    logoUrl: getLogo("panoptoplaylist.com"),
    exampleUrl: "",
    description: "Support for PanoptoPlaylist extraction."
  },
  {
    id: "paramountpressexpress",
    name: "ParamountPressExpress",
    color: "#00A1D6",
    logoUrl: getLogo("paramountpressexpress.com"),
    exampleUrl: "",
    description: "Support for ParamountPressExpress extraction."
  },
  {
    id: "parler",
    name: "Parler",
    color: "#0085ff",
    logoUrl: getLogo("parler.com"),
    exampleUrl: "",
    description: "Posts on parler.com"
  },
  {
    id: "parliamentlive_tv",
    name: "parliamentlive.tv",
    color: "#625DF5",
    logoUrl: getLogo("parliamentlive.tv.com"),
    exampleUrl: "",
    description: "UK parliament videos"
  },
  {
    id: "parlview",
    name: "Parlview",
    color: "#ED812B",
    logoUrl: getLogo("parlview.com"),
    exampleUrl: "",
    description: "Support for Parlview extraction."
  },
  {
    id: "patreon",
    name: "patreon",
    color: "#FDA238",
    logoUrl: getLogo("patreon.com"),
    exampleUrl: "",
    description: "Support for patreon extraction."
  },
  {
    id: "pbs",
    name: "pbs",
    color: "#FF0000",
    logoUrl: getLogo("pbs.com"),
    exampleUrl: "",
    description: "Public Broadcasting Service (PBS) and member stations: PBS: Public Broadcasting Service, APT - Alabama Public Television (WBIQ), GPB/Georgia Public Broadcasting (WGTV), Mississippi Public Broadcasting (WMPN), Nashville Public Television (WNPT), WFSU-TV (WFSU), WSRE (WSRE), WTCI (WTCI), WPBA/Channel 30 (WPBA), Alaska Public Media (KAKM), Arizona PBS (KAET), KNME-TV/Channel 5 (KNME), Vegas PBS (KLVX), AETN/ARKANSAS ETV NETWORK (KETS), KET (WKLE), WKNO/Channel 10 (WKNO), LPB/LOUISIANA PUBLIC BROADCASTING (WLPB), OETA (KETA), Ozarks Public Television (KOZK), WSIU Public Broadcasting (WSIU), KEET TV (KEET), KIXE/Channel 9 (KIXE), KPBS San Diego (KPBS), KQED (KQED), KVIE Public Television (KVIE), PBS SoCal/KOCE (KOCE), ValleyPBS (KVPT), CONNECTICUT PUBLIC TELEVISION (WEDH), KNPB Channel 5 (KNPB), SOPTV (KSYS), Rocky Mountain PBS (KRMA), KENW-TV3 (KENW), KUED Channel 7 (KUED), Wyoming PBS (KCWC), Colorado Public Television / KBDI 12 (KBDI), KBYU-TV (KBYU), Thirteen/WNET New York (WNET), WGBH/Channel 2 (WGBH), WGBY (WGBY), NJTV Public Media NJ (WNJT), WLIW21 (WLIW), mpt/Maryland Public Television (WMPB), WETA Television and Radio (WETA), WHYY (WHYY), PBS 39 (WLVT), WVPT - Your Source for PBS and More! (WVPT), Howard University Television (WHUT), WEDU PBS (WEDU), WGCU Public Media (WGCU), WPBT2 (WPBT), WUCF TV (WUCF), WUFT/Channel 5 (WUFT), WXEL/Channel 42 (WXEL), WLRN/Channel 17 (WLRN), WUSF Public Broadcasting (WUSF), ETV (WRLK), UNC-TV (WUNC), PBS Hawaii - Oceanic Cable Channel 10 (KHET), Idaho Public Television (KAID), KSPS (KSPS), OPB (KOPB), KWSU/Channel 10 & KTNW/Channel 31 (KWSU), WILL-TV (WILL), Network Knowledge - WSEC/Springfield (WSEC), WTTW11 (WTTW), Iowa Public Television/IPTV (KDIN), Nine Network (KETC), PBS39 Fort Wayne (WFWA), WFYI Indianapolis (WFYI), Milwaukee Public Television (WMVS), WNIN (WNIN), WNIT Public Television (WNIT), WPT (WPNE), WVUT/Channel 22 (WVUT), WEIU/Channel 51 (WEIU), WQPT-TV (WQPT), WYCC PBS Chicago (WYCC), WIPB-TV (WIPB), WTIU (WTIU), CET  (WCET), ThinkTVNetwork (WPTD), WBGU-TV (WBGU), WGVU TV (WGVU), NET1 (KUON), Pioneer Public Television (KWCM), SDPB Television (KUSD), TPT (KTCA), KSMQ (KSMQ), KPTS/Channel 8 (KPTS), KTWU/Channel 11 (KTWU), East Tennessee PBS (WSJK), WCTE-TV (WCTE), WLJT, Channel 11 (WLJT), WOSU TV (WOSU), WOUB/WOUC (WOUB), WVPB (WVPB), WKYU-PBS (WKYU), KERA 13 (KERA), MPBN (WCBB), Mountain Lake PBS (WCFE), NHPTV (WENH), Vermont PBS (WETK), witf (WITF), WQED Multimedia (WQED), WMHT Educational Telecommunications (WMHT), Q-TV (WDCQ), WTVS Detroit Public TV (WTVS), CMU Public Television (WCMU), WKAR-TV (WKAR), WNMU-TV Public TV 13 (WNMU), WDSE - WRPT (WDSE), WGTE TV (WGTE), Lakeland Public Television (KAWE), KMOS-TV - Channels 6.1, 6.2 and 6.3 (KMOS), MontanaPBS (KUSM), KRWG/Channel 22 (KRWG), KACV (KACV), KCOS/Channel 13 (KCOS), WCNY/Channel 24 (WCNY), WNED (WNED), WPBS (WPBS), WSKG Public TV (WSKG), WXXI (WXXI), WPSU (WPSU), WVIA Public Media Studios (WVIA), WTVI (WTVI), Western Reserve PBS (WNEO), WVIZ/PBS ideastream (WVIZ), KCTS 9 (KCTS), Basin PBS (KPBT), KUHT / Channel 8 (KUHT), KLRN (KLRN), KLRU (KLRU), WTJX Channel 12 (WTJX), WCVE PBS (WCVE), KBTC Public Television (KBTC)"
  },
  {
    id: "pbskids",
    name: "PBSKids",
    color: "#000000",
    logoUrl: getLogo("pbskids.com"),
    exampleUrl: "",
    description: "Support for PBSKids extraction."
  },
  {
    id: "pearvideo",
    name: "PearVideo",
    color: "#E1306C",
    logoUrl: getLogo("pearvideo.com"),
    exampleUrl: "",
    description: "Support for PearVideo extraction."
  },
  {
    id: "peekvids",
    name: "PeekVids",
    color: "#1877F2",
    logoUrl: getLogo("peekvids.com"),
    exampleUrl: "",
    description: "Support for PeekVids extraction."
  },
  {
    id: "peer_tv",
    name: "peer.tv",
    color: "#1DA1F2",
    logoUrl: getLogo("peer.tv.com"),
    exampleUrl: "",
    description: "Support for peer.tv extraction."
  },
  {
    id: "peertube",
    name: "PeerTube",
    color: "#9146FF",
    logoUrl: getLogo("peertube.com"),
    exampleUrl: "",
    description: "Support for PeerTube extraction."
  },
  {
    id: "peloton",
    name: "peloton",
    color: "#BD081C",
    logoUrl: getLogo("peloton.com"),
    exampleUrl: "",
    description: "[*peloton*](## \"netrc machine\")"
  },
  {
    id: "performgroup",
    name: "PerformGroup",
    color: "#FF4500",
    logoUrl: getLogo("performgroup.com"),
    exampleUrl: "",
    description: "Support for PerformGroup extraction."
  },
  {
    id: "periscope",
    name: "periscope",
    color: "#0A66C2",
    logoUrl: getLogo("periscope.com"),
    exampleUrl: "",
    description: "Periscope"
  },
  {
    id: "pgatour",
    name: "PGATour",
    color: "#1AB7EA",
    logoUrl: getLogo("pgatour.com"),
    exampleUrl: "",
    description: "Support for PGATour extraction."
  },
  {
    id: "philharmoniedeparis",
    name: "PhilharmonieDeParis",
    color: "#FF5500",
    logoUrl: getLogo("philharmoniedeparis.com"),
    exampleUrl: "",
    description: "Philharmonie de Paris"
  },
  {
    id: "phoenix_de",
    name: "phoenix.de",
    color: "#0062D2",
    logoUrl: getLogo("phoenix.de.com"),
    exampleUrl: "",
    description: "Support for phoenix.de extraction."
  },
  {
    id: "photobucket",
    name: "Photobucket",
    color: "#00A1D6",
    logoUrl: getLogo("photobucket.com"),
    exampleUrl: "",
    description: "Support for Photobucket extraction."
  },
  {
    id: "pialive",
    name: "PiaLive",
    color: "#0085ff",
    logoUrl: getLogo("pialive.com"),
    exampleUrl: "",
    description: "Support for PiaLive extraction."
  },
  {
    id: "piapro",
    name: "Piapro",
    color: "#625DF5",
    logoUrl: getLogo("piapro.com"),
    exampleUrl: "",
    description: "[*piapro*](## \"netrc machine\")"
  },
  {
    id: "picarto",
    name: "picarto",
    color: "#ED812B",
    logoUrl: getLogo("picarto.com"),
    exampleUrl: "",
    description: "Support for picarto extraction."
  },
  {
    id: "piksel",
    name: "Piksel",
    color: "#FDA238",
    logoUrl: getLogo("piksel.com"),
    exampleUrl: "",
    description: "Support for Piksel extraction."
  },
  {
    id: "pinkbike",
    name: "Pinkbike",
    color: "#FF0000",
    logoUrl: getLogo("pinkbike.com"),
    exampleUrl: "",
    description: "Support for Pinkbike extraction."
  },
  {
    id: "pinterest",
    name: "Pinterest",
    color: "#000000",
    logoUrl: getLogo("pinterest.com"),
    exampleUrl: "",
    description: "Support for Pinterest extraction."
  },
  {
    id: "pinterestcollection",
    name: "PinterestCollection",
    color: "#E1306C",
    logoUrl: getLogo("pinterestcollection.com"),
    exampleUrl: "",
    description: "Support for PinterestCollection extraction."
  },
  {
    id: "piramidetv",
    name: "PiramideTV",
    color: "#1877F2",
    logoUrl: getLogo("piramidetv.com"),
    exampleUrl: "",
    description: "Support for PiramideTV extraction."
  },
  {
    id: "piramidetvchannel",
    name: "PiramideTVChannel",
    color: "#1DA1F2",
    logoUrl: getLogo("piramidetvchannel.com"),
    exampleUrl: "",
    description: "Support for PiramideTVChannel extraction."
  },
  {
    id: "planetmarathi",
    name: "PlanetMarathi",
    color: "#9146FF",
    logoUrl: getLogo("planetmarathi.com"),
    exampleUrl: "",
    description: "Support for PlanetMarathi extraction."
  },
  {
    id: "platzi",
    name: "Platzi",
    color: "#BD081C",
    logoUrl: getLogo("platzi.com"),
    exampleUrl: "",
    description: "[*platzi*](## \"netrc machine\")"
  },
  {
    id: "platzicourse",
    name: "PlatziCourse",
    color: "#FF4500",
    logoUrl: getLogo("platzicourse.com"),
    exampleUrl: "",
    description: "[*platzi*](## \"netrc machine\")"
  },
  {
    id: "play_tv",
    name: "play.tv",
    color: "#0A66C2",
    logoUrl: getLogo("goplay.be"),
    exampleUrl: "",
    description: "[*goplay*](## \"netrc machine\") PLAY (formerly goplay.be)"
  },
  {
    id: "player_sky_it",
    name: "player.sky.it",
    color: "#1AB7EA",
    logoUrl: getLogo("player.sky.it.com"),
    exampleUrl: "",
    description: "Support for player.sky.it extraction."
  },
  {
    id: "playerfm",
    name: "PlayerFm",
    color: "#FF5500",
    logoUrl: getLogo("playerfm.com"),
    exampleUrl: "",
    description: "Support for PlayerFm extraction."
  },
  {
    id: "playeur",
    name: "playeur",
    color: "#0062D2",
    logoUrl: getLogo("playeur.com"),
    exampleUrl: "",
    description: "Support for playeur extraction."
  },
  {
    id: "playplustv",
    name: "PlayPlusTV",
    color: "#00A1D6",
    logoUrl: getLogo("playplustv.com"),
    exampleUrl: "",
    description: "[*playplustv*](## \"netrc machine\")"
  },
  {
    id: "playsuisse",
    name: "PlaySuisse",
    color: "#0085ff",
    logoUrl: getLogo("playsuisse.com"),
    exampleUrl: "",
    description: "[*playsuisse*](## \"netrc machine\")"
  },
  {
    id: "playtvak",
    name: "Playtvak",
    color: "#625DF5",
    logoUrl: getLogo("Playtvak.cz"),
    exampleUrl: "",
    description: "Playtvak.cz, iDNES.cz and Lidovky.cz"
  },
  {
    id: "playvids",
    name: "PlayVids",
    color: "#ED812B",
    logoUrl: getLogo("playvids.com"),
    exampleUrl: "",
    description: "Support for PlayVids extraction."
  },
  {
    id: "playwire",
    name: "Playwire",
    color: "#FDA238",
    logoUrl: getLogo("playwire.com"),
    exampleUrl: "",
    description: "Support for Playwire extraction."
  },
  {
    id: "pluralsight",
    name: "pluralsight",
    color: "#FF0000",
    logoUrl: getLogo("pluralsight.com"),
    exampleUrl: "",
    description: "[*pluralsight*](## \"netrc machine\")"
  },
  {
    id: "plvideo",
    name: "PlVideo",
    color: "#000000",
    logoUrl: getLogo("plvideo.com"),
    exampleUrl: "",
    description: "Платформа"
  },
  {
    id: "plyrembed",
    name: "PlyrEmbed",
    color: "#E1306C",
    logoUrl: getLogo("plyrembed.com"),
    exampleUrl: "",
    description: "Support for PlyrEmbed extraction."
  },
  {
    id: "podbayfm",
    name: "PodbayFM",
    color: "#1877F2",
    logoUrl: getLogo("podbayfm.com"),
    exampleUrl: "",
    description: "Support for PodbayFM extraction."
  },
  {
    id: "podbayfmchannel",
    name: "PodbayFMChannel",
    color: "#1DA1F2",
    logoUrl: getLogo("podbayfmchannel.com"),
    exampleUrl: "",
    description: "Support for PodbayFMChannel extraction."
  },
  {
    id: "podchaser",
    name: "Podchaser",
    color: "#9146FF",
    logoUrl: getLogo("podchaser.com"),
    exampleUrl: "",
    description: "Support for Podchaser extraction."
  },
  {
    id: "pokergo",
    name: "PokerGo",
    color: "#BD081C",
    logoUrl: getLogo("pokergo.com"),
    exampleUrl: "",
    description: "[*pokergo*](## \"netrc machine\")"
  },
  {
    id: "pokergocollection",
    name: "PokerGoCollection",
    color: "#FF4500",
    logoUrl: getLogo("pokergocollection.com"),
    exampleUrl: "",
    description: "[*pokergo*](## \"netrc machine\")"
  },
  {
    id: "polsatgo",
    name: "PolsatGo",
    color: "#0A66C2",
    logoUrl: getLogo("polsatgo.com"),
    exampleUrl: "",
    description: "Support for PolsatGo extraction."
  },
  {
    id: "polskieradio",
    name: "PolskieRadio",
    color: "#1AB7EA",
    logoUrl: getLogo("polskieradio.com"),
    exampleUrl: "",
    description: "Support for PolskieRadio extraction."
  },
  {
    id: "popcorntimes",
    name: "Popcorntimes",
    color: "#FF5500",
    logoUrl: getLogo("popcorntimes.com"),
    exampleUrl: "",
    description: "Support for Popcorntimes extraction."
  },
  {
    id: "popcorntv",
    name: "PopcornTV",
    color: "#0062D2",
    logoUrl: getLogo("popcorntv.com"),
    exampleUrl: "",
    description: "Support for PopcornTV extraction."
  },
  {
    id: "pr0gramm",
    name: "Pr0gramm",
    color: "#BD081C",
    logoUrl: getLogo("pr0gramm.com"),
    exampleUrl: "",
    description: "Support for Pr0gramm extraction."
  },
  {
    id: "prankcast",
    name: "PrankCast",
    color: "#FF4500",
    logoUrl: getLogo("prankcast.com"),
    exampleUrl: "",
    description: "Support for PrankCast extraction."
  },
  {
    id: "prankcastpost",
    name: "PrankCastPost",
    color: "#0A66C2",
    logoUrl: getLogo("prankcastpost.com"),
    exampleUrl: "",
    description: "Support for PrankCastPost extraction."
  },
  {
    id: "premiershiprugby",
    name: "PremiershipRugby",
    color: "#1AB7EA",
    logoUrl: getLogo("premiershiprugby.com"),
    exampleUrl: "",
    description: "Support for PremiershipRugby extraction."
  },
  {
    id: "presstv",
    name: "PressTV",
    color: "#FF5500",
    logoUrl: getLogo("presstv.com"),
    exampleUrl: "",
    description: "Support for PressTV extraction."
  },
  {
    id: "prosiebensat1",
    name: "prosiebensat1",
    color: "#0062D2",
    logoUrl: getLogo("prosiebensat1.com"),
    exampleUrl: "",
    description: "ProSiebenSat.1 Digital"
  },
  {
    id: "prxaccount",
    name: "PRXAccount",
    color: "#00A1D6",
    logoUrl: getLogo("prxaccount.com"),
    exampleUrl: "",
    description: "Support for PRXAccount extraction."
  },
  {
    id: "prxseries",
    name: "PRXSeries",
    color: "#0085ff",
    logoUrl: getLogo("prxseries.com"),
    exampleUrl: "",
    description: "Support for PRXSeries extraction."
  },
  {
    id: "prxstory",
    name: "PRXStory",
    color: "#625DF5",
    logoUrl: getLogo("prxstory.com"),
    exampleUrl: "",
    description: "Support for PRXStory extraction."
  },
  {
    id: "puhutv",
    name: "puhutv",
    color: "#ED812B",
    logoUrl: getLogo("puhutv.com"),
    exampleUrl: "",
    description: "Support for puhutv extraction."
  },
  {
    id: "puls4",
    name: "Puls4",
    color: "#FDA238",
    logoUrl: getLogo("puls4.com"),
    exampleUrl: "",
    description: "Support for Puls4 extraction."
  },
  {
    id: "pyvideo",
    name: "Pyvideo",
    color: "#FF0000",
    logoUrl: getLogo("pyvideo.com"),
    exampleUrl: "",
    description: "Support for Pyvideo extraction."
  },
  {
    id: "qdance",
    name: "QDance",
    color: "#000000",
    logoUrl: getLogo("qdance.com"),
    exampleUrl: "",
    description: "[*qdance*](## \"netrc machine\")"
  },
  {
    id: "qingting",
    name: "QingTing",
    color: "#E1306C",
    logoUrl: getLogo("qingting.com"),
    exampleUrl: "",
    description: "Support for QingTing extraction."
  },
  {
    id: "qqmusic",
    name: "qqmusic",
    color: "#1877F2",
    logoUrl: getLogo("qqmusic.com"),
    exampleUrl: "",
    description: "QQ音乐"
  },
  {
    id: "quantumtv",
    name: "QuantumTV",
    color: "#1DA1F2",
    logoUrl: getLogo("quantumtv.com"),
    exampleUrl: "",
    description: "[*quantumtv*](## \"netrc machine\")"
  },
  {
    id: "quantumtvlive",
    name: "QuantumTVLive",
    color: "#9146FF",
    logoUrl: getLogo("quantumtvlive.com"),
    exampleUrl: "",
    description: "[*quantumtv*](## \"netrc machine\")"
  },
  {
    id: "quantumtvrecordings",
    name: "QuantumTVRecordings",
    color: "#BD081C",
    logoUrl: getLogo("quantumtvrecordings.com"),
    exampleUrl: "",
    description: "[*quantumtv*](## \"netrc machine\")"
  },
  {
    id: "radiko",
    name: "Radiko",
    color: "#FF4500",
    logoUrl: getLogo("radiko.com"),
    exampleUrl: "",
    description: "Support for Radiko extraction."
  },
  {
    id: "radikoradio",
    name: "RadikoRadio",
    color: "#0A66C2",
    logoUrl: getLogo("radikoradio.com"),
    exampleUrl: "",
    description: "Support for RadikoRadio extraction."
  },
  {
    id: "radio1be",
    name: "Radio1Be",
    color: "#1AB7EA",
    logoUrl: getLogo("radio1be.com"),
    exampleUrl: "",
    description: "Support for Radio1Be extraction."
  },
  {
    id: "radiocanada",
    name: "radiocanada",
    color: "#FF5500",
    logoUrl: getLogo("radiocanada.com"),
    exampleUrl: "",
    description: "Support for radiocanada extraction."
  },
  {
    id: "radiocomercial",
    name: "RadioComercial",
    color: "#0062D2",
    logoUrl: getLogo("radiocomercial.com"),
    exampleUrl: "",
    description: "Support for RadioComercial extraction."
  },
  {
    id: "radiocomercialplaylist",
    name: "RadioComercialPlaylist",
    color: "#00A1D6",
    logoUrl: getLogo("radiocomercialplaylist.com"),
    exampleUrl: "",
    description: "Support for RadioComercialPlaylist extraction."
  },
  {
    id: "radiofrance",
    name: "radiofrance",
    color: "#0085ff",
    logoUrl: getLogo("radiofrance.com"),
    exampleUrl: "",
    description: "Support for radiofrance extraction."
  },
  {
    id: "radiofrancelive",
    name: "RadioFranceLive",
    color: "#625DF5",
    logoUrl: getLogo("radiofrancelive.com"),
    exampleUrl: "",
    description: "Support for RadioFranceLive extraction."
  },
  {
    id: "radiofrancepodcast",
    name: "RadioFrancePodcast",
    color: "#ED812B",
    logoUrl: getLogo("radiofrancepodcast.com"),
    exampleUrl: "",
    description: "Support for RadioFrancePodcast extraction."
  },
  {
    id: "radiofranceprofile",
    name: "RadioFranceProfile",
    color: "#FDA238",
    logoUrl: getLogo("radiofranceprofile.com"),
    exampleUrl: "",
    description: "Support for RadioFranceProfile extraction."
  },
  {
    id: "radiofranceprogramschedule",
    name: "RadioFranceProgramSchedule",
    color: "#FF0000",
    logoUrl: getLogo("radiofranceprogramschedule.com"),
    exampleUrl: "",
    description: "Support for RadioFranceProgramSchedule extraction."
  },
  {
    id: "radiokapital",
    name: "radiokapital",
    color: "#000000",
    logoUrl: getLogo("radiokapital.com"),
    exampleUrl: "",
    description: "Support for radiokapital extraction."
  },
  {
    id: "radioradicale",
    name: "RadioRadicale",
    color: "#E1306C",
    logoUrl: getLogo("radioradicale.com"),
    exampleUrl: "",
    description: "Support for RadioRadicale extraction."
  },
  {
    id: "radiozetpodcast",
    name: "RadioZetPodcast",
    color: "#1877F2",
    logoUrl: getLogo("radiozetpodcast.com"),
    exampleUrl: "",
    description: "Support for RadioZetPodcast extraction."
  },
  {
    id: "radlive",
    name: "radlive",
    color: "#1DA1F2",
    logoUrl: getLogo("radlive.com"),
    exampleUrl: "",
    description: "Support for radlive extraction."
  },
  {
    id: "rai",
    name: "Rai",
    color: "#9146FF",
    logoUrl: getLogo("rai.com"),
    exampleUrl: "",
    description: "Support for Rai extraction."
  },
  {
    id: "raicultura",
    name: "RaiCultura",
    color: "#BD081C",
    logoUrl: getLogo("raicultura.com"),
    exampleUrl: "",
    description: "Support for RaiCultura extraction."
  },
  {
    id: "rainews",
    name: "RaiNews",
    color: "#FF4500",
    logoUrl: getLogo("rainews.com"),
    exampleUrl: "",
    description: "Support for RaiNews extraction."
  },
  {
    id: "raiplay",
    name: "RaiPlay",
    color: "#0A66C2",
    logoUrl: getLogo("raiplay.com"),
    exampleUrl: "",
    description: "Support for RaiPlay extraction."
  },
  {
    id: "raiplaylive",
    name: "RaiPlayLive",
    color: "#1AB7EA",
    logoUrl: getLogo("raiplaylive.com"),
    exampleUrl: "",
    description: "Support for RaiPlayLive extraction."
  },
  {
    id: "raiplayplaylist",
    name: "RaiPlayPlaylist",
    color: "#FF5500",
    logoUrl: getLogo("raiplayplaylist.com"),
    exampleUrl: "",
    description: "Support for RaiPlayPlaylist extraction."
  },
  {
    id: "raiplaysound",
    name: "RaiPlaySound",
    color: "#0062D2",
    logoUrl: getLogo("raiplaysound.com"),
    exampleUrl: "",
    description: "Support for RaiPlaySound extraction."
  },
  {
    id: "raiplaysoundlive",
    name: "RaiPlaySoundLive",
    color: "#00A1D6",
    logoUrl: getLogo("raiplaysoundlive.com"),
    exampleUrl: "",
    description: "Support for RaiPlaySoundLive extraction."
  },
  {
    id: "raiplaysoundplaylist",
    name: "RaiPlaySoundPlaylist",
    color: "#0085ff",
    logoUrl: getLogo("raiplaysoundplaylist.com"),
    exampleUrl: "",
    description: "Support for RaiPlaySoundPlaylist extraction."
  },
  {
    id: "raisudtirol",
    name: "RaiSudtirol",
    color: "#625DF5",
    logoUrl: getLogo("raisudtirol.com"),
    exampleUrl: "",
    description: "Support for RaiSudtirol extraction."
  },
  {
    id: "raywenderlich",
    name: "RayWenderlich",
    color: "#ED812B",
    logoUrl: getLogo("raywenderlich.com"),
    exampleUrl: "",
    description: "Support for RayWenderlich extraction."
  },
  {
    id: "raywenderlichcourse",
    name: "RayWenderlichCourse",
    color: "#FDA238",
    logoUrl: getLogo("raywenderlichcourse.com"),
    exampleUrl: "",
    description: "Support for RayWenderlichCourse extraction."
  },
  {
    id: "rbgtum",
    name: "RbgTum",
    color: "#FF0000",
    logoUrl: getLogo("rbgtum.com"),
    exampleUrl: "",
    description: "Support for RbgTum extraction."
  },
  {
    id: "rbgtumcourse",
    name: "RbgTumCourse",
    color: "#000000",
    logoUrl: getLogo("rbgtumcourse.com"),
    exampleUrl: "",
    description: "Support for RbgTumCourse extraction."
  },
  {
    id: "rbgtumnewcourse",
    name: "RbgTumNewCourse",
    color: "#E1306C",
    logoUrl: getLogo("rbgtumnewcourse.com"),
    exampleUrl: "",
    description: "Support for RbgTumNewCourse extraction."
  },
  {
    id: "rcs",
    name: "RCS",
    color: "#1877F2",
    logoUrl: getLogo("rcs.com"),
    exampleUrl: "",
    description: "Support for RCS extraction."
  },
  {
    id: "rcsembeds",
    name: "RCSEmbeds",
    color: "#1DA1F2",
    logoUrl: getLogo("rcsembeds.com"),
    exampleUrl: "",
    description: "Support for RCSEmbeds extraction."
  },
  {
    id: "rcsvarious",
    name: "RCSVarious",
    color: "#9146FF",
    logoUrl: getLogo("rcsvarious.com"),
    exampleUrl: "",
    description: "Support for RCSVarious extraction."
  },
  {
    id: "rctiplus",
    name: "RCTIPlus",
    color: "#BD081C",
    logoUrl: getLogo("rctiplus.com"),
    exampleUrl: "",
    description: "Support for RCTIPlus extraction."
  },
  {
    id: "rctiplusseries",
    name: "RCTIPlusSeries",
    color: "#FF4500",
    logoUrl: getLogo("rctiplusseries.com"),
    exampleUrl: "",
    description: "Support for RCTIPlusSeries extraction."
  },
  {
    id: "rctiplustv",
    name: "RCTIPlusTV",
    color: "#0A66C2",
    logoUrl: getLogo("rctiplustv.com"),
    exampleUrl: "",
    description: "Support for RCTIPlusTV extraction."
  },
  {
    id: "redbull",
    name: "RedBull",
    color: "#1AB7EA",
    logoUrl: getLogo("redbull.com"),
    exampleUrl: "",
    description: "Support for RedBull extraction."
  },
  {
    id: "redbullembed",
    name: "RedBullEmbed",
    color: "#FF5500",
    logoUrl: getLogo("redbullembed.com"),
    exampleUrl: "",
    description: "Support for RedBullEmbed extraction."
  },
  {
    id: "redbulltv",
    name: "RedBullTV",
    color: "#0062D2",
    logoUrl: getLogo("redbulltv.com"),
    exampleUrl: "",
    description: "Support for RedBullTV extraction."
  },
  {
    id: "redbulltvrrncontent",
    name: "RedBullTVRrnContent",
    color: "#00A1D6",
    logoUrl: getLogo("redbulltvrrncontent.com"),
    exampleUrl: "",
    description: "Support for RedBullTVRrnContent extraction."
  },
  {
    id: "redcdnlivx",
    name: "redcdnlivx",
    color: "#0085ff",
    logoUrl: getLogo("redcdnlivx.com"),
    exampleUrl: "",
    description: "Support for redcdnlivx extraction."
  },
  {
    id: "reddit",
    name: "Reddit",
    color: "#625DF5",
    logoUrl: getLogo("reddit.com"),
    exampleUrl: "",
    description: "[*reddit*](## \"netrc machine\")"
  },
  {
    id: "redgifs",
    name: "RedGifs",
    color: "#ED812B",
    logoUrl: getLogo("redgifs.com"),
    exampleUrl: "",
    description: "Support for RedGifs extraction."
  },
  {
    id: "redgifssearch",
    name: "RedGifsSearch",
    color: "#FDA238",
    logoUrl: getLogo("redgifssearch.com"),
    exampleUrl: "",
    description: "Redgifs search"
  },
  {
    id: "redgifsuser",
    name: "RedGifsUser",
    color: "#FF0000",
    logoUrl: getLogo("redgifsuser.com"),
    exampleUrl: "",
    description: "Redgifs user"
  },
  {
    id: "reverbnation",
    name: "ReverbNation",
    color: "#E1306C",
    logoUrl: getLogo("reverbnation.com"),
    exampleUrl: "",
    description: "Support for ReverbNation extraction."
  },
  {
    id: "rheinmaintv",
    name: "RheinMainTV",
    color: "#1877F2",
    logoUrl: getLogo("rheinmaintv.com"),
    exampleUrl: "",
    description: "Support for RheinMainTV extraction."
  },
  {
    id: "ridehome",
    name: "RideHome",
    color: "#1DA1F2",
    logoUrl: getLogo("ridehome.com"),
    exampleUrl: "",
    description: "Support for RideHome extraction."
  },
  {
    id: "rinsefm",
    name: "RinseFM",
    color: "#9146FF",
    logoUrl: getLogo("rinsefm.com"),
    exampleUrl: "",
    description: "Support for RinseFM extraction."
  },
  {
    id: "rinsefmartistplaylist",
    name: "RinseFMArtistPlaylist",
    color: "#BD081C",
    logoUrl: getLogo("rinsefmartistplaylist.com"),
    exampleUrl: "",
    description: "Support for RinseFMArtistPlaylist extraction."
  },
  {
    id: "rmcdecouverte",
    name: "RMCDecouverte",
    color: "#FF4500",
    logoUrl: getLogo("rmcdecouverte.com"),
    exampleUrl: "",
    description: "Support for RMCDecouverte extraction."
  },
  {
    id: "rokfin",
    name: "Rokfin",
    color: "#0A66C2",
    logoUrl: getLogo("rokfin.com"),
    exampleUrl: "",
    description: "[*rokfin*](## \"netrc machine\")"
  },
  {
    id: "roosterteeth",
    name: "RoosterTeeth",
    color: "#1AB7EA",
    logoUrl: getLogo("roosterteeth.com"),
    exampleUrl: "",
    description: "[*roosterteeth*](## \"netrc machine\")"
  },
  {
    id: "roosterteethseries",
    name: "RoosterTeethSeries",
    color: "#FF5500",
    logoUrl: getLogo("roosterteethseries.com"),
    exampleUrl: "",
    description: "[*roosterteeth*](## \"netrc machine\")"
  },
  {
    id: "rottentomatoes",
    name: "RottenTomatoes",
    color: "#0062D2",
    logoUrl: getLogo("rottentomatoes.com"),
    exampleUrl: "",
    description: "Support for RottenTomatoes extraction."
  },
  {
    id: "royalive",
    name: "RoyaLive",
    color: "#00A1D6",
    logoUrl: getLogo("royalive.com"),
    exampleUrl: "",
    description: "Support for RoyaLive extraction."
  },
  {
    id: "rozhlas",
    name: "Rozhlas",
    color: "#0085ff",
    logoUrl: getLogo("rozhlas.com"),
    exampleUrl: "",
    description: "Support for Rozhlas extraction."
  },
  {
    id: "rozhlasvltava",
    name: "RozhlasVltava",
    color: "#625DF5",
    logoUrl: getLogo("rozhlasvltava.com"),
    exampleUrl: "",
    description: "Support for RozhlasVltava extraction."
  },
  {
    id: "rtdocumentry",
    name: "RTDocumentry",
    color: "#ED812B",
    logoUrl: getLogo("rtdocumentry.com"),
    exampleUrl: "",
    description: "Support for RTDocumentry extraction."
  },
  {
    id: "rtdocumentryplaylist",
    name: "RTDocumentryPlaylist",
    color: "#FDA238",
    logoUrl: getLogo("rtdocumentryplaylist.com"),
    exampleUrl: "",
    description: "Support for RTDocumentryPlaylist extraction."
  },
  {
    id: "rte",
    name: "rte",
    color: "#FF0000",
    logoUrl: getLogo("rte.com"),
    exampleUrl: "",
    description: "Raidió Teilifís Éireann TV"
  },
  {
    id: "rtl_nl",
    name: "rtl.nl",
    color: "#000000",
    logoUrl: getLogo("rtl.nl"),
    exampleUrl: "",
    description: "rtl.nl and rtlxl.nl"
  },
  {
    id: "rtl2",
    name: "rtl2",
    color: "#E1306C",
    logoUrl: getLogo("rtl2.com"),
    exampleUrl: "",
    description: "Support for rtl2 extraction."
  },
  {
    id: "rtllulive",
    name: "RTLLuLive",
    color: "#1877F2",
    logoUrl: getLogo("rtllulive.com"),
    exampleUrl: "",
    description: "Support for RTLLuLive extraction."
  },
  {
    id: "rtlluradio",
    name: "RTLLuRadio",
    color: "#1DA1F2",
    logoUrl: getLogo("rtlluradio.com"),
    exampleUrl: "",
    description: "Support for RTLLuRadio extraction."
  },
  {
    id: "rtnews",
    name: "RTNews",
    color: "#9146FF",
    logoUrl: getLogo("rtnews.com"),
    exampleUrl: "",
    description: "Support for RTNews extraction."
  },
  {
    id: "rtp",
    name: "RTP",
    color: "#BD081C",
    logoUrl: getLogo("rtp.com"),
    exampleUrl: "",
    description: "Support for RTP extraction."
  },
  {
    id: "rtrfm",
    name: "RTRFM",
    color: "#FF4500",
    logoUrl: getLogo("rtrfm.com"),
    exampleUrl: "",
    description: "Support for RTRFM extraction."
  },
  {
    id: "rtvckaltura",
    name: "RTVCKaltura",
    color: "#0A66C2",
    logoUrl: getLogo("rtvckaltura.com"),
    exampleUrl: "",
    description: "Support for RTVCKaltura extraction."
  },
  {
    id: "rtvcplay",
    name: "RTVCPlay",
    color: "#1AB7EA",
    logoUrl: getLogo("rtvcplay.com"),
    exampleUrl: "",
    description: "Support for RTVCPlay extraction."
  },
  {
    id: "rtvcplayembed",
    name: "RTVCPlayEmbed",
    color: "#FF5500",
    logoUrl: getLogo("rtvcplayembed.com"),
    exampleUrl: "",
    description: "Support for RTVCPlayEmbed extraction."
  },
  {
    id: "rtvslo_si",
    name: "rtvslo.si",
    color: "#0062D2",
    logoUrl: getLogo("rtvslo.si.com"),
    exampleUrl: "",
    description: "Support for rtvslo.si extraction."
  },
  {
    id: "rudovideo",
    name: "RudoVideo",
    color: "#00A1D6",
    logoUrl: getLogo("rudovideo.com"),
    exampleUrl: "",
    description: "Support for RudoVideo extraction."
  },
  {
    id: "rule34video",
    name: "Rule34Video",
    color: "#0085ff",
    logoUrl: getLogo("rule34video.com"),
    exampleUrl: "",
    description: "Support for Rule34Video extraction."
  },
  {
    id: "rumble",
    name: "Rumble",
    color: "#625DF5",
    logoUrl: getLogo("rumble.com"),
    exampleUrl: "",
    description: "Support for Rumble extraction."
  },
  {
    id: "rumblechannel",
    name: "RumbleChannel",
    color: "#ED812B",
    logoUrl: getLogo("rumblechannel.com"),
    exampleUrl: "",
    description: "Support for RumbleChannel extraction."
  },
  {
    id: "rumbleembed",
    name: "RumbleEmbed",
    color: "#FDA238",
    logoUrl: getLogo("rumbleembed.com"),
    exampleUrl: "",
    description: "Support for RumbleEmbed extraction."
  },
  {
    id: "ruptly",
    name: "Ruptly",
    color: "#FF0000",
    logoUrl: getLogo("ruptly.com"),
    exampleUrl: "",
    description: "Support for Ruptly extraction."
  },
  {
    id: "rutube",
    name: "rutube",
    color: "#000000",
    logoUrl: getLogo("rutube.com"),
    exampleUrl: "",
    description: "Rutube videos"
  },
  {
    id: "ruv",
    name: "Ruv",
    color: "#E1306C",
    logoUrl: getLogo("ruv.com"),
    exampleUrl: "",
    description: "Support for Ruv extraction."
  },
  {
    id: "s4c",
    name: "S4C",
    color: "#1877F2",
    logoUrl: getLogo("s4c.com"),
    exampleUrl: "",
    description: "Support for S4C extraction."
  },
  {
    id: "s4cseries",
    name: "S4CSeries",
    color: "#1DA1F2",
    logoUrl: getLogo("s4cseries.com"),
    exampleUrl: "",
    description: "Support for S4CSeries extraction."
  },
  {
    id: "safari",
    name: "safari",
    color: "#9146FF",
    logoUrl: getLogo("safaribooksonline.com"),
    exampleUrl: "",
    description: "[*safari*](## \"netrc machine\") safaribooksonline.com online video"
  },
  {
    id: "saktv",
    name: "SAKTV",
    color: "#BD081C",
    logoUrl: getLogo("saktv.com"),
    exampleUrl: "",
    description: "[*saktv*](## \"netrc machine\")"
  },
  {
    id: "saktvlive",
    name: "SAKTVLive",
    color: "#FF4500",
    logoUrl: getLogo("saktvlive.com"),
    exampleUrl: "",
    description: "[*saktv*](## \"netrc machine\")"
  },
  {
    id: "saktvrecordings",
    name: "SAKTVRecordings",
    color: "#0A66C2",
    logoUrl: getLogo("saktvrecordings.com"),
    exampleUrl: "",
    description: "[*saktv*](## \"netrc machine\")"
  },
  {
    id: "salttv",
    name: "SaltTV",
    color: "#1AB7EA",
    logoUrl: getLogo("salttv.com"),
    exampleUrl: "",
    description: "[*salttv*](## \"netrc machine\")"
  },
  {
    id: "salttvlive",
    name: "SaltTVLive",
    color: "#FF5500",
    logoUrl: getLogo("salttvlive.com"),
    exampleUrl: "",
    description: "[*salttv*](## \"netrc machine\")"
  },
  {
    id: "salttvrecordings",
    name: "SaltTVRecordings",
    color: "#0062D2",
    logoUrl: getLogo("salttvrecordings.com"),
    exampleUrl: "",
    description: "[*salttv*](## \"netrc machine\")"
  },
  {
    id: "samplefocus",
    name: "SampleFocus",
    color: "#00A1D6",
    logoUrl: getLogo("samplefocus.com"),
    exampleUrl: "",
    description: "Support for SampleFocus extraction."
  },
  {
    id: "sangiin",
    name: "Sangiin",
    color: "#0085ff",
    logoUrl: getLogo("sangiin.com"),
    exampleUrl: "",
    description: "参議院インターネット審議中継 (archive)"
  },
  {
    id: "sapo",
    name: "Sapo",
    color: "#625DF5",
    logoUrl: getLogo("sapo.com"),
    exampleUrl: "",
    description: "SAPO Vídeos"
  },
  {
    id: "sauceplus",
    name: "SaucePlus",
    color: "#ED812B",
    logoUrl: getLogo("sauceplus.com"),
    exampleUrl: "",
    description: "Sauce+"
  },
  {
    id: "sbs",
    name: "SBS",
    color: "#FDA238",
    logoUrl: getLogo("sbs.com.au"),
    exampleUrl: "",
    description: "sbs.com.au"
  },
  {
    id: "sbs_co_kr",
    name: "sbs.co.kr",
    color: "#FF0000",
    logoUrl: getLogo("sbs.co.kr.com"),
    exampleUrl: "",
    description: "Support for sbs.co.kr extraction."
  },
  {
    id: "schooltv",
    name: "schooltv",
    color: "#000000",
    logoUrl: getLogo("schooltv.com"),
    exampleUrl: "",
    description: "Support for schooltv extraction."
  },
  {
    id: "sciencechannel",
    name: "ScienceChannel",
    color: "#E1306C",
    logoUrl: getLogo("sciencechannel.com"),
    exampleUrl: "",
    description: "Support for ScienceChannel extraction."
  },
  {
    id: "screen9",
    name: "Screen9",
    color: "#1877F2",
    logoUrl: getLogo("screen9.com"),
    exampleUrl: "",
    description: "Support for Screen9 extraction."
  },
  {
    id: "screencast",
    name: "Screencast",
    color: "#1DA1F2",
    logoUrl: getLogo("screencast.com"),
    exampleUrl: "",
    description: "Support for Screencast extraction."
  },
  {
    id: "screencastify",
    name: "Screencastify",
    color: "#9146FF",
    logoUrl: getLogo("screencastify.com"),
    exampleUrl: "",
    description: "Support for Screencastify extraction."
  },
  {
    id: "screencastomatic",
    name: "ScreencastOMatic",
    color: "#BD081C",
    logoUrl: getLogo("screencastomatic.com"),
    exampleUrl: "",
    description: "Support for ScreencastOMatic extraction."
  },
  {
    id: "screenrec",
    name: "ScreenRec",
    color: "#FF4500",
    logoUrl: getLogo("screenrec.com"),
    exampleUrl: "",
    description: "Support for ScreenRec extraction."
  },
  {
    id: "scrippsnetworks",
    name: "ScrippsNetworks",
    color: "#0A66C2",
    logoUrl: getLogo("scrippsnetworks.com"),
    exampleUrl: "",
    description: "Support for ScrippsNetworks extraction."
  },
  {
    id: "scrolller",
    name: "Scrolller",
    color: "#1AB7EA",
    logoUrl: getLogo("scrolller.com"),
    exampleUrl: "",
    description: "Support for Scrolller extraction."
  },
  {
    id: "sejm",
    name: "sejm",
    color: "#FF5500",
    logoUrl: getLogo("sejm.com"),
    exampleUrl: "",
    description: "Support for sejm extraction."
  },
  {
    id: "sen",
    name: "Sen",
    color: "#0062D2",
    logoUrl: getLogo("sen.com"),
    exampleUrl: "",
    description: "Support for Sen extraction."
  },
  {
    id: "senate_gov",
    name: "senate.gov",
    color: "#00A1D6",
    logoUrl: getLogo("senate.gov.com"),
    exampleUrl: "",
    description: "Support for senate.gov extraction."
  },
  {
    id: "servus",
    name: "Servus",
    color: "#0085ff",
    logoUrl: getLogo("servus.com"),
    exampleUrl: "",
    description: "Support for Servus extraction."
  },
  {
    id: "seznamzpravy",
    name: "SeznamZpravy",
    color: "#625DF5",
    logoUrl: getLogo("seznamzpravy.com"),
    exampleUrl: "",
    description: "Support for SeznamZpravy extraction."
  },
  {
    id: "seznamzpravyarticle",
    name: "SeznamZpravyArticle",
    color: "#ED812B",
    logoUrl: getLogo("seznamzpravyarticle.com"),
    exampleUrl: "",
    description: "Support for SeznamZpravyArticle extraction."
  },
  {
    id: "shahid",
    name: "Shahid",
    color: "#FDA238",
    logoUrl: getLogo("shahid.com"),
    exampleUrl: "",
    description: "[*shahid*](## \"netrc machine\")"
  },
  {
    id: "shahidshow",
    name: "ShahidShow",
    color: "#FF0000",
    logoUrl: getLogo("shahidshow.com"),
    exampleUrl: "",
    description: "Support for ShahidShow extraction."
  },
  {
    id: "sharepoint",
    name: "SharePoint",
    color: "#000000",
    logoUrl: getLogo("sharepoint.com"),
    exampleUrl: "",
    description: "Support for SharePoint extraction."
  },
  {
    id: "sharevideosembed",
    name: "ShareVideosEmbed",
    color: "#E1306C",
    logoUrl: getLogo("sharevideosembed.com"),
    exampleUrl: "",
    description: "Support for ShareVideosEmbed extraction."
  },
  {
    id: "shemaroome",
    name: "ShemarooMe",
    color: "#1877F2",
    logoUrl: getLogo("shemaroome.com"),
    exampleUrl: "",
    description: "Support for ShemarooMe extraction."
  },
  {
    id: "shiey",
    name: "Shiey",
    color: "#1DA1F2",
    logoUrl: getLogo("shiey.com"),
    exampleUrl: "",
    description: "Support for Shiey extraction."
  },
  {
    id: "showroomlive",
    name: "ShowRoomLive",
    color: "#9146FF",
    logoUrl: getLogo("showroomlive.com"),
    exampleUrl: "",
    description: "Support for ShowRoomLive extraction."
  },
  {
    id: "shugiinitvlive",
    name: "ShugiinItvLive",
    color: "#BD081C",
    logoUrl: getLogo("shugiinitvlive.com"),
    exampleUrl: "",
    description: "衆議院インターネット審議中継"
  },
  {
    id: "shugiinitvliveroom",
    name: "ShugiinItvLiveRoom",
    color: "#FF4500",
    logoUrl: getLogo("shugiinitvliveroom.com"),
    exampleUrl: "",
    description: "衆議院インターネット審議中継 (中継)"
  },
  {
    id: "shugiinitvvod",
    name: "ShugiinItvVod",
    color: "#0A66C2",
    logoUrl: getLogo("shugiinitvvod.com"),
    exampleUrl: "",
    description: "衆議院インターネット審議中継 (ビデオライブラリ)"
  },
  {
    id: "sibnetembed",
    name: "SibnetEmbed",
    color: "#1AB7EA",
    logoUrl: getLogo("sibnetembed.com"),
    exampleUrl: "",
    description: "Support for SibnetEmbed extraction."
  },
  {
    id: "simplecast",
    name: "simplecast",
    color: "#FF5500",
    logoUrl: getLogo("simplecast.com"),
    exampleUrl: "",
    description: "Support for simplecast extraction."
  },
  {
    id: "sina",
    name: "Sina",
    color: "#0062D2",
    logoUrl: getLogo("sina.com"),
    exampleUrl: "",
    description: "Support for Sina extraction."
  },
  {
    id: "skeb",
    name: "Skeb",
    color: "#00A1D6",
    logoUrl: getLogo("skeb.com"),
    exampleUrl: "",
    description: "Support for Skeb extraction."
  },
  {
    id: "sky_it",
    name: "sky.it",
    color: "#0085ff",
    logoUrl: getLogo("sky.it.com"),
    exampleUrl: "",
    description: "Support for sky.it extraction."
  },
  {
    id: "skynewsau",
    name: "SkyNewsAU",
    color: "#625DF5",
    logoUrl: getLogo("skynewsau.com"),
    exampleUrl: "",
    description: "Support for SkyNewsAU extraction."
  },
  {
    id: "slideshare",
    name: "Slideshare",
    color: "#ED812B",
    logoUrl: getLogo("slideshare.com"),
    exampleUrl: "",
    description: "Support for Slideshare extraction."
  },
  {
    id: "slideslive",
    name: "SlidesLive",
    color: "#FDA238",
    logoUrl: getLogo("slideslive.com"),
    exampleUrl: "",
    description: "Support for SlidesLive extraction."
  },
  {
    id: "slutload",
    name: "Slutload",
    color: "#FF0000",
    logoUrl: getLogo("slutload.com"),
    exampleUrl: "",
    description: "Support for Slutload extraction."
  },
  {
    id: "smotrim",
    name: "smotrim",
    color: "#000000",
    logoUrl: getLogo("smotrim.com"),
    exampleUrl: "",
    description: "Support for smotrim extraction."
  },
  {
    id: "snapchatspotlight",
    name: "SnapchatSpotlight",
    color: "#E1306C",
    logoUrl: getLogo("snapchatspotlight.com"),
    exampleUrl: "",
    description: "Support for SnapchatSpotlight extraction."
  },
  {
    id: "snotr",
    name: "Snotr",
    color: "#1877F2",
    logoUrl: getLogo("snotr.com"),
    exampleUrl: "",
    description: "Support for Snotr extraction."
  },
  {
    id: "softwhiteunderbelly",
    name: "SoftWhiteUnderbelly",
    color: "#1DA1F2",
    logoUrl: getLogo("softwhiteunderbelly.com"),
    exampleUrl: "",
    description: "[*softwhiteunderbelly*](## \"netrc machine\")"
  },
  {
    id: "sohu",
    name: "Sohu",
    color: "#9146FF",
    logoUrl: getLogo("sohu.com"),
    exampleUrl: "",
    description: "Support for Sohu extraction."
  },
  {
    id: "sohuv",
    name: "SohuV",
    color: "#BD081C",
    logoUrl: getLogo("sohuv.com"),
    exampleUrl: "",
    description: "Support for SohuV extraction."
  },
  {
    id: "sonyliv",
    name: "SonyLIV",
    color: "#FF4500",
    logoUrl: getLogo("sonyliv.com"),
    exampleUrl: "",
    description: "[*sonyliv*](## \"netrc machine\")"
  },
  {
    id: "sonylivseries",
    name: "SonyLIVSeries",
    color: "#0A66C2",
    logoUrl: getLogo("sonylivseries.com"),
    exampleUrl: "",
    description: "Support for SonyLIVSeries extraction."
  },
  {
    id: "soop",
    name: "soop",
    color: "#1AB7EA",
    logoUrl: getLogo("sooplive.co.kr"),
    exampleUrl: "",
    description: "[*afreecatv*](## \"netrc machine\") sooplive.co.kr"
  },
  {
    id: "soundcloud",
    name: "soundcloud",
    color: "#FF5500",
    logoUrl: getLogo("soundcloud.com"),
    exampleUrl: "",
    description: "[*soundcloud*](## \"netrc machine\")"
  },
  {
    id: "soundcloudembed",
    name: "SoundcloudEmbed",
    color: "#0062D2",
    logoUrl: getLogo("soundcloudembed.com"),
    exampleUrl: "",
    description: "Support for SoundcloudEmbed extraction."
  },
  {
    id: "soundgasm",
    name: "soundgasm",
    color: "#00A1D6",
    logoUrl: getLogo("soundgasm.com"),
    exampleUrl: "",
    description: "Support for soundgasm extraction."
  },
  {
    id: "southpark_cc_com",
    name: "southpark.cc.com",
    color: "#0085ff",
    logoUrl: getLogo("southpark.cc.com.com"),
    exampleUrl: "",
    description: "Support for southpark.cc.com extraction."
  },
  {
    id: "southpark_de",
    name: "southpark.de",
    color: "#625DF5",
    logoUrl: getLogo("southpark.de.com"),
    exampleUrl: "",
    description: "Support for southpark.de extraction."
  },
  {
    id: "southpark_lat",
    name: "southpark.lat",
    color: "#ED812B",
    logoUrl: getLogo("southpark.lat.com"),
    exampleUrl: "",
    description: "Support for southpark.lat extraction."
  },
  {
    id: "southparkstudios_co_uk",
    name: "southparkstudios.co.uk",
    color: "#FDA238",
    logoUrl: getLogo("southparkstudios.co.uk.com"),
    exampleUrl: "",
    description: "Support for southparkstudios.co.uk extraction."
  },
  {
    id: "southparkstudios_com_br",
    name: "southparkstudios.com.br",
    color: "#FF0000",
    logoUrl: getLogo("southparkstudios.com.br.com"),
    exampleUrl: "",
    description: "Support for southparkstudios.com.br extraction."
  },
  {
    id: "southparkstudios_nu",
    name: "southparkstudios.nu",
    color: "#000000",
    logoUrl: getLogo("southparkstudios.nu.com"),
    exampleUrl: "",
    description: "Support for southparkstudios.nu extraction."
  },
  {
    id: "sovietscloset",
    name: "SovietsCloset",
    color: "#E1306C",
    logoUrl: getLogo("sovietscloset.com"),
    exampleUrl: "",
    description: "Support for SovietsCloset extraction."
  },
  {
    id: "sovietsclosetplaylist",
    name: "SovietsClosetPlaylist",
    color: "#1877F2",
    logoUrl: getLogo("sovietsclosetplaylist.com"),
    exampleUrl: "",
    description: "Support for SovietsClosetPlaylist extraction."
  },
  {
    id: "spankbang",
    name: "SpankBang",
    color: "#1DA1F2",
    logoUrl: getLogo("spankbang.com"),
    exampleUrl: "",
    description: "Support for SpankBang extraction."
  },
  {
    id: "spankbangplaylist",
    name: "SpankBangPlaylist",
    color: "#9146FF",
    logoUrl: getLogo("spankbangplaylist.com"),
    exampleUrl: "",
    description: "Support for SpankBangPlaylist extraction."
  },
  {
    id: "spiegel",
    name: "Spiegel",
    color: "#BD081C",
    logoUrl: getLogo("spiegel.com"),
    exampleUrl: "",
    description: "Support for Spiegel extraction."
  },
  {
    id: "sport5",
    name: "Sport5",
    color: "#FF4500",
    logoUrl: getLogo("sport5.com"),
    exampleUrl: "",
    description: "Support for Sport5 extraction."
  },
  {
    id: "sporteurope",
    name: "sporteurope",
    color: "#0A66C2",
    logoUrl: getLogo("sporteurope.com"),
    exampleUrl: "",
    description: "Support for sporteurope extraction."
  },
  {
    id: "spreaker",
    name: "Spreaker",
    color: "#1AB7EA",
    logoUrl: getLogo("spreaker.com"),
    exampleUrl: "",
    description: "Support for Spreaker extraction."
  },
  {
    id: "spreakershow",
    name: "SpreakerShow",
    color: "#FF5500",
    logoUrl: getLogo("spreakershow.com"),
    exampleUrl: "",
    description: "Support for SpreakerShow extraction."
  },
  {
    id: "springboardplatform",
    name: "SpringboardPlatform",
    color: "#0062D2",
    logoUrl: getLogo("springboardplatform.com"),
    exampleUrl: "",
    description: "Support for SpringboardPlatform extraction."
  },
  {
    id: "sproutvideo",
    name: "SproutVideo",
    color: "#00A1D6",
    logoUrl: getLogo("sproutvideo.com"),
    exampleUrl: "",
    description: "Support for SproutVideo extraction."
  },
  {
    id: "srgssr",
    name: "SRGSSR",
    color: "#0085ff",
    logoUrl: getLogo("srgssr.com"),
    exampleUrl: "",
    description: "Support for SRGSSR extraction."
  },
  {
    id: "srgssrplay",
    name: "SRGSSRPlay",
    color: "#625DF5",
    logoUrl: getLogo("srf.ch"),
    exampleUrl: "",
    description: "srf.ch, rts.ch, rsi.ch, rtr.ch and swissinfo.ch play sites"
  },
  {
    id: "stacommulive",
    name: "StacommuLive",
    color: "#ED812B",
    logoUrl: getLogo("stacommulive.com"),
    exampleUrl: "",
    description: "[*stacommu*](## \"netrc machine\")"
  },
  {
    id: "stacommuvod",
    name: "StacommuVOD",
    color: "#FDA238",
    logoUrl: getLogo("stacommuvod.com"),
    exampleUrl: "",
    description: "[*stacommu*](## \"netrc machine\")"
  },
  {
    id: "stageplusvodconcert",
    name: "StagePlusVODConcert",
    color: "#FF0000",
    logoUrl: getLogo("stageplusvodconcert.com"),
    exampleUrl: "",
    description: "[*stageplus*](## \"netrc machine\")"
  },
  {
    id: "stanfordoc",
    name: "stanfordoc",
    color: "#000000",
    logoUrl: getLogo("stanfordoc.com"),
    exampleUrl: "",
    description: "Stanford Open ClassRoom"
  },
  {
    id: "startrek",
    name: "startrek",
    color: "#E1306C",
    logoUrl: getLogo("startrek.com"),
    exampleUrl: "",
    description: "STAR TREK"
  },
  {
    id: "startv",
    name: "startv",
    color: "#1877F2",
    logoUrl: getLogo("startv.com"),
    exampleUrl: "",
    description: "Support for startv extraction."
  },
  {
    id: "steam",
    name: "Steam",
    color: "#1DA1F2",
    logoUrl: getLogo("steam.com"),
    exampleUrl: "",
    description: "Support for Steam extraction."
  },
  {
    id: "steamcommunity",
    name: "SteamCommunity",
    color: "#9146FF",
    logoUrl: getLogo("steamcommunity.com"),
    exampleUrl: "",
    description: "Support for SteamCommunity extraction."
  },
  {
    id: "steamcommunitybroadcast",
    name: "SteamCommunityBroadcast",
    color: "#BD081C",
    logoUrl: getLogo("steamcommunitybroadcast.com"),
    exampleUrl: "",
    description: "Support for SteamCommunityBroadcast extraction."
  },
  {
    id: "stitcher",
    name: "Stitcher",
    color: "#FF4500",
    logoUrl: getLogo("stitcher.com"),
    exampleUrl: "",
    description: "Support for Stitcher extraction."
  },
  {
    id: "stitchershow",
    name: "StitcherShow",
    color: "#0A66C2",
    logoUrl: getLogo("stitchershow.com"),
    exampleUrl: "",
    description: "Support for StitcherShow extraction."
  },
  {
    id: "storyfire",
    name: "StoryFire",
    color: "#1AB7EA",
    logoUrl: getLogo("storyfire.com"),
    exampleUrl: "",
    description: "Support for StoryFire extraction."
  },
  {
    id: "storyfireseries",
    name: "StoryFireSeries",
    color: "#FF5500",
    logoUrl: getLogo("storyfireseries.com"),
    exampleUrl: "",
    description: "Support for StoryFireSeries extraction."
  },
  {
    id: "storyfireuser",
    name: "StoryFireUser",
    color: "#0062D2",
    logoUrl: getLogo("storyfireuser.com"),
    exampleUrl: "",
    description: "Support for StoryFireUser extraction."
  },
  {
    id: "streaks",
    name: "Streaks",
    color: "#00A1D6",
    logoUrl: getLogo("streaks.com"),
    exampleUrl: "",
    description: "Support for Streaks extraction."
  },
  {
    id: "streamable",
    name: "Streamable",
    color: "#0085ff",
    logoUrl: getLogo("streamable.com"),
    exampleUrl: "",
    description: "Support for Streamable extraction."
  },
  {
    id: "streamcz",
    name: "StreamCZ",
    color: "#625DF5",
    logoUrl: getLogo("streamcz.com"),
    exampleUrl: "",
    description: "Support for StreamCZ extraction."
  },
  {
    id: "streetvoice",
    name: "StreetVoice",
    color: "#ED812B",
    logoUrl: getLogo("streetvoice.com"),
    exampleUrl: "",
    description: "Support for StreetVoice extraction."
  },
  {
    id: "stretchinternet",
    name: "StretchInternet",
    color: "#FDA238",
    logoUrl: getLogo("stretchinternet.com"),
    exampleUrl: "",
    description: "Support for StretchInternet extraction."
  },
  {
    id: "stripchat",
    name: "Stripchat",
    color: "#FF0000",
    logoUrl: getLogo("stripchat.com"),
    exampleUrl: "",
    description: "Support for Stripchat extraction."
  },
  {
    id: "stvr",
    name: "stvr",
    color: "#000000",
    logoUrl: getLogo("stvr.com"),
    exampleUrl: "",
    description: "Slovak Television and Radio (formerly RTVS)"
  },
  {
    id: "subsplash",
    name: "Subsplash",
    color: "#E1306C",
    logoUrl: getLogo("subsplash.com"),
    exampleUrl: "",
    description: "Support for Subsplash extraction."
  },
  {
    id: "substack",
    name: "Substack",
    color: "#1877F2",
    logoUrl: getLogo("substack.com"),
    exampleUrl: "",
    description: "Support for Substack extraction."
  },
  {
    id: "swearnetepisode",
    name: "SwearnetEpisode",
    color: "#9146FF",
    logoUrl: getLogo("swearnetepisode.com"),
    exampleUrl: "",
    description: "Support for SwearnetEpisode extraction."
  },
  {
    id: "syfy",
    name: "Syfy",
    color: "#BD081C",
    logoUrl: getLogo("syfy.com"),
    exampleUrl: "",
    description: "Support for Syfy extraction."
  },
  {
    id: "syvdk",
    name: "SYVDK",
    color: "#FF4500",
    logoUrl: getLogo("syvdk.com"),
    exampleUrl: "",
    description: "Support for SYVDK extraction."
  },
  {
    id: "sztvhu",
    name: "SztvHu",
    color: "#0A66C2",
    logoUrl: getLogo("sztvhu.com"),
    exampleUrl: "",
    description: "Support for SztvHu extraction."
  },
  {
    id: "taptapapp",
    name: "TapTapApp",
    color: "#1AB7EA",
    logoUrl: getLogo("taptapapp.com"),
    exampleUrl: "",
    description: "Support for TapTapApp extraction."
  },
  {
    id: "taptapappintl",
    name: "TapTapAppIntl",
    color: "#FF5500",
    logoUrl: getLogo("taptapappintl.com"),
    exampleUrl: "",
    description: "Support for TapTapAppIntl extraction."
  },
  {
    id: "taptapmoment",
    name: "TapTapMoment",
    color: "#0062D2",
    logoUrl: getLogo("taptapmoment.com"),
    exampleUrl: "",
    description: "Support for TapTapMoment extraction."
  },
  {
    id: "taptappostintl",
    name: "TapTapPostIntl",
    color: "#00A1D6",
    logoUrl: getLogo("taptappostintl.com"),
    exampleUrl: "",
    description: "Support for TapTapPostIntl extraction."
  },
  {
    id: "tbs",
    name: "TBS",
    color: "#0085ff",
    logoUrl: getLogo("tbs.com"),
    exampleUrl: "",
    description: "Support for TBS extraction."
  },
  {
    id: "tbsjpepisode",
    name: "TBSJPEpisode",
    color: "#625DF5",
    logoUrl: getLogo("tbsjpepisode.com"),
    exampleUrl: "",
    description: "Support for TBSJPEpisode extraction."
  },
  {
    id: "tbsjpplaylist",
    name: "TBSJPPlaylist",
    color: "#ED812B",
    logoUrl: getLogo("tbsjpplaylist.com"),
    exampleUrl: "",
    description: "Support for TBSJPPlaylist extraction."
  },
  {
    id: "tbsjpprogram",
    name: "TBSJPProgram",
    color: "#FDA238",
    logoUrl: getLogo("tbsjpprogram.com"),
    exampleUrl: "",
    description: "Support for TBSJPProgram extraction."
  },
  {
    id: "teachablecourse",
    name: "TeachableCourse",
    color: "#FF0000",
    logoUrl: getLogo("teachablecourse.com"),
    exampleUrl: "",
    description: "[*teachable*](## \"netrc machine\")"
  },
  {
    id: "teamcoco",
    name: "Teamcoco",
    color: "#000000",
    logoUrl: getLogo("teamcoco.com"),
    exampleUrl: "",
    description: "Support for Teamcoco extraction."
  },
  {
    id: "teamtreehouse",
    name: "TeamTreeHouse",
    color: "#E1306C",
    logoUrl: getLogo("teamtreehouse.com"),
    exampleUrl: "",
    description: "[*teamtreehouse*](## \"netrc machine\")"
  },
  {
    id: "techtv_mit_edu",
    name: "techtv.mit.edu",
    color: "#1877F2",
    logoUrl: getLogo("techtv.mit.edu.com"),
    exampleUrl: "",
    description: "Support for techtv.mit.edu extraction."
  },
  {
    id: "tedembed",
    name: "TedEmbed",
    color: "#1DA1F2",
    logoUrl: getLogo("tedembed.com"),
    exampleUrl: "",
    description: "Support for TedEmbed extraction."
  },
  {
    id: "tedplaylist",
    name: "TedPlaylist",
    color: "#9146FF",
    logoUrl: getLogo("tedplaylist.com"),
    exampleUrl: "",
    description: "Support for TedPlaylist extraction."
  },
  {
    id: "tedseries",
    name: "TedSeries",
    color: "#BD081C",
    logoUrl: getLogo("tedseries.com"),
    exampleUrl: "",
    description: "Support for TedSeries extraction."
  },
  {
    id: "tedtalk",
    name: "TedTalk",
    color: "#FF4500",
    logoUrl: getLogo("tedtalk.com"),
    exampleUrl: "",
    description: "Support for TedTalk extraction."
  },
  {
    id: "tele13",
    name: "Tele13",
    color: "#0A66C2",
    logoUrl: getLogo("tele13.com"),
    exampleUrl: "",
    description: "Support for Tele13 extraction."
  },
  {
    id: "tele5",
    name: "Tele5",
    color: "#1AB7EA",
    logoUrl: getLogo("tele5.com"),
    exampleUrl: "",
    description: "Support for Tele5 extraction."
  },
  {
    id: "telebruxelles",
    name: "TeleBruxelles",
    color: "#FF5500",
    logoUrl: getLogo("telebruxelles.com"),
    exampleUrl: "",
    description: "Support for TeleBruxelles extraction."
  },
  {
    id: "telecaribeplay",
    name: "TelecaribePlay",
    color: "#0062D2",
    logoUrl: getLogo("telecaribeplay.com"),
    exampleUrl: "",
    description: "Support for TelecaribePlay extraction."
  },
  {
    id: "telecinco",
    name: "Telecinco",
    color: "#00A1D6",
    logoUrl: getLogo("telecinco.es"),
    exampleUrl: "",
    description: "telecinco.es, cuatro.com and mediaset.es"
  },
  {
    id: "telegraaf",
    name: "Telegraaf",
    color: "#0085ff",
    logoUrl: getLogo("telegraaf.com"),
    exampleUrl: "",
    description: "Support for Telegraaf extraction."
  },
  {
    id: "telequebec",
    name: "TeleQuebec",
    color: "#625DF5",
    logoUrl: getLogo("telequebec.com"),
    exampleUrl: "",
    description: "Support for TeleQuebec extraction."
  },
  {
    id: "telequebecemission",
    name: "TeleQuebecEmission",
    color: "#ED812B",
    logoUrl: getLogo("telequebecemission.com"),
    exampleUrl: "",
    description: "Support for TeleQuebecEmission extraction."
  },
  {
    id: "telequebeclive",
    name: "TeleQuebecLive",
    color: "#FDA238",
    logoUrl: getLogo("telequebeclive.com"),
    exampleUrl: "",
    description: "Support for TeleQuebecLive extraction."
  },
  {
    id: "telequebecsquat",
    name: "TeleQuebecSquat",
    color: "#FF0000",
    logoUrl: getLogo("telequebecsquat.com"),
    exampleUrl: "",
    description: "Support for TeleQuebecSquat extraction."
  },
  {
    id: "telequebecvideo",
    name: "TeleQuebecVideo",
    color: "#000000",
    logoUrl: getLogo("telequebecvideo.com"),
    exampleUrl: "",
    description: "Support for TeleQuebecVideo extraction."
  },
  {
    id: "tempo",
    name: "Tempo",
    color: "#E1306C",
    logoUrl: getLogo("tempo.com"),
    exampleUrl: "",
    description: "Support for Tempo extraction."
  },
  {
    id: "tennistv",
    name: "TennisTV",
    color: "#1877F2",
    logoUrl: getLogo("tennistv.com"),
    exampleUrl: "",
    description: "[*tennistv*](## \"netrc machine\")"
  },
  {
    id: "tf1",
    name: "TF1",
    color: "#1DA1F2",
    logoUrl: getLogo("tf1.com"),
    exampleUrl: "",
    description: "Support for TF1 extraction."
  },
  {
    id: "thechosen",
    name: "TheChosen",
    color: "#9146FF",
    logoUrl: getLogo("thechosen.com"),
    exampleUrl: "",
    description: "Support for TheChosen extraction."
  },
  {
    id: "thechosengroup",
    name: "TheChosenGroup",
    color: "#BD081C",
    logoUrl: getLogo("thechosengroup.com"),
    exampleUrl: "",
    description: "Support for TheChosenGroup extraction."
  },
  {
    id: "theguardianpodcast",
    name: "TheGuardianPodcast",
    color: "#FF4500",
    logoUrl: getLogo("theguardianpodcast.com"),
    exampleUrl: "",
    description: "Support for TheGuardianPodcast extraction."
  },
  {
    id: "theguardianpodcastplaylist",
    name: "TheGuardianPodcastPlaylist",
    color: "#0A66C2",
    logoUrl: getLogo("theguardianpodcastplaylist.com"),
    exampleUrl: "",
    description: "Support for TheGuardianPodcastPlaylist extraction."
  },
  {
    id: "thehighwire",
    name: "TheHighWire",
    color: "#1AB7EA",
    logoUrl: getLogo("thehighwire.com"),
    exampleUrl: "",
    description: "Support for TheHighWire extraction."
  },
  {
    id: "theholetv",
    name: "TheHoleTv",
    color: "#FF5500",
    logoUrl: getLogo("theholetv.com"),
    exampleUrl: "",
    description: "Support for TheHoleTv extraction."
  },
  {
    id: "theintercept",
    name: "TheIntercept",
    color: "#0062D2",
    logoUrl: getLogo("theintercept.com"),
    exampleUrl: "",
    description: "Support for TheIntercept extraction."
  },
  {
    id: "theplatform",
    name: "ThePlatform",
    color: "#00A1D6",
    logoUrl: getLogo("theplatform.com"),
    exampleUrl: "",
    description: "Support for ThePlatform extraction."
  },
  {
    id: "theplatformfeed",
    name: "ThePlatformFeed",
    color: "#0085ff",
    logoUrl: getLogo("theplatformfeed.com"),
    exampleUrl: "",
    description: "Support for ThePlatformFeed extraction."
  },
  {
    id: "thestar",
    name: "TheStar",
    color: "#625DF5",
    logoUrl: getLogo("thestar.com"),
    exampleUrl: "",
    description: "Support for TheStar extraction."
  },
  {
    id: "thesun",
    name: "TheSun",
    color: "#ED812B",
    logoUrl: getLogo("thesun.com"),
    exampleUrl: "",
    description: "Support for TheSun extraction."
  },
  {
    id: "theweatherchannel",
    name: "TheWeatherChannel",
    color: "#FDA238",
    logoUrl: getLogo("theweatherchannel.com"),
    exampleUrl: "",
    description: "Support for TheWeatherChannel extraction."
  },
  {
    id: "thisamericanlife",
    name: "ThisAmericanLife",
    color: "#FF0000",
    logoUrl: getLogo("thisamericanlife.com"),
    exampleUrl: "",
    description: "Support for ThisAmericanLife extraction."
  },
  {
    id: "thisoldhouse",
    name: "ThisOldHouse",
    color: "#000000",
    logoUrl: getLogo("thisoldhouse.com"),
    exampleUrl: "",
    description: "[*thisoldhouse*](## \"netrc machine\")"
  },
  {
    id: "thisvid",
    name: "ThisVid",
    color: "#E1306C",
    logoUrl: getLogo("thisvid.com"),
    exampleUrl: "",
    description: "Support for ThisVid extraction."
  },
  {
    id: "thisvidmember",
    name: "ThisVidMember",
    color: "#1877F2",
    logoUrl: getLogo("thisvidmember.com"),
    exampleUrl: "",
    description: "Support for ThisVidMember extraction."
  },
  {
    id: "thisvidplaylist",
    name: "ThisVidPlaylist",
    color: "#1DA1F2",
    logoUrl: getLogo("thisvidplaylist.com"),
    exampleUrl: "",
    description: "Support for ThisVidPlaylist extraction."
  },
  {
    id: "threespeak",
    name: "ThreeSpeak",
    color: "#9146FF",
    logoUrl: getLogo("threespeak.com"),
    exampleUrl: "",
    description: "Support for ThreeSpeak extraction."
  },
  {
    id: "threespeakuser",
    name: "ThreeSpeakUser",
    color: "#BD081C",
    logoUrl: getLogo("threespeakuser.com"),
    exampleUrl: "",
    description: "Support for ThreeSpeakUser extraction."
  },
  {
    id: "tiktok",
    name: "TikTok",
    color: "#FF4500",
    logoUrl: getLogo("tiktok.com"),
    exampleUrl: "",
    description: "Support for TikTok extraction."
  },
  {
    id: "tlc",
    name: "TLC",
    color: "#0A66C2",
    logoUrl: getLogo("tlc.com"),
    exampleUrl: "",
    description: "Support for TLC extraction."
  },
  {
    id: "tmz",
    name: "TMZ",
    color: "#1AB7EA",
    logoUrl: getLogo("tmz.com"),
    exampleUrl: "",
    description: "Support for TMZ extraction."
  },
  {
    id: "tnaflix",
    name: "TNAFlix",
    color: "#FF5500",
    logoUrl: getLogo("tnaflix.com"),
    exampleUrl: "",
    description: "Support for TNAFlix extraction."
  },
  {
    id: "tnaflixnetworkembed",
    name: "TNAFlixNetworkEmbed",
    color: "#0062D2",
    logoUrl: getLogo("tnaflixnetworkembed.com"),
    exampleUrl: "",
    description: "Support for TNAFlixNetworkEmbed extraction."
  },
  {
    id: "toggle",
    name: "toggle",
    color: "#00A1D6",
    logoUrl: getLogo("toggle.com"),
    exampleUrl: "",
    description: "Support for toggle extraction."
  },
  {
    id: "toggo",
    name: "toggo",
    color: "#0085ff",
    logoUrl: getLogo("toggo.com"),
    exampleUrl: "",
    description: "Support for toggo extraction."
  },
  {
    id: "toongoggles",
    name: "ToonGoggles",
    color: "#625DF5",
    logoUrl: getLogo("toongoggles.com"),
    exampleUrl: "",
    description: "Support for ToonGoggles extraction."
  },
  {
    id: "tou_tv",
    name: "tou.tv",
    color: "#ED812B",
    logoUrl: getLogo("tou.tv.com"),
    exampleUrl: "",
    description: "[*toutv*](## \"netrc machine\")"
  },
  {
    id: "toutiao",
    name: "toutiao",
    color: "#FDA238",
    logoUrl: getLogo("toutiao.com"),
    exampleUrl: "",
    description: "今日头条"
  },
  {
    id: "travelchannel",
    name: "TravelChannel",
    color: "#FF0000",
    logoUrl: getLogo("travelchannel.com"),
    exampleUrl: "",
    description: "Support for TravelChannel extraction."
  },
  {
    id: "triller",
    name: "Triller",
    color: "#000000",
    logoUrl: getLogo("triller.com"),
    exampleUrl: "",
    description: "[*triller*](## \"netrc machine\")"
  },
  {
    id: "trillershort",
    name: "TrillerShort",
    color: "#E1306C",
    logoUrl: getLogo("trillershort.com"),
    exampleUrl: "",
    description: "Support for TrillerShort extraction."
  },
  {
    id: "trilleruser",
    name: "TrillerUser",
    color: "#1877F2",
    logoUrl: getLogo("trilleruser.com"),
    exampleUrl: "",
    description: "[*triller*](## \"netrc machine\")"
  },
  {
    id: "trovo",
    name: "Trovo",
    color: "#1DA1F2",
    logoUrl: getLogo("trovo.com"),
    exampleUrl: "",
    description: "Support for Trovo extraction."
  },
  {
    id: "trovochannelclip",
    name: "TrovoChannelClip",
    color: "#9146FF",
    logoUrl: getLogo("trovo.live"),
    exampleUrl: "",
    description: "All Clips of a trovo.live channel; \"trovoclip:\" prefix"
  },
  {
    id: "trovochannelvod",
    name: "TrovoChannelVod",
    color: "#BD081C",
    logoUrl: getLogo("trovo.live"),
    exampleUrl: "",
    description: "All VODs of a trovo.live channel; \"trovovod:\" prefix"
  },
  {
    id: "trovovod",
    name: "TrovoVod",
    color: "#FF4500",
    logoUrl: getLogo("trovovod.com"),
    exampleUrl: "",
    description: "Support for TrovoVod extraction."
  },
  {
    id: "trtcocukvideo",
    name: "TrtCocukVideo",
    color: "#0A66C2",
    logoUrl: getLogo("trtcocukvideo.com"),
    exampleUrl: "",
    description: "Support for TrtCocukVideo extraction."
  },
  {
    id: "trtworld",
    name: "TrtWorld",
    color: "#1AB7EA",
    logoUrl: getLogo("trtworld.com"),
    exampleUrl: "",
    description: "Support for TrtWorld extraction."
  },
  {
    id: "trueid",
    name: "TrueID",
    color: "#FF5500",
    logoUrl: getLogo("trueid.com"),
    exampleUrl: "",
    description: "Support for TrueID extraction."
  },
  {
    id: "trunews",
    name: "TruNews",
    color: "#0062D2",
    logoUrl: getLogo("trunews.com"),
    exampleUrl: "",
    description: "Support for TruNews extraction."
  },
  {
    id: "truth",
    name: "Truth",
    color: "#00A1D6",
    logoUrl: getLogo("truth.com"),
    exampleUrl: "",
    description: "Support for Truth extraction."
  },
  {
    id: "ttinglive",
    name: "ttinglive",
    color: "#0085ff",
    logoUrl: getLogo("ttinglive.com"),
    exampleUrl: "",
    description: "띵라이브 (formerly FlexTV)"
  },
  {
    id: "tubetugraz",
    name: "TubeTuGraz",
    color: "#625DF5",
    logoUrl: getLogo("tube.tugraz.at"),
    exampleUrl: "",
    description: "[*tubetugraz*](## \"netrc machine\") tube.tugraz.at"
  },
  {
    id: "tubetugrazseries",
    name: "TubeTuGrazSeries",
    color: "#ED812B",
    logoUrl: getLogo("tubetugrazseries.com"),
    exampleUrl: "",
    description: "[*tubetugraz*](## \"netrc machine\")"
  },
  {
    id: "tubitv",
    name: "tubitv",
    color: "#FDA238",
    logoUrl: getLogo("tubitv.com"),
    exampleUrl: "",
    description: "[*tubitv*](## \"netrc machine\")"
  },
  {
    id: "tumblr",
    name: "Tumblr",
    color: "#FF0000",
    logoUrl: getLogo("tumblr.com"),
    exampleUrl: "",
    description: "[*tumblr*](## \"netrc machine\")"
  },
  {
    id: "tv_dfb_de",
    name: "tv.dfb.de",
    color: "#000000",
    logoUrl: getLogo("tv.dfb.de.com"),
    exampleUrl: "",
    description: "Support for tv.dfb.de extraction."
  },
  {
    id: "tv2",
    name: "TV2",
    color: "#E1306C",
    logoUrl: getLogo("tv2.com"),
    exampleUrl: "",
    description: "Support for TV2 extraction."
  },
  {
    id: "tv2article",
    name: "TV2Article",
    color: "#1877F2",
    logoUrl: getLogo("tv2article.com"),
    exampleUrl: "",
    description: "Support for TV2Article extraction."
  },
  {
    id: "tv2dk",
    name: "TV2DK",
    color: "#1DA1F2",
    logoUrl: getLogo("tv2dk.com"),
    exampleUrl: "",
    description: "Support for TV2DK extraction."
  },
  {
    id: "tv2dkbornholmplay",
    name: "TV2DKBornholmPlay",
    color: "#9146FF",
    logoUrl: getLogo("tv2dkbornholmplay.com"),
    exampleUrl: "",
    description: "Support for TV2DKBornholmPlay extraction."
  },
  {
    id: "tv2play_hu",
    name: "tv2play.hu",
    color: "#BD081C",
    logoUrl: getLogo("tv2play.hu.com"),
    exampleUrl: "",
    description: "Support for tv2play.hu extraction."
  },
  {
    id: "tv2playseries_hu",
    name: "tv2playseries.hu",
    color: "#FF4500",
    logoUrl: getLogo("tv2playseries.hu.com"),
    exampleUrl: "",
    description: "Support for tv2playseries.hu extraction."
  },
  {
    id: "tv4",
    name: "TV4",
    color: "#0A66C2",
    logoUrl: getLogo("tv4.se"),
    exampleUrl: "",
    description: "tv4.se and tv4play.se"
  },
  {
    id: "tv5monde",
    name: "TV5MONDE",
    color: "#1AB7EA",
    logoUrl: getLogo("tv5monde.com"),
    exampleUrl: "",
    description: "Support for TV5MONDE extraction."
  },
  {
    id: "tv5unis",
    name: "tv5unis",
    color: "#FF5500",
    logoUrl: getLogo("tv5unis.com"),
    exampleUrl: "",
    description: "Support for tv5unis extraction."
  },
  {
    id: "tv8_it",
    name: "tv8.it",
    color: "#0062D2",
    logoUrl: getLogo("tv8.it.com"),
    exampleUrl: "",
    description: "Support for tv8.it extraction."
  },
  {
    id: "tvanouvelles",
    name: "TVANouvelles",
    color: "#00A1D6",
    logoUrl: getLogo("tvanouvelles.com"),
    exampleUrl: "",
    description: "Support for TVANouvelles extraction."
  },
  {
    id: "tvanouvellesarticle",
    name: "TVANouvellesArticle",
    color: "#0085ff",
    logoUrl: getLogo("tvanouvellesarticle.com"),
    exampleUrl: "",
    description: "Support for TVANouvellesArticle extraction."
  },
  {
    id: "tvaplus",
    name: "tvaplus",
    color: "#625DF5",
    logoUrl: getLogo("tvaplus.com"),
    exampleUrl: "",
    description: "TVA+"
  },
  {
    id: "tvc",
    name: "TVC",
    color: "#ED812B",
    logoUrl: getLogo("tvc.com"),
    exampleUrl: "",
    description: "Support for TVC extraction."
  },
  {
    id: "tvcarticle",
    name: "TVCArticle",
    color: "#FDA238",
    logoUrl: getLogo("tvcarticle.com"),
    exampleUrl: "",
    description: "Support for TVCArticle extraction."
  },
  {
    id: "tver",
    name: "TVer",
    color: "#FF0000",
    logoUrl: getLogo("tver.com"),
    exampleUrl: "",
    description: "Support for TVer extraction."
  },
  {
    id: "tvigle",
    name: "tvigle",
    color: "#000000",
    logoUrl: getLogo("Tvigle.ru"),
    exampleUrl: "",
    description: "Интернет-телевидение Tvigle.ru"
  },
  {
    id: "tviplayer",
    name: "TVIPlayer",
    color: "#E1306C",
    logoUrl: getLogo("tviplayer.com"),
    exampleUrl: "",
    description: "Support for TVIPlayer extraction."
  },
  {
    id: "tvnoe",
    name: "tvnoe",
    color: "#1877F2",
    logoUrl: getLogo("tvnoe.com"),
    exampleUrl: "",
    description: "Televize Noe"
  },
  {
    id: "tvp",
    name: "tvp",
    color: "#1DA1F2",
    logoUrl: getLogo("tvp.com"),
    exampleUrl: "",
    description: "Telewizja Polska"
  },
  {
    id: "tvplayer",
    name: "TVPlayer",
    color: "#9146FF",
    logoUrl: getLogo("tvplayer.com"),
    exampleUrl: "",
    description: "Support for TVPlayer extraction."
  },
  {
    id: "tvplayhome",
    name: "TVPlayHome",
    color: "#BD081C",
    logoUrl: getLogo("tvplayhome.com"),
    exampleUrl: "",
    description: "Support for TVPlayHome extraction."
  },
  {
    id: "tvw",
    name: "tvw",
    color: "#FF4500",
    logoUrl: getLogo("tvw.com"),
    exampleUrl: "",
    description: "Support for tvw extraction."
  },
  {
    id: "tweakers",
    name: "Tweakers",
    color: "#0A66C2",
    logoUrl: getLogo("tweakers.com"),
    exampleUrl: "",
    description: "Support for Tweakers extraction."
  },
  {
    id: "twitcasting",
    name: "TwitCasting",
    color: "#1AB7EA",
    logoUrl: getLogo("twitcasting.com"),
    exampleUrl: "",
    description: "Support for TwitCasting extraction."
  },
  {
    id: "twitcastinglive",
    name: "TwitCastingLive",
    color: "#FF5500",
    logoUrl: getLogo("twitcastinglive.com"),
    exampleUrl: "",
    description: "Support for TwitCastingLive extraction."
  },
  {
    id: "twitcastinguser",
    name: "TwitCastingUser",
    color: "#0062D2",
    logoUrl: getLogo("twitcastinguser.com"),
    exampleUrl: "",
    description: "Support for TwitCastingUser extraction."
  },
  {
    id: "twitter",
    name: "twitter",
    color: "#00A1D6",
    logoUrl: getLogo("twitter.com"),
    exampleUrl: "",
    description: "Support for twitter extraction."
  },
  {
    id: "udemy",
    name: "udemy",
    color: "#625DF5",
    logoUrl: getLogo("udemy.com"),
    exampleUrl: "",
    description: "[*udemy*](## \"netrc machine\")"
  },
  {
    id: "udnembed",
    name: "UDNEmbed",
    color: "#ED812B",
    logoUrl: getLogo("udnembed.com"),
    exampleUrl: "",
    description: "聯合影音"
  },
  {
    id: "ufcarabia",
    name: "UFCArabia",
    color: "#FDA238",
    logoUrl: getLogo("ufcarabia.com"),
    exampleUrl: "",
    description: "[*ufcarabia*](## \"netrc machine\")"
  },
  {
    id: "ufctv",
    name: "UFCTV",
    color: "#FF0000",
    logoUrl: getLogo("ufctv.com"),
    exampleUrl: "",
    description: "[*ufctv*](## \"netrc machine\")"
  },
  {
    id: "uktvplay",
    name: "UKTVPlay",
    color: "#000000",
    logoUrl: getLogo("uktvplay.com"),
    exampleUrl: "",
    description: "Support for UKTVPlay extraction."
  },
  {
    id: "ulizaplayer",
    name: "UlizaPlayer",
    color: "#E1306C",
    logoUrl: getLogo("ulizaplayer.com"),
    exampleUrl: "",
    description: "Support for UlizaPlayer extraction."
  },
  {
    id: "ulizaportal",
    name: "UlizaPortal",
    color: "#1877F2",
    logoUrl: getLogo("ulizaportal.jp"),
    exampleUrl: "",
    description: "ulizaportal.jp"
  },
  {
    id: "unistra",
    name: "Unistra",
    color: "#1DA1F2",
    logoUrl: getLogo("unistra.com"),
    exampleUrl: "",
    description: "Support for Unistra extraction."
  },
  {
    id: "unitednationswebtv",
    name: "UnitedNationsWebTv",
    color: "#9146FF",
    logoUrl: getLogo("unitednationswebtv.com"),
    exampleUrl: "",
    description: "Support for UnitedNationsWebTv extraction."
  },
  {
    id: "uol_com_br",
    name: "uol.com.br",
    color: "#BD081C",
    logoUrl: getLogo("uol.com.br.com"),
    exampleUrl: "",
    description: "Support for uol.com.br extraction."
  },
  {
    id: "uplynk",
    name: "uplynk",
    color: "#FF4500",
    logoUrl: getLogo("uplynk.com"),
    exampleUrl: "",
    description: "Support for uplynk extraction."
  },
  {
    id: "urplay",
    name: "URPlay",
    color: "#0A66C2",
    logoUrl: getLogo("urplay.com"),
    exampleUrl: "",
    description: "Support for URPlay extraction."
  },
  {
    id: "usanetwork",
    name: "USANetwork",
    color: "#1AB7EA",
    logoUrl: getLogo("usanetwork.com"),
    exampleUrl: "",
    description: "Support for USANetwork extraction."
  },
  {
    id: "usatoday",
    name: "USAToday",
    color: "#FF5500",
    logoUrl: getLogo("usatoday.com"),
    exampleUrl: "",
    description: "Support for USAToday extraction."
  },
  {
    id: "ustream",
    name: "ustream",
    color: "#0062D2",
    logoUrl: getLogo("ustream.com"),
    exampleUrl: "",
    description: "Support for ustream extraction."
  },
  {
    id: "ustudio",
    name: "ustudio",
    color: "#00A1D6",
    logoUrl: getLogo("ustudio.com"),
    exampleUrl: "",
    description: "Support for ustudio extraction."
  },
  {
    id: "vbox7",
    name: "Vbox7",
    color: "#0085ff",
    logoUrl: getLogo("vbox7.com"),
    exampleUrl: "",
    description: "Support for Vbox7 extraction."
  },
  {
    id: "veo",
    name: "Veo",
    color: "#625DF5",
    logoUrl: getLogo("veo.com"),
    exampleUrl: "",
    description: "Support for Veo extraction."
  },
  {
    id: "vevo",
    name: "Vevo",
    color: "#ED812B",
    logoUrl: getLogo("vevo.com"),
    exampleUrl: "",
    description: "Support for Vevo extraction."
  },
  {
    id: "vevoplaylist",
    name: "VevoPlaylist",
    color: "#FDA238",
    logoUrl: getLogo("vevoplaylist.com"),
    exampleUrl: "",
    description: "Support for VevoPlaylist extraction."
  },
  {
    id: "vgtv",
    name: "VGTV",
    color: "#FF0000",
    logoUrl: getLogo("vgtv.com"),
    exampleUrl: "",
    description: "VGTV, BTTV, FTV, Aftenposten and Aftonbladet"
  },
  {
    id: "vh1_com",
    name: "vh1.com",
    color: "#000000",
    logoUrl: getLogo("vh1.com.com"),
    exampleUrl: "",
    description: "Support for vh1.com extraction."
  },
  {
    id: "videa",
    name: "Videa",
    color: "#E1306C",
    logoUrl: getLogo("videa.com"),
    exampleUrl: "",
    description: "Support for Videa extraction."
  },
  {
    id: "video_arnes_si",
    name: "video.arnes.si",
    color: "#1877F2",
    logoUrl: getLogo("video.arnes.si.com"),
    exampleUrl: "",
    description: "Arnes Video"
  },
  {
    id: "video_sky_it",
    name: "video.sky.it",
    color: "#1DA1F2",
    logoUrl: getLogo("video.sky.it.com"),
    exampleUrl: "",
    description: "Support for video.sky.it extraction."
  },
  {
    id: "videodetective",
    name: "VideoDetective",
    color: "#9146FF",
    logoUrl: getLogo("videodetective.com"),
    exampleUrl: "",
    description: "Support for VideoDetective extraction."
  },
  {
    id: "videoken",
    name: "VideoKen",
    color: "#BD081C",
    logoUrl: getLogo("videoken.com"),
    exampleUrl: "",
    description: "Support for VideoKen extraction."
  },
  {
    id: "videokencategory",
    name: "VideoKenCategory",
    color: "#FF4500",
    logoUrl: getLogo("videokencategory.com"),
    exampleUrl: "",
    description: "Support for VideoKenCategory extraction."
  },
  {
    id: "videokenplayer",
    name: "VideoKenPlayer",
    color: "#0A66C2",
    logoUrl: getLogo("videokenplayer.com"),
    exampleUrl: "",
    description: "Support for VideoKenPlayer extraction."
  },
  {
    id: "videokenplaylist",
    name: "VideoKenPlaylist",
    color: "#1AB7EA",
    logoUrl: getLogo("videokenplaylist.com"),
    exampleUrl: "",
    description: "Support for VideoKenPlaylist extraction."
  },
  {
    id: "videokentopic",
    name: "VideoKenTopic",
    color: "#FF5500",
    logoUrl: getLogo("videokentopic.com"),
    exampleUrl: "",
    description: "Support for VideoKenTopic extraction."
  },
  {
    id: "videomore",
    name: "videomore",
    color: "#0062D2",
    logoUrl: getLogo("videomore.com"),
    exampleUrl: "",
    description: "Support for videomore extraction."
  },
  {
    id: "videopress",
    name: "VideoPress",
    color: "#00A1D6",
    logoUrl: getLogo("videopress.com"),
    exampleUrl: "",
    description: "Support for VideoPress extraction."
  },
  {
    id: "vidflex",
    name: "Vidflex",
    color: "#0085ff",
    logoUrl: getLogo("vidflex.com"),
    exampleUrl: "",
    description: "Support for Vidflex extraction."
  },
  {
    id: "vidio",
    name: "Vidio",
    color: "#625DF5",
    logoUrl: getLogo("vidio.com"),
    exampleUrl: "",
    description: "[*vidio*](## \"netrc machine\")"
  },
  {
    id: "vidiolive",
    name: "VidioLive",
    color: "#ED812B",
    logoUrl: getLogo("vidiolive.com"),
    exampleUrl: "",
    description: "[*vidio*](## \"netrc machine\")"
  },
  {
    id: "vidiopremier",
    name: "VidioPremier",
    color: "#FDA238",
    logoUrl: getLogo("vidiopremier.com"),
    exampleUrl: "",
    description: "[*vidio*](## \"netrc machine\")"
  },
  {
    id: "vidlii",
    name: "VidLii",
    color: "#FF0000",
    logoUrl: getLogo("vidlii.com"),
    exampleUrl: "",
    description: "Support for VidLii extraction."
  },
  {
    id: "vidly",
    name: "Vidly",
    color: "#000000",
    logoUrl: getLogo("vidly.com"),
    exampleUrl: "",
    description: "Support for Vidly extraction."
  },
  {
    id: "vids_io",
    name: "vids.io",
    color: "#E1306C",
    logoUrl: getLogo("vids.io.com"),
    exampleUrl: "",
    description: "Support for vids.io extraction."
  },
  {
    id: "vidyard",
    name: "Vidyard",
    color: "#1877F2",
    logoUrl: getLogo("vidyard.com"),
    exampleUrl: "",
    description: "Support for Vidyard extraction."
  },
  {
    id: "viewlift",
    name: "viewlift",
    color: "#1DA1F2",
    logoUrl: getLogo("viewlift.com"),
    exampleUrl: "",
    description: "Support for viewlift extraction."
  },
  {
    id: "viidea",
    name: "Viidea",
    color: "#9146FF",
    logoUrl: getLogo("viidea.com"),
    exampleUrl: "",
    description: "Support for Viidea extraction."
  },
  {
    id: "vimeo",
    name: "vimeo",
    color: "#BD081C",
    logoUrl: getLogo("vimeo.com"),
    exampleUrl: "",
    description: "[*vimeo*](## \"netrc machine\")"
  },
  {
    id: "vimp",
    name: "ViMP",
    color: "#FF4500",
    logoUrl: getLogo("vimp.com"),
    exampleUrl: "",
    description: "Support for ViMP extraction."
  },
  {
    id: "viously",
    name: "Viously",
    color: "#0A66C2",
    logoUrl: getLogo("viously.com"),
    exampleUrl: "",
    description: "Support for Viously extraction."
  },
  {
    id: "viu",
    name: "Viu",
    color: "#1AB7EA",
    logoUrl: getLogo("viu.com"),
    exampleUrl: "",
    description: "Support for Viu extraction."
  },
  {
    id: "viuottindonesia",
    name: "ViuOTTIndonesia",
    color: "#FF5500",
    logoUrl: getLogo("viuottindonesia.com"),
    exampleUrl: "",
    description: "Support for ViuOTTIndonesia extraction."
  },
  {
    id: "vk",
    name: "vk",
    color: "#0062D2",
    logoUrl: getLogo("vk.com"),
    exampleUrl: "",
    description: "[*vk*](## \"netrc machine\") VK"
  },
  {
    id: "vkplay",
    name: "VKPlay",
    color: "#00A1D6",
    logoUrl: getLogo("vkplay.com"),
    exampleUrl: "",
    description: "Support for VKPlay extraction."
  },
  {
    id: "vkplaylive",
    name: "VKPlayLive",
    color: "#0085ff",
    logoUrl: getLogo("vkplaylive.com"),
    exampleUrl: "",
    description: "Support for VKPlayLive extraction."
  },
  {
    id: "vm_tiktok",
    name: "vm.tiktok",
    color: "#625DF5",
    logoUrl: getLogo("vm.tiktok.com"),
    exampleUrl: "",
    description: "Support for vm.tiktok extraction."
  },
  {
    id: "vocaroo",
    name: "Vocaroo",
    color: "#ED812B",
    logoUrl: getLogo("vocaroo.com"),
    exampleUrl: "",
    description: "Support for Vocaroo extraction."
  },
  {
    id: "vodpl",
    name: "VODPl",
    color: "#FDA238",
    logoUrl: getLogo("vodpl.com"),
    exampleUrl: "",
    description: "Support for VODPl extraction."
  },
  {
    id: "vodplatform",
    name: "VODPlatform",
    color: "#FF0000",
    logoUrl: getLogo("vodplatform.com"),
    exampleUrl: "",
    description: "Support for VODPlatform extraction."
  },
  {
    id: "voxmedia",
    name: "VoxMedia",
    color: "#000000",
    logoUrl: getLogo("voxmedia.com"),
    exampleUrl: "",
    description: "Support for VoxMedia extraction."
  },
  {
    id: "voxmediavolume",
    name: "VoxMediaVolume",
    color: "#E1306C",
    logoUrl: getLogo("voxmediavolume.com"),
    exampleUrl: "",
    description: "Support for VoxMediaVolume extraction."
  },
  {
    id: "vpro",
    name: "vpro",
    color: "#1877F2",
    logoUrl: getLogo("npo.nl"),
    exampleUrl: "",
    description: "npo.nl, ntr.nl, omroepwnl.nl, zapp.nl and npo3.nl"
  },
  {
    id: "vrsquare",
    name: "vrsquare",
    color: "#1DA1F2",
    logoUrl: getLogo("vrsquare.com"),
    exampleUrl: "",
    description: "VR SQUARE"
  },
  {
    id: "vrt",
    name: "VRT",
    color: "#9146FF",
    logoUrl: getLogo("vrt.com"),
    exampleUrl: "",
    description: "VRT NWS, Flanders News, Flandern Info and Sporza"
  },
  {
    id: "vrtmax",
    name: "vrtmax",
    color: "#BD081C",
    logoUrl: getLogo("vrtmax.com"),
    exampleUrl: "",
    description: "[*vrtnu*](## \"netrc machine\") VRT MAX (formerly VRT NU)"
  },
  {
    id: "vtm",
    name: "VTM",
    color: "#FF4500",
    logoUrl: getLogo("vtm.com"),
    exampleUrl: "",
    description: "Support for VTM extraction."
  },
  {
    id: "vtv",
    name: "VTV",
    color: "#0A66C2",
    logoUrl: getLogo("vtv.com"),
    exampleUrl: "",
    description: "Support for VTV extraction."
  },
  {
    id: "vtvgo",
    name: "VTVGo",
    color: "#1AB7EA",
    logoUrl: getLogo("vtvgo.com"),
    exampleUrl: "",
    description: "Support for VTVGo extraction."
  },
  {
    id: "vtxtv",
    name: "VTXTV",
    color: "#FF5500",
    logoUrl: getLogo("vtxtv.com"),
    exampleUrl: "",
    description: "[*vtxtv*](## \"netrc machine\")"
  },
  {
    id: "vtxtvlive",
    name: "VTXTVLive",
    color: "#0062D2",
    logoUrl: getLogo("vtxtvlive.com"),
    exampleUrl: "",
    description: "[*vtxtv*](## \"netrc machine\")"
  },
  {
    id: "vtxtvrecordings",
    name: "VTXTVRecordings",
    color: "#00A1D6",
    logoUrl: getLogo("vtxtvrecordings.com"),
    exampleUrl: "",
    description: "[*vtxtv*](## \"netrc machine\")"
  },
  {
    id: "vuclip",
    name: "VuClip",
    color: "#0085ff",
    logoUrl: getLogo("vuclip.com"),
    exampleUrl: "",
    description: "Support for VuClip extraction."
  },
  {
    id: "vvvvid",
    name: "VVVVID",
    color: "#625DF5",
    logoUrl: getLogo("vvvvid.com"),
    exampleUrl: "",
    description: "Support for VVVVID extraction."
  },
  {
    id: "vvvvidshow",
    name: "VVVVIDShow",
    color: "#ED812B",
    logoUrl: getLogo("vvvvidshow.com"),
    exampleUrl: "",
    description: "Support for VVVVIDShow extraction."
  },
  {
    id: "walla",
    name: "Walla",
    color: "#FDA238",
    logoUrl: getLogo("walla.com"),
    exampleUrl: "",
    description: "Support for Walla extraction."
  },
  {
    id: "walytv",
    name: "WalyTV",
    color: "#FF0000",
    logoUrl: getLogo("walytv.com"),
    exampleUrl: "",
    description: "[*walytv*](## \"netrc machine\")"
  },
  {
    id: "walytvlive",
    name: "WalyTVLive",
    color: "#000000",
    logoUrl: getLogo("walytvlive.com"),
    exampleUrl: "",
    description: "[*walytv*](## \"netrc machine\")"
  },
  {
    id: "walytvrecordings",
    name: "WalyTVRecordings",
    color: "#E1306C",
    logoUrl: getLogo("walytvrecordings.com"),
    exampleUrl: "",
    description: "[*walytv*](## \"netrc machine\")"
  },
  {
    id: "washingtonpost",
    name: "washingtonpost",
    color: "#1877F2",
    logoUrl: getLogo("washingtonpost.com"),
    exampleUrl: "",
    description: "Support for washingtonpost extraction."
  },
  {
    id: "wat_tv",
    name: "wat.tv",
    color: "#1DA1F2",
    logoUrl: getLogo("wat.tv.com"),
    exampleUrl: "",
    description: "Support for wat.tv extraction."
  },
  {
    id: "watchespn",
    name: "WatchESPN",
    color: "#9146FF",
    logoUrl: getLogo("watchespn.com"),
    exampleUrl: "",
    description: "Support for WatchESPN extraction."
  },
  {
    id: "wdr",
    name: "WDR",
    color: "#BD081C",
    logoUrl: getLogo("wdr.com"),
    exampleUrl: "",
    description: "Support for WDR extraction."
  },
  {
    id: "wdrelefant",
    name: "WDRElefant",
    color: "#FF4500",
    logoUrl: getLogo("wdrelefant.com"),
    exampleUrl: "",
    description: "Support for WDRElefant extraction."
  },
  {
    id: "wdrpage",
    name: "WDRPage",
    color: "#0A66C2",
    logoUrl: getLogo("wdrpage.com"),
    exampleUrl: "",
    description: "Support for WDRPage extraction."
  },
  {
    id: "webcamerapl",
    name: "Webcamerapl",
    color: "#1AB7EA",
    logoUrl: getLogo("webcamerapl.com"),
    exampleUrl: "",
    description: "Support for Webcamerapl extraction."
  },
  {
    id: "webcaster",
    name: "Webcaster",
    color: "#FF5500",
    logoUrl: getLogo("webcaster.com"),
    exampleUrl: "",
    description: "Support for Webcaster extraction."
  },
  {
    id: "webcasterfeed",
    name: "WebcasterFeed",
    color: "#0062D2",
    logoUrl: getLogo("webcasterfeed.com"),
    exampleUrl: "",
    description: "Support for WebcasterFeed extraction."
  },
  {
    id: "webofstories",
    name: "WebOfStories",
    color: "#00A1D6",
    logoUrl: getLogo("webofstories.com"),
    exampleUrl: "",
    description: "Support for WebOfStories extraction."
  },
  {
    id: "webofstoriesplaylist",
    name: "WebOfStoriesPlaylist",
    color: "#0085ff",
    logoUrl: getLogo("webofstoriesplaylist.com"),
    exampleUrl: "",
    description: "Support for WebOfStoriesPlaylist extraction."
  },
  {
    id: "weibo",
    name: "Weibo",
    color: "#625DF5",
    logoUrl: getLogo("weibo.com"),
    exampleUrl: "",
    description: "Support for Weibo extraction."
  },
  {
    id: "weibouser",
    name: "WeiboUser",
    color: "#ED812B",
    logoUrl: getLogo("weibouser.com"),
    exampleUrl: "",
    description: "Support for WeiboUser extraction."
  },
  {
    id: "weibovideo",
    name: "WeiboVideo",
    color: "#FDA238",
    logoUrl: getLogo("weibovideo.com"),
    exampleUrl: "",
    description: "Support for WeiboVideo extraction."
  },
  {
    id: "wetvseries",
    name: "WeTvSeries",
    color: "#FF0000",
    logoUrl: getLogo("wetvseries.com"),
    exampleUrl: "",
    description: "Support for WeTvSeries extraction."
  },
  {
    id: "weverse",
    name: "Weverse",
    color: "#000000",
    logoUrl: getLogo("weverse.com"),
    exampleUrl: "",
    description: "[*weverse*](## \"netrc machine\")"
  },
  {
    id: "weverselive",
    name: "WeverseLive",
    color: "#E1306C",
    logoUrl: getLogo("weverselive.com"),
    exampleUrl: "",
    description: "[*weverse*](## \"netrc machine\")"
  },
  {
    id: "weverselivetab",
    name: "WeverseLiveTab",
    color: "#1877F2",
    logoUrl: getLogo("weverselivetab.com"),
    exampleUrl: "",
    description: "[*weverse*](## \"netrc machine\")"
  },
  {
    id: "weversemedia",
    name: "WeverseMedia",
    color: "#1DA1F2",
    logoUrl: getLogo("weversemedia.com"),
    exampleUrl: "",
    description: "[*weverse*](## \"netrc machine\")"
  },
  {
    id: "weversemediatab",
    name: "WeverseMediaTab",
    color: "#9146FF",
    logoUrl: getLogo("weversemediatab.com"),
    exampleUrl: "",
    description: "[*weverse*](## \"netrc machine\")"
  },
  {
    id: "weversemoment",
    name: "WeverseMoment",
    color: "#BD081C",
    logoUrl: getLogo("weversemoment.com"),
    exampleUrl: "",
    description: "[*weverse*](## \"netrc machine\")"
  },
  {
    id: "wevidi",
    name: "WeVidi",
    color: "#FF4500",
    logoUrl: getLogo("wevidi.com"),
    exampleUrl: "",
    description: "Support for WeVidi extraction."
  },
  {
    id: "weyyak",
    name: "Weyyak",
    color: "#0A66C2",
    logoUrl: getLogo("weyyak.com"),
    exampleUrl: "",
    description: "Support for Weyyak extraction."
  },
  {
    id: "whowatch",
    name: "whowatch",
    color: "#1AB7EA",
    logoUrl: getLogo("whowatch.com"),
    exampleUrl: "",
    description: "Support for whowatch extraction."
  },
  {
    id: "whyp",
    name: "Whyp",
    color: "#FF5500",
    logoUrl: getLogo("whyp.com"),
    exampleUrl: "",
    description: "Support for Whyp extraction."
  },
  {
    id: "wikimedia_org",
    name: "wikimedia.org",
    color: "#0062D2",
    logoUrl: getLogo("wikimedia.org.com"),
    exampleUrl: "",
    description: "Support for wikimedia.org extraction."
  },
  {
    id: "wimbledon",
    name: "Wimbledon",
    color: "#00A1D6",
    logoUrl: getLogo("wimbledon.com"),
    exampleUrl: "",
    description: "Support for Wimbledon extraction."
  },
  {
    id: "wimtv",
    name: "WimTV",
    color: "#0085ff",
    logoUrl: getLogo("wimtv.com"),
    exampleUrl: "",
    description: "Support for WimTV extraction."
  },
  {
    id: "winsportsvideo",
    name: "WinSportsVideo",
    color: "#625DF5",
    logoUrl: getLogo("winsportsvideo.com"),
    exampleUrl: "",
    description: "Support for WinSportsVideo extraction."
  },
  {
    id: "wistia",
    name: "Wistia",
    color: "#ED812B",
    logoUrl: getLogo("wistia.com"),
    exampleUrl: "",
    description: "Support for Wistia extraction."
  },
  {
    id: "wistiachannel",
    name: "WistiaChannel",
    color: "#FDA238",
    logoUrl: getLogo("wistiachannel.com"),
    exampleUrl: "",
    description: "Support for WistiaChannel extraction."
  },
  {
    id: "wistiaplaylist",
    name: "WistiaPlaylist",
    color: "#FF0000",
    logoUrl: getLogo("wistiaplaylist.com"),
    exampleUrl: "",
    description: "Support for WistiaPlaylist extraction."
  },
  {
    id: "wnl",
    name: "wnl",
    color: "#000000",
    logoUrl: getLogo("npo.nl"),
    exampleUrl: "",
    description: "npo.nl, ntr.nl, omroepwnl.nl, zapp.nl and npo3.nl"
  },
  {
    id: "worldstarhiphop",
    name: "WorldStarHipHop",
    color: "#E1306C",
    logoUrl: getLogo("worldstarhiphop.com"),
    exampleUrl: "",
    description: "Support for WorldStarHipHop extraction."
  },
  {
    id: "wppilot",
    name: "wppilot",
    color: "#1877F2",
    logoUrl: getLogo("wppilot.com"),
    exampleUrl: "",
    description: "Support for wppilot extraction."
  },
  {
    id: "wrestleuniverseppv",
    name: "WrestleUniversePPV",
    color: "#1DA1F2",
    logoUrl: getLogo("wrestleuniverseppv.com"),
    exampleUrl: "",
    description: "[*wrestleuniverse*](## \"netrc machine\")"
  },
  {
    id: "wrestleuniversevod",
    name: "WrestleUniverseVOD",
    color: "#9146FF",
    logoUrl: getLogo("wrestleuniversevod.com"),
    exampleUrl: "",
    description: "[*wrestleuniverse*](## \"netrc machine\")"
  },
  {
    id: "wsj",
    name: "WSJ",
    color: "#BD081C",
    logoUrl: getLogo("wsj.com"),
    exampleUrl: "",
    description: "Wall Street Journal"
  },
  {
    id: "wsjarticle",
    name: "WSJArticle",
    color: "#FF4500",
    logoUrl: getLogo("wsjarticle.com"),
    exampleUrl: "",
    description: "Support for WSJArticle extraction."
  },
  {
    id: "wwe",
    name: "WWE",
    color: "#0A66C2",
    logoUrl: getLogo("wwe.com"),
    exampleUrl: "",
    description: "Support for WWE extraction."
  },
  {
    id: "wyborczapodcast",
    name: "WyborczaPodcast",
    color: "#1AB7EA",
    logoUrl: getLogo("wyborczapodcast.com"),
    exampleUrl: "",
    description: "Support for WyborczaPodcast extraction."
  },
  {
    id: "xboxclips",
    name: "XboxClips",
    color: "#FF5500",
    logoUrl: getLogo("xboxclips.com"),
    exampleUrl: "",
    description: "Support for XboxClips extraction."
  },
  {
    id: "xhamster",
    name: "XHamster",
    color: "#0062D2",
    logoUrl: getLogo("xhamster.com"),
    exampleUrl: "",
    description: "Support for XHamster extraction."
  },
  {
    id: "xhamsterembed",
    name: "XHamsterEmbed",
    color: "#00A1D6",
    logoUrl: getLogo("xhamsterembed.com"),
    exampleUrl: "",
    description: "Support for XHamsterEmbed extraction."
  },
  {
    id: "xhamsteruser",
    name: "XHamsterUser",
    color: "#0085ff",
    logoUrl: getLogo("xhamsteruser.com"),
    exampleUrl: "",
    description: "Support for XHamsterUser extraction."
  },
  {
    id: "xiaohongshu",
    name: "XiaoHongShu",
    color: "#625DF5",
    logoUrl: getLogo("xiaohongshu.com"),
    exampleUrl: "",
    description: "小红书"
  },
  {
    id: "ximalaya",
    name: "ximalaya",
    color: "#ED812B",
    logoUrl: getLogo("ximalaya.com"),
    exampleUrl: "",
    description: "喜马拉雅FM"
  },
  {
    id: "xinpianchang",
    name: "Xinpianchang",
    color: "#FDA238",
    logoUrl: getLogo("xinpianchang.com"),
    exampleUrl: "",
    description: "新片场"
  },
  {
    id: "xnxx",
    name: "XNXX",
    color: "#FF0000",
    logoUrl: getLogo("xnxx.com"),
    exampleUrl: "",
    description: "Support for XNXX extraction."
  },
  {
    id: "xstream",
    name: "Xstream",
    color: "#000000",
    logoUrl: getLogo("xstream.com"),
    exampleUrl: "",
    description: "Support for Xstream extraction."
  },
  {
    id: "xvideos",
    name: "XVideos",
    color: "#E1306C",
    logoUrl: getLogo("xvideos.com"),
    exampleUrl: "",
    description: "Support for XVideos extraction."
  },
  {
    id: "yahoo",
    name: "yahoo",
    color: "#1DA1F2",
    logoUrl: getLogo("yahoo.com"),
    exampleUrl: "",
    description: "Support for yahoo extraction."
  },
  {
    id: "yandexdisk",
    name: "YandexDisk",
    color: "#9146FF",
    logoUrl: getLogo("yandexdisk.com"),
    exampleUrl: "",
    description: "Support for YandexDisk extraction."
  },
  {
    id: "yandexvideo",
    name: "YandexVideo",
    color: "#BD081C",
    logoUrl: getLogo("yandexvideo.com"),
    exampleUrl: "",
    description: "Support for YandexVideo extraction."
  },
  {
    id: "yandexvideopreview",
    name: "YandexVideoPreview",
    color: "#FF4500",
    logoUrl: getLogo("yandexvideopreview.com"),
    exampleUrl: "",
    description: "Support for YandexVideoPreview extraction."
  },
  {
    id: "yappyprofile",
    name: "YappyProfile",
    color: "#0A66C2",
    logoUrl: getLogo("yappyprofile.com"),
    exampleUrl: "",
    description: "Support for YappyProfile extraction."
  },
  {
    id: "yfanefa",
    name: "yfanefa",
    color: "#1AB7EA",
    logoUrl: getLogo("yfanefa.com"),
    exampleUrl: "",
    description: "Support for yfanefa extraction."
  },
  {
    id: "yleareena",
    name: "YleAreena",
    color: "#FF5500",
    logoUrl: getLogo("yleareena.com"),
    exampleUrl: "",
    description: "Support for YleAreena extraction."
  },
  {
    id: "youjizz",
    name: "YouJizz",
    color: "#0062D2",
    logoUrl: getLogo("youjizz.com"),
    exampleUrl: "",
    description: "Support for YouJizz extraction."
  },
  {
    id: "youku",
    name: "youku",
    color: "#00A1D6",
    logoUrl: getLogo("youku.com"),
    exampleUrl: "",
    description: "优酷"
  },
  {
    id: "younowchannel",
    name: "YouNowChannel",
    color: "#0085ff",
    logoUrl: getLogo("younowchannel.com"),
    exampleUrl: "",
    description: "Support for YouNowChannel extraction."
  },
  {
    id: "younowlive",
    name: "YouNowLive",
    color: "#625DF5",
    logoUrl: getLogo("younowlive.com"),
    exampleUrl: "",
    description: "Support for YouNowLive extraction."
  },
  {
    id: "younowmoment",
    name: "YouNowMoment",
    color: "#ED812B",
    logoUrl: getLogo("younowmoment.com"),
    exampleUrl: "",
    description: "Support for YouNowMoment extraction."
  },
  {
    id: "youtube",
    name: "youtube",
    color: "#BD081C",
    logoUrl: getLogo("youtube.com"),
    exampleUrl: "",
    description: "[*youtube*](## \"netrc machine\") YouTube"
  },
  {
    id: "youtubelivestreamembed",
    name: "YoutubeLivestreamEmbed",
    color: "#FF4500",
    logoUrl: getLogo("youtubelivestreamembed.com"),
    exampleUrl: "",
    description: "[*youtube*](## \"netrc machine\") YouTube livestream embeds"
  },
  {
    id: "youtubeytbe",
    name: "YoutubeYtBe",
    color: "#0A66C2",
    logoUrl: getLogo("youtu.be"),
    exampleUrl: "",
    description: "[*youtube*](## \"netrc machine\") youtu.be"
  },
  {
    id: "zaiko",
    name: "Zaiko",
    color: "#1AB7EA",
    logoUrl: getLogo("zaiko.com"),
    exampleUrl: "",
    description: "Support for Zaiko extraction."
  },
  {
    id: "zaikoeticket",
    name: "ZaikoETicket",
    color: "#FF5500",
    logoUrl: getLogo("zaikoeticket.com"),
    exampleUrl: "",
    description: "Support for ZaikoETicket extraction."
  },
  {
    id: "zapiks",
    name: "Zapiks",
    color: "#0062D2",
    logoUrl: getLogo("zapiks.com"),
    exampleUrl: "",
    description: "Support for Zapiks extraction."
  },
  {
    id: "zattoo",
    name: "Zattoo",
    color: "#00A1D6",
    logoUrl: getLogo("zattoo.com"),
    exampleUrl: "",
    description: "[*zattoo*](## \"netrc machine\")"
  },
  {
    id: "zattoolive",
    name: "ZattooLive",
    color: "#0085ff",
    logoUrl: getLogo("zattoolive.com"),
    exampleUrl: "",
    description: "[*zattoo*](## \"netrc machine\")"
  },
  {
    id: "zattoomovies",
    name: "ZattooMovies",
    color: "#625DF5",
    logoUrl: getLogo("zattoomovies.com"),
    exampleUrl: "",
    description: "[*zattoo*](## \"netrc machine\")"
  },
  {
    id: "zattoorecordings",
    name: "ZattooRecordings",
    color: "#ED812B",
    logoUrl: getLogo("zattoorecordings.com"),
    exampleUrl: "",
    description: "[*zattoo*](## \"netrc machine\")"
  },
  {
    id: "zdf",
    name: "zdf",
    color: "#FDA238",
    logoUrl: getLogo("zdf.com"),
    exampleUrl: "",
    description: "Support for zdf extraction."
  },
  {
    id: "zee5",
    name: "Zee5",
    color: "#FF0000",
    logoUrl: getLogo("zee5.com"),
    exampleUrl: "",
    description: "[*zee5*](## \"netrc machine\")"
  },
  {
    id: "zetlanddkarticle",
    name: "ZetlandDKArticle",
    color: "#E1306C",
    logoUrl: getLogo("zetlanddkarticle.com"),
    exampleUrl: "",
    description: "Support for ZetlandDKArticle extraction."
  },
  {
    id: "zhihu",
    name: "Zhihu",
    color: "#1877F2",
    logoUrl: getLogo("zhihu.com"),
    exampleUrl: "",
    description: "Support for Zhihu extraction."
  },
  {
    id: "zingmp3",
    name: "zingmp3",
    color: "#1DA1F2",
    logoUrl: getLogo("zingmp3.vn"),
    exampleUrl: "",
    description: "zingmp3.vn"
  },
  {
    id: "zoom",
    name: "zoom",
    color: "#9146FF",
    logoUrl: getLogo("zoom.com"),
    exampleUrl: "",
    description: "Support for zoom extraction."
  },
  {
    id: "zype",
    name: "Zype",
    color: "#BD081C",
    logoUrl: getLogo("zype.com"),
    exampleUrl: "",
    description: "Support for Zype extraction."
  },
  {
    id: "generic",
    name: "generic",
    color: "#FF4500",
    logoUrl: getLogo("generic.com"),
    exampleUrl: "",
    description: "Generic downloader that works on some sites"
  },
];
