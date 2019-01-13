//javascript uses Lexical Scope (Static Scope)
// Global Scope - defined outside of all code blocks
// Local Scope - defined inside a code block

// Global scope (var1)
  // Local Scope  (var2)
    // Local Scope (var4)
  // Local Scope (var3)

let var1 = 'var1'

if (true) {
    console.log(var1)
    let var2 = 'var2'
    console.log(var2)

    if (true) {
        let var4 = 'var4'
    }
}

if (true) {
    let var3 = 'var3'
}
console.log(var2)