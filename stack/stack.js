class Stack {

    constructor(){
        this.dataBase = []
        this.count = 0
    }

    push(data){
        this.dataBase[this.count] = data
        this.count++;
    }

    pop(){}

    remove(index){}

    length(){
        return this.dataBase.length
    }

    isEmpty(){}

    isPresent(data){}

    print(){
        this.dataBase.forEach(data => console.log(data))
    }
}

st = new Stack()
st.push(71);
st.push(72)
st.print()
console.log(st.length());