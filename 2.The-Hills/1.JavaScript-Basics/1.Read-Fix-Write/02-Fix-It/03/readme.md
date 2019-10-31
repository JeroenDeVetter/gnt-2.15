# FIX IT
## EX 03
* Why are we not seeing any tv shows? Look at the error message in the dev tools and solve it.
* Try to display the list on the screen in reversed order. (without adjusting the original array)

## explanation 

* the tv shows are not displayed becaus movies.length does not exist you need to use tvshow.length to make it work and the write hase to be changed to document.write(`<li>${tvshow[i]}</li>`); to make it work