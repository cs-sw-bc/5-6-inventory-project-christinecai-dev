# 5.6. Algorithm Mini Project — Inventory + Order Queue + Dispatch Stack

## Setup

A starter file has already been provided with:

* `inventory` array
* `orderQueue` array
* `dispatchStack` array
* All required function **skeletons** (placeholders)
* Basic console tests that call the functions

**Only write code inside the existing function bodies.**

Do not:

* rename functions
* change parameters
* add new helper functions (unless explicitly instructed)
* change the overall structure

---

## Goal

Strengthen coding fundamentals using:

* Arrays of objects
* for loops
* if / else
* Manual searching
* Manual swapping
* Queue behavior (FIFO using arrays)
* Stack behavior (LIFO using arrays)

---

# Part 1 — Product Inventory (Array of Objects)

## Product Data Shape

Each product object contains:

* `id` (number)
* `name` (string)
* `category` (string)
* `price` (number)
* `quantity` (number)

---

## 1) Add Product

Complete the add-product function so it:

1. Checks whether a product with the same `id` already exists in `inventory`
2. If it exists: print a clear message and stop
3. If it does not exist: add the new product to `inventory`

Required skills:

* loop through an array
* compare object fields
* if/else branching

---

## 2) Update Product

Complete the update function so it:

1. Searches `inventory` for a product matching the given `id`
2. If not found: print a message and stop
3. If found: update only the fields that were provided (price/category/quantity)

Required skills:

* loop + match by `id`
* update object fields
* conditional updates

---

## 3) Delete Product

Complete the delete function so it:

1. Searches `inventory` for a product matching the given `id`
2. If found: remove it from the array
3. If not found: print a message

Required skills:

* tracking an index while looping
* removing an item by index

---

## 4) Search Products

Complete the search function(s) so it can:

* find by **name** OR
* find by **category**

Rules:

* manual loop search only
* return a result in the format required by the starter file (single item or list)

---

## 5) Sort Products

Complete the sort function(s) so `inventory` can be sorted by:

* price (ascending)
* name (A → Z)
* category (A → Z)

Rules:

* do **not** use built-in `sort()`
* swap **entire product objects** (not just one field)
* use a comparison-based sorting algorithm

---

# Part 2 — Orders as a Queue (FIFO)

## Order Data Shape

Each order object contains:

* `orderId` (number)
* `productId` (number)
* `quantity` (number)

Orders go into `orderQueue`.

Queue rule: **First In, First Out**

---

## 6) Place Order (Enqueue)

Complete the place-order function so it:

1. Validates basic order data (at least quantity > 0)
2. Adds the order to the **end** of `orderQueue`

Required skills:

* if/else validation
* queue behavior using arrays

---

## 7) Process Next Order (Dequeue → Dispatch)

Complete the processing function so it:

1. If `orderQueue` is empty: print a message and stop
2. Removes the **front** order from the queue (FIFO)
3. Finds the matching product in `inventory` using `productId`
4. If product not found: print a message and decide what to do with the order (based on starter rules)
5. If not enough stock: print a message and decide what to do with the order
6. If valid:

   * reduce the product quantity
   * move the processed order into `dispatchStack` (Part 3)

Required skills:

* loops + nested conditions
* updating object values
* queue → stack movement

---

# Part 3 — Dispatch History as a Stack (LIFO)

Processed orders go into `dispatchStack`.

Stack rule: **Last In, First Out**

## Why a Stack?

Mistakes usually get caught right after dispatch (wrong item, wrong address, wrong quantity).

Undoing should target the **most recent** dispatch first.

That behavior is exactly LIFO.

---

## 8) Undo Last Dispatch (Stack → Queue)

Complete the undo function so it:

1. If `dispatchStack` is empty: print a message and stop
2. Removes the **most recent** dispatched order (LIFO)
3. Restores the product quantity in `inventory`
4. Puts the undone order back into the **front** of `orderQueue` so it gets processed next

Required skills:

* stack pop logic
* reversing a previous update
* placing into front of a queue

---

# Required Edge Cases

Handle these correctly:

* Duplicate product IDs
* Order quantity is 0 or negative
* Processing when the queue is empty
* Undo when the stack is empty
* Product not found during processing
* Insufficient stock during processing

---

# Verification Checklist

Use the provided console tests to confirm:

* Inventory count changes after add/delete
* Updates actually change the correct product
* Search returns the correct product(s)
* Sorting changes the order correctly
* Queue processes in correct FIFO order
* Stack undoes in correct LIFO order
* Inventory quantity decreases on process and increases on undo

---

# Rules

* Write logic only inside the provided function bodies
* No built-in `sort()`
* No built-in `find()` / `filter()` / `map()` (unless the starter explicitly allows it)
* Use loops and conditionals
* Keep output messages readable
