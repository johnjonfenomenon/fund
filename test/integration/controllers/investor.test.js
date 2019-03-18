const request = require('co-supertest');
const expect = require('chai').expect;

describe('Testing endpoints', function(){
    describe('Testing /investors endpoints', function(){
        it('should get investors list', function *(){
            yield request(strapi.config.url)
                .get('/investors')
                .expect(200)
                .expect('Content-Type', /json/)
        })
        it('should make sure the reuslt is instance of an Array',function *(){
            yield request(strapi.config.url)
            .get('/investors')
            .expect('Content-Type', /json/)
            .then(res =>{
                expect(res.body).to.be.instanceOf(Array)
            })

        })
        it('should make sure you have investor entries ',function *(){
            yield request(strapi.config.url)
            .get('/investors')
            .expect('Content-Type', /json/)
            .then(res =>{
                expect(res.body).to.be.instanceOf(Array)
                expect(res.body).to.have.length.gt(0)
            })

        })

        it('should try to insert investor entry ',function *(){
            yield request(strapi.config.url)
            .post('/investors')
            .send({ name: 'Jack Fin', investor_id: 333444 })
            .expect(200)
            .expect('Content-Type', /json/)
            .end()
        })      
        
       // it('should try to delete investor entry ',function *(){
            //yield request(strapi.config.url)
            //.del('/investors')
            //.expect(200)
            //.expect('Content-Type', /json/)
            //.end()

        //})              




        it('should return 404 as this directory is not available', function *(){
            yield request(strapi.config.url)
                .get('/misc')
                .expect(404)
                .expect('Content-Type', /json/)
                .end()
        })
    })

    describe('Testing /fund endpoint', function(){
        it('should get funds list', function *(){
            yield request(strapi.config.url)
                .get('/funds')
                .expect(200)
                .expect('Content-Type', /json/)
                .then(res => {
                    expect(res.body).to.be.instanceOf(Array)
                    expect(res.body).to.have.length.gt(0)
                })
        })
    })
    
})