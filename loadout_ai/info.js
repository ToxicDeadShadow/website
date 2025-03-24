const weaponInfo = {
    xm4: {
        name: "XM4 Assault Rifle",
        category: "Assault Rifle",
        stats: {
            rpm: 722,
            damage: {
                close: "30-27",
                medium: "27-25",
                long: "25-22"
            },
            effectiveRange: "38m",
            recoilPattern: "Moderate vertical with slight right drift",
            mobility: {
                sprintSpeed: "10.26 m/s",
                adsSpeed: "300ms",
                sprintToFire: "400ms"
            },
            ammoCapacity: {
                base: "30 rounds",
                extended: "45/60 rounds"
            }
        },
        builds: {
            norecoil: {
                modifiedStats: {
                    recoil: "-40% Vertical, -30% Horizontal",
                    mobility: "-5% Movement Speed",
                    adsSpeed: "+50ms"
                },
                playstyle: "Medium range accuracy focused"
            },
            aggressive: {
                modifiedStats: {
                    damage: "+5% All Ranges",
                    mobility: "+5% Movement Speed",
                    adsSpeed: "-50ms"
                },
                playstyle: "Close to medium range rush"
            },
            tenattach: {
                modifiedStats: {
                    damage: "+7% All Ranges",
                    recoil: "-20% All",
                    mobility: "+3% All",
                    adsSpeed: "-30ms"
                },
                playstyle: "Versatile all-range combat"
            }
        },
        description: "Well-rounded assault rifle with balanced stats. Great for beginners and veterans alike."
    },

    ak47: {
        name: "AK-47 Assault Rifle",
        category: "Assault Rifle",
        stats: {
            rpm: 600,
            damage: {
                close: "38-35",
                medium: "35-32",
                long: "32-28"
            },
            effectiveRange: "44m",
            recoilPattern: "High vertical with moderate side-to-side bounce",
            mobility: {
                sprintSpeed: "10.26 m/s",
                adsSpeed: "325ms",
                sprintToFire: "400ms"
            },
            ammoCapacity: {
                base: "30 rounds",
                extended: "40/50 rounds"
            }
        },
        builds: {
            norecoil: {
                modifiedStats: {
                    recoil: "-45% Vertical, -35% Horizontal",
                    mobility: "-7% Movement Speed",
                    adsSpeed: "+40ms"
                },
                playstyle: "Medium to long range accuracy"
            },
            aggressive: {
                modifiedStats: {
                    damage: "+8% All Ranges",
                    mobility: "+7% Movement Speed",
                    adsSpeed: "-30ms"
                },
                playstyle: "Aggressive close to medium range"
            },
            tenattach: {
                modifiedStats: {
                    damage: "+10% All Ranges",
                    recoil: "-25% All",
                    mobility: "+5% All",
                    adsSpeed: "-25ms"
                },
                playstyle: "All-purpose powerhouse"
            }
        },
        description: "High damage assault rifle with challenging recoil. Devastating in skilled hands."
    },

    mac10: {
        name: "MAC-10 SMG",
        category: "Submachine Gun",
        stats: {
            rpm: 1118,
            damage: {
                close: "27-24",
                medium: "24-22",
                long: "22-18"
            },
            effectiveRange: "18m",
            recoilPattern: "High vertical with significant side-to-side",
            mobility: {
                sprintSpeed: "10.8 m/s",
                adsSpeed: "275ms",
                sprintToFire: "350ms"
            },
            ammoCapacity: {
                base: "32 rounds",
                extended: "43/53 rounds"
            }
        },
        builds: {
            norecoil: {
                modifiedStats: {
                    recoil: "-40% All",
                    mobility: "-3% Movement Speed",
                    adsSpeed: "+20ms"
                },
                playstyle: "Close range control"
            },
            tenattach: {
                modifiedStats: {
                    damage: "+5% All Ranges",
                    recoil: "-30% All",
                    mobility: "+8% All",
                    adsSpeed: "-15ms"
                },
                playstyle: "Ultimate close quarters weapon"
            }
        },
        description: "Extremely high rate of fire SMG with excellent mobility."
    },

    pelington: {
        name: "Pelington 703",
        category: "Sniper Rifle",
        stats: {
            rpm: 54,
            damage: {
                close: "250-250",
                medium: "250-250",
                long: "250-245"
            },
            effectiveRange: "50m+",
            recoilPattern: "High vertical per shot",
            mobility: {
                sprintSpeed: "10.26 m/s",
                adsSpeed: "500ms",
                sprintToFire: "450ms"
            },
            ammoCapacity: {
                base: "5 rounds",
                extended: "7 rounds"
            }
        },
        builds: {
            quickscope: {
                modifiedStats: {
                    adsSpeed: "-100ms",
                    mobility: "+10% Movement Speed",
                    sprintToFire: "-50ms"
                },
                playstyle: "Aggressive quickscoping"
            }
        },
        description: "Fast-handling sniper rifle ideal for aggressive playstyles."
    },

    mp5: {
        name: "MP5 Submachine Gun",
        category: "Submachine Gun",
        stats: {
            rpm: 857,
            damage: {
                close: "32-28",
                medium: "28-24",
                long: "24-20"
            },
            effectiveRange: "22m",
            recoilPattern: "Low vertical, slight rightward drift",
            mobility: {
                sprintSpeed: "10.8 m/s",
                adsSpeed: "250ms",
                sprintToFire: "325ms"
            },
            ammoCapacity: {
                base: "30 rounds",
                extended: "40/50 rounds"
            }
        },
        builds: {
            norecoil: {
                modifiedStats: {
                    recoil: "-35% All",
                    mobility: "-2% Movement Speed",
                    adsSpeed: "+25ms"
                },
                playstyle: "Accurate close-mid range"
            },
            aggressive: {
                modifiedStats: {
                    damage: "+6% All Ranges",
                    mobility: "+8% Movement Speed",
                    adsSpeed: "-20ms"
                },
                playstyle: "High mobility rush"
            }
        },
        description: "Versatile SMG with excellent handling and reliable damage output."
    },

    krig6: {
        name: "Krig 6 Assault Rifle",
        category: "Assault Rifle",
        stats: {
            rpm: 652,
            damage: {
                close: "33-30",
                medium: "30-28",
                long: "28-25"
            },
            effectiveRange: "45m",
            recoilPattern: "Very low vertical, minimal horizontal",
            mobility: {
                sprintSpeed: "10.26 m/s",
                adsSpeed: "300ms",
                sprintToFire: "400ms"
            },
            ammoCapacity: {
                base: "30 rounds",
                extended: "40/50 rounds"
            }
        },
        builds: {
            tenattach: {
                modifiedStats: {
                    damage: "+5% All Ranges",
                    recoil: "-40% All",
                    mobility: "+5% All",
                    adsSpeed: "-30ms"
                },
                playstyle: "Versatile long-range precision"
            }
        },
        description: "Low recoil assault rifle perfect for consistent accuracy at range."
    },

    tundra: {
        name: "LW3 Tundra",
        category: "Sniper Rifle",
        stats: {
            rpm: 47,
            damage: {
                close: "280-280",
                medium: "280-275",
                long: "275-270"
            },
            effectiveRange: "75m+",
            recoilPattern: "High vertical kick per shot",
            mobility: {
                sprintSpeed: "10.26 m/s",
                adsSpeed: "650ms",
                sprintToFire: "450ms"
            },
            ammoCapacity: {
                base: "5 rounds",
                extended: "7 rounds"
            }
        },
        builds: {
            quickscope: {
                modifiedStats: {
                    adsSpeed: "-150ms",
                    mobility: "+8% Movement Speed",
                    sprintToFire: "-50ms"
                },
                playstyle: "Quick-scoping and aggressive sniping"
            }
        },
        description: "High-power sniper rifle with excellent one-shot kill potential."
    },

    swiss: {
        name: "Swiss K31",
        category: "Sniper Rifle",
        stats: {
            rpm: 56,
            damage: {
                close: "250-250",
                medium: "250-245",
                long: "245-240"
            },
            effectiveRange: "50m+",
            recoilPattern: "Moderate vertical, quick recenter",
            mobility: {
                sprintSpeed: "10.26 m/s",
                adsSpeed: "550ms",
                sprintToFire: "400ms"
            },
            ammoCapacity: {
                base: "6 rounds",
                extended: "8 rounds"
            }
        },
        builds: {
            quickscope: {
                modifiedStats: {
                    adsSpeed: "-125ms",
                    mobility: "+12% Movement Speed",
                    sprintToFire: "-75ms"
                },
                playstyle: "Fast-paced aggressive sniping"
            },
            tenattach: {
                modifiedStats: {
                    damage: "+5% All Ranges",
                    adsSpeed: "-100ms",
                    mobility: "+10% All",
                    recoil: "-25% All"
                },
                playstyle: "Versatile quick-scoping specialist"
            }
        },
        description: "Fast-handling sniper rifle ideal for aggressive playstyles and quick-scoping."
    },

    ffar: {
        name: "FFAR 1 Assault Rifle",
        category: "Assault Rifle",
        stats: {
            rpm: 909,
            damage: {
                close: "27-25",
                medium: "25-23",
                long: "23-21"
            },
            effectiveRange: "38m",
            recoilPattern: "High vertical, moderate horizontal",
            mobility: {
                sprintSpeed: "10.26 m/s",
                adsSpeed: "275ms",
                sprintToFire: "400ms"
            },
            ammoCapacity: {
                base: "25 rounds",
                extended: "38/50 rounds"
            }
        },
        builds: {
            aggressive: {
                modifiedStats: {
                    damage: "+7% All Ranges",
                    mobility: "+10% Movement Speed",
                    adsSpeed: "-25ms"
                },
                playstyle: "Fast-paced aggressive"
            },
            tenattach: {
                modifiedStats: {
                    damage: "+10% All Ranges",
                    recoil: "-30% All",
                    mobility: "+8% All",
                    adsSpeed: "-20ms"
                },
                playstyle: "Maximum versatility setup"
            }
        },
        description: "High fire rate assault rifle with excellent close-range potential."
    },

    milano: {
        name: "Milano 821 SMG",
        category: "Submachine Gun",
        stats: {
            rpm: 576,
            damage: {
                close: "38-35",
                medium: "35-32",
                long: "32-28"
            },
            effectiveRange: "25m",
            recoilPattern: "Low vertical, minimal horizontal",
            mobility: {
                sprintSpeed: "10.8 m/s",
                adsSpeed: "250ms",
                sprintToFire: "300ms"
            },
            ammoCapacity: {
                base: "32 rounds",
                extended: "45/55 rounds"
            }
        },
        builds: {
            aggressive: {
                modifiedStats: {
                    damage: "+8% All Ranges",
                    mobility: "+12% Movement Speed",
                    adsSpeed: "-30ms"
                },
                playstyle: "Close range powerhouse"
            }
        },
        description: "Hard-hitting SMG with excellent damage per shot."
    },

    m82: {
        name: "M82 Sniper Rifle",
        category: "Sniper Rifle",
        stats: {
            rpm: 75,
            damage: {
                close: "250-250",
                medium: "250-245",
                long: "245-240"
            },
            effectiveRange: "75m+",
            recoilPattern: "Very high vertical kick",
            mobility: {
                sprintSpeed: "10.26 m/s",
                adsSpeed: "700ms",
                sprintToFire: "450ms"
            },
            ammoCapacity: {
                base: "7 rounds",
                extended: "9 rounds"
            }
        },
        builds: {
            tenattach: {
                modifiedStats: {
                    adsSpeed: "-150ms",
                    recoil: "-35% All",
                    mobility: "+5% All"
                },
                playstyle: "Semi-automatic long range specialist"
            }
        },
        description: "Semi-automatic sniper rifle with high damage output."
    }
};

