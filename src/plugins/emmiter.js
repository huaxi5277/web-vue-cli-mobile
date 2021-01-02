export default  {
    methods : {
        dispatch(name , data ){ 
            let parent = this.$parent 

            while(parent) {
                parent.$emit(name , data) 
                parent = parent.$parent 
            }

        },
        boardcast(name , data ) {
            boardcast.call(this , name , data)
        }
    }
}


function boardcast (name , data ) { 

    this.$children.forEach((child)=>{
        child.$emit(name , data ) 
        if(child.$children.length >0) {
            boardcast.call(this , name , data)
        }
    })
    
}
 