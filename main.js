const app = new Vue({
    el:"#app",
    data:{
        title: "GYM con Vue",
        works: [],
        newWork: ''
    },
    methods:{
        addWork () {
            console.log(this.works)
            this.works.push({name: this.newWork, status: false});
            this.newWork = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.works))
        },
        btnToggle (index) {
            this.works[index].status = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.works))
        },
        deleteBtn(index){
            this.works.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.works))
        }
    },
    created: function(){
        let dataDb = JSON.parse(localStorage.getItem('gym-vue'))
        if(dataDb === null){
            this.works = []
        } else {
            this.works = dataDb;
        }
    }
})