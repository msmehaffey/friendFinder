var friendsArray = [
    {
        userName: "President Barack Obama",
        userPicture: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
        q1Answer: 5,
        q2Answer: 5,
        q3Answer: 3,
        q4Answer: 5,
        q5Answer: 2,
        q6Answer: 5,
        q7Answer: 3,
        q8Answer: 5,
        q9Answer: 5,
        q10Answer: 5,
        total: function() {
            return this.q1Answer +this.q2Answer + this.q3Answer + this.q4Answer + this.q5Answer + this.q6Answer +this.q7Answer + this.q8Answer + this.q9Answer + this.q10Answer;
        }
    },
    {
        userName: "Tom from MySpace",
        userPicture: "https://www.hellomagazine.com/imagenes/travel/2018012645793/tom-myspace-founder-travel-photographer/0-230-700/myspace-tom-now-t.jpg",
        q1Answer: 3,
        q2Answer: 3,
        q3Answer: 5,
        q4Answer: 5,
        q5Answer: 1,
        q6Answer: 1,
        q7Answer: 7,
        q8Answer: 1,
        q9Answer: 3,
        q10Answer: 1,
        total: function() {
            return this.q1Answer +this.q2Answer + this.q3Answer + this.q4Answer + this.q5Answer + this.q6Answer +this.q7Answer + this.q8Answer + this.q9Answer + this.q10Answer;
        }
    },
    {
        userName: "Lady Gaga",
        userPicture: "data:image/jpeg;base64,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",
        q1Answer: 1,
        q2Answer: 1,
        q3Answer: 1,
        q4Answer: 5,
        q5Answer: 5,
        q6Answer: 5,
        q7Answer: 1,
        q8Answer: 1,
        q9Answer: 5,
        q10Answer: 5,
        total: function() {
            return this.q1Answer +this.q2Answer + this.q3Answer + this.q4Answer + this.q5Answer + this.q6Answer +this.q7Answer + this.q8Answer + this.q9Answer + this.q10Answer;
        }
    }
];

module.exports = friendsArray;