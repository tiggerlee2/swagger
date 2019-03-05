/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.NumberOnly = factory(root.SwaggerPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NumberOnly model module.
   * @module model/NumberOnly
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NumberOnly</code>.
   * @alias module:model/NumberOnly
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NumberOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NumberOnly} obj Optional instance to populate.
   * @return {module:model/NumberOnly} The populated <code>NumberOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('JustNumber')) {
        obj['JustNumber'] = ApiClient.convertToType(data['JustNumber'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} JustNumber
   */
  exports.prototype['JustNumber'] = undefined;



  return exports;
}));


