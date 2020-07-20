$(document).ready(function () {
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#ul-search li").filter(function () {
            $("#icons").hide();
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        
        if($("#ul-search li").text().toLowerCase().indexOf(value) <= -1)
            $("#not-found").show();
        else
            $("#not-found").hide();

        if ($("#search").val() == "" || $("#search").val() == " ") {
            $("#not-found").hide();
            $("#ul-search li").hide();
            $("#icons").show();
        }
    });
});



////////////////////////////////////////// Games Data ////////////////////////////////////////////////

// GTA V
document.getElementById("GTAV_Logo").setAttribute("src", GTA_V.logo);
document.getElementById("GTAV_Logo").setAttribute("alt", "GTA_V Logo");
document.getElementById("GTAV_name").innerHTML = GTA_V.name;
document.getElementById("GTAV_genre").innerHTML = GTA_V.genre;
document.getElementById("GTAV_platform").innerHTML = GTA_V.platform;
// CSGO
document.getElementById("CSGO_Logo").setAttribute("src", CSGO.logo);
document.getElementById("CSGO_Logo").setAttribute("alt", "CSGO Logo");
document.getElementById("CSGO_name").innerHTML = CSGO.name;
document.getElementById("CSGO_genre").innerHTML = CSGO.genre;
document.getElementById("CSGO_platform").innerHTML = CSGO.platform;
// Outlast
document.getElementById("Outlast_Logo").setAttribute("src", Outlast.logo);
document.getElementById("Outlast_Logo").setAttribute("alt", "Outlast Logo");
document.getElementById("Outlast_name").innerHTML = Outlast.name;
document.getElementById("Outlast_genre").innerHTML = Outlast.genre;
document.getElementById("Outlast_platform").innerHTML = Outlast.platform;
// Outlast 2
document.getElementById("Outlast2_Logo").setAttribute("src", Outlast2.logo);
document.getElementById("Outlast2_Logo").setAttribute("alt", "Outlast2 Logo");
document.getElementById("Outlast2_name").innerHTML = Outlast2.name;
document.getElementById("Outlast2_genre").innerHTML = Outlast2.genre;
document.getElementById("Outlast2_platform").innerHTML = Outlast2.platform;
// PUBG
document.getElementById("PUBG_Logo").setAttribute("src", PUBG.logo);
document.getElementById("PUBG_Logo").setAttribute("alt", "PUBG Logo");
document.getElementById("PUBG_name").innerHTML = PUBG.name;
document.getElementById("PUBG_genre").innerHTML = PUBG.genre;
document.getElementById("PUBG_platform").innerHTML = PUBG.platform;
// BlackSquad
document.getElementById("BlackSquad_Logo").setAttribute("src", BlackSquad.logo);
document.getElementById("BlackSquad_Logo").setAttribute("alt", "BlackSquad Logo");
document.getElementById("BlackSquad_name").innerHTML = BlackSquad.name;
document.getElementById("BlackSquad_genre").innerHTML = BlackSquad.genre;
document.getElementById("BlackSquad_platform").innerHTML = BlackSquad.platform;
// BattleFieldV
document.getElementById("BattleFieldV_Logo").setAttribute("src", BFV.logo);
document.getElementById("BattleFieldV_Logo").setAttribute("alt", "BattleFieldV Logo");
document.getElementById("BattleFieldV_name").innerHTML = BFV.name;
document.getElementById("BattleFieldV_genre").innerHTML = BFV.genre;
document.getElementById("BattleFieldV_platform").innerHTML = BFV.platform;
// NeedForSpeedHeat
document.getElementById("NeedForSpeedHeat_Logo").setAttribute("src", NFS.logo);
document.getElementById("NeedForSpeedHeat_Logo").setAttribute("alt", "NeedForSpeedHeat Logo");
document.getElementById("NeedForSpeedHeat_name").innerHTML = NFS.name;
document.getElementById("NeedForSpeedHeat_genre").innerHTML = NFS.genre;
document.getElementById("NeedForSpeedHeat_platform").innerHTML = NFS.platform;
// ApexLegends
document.getElementById("ApexLegends_Logo").setAttribute("src", APEX.logo);
document.getElementById("ApexLegends_Logo").setAttribute("alt", "ApexLegends Logo");
document.getElementById("ApexLegends_name").innerHTML = APEX.name;
document.getElementById("ApexLegends_genre").innerHTML = APEX.genre;
document.getElementById("ApexLegends_platform").innerHTML = APEX.platform;
// Detroit
document.getElementById("Detroit_Logo").setAttribute("src", Detroit.logo);
document.getElementById("Detroit_Logo").setAttribute("alt", "Detroit Logo");
document.getElementById("Detroit_name").innerHTML = Detroit.name;
document.getElementById("Detroit_genre").innerHTML = Detroit.genre;
document.getElementById("Detroit_platform").innerHTML = Detroit.platform;
// EonAltar
document.getElementById("EonAltar_Logo").setAttribute("src", EonAltar.logo);
document.getElementById("EonAltar_Logo").setAttribute("alt", "EonAltar Logo");
document.getElementById("EonAltar_name").innerHTML = EonAltar.name;
document.getElementById("EonAltar_genre").innerHTML = EonAltar.genre;
document.getElementById("EonAltar_platform").innerHTML = EonAltar.platform;
// LayersOfFear
document.getElementById("LayersOfFear_Logo").setAttribute("src", LOF.logo);
document.getElementById("LayersOfFear_Logo").setAttribute("alt", "LayersOfFear Logo");
document.getElementById("LayersOfFear_name").innerHTML = LOF.name;
document.getElementById("LayersOfFear_genre").innerHTML = LOF.genre;
document.getElementById("LayersOfFear_platform").innerHTML = LOF.platform;
// LayersOfFear2
document.getElementById("LayersOfFear2_Logo").setAttribute("src", LOF2.logo);
document.getElementById("LayersOfFear2_Logo").setAttribute("alt", "LayersOfFear2 Logo");
document.getElementById("LayersOfFear2_name").innerHTML = LOF2.name;
document.getElementById("LayersOfFear2_genre").innerHTML = LOF2.genre;
document.getElementById("LayersOfFear2_platform").innerHTML = LOF2.platform;
// ACO
document.getElementById("ACO_Logo").setAttribute("src", ACO.logo);
document.getElementById("ACO_Logo").setAttribute("alt", "ACO Logo");
document.getElementById("ACO_name").innerHTML = ACO.name;
document.getElementById("ACO_genre").innerHTML = ACO.genre;
document.getElementById("ACO_platform").innerHTML = ACO.platform;
// DMC
document.getElementById("DMC_Logo").setAttribute("src", DMC.logo);
document.getElementById("DMC_Logo").setAttribute("alt", "DMC Logo");
document.getElementById("DMC_name").innerHTML = DMC.name;
document.getElementById("DMC_genre").innerHTML = DMC.genre;
document.getElementById("DMC_platform").innerHTML = DMC.platform;
// FFXV
document.getElementById("FFXV_Logo").setAttribute("src", FFXV.logo);
document.getElementById("FFXV_Logo").setAttribute("alt", "FFXV Logo");
document.getElementById("FFXV_name").innerHTML = FFXV.name;
document.getElementById("FFXV_genre").innerHTML = FFXV.genre;
document.getElementById("FFXV_platform").innerHTML = FFXV.platform;
// MGSVTPP
document.getElementById("MGSVTPP_Logo").setAttribute("src", MGSVTPP.logo);
document.getElementById("MGSVTPP_Logo").setAttribute("alt", "MGSVTPP Logo");
document.getElementById("MGSVTPP_name").innerHTML = MGSVTPP.name;
document.getElementById("MGSVTPP_genre").innerHTML = MGSVTPP.genre;
document.getElementById("MGSVTPP_platform").innerHTML = MGSVTPP.platform;
// TWWH3
document.getElementById("TWWH3_Logo").setAttribute("src", TWWH3.logo);
document.getElementById("TWWH3_Logo").setAttribute("alt", "TWWH3 Logo");
document.getElementById("TWWH3_name").innerHTML = TWWH3.name;
document.getElementById("TWWH3_genre").innerHTML = TWWH3.genre;
document.getElementById("TWWH3_platform").innerHTML = TWWH3.platform;
// WD2
document.getElementById("WD2_Logo").setAttribute("src", WD2.logo);
document.getElementById("WD2_Logo").setAttribute("alt", "WD2 Logo");
document.getElementById("WD2_name").innerHTML = WD2.name;
document.getElementById("WD2_genre").innerHTML = WD2.genre;
document.getElementById("WD2_platform").innerHTML = WD2.platform;
// INSIDE
document.getElementById("INSIDE_Logo").setAttribute("src", INSIDE.logo);
document.getElementById("INSIDE_Logo").setAttribute("alt", "INSIDE Logo");
document.getElementById("INSIDE_name").innerHTML = INSIDE.name;
document.getElementById("INSIDE_genre").innerHTML = INSIDE.genre;
document.getElementById("INSIDE_platform").innerHTML = INSIDE.platform;
// LittleNightmares
document.getElementById("LittleNightmares_Logo").setAttribute("src", LittleNightmares.logo);
document.getElementById("LittleNightmares_Logo").setAttribute("alt", "LittleNightmares Logo");
document.getElementById("LittleNightmares_name").innerHTML = LittleNightmares.name;
document.getElementById("LittleNightmares_genre").innerHTML = LittleNightmares.genre;
document.getElementById("LittleNightmares_platform").innerHTML = LittleNightmares.platform;
// LIMBO
document.getElementById("LIMBO_Logo").setAttribute("src", LIMBO.logo);
document.getElementById("LIMBO_Logo").setAttribute("alt", "LIMBO Logo");
document.getElementById("LIMBO_name").innerHTML = LIMBO.name;
document.getElementById("LIMBO_genre").innerHTML = LIMBO.genre;
document.getElementById("LIMBO_platform").innerHTML = LIMBO.platform;
// GeometryDash
document.getElementById("GeometryDash_Logo").setAttribute("src", GeometryDash.logo);
document.getElementById("GeometryDash_Logo").setAttribute("alt", "GeometryDash Logo");
document.getElementById("GeometryDash_name").innerHTML = GeometryDash.name;
document.getElementById("GeometryDash_genre").innerHTML = GeometryDash.genre;
document.getElementById("GeometryDash_platform").innerHTML = GeometryDash.platform;
// HITMAN
document.getElementById("HITMAN_Logo").setAttribute("src", HITMAN.logo);
document.getElementById("HITMAN_Logo").setAttribute("alt", "HITMAN Logo");
document.getElementById("HITMAN_name").innerHTML = HITMAN.name;
document.getElementById("HITMAN_genre").innerHTML = HITMAN.genre;
document.getElementById("HITMAN_platform").innerHTML = HITMAN.platform;
// JC4R
document.getElementById("JC4R_Logo").setAttribute("src", JC4R.logo);
document.getElementById("JC4R_Logo").setAttribute("alt", "JC4R Logo");
document.getElementById("JC4R_name").innerHTML = JC4R.name;
document.getElementById("JC4R_genre").innerHTML = JC4R.genre;
document.getElementById("JC4R_platform").innerHTML = JC4R.platform;
// RDR2
document.getElementById("RDR2_Logo").setAttribute("src", RDR2.logo);
document.getElementById("RDR2_Logo").setAttribute("alt", "RDR2 Logo");
document.getElementById("RDR2_name").innerHTML = RDR2.name;
document.getElementById("RDR2_genre").innerHTML = RDR2.genre;
document.getElementById("RDR2_platform").innerHTML = RDR2.platform;
// RE7B
document.getElementById("RE7B_Logo").setAttribute("src", RE7B.logo);
document.getElementById("RE7B_Logo").setAttribute("alt", "RE7B Logo");
document.getElementById("RE7B_name").innerHTML = RE7B.name;
document.getElementById("RE7B_genre").innerHTML = RE7B.genre;
document.getElementById("RE7B_platform").innerHTML = RE7B.platform;
// UWO
document.getElementById("UWO_Logo").setAttribute("src", UWO.logo);
document.getElementById("UWO_Logo").setAttribute("alt", "UWO Logo");
document.getElementById("UWO_name").innerHTML = UWO.name;
document.getElementById("UWO_genre").innerHTML = UWO.genre;
document.getElementById("UWO_platform").innerHTML = UWO.platform;
// Kyn
document.getElementById("Kyn_Logo").setAttribute("src", Kyn.logo);
document.getElementById("Kyn_Logo").setAttribute("alt", "Kyn Logo");
document.getElementById("Kyn_name").innerHTML = Kyn.name;
document.getElementById("Kyn_genre").innerHTML = Kyn.genre;
document.getElementById("Kyn_platform").innerHTML = Kyn.platform;
// ZumaDeluxe
document.getElementById("ZumaDeluxe_Logo").setAttribute("src", ZumaDeluxe.logo);
document.getElementById("ZumaDeluxe_Logo").setAttribute("alt", "ZumaDeluxe Logo");
document.getElementById("ZumaDeluxe_name").innerHTML = ZumaDeluxe.name;
document.getElementById("ZumaDeluxe_genre").innerHTML = ZumaDeluxe.genre;
document.getElementById("ZumaDeluxe_platform").innerHTML = ZumaDeluxe.platform;
// QATQ
document.getElementById("QATQ_Logo").setAttribute("src", QATQ.logo);
document.getElementById("QATQ_Logo").setAttribute("alt", "QATQ Logo");
document.getElementById("QATQ_name").innerHTML = QATQ.name;
document.getElementById("QATQ_genre").innerHTML = QATQ.genre;
document.getElementById("QATQ_platform").innerHTML = QATQ.platform;
// Vampyr
document.getElementById("Vampyr_Logo").setAttribute("src", Vampyr.logo);
document.getElementById("Vampyr_Logo").setAttribute("alt", "Vampyr Logo");
document.getElementById("Vampyr_name").innerHTML = Vampyr.name;
document.getElementById("Vampyr_genre").innerHTML = Vampyr.genre;
document.getElementById("Vampyr_platform").innerHTML = Vampyr.platform;
// SOT
document.getElementById("SOT_Logo").setAttribute("src", SOT.logo);
document.getElementById("SOT_Logo").setAttribute("alt", "SOT Logo");
document.getElementById("SOT_name").innerHTML = SOT.name;
document.getElementById("SOT_genre").innerHTML = SOT.genre;
document.getElementById("SOT_platform").innerHTML = SOT.platform;
// Xenonauts
document.getElementById("Xenonauts_Logo").setAttribute("src", Xenonauts.logo);
document.getElementById("Xenonauts_Logo").setAttribute("alt", "Xenonauts Logo");
document.getElementById("Xenonauts_name").innerHTML = Xenonauts.name;
document.getElementById("Xenonauts_genre").innerHTML = Xenonauts.genre;
document.getElementById("Xenonauts_platform").innerHTML = Xenonauts.platform;
// YuGi
document.getElementById("YuGi_Logo").setAttribute("src", YuGi.logo);
document.getElementById("YuGi_Logo").setAttribute("alt", "YuGi Logo");
document.getElementById("YuGi_name").innerHTML = YuGi.name;
document.getElementById("YuGi_genre").innerHTML = YuGi.genre;
document.getElementById("YuGi_platform").innerHTML = YuGi.platform;
