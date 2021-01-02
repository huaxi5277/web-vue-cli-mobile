class Bus {
    constructor(){
        this.callbacks = {}
    }
    $emit(name) { 

        if(this.callbacks[name]) {
            this.callbacks[name].forEach(cb=>cb())
        }

    }

    $on(name , fn) { 

        this.callbacks[name] = this.callbacks[name] || []
        this.callbacks[name].push(fn)

    }
}

export default {
   install(Vue){
       Vue.prototype.$bus = new Bus()

   }
}


