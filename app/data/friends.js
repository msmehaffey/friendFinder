var friendsArray = [
    {
        userName: "test1",
        userPicture: "test1",
        q1Answer: 1,
        q2Answer: 1,
        q3Answer: 1,
        q4Answer: 1,
        q5Answer: 1,
        total: function() {
            return this.q1Answer +this.q2Answer + this.q3Answer + this.q4Answer + this.q5Answer;
        }
    },
    {
        userName: "test2",
        userPicture: "test2",
        q1Answer: 2,
        q2Answer: 2,
        q3Answer: 2,
        q4Answer: 2,
        q5Answer: 2,
        total: function() {
            return this.q1Answer +this.q2Answer + this.q3Answer + this.q4Answer + this.q5Answer;
        }
    },
    {
        userName: "test3",
        userPicture: "test3",
        q2Answer: 4,
        q1Answer: 4,
        q3Answer: 4,
        q4Answer: 4,
        q5Answer: 4,
        total: function() {
            return this.q1Answer +this.q2Answer + this.q3Answer + this.q4Answer + this.q5Answer;
        }
    }
];

module.exports = friendsArray;