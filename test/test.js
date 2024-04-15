$(document).ready(() => {
    console.log('here')
    const match = get();
    const pov = {
        name: 'Killua',
        tag: '0000',
    }
    const rounds = match.metadata.rounds_played;
    console.log(match);
    const main = $('#main');
    const table = $('<div>', { id: 'statsTable' });

    table.append(createHeader(pov));
    const players = match.players.all_players.slice();

    players.sort((p1, p2) => p2.stats.score - p1.stats.score)

    players.forEach(player => {
        table.append(createPlayerCard(player, pov, rounds));
    })

    main.append(table);


})

function createPlayerCard(player, pov, rounds, isHeader) {

    const card = $(`<div class="player ${player.team.toLowerCase()} ${pov.name == player.name ? 'pov' : ''}">`);
    card.append($(`<img>`, { class: 'agent', src: player.assets.agent.small }));

    const profileAndStats = $('<div class="profileandstats">');

    const profileInfo = $('<div class="profileInfo">');
    profileInfo.append($('<div> class="username"').text(player.name));
    profileInfo.append($('<div> class="tag"').text('#' + player.tag));
    profileAndStats.append(profileInfo);

    const stats = $('<div class="stats">')

    stats.append($(`<div class="stat acs">`).text(isHeader ? 'ACS' : (player.stats.score / rounds).toFixed(0)));

    const kda = $('<div class="kda">');
    kda.append($(`<div class="stat kills">`).text(player.stats.kills));
    kda.append($(`<div class="stat deaths">`).text(player.stats.deaths));
    kda.append($(`<div class="stat assists">`).text(player.stats.assists));
    stats.append(kda);

    profileAndStats.append(stats);

    card.append(profileAndStats)

    return card;

}

function createHeader(pov) {
    const a = player = {
        team: 'grey',
        assets: {
            agent: {
                small: '',
            },
        },
        name: 'Username',
        tag: 'tag',
        stats: {
            score: 'ACS',
            kills: 'K',
            deaths: 'D',
            assists: 'A',
        }
    }
    return createPlayerCard(a, pov, 0, true);
}













