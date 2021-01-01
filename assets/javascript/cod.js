var attachments = {
  "Assault Rifles": {
    "XM4": {
      "Optic": ["Millstop Reflex", "Visiontech 2x", "Kobra Red Dot", "Quickdot LED", "Axial Arms 3x", "Sillix Holoscout", "Microflex LED", "Hawksmoor", "Royal & Kross 4x", "SUSAT Multizoom", "Diamondback Reflex", "AN/PVS-4 Thermal"],
      "Muzzle": ["Muzzle Brake 5.56", "Flashguard 5.56", "Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["11.8\" Ranger", "12.5\" Cavalry Lancer", "13.5\" Reinforced Heavy", "13.7\" Extended", "13.7\" Takedown", "13.5\" Task Force"],
      "Underbarrel": ["Foregrip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["40 Rnd", "Jungle-Style Mag", "40 Rnd Speed Mag", "STANAG 50 Rnd", "SAS Mag Clamp", "Salvo 50 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "Buffer Tube", "SAS Combat Stock", "Raider Pad"]
    },
    "AK-47": {
      "Optic": ["Millstop Reflex", "Visiontech 2x", "Kobra Red Dot", "Quickdot LED", "Axial Arms 3x", "Sillix Holoscout", "Microflex LED", "Hawksmoor", "Royal & Kross 4x", "SUSAT Multizoom", "Diamondback Reflex", "Noch Sova Thermal"],
      "Muzzle": ["Muzzle Brake 7.62", "Flashguard 7.62", "Suppressor", "Spetsnaz Compensator", "KGB Eliminator", "GRU Suppressor"],
      "Barrel": ["15.5\" Ultralight", "16.5\" Cavalry Lancer", "18.2\" VDV Reinforced", "20\" Liberator", "18.2\" Takedown", "20\" Spetsnax RPK Barrel"],
      "Underbarrel": ["Foregrip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Spetsnaz Grip", "Spetsnaz Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "KGB Target Designator", "GRU 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["40 Rnd", "Taped Mags", "40 Rnd Speed Mag", "Bakelite 50 Rnd", "GRU Mag Clamp", "VDV 50 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "Spetsnaz Jungle Grip", "Serpent Wrap", "GRU Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "No Stock", "Spetsnaz PKM Stock", "KGB Skeletal Stock"]
    },
    "Krig 6": {
      "Optic": ["Millstop Reflex", "Visiontech 2x", "Kobra Red Dot", "Quickdot LED", "Axial Arms 3x", "Sillix Holoscout", "Microflex LED", "Hawksmoor", "Royal & Kross 4x", "SUSAT Multizoom", "Diamondback Reflex", "AN/PVS-4 Thermal"],
      "Muzzle": ["Muzzle Brake 5.56", "Flashguard 5.56", "Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["16.5\" Ultralite", "17.7\" Cavalry Lancer", "15.5\" Contour", "19.7\" Ranger", "19.7\" Takedown", "15\" CMV Mil-Spec"],
      "Underbarrel": ["Foregrip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "KGB Target Designator", "GRU 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["40 Rnd", "Jungle-Style Mag", "40 Rnd Speed Mag", "STANAG 50 Rnd", "SAS Mag Clamp", "Salvo 50 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "No Stock", "SAS Combat Stock", "Raider Stock"]
    },
    "QBZ-83": {
      "Optic": ["Millstop Reflex", "Visiontech 2x", "Kobra Red Dot", "Quickdot LED", "Axial Arms 3x", "Sillix Holoscout", "Microflex LED", "Hawksmoor", "Royal & Kross 4x", "SUSAT Multizoom", "Diamondback Reflex", "AN/PVS-4 Thermal"],
      "Muzzle": ["Muzzle Brake 5.56", "Flashguard 5.56", "Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["13.7\" Ultralite", "13.7\" Cavalry Lancer", "15.5\" Reinforced Heavy", "16.5\" Ranger", "15.5\" Takedown", "15.5\" Task Force"],
      "Underbarrel": ["Foregrip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "KGB Target Designator", "GRU 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["40 Rnd Drum", "Jungle-Style Mag", "40 Rnd Speed Mag", "STANAG 50 Rnd Drum", "SAS Mag Clamp", "Salvo 50 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Marathon Stock", "Duster Pad", "CQB Pad", "SAS Combat Stock", "Raider Stock"]
    },
    "FFAR1": {
      "Optic": ["Millstop Reflex", "Visiontech 2x", "Kobra Red Dot", "Quickdot LED", "Axial Arms 3x", "Sillix Holoscout", "Microflex LED", "Hawksmoor", "Royal & Kross 4x", "SUSAT Multizoom", "Diamondback Reflex", "AN/PVS-4 Thermal"],
      "Muzzle": ["Muzzle Brake 5.56", "Flashguard 5.56", "Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["17.9\" Ultralite", "18.7\" Cavalry Lancer", "19.5\" Reinforced Heavy", "21.2\" Ranger", "20.3\" Takedown", "19.5\" Task Force"],
      "Underbarrel": ["Foregrip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "KGB Target Designator", "GRU 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["34 Rnd", "Jungle-Style Mag", "34 Rnd Speed Mag", "STANAG 44 Rnd", "SAS Mag Clamp", "Salvo 44 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Marathon Stock", "Duster Pad", "CQB Pad", "SAS Combat Stock", "Raider Stock"]
    },
    "Groza": {
      "Optic": ["Millstop Reflex", "Visiontech 2x", "Kobra Red Dot", "Quickdot LED", "Axial Arms 3x", "Sillix Holoscout", "Microflex LED", "Hawksmoor", "Royal & Kross 4x", "SUSAT Multizoom", "Diamondback Reflex", "Noch Sova Thermal"],
      "Muzzle": ["Muzzle Brake 7.62", "Flashguard 7.62", "Suppressor", "Spetsnaz Compensator", "KGB Eliminator", "GRU Suppressor"],
      "Barrel": ["15.3\" Ultralight", "16.2\" Cavalry Lancer", "16.7\" VDV Reinforced", "16.2\" GRU Composite", "15.7\" Contour M2", "16.5\" CMV Mil-Spec"],
      "Underbarrel": ["Foregrip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Spetsnaz Grip", "Spetsnaz Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "KGB Target Designator", "GRU 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["40 Rnd Drum", "Taped Mags", "40 Rnd Speed Mag", "Spetsnaz 50 Rnd Drum", "GRU Mag Clamp", "VDV 50 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "Spetsnaz Jungle Grip", "Serpent Wrap", "GRU Elastic Wrap"],
      "Stock": ["Tactical Stock", "Marathon Stock", "Duster Pad", "CQB Pad", "Spetsnaz PKM Stock", "KGB Pad"]
    }
  },
  "Submachine Guns": {
    "MP5": {
      "Optic": ["Quickdot LED", "Millstop Reflex", "Kobra Red Dot", "Visiontech 2x", "Microflex LED", "Hawksmoor", "SnapPoint", "Diamondback Reflex", "Sillix Holoscout", "Fastpoint Reflex", "Axial Arms 3x", "SUSAT Multizoom"],
      "Muzzle": ["Muzzle Brake 9", "Flashguard 9", "Sound Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["9.5\" Extended", "10.1\" Cavalry Lancer", "9.5\" Reinforced Heavy", "9.5\" Ranger", "9.1\" Rifled", "9.5\" Task Force"],
      "Underbarrel": ["Foregrip", "Red Cell Foregrip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["40 Rnd Drum", "Jungle-Style Mag", "40 Rnd Speed Mag", "STANAG 50 Rnd Drum", "SAS Mag Clamp", "Salvo 50 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Collapsed Stock", "Duster Stock", "No Stock", "SAS Combat Stock", "Raider Stock"]
    },
    "Milano 821": {
      "Optic": ["Quickdot LED", "Millstop Reflex", "Kobra Red Dot", "Visiontech 2x", "Microflex LED", "Hawksmoor", "SnapPoint", "Diamondback Reflex", "Sillix Holoscout", "Fastpoint Reflex", "Axial Arms 3x", "SUSAT Multizoom"],
      "Muzzle": ["Muzzle Brake 9", "Flashguard 9", "Sound Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["8.9\" Extended", "9.5\" Cavalry Lancer", "10.1\" Reinforced Heavy", "10.5\" Ranger", "9.5\" Rifled", "10.6\" Task Force"],
      "Underbarrel": ["Foregrip", "Red Cell Foregrip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["45 Rnd Drum", "Fast Mag", "45 Rnd Speed Mag", "STANAG 55 Rnd Drum", "Vandal Speed Loader", "Salvo 55 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "Marathon Stock", "SAS Combat Stock", "Raider Stock"]
    },
    "AK-74u": {
      "Optic": ["Quickdot LED", "Millstop Reflex", "Kobra Red Dot", "Visiontech 2x", "Microflex LED", "Hawksmoor", "SnapPoint", "Diamondback Reflex", "Sillix Holoscout", "Fastpoint Reflex", "Axial Arms 3x", "SUSAT Multizoom"],
      "Muzzle": ["Muzzle Brake 5.56", "Flashguard 5.56", "Sound Suppressor", "Spetsnaz Compensator", "KGB Eliminator", "GRU Suppressor"],
      "Barrel": ["9.3\" Extended", "8.4\" Cavalry Lancer", "9.3\" VDV Reinforced", "10.3\" Liberator", "8.4\" Rifled", "10.3\" Task Force"],
      "Underbarrel": ["Foregrip", "Red Cell Foregrip", "Patrol Grip", "Bruiser Grip", "Spetsnaz Grip", "Spetsnaz Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "KGB Target Designator", "GRU 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["40 Rnd Drum", "Fast Mag", "40 Rnd Speed Mag", "Spetsnaz 50 Rnd Drum", "GRU Mag Clamp", "VDV 50 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Wrap", "Field Tape", "Spetsnaz Jungle Grip", "Serpent Wrap", "GRU Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "No Stock", "Spetsnaz PKM Stock", "KGB Skeletal Stock"]
    },
    "KSP45": {
      "Optic": ["Quickdot LED", "Millstop Reflex", "Kobra Red Dot", "Visiontech 2x", "Microflex LED", "Hawksmoor", "SnapPoint", "Diamondback Reflex", "Sillix Holoscout", "Fastpoint Reflex", "Axial Arms 3x", "SUSAT Multizoom"],
      "Muzzle": ["Muzzle Brake .45 APC", "Flashguard .45 APC", "Sound Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["8.9\" Extended", "9.6\" Cavalry Lancer", "10.5\" Reinforced Heavy", "9.5\" Ranger", "10.2\" Rifled", "10.5\" Task Force"],
      "Underbarrel": ["Front Grip", "Red Cell Foregrip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["42 Rnd", "Fast Mag", "42 Rnd Speed Mag", "STANAG 48 Rnd", "Vandal Speed Loader", "Salvo 48 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Collasped Stock", "Duster Stock", "No Stock", "SAS Combat Stock", "Raider Stock"]
    },
    "Bullfrog": {
      "Optic": ["Quickdot LED", "Millstop Reflex", "Kobra Red Dot", "Visiontech 2x", "Microflex LED", "Hawksmoor", "SnapPoint", "Diamondback Reflex", "Sillix Holoscout", "Fastpoint Reflex", "Axial Arms 3x", "SUSAT Multizoom"],
      "Muzzle": ["Muzzle Brake 9", "Flashguard 9", "Sound Suppressor", "Spetsnaz Compensator", "KGB Eliminator", "GRU Suppressor"],
      "Barrel": ["7.1\" Extended", "7\" Cavalry Lancer", "6.7\" VDV Reinforced", "8.1\" Liberator", "7.6\" Rifled", "7.4\" Task Force"],
      "Underbarrel": ["Foregrip", "Red Cell Foregrip", "Patrol Grip", "Bruiser Grip", "Spetsnaz Grip", "Spetsnaz Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "KGB Target Designator", "GRU 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["65 Rnd", "Fast Mag", "65 Rnd Speed Mag", "STANAG 85 Rnd", "Vandal Speed Loader", "VDV 85 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "Spetsnaz Jungle Grip", "Serpent Wrap", "GRU Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "No Stock", "Spetsnaz PKM Stock", "KGB Skeletal Stock"]
    },
    "MAC-10":{
      "Optic": ["Quickdot LED", "Millstop Reflex", "Kobra Red Dot", "Visiontech 2x", "Microflex LED", "Hawksmoor", "SnapPoint", "Diamondback Reflex", "Sillix Holoscout", "Fastpoint Reflex", "Axial Arms 3x", "SUSAT Multizoom"],
      "Muzzle": ["Muzzle Brake 9", "Flashguard 9", "Sound Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["5.3\" Extended", "6.5\" Cavalry Lancer", "6.1\" Reinforced Heavy", "5.3\" Ranger", "6.5\" Rifled", "5.9\" Task Force"],
      "Underbarrel": ["Foregrip", "Red Cell Foregrip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["43 Rnd Drum", "Fast Mag", "43 Rnd Speed Mag", "STANAG 53 Rnd Drum", "Vandal Speed Loader", "Salvo 53 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "No Stock", "SAS Combat Stock", "Raider Stock"]
    }
  },
  "Tactical Rifles": {
    "Type-63": {
      "Optic": ["Visiontech 2x", "Kobra Red Dot", "Axial Arms 3x", "Millstop Reflex", "Royal & Kross 4x", "Quickdot LED", "Hawksmoor", "Sillix Holoscout", "SUSAT Multizoom", "Hangman RF", "Vulture Custom Zoom", "Noch Sova Thermal"],
      "Muzzle": ["Muzzle Brake 7.62", "Flashguard 7.62", "Silencer", "Spetsnaz Compensator", "KGB Eliminator", "GRU Suppressor"],
      "Barrel": ["16.4\" Rapid Fire", "18.3\" Cavalry Lancer", "18.3\" Strike Team", "16.4\" Titanium", "21.5\" Match Grade", "21.5\" Task Force"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Spetsnaz Ergonomic Grip", "Spetsnaz Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "KGB Target Designator", "GRU 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["30 Rnd", "Taped Mags", "30 Rnd Speed Mag", "Bakelite 35 Rnd", "GRU Mag Clamp", "VDV 35 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Wrap", "Field Tape", "Spetsnaz Field Grip", "Serpent Wrap", "GRU Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Pad", "No Stock", "Spetsnaz PKM Stock", "KGB Pad"]
    },
    "M16": {
      "Optic": ["Visiontech 2x", "Kobra Red Dot", "Axial Arms 3x", "Millstop Reflex", "Royal & Kross 4x", "Quickdot LED", "Hawksmoor", "Sillix Holoscout", "SUSAT Multizoom", "Hangman RF", "Vulture Custom Zoom", "AN/PVS-4 Thermal"],
      "Muzzle": ["Muzzle Brake 5.56", "Flashguard 5.56", "Silencer", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["16.3\" Rapid Fire", "15.9\" Cavalry Lancer", "15.9\" Strike Team", "16.3\" Titanium", "20.5\" Match Grade", "20.5\" Task Force"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Field Agent Foregrip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["45 Rnd", "Jungle-Style Mag", "45 Rnd Speed Mag", "STANAG 54 Rnd", "SAS Mag Clamp", "Salco 54 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Wrap", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "Buffer Tube", "SAS Combat Stock", "Raider Pad"]
    },
    "AUG": {
      "Optic": ["Visiontech 2x", "Kobra Red Dot", "Axial Arms 3x", "Millstop Reflex", "Royal & Kross 4x", "Quickdot LED", "Hawksmoor", "Sillix Holoscout", "SUSAT Multizoom", "Hangman RF", "Vulture Custom Zoom", "AN/PVS-4 Thermal"],
      "Muzzle": ["Muzzle Brake 5.56", "Flashguard 5.56", "Silencer", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["18\" Rapid Fire", "17.9\" Cavalry Lancer", "18.2\" Strike Team", "17\" Titanium", "19.6\" Match Grade", "19.8\" Task Force"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Field Agent Foregrip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["45 Rnd Drum", "Jungle-Style Mag", "45 Rnd Speed Mag", "STANAG 54 Rnd Drum", "SAS Mag Clamp", "Salco 54 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Wrap", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Marathon Stock", "Duster Pad", "CQB Pad", "SAS Combat Stock", "Raider Pad"]
    },
    "DMR 14": {
      "Optic": ["Visiontech 2x", "Kobra Red Dot", "Axial Arms 3x", "Millstop Reflex", "Royal & Kross 4x", "Quickdot LED", "Hawksmoor", "Sillix Holoscout", "SUSAT Multizoom", "Hangman RF", "Vulture Custom Zoom", "AN/PVS-4 Thermal"],
      "Muzzle": ["Muzzle Brake 7.62", "Flashguard 7.62", "Silencer", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["17\" Rapid Fire", "17.1\" Cavalry Lancer", "17.1\" Strike Team", "16.3\" Titanium", "20.8\" Match Grade", "20.8\" Task Force"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Field Agent Foregrip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["30 Rnd", "Jungle-Style Mag", "30 Rnd Speed Mag", "STANAG 35 Rnd", "SAS Mag Clamp", "Salco 35 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Wrap", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Pad", "No Stock", "SAS Combat Stock", "Raider Stock"]
    }
  },
  "Light Machine Guns": {
    "Stoner 63": {
      "Optic": ["Kobra Red Dot", "Axial Arms 3x", "Visiontech 2x", "Millstop Reflex", "Sillix Holoscout", "Royal & Kross 4x", "SUSAT Multizoom", "Quickdot LED", "Hawksmoor", "Hangman RF", "Vulture Custom Zoom", "AN/PVS-4 Thermal"],
      "Muzzle": ["Muzzle Brake 5.56", "Flashguard 5.56", "Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["16\" Cut Down", "17.8\" Cavalry Lancer", "18.6\" Division", "16\" SOR Cut Down", "20.7\" Match Grade", "21.8\" Task Force"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["100 Rnd", "Fast Mag", "100 Rnd Speed Mag", "Spetsnaz 125 Rnd", "Vandal Speed Loader", "Salvo 125 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Wrap", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Pad", "No Stock", "SAS Combat Stock", "Raider Pad"]
    },
    "RPD": {
      "Optic": ["Kobra Red Dot", "Axial Arms 3x", "Visiontech 2x", "Millstop Reflex", "Sillix Holoscout", "Royal & Kross 4x", "SUSAT Multizoom", "Quickdot LED", "Hawksmoor", "Hangman RF", "Vulture Custom Zoom", "Noch Sova Thermal"],
      "Muzzle": ["Muzzle Brake 7.62", "Flashguard 7.62", "Suppressor", "Spetsnaz Compensator", "KGB Eliminator", "GRU Suppressor"],
      "Barrel": ["16.5\" Cut Down", "16.5\" Spetnaz RPK Barrel", "16.5\" Division", "14.7\" GRU Cut Down", "20.3\" Match Grade", "20.3\" Task Force"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Spetsnaz Grip", "Spetsnaz Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "KGB Target Designator", "GRU 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["100 Rnd", "Fast Mag", "100 Rnd Speed Mag", "Spetsnaz 125 Rnd", "Vandal Speed Loader", "VDV 125 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Wrap", "Field Tape", "Spetsnaz Field Grip", "Serpent Wrap", "GRU Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "No Stock", "Spetsnaz PKM Stock", "KGB Skeletal Stock"]
    },
    "M60": {
      "Optic": ["Kobra Red Dot", "Axial Arms 3x", "Visiontech 2x", "Millstop Reflex", "Sillix Holoscout", "Royal & Kross 4x", "SUSAT Multizoom", "Quickdot LED", "Hawksmoor", "Hangman RF", "Vulture Custom Zoom", "AN/PVS-4 Thermal"],
      "Muzzle": ["Muzzle Brake 7.62", "Flashguard 7.62", "Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["18\" Cut Down", "18.9\" Cavalry Lancer", "18.9\" Division", "17.5\" SOR Cut Down", "22.8\" Match Grade", "22.8\" Task Force"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Field Agent Grip", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["100 Rnd", "Fast Mag", "100 Rnd Speed Mag", "STANAG 125 Rnd", "Vandal Speed Loader", "Salvo 125 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Wrap", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Marathon Stock", "Duster Stock", "No Stock", "SAS Combat Stock", "Raider Stock"]
    }
  },
  "Sniper Rifles": {
    "Pellington 703": {
      "Optic": ["Visiontech 2x", "Kobra Red Dot", "Axial Arms 3x", "Iron Sights", "Sillix Holoscout", "Royal & Kross 4x", "SUSAT Multizoom", "Vulture Custom Zoom", "Millstop Reflex", "Hangman RF", "Ultrazoom Custom", "AN/PVS-4 Thermal"],
      "Muzzle": ["Stabilizer .308", "Flash Hider .308", "Sound Moderator", "Infantry Stabilizer", "Task Force Shroud", "Wrapped Suppressor"],
      "Barrel": ["25\" Extended", "22.2\" Cavalry Lancer", "25\" Reinforced Heavy", "27.2\" Combat Recon", "21.7\" Ultralight", "26.5\" Tiger Team"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Bipod", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["7 Rnd", "Fast Loader", "7 Rnd Speed Mag", "STANAG 9 Rnd", "Vandal Speed Loader", "Salvo 9 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "CQB Pad", "Duster Pad", "Marathon Stock", "SAS Combat Stock", "Raider Pad"]
    },
    "LW3 - Tundra": {
      "Optic": ["Visiontech 2x", "Kobra Red Dot", "Axial Arms 3x", "Iron Sights", "Sillix Holoscout", "Royal & Kross 4x", "SUSAT Multizoom", "Vulture Custom Zoom", "Millstop Reflex", "Hangman RF", "Ultrazoom Custom", "AN/PVS-4 Thermal"],
      "Muzzle": ["Stabilizer .308", "Flash Hider .308", "Sound Moderator", "Infantry Stabilizer", "Task Force Shroud", "Wrapped Suppressor"],
      "Barrel": ["28.2\" Extended", "26.5\" Cavalry Lancer", "25.8\" Rapid Fire", "29.1\" Combat Recon", "26.5\" Hammer Forged", "28.2\" Tiger Team"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Bipod", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["7 Rnd", "Fast Loader", "7 Rnd Speed Mag", "STANAG 9 Rnd", "Vandal Speed Loader", "Salvo 9 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "CQB Pad", "Duster Pad", "Marathon Stock", "SAS Combat Stock", "Raider Pad"]
    },
    "M82": {
      "Optic": ["Visiontech 2x", "Kobra Red Dot", "Axial Arms 3x", "Iron Sights", "Sillix Holoscout", "Royal & Kross 4x", "SUSAT Multizoom", "Vulture Custom Zoom", "Millstop Reflex", "Hangman RF", "Ultrazoom Custom", "AN/PVS-4 Thermal"],
      "Muzzle": ["Stabilizer .50 BMG", "Flash Hider .50 BMG", "Sound Moderator", "Infantry Stabilizer", "Task Force Shroud", "Wrapped Suppressor"],
      "Barrel": ["22.2\" Extended", "21.8\" Cavalry Lancer", "20.6\" Rapid Fire", "22.6\" Combat Recon", "19.5\" Hammer Forged", "22.6\" Tiger Team"],
      "Underbarrel": ["Front Grip", "Infiltrator Grip", "Patrol Grip", "Bruiser Grip", "Bipod", "SFOD Speedgrip"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["7 Rnd", "Fast Loader", "7 Rnd Speed Mag", "STANAG 9 Rnd", "Vandal Speed Loader", "Salvo 9 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "CQB Pad", "Duster Pad", "Marathon Stock", "SAS Combat Stock", "Raider Pad"]
    }
  },
  "Pistols": {
    "1911": {
      "Optic": ["Quickdot LED", "Otero Mini Reflex", "Microflex LED"],
      "Muzzle": ["Muzzle Brake .45 APC", "Flashguard .45 APC", "Sound Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["6.83\" Extended", "5.42\" Cavalry Lancer", "6.45\" Reinforced Heavy", "7.12\" Chrome Lined", "5.63\" Takedown", "6.53\" Task Force"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["12 Rnd", "Fast Mag", "12 Rnd Speed Mag", "STANAG 14 Rnd", "Vandal Speed Loader", "Salvo 14 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Dual Wield"]
    },
    "Magnum": {
      "Optic": ["Quickdot LED", "Otero Mini Reflex", "Microflex LED"],
      "Muzzle": ["Muzzle Brake .45 APC", "Flashguard .45 APC", "Sound Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["7.2\" Extended", "5.9\" Cavalry Lancer", "6.4\" Reinforced Heavy", "7.5\" Chrome Lined", "4.7\" Takedown", "7.2\" Task Force"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["9 Rnd", "Fast Mag", "9 Rnd Speed Mag", "STANAG 12 Rnd", "Vandal Speed Loader", "Salvo 12 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Dual Wield"]
    },
    "Diamatti": {
      "Optic": ["Quickdot LED", "Otero Mini Reflex", "Microflex LED"],
      "Muzzle": ["Muzzle Brake 9", "Flashguard 9", "Sound Suppressor", "Infantry Compensator", "SOCOM Eliminator", "Agency Suppressor"],
      "Barrel": ["7.8\" Extended", "6.5\" Cavalry Lancer", "7.2\" Reinforced Heavy", "7.8\" Chrome Lined", "6.5\" Takedown", "7.2\" Task Force"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["24 Rnd", "Fast Mag", "24 Rnd Speed Mag", "STANAG 30 Rnd", "Vandal Speed Loader", "Salvo 30 Rnd Fast Mag"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Dual Wield"]
    }
  },
  "Shotguns": {
    "Hauer 77": {
      "Optic": ["Millstop Reflex", "Quickdot LED", "Microflex LED"],
      "Muzzle": ["Duckbill Choke", "Flash Cone 12 GA", "Sound Suppressor", "Infantry V-Choke", "SOCOM Blast Mitigator", "Agency Choke"],
      "Barrel": ["22\" Extended", "20.4\" Cavalry Lancer", "21.6\" Reinforced Heavy", "24.1\" Ranger", "19.3\" Hammer Forged", "25.2\" Task Force"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["7 Rnd", "STANAG 9 Rnd"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Shotgun Stock", "Duster Pad", "No Stock", "SAS Combat Stock", "Marathon Stock"]
    },
    "Gallo SA12": {
      "Optic": ["Millstop Reflex", "Quickdot LED", "Microflex LED"],
      "Muzzle": ["Duckbill Choke", "Flash Cone 12 GA", "Sound Suppressor", "Infantry V-Choke", "SOCOM Blast Mitigator", "Agency Choke"],
      "Barrel": ["22.7\" Extended", "23.5\" Cavalry Lancer", "21.4\" Reinforced Heavy", "24.6\" Ranger", "20.3\" Hammer Forged", "24.8\" Task Force"],
      "Body": ["Steady Aim Laser", "Mounted Flashlight", "SOF Target Designator", "SWAT 5mw Laser Sight", "Tiger Team Spotlight", "Ember Sighting Point"],
      "Magazine": ["9 Rnd Tube", "STANAG 12 Rnd Tube"],
      "Handle": ["Speed Tape", "Dropshot Tape", "Field Tape", "SASR Jungle Grip", "Serpent Wrap", "Airborne Elastic Wrap"],
      "Stock": ["Tactical Stock", "Wire Stock", "Duster Stock", "No Stock", "SAS Combat Stock", "Marathon Stock"]
    }
  }
}

$(document).ready(function() {
  var primary = ["XM4", "AK-47", "Krig 6", "QBZ-83", "FFAR1", "Groza", "MP5", "Milano 821", "AK-74u", "KSP45", "Bullfrog", "MAC-10", "Type-63", "M16", "AUG", "DMR 14", "Stoner 63", "RPD", "M60", "Pellington 703", "LW3 - Tundra", "M82"];
  
  var secondary = ["1911", "Magnum", "Diamatti", "Hauer 77", "Gallo SA12", "Cigma 2", "RPG-7", "Knife", "M79"];

  var weapons = ["Primary", "Secondary"];

  var lethal = ["Frag", "C4", "Molotov", "Semtex", "Tomahawk"];

  var tactical = ["Stun Grenade", "Stimshot", "Smoke Grenade", "Decoy"];

  var fieldUp = ["Proximity Mine", "Field Mic", "Trophy System", "SAM Turret", "Gas Mine", "Jammer"];

  var attachmentsP = ["Optic", "Muzzle", "Barrel", "Underbarrel", "Body", "Magazine", "Handle", "Stock"];
  var attachmentsS = ["Optic", "Muzzle", "Barrel", "Body", "Magazine", "Handle", "Stock"];

  var perk1 = ["Engineer", "Paranoia", "Flak Jacket", "Tactical Mask", "Forward Intel"];

  var perk2 = ["Assassin", "Gearhead", "Scavenger", "Quartermaster", "Tracker"];
  
  var perk3 = ["Gung-Ho", "Ghost", "Cold Blooded", "Ninja", "Spycraft"];

  var perks = ["Perk 1", "Perk 2", "Perk 3"];

  var wildcard = ["Danger Close", "Law Breaker", "Gunfighter", "Perk Greed"];

  var streaks = ["Combat Bow", "RC-XD", "Spy Plane", "Counter Spy Plane", "Armor", "Sentry Turret", "Care Package", "Napalm Strike", "Artillery", "Cruise Missile", "Air Patrol", "War Machine", "Attack Helicopter", "H.A.R.P.", "VTOL Escort", "Chopper Gunner", "Gunship"];

  var perk1Rand;
  var perk2Rand;
  var perk3Rand;
  var perk4Rand;
  var perk5Rand;
  var perk6Rand;
  var choosePerk1;
  var choosePerk2;
  var choosePerk3;
  var chooseWeapon1 = "Primary";
  var chooseWeapon2 = "Secondary";
  var primaryRand;
  var secondaryRand;
  var fieldUpRand;
  var streak1;
  var streak2;
  var streak3;
  var lethalRand;
  var tacticalRand;
  var attachP = [];
  var attachS = [];
  var gun;
  var gun2;

  var random = function() {
    var cardRandom = wildcard[Math.floor(Math.random() * wildcard.length)];

    $("#wildcard").html(cardRandom);
    streak1 = streaks[Math.floor(Math.random() * streaks.length)];
    $("#streak1").html(streak1);
    streak2 = streaks[Math.floor(Math.random() * streaks.length)];
    newStreak();
    $("#streak2").html(streak2);
    streak3 = streaks[Math.floor(Math.random() * streaks.length)];
    newStreak();
    $("#streak3").html(streak3);

    lethalRand = lethal[Math.floor(Math.random() * lethal.length)];
    $("#lethal").html(lethalRand);
    tacticalRand = tactical[Math.floor(Math.random() * tactical.length)];
    $("#tactical").html(tacticalRand);
    fieldUpRand = fieldUp[Math.floor(Math.random() * fieldUp.length)];
    $("#fieldUp").html(fieldUpRand);

    if (cardRandom === "Law Breaker") {
      choosePerk1 = perks[Math.floor(Math.random() * perks.length)];
      choosePerk2 = perks[Math.floor(Math.random() * perks.length)];
      choosePerk3 = perks[Math.floor(Math.random() * perks.length)];
      chooseWeapon1 = weapons[Math.floor(Math.random() * weapons.length)];
      chooseWeapon2 = weapons[Math.floor(Math.random() * weapons.length)];

      if (choosePerk1 === "Perk 1") {
        perk1Rand = perk1[Math.floor(Math.random() * perk1.length)];
        $("#perk1").html(perk1Rand);
      }
      else if (choosePerk1 === "Perk 2") {
        perk1Rand = perk2[Math.floor(Math.random() * perk2.length)];
        $("#perk1").html(perk1Rand);
      }
      else if (choosePerk1 === "Perk 3") {
        perk1Rand = perk3[Math.floor(Math.random() * perk3.length)];
        $("#perk1").html(perk1Rand);
      }

      if (choosePerk2 === "Perk 1") {
        perk2Rand = perk1[Math.floor(Math.random() * perk1.length)];
        if (perk2Rand === perk1Rand) {
          reperk1();
        }
        $("#perk2").html(perk2Rand);
      }
      else if (choosePerk2 === "Perk 2") {
        perk2Rand = perk2[Math.floor(Math.random() * perk2.length)];
        if (perk2Rand === perk1Rand) {
          reperk1();
        }
        $("#perk2").html(perk2Rand);
      }
      else if (choosePerk2 === "Perk 3") {
        perk2Rand = perk3[Math.floor(Math.random() * perk3.length)];
        if (perk2Rand === perk1Rand) {
          reperk1();
        }
        $("#perk2").html(perk2Rand);
      }

      if (choosePerk3 === "Perk 1") {
        perk3Rand = perk1[Math.floor(Math.random() * perk1.length)];
        if (perk3Rand === perk1Rand || perk3Rand === perk2Rand) {
          reperk1();
        }
        $("#perk3").html(perk3Rand);
      }
      else if (choosePerk3 === "Perk 2") {
        perk3Rand = perk2[Math.floor(Math.random() * perk2.length)];
        if (perk3Rand === perk1Rand || perk3Rand === perk2Rand) {
          reperk1();
        }
        $("#perk3").html(perk3Rand);
      }
      else if (choosePerk3 === "Perk 3") {
        perk3Rand = perk3[Math.floor(Math.random() * perk3.length)];
        if (perk3Rand === perk1Rand || perk3Rand === perk2Rand) {
          reperk1();
        }
        $("#perk3").html(perk3Rand);
      }

      if (chooseWeapon1 === "Primary") {
        primaryRand = primary[Math.floor(Math.random() * primary.length)];
        $("#primary").html(primaryRand);
      }
      else if (chooseWeapon1 === "Secondary") {
        primaryRand = secondary[Math.floor(Math.random() * secondary.length)];
        $("#primary").html(primaryRand);
      }
      if (chooseWeapon2 === "Primary") {
        secondaryRand = primary[Math.floor(Math.random() * primary.length)];
        newWeapon();
        $("#secondary").html(secondaryRand);
      }
      else if (chooseWeapon2 === "Secondary") {
        secondaryRand = secondary[Math.floor(Math.random() * secondary.length)];
        newWeapon();
        $("#secondary").html(secondaryRand);
      }
      $("#perk4").empty();
      $("#perk5").empty();
      $("#perk6").empty();
      determineAttach();
    }
    else if (cardRandom === "Perk Greed") {
      chooseWeapon1 = "Primary";
      chooseWeapon2 = "Secondary";
      perk1Rand = perk1[Math.floor(Math.random() * perk1.length)];
      $("#perk1").html(perk1Rand);
      perk2Rand = perk2[Math.floor(Math.random() * perk2.length)];
      $("#perk2").html(perk2Rand);
      perk3Rand = perk3[Math.floor(Math.random() * perk3.length)];
      $("#perk3").html(perk3Rand);
      perk4Rand = perk1[Math.floor(Math.random() * perk1.length)];
      reperk2();
      $("#perk4").html(perk4Rand);
      perk5Rand = perk2[Math.floor(Math.random() * perk2.length)];
      reperk2();
      $("#perk5").html(perk5Rand);
      perk6Rand = perk3[Math.floor(Math.random() * perk3.length)];
      reperk2();
      $("#perk6").html(perk6Rand);

      primaryRand = primary[Math.floor(Math.random() * primary.length)];
      $("#primary").html(primaryRand);
      secondaryRand = secondary[Math.floor(Math.random() * secondary.length)];
      $("#secondary").html(secondaryRand);
      determineAttach();
    }
    else if (cardRandom === "Gunfighter") {
      chooseWeapon1 = "Primary";
      chooseWeapon2 = "Secondary";
      primaryRand = primary[Math.floor(Math.random() * primary.length)];
      $("#primary").html(primaryRand);
      secondaryRand = secondary[Math.floor(Math.random() * secondary.length)];
      $("#secondary").html(secondaryRand);

      perk1Rand = perk1[Math.floor(Math.random() * perk1.length)];
      $("#perk1").html(perk1Rand);
      perk2Rand = perk2[Math.floor(Math.random() * perk2.length)];
      $("#perk2").html(perk2Rand);
      perk3Rand = perk3[Math.floor(Math.random() * perk3.length)];
      $("#perk3").html(perk3Rand);
      $("#perk4").empty();
      $("#perk5").empty();
      $("#perk6").empty();
      determineAttachGunfighter();
    }
    else if (cardRandom === "Danger Close") {
      chooseWeapon1 = "Primary";
      chooseWeapon2 = "Secondary";
      primaryRand = primary[Math.floor(Math.random() * primary.length)];
      $("#primary").html(primaryRand);
      secondaryRand = secondary[Math.floor(Math.random() * secondary.length)];
      $("#secondary").html(secondaryRand);

      perk1Rand = perk1[Math.floor(Math.random() * perk1.length)];
      $("#perk1").html(perk1Rand);
      perk2Rand = perk2[Math.floor(Math.random() * perk2.length)];
      $("#perk2").html(perk2Rand);
      perk3Rand = perk3[Math.floor(Math.random() * perk3.length)];
      $("#perk3").html(perk3Rand);
      $("#perk4").empty();
      $("#perk5").empty();
      $("#perk6").empty();
      determineAttach();
    }
  }

  var reperk1 = function() {
    while (perk2Rand === perk1Rand) {
      if (choosePerk2 === "Perk 1") {
        perk2Rand = perk1[Math.floor(Math.random() * perk1.length)];
      }
      else if (choosePerk2 === "Perk 2") {
        perk2Rand = perk2[Math.floor(Math.random() * perk2.length)];
      }
      else if (choosePerk2 === "Perk 3") {
        perk2Rand = perk3[Math.floor(Math.random() * perk3.length)];
      }
    }
    while (perk3Rand === perk1Rand || perk3Rand === perk2Rand) {
      if (choosePerk3 === "Perk 1") {
        perk3Rand = perk1[Math.floor(Math.random() * perk1.length)];
      }
      else if (choosePerk3 === "Perk 2") {
        perk3Rand = perk2[Math.floor(Math.random() * perk2.length)];
      }
      else if (choosePerk3 === "Perk 3") {
        perk3Rand = perk3[Math.floor(Math.random() * perk3.length)];
      }
    }
  }

  var reperk2 = function() {
    while (perk4Rand === perk1Rand) {
      perk4Rand = perk1[Math.floor(Math.random() * perk1.length)];
    }
    while (perk5Rand === perk2Rand) {
      perk5Rand = perk2[Math.floor(Math.random() * perk2.length)];
    }
    while (perk6Rand === perk3Rand) {
      perk6Rand = perk3[Math.floor(Math.random() * perk3.length)];
    }
  }

  var determineAttach = function() {
    attachmentsP = ["Optic", "Muzzle", "Barrel", "Underbarrel", "Body", "Magazine", "Handle", "Stock"];
    attachmentsP.sort(() => Math.random() - Math.random()).slice(0, 5);
    attachmentsP.pop();
    attachmentsP.pop();
    attachmentsP.pop();

    attachmentsS = ["Optic", "Muzzle", "Barrel", "Body", "Magazine", "Handle", "Stock"];
    attachmentsS.sort(() => Math.random() - Math.random()).slice(0, 5);
    attachmentsS.pop();
    attachmentsS.pop();

    attachS = [];
    attachP = [];

    if (primaryRand === "XM4" || primaryRand === "AK-47" || primaryRand === "Krig 6" || primaryRand === "QBZ-83" || primaryRand === "FFAR1" || primaryRand === "Groza") {
      gun = "Assault Rifles";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "MP5" || primaryRand === "Milano 821" || primaryRand === "AK-74u" || primaryRand === "KSP45" || primaryRand === "Bullfrog" || primaryRand === "MAC-10") {
      gun = "Submachine Guns";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "Stoner 63" || primaryRand === "RPD" || primaryRand === "M60") {
      gun = "Light Machine Guns";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "Type-63" || primaryRand === "M16" || primaryRand === "AUG" || primaryRand === "DMR 14") {
      gun = "Tactical Rifles";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "Pellington 703" || primaryRand === "LW3 - Tundra" || primaryRand === "M82") {
      gun = "Sniper Rifles";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "1911" || primaryRand === "Magnum" || primaryRand === "Diamatti") {
      gun = "Pistols";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "Hauer 77" || primaryRand === "Gallo SA12") {
      gun = "Shotguns";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "RPG-7" || primaryRand === "Knife" || primaryRand === "M79" || primaryRand === "Cigma 2") {
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    if (secondaryRand === "1911" || secondaryRand === "Magnum" || secondaryRand === "Diamatti") {
      gun2 = "Pistols";
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }
    else if (secondaryRand === "Hauer 77" || secondaryRand === "Gallo SA12") {
      gun2 = "Shotguns";
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }
    else if (secondaryRand === "XM4" || secondaryRand === "AK-47" || secondaryRand === "Krig 6" || secondaryRand === "QBZ-83" || secondaryRand === "FFAR1" || secondaryRand === "Groza") {
      gun2 = "Assault Rifles";
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }
    else if (secondaryRand === "MP5" || secondaryRand === "Milano 821" || secondaryRand === "AK-74u" || secondaryRand === "KSP45" || secondaryRand === "Bullfrog" || secondaryRand === "MAC-10") {
      gun2 = "Submachine Guns";
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }
    else if (secondaryRand === "Stoner 63" || secondaryRand === "RPD" || secondaryRand === "M60") {
      gun2 = "Light Machine Guns";
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }
    else if (secondaryRand === "Type-63" || secondaryRand === "M16" || secondaryRand === "AUG" || secondaryRand === "DMR 14") {
      gun2 = "Tactical Rifles";
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }
    else if (secondaryRand === "Pellington 703" || secondaryRand === "LW3 - Tundra" || secondaryRand === "M82") {
      gun2 = "Sniper Rifles";
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }
    else if (secondaryRand === "RPG-7" || secondaryRand === "Knife" || secondaryRand === "M79" || secondaryRand === "Cigma 2") {
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }

    loop1();
    

    // console.log(chooseWeapon1);

    // if (chooseWeapon1 === "Primary") {
    //   for (i = 0; i < 5; i++) {
    //     attachP[i] = attachments[gun][primaryRand][attachmentsP[i]][Math.floor(Math.random() * attachments[gun][primaryRand][attachmentsP[i]].length)];
    //     $(`#${attachmentsP[i]}1`).html(attachP[i]);
    //     console.log(primaryRand);
    //     console.log(attachP[i]);
    //   }
    // }
    // else if (chooseWeapon1 === "Secondary") {
    //   if (primaryRand === "RPG-7" || primaryRand === "Knife" || primaryRand === "M79" || primaryRand === "Cigma 2") {
    //     return;
    //   }
    //   else {
    //     for (i = 0; i < 5; i++) {
    //       attachP[i] = attachments[gun][primaryRand][attachmentsS[i]][Math.floor(Math.random() * attachments[gun][primaryRand][attachmentsS[i]].length)];
    //       $(`#${attachmentsS[i]}1`).html(attachP[i]);
    //       console.log(primaryRand);
    //       console.log(attachP[i]);
    //     }
    //   }
    // }

    // console.log(chooseWeapon2);

    // if (chooseWeapon2 === "Primary") {
    //   for (i = 0; i < 5; i++) {
    //     attachS[i] = attachments[gun2][secondaryRand][attachmentsP[i]][Math.floor(Math.random() * attachments[gun2][secondaryRand][attachmentsP[i]].length)];
    //     $(`#${attachmentsP[i]}2`).html(attachS[i]);
    //     console.log(secondaryRand);
    //     console.log(attachS[i]);
    //   }
    // }
    // else if (chooseWeapon2 === "Secondary") {
    //   if (primaryRand === "RPG-7" || primaryRand === "Knife" || primaryRand === "M79" || primaryRand === "Cigma 2") {
    //     return;
    //   }
    //   else {
    //     for (i = 0; i < 5; i++) {
    //       attachS[i] = attachments[gun2][secondaryRand][attachmentsS[i]][Math.floor(Math.random() * attachments[gun2][secondaryRand][attachmentsS[i]].length)];
    //       $(`#${attachmentsS[i]}2`).html(attachS[i]);
    //       console.log(secondaryRand);
    //       console.log(attachS[i]);
    //     }
    //   }
    // }
  }

  

  var determineAttachGunfighter = function() {
    attachmentsP = ["Optic", "Muzzle", "Barrel", "Underbarrel", "Body", "Magazine", "Handle", "Stock"];
    attachmentsS = ["Optic", "Muzzle", "Barrel", "Body", "Magazine", "Handle", "Stock"];
    attachmentsS.sort(() => Math.random() - Math.random()).slice(0, 5);
    attachmentsS.pop();
    attachmentsS.pop();
    if (primaryRand === "XM4" || primaryRand === "AK-47" || primaryRand === "Krig 6" || primaryRand === "QBZ-83" || primaryRand === "FFAR1" || primaryRand === "Groza") {
      gun = "Assault Rifles";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "MP5" || primaryRand === "Milano 821" || primaryRand === "AK-74u" || primaryRand === "KSP45" || primaryRand === "Bullfrog" || primaryRand === "MAC-10") {
      gun = "Submachine Guns";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "Stoner 63" || primaryRand === "RPD" || primaryRand === "M60") {
      gun = "Light Machine Guns";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "Type-63" || primaryRand === "M16" || primaryRand === "AUG" || primaryRand === "DMR 14") {
      gun = "Tactical Rifles";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    else if (primaryRand === "Pellington 703" || primaryRand === "LW3 - Tundra" || primaryRand === "M82") {
      gun = "Sniper Rifles";
      $("#Optic1").empty();
      $("#Muzzle1").empty();
      $("#Barrel1").empty();
      $("#Underbarrel1").empty();
      $("#Body1").empty();
      $("#Magazine1").empty();
      $("#Handle1").empty();
      $("#Stock1").empty();
    }
    
    else if (secondaryRand === "1911" || secondaryRand === "Magnum" || secondaryRand === "Diamatti") {
      gun2 = "Pistols";
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }
    else if (secondaryRand === "Hauer 77" || secondaryRand === "Gallo SA12") {
      gun2 = "Shotguns";
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }
    else if (secondaryRand === "RPG-7" || secondaryRand === "Knife" || secondaryRand === "M79" || secondaryRand === "Cigma 2") {
      $("#Optic2").empty();
      $("#Muzzle2").empty();
      $("#Barrel2").empty();
      $("#Underbarrel2").empty();
      $("#Body2").empty();
      $("#Magazine2").empty();
      $("#Handle2").empty();
      $("#Stock2").empty();
    }

    loop1();

    // for (i = 0; i < 8; i++) {
    //   attachP[i] = attachments[gun][primaryRand][attachmentsP[i]][Math.floor(Math.random() * attachments[gun][primaryRand][attachmentsP[i]].length)];
    //   $(`#${attachmentsP[i]}1`).html(attachP[i]);
    //   console.log(attachP[i]);
    // }
    // for (i = 0; i < 5; i++) {
    //   console.log(secondaryRand);
    //   attachS[i] = attachments[gun2][secondaryRand][attachmentsS[i]][Math.floor(Math.random() * attachments[gun2][secondaryRand][attachmentsS[i]].length)];
    //   $(`#${attachmentsS[i]}2`).html(attachS[i]);
    //   console.log(attachS[i]);
    // }
  }

  var loop1 = function() {
    if (chooseWeapon1 === "Primary") {
      for (i = 0; i < 5; i++) {
        attachP[i] = attachments[gun][primaryRand][attachmentsP[i]][Math.floor(Math.random() * attachments[gun][primaryRand][attachmentsP[i]].length)];
        $(`#${attachmentsP[i]}1`).html(attachP[i]);
        console.log(primaryRand);
        console.log(attachP[i]);
      }
      loop2();
    }
    else if (chooseWeapon1 === "Secondary") {
      if (primaryRand === "RPG-7" || primaryRand === "Knife" || primaryRand === "M79" || primaryRand === "Cigma 2") {
        loop2();
      }
      else {
        for (i = 0; i < 5; i++) {
          attachP[i] = attachments[gun][primaryRand][attachmentsS[i]][Math.floor(Math.random() * attachments[gun][primaryRand][attachmentsS[i]].length)];
          $(`#${attachmentsS[i]}1`).html(attachP[i]);
          console.log(primaryRand);
          console.log(attachP[i]);
        }
        loop2();
      }
    }
    else return;
  }

  var loop2 = function() {
    if (chooseWeapon2 === "Primary") {
      for (i = 0; i < 5; i++) {
        attachS[i] = attachments[gun2][secondaryRand][attachmentsP[i]][Math.floor(Math.random() * attachments[gun2][secondaryRand][attachmentsP[i]].length)];
        $(`#${attachmentsP[i]}2`).html(attachS[i]);
        console.log(secondaryRand);
        console.log(attachS[i]);
      }
    }
    else if (chooseWeapon2 === "Secondary") {
      if (primaryRand === "RPG-7" || primaryRand === "Knife" || primaryRand === "M79" || primaryRand === "Cigma 2") {
        return;
      }
      else {
        for (i = 0; i < 5; i++) {
          attachS[i] = attachments[gun2][secondaryRand][attachmentsS[i]][Math.floor(Math.random() * attachments[gun2][secondaryRand][attachmentsS[i]].length)];
          $(`#${attachmentsS[i]}2`).html(attachS[i]);
          console.log(secondaryRand);
          console.log(attachS[i]);
        }
      }
    }
    else return;
  }

  var newWeapon = function() {
    if (secondaryRand === primaryRand) {
      if (chooseWeapon2 === "Primary") {
        secondaryRand = primary[Math.floor(Math.random() * primary.length)];
        newWeapon();
      }
      else if (chooseWeapon2 === "Secondary") {
        secondaryRand = secondary[Math.floor(Math.random() * secondary.length)];
        newWeapon();
      }
      console.log("new weapon");
    }
    else return;
  }

  var newStreak = function() {
    while (streak2 === streak1) {
      streak2 = streaks[Math.floor(Math.random() * streaks.length)];
    }
    while (streak3 === streak2 || streak3 === streak1) {
      streak3 = streaks[Math.floor(Math.random() * streaks.length)];
    }
  }

  $("#random").on("click", function() {
    random();
  });
})