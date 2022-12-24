/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  app.get('/weyweyweb', async () => {
    return { hello: 'weyweyweb' }
  })
}
