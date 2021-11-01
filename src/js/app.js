import './plugins'
import '../css/style.css'
import items from "./store/items";
import formUI from "./view/form";

document.addEventListener('DOMContentLoaded', () => {
    initApp()

    const form = formUI.form
    //form events

    form.addEventListener('submit', (e) => {
      e.preventDefault()
        onFormSubmit()
    })

    form.addEventListener('reset', (e) => {

    })

    async function initApp() {
        await items.init()
        formUI.setAutocompleteData(items.skins, items.rarities)
    }

    async function onFormSubmit() {
        //values put in name and rarity input
        const name = formUI.nameValue
        const rarity = formUI.rarityValue

        switch (name){
            case '':
                await items.fetchItems({
                    rarity
                })
                break;
            default:
                await items.fetchItems({
                    name,
                    rarity
                })
        }

        if (rarity === ''){
            await items.fetchItems({
                name
            })
        }
    }
})