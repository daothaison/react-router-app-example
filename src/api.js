const MemberAPI = {
    members: [
        { number: 1, name: "Ben Blocker", position: "Director" },
        { number: 2, name: "Dave Defender", position: "CEO" },
        { number: 3, name: "Sam Sweeper", position: "CTO" },
        { number: 4, name: "Matt Midfielder", position: "CIO" },
        { number: 5, name: "William Winger", position: "Member" },
        { number: 6, name: "Fillipe Forward", position: "Member" }
    ],
    all: function() { return this.members},
    get: function(id) {
        const isMember = p => p.number === id
        return this.members.find(isMember)
    }
}

export default MemberAPI
