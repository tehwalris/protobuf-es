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
// @generated from file google/protobuf/map_lite_unittest.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

import { proto2 } from "@bufbuild/protobuf";
import { ForeignMessageLite, TestAllExtensionsLite, TestAllTypesLite } from "./unittest_lite_pb.js";

/**
 * @generated from enum protobuf_unittest.Proto2MapEnumLite
 */
export const Proto2MapEnumLite = proto2.makeEnum(
  "protobuf_unittest.Proto2MapEnumLite",
  [
    {no: 0, name: "PROTO2_MAP_ENUM_FOO_LITE"},
    {no: 1, name: "PROTO2_MAP_ENUM_BAR_LITE"},
    {no: 2, name: "PROTO2_MAP_ENUM_BAZ_LITE"},
  ],
);

/**
 * @generated from enum protobuf_unittest.Proto2MapEnumPlusExtraLite
 */
export const Proto2MapEnumPlusExtraLite = proto2.makeEnum(
  "protobuf_unittest.Proto2MapEnumPlusExtraLite",
  [
    {no: 0, name: "E_PROTO2_MAP_ENUM_FOO_LITE"},
    {no: 1, name: "E_PROTO2_MAP_ENUM_BAR_LITE"},
    {no: 2, name: "E_PROTO2_MAP_ENUM_BAZ_LITE"},
    {no: 3, name: "E_PROTO2_MAP_ENUM_EXTRA_LITE"},
  ],
);

/**
 * @generated from enum protobuf_unittest.MapEnumLite
 */
export const MapEnumLite = proto2.makeEnum(
  "protobuf_unittest.MapEnumLite",
  [
    {no: 0, name: "MAP_ENUM_FOO_LITE"},
    {no: 1, name: "MAP_ENUM_BAR_LITE"},
    {no: 2, name: "MAP_ENUM_BAZ_LITE"},
  ],
);

/**
 * @generated from message protobuf_unittest.TestMapLite
 */
export const TestMapLite = proto2.makeMessageType(
  "protobuf_unittest.TestMapLite",
  () => [
    { no: 1, name: "map_int32_int32", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
    { no: 2, name: "map_int64_int64", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 3, name: "map_uint32_uint32", kind: "map", K: 13 /* ScalarType.UINT32 */, V: {kind: "scalar", T: 13 /* ScalarType.UINT32 */} },
    { no: 4, name: "map_uint64_uint64", kind: "map", K: 4 /* ScalarType.UINT64 */, V: {kind: "scalar", T: 4 /* ScalarType.UINT64 */} },
    { no: 5, name: "map_sint32_sint32", kind: "map", K: 17 /* ScalarType.SINT32 */, V: {kind: "scalar", T: 17 /* ScalarType.SINT32 */} },
    { no: 6, name: "map_sint64_sint64", kind: "map", K: 18 /* ScalarType.SINT64 */, V: {kind: "scalar", T: 18 /* ScalarType.SINT64 */} },
    { no: 7, name: "map_fixed32_fixed32", kind: "map", K: 7 /* ScalarType.FIXED32 */, V: {kind: "scalar", T: 7 /* ScalarType.FIXED32 */} },
    { no: 8, name: "map_fixed64_fixed64", kind: "map", K: 6 /* ScalarType.FIXED64 */, V: {kind: "scalar", T: 6 /* ScalarType.FIXED64 */} },
    { no: 9, name: "map_sfixed32_sfixed32", kind: "map", K: 15 /* ScalarType.SFIXED32 */, V: {kind: "scalar", T: 15 /* ScalarType.SFIXED32 */} },
    { no: 10, name: "map_sfixed64_sfixed64", kind: "map", K: 16 /* ScalarType.SFIXED64 */, V: {kind: "scalar", T: 16 /* ScalarType.SFIXED64 */} },
    { no: 11, name: "map_int32_float", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 2 /* ScalarType.FLOAT */} },
    { no: 12, name: "map_int32_double", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 1 /* ScalarType.DOUBLE */} },
    { no: 13, name: "map_bool_bool", kind: "map", K: 8 /* ScalarType.BOOL */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
    { no: 14, name: "map_string_string", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 15, name: "map_int32_bytes", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 16, name: "map_int32_enum", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "enum", T: proto2.getEnumType(MapEnumLite)} },
    { no: 17, name: "map_int32_foreign_message", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: ForeignMessageLite} },
    { no: 18, name: "teboring", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
  ],
);

/**
 * @generated from message protobuf_unittest.TestArenaMapLite
 */
