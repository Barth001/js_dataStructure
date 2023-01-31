class Node{
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null
    }

    length(){}

    print(){}

    addAtBeginning(data){
        let new_node = new Node(data, null)
        if(this.head == null){
            this.head = new_node
        } else {
            new_node.next = this.head
            this.head = new_node
        }
    }

    addAtEnd(data){}

    addAtIndex(data, index){}

    removeFirst(){}

    removeLast(){}

    removeAtIndex(index){}
    
}

let sll = new SinglyLinkedList()
sll.addAtBeginning(70)
sll.addAtBeginning(72)
sll.addAtBeginning(74)