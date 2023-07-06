/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    
    let H, T, C = 0
   

    while (l1 || l2) {
      
        let S = C
       
        if (l1) {
             S += l1.val
            l1 = l1.next
           
            
        }
        if (l2) {
            S += l2.val
            l2 = l2.next
            
            
        }
        C = Math.floor(S/ 10)
        let N = new ListNode(Math.floor(S) % 10)
        
        
        if (T) {
            
            T.next = N
            T = T.next
        }
      
        else {
           H = N
            T = H
        }
    }
   
    if (C > 0) {
        T.next = new ListNode(C);
    }
    return H;
};