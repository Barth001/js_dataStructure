class Stack {

    constructor(){
        this.dataBase = []
        this.count = 0
    }

    push(data){
        this.dataBase[this.count] = data
        this.count++;
    }

    pop(){
        let data = this.dataBase[this.count-1]
        this.count--; 
        return data
    }


    length(){
        return this.count
    }

    isEmpty(){
        return this.count > 0
    }

    isPresent(data){
        for(let i = 0; i < this.count; i++){
            if(this.dataBase[i] === data)
            return true;
        }
        return false;
    }

    print(){
        if(this.count <= 0){
            console.log("Empty stack");
            return;
        }
        for(let i = 0; i < this.count; i++)
        console.log(this.dataBase[i]);
    }
}

st = new Stack()
st.push(71);
st.push(72)
st.pop()
// st.pop()
st.print()
console.log(st.isPresent(63));
console.log(st.isEmpty());
console.log(st.length());