/**
 *
 *
 */
module.exports = {

  before: function() {

    module.Proxy = require( '../../' )

  },

  Redbird: {

    'allows chainable methods.': function( done ) {

      var _proxy = new module.Proxy({ port: null } )
        .once( '*:listen', proxyListening )
        .once( 'close', done )

      function proxyListening( error, server ) {

        var baseUrl = [ 'http://', server.address().address, ':', server.address().port ].join( '' );

        this
          .register( baseUrl + '/test1', 'http://google.com' )
          .register( baseUrl + '/test3', 'http://google.com' )
          .register( baseUrl + '/test3', 'http://google.com' )

        this.close();

        // @todo Test responses of proxying.
        // require( 'request' ).get( _url, function( error, req, body ) {
        // console.log( error, req.headers );
        // })

      }

    },

  }

};