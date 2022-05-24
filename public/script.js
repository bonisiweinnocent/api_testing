document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => {


        return {
            init() {
                this.filterGarments()
                this.getPrice()

            },
            garments: [],
            genderFilter: "",
            seasonFilter: "",
            maxPrice: 0,


            filterGarments() {
                fetch(`/api/garments?gender=${this.genderFilter}&season=${this.seasonFilter} `)
                    .then(r => r.json())
                    .then(garmentsData => this.garments = garmentsData.data)
            },
            getPrice() {
                fetch(`/api/garments/price = ${this.maxPrice}`)
                    .then(r => r.json())
                    .then(garmentsData => this.garments = garmentsData.data)
            }

        }


    })
})