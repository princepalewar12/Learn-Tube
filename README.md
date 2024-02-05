# Debouncing:

- Type slow = 200ms
- Typing Fast = 30ms

# Performance
 - iphone pro max = 14 letter * 1000 = 14000
 - with debouncing = 3 API calls * 1000 = 3000


# Debouncing with 200ms
 - If difference between 2 key strokes is less than 200ms - Decline API CALL
 - If difference between 2 key strokes is greater than 200ms - make an API CALL