function getWeaponInfo(weapon, build = null) {
    const info = weaponInfo[weapon];
    if (!info) return "Weapon information not found.";

    let response = `
        <h3>${info.name}</h3>
        <div class="weapon-stats">
            <h4>Base Statistics:</h4>
            <ul>
                <li>Category: ${info.category}</li>
                <li>Fire Rate: ${info.stats.rpm} RPM</li>
                <li>Damage Range:</li>
                <ul>
                    <li>Close: ${info.stats.damage.close}</li>
                    <li>Medium: ${info.stats.damage.medium}</li>
                    <li>Long: ${info.stats.damage.long}</li>
                </ul>
                <li>Effective Range: ${info.stats.effectiveRange}</li>
                <li>Recoil Pattern: ${info.stats.recoilPattern}</li>
            </ul>

            <h4>Mobility:</h4>
            <ul>
                <li>Sprint Speed: ${info.stats.mobility.sprintSpeed}</li>
                <li>ADS Speed: ${info.stats.mobility.adsSpeed}</li>
                <li>Sprint to Fire: ${info.stats.mobility.sprintToFire}</li>
            </ul>

            <h4>Magazine Capacity:</h4>
            <ul>
                <li>Base: ${info.stats.ammoCapacity.base}</li>
                <li>Extended: ${info.stats.ammoCapacity.extended}</li>
            </ul>
    `;

    if (build && info.builds[build]) {
        const buildInfo = info.builds[build];
        response += `
            <h4>${build.charAt(0).toUpperCase() + build.slice(1)} Build Impact:</h4>
            <ul>
                ${Object.entries(buildInfo.modifiedStats).map(([stat, value]) => 
                    `<li>${stat}: ${value}</li>`).join('')}
            </ul>
            <p><strong>Playstyle:</strong> ${buildInfo.playstyle}</p>
        `;
    }

    response += `
            <p class="weapon-description">${info.description}</p>
        </div>
    `;

    return response;
}
