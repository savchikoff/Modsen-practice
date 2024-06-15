function accessProperty(obj) {
    try {
        console.log(obj.someProperty);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Object property access failed:', error.message);
        } else {
            throw error;
        }
    }
}