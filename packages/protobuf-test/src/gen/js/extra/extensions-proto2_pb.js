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
// @generated from file extra/extensions-proto2.proto (package proto2ext, syntax proto2)
/* eslint-disable */

import { proto2, UInt32Value } from "@bufbuild/protobuf";
import { User } from "./example_pb.js";

/**
 * An enumeration used in extensions
 *
 * @generated from enum proto2ext.Proto2ExtEnum
 */
export const Proto2ExtEnum = proto2.makeEnum(
  "proto2ext.Proto2ExtEnum",
  [
    {no: 1, name: "PROTO2_EXT_ENUM_YES", localName: "YES"},
    {no: 2, name: "PROTO2_EXT_ENUM_NO", localName: "NO"},
  ],
);

/**
 * The message we're going to extend
 *
 * @generated from message proto2ext.Proto2Extendee
 */
export const Proto2Extendee = proto2.makeMessageType(
  "proto2ext.Proto2Extendee",
  () => [
    { no: 1, name: "own_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * A message used in extensions
 *
 * @generated from message proto2ext.Proto2ExtMessage
 */
export const Proto2ExtMessage = proto2.makeMessageType(
  "proto2ext.Proto2ExtMessage",
  () => [
    { no: 1, name: "string_field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message proto2ext.GroupExt
 */
export const GroupExt = proto2.makeMessageType(
  "proto2ext.GroupExt",
  () => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "b", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message proto2ext.RepeatedGroupExt
 */
export const RepeatedGroupExt = proto2.makeMessageType(
  "proto2ext.RepeatedGroupExt",
  () => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "b", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * A container for nested extensions
 *
 * @generated from message proto2ext.Proto2ExtContainer
 */
export const Proto2ExtContainer = proto2.makeMessageType(
  "proto2ext.Proto2ExtContainer",
  [],
);

/**
 * @generated from message proto2ext.Proto2ExtContainer.Child
 */
export const Proto2ExtContainer_Child = proto2.makeMessageType(
  "proto2ext.Proto2ExtContainer.Child",
  [],
  {localName: "Proto2ExtContainer_Child"},
);

/**
 * @generated from extension: optional uint32 uint32_ext = 9010;
 */
export const Proto2ExtContainer_Child_uint32_ext = proto2.makeExtension(
  "proto2ext.Proto2ExtContainer.Child.uint32_ext", 
  Proto2Extendee, 
  { no: 9010, kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
);

/**
 * @generated from extension: optional uint32 uint32_ext = 9001;
 */
export const Proto2ExtContainer_uint32_ext = proto2.makeExtension(
  "proto2ext.Proto2ExtContainer.uint32_ext", 
  Proto2Extendee, 
  { no: 9001, kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
);

/**
 * @generated from extension: optional uint32 uint32_ext = 1001;
 */
export const uint32_ext = proto2.makeExtension(
  "proto2ext.uint32_ext", 
  Proto2Extendee, 
  { no: 1001, kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
);

/**
 * @generated from extension: optional uint32 uint32_ext_with_default = 1002 [default = 999];
 */
export const uint32_ext_with_default = proto2.makeExtension(
  "proto2ext.uint32_ext_with_default", 
  Proto2Extendee, 
  { no: 1002, kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true, default: 999 },
);

/**
 * @generated from extension: optional string string_ext = 2001;
 */
export const string_ext = proto2.makeExtension(
  "proto2ext.string_ext", 
  Proto2Extendee, 
  { no: 2001, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string string_ext_with_default = 2002 [default = "hello \" *\/ "];
 */
export const string_ext_with_default = proto2.makeExtension(
  "proto2ext.string_ext_with_default", 
  Proto2Extendee, 
  { no: 2002, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true, default: "hello \" */ " },
);

/**
 * @generated from extension: optional uint64 uint64_ext = 3001;
 */
export const uint64_ext = proto2.makeExtension(
  "proto2ext.uint64_ext", 
  Proto2Extendee, 
  { no: 3001, kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
);

/**
 * @generated from extension: optional uint64 uint64_ext_js_string = 3002 [jstype = JS_STRING];
 */
export const uint64_ext_js_string = proto2.makeExtension(
  "proto2ext.uint64_ext_js_string", 
  Proto2Extendee, 
  { no: 3002, kind: "scalar", T: 4 /* ScalarType.UINT64 */, L: 1 /* LongType.STRING */, opt: true },
);

/**
 * @generated from extension: optional bytes bytes_ext = 4001;
 */
export const bytes_ext = proto2.makeExtension(
  "proto2ext.bytes_ext", 
  Proto2Extendee, 
  { no: 4001, kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
);

/**
 * @generated from extension: optional bytes bytes_ext_with_default = 4002 [default = "\000x\\x\\"x\'AAAAAA\010\014\n\r\t\013"];
 */
export const bytes_ext_with_default = proto2.makeExtension(
  "proto2ext.bytes_ext_with_default", 
  Proto2Extendee, 
  { no: 4002, kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true, default: new Uint8Array([0x00, 0x78, 0x5C, 0x78, 0x78, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x08, 0x0C, 0x0A, 0x0D, 0x09, 0x0B]) },
);

/**
 * @generated from extension: optional proto2ext.Proto2ExtEnum enum_ext = 5001;
 */
export const enum_ext = proto2.makeExtension(
  "proto2ext.enum_ext", 
  Proto2Extendee, 
  () => ({ no: 5001, kind: "enum", T: proto2.getEnumType(Proto2ExtEnum), opt: true }),
);

/**
 * @generated from extension: optional proto2ext.Proto2ExtEnum enum_ext_with_default = 5002 [default = PROTO2_EXT_ENUM_NO];
 */
export const enum_ext_with_default = proto2.makeExtension(
  "proto2ext.enum_ext_with_default", 
  Proto2Extendee, 
  () => ({ no: 5002, kind: "enum", T: proto2.getEnumType(Proto2ExtEnum), opt: true, default: Proto2ExtEnum.NO }),
);

/**
 * @generated from extension: optional proto2ext.Proto2ExtMessage message_ext = 6001;
 */
export const message_ext = proto2.makeExtension(
  "proto2ext.message_ext", 
  Proto2Extendee, 
  () => ({ no: 6001, kind: "message", T: Proto2ExtMessage, opt: true }),
);

/**
 * @generated from extension: optional docs.User message_ext_proto3 = 6002;
 */
export const message_ext_proto3 = proto2.makeExtension(
  "proto2ext.message_ext_proto3", 
  Proto2Extendee, 
  () => ({ no: 6002, kind: "message", T: User, opt: true }),
);

/**
 * @generated from extension: repeated proto2ext.Proto2ExtMessage repeated_message_ext = 7001;
 */
export const repeated_message_ext = proto2.makeExtension(
  "proto2ext.repeated_message_ext", 
  Proto2Extendee, 
  () => ({ no: 7001, kind: "message", T: Proto2ExtMessage, repeated: true }),
);

/**
 * @generated from extension: repeated proto2ext.Proto2ExtEnum repeated_enum_ext = 7005;
 */
export const repeated_enum_ext = proto2.makeExtension(
  "proto2ext.repeated_enum_ext", 
  Proto2Extendee, 
  () => ({ no: 7005, kind: "enum", T: proto2.getEnumType(Proto2ExtEnum), repeated: true }),
);

/**
 * @generated from extension: repeated string repeated_string_ext = 7002;
 */
export const repeated_string_ext = proto2.makeExtension(
  "proto2ext.repeated_string_ext", 
  Proto2Extendee, 
  { no: 7002, kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
);

/**
 * @generated from extension: repeated uint32 packed_uint32_ext = 7003 [packed = true];
 */
export const packed_uint32_ext = proto2.makeExtension(
  "proto2ext.packed_uint32_ext", 
  Proto2Extendee, 
  { no: 7003, kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true, packed: true },
);

/**
 * unpacked by default in proto2
 *
 * @generated from extension: repeated uint32 unpacked_uint32_ext = 7004;
 */
export const unpacked_uint32_ext = proto2.makeExtension(
  "proto2ext.unpacked_uint32_ext", 
  Proto2Extendee, 
  { no: 7004, kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
);

/**
 * @generated from extension: optional google.protobuf.UInt32Value wrapper_ext = 8001;
 */
export const wrapper_ext = proto2.makeExtension(
  "proto2ext.wrapper_ext", 
  Proto2Extendee, 
  () => ({ no: 8001, kind: "message", T: UInt32Value, opt: true }),
);

/**
 * @generated from extension: optional proto2ext.GroupExt groupext = 8100;
 */
export const groupext = proto2.makeExtension(
  "proto2ext.groupext", 
  Proto2Extendee, 
  () => ({ no: 8100, kind: "message", T: GroupExt, delimited: true, opt: true }),
);

/**
 * @generated from extension: repeated proto2ext.RepeatedGroupExt repeatedgroupext = 8101;
 */
export const repeatedgroupext = proto2.makeExtension(
  "proto2ext.repeatedgroupext", 
  Proto2Extendee, 
  () => ({ no: 8101, kind: "message", T: RepeatedGroupExt, delimited: true, repeated: true }),
);

