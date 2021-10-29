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

    form.addEventListener('reset', (e)=>{

    })

    async function initApp() {
        await items.init()
        formUI.setAutocompleteData(items.skins, items.rarities)
    }

    async function onFormSubmit() {
        const name = formUI.nameValue
        const rarity = formUI.rarityValue

        await items.fetchItems({
            name,
            rarity
        })
    }
})