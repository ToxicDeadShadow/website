const loadoutData = {
    builds: {
        xm4: {
            norecoil: {
                name: "XM4 No Recoil Build",
                attachments: [
                    "Muzzle: Infantry Compensator",
                    "Barrel: 13.5\" Reinforced Heavy",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: 45 Rnd",
                    "Handle: Airborne Elastic Wrap"
                ],
                description: "This build focuses on maximum recoil control and accuracy."
            },
            aggressive: {
                name: "XM4 Aggressive Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 13.5\" Task Force",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: STANAG 60 Rnd",
                    "Stock: Raider Pad"
                ],
                description: "Perfect for rushing and aggressive playstyle with high mobility."
            },
            tenattach: {
                name: "XM4 Ultimate Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 13.5\" Task Force",
                    "Optic: Axial Arms 3x",
                    "Laser: SOF Target Designator",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: STANAG 60 Rnd",
                    "Handle: Airborne Elastic Wrap",
                    "Stock: Raider Stock",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Flak Jacket",
                    perk2: "Scavenger",
                    perk3: "Ninja",
                    wildcard: "Gunfighter"
                },
                description: "Fully optimized XM4 for all situations."
            }
        },
        pelington: {
            quickscope: {
                name: "Pelington Quickscope Build",
                attachments: [
                    "Muzzle: Sound Moderator",
                    "Barrel: 26.5\" Tiger Team",
                    "Underbarrel: Front Grip",
                    "Handle: Serpent Wrap",
                    "Stock: Raider Stock"
                ],
                description: "Optimized for fast ADS time and quick-scoping."
            }
        },
        ak47: {
            norecoil: {
                name: "AK-47 No Recoil Build",
                attachments: [
                    "Muzzle: KGB Compensator",
                    "Barrel: 20\" Liberator",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: 40 Rnd",
                    "Handle: GRU Elastic Wrap"
                ],
                description: "Maximum stability and recoil control for precise shots."
            },
            aggressive: {
                name: "AK-47 Aggressive Build",
                attachments: [
                    "Muzzle: GRU Suppressor",
                    "Barrel: 20\" Spetsnaz RPK",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: VDV 50 Rnd Fast Mag",
                    "Stock: KGB Skeletal Stock"
                ],
                description: "High damage and mobility for aggressive play."
            },
            tenattach: {
                name: "AK-47 Ultimate Build",
                attachments: [
                    "Muzzle: GRU Suppressor",
                    "Barrel: 20\" Spetsnaz RPK",
                    "Optic: Axial Arms 3x",
                    "Laser: KGB Target Designator",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: VDV 50 Rnd Fast Mag",
                    "Handle: GRU Elastic Wrap",
                    "Stock: KGB Skeletal Stock",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Flak Jacket",
                    perk2: "Assassin",
                    perk3: "Ninja",
                    wildcard: "Gunfighter"
                },
                description: "Maximum efficiency AK-47 setup for all ranges."
            }
        },
        mp5: {
            norecoil: {
                name: "MP5 No Recoil Build",
                attachments: [
                    "Muzzle: Infantry Compensator",
                    "Barrel: 9.5\" Reinforced Heavy",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: 40 Rnd",
                    "Stock: Wire Stock"
                ],
                description: "Stable and accurate for medium range fights."
            },
            aggressive: {
                name: "MP5 Aggressive Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 9.5\" Task Force",
                    "Underbarrel: Bruiser Grip",
                    "Magazine: STANAG 50 Rnd Drum",
                    "Stock: Raider Stock"
                ],
                description: "Maximum speed and close-range effectiveness."
            }
        },
        tundra: {
            quickscope: {
                name: "LW3 Tundra Quickscope Build",
                attachments: [
                    "Muzzle: Sound Moderator",
                    "Barrel: 28.2\" Tiger Team",
                    "Underbarrel: Infiltrator Grip",
                    "Handle: Serpent Wrap",
                    "Stock: Raider Pad"
                ],
                description: "Fast ADS speed for aggressive sniping."
            }
        },
        mac10: {
            norecoil: {
                name: "MAC-10 No Recoil Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 5.9\" Task Force",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: STANAG 53 Rnd Drum",
                    "Stock: Wire Stock"
                ],
                description: "Stable MAC-10 setup for controlled spraying."
            },
            tenattach: {
                name: "MAC-10 Ultimate Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 5.9\" Task Force",
                    "Laser: SOF Target Designator",
                    "Optic: Microflex LED",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: STANAG 53 Rnd Drum",
                    "Handle: Speed Tape",
                    "Stock: Wire Stock",
                    "Rear Grip: Serpent Wrap",
                    "Ammunition: Match Grade"
                ],
                description: "Full attachment setup for maximum performance."
            }
        },
        krig6: {
            tenattach: {
                name: "Krig 6 Ultimate Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 19.7\" Ranger",
                    "Optic: Axial Arms 3x",
                    "Laser: SOF Target Designator",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: 40 Rnd",
                    "Handle: Airborne Elastic Wrap",
                    "Stock: Raider Stock",
                    "Rear Grip: Speed Grip",
                    "Ammunition: Match Grade"
                ],
                description: "Maximum attachment Krig 6 for all situations."
            }
        },
        ak74u: {
            aggressive: {
                name: "AK74u Rush Build",
                attachments: [
                    "Muzzle: Spetsnaz Compensator",
                    "Barrel: 10.3\" Task Force",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: VDV 50 Rnd Fast Mag",
                    "Stock: KGB Skeletal Stock"
                ],
                description: "Perfect for aggressive rushing and close combat."
            },
            tenattach: {
                name: "AK74u Ultimate Build",
                attachments: [
                    "Muzzle: GRU Suppressor",
                    "Barrel: 10.3\" Task Force",
                    "Laser: GRU 5mw Laser Sight",
                    "Optic: Microflex LED",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: VDV 50 Rnd Fast Mag",
                    "Handle: GRU Elastic Wrap",
                    "Stock: KGB Skeletal Stock",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                description: "Full attachment setup for maximum versatility."
            }
        },
        ffar: {
            aggressive: {
                name: "FFAR Aggressive Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 21.2\" Ranger",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: STANAG 50 Rnd",
                    "Stock: Raider Stock"
                ],
                description: "High fire rate assault rifle for aggressive play."
            },
            tenattach: {
                name: "FFAR Ultimate Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 21.2\" Ranger",
                    "Laser: SOF Target Designator",
                    "Optic: Microflex LED",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: STANAG 50 Rnd",
                    "Handle: Airborne Elastic Wrap",
                    "Stock: Raider Stock",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                description: "Maximum attachment FFAR for versatility."
            }
        },
        bullfrog: {
            aggressive: {
                name: "Bullfrog Rush Build",
                attachments: [
                    "Muzzle: GRU Suppressor",
                    "Barrel: 7.4\" Task Force",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: 85 Rnd",
                    "Stock: KGB Skeletal Stock"
                ],
                description: "High capacity SMG for extended fights."
            }
        },
        m16: {
            norecoil: {
                name: "M16 No Recoil Build",
                attachments: [
                    "Muzzle: Infantry Compensator",
                    "Barrel: 20.5\" Task Force",
                    "Underbarrel: Field Agent Foregrip",
                    "Magazine: 45 Rnd",
                    "Handle: SASR Jungle Grip"
                ],
                description: "Precision burst fire with minimal recoil."
            },
            aggressive: {
                name: "M16 Aggressive Build",
                attachments: [
                    "Muzzle: Agency Silencer",
                    "Barrel: 15.9\" Strike Team",
                    "Underbarrel: Field Agent Foregrip",
                    "Magazine: 45 Rnd Speed Mag",
                    "Handle: Airborne Elastic Wrap"
                ],
                description: "Fast-paced tactical rifle setup."
            }
        },
        milano: {
            aggressive: {
                name: "Milano Aggressive Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 10.1\" Reinforced Heavy",
                    "Underbarrel: Bruiser Grip",
                    "Magazine: 45 Rnd Drum",
                    "Stock: Raider Stock"
                ],
                description: "Close-range powerhouse build."
            },
            tenattach: {
                name: "Milano Ultimate Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 10.1\" Reinforced Heavy",
                    "Laser: Tiger Team Spotlight",
                    "Optic: Microflex LED",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: 45 Rnd Drum",
                    "Handle: Airborne Elastic Wrap",
                    "Stock: Raider Stock",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                description: "Fully loaded Milano for maximum versatility."
            }
        },
        dmr14: {
            norecoil: {
                name: "DMR-14 No Recoil Build",
                attachments: [
                    "Muzzle: Infantry Compensator",
                    "Barrel: 20.8\" Task Force",
                    "Underbarrel: Field Agent Foregrip",
                    "Magazine: 30 Rnd",
                    "Handle: SASR Jungle Grip"
                ],
                description: "Precise semi-auto rifle with minimal recoil."
            },
            tenattach: {
                name: "DMR-14 Ultimate Build",
                attachments: [
                    "Muzzle: Agency Silencer",
                    "Barrel: 20.8\" Task Force",
                    "Optic: Axial Arms 3x",
                    "Laser: SOF Target Designator",
                    "Underbarrel: Field Agent Foregrip",
                    "Magazine: 30 Rnd Speed Mag",
                    "Handle: Airborne Elastic Wrap",
                    "Stock: SAS Combat Stock",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                description: "Maximum efficiency tactical rifle setup."
            }
        },
        stoner63: {
            norecoil: {
                name: "Stoner 63 No Recoil Build",
                attachments: [
                    "Muzzle: Infantry Compensator",
                    "Barrel: 21.8\" Task Force",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: 100 Rnd",
                    "Handle: SASR Jungle Grip"
                ],
                description: "High capacity LMG with exceptional stability."
            }
        },
        qbz83: {
            tenattach: {
                name: "QBZ-83 Ultimate Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 15.5\" Task Force",
                    "Optic: Axial Arms 3x",
                    "Laser: SOF Target Designator",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: STANAG 60 Rnd",
                    "Handle: Airborne Elastic Wrap",
                    "Stock: Raider Stock",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Flak Jacket",
                    perk2: "Scavenger",
                    perk3: "Ninja",
                    wildcard: "Gunfighter"
                },
                description: "Ultimate accuracy and mobility balance."
            }
        },
        type63: {
            tenattach: {
                name: "Type 63 Ultimate Build",
                attachments: [
                    "Muzzle: GRU Suppressor",
                    "Barrel: 21.5\" Task Force",
                    "Optic: Axial Arms 3x",
                    "Laser: SOF Target Designator",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: 35 Rnd Speed Mag",
                    "Handle: GRU Elastic Wrap",
                    "Stock: KGB Pad",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Tactical Mask",
                    perk2: "Assassin",
                    perk3: "Ghost",
                    wildcard: "Gunfighter"
                },
                description: "Maximum damage tactical rifle setup."
            }
        },
        fara83: {
            aggressive: {
                name: "FARA 83 Aggressive Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 16.5\" Liberator",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: 50 Rnd",
                    "Stock: KGB Skeletal Stock"
                ],
                description: "Fast-paced assault rifle for aggressive play."
            },
            tenattach: {
                name: "FARA 83 Ultimate Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 18.1\" Task Force",
                    "Optic: Axial Arms 3x",
                    "Laser: SOF Target Designator",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: VDV 50 Rnd Fast Mag",
                    "Handle: Serpent Wrap",
                    "Stock: KGB Skeletal Stock",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Tactical Mask",
                    perk2: "Assassin",
                    perk3: "Ghost",
                    wildcard: "Gunfighter"
                },
                description: "Fully loaded FARA 83 for maximum versatility."
            }
        },
        zrg20mm: {
            quickscope: {
                name: "ZRG 20mm Quickscope Build",
                attachments: [
                    "Muzzle: Sound Moderator",
                    "Barrel: 43.9\" Combat Recon",
                    "Underbarrel: Bruiser Grip",
                    "Handle: Serpent Wrap",
                    "Stock: SAS Combat Stock"
                ],
                description: "High-powered sniper optimized for quick shots."
            },
            tenattach: {
                name: "ZRG 20mm Ultimate Build",
                attachments: [
                    "Muzzle: Wrapped Suppressor",
                    "Barrel: 43.9\" Combat Recon",
                    "Optic: Royal & Kross 4x",
                    "Laser: SWAT 5mw Laser Sight",
                    "Underbarrel: Bruiser Grip",
                    "Magazine: 5 Rnd",
                    "Handle: Serpent Wrap",
                    "Stock: SAS Combat Stock",
                    "Rear Grip: Airborne Elastic Wrap",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Tactical Mask",
                    perk2: "Assassin",
                    perk3: "Ghost",
                    wildcard: "Gunfighter"
                },
                description: "Maximum range and precision sniper setup."
            }
        },
        groza: {
            aggressive: {
                name: "Groza Aggressive Build",
                attachments: [
                    "Muzzle: GRU Suppressor",
                    "Barrel: 16.5\" CMV Mil-Spec",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: VDV 50 Rnd Fast Mag",
                    "Stock: KGB Pad"
                ],
                description: "Fast-handling assault rifle for aggressive play."
            },
            tenattach: {
                name: "Groza Ultimate Build",
                attachments: [
                    "Muzzle: GRU Suppressor",
                    "Barrel: 16.5\" CMV Mil-Spec",
                    "Optic: Microflex LED",
                    "Laser: GRU 5mw Laser Sight",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: VDV 50 Rnd Fast Mag",
                    "Handle: GRU Elastic Wrap",
                    "Stock: KGB Pad",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Flak Jacket",
                    perk2: "Assassin",
                    perk3: "Ninja",
                    wildcard: "Gunfighter"
                },
                description: "Fully optimized Groza for versatility."
            }
        },
        swiss: {
            quickscope: {
                name: "Swiss K31 Quickscope Build",
                attachments: [
                    "Muzzle: Sound Moderator",
                    "Barrel: 24.9\" Tiger Team",
                    "Underbarrel: Bruiser Grip",
                    "Handle: Serpent Wrap",
                    "Stock: Raider Stock"
                ],
                description: "Lightning-fast sniper for aggressive quickscoping."
            },
            tenattach: {
                name: "Swiss K31 Ultimate Build",
                attachments: [
                    "Muzzle: Sound Moderator",
                    "Barrel: 24.9\" Tiger Team",
                    "Optic: Royal & Kross 4x",
                    "Laser: SWAT 5mw Laser Sight",
                    "Underbarrel: Bruiser Grip",
                    "Magazine: 8 Rnd Mag",
                    "Handle: Serpent Wrap",
                    "Stock: Raider Stock",
                    "Rear Grip: Airborne Elastic Wrap",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Tactical Mask",
                    perk2: "Assassin",
                    perk3: "Ghost",
                    wildcard: "Gunfighter"
                },
                description: "Maximum versatility Swiss K31 setup."
            }
        },
        rpd: {
            norecoil: {
                name: "RPD No Recoil Build",
                attachments: [
                    "Muzzle: Spetsnaz Compensator",
                    "Barrel: 20.3\" Task Force",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: 120 Rnd",
                    "Handle: GRU Elastic Wrap"
                ],
                description: "Stable LMG build for sustained fire."
            },
            tenattach: {
                name: "RPD Ultimate Build",
                attachments: [
                    "Muzzle: GRU Suppressor",
                    "Barrel: 20.3\" Task Force",
                    "Optic: Axial Arms 3x",
                    "Laser: GRU 5mw Laser Sight",
                    "Underbarrel: Spetsnaz Grip",
                    "Magazine: 120 Rnd Speed Mag",
                    "Handle: GRU Elastic Wrap",
                    "Stock: KGB Pad",
                    "Rear Grip: Speed Tape",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Flak Jacket",
                    perk2: "Scavenger",
                    perk3: "Gung-ho",
                    wildcard: "Gunfighter"
                },
                description: "Maximum efficiency RPD setup."
            }
        },
        m82: {
            tenattach: {
                name: "M82 Ultimate Build",
                attachments: [
                    "Muzzle: Wrapped Suppressor",
                    "Barrel: 22.6\" Dragon Taper",
                    "Optic: Royal & Kross 4x",
                    "Laser: SWAT 5mw Laser Sight",
                    "Underbarrel: Bruiser Grip",
                    "Magazine: 9 Rnd",
                    "Handle: Airborne Elastic Wrap",
                    "Stock: SAS Combat Stock",
                    "Rear Grip: Serpent Wrap",
                    "Ammunition: Match Grade"
                ],
                perks: {
                    perk1: "Flak Jacket",
                    perk2: "Assassin",
                    perk3: "Ghost",
                    wildcard: "Gunfighter"
                },
                description: "Maximum range and damage semi-auto sniper setup."
            }
        },
        carv2: {
            aggressive: {
                name: "CARV.2 Aggressive Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 18.2\" Strike Team",
                    "Underbarrel: Field Agent Grip",
                    "Magazine: 45 Rnd Speed Mag",
                    "Handle: Serpent Wrap"
                ],
                description: "Fast burst tactical rifle for aggressive play."
            }
        },
        lc10: {
            aggressive: {
                name: "LC10 Rush Build",
                attachments: [
                    "Muzzle: Agency Suppressor",
                    "Barrel: 13.9\" Task Force",
                    "Underbarrel: Bruiser Grip",
                    "Magazine: STANAG 52 Rnd",
                    "Stock: Raider Stock"
                ],
                description: "Fast-handling SMG built for rushing."
            }
        }
    },

    keywords: {
        norecoil: ["no recoil", "low recoil", "stable", "accuracy", "-r", "nr"],
        aggressive: ["aggressive", "rush", "rushing", "fast", "-a", "ae"],
        quickscope: ["quickscope", "quick scope", "quick-scope", "snipe", "qs", "-q"],
        tenattach: ["10 attachments", "-10", "full build", "ultimate", "max attachments"]
    },

    helpData: {
        commands: [
            "-r, nr → No Recoil Build",
            "-a, ae → Aggressive Build",
            "qs, -q → Quickscope Build",
            "-10 → 10 Attachment Build (Ultimate Setup)",
            "info [weapon] → Detailed Weapon Statistics",
            "help → Show this help message"
        ],
        weapons: {
            "Assault Rifles": ["XM4", "AK-47", "Krig 6", "FFAR", "QBZ-83", "FARA 83", "Groza"],
            "SMGs": ["MP5", "MAC-10", "AK74u", "Milano", "Bullfrog", "KSP 45", "LC10"],
            "Tactical Rifles": ["M16", "DMR-14", "Type 63", "CARV.2", "Aug"],
            "LMGs": ["Stoner 63", "RPD", "M60"],
            "Snipers": ["Pelington", "LW3 Tundra", "ZRG 20mm", "Swiss K31", "M82"]
        },
        perks: {
            "Perk 1": ["Flak Jacket", "Tactical Mask", "Engineer"],
            "Perk 2": ["Scavenger", "Assassin", "Tracker", "Quartermaster"],
            "Perk 3": ["Ghost", "Ninja", "Gung-ho", "Cold Blooded"],
            "Wildcards": ["Gunfighter", "Perk Greed", "Danger Close"]
        },
        examples: [
            "xm4 -r (XM4 No Recoil Build)",
            "mp5 ae (MP5 Aggressive Build)",
            "tundra qs (Tundra Quickscope Build)",
            "mac10 -10 (MAC-10 Ultimate Build)",
            "krig6 -10 (Krig 6 Ultimate Build)",
            "qbz83 -10 (QBZ-83 Ultimate Build with Perks)",
            "type63 -10 (Type 63 Ultimate Build with Perks)",
            "fara83 -10 (FARA 83 Ultimate Build)",
            "zrg20mm -10 (ZRG 20mm Ultimate Build)",
            "info xm4 (XM4 Statistics)",
            "info ak47 (AK-47 Statistics)"
        ]
    }
};

function displayBuild(build) {
    return `
        <h3>${build.name}</h3>
        <p>${build.description}</p>
        <br>
        <strong>Attachments:</strong>
        <ul>
            ${build.attachments.map(att => `<li>${att}</li>`).join('')}
        </ul>
        ${build.perks ? `
        <br>
        <strong>Recommended Perks:</strong>
        <ul>
            <li>Perk 1: ${build.perks.perk1}</li>
            <li>Perk 2: ${build.perks.perk2}</li>
            <li>Perk 3: ${build.perks.perk3}</li>
            <li>Wildcard: ${build.perks.wildcard}</li>
        </ul>
        ` : ''}
    `;
}
