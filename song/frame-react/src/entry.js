require('./a');
require.ensure(['./b'], function(require) {
    require('./c');
    console.log('done!');
});
