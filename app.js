const App2 = {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        helloWorld: function () {
            alert("Hello World")
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }
}

Vue.createApp(App2).mount('#app2')


const Table = {
    data() {
        return {
            datas: null,
            loading: false
        }
    },
    methods: {
        loadData: function () {
            this.loading = true
            fetch('https://jsonplaceholder.typicode.com/posts', {
                    // method: 'post',
                    // body: JSON.stringify({
                    //     posts : 1
                    // })
                })
                .then(response => response.json())
                .then(json => {

                    this.loading = false
                    this.datas = json
                })
        }
    },
    mounted() {
        this.loadData()
    }
}

Vue.createApp(Table).mount('#table')