class ItemsUI {
    constructor() {
        this.container = document.querySelector('.items-section .row')
    }

    renderItems(items) {
        this.clearContainer()

        if (!items.length) {
            this.showEmptyMsg();
            return;
        }

        let fragment = '';

        items.forEach((item) => {
            const template = ItemsUI.itemTemplate(item)
            fragment += template
        })

        this.container.insertAdjacentHTML('afterbegin', fragment)
    }

    clearContainer() {
        this.container.innerHTML = '';
    }

    showEmptyMsg() {
        const template = ItemsUI.emptyMsgTemplate()
        this.container.insertAdjacentHTML('afterbegin', template)
    }

    static emptyMsgTemplate() {
        return `
        <div class="empty-msg-container">
            <span>No items found</span>        
        </div>`
    }

    static itemTemplate(item) {
        if (!item.images.featured) {
            item.images.featured = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
        }
        return `
        <div class="col s12 m3 l3 xl3">
            <div class="card item-card ${item.rarity.name}">
            <img src="${item.images.featured}" alt="" class="item-img">
                <div class="content-box">
                    <h4 class="item-name">
                        ${item.name}
                    </h4>
                    <div class="price-wrapper">
                        <img class="coin-img" src="https://image.fnbr.co/price/icon_vbucks_50x.png" alt="">
                        <p class="item-price">
                            ${item.price}
                        </p>
                    </div>
                </div>
            </div>            
        </div>
        `
    }
}

const itemsIU = new ItemsUI()
export default itemsIU