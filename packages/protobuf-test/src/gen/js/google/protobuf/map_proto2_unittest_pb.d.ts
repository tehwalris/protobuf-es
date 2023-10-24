// Copyright 2021-2023 Buf Technologies, Inc.
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

// @generated by protoc-gen-es v1.4.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/map_proto2_unittest.proto (package protobuf_unittest, syntax proto2)
/* eslint-disable */

// We don't put this in a package within proto2 because we need to make sure
// that the generated code doesn't depend on being in the proto2 namespace.
// In map_test_util.h we do "using namespace unittest = protobuf_unittest".

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";
import type { ImportEnumForMap } from "./unittest_import_pb.js";

/**
 * @generated from enum protobuf_unittest.Proto2MapEnum
 */
export declare enum Proto2MapEnum {
  /**
   * @generated from enum value: PROTO2_MAP_ENUM_FOO = 0;
   */
  FOO = 0,

  /**
   * @generated from enum value: PROTO2_MAP_ENUM_BAR = 1;
   */
  BAR = 1,

  /**
   * @generated from enum value: PROTO2_MAP_ENUM_BAZ = 2;
   */
  BAZ = 2,
}

/**
 * @generated from enum protobuf_unittest.Proto2MapEnumPlusExtra
 */
export declare enum Proto2MapEnumPlusExtra {
  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_FOO = 0;
   */
  E_PROTO2_MAP_ENUM_FOO = 0,

  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_BAR = 1;
   */
  E_PROTO2_MAP_ENUM_BAR = 1,

  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_BAZ = 2;
   */
  E_PROTO2_MAP_ENUM_BAZ = 2,

  /**
   * @generated from enum value: E_PROTO2_MAP_ENUM_EXTRA = 3;
   */
  E_PROTO2_MAP_ENUM_EXTRA = 3,
}

/**
 * @generated from message protobuf_unittest.TestEnumMap
 */
export declare class TestEnumMap extends Message<TestEnumMap> {
  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnum> known_map_field = 101;
   */
  knownMapField: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnum> unknown_map_field = 102;
   */
  unknownMapField: { [key: number]: Proto2MapEnum };

  /**
   * Other maps with all key types to test the unknown entry serialization
   *
   * @generated from field: map<int64, protobuf_unittest.Proto2MapEnum> unknown_map_field_int64 = 200;
   */
  unknownMapFieldInt64: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<uint64, protobuf_unittest.Proto2MapEnum> unknown_map_field_uint64 = 201;
   */
  unknownMapFieldUint64: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnum> unknown_map_field_int32 = 202;
   */
  unknownMapFieldInt32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<uint32, protobuf_unittest.Proto2MapEnum> unknown_map_field_uint32 = 203;
   */
  unknownMapFieldUint32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<fixed32, protobuf_unittest.Proto2MapEnum> unknown_map_field_fixed32 = 204;
   */
  unknownMapFieldFixed32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<fixed64, protobuf_unittest.Proto2MapEnum> unknown_map_field_fixed64 = 205;
   */
  unknownMapFieldFixed64: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<bool, protobuf_unittest.Proto2MapEnum> unknown_map_field_bool = 206;
   */
  unknownMapFieldBool: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<string, protobuf_unittest.Proto2MapEnum> unknown_map_field_string = 207;
   */
  unknownMapFieldString: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<sint32, protobuf_unittest.Proto2MapEnum> unknown_map_field_sint32 = 208;
   */
  unknownMapFieldSint32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<sint64, protobuf_unittest.Proto2MapEnum> unknown_map_field_sint64 = 209;
   */
  unknownMapFieldSint64: { [key: string]: Proto2MapEnum };

  /**
   * @generated from field: map<sfixed32, protobuf_unittest.Proto2MapEnum> unknown_map_field_sfixed32 = 210;
   */
  unknownMapFieldSfixed32: { [key: number]: Proto2MapEnum };

  /**
   * @generated from field: map<sfixed64, protobuf_unittest.Proto2MapEnum> unknown_map_field_sfixed64 = 211;
   */
  unknownMapFieldSfixed64: { [key: string]: Proto2MapEnum };

