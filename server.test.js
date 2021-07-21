const fastify = require('./server')

test('Product list works', () => {
    response = fastify.inject({
        method: 'GET',
        url: '/products'
    })

    expect(response).toBeTruthy()
})

test('Product list search works', () => {
    response = await fastify.inject({
        method: 'GET',
        url: '/products?search=cream'
    })

    
})