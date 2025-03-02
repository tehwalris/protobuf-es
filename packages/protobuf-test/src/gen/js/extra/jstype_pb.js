// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.7.1 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/jstype.proto (package spec, syntax proto3)
/* eslint-disable */

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message spec.JSTypeOmittedMessage
 */
export const JSTypeOmittedMessage = proto3.makeMessageType(
  "spec.JSTypeOmittedMessage",
  () => [
    { no: 1, name: "fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */ },
    { no: 5, name: "sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */ },
    { no: 6, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "repeated_fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 12, name: "repeated_int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 13, name: "repeated_sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 14, name: "repeated_sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 15, name: "repeated_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ],
);

/**
 * @generated from message spec.JSTypeNormalMessage
 */
export const JSTypeNormalMessage = proto3.makeMessageType(
  "spec.JSTypeNormalMessage",
  () => [
    { no: 1, name: "fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */ },
    { no: 5, name: "sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */ },
    { no: 6, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "repeated_fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 12, name: "repeated_int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 13, name: "repeated_sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 14, name: "repeated_sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 15, name: "repeated_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ],
);

/**
 * @generated from message spec.JSTypeStringMessage
 */
export const JSTypeStringMessage = proto3.makeMessageType(
  "spec.JSTypeStringMessage",
  () => [
    { no: 1, name: "fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, L: 1 /* LongType.STRING */ },
    { no: 5, name: "sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, L: 1 /* LongType.STRING */ },
    { no: 6, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, L: 1 /* LongType.STRING */ },
    { no: 11, name: "repeated_fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 12, name: "repeated_int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 13, name: "repeated_sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 14, name: "repeated_sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 15, name: "repeated_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, L: 1 /* LongType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message spec.JSTypeNumberMessage
 */
export const JSTypeNumberMessage = proto3.makeMessageType(
  "spec.JSTypeNumberMessage",
  () => [
    { no: 1, name: "fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 3, name: "int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */ },
    { no: 5, name: "sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */ },
    { no: 6, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "repeated_fixed64_field", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 12, name: "repeated_int64_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 13, name: "repeated_sfixed64_field", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 14, name: "repeated_sint64_field", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 15, name: "repeated_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ],
);

