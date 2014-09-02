/**
 *
 *
 */
module.exports = {

  before: function() {

    module.Proxy = require( '../../' )

  },

  Redbird: {

    'accepts two arguments.': function() {

      module.Proxy.length.should.equal( 2 )

    },

    'returns expected methods on instantiation.': function() {

      module.Proxy.should.be.an.instanceOf( Function );

      var _proxy = new module.Proxy({
        port: null,
        hostname: null
      } ).close();

      _proxy.should.have.property( 'register' );
      _proxy.should.have.property( 'unregister' );
      _proxy.should.have.property( 'close' );

    },

    'emits "http:listen" once server is listening.': function( done ) {

      module.Proxy.should.be.an.instanceOf( Function );

      new module.Proxy({
        port: null,
        hostname: null
      }).once( '*:listen', function( error, server ) {
        this.close();
        done();
      });

    }

  }

};