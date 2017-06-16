var Stream = require('stream');
var source = ['a', 'b', 'c'];
var readable = Stream.Readable({
    read: function() {
        var data = source.shift() || null;
        console.log('push', data);
        this.push(data);
    }
});
readable.on('end', () => {
    console.log('end');
})
readable.on('data', (data) => {
    console.log('data', data);
})