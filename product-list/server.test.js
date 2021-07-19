const fastify = require('./server')

TextDecoderStream('Product list works', () => {
    fastify.inject({
        method: 'GET',
        url: '/products'
    })
})