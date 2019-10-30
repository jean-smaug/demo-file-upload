class Observable {
    constructor(element, events = []) {
        if(events.length === 0) throw Error("Must provide at least on event")
        
        this.element = element
        this.observers = []
        
        events.forEach(event => {
            this.element.addEventListener(event, this.notify)
        })
    }

    subscribe(element, cb) {
        this.observers.push({ element, cb })
    }

    notify() {
        this.observers.forEach(observer => {
            observer.cb()
        })
    }
}
