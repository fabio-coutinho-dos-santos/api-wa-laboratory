const request = require('supertest')
const URL_TEST = "localhost:3000"

beforeAll(()=>{
    console.log("Start script test with automatic deploy!")
})

test( `Post in health route with id working in ${URL_TEST}`,()=>{
    return request (URL_TEST)
    .get("/")
    .then(response => {
        expect(response.status).toBe(200)
        expect(response.text).toBe("Test Working")
    })
})