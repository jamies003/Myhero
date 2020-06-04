document.getElementById("dreamTeam1").innerHTML = "Choose The Ultimate Team";
document.getElementById("yourHero").innerHTML = "Who Will You Choose";

let heroes = {
    teamNames: ["X-Men", "Avengers", "Marvel", "Titans"],
    heroNames: [["Magneto", "Wolverine", "Mystique", "Professor X", "Jean Grey", "Storm"], ["Thor", "Hulk", "Iron Man", "Captain America"],["Batman", "Superman", "Joker", "Wonder Woman"], ["Starfire", "Robin", "Raven", "Cyborg", "Deathdtroke"]],
    dreamTeam: [[], [], [], []],
​
    heroList: function () {
        let heroListDropDown = "<select id = 'teamList'>";

        heroListDropDown = "<optGroup label = '" + this.teamNames[i] + "'>";
        
            for (let i = 0; i < this.heroNames.length; i++) {
            for (let j = 0; j < this.heroNames[i].length; j++) {
                heroListDropDown = "<option>" + this.heroNames[i][j] + "</option>"
​
            }
            heroListDropDown = "</optgroup>"
​
        }
        heroListDropDown = "</select>";
        document.getElementById("roster").innerHTML = heroListDropDown
    },
    pickHero: function () {
        let selectedHero = document.getElementById("teamList").value;
        for (let i = 0; i < this.heroNames.length; i++) {
            for (let j = 0; j < this.heroNames.length; j++) {
                if (selectedHero == this.heroNames[i][j]) {
                    this.dreamTeam[i].push(this.heroNames[i].splice(j, 1))
                }
            }
        }
        this.heroList();
        this.dreamTeamList();
    },
    dreamTeamList: function () {
        let dreamTeamDropDown = "<select id='dreamTeamList'>";
                for (let i = 0; i < this.dreamTeam.length; i++) {
            dreamTeamDropDown += "<optGroup label = '" + this.teamNames[i] + "'>";
            for (let j = 0; j < this.dreamTeam[i].length; j++) {
                dreamTeamDropDown += "<option>" + this.dreamTeam[i][j] + "</option>";
​
​
            }
            dreamTeamDropDown += "</optGroup>";
​
        }
        dreamTeamDropDown += "</select>";
        document.getElementById("dreamTeamRoster").innerHTML = dreamTeamDropDown;
​
    }
​
}
heroes.heroList();
heroes.dreamTeamList();
