Game.buyPower = function(power) {
  if(Game.p_PP > 0) {
    var selectionLevel = Game.powerLevel(power);
    var canUpgrade = true;
    switch(power) {
      case Game.SKILL_ABSORPTION_SHIELD:
      case Game.SKILL_REFLECTIVE_SHIELD:
      case Game.BOOST_MORESCRAP:
      case Game.BOOST_BONUSDMG:
      case Game.BOOST_NOWEAKNESS:
      case Game.BOOST_OVERFLOW:
      case Game.BOOST_HEALINGPOTION:
      case Game.BOOST_DEBUFFPOTION:
        if(selectionLevel === 1) {
          Game.toastNotification("This power is at maximum level.");
          canUpgrade = false;
        }
        break;
      case Game.BOOST_SPEED:
      case Game.BOOST_REGEN:
      case Game.SKILL_FAST_LEARNER:
      case Game.SKILL_DIVINE_SHIELD:
      case Game.SKILL_PROPER_CARE:
      case Game.SKILL_PICKPOCKET:
      case Game.SKILL_LUCK_OF_THE_DRAW:
      case Game.BOOST_DOUBLE:
      case Game.BOOST_DAMAGE:
      case Game.BOOST_DEFENCE:
      case Game.BOOST_DEBUFF:
      case Game.BOOST_PRICES:
      case Game.BOOST_MULTIPOTION:
        if(selectionLevel === 10) {
          Game.toastNotification("This power is at maximum level.");
          canUpgrade = false;
        }
        break;
      case Game.BOOST_DEBUFFBURST: {
        if(selectionLevel === 4) {
          Game.toastNotification("This power is at maximum level.");
          canUpgrade = false;
        }
      }
      default:
        if(selectionLevel === 5) {
          Game.toastNotification("This power is at maximum level.");
          canUpgrade = false;
        }
    }
    if(canUpgrade) {
      switch(power) {
        case Game.SKILL_HANGING_BY_A_THREAD:
          // Hanging by a Thread
          if(Game.powerLevel(Game.SKILL_PROPER_CARE) < 10) {
            Game.toastNotification("You need maximum level in Proper Care to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_HIGH_MAINTENANCE) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with High Maintenance.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_MASTER_TINKERER) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Master Tinkerer.");
            canUpgrade = false;
          }
          break;
        case Game.SKILL_HIGH_MAINTENANCE:
          // High Maintenance
          if(Game.powerLevel(Game.SKILL_PROPER_CARE) < 10) {
            Game.toastNotification("You need maximum level in Proper Care to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_HANGING_BY_A_THREAD) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Hanging By A Thread.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_MASTER_TINKERER) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Master Tinkerer.");
            canUpgrade = false;
          }
          break;
        case Game.SKILL_MASTER_TINKERER:
          // High Maintenance
          if(Game.powerLevel(Game.SKILL_PROPER_CARE) < 10) {
            Game.toastNotification("You need maximum level in Proper Care to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_HANGING_BY_A_THREAD) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Hanging By A Thread.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_HIGH_MAINTENANCE) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with High Maintenance.");
            canUpgrade = false;
          }
          break;
        case Game.SKILL_CAVITY_SEARCH:
          // Cavity Search
          if(Game.powerLevel(Game.SKILL_PICKPOCKET) < 10) {
            Game.toastNotification("You need maximum level in Pickpocket to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_THOROUGH_LOOTING) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Thorough Looting.");
            canUpgrade = false;
          }
          break;
        case Game.SKILL_THOROUGH_LOOTING:
          // Thorough Looting
          if(Game.powerLevel(Game.SKILL_PICKPOCKET) < 10) {
            Game.toastNotification("You need maximum level in Pickpocket to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_CAVITY_SEARCH) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Cavity Search.");
            canUpgrade = false;
          }
          break;
        case Game.SKILL_KEEN_EYEDMG:
          // Keener Eye
          if(Game.powerLevel(Game.SKILL_KEEN_EYE) < 5) {
            Game.toastNotification("You need maximum level in Keen Eye to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_ADRENALINE_RUSH) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Adrenaline Rush.");
            canUpgrade = false;
          }
          break;
        case Game.SKILL_ADRENALINE_RUSH:
          // Adrenaline Rush
          if(Game.powerLevel(Game.SKILL_KEEN_EYE) < 5) {
            Game.toastNotification("You need maximum level in Keen Eye to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_KEENER_EYE) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Keener Eye.");
            canUpgrade = false;
          }
          break;
        case Game.SKILL_ABSORPTION_SHIELD:
          // Absorption Shield
          if(Game.powerLevel(Game.SKILL_DIVINE_SHIELD) < 5) {
            Game.toastNotification("You need maximum level in Divine Shield to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_REFLECTIVE_SHIELD) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Reflective Shield.");
            canUpgrade = false;
          }
          break;
        case Game.SKILL_REFLECTIVE_SHIELD:
          // Reflective Shield
          if(Game.powerLevel(Game.SKILL_DIVINE_SHIELD) < 5) {
            Game.toastNotification("You need maximum level in Divine Shield to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.SKILL_ABSORPTION_SHIELD) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Absorption Shield.");
            canUpgrade = false;
          }
          break;
        case Game.SKILL_LUCKY_STAR:
          // Lucky Star
          if(Game.powerLevel(Game.SKILL_LUCK_OF_THE_DRAW) < 10) {
            Game.toastNotification("You need maximum level in Luck of the Draw to upgrade this power.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_STATUP:
          // Patience and Discipline
          if(Game.powerLevel(Game.SKILL_FAST_LEARNER) < 10) {
            Game.toastNotification("You need maximum level in Fast Learner to upgrade this power.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_DBLPOWER:
          // Empowered Flurry
          if(Game.powerLevel(Game.BOOST_DOUBLE) < 10) {
            Game.toastNotification("You need maximum level in Flurry to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_BURST) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Wild Swings.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_FULLHEAL:
          // Will To Live
          if(Game.powerLevel(Game.BOOST_REGEN) < 10) {
            Game.toastNotification("You need maximum level in Survival Instincts to upgrade this power.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_BURST:
          // Wild Swings
          if(Game.powerLevel(Game.BOOST_DOUBLE) < 10) {
            Game.toastNotification("You need maximum level in Flurry to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_DBLPOWER) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Empowered Flurry.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_EXECUTE:
          // Execute
          if(Game.powerLevel(Game.BOOST_DAMAGE) < 10) {
            Game.toastNotification("You need maximum level in Deadly Force to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_BONUSDMG) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Overcharge.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_BONUSDMG:
          // Overcharge
          if(Game.powerLevel(Game.BOOST_DAMAGE) < 10) {
            Game.toastNotification("You need maximum level in Deadly Force to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_EXECUTE) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Execute.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_LASTSTAND:
          // Last Bastion
          if(Game.powerLevel(Game.BOOST_DEFENCE) < 10) {
            Game.toastNotification("You need maximum level in Ancestral Fortitude to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_VENGEANCE) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Vengeance.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_VENGEANCE:
          // Vengeance
          if(Game.powerLevel(Game.BOOST_DEFENCE) < 10) {
            Game.toastNotification("You need maximum level in Ancestral Fortitude to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_LASTSTAND) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Last Bastion.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_FIRST:
          // Sneak Attack
          if(Game.powerLevel(Game.BOOST_SPEED) < 10) {
            Game.toastNotification("You need maximum level in Nimble Fingers to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_PICKPOCKET) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Five-Finger Discount.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_PICKPOCKET:
          // Five-Finger Discount
          if(Game.powerLevel(Game.BOOST_SPEED) < 10) {
            Game.toastNotification("You need maximum level in Nimble Fingers to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_FIRST) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Sneak Attack.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_FASTBURST:
          // Press The Advantage
          if(Game.powerLevel(Game.BOOST_DEBUFF) < 10) {
            Game.toastNotification("You need maximum level in Expose Weakness to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_DEBUFFBURST) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Turn The Tables.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_NOWEAKNESS) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Intuition");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_DEBUFFBURST:
          // Turn The Tables
          if(Game.powerLevel(Game.BOOST_DEBUFF) < 10) {
            Game.toastNotification("You need maximum level in Expose Weakness to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_FASTBURST) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Press The Advantage.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_NOWEAKNESS) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Intuition");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_NOWEAKNESS:
          // Intuition
          if(Game.powerLevel(Game.BOOST_DEBUFF) < 10) {
            Game.toastNotification("You need maximum level in Expose Weakness to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_DEBUFFBURST) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Turn The Tables.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_FASTBURST) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Press The Advantage.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_SELL:
          // Haggling
          if(Game.powerLevel(Game.BOOST_PRICES) < 10) {
            Game.toastNotification("You need maximum level in Bartering to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_MORESCRAP) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Disassembly.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_MORESCRAP:
          // Disassembly
          if(Game.powerLevel(Game.BOOST_PRICES) < 10) {
            Game.toastNotification("You need maximum level in Bartering to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_SELL) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Haggling.");
            canUpgrade = false;
          }
          break;
        case Game.BOOST_HEALINGPOTION:
          // Medic's Intuition
          if(Game.powerLevel(Game.BOOST_MULTIPOTION) < 10) {
            Game.toastNotification("You need maximum level in Brewmaster to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_DEBUFFPOTION) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Saboteur's Intuition.");
            canUpgrade = false;
          }
        case Game.BOOST_DEBUFFPOTION:
          // Saboteur's Intuition
          if(Game.powerLevel(Game.BOOST_MULTIPOTION) < 10) {
            Game.toastNotification("You need maximum level in Brewmaster to upgrade this power.");
            canUpgrade = false;
          } else if(Game.powerLevel(Game.BOOST_HEALINGPOTION) > 0) {
            Game.toastNotification("This power cannot be used in conjunction with Medic's Intuition.");
            canUpgrade = false;
          }
      }
    }
    if(canUpgrade) {
      if(selectionLevel === 0) {
        Game.p_Powers.push(new Array(power, 1));
        var singlePointers = [Game.SKILL_ABSORPTION_SHIELD, Game.SKILL_REFLECTIVE_SHIELD, Game.BOOST_MORESCRAP, Game.BOOST_BONUSDMG, Game.BOOST_NOWEAKNESS, Game.BOOST_HEALINGPOTION, Game.BOOST_DEBUFFPOTION];
        if(singlePointers.indexOf(power) >= 0) {
          switch(power) {
            case Game.SKILL_ABSORPTION_SHIELD: Game.giveBadge(Game.BADGE_POWER_ABSORB); break; // Glutton for Punishment
            case Game.SKILL_REFLECTIVE_SHIELD: Game.giveBadge(Game.BADGE_POWER_REFLECT); break; // Return to Sender
            case Game.BOOST_NOWEAKNESS: Game.giveBadge(Game.BADGE_POWER_INTUITION); break; // Discerning Eye
            case Game.BOOST_MORESCRAP: Game.giveBadge(Game.BADGE_POWER_SCRAP); break; // Systematic Deconstruction
            case Game.BOOST_BONUSDMG: Game.giveBadge(Game.BADGE_POWER_OVERCHARGE); break; // Pushing the Limits
            case Game.BOOST_HEALINGPOTION: Game.giveBadge(Game.BADGE_POWER_HEALPOTION); break; // Trust Me, I'm a Doctor
            case Game.BOOST_DEBUFFPOTION: Game.giveBadge(Game.BADGE_POWER_DEBUFFPOTION); break; // Dirty Tactics
          }
        }
      }
      else {
        for(var x = 0; x < Game.p_Powers.length; x++) {
          if(Game.p_Powers[x][0] === power) {
            Game.p_Powers[x][1]++;
            if(Game.p_Powers[x][1] === Game.getPowerLevelCap(power)) {
              switch(power) {
                case Game.SKILL_HANGING_BY_A_THREAD: Game.giveBadge(Game.BADGE_POWER_THREAD); break; // Taking Care of the Careless
                case Game.SKILL_HIGH_MAINTENANCE: Game.giveBadge(Game.BADGE_POWER_MAINT); break; // Excessive Demands
                case Game.SKILL_MASTER_TINKERER: Game.giveBadge(Game.BADGE_POWER_REPAIR); break; // Gnomish Ingenuity
                case Game.SKILL_CAVITY_SEARCH: Game.giveBadge(Game.BADGE_POWER_CAVITY); break; // Latex Glove Fanatic
                case Game.SKILL_THOROUGH_LOOTING: Game.giveBadge(Game.BADGE_POWER_LOOTING); break; // Gold Digger
                case Game.SKILL_KEENER_EYE: Game.giveBadge(Game.BADGE_POWER_KEENER); break; // Commander Keen
                case Game.SKILL_ADRENALINE_RUSH: Game.giveBadge(Game.BADGE_POWER_RUSH); break; // No Rush
                case Game.SKILL_LUCKY_STAR: Game.giveBadge(Game.BADGE_POWER_LUCKY); break; // Eight-Leaf Clover
                case Game.BOOST_STATUP: Game.giveBadge(Game.BADGE_POWER_SKILLS); break; // Statuesque
                case Game.BOOST_DBLPOWER: Game.giveBadge(Game.BADGE_POWER_FLURRY); break; // They Told Me It Was Overpowered
                case Game.BOOST_BURST: Game.giveBadge(Game.BADGE_POWER_WILD); break; // Monkeying Around
                case Game.BOOST_FULLHEAL: Game.giveBadge(Game.BADGE_POWER_DYING); break; // No Time for Dying
                case Game.BOOST_EXECUTE: Game.giveBadge(Game.BADGE_POWER_EXECUTE); break; // Butcher's Block
                case Game.BOOST_LASTSTAND: Game.giveBadge(Game.BADGE_POWER_BASTION); break; // Hollow Bastion
                case Game.BOOST_VENGEANCE: Game.giveBadge(Game.BADGE_POWER_REVENGE); break; // Right Back At You
                case Game.BOOST_FIRST: Game.giveBadge(Game.BADGE_POWER_FIRST); break; // Ladies First
                case Game.BOOST_PICKPOCKET: Game.giveBadge(Game.BADGE_POWER_FINGER); break; // Disembodied Finger
                case Game.BOOST_FASTBURST: Game.giveBadge(Game.BADGE_POWER_PRESSURE); break; // Under Pressure
                case Game.BOOST_DEBUFFBURST: Game.giveBadge(Game.BADGE_POWER_TABLES); break; // Table Flipper
                case Game.BOOST_SELL: Game.giveBadge(Game.BADGE_POWER_MARKET); break; // Market Regular
              }
            }
          }
        }
      }
      Game.p_PP--;
      Game.updatePowers = true;
    }
  }
  Game.badgeCheck(Game.BADGE_POWER); // Unlimited Power!
  Game.drawActivePanel();
}
Game.getPowerLevelCap = function(power) {
  switch(power) {
    case Game.SKILL_PROPER_CARE:
    case Game.SKILL_PICKPOCKET:
    case Game.SKILL_DIVINE_SHIELD:
    case Game.SKILL_LUCK_OF_THE_DRAW:
    case Game.SKILL_FAST_LEARNER:
    case Game.BOOST_REGEN:
    case Game.BOOST_DOUBLE:
    case Game.BOOST_DAMAGE:
    case Game.BOOST_DEFENCE:
    case Game.BOOST_SPEED:
    case Game.BOOST_DEBUFF:
    case Game.BOOST_PRICES:
    //case Game.BOOST_MULTIPOTION:
      return 10;
    case Game.SKILL_HANGING_BY_A_THREAD:
    case Game.SKILL_HIGH_MAINTENANCE:
    case Game.SKILL_MASTER_TINKERER:
    case Game.SKILL_CAVITY_SEARCH:
    case Game.SKILL_KEEN_EYE:
    case Game.SKILL_THOROUGH_LOOTING:
    case Game.SKILL_KEENER_EYE:
    case Game.SKILL_ADRENALINE_RUSH:
    case Game.SKILL_LUCKY_STAR:
    case Game.BOOST_STATUP:
    case Game.BOOST_DBLPOWER:
    case Game.BOOST_FULLHEAL:
    case Game.BOOST_BURST:
    case Game.BOOST_EXECUTE:
    case Game.BOOST_LASTSTAND:
    case Game.BOOST_VENGEANCE:
    case Game.BOOST_FIRST:
    case Game.BOOST_PICKPOCKET:
    case Game.BOOST_SELL:
    case Game.BOOST_FASTBURST:
      return 5;
    case Game.BOOST_DEBUFFBURST:
      return 4;
    case Game.SKILL_ABSORPTION_SHIELD:
    case Game.SKILL_REFLECTIVE_SHIELD:
    case Game.BOOST_MORESCRAP:
    case Game.BOOST_BONUSDMG:
    case Game.BOOST_NOWEAKNESS:
    case Game.BOOST_OVERFLOW:
    //case Game.BOOST_HEALINGPOTION:
    //case Game.BOOST_DEBUFFPOTION:
      return 1;
    default:
      return 0;
  }
}
Game.getPowerName = function(power) {
  for(var x = 0; x < Game.SKILL_LIST.length; x++) {
    if(Game.SKILL_LIST[x][2] == power) return Game.SKILL_LIST[x][0];
  }
}
Game.getPowerDesc = function(power) {
  for(var x = 0; x < Game.SKILL_LIST.length; x++) {
    if(Game.SKILL_LIST[x][2] == power) return Game.SKILL_LIST[x][1];
  }
}
Game.resetPowers = function() {
    var totalSpent = 0;
    for(var a = 0; a < Game.p_Powers.length; a++) {
      totalSpent += Game.p_Powers[a][1];
    }
    var scrapCost = Math.ceil((totalSpent + Game.p_PP)/3);
    if(Game.p_Scrap < scrapCost) {
      Game.toastNotification("You need " + scrapCost + " scrap to reset your powers.");
      return;
    }
    if(confirm("Are you sure you wish to reset your power point allocation? \n\nThis will cost a total of " + scrapCost + " scrap and cannot be undone.")) {
      Game.p_Powers = [];
      Game.p_PP += totalSpent;
      Game.p_Scrap -= scrapCost;
      Game.toastNotification("Power points have been reset.");
      Game.updatePowers = true;
      Game.TRACK_RESETS++;
      Game.badgeCheck(Game.BADGE_RESETS); // Indecisive
      Game.drawActivePanel();
  }
}

document.getElementById("loadedPowers").style.display = "";