class ItemsUI {
    constructor() {
        this.container = document.querySelectorAll('.items-section .row')
    }

    renderItems(items) {
        this.clearContainer()

        if (!items.length) {

        }
    }

    clearContainer() {
        this.container.innerHTML = ''
    }

    showEmptyMsg() {
        const template = ItemsUI.emptyMsgTemplate()
    }

    static emptyMsgTemplate() {
        return `
        <div class="empty-msg-container">
            No         
        </div>`

    }
}