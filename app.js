var app = new Vue({
    el: '#app',
    data: {
        judul: 'Kelompok Buku',
        kelompok: ''
    },
    mounted() {
        let url = "http://127.0.0.1:8000/api/kelompok/"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.kelompok = data
            })
    }
})