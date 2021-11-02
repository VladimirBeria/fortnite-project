import api from "../services/apiService";

class Items {
    constructor(api) {
        this.api = api
        this.lastSearch = {}
    }

    async init() {
        const response = await Promise.all(
            [
                this.api.items(),
                this.api.rarity()
            ]
        )

        const [arrOfItems, arrOfRarity] = response;
        this.skins = this.serializeItems(arrOfItems.items)
        this.rarities = this.serializeRarities(arrOfRarity.rarities)
        this.debugSkins()
        return response
    }

    serializeItems(items) {
        //{'item' : { ... }}
        return items.reduce((acc, item) => {
            acc[item.name] = item
            return acc
        }, {})
    }

    serializeRarities(rarities) {
        //{'rarity' : { ... }}
        return rarities.reduce((acc, rarity) => {
            acc[rarity.id] = rarity
            return acc
        }, {})
    }

    debugSkins() {
        console.log(this.skins)
        console.log(this.rarities)
    }

    async fetchItems(params) {
        const response = await this.api.items(params)
        this.lastSearch = this.serializeSkins(response.items)
        console.log(this.lastSearch)
    }


    serializeSkins(skins) {
        return Object.values(skins).map((skin) => {
            return {
                ...skins,
                name: skin.name,
                images: skin.images,
                price: skin.price,
                type: skin.type,
                rarity: skin.rarity,
                interest: skin.interest,
                releaseDate: skin.releaseDate,
                set: skin.set
            }
        })

    }
}

const items = new Items(api)

export default items