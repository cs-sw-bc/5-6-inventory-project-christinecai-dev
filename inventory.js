// ============================================
// LESSON 6: Inventory + Order Queue + Dispatch Stack
// ============================================

// Data structures
const inventory = [];
const orderQueue = [];
const dispatchStack = [];

// ============================================
// PART 1: INVENTORY MANAGEMENT
// ============================================

// 1) Add Product to inventory
// Check if product ID already exists
// If yes: print message and stop
// If no: add the new product object
function addProduct(id, name, category, price, quantity) {
    // TODO: implement
}

// 2) Update Product fields
// Find product by id, update only provided fields
// If not found: print message
function updateProduct(id, updates) {
    // updates object may contain: { price, category, quantity }
    // TODO: implement
}

// 3) Delete Product from inventory
// Find by id and remove from array
// If not found: print message
function deleteProduct(id) {
    // TODO: implement
}

// 4) Search Products
// Search by name (exact match) - return single product or null
function searchByName(name) {
    // TODO: implement
}

// Search by category (exact match) - return array of products
function searchByCategory(category) {
    // TODO: implement
}

// 5) Sort Inventory
// Do NOT use built-in sort(), write your own sorting algorithm
// Swap entire product objects

// Sort by price ascending
function sortByPrice() {
    // TODO: implement (bubble sort or similar)
}

// Sort by name A→Z
function sortByName() {
    // TODO: implement
}

// Sort by category A→Z
function sortByCategory() {
    // TODO: implement
}

// ============================================
// PART 2: ORDER QUEUE (FIFO)
// ============================================

// 6) Place Order (Enqueue)
// Validate quantity > 0
// Add to END of orderQueue
function placeOrder(orderId, productId, quantity) {
    // TODO: implement
}

// 7) Process Next Order (Dequeue → Dispatch)
// Remove from FRONT of queue
// Check if product exists and has enough stock
// If valid: reduce inventory quantity, move to dispatchStack
// If invalid: handle accordingly (print message, decide what to do with order)
function processNextOrder() {
    // TODO: implement
}

// ============================================
// PART 3: DISPATCH STACK (LIFO)
// ============================================

// 8) Undo Last Dispatch (Stack → Queue)
// Remove from TOP of stack (LIFO)
// Restore product quantity
// Put order back at BACK of orderQueue
function undoLastDispatch() {
    // TODO: implement
}

// ============================================
// TEST CALLS (Provided for verification)
// ============================================

// Uncomment and use these to test your implementations
/*
addProduct(1, "Laptop", "Electronics", 999.99, 5);
addProduct(2, "Mouse", "Electronics", 25.50, 20);
addProduct(3, "Desk", "Furniture", 299.99, 3);

console.log("Inventory after adding:", inventory);

updateProduct(1, { quantity: 3 });
console.log("After updating product 1:", inventory[0]);

placeOrder(101, 1, 2);
placeOrder(102, 2, 5);
console.log("Order queue:", orderQueue);

processNextOrder();
console.log("Inventory after processing:", inventory);
console.log("Dispatch stack:", dispatchStack);

undoLastDispatch();
console.log("After undo - order queue:", orderQueue);
console.log("After undo - inventory:", inventory);
*/