function get() {
    return {
        metadata: {
            "map": "Ascent",
            "game_version": "release-03.12-shipping-16-649370",
            "game_length": 506,
            "game_start": 1641331767,
            "game_start_patched": "Tuesday, January 4, 2022 10:29 PM",
            "rounds_played": 6,
            "mode": "Spike Rush",
            "mode_id": "spikerush",
            "queue": "Spike Rush",
            "season_id": "a16955a5-4ad0-f761-5e9e-389df1c892fb",
            "platform": "PC",
            "matchid": "696848f3-f16f-45bf-af13-e2192f81a600",
            "premier_info": {
                "tournament_id": null,
                "matchup_id": null
            },
            "region": null,
            "cluster": "Paris 1"
        },
        players: {
            all_players: [
                {
                    "puuid": "5fc67e77-9e16-5cbf-8fd0-4d5d79ceedd8",
                    "name": "Excelsior",
                    "tag": "GOFIO",
                    "team": "Red",
                    "level": 193,
                    "character": "Sova",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "d2b288ea-4dc9-0b3b-fc8c-3baec575f0f8",
                    "player_title": "bec998ee-416d-ba4a-8afb-a4ba38c9e228",
                    "party_id": "26d53041-6a70-4d27-9d37-74e0503c492a",
                    "session_playtime": {
                        "minutes": 206,
                        "seconds": 12360,
                        "milliseconds": 12360000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.19044.1.256.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 2,
                        "q_cast": 2,
                        "e_cast": 5,
                        "x_cast": 1
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/d2b288ea-4dc9-0b3b-fc8c-3baec575f0f8/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/d2b288ea-4dc9-0b3b-fc8c-3baec575f0f8/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/d2b288ea-4dc9-0b3b-fc8c-3baec575f0f8/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 1134,
                        "kills": 4,
                        "deaths": 5,
                        "assists": 1,
                        "bodyshots": 10,
                        "headshots": 1,
                        "legshots": 2
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 17750,
                            "average": 2958
                        }
                    },
                    "damage_made": 911,
                    "damage_received": 973
                },
                {
                    "puuid": "321dec1f-e5bd-51ad-9269-6b135a401bfd",
                    "name": "lj0350",
                    "tag": "SNB",
                    "team": "Red",
                    "level": 177,
                    "character": "Reyna",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "7b240a91-4925-8bb6-7812-60b49543e145",
                    "player_title": "631f4283-48b1-1855-d646-5e8f80e29821",
                    "party_id": "319150b1-c4d1-452a-8388-1f190261f1d2",
                    "session_playtime": {
                        "minutes": 187,
                        "seconds": 11220,
                        "milliseconds": 11220000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.19044.1.768.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 7,
                        "q_cast": 2,
                        "e_cast": 3,
                        "x_cast": 1
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/7b240a91-4925-8bb6-7812-60b49543e145/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/7b240a91-4925-8bb6-7812-60b49543e145/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/7b240a91-4925-8bb6-7812-60b49543e145/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 1103,
                        "kills": 3,
                        "deaths": 5,
                        "assists": 3,
                        "bodyshots": 13,
                        "headshots": 1,
                        "legshots": 1
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 18950,
                            "average": 3158
                        }
                    },
                    "damage_made": 853,
                    "damage_received": 770
                },
                {
                    "puuid": "97915d11-a1a8-5608-b431-14b8c8697424",
                    "name": "Byakuya Kuchiki",
                    "tag": "sad",
                    "team": "Red",
                    "level": 244,
                    "character": "Raze",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "2ee6d025-4aac-3a67-0f6e-dba827acc75f",
                    "player_title": "8b426759-4e32-0c61-51cc-289dc0a33073",
                    "party_id": "319150b1-c4d1-452a-8388-1f190261f1d2",
                    "session_playtime": {
                        "minutes": 51,
                        "seconds": 3060,
                        "milliseconds": 3060000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.22000.1.256.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 5,
                        "q_cast": 3,
                        "e_cast": 4,
                        "x_cast": 0
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/2ee6d025-4aac-3a67-0f6e-dba827acc75f/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/2ee6d025-4aac-3a67-0f6e-dba827acc75f/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/2ee6d025-4aac-3a67-0f6e-dba827acc75f/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 830,
                        "kills": 2,
                        "deaths": 6,
                        "assists": 2,
                        "bodyshots": 13,
                        "headshots": 0,
                        "legshots": 0
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 17750,
                            "average": 2958
                        }
                    },
                    "damage_made": 555,
                    "damage_received": 913
                },
                {
                    "puuid": "f89577a0-d298-516e-ba51-bab4f056a396",
                    "name": "PIG3ON",
                    "tag": "EUW",
                    "team": "Blue",
                    "level": 107,
                    "character": "Brimstone",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "f78d39b2-4a43-35d6-488e-43a3619855c7",
                    "player_title": "63057041-4f65-5579-e5a6-d88ae7007ebb",
                    "party_id": "5f9fb4cd-dde9-47a5-a2dd-cb5b70240970",
                    "session_playtime": {
                        "minutes": 29,
                        "seconds": 1740,
                        "milliseconds": 1740000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.19041.1.256.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 7,
                        "q_cast": 3,
                        "e_cast": 6,
                        "x_cast": 1
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/f78d39b2-4a43-35d6-488e-43a3619855c7/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/f78d39b2-4a43-35d6-488e-43a3619855c7/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/f78d39b2-4a43-35d6-488e-43a3619855c7/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 504,
                        "kills": 0,
                        "deaths": 3,
                        "assists": 3,
                        "bodyshots": 11,
                        "headshots": 0,
                        "legshots": 2
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 18050,
                            "average": 3008
                        }
                    },
                    "damage_made": 504,
                    "damage_received": 653
                },
                {
                    "puuid": "e170e093-7083-5121-8deb-14089911dc40",
                    "name": "RudeLeZeb",
                    "tag": "1003",
                    "team": "Blue",
                    "level": 68,
                    "character": "KAY/O",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "b7880750-49f6-9623-fc0d-779f0e88fedb",
                    "player_title": "58dbc4af-4baf-bd4b-7084-9f92485b4006",
                    "party_id": "5a87807f-b202-42ce-9bab-99231a37a54f",
                    "session_playtime": {
                        "minutes": 34,
                        "seconds": 2040,
                        "milliseconds": 2040000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.19043.1.256.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 4,
                        "q_cast": 8,
                        "e_cast": 4,
                        "x_cast": 1
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/b7880750-49f6-9623-fc0d-779f0e88fedb/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/b7880750-49f6-9623-fc0d-779f0e88fedb/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/b7880750-49f6-9623-fc0d-779f0e88fedb/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 1570,
                        "kills": 6,
                        "deaths": 4,
                        "assists": 2,
                        "bodyshots": 7,
                        "headshots": 5,
                        "legshots": 2
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 17750,
                            "average": 2958
                        }
                    },
                    "damage_made": 996,
                    "damage_received": 685
                },
                {
                    "puuid": "54942ced-1967-5f66-8a16-1e0dae875641",
                    "name": "Henrik3",
                    "tag": "EUW3",
                    "team": "Blue",
                    "level": 103,
                    "character": "Sova",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "8edf22c5-4489-ab41-769a-07adb4c454d6",
                    "player_title": "e3ca05a4-4e44-9afe-3791-7d96ca8f71fa",
                    "party_id": "70c63996-72f5-4b7c-b8b6-3fa7bfb87dc3",
                    "session_playtime": {
                        "minutes": 33,
                        "seconds": 1980,
                        "milliseconds": 1980000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.22000.1.768.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 3,
                        "q_cast": 2,
                        "e_cast": 7,
                        "x_cast": 0
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/8edf22c5-4489-ab41-769a-07adb4c454d6/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 780,
                        "kills": 2,
                        "deaths": 3,
                        "assists": 1,
                        "bodyshots": 11,
                        "headshots": 3,
                        "legshots": 0
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 17750,
                            "average": 2958
                        }
                    },
                    "damage_made": 701,
                    "damage_received": 489
                },
                {
                    "puuid": "88ba6449-300b-5497-a856-728b704f6883",
                    "name": "nour FPS",
                    "tag": "0000",
                    "team": "Blue",
                    "level": 162,
                    "character": "Jett",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "f3a3d5d6-4005-58f7-8a87-e5b489b2db70",
                    "player_title": "42e2f97d-4e69-274c-589c-0fbdeb397df9",
                    "party_id": "bd3476f6-49d6-46a1-bc95-3426d1723645",
                    "session_playtime": {
                        "minutes": 7,
                        "seconds": 420,
                        "milliseconds": 420000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.19042.1.256.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 8,
                        "q_cast": 9,
                        "e_cast": 9,
                        "x_cast": 3
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/f3a3d5d6-4005-58f7-8a87-e5b489b2db70/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/f3a3d5d6-4005-58f7-8a87-e5b489b2db70/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/f3a3d5d6-4005-58f7-8a87-e5b489b2db70/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 3078,
                        "kills": 11,
                        "deaths": 4,
                        "assists": 1,
                        "bodyshots": 13,
                        "headshots": 8,
                        "legshots": 0
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 17750,
                            "average": 2958
                        }
                    },
                    "damage_made": 1761,
                    "damage_received": 855
                },
                {
                    "puuid": "42d470eb-87dd-5cdc-b0a3-0e1e837f480c",
                    "name": "Saint",
                    "tag": "2199",
                    "team": "Blue",
                    "level": 92,
                    "character": "Killjoy",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "f126d573-468e-a790-2c31-228bb651fa79",
                    "player_title": "574b3440-46bd-fee9-0735-12b4e8a55acd",
                    "party_id": "2f1581d1-9c9c-4e5d-ab7a-3f10c5d7ca96",
                    "session_playtime": {
                        "minutes": 2,
                        "seconds": 120,
                        "milliseconds": 120000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.19044.1.256.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 7,
                        "q_cast": 3,
                        "e_cast": 3,
                        "x_cast": 3
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/f126d573-468e-a790-2c31-228bb651fa79/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/f126d573-468e-a790-2c31-228bb651fa79/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/f126d573-468e-a790-2c31-228bb651fa79/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 970,
                        "kills": 5,
                        "deaths": 3,
                        "assists": 0,
                        "bodyshots": 16,
                        "headshots": 1,
                        "legshots": 3
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 15950,
                            "average": 2658
                        }
                    },
                    "damage_made": 614,
                    "damage_received": 559
                },
                {
                    "puuid": "cd2cb497-a398-5ec9-ab25-7138575b3376",
                    "name": "フェルスタッペン",
                    "tag": "1111",
                    "team": "Red",
                    "level": 46,
                    "character": "Phoenix",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "b7880750-49f6-9623-fc0d-779f0e88fedb",
                    "player_title": "d13e579c-435e-44d4-cec2-6eae5a3c5ed4",
                    "party_id": "034c1a47-4fb9-45a3-a49d-06e1f4c64b5d",
                    "session_playtime": {
                        "minutes": 2,
                        "seconds": 120,
                        "milliseconds": 120000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.19043.1.768.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 2,
                        "q_cast": 3,
                        "e_cast": 2,
                        "x_cast": 3
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/b7880750-49f6-9623-fc0d-779f0e88fedb/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/b7880750-49f6-9623-fc0d-779f0e88fedb/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/b7880750-49f6-9623-fc0d-779f0e88fedb/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 780,
                        "kills": 4,
                        "deaths": 4,
                        "assists": 0,
                        "bodyshots": 9,
                        "headshots": 2,
                        "legshots": 2
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 17750,
                            "average": 2958
                        }
                    },
                    "damage_made": 389,
                    "damage_received": 1096
                },
                {
                    "puuid": "685fedc8-a950-58ca-9b2c-c9497e0d0fce",
                    "name": "Killua",
                    "tag": "hate",
                    "team": "Red",
                    "level": 113,
                    "character": "Jett",
                    "currenttier": 0,
                    "currenttier_patched": "Unrated",
                    "player_card": "24e9c88c-4ee1-82fc-2048-bb8942f2147d",
                    "player_title": "d13e579c-435e-44d4-cec2-6eae5a3c5ed4",
                    "party_id": "319150b1-c4d1-452a-8388-1f190261f1d2",
                    "session_playtime": {
                        "minutes": 54,
                        "seconds": 3240,
                        "milliseconds": 3240000
                    },
                    "behavior": {
                        "afk_rounds": 0,
                        "friendly_fire": {
                            "incoming": 0,
                            "outgoing": 0
                        },
                        "rounds_in_spawn": 0
                    },
                    "platform": {
                        "type": "PC",
                        "os": {
                            "name": "Windows",
                            "version": "10.0.19042.1.256.64bit"
                        }
                    },
                    "ability_casts": {
                        "c_cast": 5,
                        "q_cast": 4,
                        "e_cast": 2,
                        "x_cast": 0
                    },
                    "assets": {
                        "card": {
                            "small": "https://media.valorant-api.com/playercards/24e9c88c-4ee1-82fc-2048-bb8942f2147d/smallart.png",
                            "large": "https://media.valorant-api.com/playercards/24e9c88c-4ee1-82fc-2048-bb8942f2147d/largeart.png",
                            "wide": "https://media.valorant-api.com/playercards/24e9c88c-4ee1-82fc-2048-bb8942f2147d/wideart.png"
                        },
                        "agent": {
                            "small": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
                            "bust": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
                            "full": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
                            "killfeed": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/killfeedportrait.png"
                        }
                    },
                    "stats": {
                        "score": 1013,
                        "kills": 4,
                        "deaths": 4,
                        "assists": 0,
                        "bodyshots": 10,
                        "headshots": 1,
                        "legshots": 1
                    },
                    "economy": {
                        "spent": {
                            "overall": 0,
                            "average": 0
                        },
                        "loadout_value": {
                            "overall": 17750,
                            "average": 2958
                        }
                    },
                    "damage_made": 533,
                    "damage_received": 824
                }
            ],
        },
    }
}