  constructor(data?: PartialMessage<TestEnumMap>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "protobuf_unittest.TestEnumMap";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestEnumMap;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestEnumMap;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestEnumMap;

  static equals(a: TestEnumMap | PlainMessage<TestEnumMap> | undefined, b: TestEnumMap | PlainMessage<TestEnumMap> | undefined): boolean;
}

/**
 * @generated from message protobuf_unittest.TestEnumMapPlusExtra
 */
export declare class TestEnumMapPlusExtra extends Message<TestEnumMapPlusExtra> {
  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumPlusExtra> known_map_field = 101;
   */
  knownMapField: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field = 102;
   */
  unknownMapField: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * Other maps with all key types to test the unknown entry serialization
   *
   * @generated from field: map<int64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_int64 = 200;
   */
  unknownMapFieldInt64: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<uint64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_uint64 = 201;
   */
  unknownMapFieldUint64: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<int32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_int32 = 202;
   */
  unknownMapFieldInt32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<uint32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_uint32 = 203;
   */
  unknownMapFieldUint32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<fixed32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_fixed32 = 204;
   */
  unknownMapFieldFixed32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<fixed64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_fixed64 = 205;
   */
  unknownMapFieldFixed64: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<bool, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_bool = 206;
   */
  unknownMapFieldBool: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<string, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_string = 207;
   */
  unknownMapFieldString: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<sint32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_sint32 = 208;
   */
  unknownMapFieldSint32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<sint64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_sint64 = 209;
   */
  unknownMapFieldSint64: { [key: string]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<sfixed32, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_sfixed32 = 210;
   */
  unknownMapFieldSfixed32: { [key: number]: Proto2MapEnumPlusExtra };

  /**
   * @generated from field: map<sfixed64, protobuf_unittest.Proto2MapEnumPlusExtra> unknown_map_field_sfixed64 = 211;
   */
  unknownMapFieldSfixed64: { [key: string]: Proto2MapEnumPlusExtra };

  constructor(data?: PartialMessage<TestEnumMapPlusExtra>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "protobuf_unittest.TestEnumMapPlusExtra";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestEnumMapPlusExtra;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestEnumMapPlusExtra;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestEnumMapPlusExtra;

  static equals(a: TestEnumMapPlusExtra | PlainMessage<TestEnumMapPlusExtra> | undefined, b: TestEnumMapPlusExtra | PlainMessage<TestEnumMapPlusExtra> | undefined): boolean;
}

/**
 * @generated from message protobuf_unittest.TestImportEnumMap
 */
export declare class TestImportEnumMap extends Message<TestImportEnumMap> {
  /**
   * @generated from field: map<int32, protobuf_unittest_import.ImportEnumForMap> import_enum_amp = 1;
   */
  importEnumAmp: { [key: number]: ImportEnumForMap };

  constructor(data?: PartialMessage<TestImportEnumMap>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "protobuf_unittest.TestImportEnumMap";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestImportEnumMap;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestImportEnumMap;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestImportEnumMap;

  static equals(a: TestImportEnumMap | PlainMessage<TestImportEnumMap> | undefined, b: TestImportEnumMap | PlainMessage<TestImportEnumMap> | undefined): boolean;
}

/**
 * @generated from message protobuf_unittest.TestIntIntMap
 */
export declare class TestIntIntMap extends Message<TestIntIntMap> {
  /**
   * @generated from field: map<int32, int32> m = 1;
   */
  m: { [key: number]: number };

  constructor(data?: PartialMessage<TestIntIntMap>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "protobuf_unittest.TestIntIntMap";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestIntIntMap;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestIntIntMap;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestIntIntMap;

  static equals(a: TestIntIntMap | PlainMessage<TestIntIntMap> | undefined, b: TestIntIntMap | PlainMessage<TestIntIntMap> | undefined): boolean;
}

/**
 * Test all key types: string, plus the non-floating-point scalars.
 *
 * @generated from message protobuf_unittest.TestMaps
 */
export declare class TestMaps extends Message<TestMaps> {
  /**
   * @generated from field: map<int32, protobuf_unittest.TestIntIntMap> m_int32 = 1;
   */
  mInt32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<int64, protobuf_unittest.TestIntIntMap> m_int64 = 2;
   */
  mInt64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<uint32, protobuf_unittest.TestIntIntMap> m_uint32 = 3;
   */
  mUint32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<uint64, protobuf_unittest.TestIntIntMap> m_uint64 = 4;
   */
  mUint64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<sint32, protobuf_unittest.TestIntIntMap> m_sint32 = 5;
   */
  mSint32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<sint64, protobuf_unittest.TestIntIntMap> m_sint64 = 6;
   */
  mSint64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<fixed32, protobuf_unittest.TestIntIntMap> m_fixed32 = 7;
   */
  mFixed32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<fixed64, protobuf_unittest.TestIntIntMap> m_fixed64 = 8;
   */
  mFixed64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<sfixed32, protobuf_unittest.TestIntIntMap> m_sfixed32 = 9;
   */
  mSfixed32: { [key: number]: TestIntIntMap };

  /**
   * @generated from field: map<sfixed64, protobuf_unittest.TestIntIntMap> m_sfixed64 = 10;
   */
  mSfixed64: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<bool, protobuf_unittest.TestIntIntMap> m_bool = 11;
   */
  mBool: { [key: string]: TestIntIntMap };

  /**
   * @generated from field: map<string, protobuf_unittest.TestIntIntMap> m_string = 12;
   */
  mString: { [key: string]: TestIntIntMap };

  constructor(data?: PartialMessage<TestMaps>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "protobuf_unittest.TestMaps";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestMaps;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestMaps;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestMaps;

  static equals(a: TestMaps | PlainMessage<TestMaps> | undefined, b: TestMaps | PlainMessage<TestMaps> | undefined): boolean;
}

/**
 * Test maps in submessages.
 *
 * @generated from message protobuf_unittest.TestSubmessageMaps
 */
export declare class TestSubmessageMaps extends Message<TestSubmessageMaps> {
  /**
   * @generated from field: optional protobuf_unittest.TestMaps m = 1;
   */
  m?: TestMaps;

  constructor(data?: PartialMessage<TestSubmessageMaps>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "protobuf_unittest.TestSubmessageMaps";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestSubmessageMaps;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestSubmessageMaps;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestSubmessageMaps;

  static equals(a: TestSubmessageMaps | PlainMessage<TestSubmessageMaps> | undefined, b: TestSubmessageMaps | PlainMessage<TestSubmessageMaps> | undefined): boolean;
}

/**
 * @generated from message protobuf_unittest.TestProto2BytesMap
 */
export declare class TestProto2BytesMap extends Message<TestProto2BytesMap> {
  /**
   * @generated from field: map<int32, bytes> map_bytes = 1;
   */
  mapBytes: { [key: number]: Uint8Array };

  /**
   * @generated from field: map<int32, string> map_string = 2;
   */
  mapString: { [key: number]: string };

  constructor(data?: PartialMessage<TestProto2BytesMap>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "protobuf_unittest.TestProto2BytesMap";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestProto2BytesMap;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestProto2BytesMap;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestProto2BytesMap;

  static equals(a: TestProto2BytesMap | PlainMessage<TestProto2BytesMap> | undefined, b: TestProto2BytesMap | PlainMessage<TestProto2BytesMap> | undefined): boolean;
}

