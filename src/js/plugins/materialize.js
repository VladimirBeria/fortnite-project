import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

const autocompleteName = document.querySelectorAll('#autocomplete-name')
M.Autocomplete.init(autocompleteName)

export function getAutocompleteNameInstance(elem) {
    return M.Autocomplete.getInstance(elem)
}

const autocompleteRarity = document.querySelectorAll('#autocomplete-rarity')
M.Autocomplete.init(autocompleteRarity, {
    data: {

    }
})
export function getAutocompleteRarityInstance(elem) {
    return M.Autocomplete.getInstance(elem)
}