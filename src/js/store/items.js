import api from "../services/apiService";

class Items {
    constructor(api) {
        this.api = api
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
        console.log(this.rarities)
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
    }
}

const items = new Items(api)

export default items