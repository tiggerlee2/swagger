/*
 * Swagger Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * API version: 1.0.0
 * Contact: apiteam@swagger.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package petstore

type OuterComposite struct {
	MyNumber *OuterNumber `json:"my_number,omitempty" xml:"my_number"`
	MyString *OuterString `json:"my_string,omitempty" xml:"my_string"`
	MyBoolean *OuterBoolean `json:"my_boolean,omitempty" xml:"my_boolean"`
}