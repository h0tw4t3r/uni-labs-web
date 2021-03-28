export default class ItemModel {
    constructor(url) {
        this.id = uuidv4()
        this.url = url

        this.onChangeCallback = null
        return this.initOnModelChange()
    }

    toggleShortening() {
        fetch(`https://api-ssl.bitly.com/v4/shorten`, {
            method: 'POST',
            headers: {'Authorization': 'Bearer d9b3456761fc118d2153695e81da4779972eb167',
            'Content-Type': 'application/json'},
            body: JSON.stringify({
                long_url: this.url
            })
        })
            .then(res => res.json())
            .then(res => {
                this.shortened = res.link
            })
            .catch(err => alert(err))
    }

    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                if (this.onChangeCallback) this.onChangeCallback(this);
                return true;
            }
        }
        return new Proxy(this, handler);
    }
}