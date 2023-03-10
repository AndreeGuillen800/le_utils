// -*- coding: utf-8 -*-
// Generated by scripts/generate_from_specs.py
// MasteryCriteria

export default {
    DO_ALL: "do_all",
    M_OF_N: "m_of_n",
    NUM_CORRECT_IN_A_ROW_10: "num_correct_in_a_row_10",
    NUM_CORRECT_IN_A_ROW_2: "num_correct_in_a_row_2",
    NUM_CORRECT_IN_A_ROW_3: "num_correct_in_a_row_3",
    NUM_CORRECT_IN_A_ROW_5: "num_correct_in_a_row_5",
};

export const SCHEMA = {
  "$id": "/schemas/mastery_criteria",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "description": "Schema for mastery criteria of exercise content types",
  "additionalProperties": false,
  "required": ["mastery_model"],
  "definitions": {
    "mastery_model": {
      "type": "string",
      "$exportConstants": "mastery_criteria",
      "enum": [
        "do_all",
        "m_of_n",
        "num_correct_in_a_row_2",
        "num_correct_in_a_row_3",
        "num_correct_in_a_row_5",
        "num_correct_in_a_row_10"
      ]
    }
  },
  "properties": {
    "m": true,
    "n": true,
    "mastery_model": {
      "$ref": "#/definitions/mastery_model"
    }
  },
  "anyOf": [
    {
      "properties": {
        "mastery_model": {
          "const": "m_of_n"
        }
      },
      "required": ["m", "n"]
    },
    {
      "properties": {
        "mastery_model": {
          "enum": [
            "do_all",
            "num_correct_in_a_row_2",
            "num_correct_in_a_row_3",
            "num_correct_in_a_row_5",
            "num_correct_in_a_row_10"
          ]
        },
        "m": {
          "type": "null"
        },
        "n": {
          "type": "null"
        }
      }
    }
  ]
};
