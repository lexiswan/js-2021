try {
    //alt + sageata sus/ jos=> muta linia mai sus sau mai jos
    hello("Hello Js")
    hello("Hello Js")
    hello("Hello Js")
} catch(error) {
    if (error instanceof ReferenceError) {
    console.log("Sorry! There was an error: " + error.message)
} else{ 
    console.log("An unknown error occurred")
}
}



