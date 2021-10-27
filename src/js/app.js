import './plugins'
import '../css/style.css'
import items from "./store/items";
import formUI from "./view/form";

document.addEventListener('DOMContentLoaded', () => {
    initApp()

    async function initApp() {
        await items.init()
        formUI.setAutocompleteData(items.skins, items.rarities)
    }
})