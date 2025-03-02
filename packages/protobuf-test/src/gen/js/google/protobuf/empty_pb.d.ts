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
// @generated from file google/protobuf/empty.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 *
 *
 * @generated from message google.protobuf.Empty
 */
export declare class Empty extends Message<Empty> {
  constructor(data?: PartialMessage<Empty>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.protobuf.Empty";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Empty;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Empty;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Empty;

  static equals(a: Empty | PlainMessage<Empty> | undefined, b: Empty | PlainMessage<Empty> | undefined): boolean;
}

