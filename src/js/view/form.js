import {getAutocompleteNameInstance, getAutocompleteRarityInstance} from '../plugins/materialize'

class FormUI {
    constructor(nameInstance, rarityInstance) {
        this._form = document.forms['itemsForm']
        this.name = document.getElementById('autocomplete-name')
        this.rarity = document.getElementById('autocomplete-rarity')
        this.autocompleteName = nameInstance(this.name)
        this.autocompleteRarity= rarityInstance(this.rarity)
    }

    get form(){
        return this._form
    }

    get nameValue(){
        return this.name
    }

    getRarityValue(){
        return this.rarity
    }

    /**
     * ``
     * @param name
     * @param rarity
     */
    setAutocompleteData(name, rarity){
        this.autocompleteName.updateData(name)
        this.autocompleteRarity.updateData(rarity)
    }
}

const formUI = new FormUI(getAutocompleteNameInstance, getAutocompleteRarityInstance)

export default formUI