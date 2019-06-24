var app = new Vue({ 
    el: '#app',
    data: {
        title: 'Brown Birdie 2019',
        votekey: '',
        votekeyIsValid: false,
    },
    mounted() {
        if(localStorage.votekey) {
            this.votekey = localStorage.votekey;
            this.signIn();
        }
    },
    methods: {
        signIn: function() {
            this.votekeyIsValid = true;
            localStorage.votekey = this.votekey;
        },
        signOut: function() {
            this.votekeyIsValid = false;
            localStorage.votekey = '';
            this.votekey = '';
        }
    },
});