export const TestArenaMapLite = proto2.makeMessageType(
  "protobuf_unittest.TestArenaMapLite",
  () => [
    { no: 1, name: "map_int32_int32", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
    { no: 2, name: "map_int64_int64", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 3, name: "map_uint32_uint32", kind: "map", K: 13 /* ScalarType.UINT32 */, V: {kind: "scalar", T: 13 /* ScalarType.UINT32 */} },
    { no: 4, name: "map_uint64_uint64", kind: "map", K: 4 /* ScalarType.UINT64 */, V: {kind: "scalar", T: 4 /* ScalarType.UINT64 */} },
    { no: 5, name: "map_sint32_sint32", kind: "map", K: 17 /* ScalarType.SINT32 */, V: {kind: "scalar", T: 17 /* ScalarType.SINT32 */} },
    { no: 6, name: "map_sint64_sint64", kind: "map", K: 18 /* ScalarType.SINT64 */, V: {kind: "scalar", T: 18 /* ScalarType.SINT64 */} },
    { no: 7, name: "map_fixed32_fixed32", kind: "map", K: 7 /* ScalarType.FIXED32 */, V: {kind: "scalar", T: 7 /* ScalarType.FIXED32 */} },
    { no: 8, name: "map_fixed64_fixed64", kind: "map", K: 6 /* ScalarType.FIXED64 */, V: {kind: "scalar", T: 6 /* ScalarType.FIXED64 */} },
    { no: 9, name: "map_sfixed32_sfixed32", kind: "map", K: 15 /* ScalarType.SFIXED32 */, V: {kind: "scalar", T: 15 /* ScalarType.SFIXED32 */} },
    { no: 10, name: "map_sfixed64_sfixed64", kind: "map", K: 16 /* ScalarType.SFIXED64 */, V: {kind: "scalar", T: 16 /* ScalarType.SFIXED64 */} },
    { no: 11, name: "map_int32_float", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 2 /* ScalarType.FLOAT */} },
    { no: 12, name: "map_int32_double", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 1 /* ScalarType.DOUBLE */} },
    { no: 13, name: "map_bool_bool", kind: "map", K: 8 /* ScalarType.BOOL */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
    { no: 14, name: "map_string_string", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 15, name: "map_int32_bytes", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 16, name: "map_int32_enum", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "enum", T: proto2.getEnumType(MapEnumLite)} },
    { no: 17, name: "map_int32_foreign_message", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: ForeignMessageArenaLite} },
  ],
);

/**
 * Test embedded message with required fields
 *
 * @generated from message protobuf_unittest.TestRequiredMessageMapLite
 */
export const TestRequiredMessageMapLite = proto2.makeMessageType(
  "protobuf_unittest.TestRequiredMessageMapLite",
  () => [
    { no: 1, name: "map_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: TestRequiredLite} },
  ],
);

/**
 * @generated from message protobuf_unittest.TestEnumMapLite
 */
export const TestEnumMapLite = proto2.makeMessageType(
  "protobuf_unittest.TestEnumMapLite",
  () => [
    { no: 101, name: "known_map_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "enum", T: proto2.getEnumType(Proto2MapEnumLite)} },
    { no: 102, name: "unknown_map_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "enum", T: proto2.getEnumType(Proto2MapEnumLite)} },
  ],
);

/**
 * @generated from message protobuf_unittest.TestEnumMapPlusExtraLite
 */
export const TestEnumMapPlusExtraLite = proto2.makeMessageType(
  "protobuf_unittest.TestEnumMapPlusExtraLite",
  () => [
    { no: 101, name: "known_map_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "enum", T: proto2.getEnumType(Proto2MapEnumPlusExtraLite)} },
    { no: 102, name: "unknown_map_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "enum", T: proto2.getEnumType(Proto2MapEnumPlusExtraLite)} },
  ],
);

/**
 * @generated from message protobuf_unittest.TestMessageMapLite
 */
export const TestMessageMapLite = proto2.makeMessageType(
  "protobuf_unittest.TestMessageMapLite",
  () => [
    { no: 1, name: "map_int32_message", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: TestAllTypesLite} },
  ],
);

/**
 * @generated from message protobuf_unittest.TestRequiredLite
 */
export const TestRequiredLite = proto2.makeMessageType(
  "protobuf_unittest.TestRequiredLite",
  () => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "b", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "c", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from extension: optional protobuf_unittest.TestRequiredLite single = 1000;
 */
export const TestRequiredLite_single = proto2.makeExtension(
  "protobuf_unittest.TestRequiredLite.single", 
  TestAllExtensionsLite, 
  () => ({ no: 1000, kind: "message", T: TestRequiredLite, opt: true }),
);

/**
 * @generated from message protobuf_unittest.ForeignMessageArenaLite
 */
export const ForeignMessageArenaLite = proto2.makeMessageType(
  "protobuf_unittest.ForeignMessageArenaLite",
  () => [
    { no: 1, name: "c", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

