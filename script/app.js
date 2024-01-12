const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputName: '',
            names : [],
            error : '',
            showError : false,
            result : ''
        }
    },
    computed: {
        isReady() {
            return this.names.length > 1
        }
    },
    methods: {
        addNameToList(){
            const userName = this.inputName;
            if(this.validate(userName)){
                this.names.push(userName);
                this.inputName = '';
                this.showError = false
                console.log(this.names)
            } else {
                this.showError = true
            }
        },
        validate(value) {
            this.error = '';
            if (value === '') {
                this.error = 'Maaf, nama tidak boleh kosong bossqueee'
                return false
            }

            if (this.names.includes(value)) {
                this.error = 'Maaf, nama tidak boleh ada yang sama'
                return false
            }

            return true
        },

        removeName(index){
            this.names.splice(index, 1)
        },
        showResult(){
            this.state = false
            this.generatedResult()
        },
        getRandomName () {
            return this.names[Math.floor(Math.random() * this.names.length)]
        },
        generatedResult(){
            let randName = this.getRandomName();
            if(this.result !== '') {
                while (randName === this.result) {
                    randName = this.getRandomName()
                }
            }

            this.result = randName
        },
        resetApp(){
            this.state = true,
            this.state = true,
            this.inputName = '',
            this.names = [],
            this.error = '',
            this.showError = false,
            this.result = ''
        },
        getNewResult(){
            this.generatedResult();
        }
    }
}).mount('#app')