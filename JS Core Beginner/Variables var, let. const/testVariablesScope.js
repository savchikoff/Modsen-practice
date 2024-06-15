function testVariablesScope() {
    {
        var x = 10;    // Variable 'x' is function-scoped or globally scoped
        let y = 10;    // Variable 'y' is block-scoped
        const z = 10;  // Variable 'z' is block-scoped and cannot be reassigned

        console.log(x); // OK - 'x' is accessible within the block
        console.log(y); // OK - 'y' is accessible within the block
        console.log(z); // OK - 'z' is accessible within the block
    }

    console.log(x); // OK - 'x' is function-scoped or globally scoped
    console.log(y); // ReferenceError: y is not defined - 'y' is block-scoped and not accessible outside the block
    console.log(z); // ReferenceError: z is not defined - 'z' is block-scoped and not accessible outside the block
}

testVariablesScope();