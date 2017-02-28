/*---------------------------------
ui.js

Functions for updating various UI
tabs and panels.
----------------------------------*/

Game.drawActivePanel = function() {
  Game.updateTitleBar();
  switch(Game.activePanel) {
    case "playerTable":
      Game.createPlayerTab(); break;
    case "combatTable":
      Game.createCombatTab(); break;
    case "zoneTable":
      Game.createZoneTab(); break;
    case "skillsTable":
      Game.createSkillsTab(); break;
    case "inventoryTable":
      Game.createInventoryTab(); break;
    case "storeTable":
      Game.createForgeTab();
      Game.createShopTab();
      break;
    case "optionsTable":
      Game.createOptionsTab();
      break;
    case "badgeTable":
      Game.createBadgeTab();
      break;
  }
}
Game.updateTitleBar = function() {
  var seeds = document.getElementById("seedsOut");
  seeds.innerHTML = abbreviateNumber(Game.p_Currency);
  seeds.setAttribute("title", Game.p_Currency);
  var scrap = document.getElementById("scrapOut");
  scrap.innerHTML = abbreviateNumber(Game.p_Scrap);
  scrap.setAttribute("title", Game.p_Scrap);
}
Game.createPlayerTab = function() {
  var playerInfoPanel = document.getElementById("playerInfoPanel");
  playerInfoPanel.innerHTML = "";
  playerInfoPanel.appendChild(Game.createPlayerUIPanel());
  if(Game.p_StatPoints > 0) {
    playerInfoPanel.appendChild(Game.createStatPointPanel());
  }
  var playerEQPanel = document.getElementById("playerEquipmentPanel");
  playerEQPanel.innerHTML = "";
  playerEQPanel.appendChild(Game.createWeaponUIPanel(Game.p_Weapon, "player"));
  playerEQPanel.appendChild(Game.createArmourUIPanel(Game.p_Armour, "player"));
  // Statistics outputs. There's going to be a LOT of these.
  var statPanel = document.getElementById("statsOut");
  statPanel.innerHTML = "";
  statPanel.appendChild(Game.createStatisticPanel("Total Damage Dealt", Game.TRACK_TOTAL_DMG, "player_stat1"));
  statPanel.appendChild(Game.createStatisticPanel("Melee Damage Dealt", Game.TRACK_MELEE_DMG, "player_stat2"));
  statPanel.appendChild(Game.createStatisticPanel("Ranged Damage Dealt", Game.TRACK_RANGE_DMG, "player_stat3"));
  statPanel.appendChild(Game.createStatisticPanel("Magic Damage Dealt", Game.TRACK_MAGIC_DMG, "player_stat4"));
  statPanel.appendChild(Game.createStatisticPanel("Total Damage Taken", Game.TRACK_TOTAL_TAKEN, "player_stat5"));
  statPanel.appendChild(Game.createStatisticPanel("Melee Damage Taken", Game.TRACK_MELEE_TAKEN, "player_stat6"));
  statPanel.appendChild(Game.createStatisticPanel("Ranged Damage Taken", Game.TRACK_RANGE_TAKEN, "player_stat7"));
  statPanel.appendChild(Game.createStatisticPanel("Magic Damage Taken", Game.TRACK_MAGIC_TAKEN, "player_stat8"));
  statPanel.appendChild(Game.createStatisticPanel("Attacks Used", Game.TRACK_ATTACKS_OUT, "player_stat9"));
  statPanel.appendChild(Game.createStatisticPanel("Attacks Taken", Game.TRACK_ATTACKS_IN, "player_stat10"));
  statPanel.appendChild(Game.createStatisticPanel("Battles Won", Game.TRACK_WINS, "player_stat11"));
  statPanel.appendChild(Game.createStatisticPanel("Battles Lost", Game.TRACK_LOSSES, "player_stat12"));
  statPanel.appendChild(Game.createStatisticPanel("Battles Fled", Game.TRACK_ESCAPES, "player_stat13"));
  statPanel.appendChild(Game.createStatisticPanel("Current Win Streak", Game.TRACK_WIN_STREAK, "player_stat14"));
  statPanel.appendChild(Game.createStatisticPanel("Burst Attacks Used", Game.TRACK_BURSTS, "player_stat15"));
  statPanel.appendChild(Game.createStatisticPanel("Elites / Bosses Defeated", Game.TRACK_BOSS_KILLS, "player_stat16"));
  statPanel.appendChild(Game.createStatisticPanel("Highest Elite Chance", Game.TRACK_BOSS_CHANCE + "%", "player_stat17"));
  statPanel.appendChild(Game.createStatisticPanel("Largest Hit Dealt", Game.TRACK_MAXHIT_OUT, "player_stat18"));
  statPanel.appendChild(Game.createStatisticPanel("Largest Hit Taken", Game.TRACK_MAXHIT_IN, "player_stat19"));
  statPanel.appendChild(Game.createStatisticPanel("Total Experience Gained", Game.TRACK_XP_GAINED, "player_stat20"));
  statPanel.appendChild(Game.createStatisticPanel("Experience Lost", Game.TRACK_XP_LOST, "player_stat21"));
  statPanel.appendChild(Game.createStatisticPanel("Experience Overflow Pool", Game.TRACK_XP_OVERFLOW, "player_stat22"));
  statPanel.appendChild(Game.createStatisticPanel("Item Upgrades Bought", Game.TRACK_UPGRADES, "player_stat23"));
  statPanel.appendChild(Game.createStatisticPanel("Reforges Bought", Game.TRACK_REFORGES, "player_stat24"));
  statPanel.appendChild(Game.createStatisticPanel("Power/Stat Point Resets", Game.TRACK_RESETS, "player_stat25"));
  statPanel.appendChild(Game.createStatisticPanel("Items Sold", Game.TRACK_ITEM_SALES, "player_stat26"));
  statPanel.appendChild(Game.createStatisticPanel("Items Scrapped", Game.TRACK_ITEM_SCRAPS, "player_stat27"));
  statPanel.appendChild(Game.createStatisticPanel("Items Discarded", Game.TRACK_ITEM_DISCARDS, "player_stat28"));
  statPanel.appendChild(Game.createStatisticPanel("Items Broken in Combat", Game.TRACK_BROKEN_ITEMS, "player_stat29"));
  statPanel.appendChild(Game.createStatisticPanel("Seeds Gained from Combat", Game.TRACK_COMBAT_SEEDS, "player_stat30"));
  statPanel.appendChild(Game.createStatisticPanel("Seeds Gained from Sales", Game.TRACK_SALE_SEEDS, "player_stat31"));
  statPanel.appendChild(Game.createStatisticPanel("Scrap Gained from Combat", Game.TRACK_COMBAT_SCRAP, "player_stat32"));
  statPanel.appendChild(Game.createStatisticPanel("Scrap Gained from Conversion", Game.TRACK_CONVERT_SCRAP, "player_stat33"));
  statPanel.appendChild(Game.createStatisticPanel("Debuffs Applied", Game.TRACK_DEBUFFS_OUT, "player_stat34"));
  statPanel.appendChild(Game.createStatisticPanel("Debuffs Suffered", Game.TRACK_DEBUFFS_IN, "player_stat35"));
  statPanel.appendChild(Game.createStatisticPanel("Successful Dooms Used", Game.TRACK_DOOM_OUT, "player_stat36"));
  statPanel.appendChild(Game.createStatisticPanel("Successful Dooms Suffered", Game.TRACK_DOOM_IN, "player_stat37"));
  statPanel.appendChild(Game.createStatisticPanel("Enemies Awoken from Sleep", Game.TRACK_SLEEPBREAK_OUT, "player_stat38"));
  statPanel.appendChild(Game.createStatisticPanel("Times Awoken from Sleep", Game.TRACK_SLEEPBREAK_IN, "player_stat39"));
  statPanel.appendChild(Game.createStatisticPanel("Health Drained from Enemies", Game.TRACK_DRAIN_IN, "player_stat40"));
  statPanel.appendChild(Game.createStatisticPanel("Health Drained by Enemies", Game.TRACK_DRAIN_OUT, "player_stat41"));
  statPanel.appendChild(Game.createStatisticPanel("Damage Dealt with DoTs", Game.TRACK_DOTS_OUT, "player_stat42"));
  statPanel.appendChild(Game.createStatisticPanel("Damage Taken from DoTs", Game.TRACK_DOTS_IN, "player_stat43"));
  statPanel.appendChild(Game.createStatisticPanel("Times Confused", Game.TRACK_CHARM_IN, "player_stat44"));
  statPanel.appendChild(Game.createStatisticPanel("Enemies Confused", Game.TRACK_CHARM_OUT, "player_stat45"));
  statPanel.appendChild(Game.createStatisticPanel("Your Hits Lost to Paralysis", Game.TRACK_PARAHAX_IN, "player_stat46"));
  statPanel.appendChild(Game.createStatisticPanel("Enemy Hits Lost to Paralysis", Game.TRACK_PARAHAX_OUT, "player_stat47"));
  statPanel.appendChild(Game.createStatisticPanel("Potions Used", Game.TRACK_POTIONS_USED, "player_stat48"));
  statPanel.appendChild(Game.createStatisticPanel("Badges Earned", Game.playerBadges.length, "player_stat49"));
  statPanel.appendChild(Game.createStatisticPanel("Prestige Level", Game.prestigeLevel, "player_stat50"));
}
Game.createCombatTab = function() {
  var playerCombatPanel = document.getElementById("playerCombatPanel");
  playerCombatPanel.innerHTML = "";
  playerCombatPanel.appendChild(Game.createPlayerCombatPanel());
  var enemyCombatPanel = document.getElementById("enemyCombatPanel");
  enemyCombatPanel.innerHTML = "";
  enemyCombatPanel.appendChild(Game.createEnemyCombatPanel());
  var playerCombatWeaponPanel = document.getElementById("playerCombatWeaponPanel");
  playerCombatWeaponPanel.innerHTML = "";
  playerCombatWeaponPanel.appendChild(Game.createWeaponUIPanel(Game.p_Weapon, "combat"));
  var playerCombatArmourPanel = document.getElementById("playerCombatArmourPanel");
  playerCombatArmourPanel.innerHTML = "";
  playerCombatArmourPanel.appendChild(Game.createArmourUIPanel(Game.p_Armour, "combat"));
  var enemyCombatWeaponPanel = document.getElementById("enemyCombatWeaponPanel");
  var enemyCombatArmourPanel = document.getElementById("enemyCombatArmourPanel");
  if(Game.p_State == Game.STATE_COMBAT) {
    enemyCombatWeaponPanel.innerHTML = "";
    enemyCombatWeaponPanel.appendChild(Game.createWeaponUIPanel(Game.e_Weapon, "combat"));
    enemyCombatArmourPanel.innerHTML = "";
    enemyCombatArmourPanel.appendChild(Game.createArmourUIPanel(Game.e_Armour, "combat"));
  }
  else {
    enemyCombatWeaponPanel.innerHTML = "";
    enemyCombatArmourPanel.innerHTML = "";
  }

  // Some logic
  // 100 to 75%: Green
  // 75 to 50%: Yellow
  // 50 to 25%: Orange
  // 25 to 0%: Red
  var PHB = document.getElementById("playerHPBar");
  var PH_Percent = Game.p_HP/Game.p_MaxHP;
  if(PH_Percent < 0.25) { PHB.style.background = "#dd0000"; }
  else if(PH_Percent < 0.5) { PHB.style.background = "#dd7700"; }
  else if(PH_Percent < 0.75) { PHB.style.background = "#dddd00"; }
  else { PHB.style.background = "#33cc33"; }
  PHB.style.width = (100 * PH_Percent) + "%";
  var EHB = document.getElementById("enemyHPBar");
  if(Game.p_State !== Game.STATE_COMBAT) { EHB.style.display = "none"; }
  else {
    EHB.style.display = "";
    var EH_Percent = Game.e_HP/Game.e_MaxHP;
    if(EH_Percent < 0.25) { EHB.style.background = "#dd0000"; }
    else if(EH_Percent < 0.5) { EHB.style.background = "#dd7700"; }
    else if(EH_Percent < 0.75) { EHB.style.background = "#dddd00"; }
    else { EHB.style.background = "#33cc33"; }
    EHB.style.width = (100 * EH_Percent) + "%";
  }
}
Game.createZoneTab = function() {
  var cz = document.getElementById("currentZone");
  cz.innerHTML = "";
  cz.appendChild(Game.createZonePanel(Game.p_currentZone,true));
  var zl = document.getElementById("zoneList");
  zl.innerHTML = "";
  for(var x = 0; x < Game.ZONE_MIN_LEVEL.length; x++) {
    zl.appendChild(Game.createZonePanel(x));
  }
}
Game.createSkillsTab = function() {
  //The Skills Panel
  //This bit is important - we set in other functions whether the power panel needs rebuilding, because mass DOM changes cause lag problems when they're done once a second.
  if(Game.updateSkills) {
    var avail = document.getElementById("availableSkills");
    avail.style.display = Game.p_SkillPoints == 0 ? "none" : "";
    var avail2 = document.getElementById("availableSkillsHeader");
    avail2.style.display = Game.p_SkillPoints == 0 ? "none" : "";
    var powerPointCounter = document.getElementById("powerPointsOut");
    powerPointCounter.innerHTML = Game.p_SkillPoints;
    // Clear the panes
    var offensePane = document.getElementById("available_area_offense");
    offensePane.innerHTML = "";
    var defensePane = document.getElementById("available_area_defense");
    defensePane.innerHTML = "";
    var supportPane = document.getElementById("available_area_support");
    supportPane.innerHTML = "";
    var specialPane = document.getElementById("available_area_special");
    specialPane.innerHTML = "";
    for(var x = 0; x < Game.SKILL_LIST.length; x++) {
      var available = true;
      var viewable = true;
      var subsidiary = false;
      var basePower = -1;
      // Step 1: Determine if this is a subsidiary power.
      if(Game.SKILL_LIST[x][2].toString().length > 3) {
        //SKILL_LIST[x][2] is the constant for the power. If it's more than 3 chars long, it's a subsidiary!
        // Now... we check the level of the base power!
        subsidiary = true;
        basePower = Math.floor(Game.SKILL_LIST[x][2] / 10);
        if(Game.powerLevel(basePower) != Game.getPowerLevelCap(basePower)) {
          // The base power isn't capped, we can't buy this
          available = false;
          viewable = false;
        }
        if(Game.SKILL_LIST[x][2] == Game.SKILL_ABSORPTION_SHIELD) {
          if(Game.powerLevel(Game.SKILL_REFLECTIVE_SHIELD) > 0) {
            available = false;
          }
        }
        if(Game.SKILL_LIST[x][2] == Game.SKILL_REFLECTIVE_SHIELD) {
          if(Game.powerLevel(Game.SKILL_ABSORPTION_SHIELD) > 0) {
            available = false;
          }
        }
      }
      if(Game.powerLevel(Game.SKILL_LIST[x][2]) == Game.getPowerLevelCap(Game.SKILL_LIST[x][2])) {
        viewable = false;
      }
      if(viewable) {
        var powerPane = null;
        switch(Game.SKILL_LIST[x][2].toString().substring(0,3)) {
          case "101":
            powerPane = offensePane;
            break;
          case "102":
            powerPane = defensePane;
            break;
          case "103":
            powerPane = supportPane;
            break;
          case "104":
            powerPane = specialPane;
            break;
        }
        powerPane.appendChild(Game.createPowerUIPanel(Game.SKILL_LIST[x][2], basePower, Game.powerLevel(Game.SKILL_LIST[x][2]), available, true));
      }
    }
    var purchasedPowers = document.getElementById("purchased_area");
    purchasedPowers.innerHTML = "";
    for(var y = 0; y < Game.p_Powers.length; y++) {
      purchasedPowers.appendChild(Game.createPowerUIPanel(Game.p_Powers[y][0], -1, Game.p_Powers[y][1], true, false));
    }
    Game.updateSkills = false;
  }
}
Game.createInventoryTab = function() {
  if(Game.updateInventory) {
    var invPanel = document.getElementById("weaponOut");
    invPanel.innerHTML = "";
    if(Game.p_WeaponInventory.length > 0) { document.getElementById("weaponCache").style.display = ""; }
    else { document.getElementById("weaponCache").style.display = "none"; }
    for(var x = 0; x < Game.p_WeaponInventory.length; x++) {
      // Table row
      invPanel.appendChild(Game.createWeaponUIPanel(Game.p_WeaponInventory[x],"inventory",x));
    }
    // Armour panel
    invPanel = document.getElementById("armourOut");
    invPanel.innerHTML = "";
    if(Game.p_ArmourInventory.length > 0) { document.getElementById("armourCache").style.display = ""; }
    else { document.getElementById("armourCache").style.display = "none"; }
    for(var y = 0; y < Game.p_ArmourInventory.length; y++) {
      invPanel.appendChild(Game.createArmourUIPanel(Game.p_ArmourInventory[y],"inventory",y));
    }
    // Enemy loot panel
    invPanel = document.getElementById("enemyInvOut");
    invPanel.innerHTML = "";
    if(Game.last_Weapon.length > 0 || Game.last_Armour.length > 0) {
      document.getElementById("enemyItems").style.display = "";
    }
    else { document.getElementById("enemyItems").style.display = "none";
    }
    if(Game.last_Weapon.length > 0) {
      invPanel.appendChild(Game.createWeaponUIPanel(Game.last_Weapon,"enemyInventory"));
    }
    if(Game.last_Armour.length > 0) {
      invPanel.appendChild(Game.createArmourUIPanel(Game.last_Armour,"enemyInventory"));
    }
    Game.updateInventory = false;
  }
}
Game.createForgeTab = function() {
  if(Game.updateForge) {
    var wPanelOut = document.getElementById("weaponPanelOut");
    wPanelOut.innerHTML = "";
    wPanelOut.appendChild(Game.createWeaponUIPanel(Game.p_Weapon, "forge"));
    var aPanelOut = document.getElementById("armourPanelOut");
    aPanelOut.innerHTML = "";
    wPanelOut.appendChild(Game.createArmourUIPanel(Game.p_Armour, "forge"));
    var reforgePanelOut = document.getElementById("debuffList");
    reforgePanelOut.innerHTML = "";
    for(var x = -1; x < 10; x++) {
      reforgePanelOut.appendChild(Game.createForgePanel(Game.DEBUFF_SHRED + x));
    }
  }
  Game.updateForge = false;
}
Game.createShopTab = function() {
  var sw = document.getElementById("storeWeapons");
  sw.innerHTML = "";
  for(var x = 0; x < Game.p_WeaponShopStock.length; x++) {
    sw.appendChild(Game.createWeaponUIPanel(Game.p_WeaponShopStock[x], "shop", x));
  }
  var sa = document.getElementById("storeArmour");
  sa.innerHTML = "";
  for(var x = 0; x < Game.p_ArmourShopStock.length; x++) {
    sa.appendChild(Game.createArmourUIPanel(Game.p_ArmourShopStock[x], "shop", x));
  }
}
Game.createOptionsTab = function() {
  var abHook = document.getElementById("autoBattleHook");
  abHook.innerHTML = "";
  abHook.appendChild(Game.createABOptionPanel());
  var asHook = document.getElementById("autoSellHook");
  asHook.innerHTML = "";
  asHook.appendChild(Game.createASOptionPanel());
  var saveHook = document.getElementById("saveHook");
  saveHook.innerHTML = "";
  saveHook.appendChild(Game.createSavePanel());
}
Game.createBadgeTab = function() {
  var badgePanel = document.getElementById("badgeList");
  badgePanel.innerHTML = "";
  for(var x = 0; x < Game.BADGE_LIST.length; x++) {
    badgePanel.appendChild(Game.createBadgePanel(x));
  }
}
Game.combatLog = function(combatant, message) {
  var d = document.createElement("div");
  d.setAttribute("class",combatant);
  var x = document.createElement("span");
  var ct = new Date();
  x.innerHTML = message;
  //x.innerHTML = "<span style='font-weight:bold;'>[" + Game.padLeft(ct.getHours(),2) + ":" + Game.padLeft(ct.getMinutes(),2) + ":" + Game.padLeft(ct.getSeconds(),2) + "]</span> " + message;
  d.appendChild(x);
  var logBox = document.getElementById("logBody");
  logBox.appendChild(d);
}
Game.showPanel = function(panelID) {
  var panelList = document.getElementsByTagName("table");
  var initPanel = document.getElementById("initTable");
  for(var x = 0; x < panelList.length; x++) {
    if(panelList[x].id !== "initTable" && panelList[x].id == panelID) {
      panelList[x].style.display = "";
      var tabHeader = document.getElementById(panelList[x].id.slice(0,-2));
      tabHeader.style.backgroundColor = "#991010";
      tabHeader.style.color = "#ffffff";
      tabHeader.style.fontWeight = "bold";
    }
    else if(panelList[x].id !== "initTable" && panelList[x].id.match(/(\w+)Table/g) !== null) {
      panelList[x].style.display = "none";
      var tabHeader = document.getElementById(panelList[x].id.slice(0,-2));
      tabHeader.style.backgroundColor = "";
      tabHeader.style.color = "";
      tabHeader.style.fontWeight = "";
    }
  }
  Game.activePanel = panelID;
  initPanel.style.display = "none";
  switch(panelID) {
    case "inventoryTable": Game.updateInventory = true; break;
    case "powersTable": Game.updateSkills = true; break;
    case "forgeTable": Game.updateForge = true; break;
  }
  Game.drawActivePanel();
}
Game.toastNotification = function(message) {
  Game.toastQueue.push(message);
  if(Game.toastTimer == null) {
    Game.showMessage();
  }
}
Game.showMessage = function() {
  var toastFrame = document.getElementById("saveToast");
  if(Game.toastQueue.length == 0) {
    toastFrame.style.display = "none";
    window.clearTimeout(Game.toastTimer);
    Game.toastTimer = null;
	}
  else {
    var toast = document.getElementById("toastContent");
    toast.innerHTML = Game.toastQueue.shift()
    toastFrame.style.display = "";
    Game.toastTimer = window.setTimeout(Game.showMessage, 2000);
  }
}
Game.buildArmourEffectString = function(effect) {
  var returnBlock = document.createElement("span");
  if(effect === undefined) {
    returnBlock.setAttribute("style","");
    returnBlock.innerHTML = "&nbsp;";
    return returnBlock;
  }
  switch(effect[0]) {
    case Game.ARMOUR_STR_MELEE:
      returnBlock.setAttribute("style","color:#33cc33;");
      returnBlock.innerHTML = "+" + effect[1] + " Melee Resist";
      break;
    case Game.ARMOUR_STR_RANGE:
      returnBlock.setAttribute("style","color:#33cc33;");
      returnBlock.innerHTML = "+" + effect[1] + " Range Resist";
      break;
    case Game.ARMOUR_STR_MAGIC:
      returnBlock.setAttribute("style","color:#33cc33;");
      returnBlock.innerHTML = "+" + effect[1] + " Magic Resist";
      break;
    case Game.ARMOUR_VULN_MELEE:
      returnBlock.setAttribute("style","color:red;");
      returnBlock.innerHTML = "-" + effect[1] + " Melee Resist";
      break;
    case Game.ARMOUR_VULN_RANGE:
      returnBlock.setAttribute("style","color:red;");
      returnBlock.innerHTML = "-" + effect[1] + " Range Resist";
      break;
    case Game.ARMOUR_VULN_MAGIC:
      returnBlock.setAttribute("style","color:red;");
      returnBlock.innerHTML = "-" + effect[1] + " Magic Resist";
      break;
    default:
      returnBlock.setAttribute("style","");
      returnBlock.innerHTML = "&nbsp;";
      break;
  }
  return returnBlock;
}
Game.updateActivePanel = function() {
  // This function is for direct updating of panels on certain frequently updated screens, which results in less CPU usage and more responsive UI on all screens (regenerating the UI causes weird problems with clicking buttons, manual updates are usually tied to button presses, but the idle ticker is the biggest problem...)
  Game.updateTitleBar();
  switch(Game.activePanel) {
    case "combatTable":
      Game.updateCombatTab(); break;
    case "playerTable":
      Game.updatePlayerTab(); break;
  }
}
Game.updateCombatTab = function() {
  // Player Panel
  var playerName = document.getElementById("combat_playerName");
  if(playerName !== null) { playerName.innerHTML = Game.p_Name; }
  var playerLevel = document.getElementById("combat_playerLevel");
  if(playerLevel !== null) { playerLevel.innerHTML = "Level " + Game.p_Level; }
  var playerHP = document.getElementById("combat_playerHP");
  if(playerHP !== null) { playerHP.innerHTML = "HP: " + prettifyNumber(Game.p_HP) + " / " + prettifyNumber(Game.p_MaxHP) + " (" + Math.floor(Game.p_HP / Game.p_MaxHP * 10000)/100 + "%)"; }
  var playerDebuff = document.getElementById("combat_playerDebuff");
  if(playerDebuff !== null) { playerDebuff.innerHTML = "<strong>Debuff:</strong> " + Game.p_Debuff[1] + "(" + Game.debuff_names[Game.p_Debuff[0]-Game.DEBUFF_SHRED] + ") - " + Game.player_debuffTimer + "s"; }
  var playerBurst = document.getElementById("combat_burstButton");
  if(playerBurst !== null) { playerBurst.innerHTML = Game.p_specUsed ? "Burst Unavailable" : (Game.powerLevel(Game.SKILL_WILD_SWINGS) > 0 ? "Wild Swings" : "Burst Attack"); }
  // Player Weapon (Durability)
  var playerWeaponDurability = document.getElementById("combat_playerWeaponDurability");
  if(playerWeaponDurability !== null) { playerWeaponDurability.innerHTML = Game.p_Weapon[8] + " uses"; }
  // Player Armour (Durability)
  var playerArmourDurability = document.getElementById("combat_playerArmourDurability");
  if(playerArmourDurability !== null) { playerArmourDurability.innerHTML = Game.p_Armour[3] + " uses"; }
  // Enemy Panel
  //  - Enemy HP
  var enemyHP = document.getElementById("combat_enemyHealth");
  if(enemyHP !== null) { enemyHP.innerHTML = Game.p_State == Game.STATE_COMBAT ? ("HP: " + prettifyNumber(Game.e_HP) + " / " + prettifyNumber(Game.e_MaxHP) + " (" + Math.floor(Game.e_HP / Game.e_MaxHP * 10000)/100 + "%)") : "Elite Appearance Chance: " + Game.bossChance + "%"; }
  //  - Enemy Debuff
  var enemyDebuff = document.getElementById("combat_enemyDebuff");
  if(enemyDebuff !== null) { enemyDebuff.innerHTML = "<strong>Debuff:</strong> " + Game.e_Debuff[1] + "(" + Game.debuff_names[Game.e_Debuff[0]-Game.DEBUFF_SHRED] + ") - " + Game.enemy_debuffTimer + "s"; }
  // HP Bars
  var PHB = document.getElementById("playerHPBar");
  var PH_Percent = Game.p_HP/Game.p_MaxHP;
  if(PH_Percent < 0.25) { PHB.style.background = "#dd0000"; }
  else if(PH_Percent < 0.5) { PHB.style.background = "#dd7700"; }
  else if(PH_Percent < 0.75) { PHB.style.background = "#dddd00"; }
  else { PHB.style.background = "#33cc33"; }
  PHB.style.MozTransition = "width 0.5s";
  PHB.style.WebkitTransition = "width 0.5s";
  PHB.style.width = (100 * PH_Percent) + "%";
  var EHB = document.getElementById("enemyHPBar");
  if(Game.p_State !== Game.STATE_COMBAT) { EHB.style.display = "none"; }
  else {
    EHB.style.display = "";
    var EH_Percent = Game.e_HP/Game.e_MaxHP;
    if(EH_Percent < 0.25) { EHB.style.background = "#dd0000"; }
    else if(EH_Percent < 0.5) { EHB.style.background = "#dd7700"; }
    else if(EH_Percent < 0.75) { EHB.style.background = "#dddd00"; }
    else { EHB.style.background = "#33cc33"; }
    EHB.style.MozTransition = "width 0.5s";
    EHB.style.WebkitTransition = "width 0.5s";
    EHB.style.width = (100 * EH_Percent) + "%";
  }
}
Game.updatePlayerTab = function() {
  // TODO: Fill
  // This tab uses the following controls - updatable items in brackets:
  // Player UI Panel (level, hp, max hp, xp, xp to level, sp, pp, str, dex, int, con, seeds, scrap)
  var levelSection = document.getElementById("player_level");
  levelSection.innerHTML = "Level " + Game.p_Level;
  var HPSection = document.getElementById("player_hpmaxhp");
  HPSection.innerHTML = "<strong>HP:</strong> " + prettifyNumber(Game.p_HP) + " / " + prettifyNumber(Game.p_MaxHP) + " (" + Math.floor(Game.p_HP / Game.p_MaxHP * 10000)/100 + "%)";
  var XPSection = document.getElementById("player_xpmaxxp");
  XPSection.innerHTML = "<strong>XP:</strong> " + Game.p_EXP + " / " + Game.p_NextEXP + " (" + Math.floor(Game.p_EXP / Game.p_NextEXP * 10000)/100 + "%)";
  var STRSection = document.getElementById("player_UIStr");
  STRSection.innerHTML = "<strong>STR:</strong> " + Game.p_Str;
  var DEXSection = document.getElementById("player_UIDex");
  DEXSection.innerHTML = "<strong>DEX:</strong> " + Game.p_Dex;
  var INTSection = document.getElementById("player_UIInt");
  INTSection.innerHTML = "<strong>INT:</strong> " + Game.p_Int;
  var CONSection = document.getElementById("player_UICon");
  CONSection.innerHTML = "<strong>CON:</strong> " + Game.p_Con;
  var unspentSPSection = document.getElementById("player_UISP");
  unspentSPSection.innerHTML = "<strong>Stat Points:</strong> " + Game.p_StatPoints;
  var unspentPPSection = document.getElementById("player_UIPP");
  unspentPPSection.innerHTML = "<strong>Skill Points:</strong> " + Game.p_SkillPoints;
  var seedsSection = document.getElementById("player_UISeeds");
  seedsSection.innerHTML = "<strong>Seeds:</strong> " + Game.p_Currency;
  var scrapSection = document.getElementById("player_UIScrap");
  scrapSection.innerHTML = "<strong>Scrap:</strong> " + Game.p_Scrap;
  // Stat Point Panel (available points)
  var statPointPanel = document.getElementById("player_statPointsLeft");
  if(statPointPanel !== null) { statPointPanel.innerHTML = "Stat Points (" + Game.p_StatPoints + " left)"; }
  // Tracking panel values
  // Modify this so that we don't have to redraw the panels every time.
  updateElementIDContent("player_stat1", Game.TRACK_TOTAL_DMG);
  updateElementIDContent("player_stat2", Game.TRACK_MELEE_DMG);
  updateElementIDContent("player_stat3", Game.TRACK_RANGE_DMG);
  updateElementIDContent("player_stat4", Game.TRACK_MAGIC_DMG);
  updateElementIDContent("player_stat5", Game.TRACK_TOTAL_TAKEN);
  updateElementIDContent("player_stat6", Game.TRACK_MELEE_TAKEN);
  updateElementIDContent("player_stat7", Game.TRACK_RANGE_TAKEN);
  updateElementIDContent("player_stat8", Game.TRACK_MAGIC_TAKEN);
  updateElementIDContent("player_stat9", Game.TRACK_ATTACKS_OUT);
  updateElementIDContent("player_stat10", Game.TRACK_ATTACKS_IN);
  updateElementIDContent("player_stat11", Game.TRACK_WINS);
  updateElementIDContent("player_stat12", Game.TRACK_LOSSES);
  updateElementIDContent("player_stat13", Game.TRACK_ESCAPES);
  updateElementIDContent("player_stat14", Game.TRACK_WIN_STREAK);
  updateElementIDContent("player_stat15", Game.TRACK_BURSTS);
  updateElementIDContent("player_stat16", Game.TRACK_BOSS_KILLS);
  updateElementIDContent("player_stat17", Game.TRACK_BOSS_CHANCE + "%");
  updateElementIDContent("player_stat18", Game.TRACK_MAXHIT_OUT);
  updateElementIDContent("player_stat19", Game.TRACK_MAXHIT_IN);
  updateElementIDContent("player_stat20", Game.TRACK_XP_GAINED);
  updateElementIDContent("player_stat21", Game.TRACK_XP_LOST);
  updateElementIDContent("player_stat22", Game.TRACK_XP_OVERFLOW);
  updateElementIDContent("player_stat23", Game.TRACK_UPGRADES);
  updateElementIDContent("player_stat24", Game.TRACK_REFORGES);
  updateElementIDContent("player_stat25", Game.TRACK_RESETS);
  updateElementIDContent("player_stat26", Game.TRACK_ITEM_SALES);
  updateElementIDContent("player_stat27", Game.TRACK_ITEM_SCRAPS);
  updateElementIDContent("player_stat28", Game.TRACK_ITEM_DISCARDS);
  updateElementIDContent("player_stat29", Game.TRACK_BROKEN_ITEMS);
  updateElementIDContent("player_stat30", Game.TRACK_COMBAT_SEEDS);
  updateElementIDContent("player_stat31", Game.TRACK_SALE_SEEDS);
  updateElementIDContent("player_stat32", Game.TRACK_COMBAT_SCRAP);
  updateElementIDContent("player_stat33", Game.TRACK_CONVERT_SCRAP);
  updateElementIDContent("player_stat34", Game.TRACK_DEBUFFS_OUT);
  updateElementIDContent("player_stat35", Game.TRACK_DEBUFFS_IN);
  updateElementIDContent("player_stat36", Game.TRACK_DOOM_OUT);
  updateElementIDContent("player_stat37", Game.TRACK_DOOM_IN);
  updateElementIDContent("player_stat38", Game.TRACK_SLEEPBREAK_OUT);
  updateElementIDContent("player_stat39", Game.TRACK_SLEEPBREAK_IN);
  updateElementIDContent("player_stat40", Game.TRACK_DRAIN_IN);
  updateElementIDContent("player_stat41", Game.TRACK_DRAIN_OUT);
  updateElementIDContent("player_stat42", Game.TRACK_DOTS_OUT);
  updateElementIDContent("player_stat43", Game.TRACK_DOTS_IN);
  updateElementIDContent("player_stat44", Game.TRACK_CHARM_IN);
  updateElementIDContent("player_stat45", Game.TRACK_CHARM_OUT);
  updateElementIDContent("player_stat46", Game.TRACK_PARAHAX_IN);
  updateElementIDContent("player_stat47", Game.TRACK_PARAHAX_OUT);
  updateElementIDContent("player_stat48", Game.TRACK_POTIONS_USED);
  updateElementIDContent("player_stat49", Game.playerBadges.length);
  updateElementIDContent("player_stat50", Game.prestigeLevel);
  // Player Weapon (Durability)
  var playerWeaponDurability = document.getElementById("combat_playerWeaponDurability");
  if(playerWeaponDurability !== null) { playerWeaponDurability.innerHTML = Game.p_Weapon[8] + " uses"; }
  // Player Armour (Durability)
  var playerArmourDurability = document.getElementById("combat_playerArmourDurability");
  if(playerArmourDurability !== null) { playerArmourDurability.innerHTML = Game.p_Armour[3] + " uses"; }
}
document.getElementById("loadedUI").style.display = "";