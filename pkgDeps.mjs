const pkgDeps = {
  "version": "1.0.0",
  "name": "mui-test",
  "problems": [
    "missing: utf-8-validate@^5.0.2, required by ws@8.2.2"
  ],
  "dependencies": {
    "@babel/core": {
      "version": "7.15.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.15.5.tgz",
      "dependencies": {
        "@babel/code-frame": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.14.5.tgz",
          "dependencies": {
            "@babel/highlight": {
              "version": "7.14.5",
              "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.14.5.tgz",
              "dependencies": {
                "@babel/helper-validator-identifier": {
                  "version": "7.15.7"
                },
                "chalk": {
                  "version": "2.4.2",
                  "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
                  "dependencies": {
                    "ansi-styles": {
                      "version": "3.2.1",
                      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
                      "dependencies": {
                        "color-convert": {
                          "version": "1.9.3",
                          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
                          "dependencies": {
                            "color-name": {
                              "version": "1.1.3",
                              "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz"
                            }
                          }
                        }
                      }
                    },
                    "escape-string-regexp": {
                      "version": "1.0.5",
                      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz"
                    },
                    "supports-color": {
                      "version": "5.5.0",
                      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
                      "dependencies": {
                        "has-flag": {
                          "version": "3.0.0",
                          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz"
                        }
                      }
                    }
                  }
                },
                "js-tokens": {
                  "version": "4.0.0"
                }
              }
            }
          }
        },
        "@babel/generator": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.15.4.tgz",
          "dependencies": {
            "@babel/types": {
              "version": "7.15.6"
            },
            "jsesc": {
              "version": "2.5.2",
              "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz"
            },
            "source-map": {
              "version": "0.5.7",
              "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz"
            }
          }
        },
        "@babel/helper-compilation-targets": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.15.4.tgz",
          "dependencies": {
            "@babel/compat-data": {
              "version": "7.15.0"
            },
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-validator-option": {
              "version": "7.14.5"
            },
            "browserslist": {
              "version": "4.17.1"
            },
            "semver": {
              "version": "6.3.0"
            }
          }
        },
        "@babel/helper-module-transforms": {
          "version": "7.15.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.15.7.tgz",
          "dependencies": {
            "@babel/helper-module-imports": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.15.4.tgz",
              "dependencies": {
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/helper-replace-supers": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.15.4.tgz",
              "dependencies": {
                "@babel/helper-member-expression-to-functions": {
                  "version": "7.15.4",
                  "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.15.4.tgz",
                  "dependencies": {
                    "@babel/types": {
                      "version": "7.15.6"
                    }
                  }
                },
                "@babel/helper-optimise-call-expression": {
                  "version": "7.15.4"
                },
                "@babel/traverse": {
                  "version": "7.15.4"
                },
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/helper-simple-access": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.15.4.tgz",
              "dependencies": {
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/helper-split-export-declaration": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.15.4.tgz",
              "dependencies": {
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/helper-validator-identifier": {
              "version": "7.15.7",
              "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.15.7.tgz"
            },
            "@babel/template": {
              "version": "7.15.4"
            },
            "@babel/traverse": {
              "version": "7.15.4"
            },
            "@babel/types": {
              "version": "7.15.6"
            }
          }
        },
        "@babel/helpers": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.15.4.tgz",
          "dependencies": {
            "@babel/template": {
              "version": "7.15.4"
            },
            "@babel/traverse": {
              "version": "7.15.4"
            },
            "@babel/types": {
              "version": "7.15.6"
            }
          }
        },
        "@babel/parser": {
          "version": "7.15.7",
          "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.15.7.tgz"
        },
        "@babel/template": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.15.4.tgz",
          "dependencies": {
            "@babel/code-frame": {
              "version": "7.14.5"
            },
            "@babel/parser": {
              "version": "7.15.7"
            },
            "@babel/types": {
              "version": "7.15.6"
            }
          }
        },
        "@babel/traverse": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.15.4.tgz",
          "dependencies": {
            "@babel/code-frame": {
              "version": "7.14.5"
            },
            "@babel/generator": {
              "version": "7.15.4"
            },
            "@babel/helper-function-name": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.15.4.tgz",
              "dependencies": {
                "@babel/helper-get-function-arity": {
                  "version": "7.15.4",
                  "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.15.4.tgz",
                  "dependencies": {
                    "@babel/types": {
                      "version": "7.15.6"
                    }
                  }
                },
                "@babel/template": {
                  "version": "7.15.4"
                },
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/helper-hoist-variables": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.15.4.tgz",
              "dependencies": {
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/helper-split-export-declaration": {
              "version": "7.15.4"
            },
            "@babel/parser": {
              "version": "7.15.7"
            },
            "@babel/types": {
              "version": "7.15.6"
            },
            "debug": {
              "version": "4.3.2",
              "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",
              "dependencies": {
                "ms": {
                  "version": "2.1.2"
                }
              }
            },
            "globals": {
              "version": "11.12.0",
              "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz"
            }
          }
        },
        "@babel/types": {
          "version": "7.15.6",
          "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.15.6.tgz",
          "dependencies": {
            "@babel/helper-validator-identifier": {
              "version": "7.15.7"
            },
            "to-fast-properties": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz"
            }
          }
        },
        "convert-source-map": {
          "version": "1.8.0",
          "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz",
          "dependencies": {
            "safe-buffer": {
              "version": "5.1.2",
              "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz"
            }
          }
        },
        "debug": {
          "version": "4.3.2",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",
          "dependencies": {
            "ms": {
              "version": "2.1.2",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz"
            }
          }
        },
        "gensync": {
          "version": "1.0.0-beta.2",
          "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz"
        },
        "json5": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
          "dependencies": {
            "minimist": {
              "version": "1.2.5",
              "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz"
            }
          }
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz"
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz"
        }
      }
    },
    "@babel/preset-env": {
      "version": "7.15.6",
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.15.6.tgz",
      "dependencies": {
        "@babel/compat-data": {
          "version": "7.15.0",
          "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.15.0.tgz"
        },
        "@babel/core": {
          "version": "7.15.5"
        },
        "@babel/helper-compilation-targets": {
          "version": "7.15.4"
        },
        "@babel/helper-plugin-utils": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.14.5.tgz"
        },
        "@babel/helper-validator-option": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.14.5.tgz"
        },
        "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.15.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/helper-skip-transparent-expression-wrappers": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.15.4.tgz",
              "dependencies": {
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/plugin-proposal-optional-chaining": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-proposal-async-generator-functions": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.15.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/helper-remap-async-to-generator": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.15.4.tgz",
              "dependencies": {
                "@babel/helper-annotate-as-pure": {
                  "version": "7.15.4"
                },
                "@babel/helper-wrap-function": {
                  "version": "7.15.4",
                  "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.15.4.tgz",
                  "dependencies": {
                    "@babel/helper-function-name": {
                      "version": "7.15.4"
                    },
                    "@babel/template": {
                      "version": "7.15.4"
                    },
                    "@babel/traverse": {
                      "version": "7.15.4"
                    },
                    "@babel/types": {
                      "version": "7.15.6"
                    }
                  }
                },
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/plugin-syntax-async-generators": {
              "version": "7.8.4"
            }
          }
        },
        "@babel/plugin-proposal-class-properties": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-create-class-features-plugin": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.15.4.tgz",
              "dependencies": {
                "@babel/core": {
                  "version": "7.15.5"
                },
                "@babel/helper-annotate-as-pure": {
                  "version": "7.15.4"
                },
                "@babel/helper-function-name": {
                  "version": "7.15.4"
                },
                "@babel/helper-member-expression-to-functions": {
                  "version": "7.15.4"
                },
                "@babel/helper-optimise-call-expression": {
                  "version": "7.15.4"
                },
                "@babel/helper-replace-supers": {
                  "version": "7.15.4"
                },
                "@babel/helper-split-export-declaration": {
                  "version": "7.15.4"
                }
              }
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-proposal-class-static-block": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-static-block/-/plugin-proposal-class-static-block-7.15.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-create-class-features-plugin": {
              "version": "7.15.4"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-class-static-block": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-proposal-dynamic-import": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-dynamic-import": {
              "version": "7.8.3"
            }
          }
        },
        "@babel/plugin-proposal-export-namespace-from": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-export-namespace-from": {
              "version": "7.8.3"
            }
          }
        },
        "@babel/plugin-proposal-json-strings": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-json-strings": {
              "version": "7.8.3"
            }
          }
        },
        "@babel/plugin-proposal-logical-assignment-operators": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-logical-assignment-operators": {
              "version": "7.10.4"
            }
          }
        },
        "@babel/plugin-proposal-nullish-coalescing-operator": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-nullish-coalescing-operator": {
              "version": "7.8.3"
            }
          }
        },
        "@babel/plugin-proposal-numeric-separator": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-numeric-separator": {
              "version": "7.10.4"
            }
          }
        },
        "@babel/plugin-proposal-object-rest-spread": {
          "version": "7.15.6",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.15.6.tgz",
          "dependencies": {
            "@babel/compat-data": {
              "version": "7.15.0"
            },
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-compilation-targets": {
              "version": "7.15.4"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-object-rest-spread": {
              "version": "7.8.3"
            },
            "@babel/plugin-transform-parameters": {
              "version": "7.15.4"
            }
          }
        },
        "@babel/plugin-proposal-optional-catch-binding": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-optional-catch-binding": {
              "version": "7.8.3"
            }
          }
        },
        "@babel/plugin-proposal-optional-chaining": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/helper-skip-transparent-expression-wrappers": {
              "version": "7.15.4"
            },
            "@babel/plugin-syntax-optional-chaining": {
              "version": "7.8.3"
            }
          }
        },
        "@babel/plugin-proposal-private-methods": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-create-class-features-plugin": {
              "version": "7.15.4"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-proposal-private-property-in-object": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-property-in-object/-/plugin-proposal-private-property-in-object-7.15.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-annotate-as-pure": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.15.4.tgz",
              "dependencies": {
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/helper-create-class-features-plugin": {
              "version": "7.15.4"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-private-property-in-object": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-proposal-unicode-property-regex": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-create-regexp-features-plugin": {
              "version": "7.14.5",
              "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.14.5.tgz",
              "dependencies": {
                "@babel/core": {
                  "version": "7.15.5"
                },
                "@babel/helper-annotate-as-pure": {
                  "version": "7.15.4"
                },
                "regexpu-core": {
                  "version": "4.8.0",
                  "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.8.0.tgz",
                  "dependencies": {
                    "regenerate-unicode-properties": {
                      "version": "9.0.0",
                      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-9.0.0.tgz",
                      "dependencies": {
                        "regenerate": {
                          "version": "1.4.2"
                        }
                      }
                    },
                    "regenerate": {
                      "version": "1.4.2",
                      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz"
                    },
                    "regjsgen": {
                      "version": "0.5.2",
                      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.2.tgz"
                    },
                    "regjsparser": {
                      "version": "0.7.0",
                      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.7.0.tgz",
                      "dependencies": {
                        "jsesc": {
                          "version": "0.5.0",
                          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz"
                        }
                      }
                    },
                    "unicode-match-property-ecmascript": {
                      "version": "2.0.0",
                      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-2.0.0.tgz",
                      "dependencies": {
                        "unicode-canonical-property-names-ecmascript": {
                          "version": "2.0.0",
                          "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-2.0.0.tgz"
                        },
                        "unicode-property-aliases-ecmascript": {
                          "version": "2.0.0",
                          "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.0.0.tgz"
                        }
                      }
                    },
                    "unicode-match-property-value-ecmascript": {
                      "version": "2.0.0",
                      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-2.0.0.tgz"
                    }
                  }
                }
              }
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-async-generators": {
          "version": "7.8.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-class-properties": {
          "version": "7.12.13",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-class-static-block": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-dynamic-import": {
          "version": "7.8.3",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-export-namespace-from": {
          "version": "7.8.3",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-json-strings": {
          "version": "7.8.3",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-logical-assignment-operators": {
          "version": "7.10.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-nullish-coalescing-operator": {
          "version": "7.8.3",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-numeric-separator": {
          "version": "7.10.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-object-rest-spread": {
          "version": "7.8.3",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-optional-catch-binding": {
          "version": "7.8.3",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-optional-chaining": {
          "version": "7.8.3",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-private-property-in-object": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-syntax-top-level-await": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-arrow-functions": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-async-to-generator": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-module-imports": {
              "version": "7.15.4"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/helper-remap-async-to-generator": {
              "version": "7.15.4"
            }
          }
        },
        "@babel/plugin-transform-block-scoped-functions": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-block-scoping": {
          "version": "7.15.3",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.15.3.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-classes": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.15.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-annotate-as-pure": {
              "version": "7.15.4"
            },
            "@babel/helper-function-name": {
              "version": "7.15.4"
            },
            "@babel/helper-optimise-call-expression": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.15.4.tgz",
              "dependencies": {
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/helper-replace-supers": {
              "version": "7.15.4"
            },
            "@babel/helper-split-export-declaration": {
              "version": "7.15.4"
            },
            "globals": {
              "version": "11.12.0"
            }
          }
        },
        "@babel/plugin-transform-computed-properties": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-destructuring": {
          "version": "7.14.7",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.14.7.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-dotall-regex": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-create-regexp-features-plugin": {
              "version": "7.14.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-duplicate-keys": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-exponentiation-operator": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-builder-binary-assignment-operator-visitor": {
              "version": "7.15.4",
              "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.15.4.tgz",
              "dependencies": {
                "@babel/helper-explode-assignable-expression": {
                  "version": "7.15.4",
                  "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.15.4.tgz",
                  "dependencies": {
                    "@babel/types": {
                      "version": "7.15.6"
                    }
                  }
                },
                "@babel/types": {
                  "version": "7.15.6"
                }
              }
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-for-of": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.15.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-function-name": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-function-name": {
              "version": "7.15.4"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-literals": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-member-expression-literals": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-modules-amd": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-module-transforms": {
              "version": "7.15.7"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "babel-plugin-dynamic-import-node": {
              "version": "2.3.3",
              "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
              "dependencies": {
                "object.assign": {
                  "version": "4.1.2",
                  "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
                  "dependencies": {
                    "call-bind": {
                      "version": "1.0.2",
                      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
                      "dependencies": {
                        "function-bind": {
                          "version": "1.1.1",
                          "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz"
                        },
                        "get-intrinsic": {
                          "version": "1.1.1",
                          "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
                          "dependencies": {
                            "function-bind": {
                              "version": "1.1.1"
                            },
                            "has-symbols": {
                              "version": "1.0.2"
                            },
                            "has": {
                              "version": "1.0.3"
                            }
                          }
                        }
                      }
                    },
                    "define-properties": {
                      "version": "1.1.3",
                      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
                      "dependencies": {
                        "object-keys": {
                          "version": "1.1.1"
                        }
                      }
                    },
                    "has-symbols": {
                      "version": "1.0.2",
                      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz"
                    },
                    "object-keys": {
                      "version": "1.1.1"
                    }
                  }
                }
              }
            }
          }
        },
        "@babel/plugin-transform-modules-commonjs": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.15.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-module-transforms": {
              "version": "7.15.7"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/helper-simple-access": {
              "version": "7.15.4"
            },
            "babel-plugin-dynamic-import-node": {
              "version": "2.3.3"
            }
          }
        },
        "@babel/plugin-transform-modules-systemjs": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.15.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-hoist-variables": {
              "version": "7.15.4"
            },
            "@babel/helper-module-transforms": {
              "version": "7.15.7"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/helper-validator-identifier": {
              "version": "7.15.7"
            },
            "babel-plugin-dynamic-import-node": {
              "version": "2.3.3"
            }
          }
        },
        "@babel/plugin-transform-modules-umd": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-module-transforms": {
              "version": "7.15.7"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-named-capturing-groups-regex": {
          "version": "7.14.9",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.14.9.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-create-regexp-features-plugin": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-new-target": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-object-super": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/helper-replace-supers": {
              "version": "7.15.4"
            }
          }
        },
        "@babel/plugin-transform-parameters": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.15.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-property-literals": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-regenerator": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "regenerator-transform": {
              "version": "0.14.5",
              "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
              "dependencies": {
                "@babel/runtime": {
                  "version": "7.15.4"
                }
              }
            }
          }
        },
        "@babel/plugin-transform-reserved-words": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-shorthand-properties": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-spread": {
          "version": "7.14.6",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.14.6.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/helper-skip-transparent-expression-wrappers": {
              "version": "7.15.4"
            }
          }
        },
        "@babel/plugin-transform-sticky-regex": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-template-literals": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-typeof-symbol": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-unicode-escapes": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-unicode-regex": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-create-regexp-features-plugin": {
              "version": "7.14.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/preset-modules": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.4.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-proposal-unicode-property-regex": {
              "version": "7.14.5"
            },
            "@babel/plugin-transform-dotall-regex": {
              "version": "7.14.5"
            },
            "@babel/types": {
              "version": "7.15.6"
            },
            "esutils": {
              "version": "2.0.3",
              "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz"
            }
          }
        },
        "@babel/types": {
          "version": "7.15.6"
        },
        "babel-plugin-polyfill-corejs2": {
          "version": "0.2.2",
          "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.2.2.tgz",
          "dependencies": {
            "@babel/compat-data": {
              "version": "7.15.0"
            },
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-define-polyfill-provider": {
              "version": "0.2.3",
              "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.2.3.tgz",
              "dependencies": {
                "@babel/core": {
                  "version": "7.15.5"
                },
                "@babel/helper-compilation-targets": {
                  "version": "7.15.4"
                },
                "@babel/helper-module-imports": {
                  "version": "7.15.4"
                },
                "@babel/helper-plugin-utils": {
                  "version": "7.14.5"
                },
                "@babel/traverse": {
                  "version": "7.15.4"
                },
                "debug": {
                  "version": "4.3.2",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",
                  "dependencies": {
                    "ms": {
                      "version": "2.1.2"
                    }
                  }
                },
                "lodash.debounce": {
                  "version": "4.0.8",
                  "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz"
                },
                "resolve": {
                  "version": "1.20.0"
                },
                "semver": {
                  "version": "6.3.0"
                }
              }
            },
            "semver": {
              "version": "6.3.0"
            }
          }
        },
        "babel-plugin-polyfill-corejs3": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.2.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-define-polyfill-provider": {
              "version": "0.2.3"
            },
            "core-js-compat": {
              "version": "3.18.0"
            }
          }
        },
        "babel-plugin-polyfill-regenerator": {
          "version": "0.2.2",
          "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.2.2.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-define-polyfill-provider": {
              "version": "0.2.3"
            }
          }
        },
        "core-js-compat": {
          "version": "3.18.0",
          "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.18.0.tgz",
          "dependencies": {
            "browserslist": {
              "version": "4.17.1"
            },
            "semver": {
              "version": "7.0.0",
              "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz"
            }
          }
        },
        "semver": {
          "version": "6.3.0"
        }
      }
    },
    "@babel/preset-react": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/preset-react/-/preset-react-7.14.5.tgz",
      "dependencies": {
        "@babel/core": {
          "version": "7.15.5"
        },
        "@babel/helper-plugin-utils": {
          "version": "7.14.5"
        },
        "@babel/helper-validator-option": {
          "version": "7.14.5"
        },
        "@babel/plugin-transform-react-display-name": {
          "version": "7.15.1",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.15.1.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        },
        "@babel/plugin-transform-react-jsx-development": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-development/-/plugin-transform-react-jsx-development-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/plugin-transform-react-jsx": {
              "version": "7.14.9"
            }
          }
        },
        "@babel/plugin-transform-react-jsx": {
          "version": "7.14.9",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.14.9.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-annotate-as-pure": {
              "version": "7.15.4"
            },
            "@babel/helper-module-imports": {
              "version": "7.15.4"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            },
            "@babel/plugin-syntax-jsx": {
              "version": "7.14.5",
              "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.14.5.tgz",
              "dependencies": {
                "@babel/core": {
                  "version": "7.15.5"
                },
                "@babel/helper-plugin-utils": {
                  "version": "7.14.5"
                }
              }
            },
            "@babel/types": {
              "version": "7.15.6"
            }
          }
        },
        "@babel/plugin-transform-react-pure-annotations": {
          "version": "7.14.5",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-pure-annotations/-/plugin-transform-react-pure-annotations-7.14.5.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-annotate-as-pure": {
              "version": "7.15.4"
            },
            "@babel/helper-plugin-utils": {
              "version": "7.14.5"
            }
          }
        }
      }
    },
    "@emotion/react": {
      "version": "11.4.1",
      "resolved": "https://registry.npmjs.org/@emotion/react/-/react-11.4.1.tgz",
      "dependencies": {
        "@babel/core": {
          "version": "7.15.5"
        },
        "@babel/runtime": {
          "version": "7.15.4",
          "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.15.4.tgz",
          "dependencies": {
            "regenerator-runtime": {
              "version": "0.13.9",
              "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.9.tgz"
            }
          }
        },
        "@emotion/cache": {
          "version": "11.4.0",
          "resolved": "https://registry.npmjs.org/@emotion/cache/-/cache-11.4.0.tgz",
          "dependencies": {
            "@emotion/memoize": {
              "version": "0.7.5",
              "resolved": "https://registry.npmjs.org/@emotion/memoize/-/memoize-0.7.5.tgz"
            },
            "@emotion/sheet": {
              "version": "1.0.2"
            },
            "@emotion/utils": {
              "version": "1.0.0"
            },
            "@emotion/weak-memoize": {
              "version": "0.2.5"
            },
            "stylis": {
              "version": "4.0.10",
              "resolved": "https://registry.npmjs.org/stylis/-/stylis-4.0.10.tgz"
            }
          }
        },
        "@emotion/serialize": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/@emotion/serialize/-/serialize-1.0.2.tgz",
          "dependencies": {
            "@emotion/hash": {
              "version": "0.8.0",
              "resolved": "https://registry.npmjs.org/@emotion/hash/-/hash-0.8.0.tgz"
            },
            "@emotion/memoize": {
              "version": "0.7.5"
            },
            "@emotion/unitless": {
              "version": "0.7.5",
              "resolved": "https://registry.npmjs.org/@emotion/unitless/-/unitless-0.7.5.tgz"
            },
            "@emotion/utils": {
              "version": "1.0.0"
            },
            "csstype": {
              "version": "3.0.9"
            }
          }
        },
        "@emotion/sheet": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/@emotion/sheet/-/sheet-1.0.2.tgz"
        },
        "@emotion/utils": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/@emotion/utils/-/utils-1.0.0.tgz"
        },
        "@emotion/weak-memoize": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/@emotion/weak-memoize/-/weak-memoize-0.2.5.tgz"
        },
        "hoist-non-react-statics": {
          "version": "3.3.2",
          "resolved": "https://registry.npmjs.org/hoist-non-react-statics/-/hoist-non-react-statics-3.3.2.tgz",
          "dependencies": {
            "react-is": {
              "version": "16.13.1",
              "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz"
            }
          }
        },
        "react": {
          "version": "17.0.2"
        }
      }
    },
    "@emotion/styled": {
      "version": "11.3.0",
      "resolved": "https://registry.npmjs.org/@emotion/styled/-/styled-11.3.0.tgz",
      "dependencies": {
        "@babel/core": {
          "version": "7.15.5"
        },
        "@babel/runtime": {
          "version": "7.15.4"
        },
        "@emotion/babel-plugin": {
          "version": "11.3.0",
          "resolved": "https://registry.npmjs.org/@emotion/babel-plugin/-/babel-plugin-11.3.0.tgz",
          "dependencies": {
            "@babel/core": {
              "version": "7.15.5"
            },
            "@babel/helper-module-imports": {
              "version": "7.15.4"
            },
            "@babel/plugin-syntax-jsx": {
              "version": "7.14.5"
            },
            "@babel/runtime": {
              "version": "7.15.4"
            },
            "@emotion/hash": {
              "version": "0.8.0"
            },
            "@emotion/memoize": {
              "version": "0.7.5"
            },
            "@emotion/serialize": {
              "version": "1.0.2"
            },
            "babel-plugin-macros": {
              "version": "2.8.0",
              "resolved": "https://registry.npmjs.org/babel-plugin-macros/-/babel-plugin-macros-2.8.0.tgz",
              "dependencies": {
                "@babel/runtime": {
                  "version": "7.15.4"
                },
                "cosmiconfig": {
                  "version": "6.0.0",
                  "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-6.0.0.tgz",
                  "dependencies": {
                    "@types/parse-json": {
                      "version": "4.0.0",
                      "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz"
                    },
                    "import-fresh": {
                      "version": "3.3.0",
                      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
                      "dependencies": {
                        "parent-module": {
                          "version": "1.0.1",
                          "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
                          "dependencies": {
                            "callsites": {
                              "version": "3.1.0",
                              "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz"
                            }
                          }
                        },
                        "resolve-from": {
                          "version": "4.0.0",
                          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz"
                        }
                      }
                    },
                    "parse-json": {
                      "version": "5.2.0",
                      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
                      "dependencies": {
                        "@babel/code-frame": {
                          "version": "7.14.5"
                        },
                        "error-ex": {
                          "version": "1.3.2",
                          "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
                          "dependencies": {
                            "is-arrayish": {
                              "version": "0.2.1",
                              "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz"
                            }
                          }
                        },
                        "json-parse-even-better-errors": {
                          "version": "2.3.1",
                          "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz"
                        },
                        "lines-and-columns": {
                          "version": "1.1.6",
                          "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.1.6.tgz"
                        }
                      }
                    },
                    "path-type": {
                      "version": "4.0.0",
                      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz"
                    },
                    "yaml": {
                      "version": "1.10.2",
                      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz"
                    }
                  }
                },
                "resolve": {
                  "version": "1.20.0"
                }
              }
            },
            "convert-source-map": {
              "version": "1.8.0"
            },
            "escape-string-regexp": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz"
            },
            "find-root": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/find-root/-/find-root-1.1.0.tgz"
            },
            "source-map": {
              "version": "0.5.7",
              "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz"
            },
            "stylis": {
              "version": "4.0.10"
            }
          }
        },
        "@emotion/is-prop-valid": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/@emotion/is-prop-valid/-/is-prop-valid-1.1.0.tgz",
          "dependencies": {
            "@emotion/memoize": {
              "version": "0.7.5"
            }
          }
        },
        "@emotion/react": {
          "version": "11.4.1"
        },
        "@emotion/serialize": {
          "version": "1.0.2"
        },
        "@emotion/utils": {
          "version": "1.0.0"
        },
        "react": {
          "version": "17.0.2"
        }
      }
    },
    "@mui/material": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@mui/material/-/material-5.0.1.tgz",
      "dependencies": {
        "@babel/runtime": {
          "version": "7.15.4"
        },
        "@emotion/react": {
          "version": "11.4.1"
        },
        "@emotion/styled": {
          "version": "11.3.0"
        },
        "@mui/core": {
          "version": "5.0.0-alpha.48",
          "resolved": "https://registry.npmjs.org/@mui/core/-/core-5.0.0-alpha.48.tgz",
          "dependencies": {
            "@babel/runtime": {
              "version": "7.15.4"
            },
            "@emotion/is-prop-valid": {
              "version": "1.1.0"
            },
            "@mui/utils": {
              "version": "5.0.1"
            },
            "@types/react": {
              "version": "17.0.24"
            },
            "clsx": {
              "version": "1.1.1"
            },
            "prop-types": {
              "version": "15.7.2"
            },
            "react-dom": {
              "version": "17.0.2"
            },
            "react-is": {
              "version": "17.0.2"
            },
            "react": {
              "version": "17.0.2"
            }
          }
        },
        "@mui/system": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/@mui/system/-/system-5.0.1.tgz",
          "dependencies": {
            "@babel/runtime": {
              "version": "7.15.4"
            },
            "@emotion/react": {
              "version": "11.4.1"
            },
            "@emotion/styled": {
              "version": "11.3.0"
            },
            "@mui/private-theming": {
              "version": "5.0.1",
              "resolved": "https://registry.npmjs.org/@mui/private-theming/-/private-theming-5.0.1.tgz",
              "dependencies": {
                "@babel/runtime": {
                  "version": "7.15.4"
                },
                "@mui/utils": {
                  "version": "5.0.1"
                },
                "@types/react": {
                  "version": "17.0.24"
                },
                "prop-types": {
                  "version": "15.7.2"
                },
                "react": {
                  "version": "17.0.2"
                }
              }
            },
            "@mui/styled-engine": {
              "version": "5.0.1",
              "resolved": "https://registry.npmjs.org/@mui/styled-engine/-/styled-engine-5.0.1.tgz",
              "dependencies": {
                "@babel/runtime": {
                  "version": "7.15.4"
                },
                "@emotion/cache": {
                  "version": "11.4.0"
                },
                "@emotion/react": {
                  "version": "11.4.1"
                },
                "@emotion/styled": {
                  "version": "11.3.0"
                },
                "prop-types": {
                  "version": "15.7.2"
                },
                "react": {
                  "version": "17.0.2"
                }
              }
            },
            "@mui/types": {
              "version": "7.0.0"
            },
            "@mui/utils": {
              "version": "5.0.1"
            },
            "@types/react": {
              "version": "17.0.24"
            },
            "clsx": {
              "version": "1.1.1"
            },
            "csstype": {
              "version": "3.0.9"
            },
            "prop-types": {
              "version": "15.7.2"
            },
            "react": {
              "version": "17.0.2"
            }
          }
        },
        "@mui/types": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/@mui/types/-/types-7.0.0.tgz",
          "dependencies": {
            "@types/react": {
              "version": "17.0.24"
            }
          }
        },
        "@mui/utils": {
          "version": "5.0.1",
          "resolved": "https://registry.npmjs.org/@mui/utils/-/utils-5.0.1.tgz",
          "dependencies": {
            "@babel/runtime": {
              "version": "7.15.4"
            },
            "@types/prop-types": {
              "version": "15.7.4",
              "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.4.tgz"
            },
            "@types/react-is": {
              "version": "17.0.2",
              "resolved": "https://registry.npmjs.org/@types/react-is/-/react-is-17.0.2.tgz",
              "dependencies": {
                "@types/react": {
                  "version": "17.0.24"
                }
              }
            },
            "prop-types": {
              "version": "15.7.2"
            },
            "react-is": {
              "version": "17.0.2"
            },
            "react": {
              "version": "17.0.2"
            }
          }
        },
        "@popperjs/core": {
          "version": "2.10.1",
          "resolved": "https://registry.npmjs.org/@popperjs/core/-/core-2.10.1.tgz"
        },
        "@types/react-transition-group": {
          "version": "4.4.3",
          "resolved": "https://registry.npmjs.org/@types/react-transition-group/-/react-transition-group-4.4.3.tgz",
          "dependencies": {
            "@types/react": {
              "version": "17.0.24"
            }
          }
        },
        "@types/react": {
          "version": "17.0.24",
          "resolved": "https://registry.npmjs.org/@types/react/-/react-17.0.24.tgz",
          "dependencies": {
            "@types/prop-types": {
              "version": "15.7.4"
            },
            "@types/scheduler": {
              "version": "0.16.2",
              "resolved": "https://registry.npmjs.org/@types/scheduler/-/scheduler-0.16.2.tgz"
            },
            "csstype": {
              "version": "3.0.9"
            }
          }
        },
        "clsx": {
          "version": "1.1.1",
          "resolved": "https://registry.npmjs.org/clsx/-/clsx-1.1.1.tgz"
        },
        "csstype": {
          "version": "3.0.9",
          "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.0.9.tgz"
        },
        "hoist-non-react-statics": {
          "version": "3.3.2"
        },
        "prop-types": {
          "version": "15.7.2",
          "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",
          "dependencies": {
            "loose-envify": {
              "version": "1.4.0"
            },
            "object-assign": {
              "version": "4.1.1"
            },
            "react-is": {
              "version": "16.13.1",
              "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz"
            }
          }
        },
        "react-dom": {
          "version": "17.0.2"
        },
        "react-is": {
          "version": "17.0.2",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz"
        },
        "react-transition-group": {
          "version": "4.4.2",
          "resolved": "https://registry.npmjs.org/react-transition-group/-/react-transition-group-4.4.2.tgz",
          "dependencies": {
            "@babel/runtime": {
              "version": "7.15.4"
            },
            "dom-helpers": {
              "version": "5.2.1",
              "resolved": "https://registry.npmjs.org/dom-helpers/-/dom-helpers-5.2.1.tgz",
              "dependencies": {
                "@babel/runtime": {
                  "version": "7.15.4"
                },
                "csstype": {
                  "version": "3.0.9"
                }
              }
            },
            "loose-envify": {
              "version": "1.4.0"
            },
            "prop-types": {
              "version": "15.7.2"
            },
            "react-dom": {
              "version": "17.0.2"
            },
            "react": {
              "version": "17.0.2"
            }
          }
        },
        "react": {
          "version": "17.0.2"
        }
      }
    },
    "babel-loader": {
      "version": "8.2.2",
      "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.2.2.tgz",
      "dependencies": {
        "@babel/core": {
          "version": "7.15.5"
        },
        "find-cache-dir": {
          "version": "3.3.2",
          "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.2.tgz",
          "dependencies": {
            "commondir": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz"
            },
            "make-dir": {
              "version": "3.1.0"
            },
            "pkg-dir": {
              "version": "4.2.0",
              "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
              "dependencies": {
                "find-up": {
                  "version": "4.1.0",
                  "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                  "dependencies": {
                    "locate-path": {
                      "version": "5.0.0",
                      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                      "dependencies": {
                        "p-locate": {
                          "version": "4.1.0",
                          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                          "dependencies": {
                            "p-limit": {
                              "version": "2.3.0",
                              "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
                              "dependencies": {
                                "p-try": {
                                  "version": "2.2.0",
                                  "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz"
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "path-exists": {
                      "version": "4.0.0",
                      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz"
                    }
                  }
                }
              }
            }
          }
        },
        "loader-utils": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
          "dependencies": {
            "big.js": {
              "version": "5.2.2",
              "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz"
            },
            "emojis-list": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz"
            },
            "json5": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
              "dependencies": {
                "minimist": {
                  "version": "1.2.5"
                }
              }
            }
          }
        },
        "make-dir": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
          "dependencies": {
            "semver": {
              "version": "6.3.0"
            }
          }
        },
        "schema-utils": {
          "version": "2.7.1",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-2.7.1.tgz",
          "dependencies": {
            "@types/json-schema": {
              "version": "7.0.9",
              "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.9.tgz"
            },
            "ajv-keywords": {
              "version": "3.5.2",
              "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
              "dependencies": {
                "ajv": {
                  "version": "6.12.6"
                }
              }
            },
            "ajv": {
              "version": "6.12.6",
              "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
              "dependencies": {
                "fast-deep-equal": {
                  "version": "3.1.3",
                  "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz"
                },
                "fast-json-stable-stringify": {
                  "version": "2.1.0",
                  "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz"
                },
                "json-schema-traverse": {
                  "version": "0.4.1",
                  "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz"
                },
                "uri-js": {
                  "version": "4.4.1",
                  "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
                  "dependencies": {
                    "punycode": {
                      "version": "2.1.1",
                      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz"
                    }
                  }
                }
              }
            }
          }
        },
        "webpack": {
          "version": "5.53.0"
        }
      }
    },
    "html-webpack-plugin": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/html-webpack-plugin/-/html-webpack-plugin-5.3.2.tgz",
      "dependencies": {
        "@types/html-minifier-terser": {
          "version": "5.1.2",
          "resolved": "https://registry.npmjs.org/@types/html-minifier-terser/-/html-minifier-terser-5.1.2.tgz"
        },
        "html-minifier-terser": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/html-minifier-terser/-/html-minifier-terser-5.1.1.tgz",
          "dependencies": {
            "camel-case": {
              "version": "4.1.2",
              "resolved": "https://registry.npmjs.org/camel-case/-/camel-case-4.1.2.tgz",
              "dependencies": {
                "pascal-case": {
                  "version": "3.1.2",
                  "resolved": "https://registry.npmjs.org/pascal-case/-/pascal-case-3.1.2.tgz",
                  "dependencies": {
                    "no-case": {
                      "version": "3.0.4",
                      "resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.4.tgz",
                      "dependencies": {
                        "lower-case": {
                          "version": "2.0.2",
                          "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.2.tgz",
                          "dependencies": {
                            "tslib": {
                              "version": "2.3.1"
                            }
                          }
                        },
                        "tslib": {
                          "version": "2.3.1"
                        }
                      }
                    },
                    "tslib": {
                      "version": "2.3.1"
                    }
                  }
                },
                "tslib": {
                  "version": "2.3.1",
                  "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz"
                }
              }
            },
            "clean-css": {
              "version": "4.2.3",
              "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-4.2.3.tgz",
              "dependencies": {
                "source-map": {
                  "version": "0.6.1"
                }
              }
            },
            "commander": {
              "version": "4.1.1",
              "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz"
            },
            "he": {
              "version": "1.2.0",
              "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz"
            },
            "param-case": {
              "version": "3.0.4",
              "resolved": "https://registry.npmjs.org/param-case/-/param-case-3.0.4.tgz",
              "dependencies": {
                "dot-case": {
                  "version": "3.0.4",
                  "resolved": "https://registry.npmjs.org/dot-case/-/dot-case-3.0.4.tgz",
                  "dependencies": {
                    "no-case": {
                      "version": "3.0.4"
                    },
                    "tslib": {
                      "version": "2.3.1"
                    }
                  }
                },
                "tslib": {
                  "version": "2.3.1"
                }
              }
            },
            "relateurl": {
              "version": "0.2.7",
              "resolved": "https://registry.npmjs.org/relateurl/-/relateurl-0.2.7.tgz"
            },
            "terser": {
              "version": "4.8.0",
              "resolved": "https://registry.npmjs.org/terser/-/terser-4.8.0.tgz",
              "dependencies": {
                "commander": {
                  "version": "2.20.3",
                  "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz"
                },
                "source-map-support": {
                  "version": "0.5.20",
                  "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.20.tgz",
                  "dependencies": {
                    "buffer-from": {
                      "version": "1.1.2",
                      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz"
                    },
                    "source-map": {
                      "version": "0.6.1"
                    }
                  }
                },
                "source-map": {
                  "version": "0.6.1"
                }
              }
            }
          }
        },
        "lodash": {
          "version": "4.17.21",
          "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz"
        },
        "pretty-error": {
          "version": "3.0.4",
          "resolved": "https://registry.npmjs.org/pretty-error/-/pretty-error-3.0.4.tgz",
          "dependencies": {
            "lodash": {
              "version": "4.17.21"
            },
            "renderkid": {
              "version": "2.0.7",
              "resolved": "https://registry.npmjs.org/renderkid/-/renderkid-2.0.7.tgz",
              "dependencies": {
                "css-select": {
                  "version": "4.1.3",
                  "resolved": "https://registry.npmjs.org/css-select/-/css-select-4.1.3.tgz",
                  "dependencies": {
                    "boolbase": {
                      "version": "1.0.0",
                      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz"
                    },
                    "css-what": {
                      "version": "5.0.1",
                      "resolved": "https://registry.npmjs.org/css-what/-/css-what-5.0.1.tgz"
                    },
                    "domhandler": {
                      "version": "4.2.2",
                      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-4.2.2.tgz",
                      "dependencies": {
                        "domelementtype": {
                          "version": "2.2.0"
                        }
                      }
                    },
                    "domutils": {
                      "version": "2.8.0",
                      "resolved": "https://registry.npmjs.org/domutils/-/domutils-2.8.0.tgz",
                      "dependencies": {
                        "dom-serializer": {
                          "version": "1.3.2",
                          "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-1.3.2.tgz",
                          "dependencies": {
                            "domelementtype": {
                              "version": "2.2.0"
                            },
                            "domhandler": {
                              "version": "4.2.2"
                            },
                            "entities": {
                              "version": "2.2.0"
                            }
                          }
                        },
                        "domelementtype": {
                          "version": "2.2.0"
                        },
                        "domhandler": {
                          "version": "4.2.2"
                        }
                      }
                    },
                    "nth-check": {
                      "version": "2.0.1",
                      "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.0.1.tgz",
                      "dependencies": {
                        "boolbase": {
                          "version": "1.0.0"
                        }
                      }
                    }
                  }
                },
                "dom-converter": {
                  "version": "0.2.0",
                  "resolved": "https://registry.npmjs.org/dom-converter/-/dom-converter-0.2.0.tgz",
                  "dependencies": {
                    "utila": {
                      "version": "0.4.0",
                      "resolved": "https://registry.npmjs.org/utila/-/utila-0.4.0.tgz"
                    }
                  }
                },
                "htmlparser2": {
                  "version": "6.1.0",
                  "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-6.1.0.tgz",
                  "dependencies": {
                    "domelementtype": {
                      "version": "2.2.0",
                      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.2.0.tgz"
                    },
                    "domhandler": {
                      "version": "4.2.2"
                    },
                    "domutils": {
                      "version": "2.8.0"
                    },
                    "entities": {
                      "version": "2.2.0",
                      "resolved": "https://registry.npmjs.org/entities/-/entities-2.2.0.tgz"
                    }
                  }
                },
                "lodash": {
                  "version": "4.17.21"
                },
                "strip-ansi": {
                  "version": "3.0.1",
                  "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
                  "dependencies": {
                    "ansi-regex": {
                      "version": "2.1.1",
                      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz"
                    }
                  }
                }
              }
            }
          }
        },
        "tapable": {
          "version": "2.2.1",
          "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz"
        },
        "webpack": {
          "version": "5.53.0"
        }
      }
    },
    "react-dom": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-17.0.2.tgz",
      "dependencies": {
        "loose-envify": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
          "dependencies": {
            "js-tokens": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz"
            }
          }
        },
        "object-assign": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz"
        },
        "react": {
          "version": "17.0.2"
        },
        "scheduler": {
          "version": "0.20.2",
          "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.20.2.tgz",
          "dependencies": {
            "loose-envify": {
              "version": "1.4.0"
            },
            "object-assign": {
              "version": "4.1.1"
            }
          }
        }
      }
    },
    "react": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react/-/react-17.0.2.tgz",
      "dependencies": {
        "loose-envify": {
          "version": "1.4.0"
        },
        "object-assign": {
          "version": "4.1.1"
        }
      }
    },
    "webpack-cli": {
      "version": "4.8.0",
      "resolved": "https://registry.npmjs.org/webpack-cli/-/webpack-cli-4.8.0.tgz",
      "dependencies": {
        "@discoveryjs/json-ext": {
          "version": "0.5.5",
          "resolved": "https://registry.npmjs.org/@discoveryjs/json-ext/-/json-ext-0.5.5.tgz"
        },
        "@webpack-cli/configtest": {
          "version": "1.0.4",
          "resolved": "https://registry.npmjs.org/@webpack-cli/configtest/-/configtest-1.0.4.tgz",
          "dependencies": {
            "webpack-cli": {
              "version": "4.8.0"
            },
            "webpack": {
              "version": "5.53.0"
            }
          }
        },
        "@webpack-cli/info": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/@webpack-cli/info/-/info-1.3.0.tgz",
          "dependencies": {
            "envinfo": {
              "version": "7.8.1",
              "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.8.1.tgz"
            },
            "webpack-cli": {
              "version": "4.8.0"
            }
          }
        },
        "@webpack-cli/serve": {
          "version": "1.5.2",
          "resolved": "https://registry.npmjs.org/@webpack-cli/serve/-/serve-1.5.2.tgz",
          "dependencies": {
            "webpack-cli": {
              "version": "4.8.0"
            }
          }
        },
        "colorette": {
          "version": "1.4.0",
          "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.4.0.tgz"
        },
        "commander": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz"
        },
        "execa": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
          "dependencies": {
            "cross-spawn": {
              "version": "7.0.3",
              "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
              "dependencies": {
                "path-key": {
                  "version": "3.1.1",
                  "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz"
                },
                "shebang-command": {
                  "version": "2.0.0",
                  "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
                  "dependencies": {
                    "shebang-regex": {
                      "version": "3.0.0",
                      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz"
                    }
                  }
                },
                "which": {
                  "version": "2.0.2",
                  "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
                  "dependencies": {
                    "isexe": {
                      "version": "2.0.0",
                      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz"
                    }
                  }
                }
              }
            },
            "get-stream": {
              "version": "6.0.1",
              "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz"
            },
            "human-signals": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz"
            },
            "is-stream": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz"
            },
            "merge-stream": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz"
            },
            "npm-run-path": {
              "version": "4.0.1",
              "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
              "dependencies": {
                "path-key": {
                  "version": "3.1.1"
                }
              }
            },
            "onetime": {
              "version": "5.1.2",
              "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
              "dependencies": {
                "mimic-fn": {
                  "version": "2.1.0",
                  "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz"
                }
              }
            },
            "signal-exit": {
              "version": "3.0.4",
              "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.4.tgz"
            },
            "strip-final-newline": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz"
            }
          }
        },
        "fastest-levenshtein": {
          "version": "1.0.12",
          "resolved": "https://registry.npmjs.org/fastest-levenshtein/-/fastest-levenshtein-1.0.12.tgz"
        },
        "import-local": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.0.2.tgz",
          "dependencies": {
            "pkg-dir": {
              "version": "4.2.0"
            },
            "resolve-cwd": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
              "dependencies": {
                "resolve-from": {
                  "version": "5.0.0",
                  "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz"
                }
              }
            }
          }
        },
        "interpret": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/interpret/-/interpret-2.2.0.tgz"
        },
        "rechoir": {
          "version": "0.7.1",
          "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.7.1.tgz",
          "dependencies": {
            "resolve": {
              "version": "1.20.0",
              "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
              "dependencies": {
                "is-core-module": {
                  "version": "2.6.0",
                  "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.6.0.tgz",
                  "dependencies": {
                    "has": {
                      "version": "1.0.3",
                      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
                      "dependencies": {
                        "function-bind": {
                          "version": "1.1.1"
                        }
                      }
                    }
                  }
                },
                "path-parse": {
                  "version": "1.0.7",
                  "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz"
                }
              }
            }
          }
        },
        "v8-compile-cache": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/v8-compile-cache/-/v8-compile-cache-2.3.0.tgz"
        },
        "webpack-merge": {
          "version": "5.8.0",
          "resolved": "https://registry.npmjs.org/webpack-merge/-/webpack-merge-5.8.0.tgz",
          "dependencies": {
            "clone-deep": {
              "version": "4.0.1",
              "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
              "dependencies": {
                "is-plain-object": {
                  "version": "2.0.4",
                  "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
                  "dependencies": {
                    "isobject": {
                      "version": "3.0.1",
                      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz"
                    }
                  }
                },
                "kind-of": {
                  "version": "6.0.3",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz"
                },
                "shallow-clone": {
                  "version": "3.0.1",
                  "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
                  "dependencies": {
                    "kind-of": {
                      "version": "6.0.3"
                    }
                  }
                }
              }
            },
            "wildcard": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/wildcard/-/wildcard-2.0.0.tgz"
            }
          }
        },
        "webpack": {
          "version": "5.53.0"
        }
      }
    },
    "webpack-dev-server": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-4.2.1.tgz",
      "dependencies": {
        "ansi-html-community": {
          "version": "0.0.8",
          "resolved": "https://registry.npmjs.org/ansi-html-community/-/ansi-html-community-0.0.8.tgz"
        },
        "bonjour": {
          "version": "3.5.0",
          "resolved": "https://registry.npmjs.org/bonjour/-/bonjour-3.5.0.tgz",
          "dependencies": {
            "array-flatten": {
              "version": "2.1.2",
              "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-2.1.2.tgz"
            },
            "deep-equal": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
              "dependencies": {
                "is-arguments": {
                  "version": "1.1.1",
                  "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.1.1.tgz",
                  "dependencies": {
                    "call-bind": {
                      "version": "1.0.2"
                    },
                    "has-tostringtag": {
                      "version": "1.0.0",
                      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
                      "dependencies": {
                        "has-symbols": {
                          "version": "1.0.2"
                        }
                      }
                    }
                  }
                },
                "is-date-object": {
                  "version": "1.0.5",
                  "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
                  "dependencies": {
                    "has-tostringtag": {
                      "version": "1.0.0"
                    }
                  }
                },
                "is-regex": {
                  "version": "1.1.4",
                  "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
                  "dependencies": {
                    "call-bind": {
                      "version": "1.0.2"
                    },
                    "has-tostringtag": {
                      "version": "1.0.0"
                    }
                  }
                },
                "object-is": {
                  "version": "1.1.5",
                  "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.5.tgz",
                  "dependencies": {
                    "call-bind": {
                      "version": "1.0.2"
                    },
                    "define-properties": {
                      "version": "1.1.3"
                    }
                  }
                },
                "object-keys": {
                  "version": "1.1.1",
                  "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz"
                },
                "regexp.prototype.flags": {
                  "version": "1.3.1",
                  "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.3.1.tgz",
                  "dependencies": {
                    "call-bind": {
                      "version": "1.0.2"
                    },
                    "define-properties": {
                      "version": "1.1.3"
                    }
                  }
                }
              }
            },
            "dns-equal": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/dns-equal/-/dns-equal-1.0.0.tgz"
            },
            "dns-txt": {
              "version": "2.0.2",
              "resolved": "https://registry.npmjs.org/dns-txt/-/dns-txt-2.0.2.tgz",
              "dependencies": {
                "buffer-indexof": {
                  "version": "1.1.1",
                  "resolved": "https://registry.npmjs.org/buffer-indexof/-/buffer-indexof-1.1.1.tgz"
                }
              }
            },
            "multicast-dns-service-types": {
              "version": "1.1.0",
              "resolved": "https://registry.npmjs.org/multicast-dns-service-types/-/multicast-dns-service-types-1.1.0.tgz"
            },
            "multicast-dns": {
              "version": "6.2.3",
              "resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-6.2.3.tgz",
              "dependencies": {
                "dns-packet": {
                  "version": "1.3.4",
                  "resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-1.3.4.tgz",
                  "dependencies": {
                    "ip": {
                      "version": "1.1.5",
                      "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz"
                    },
                    "safe-buffer": {
                      "version": "5.1.2"
                    }
                  }
                },
                "thunky": {
                  "version": "1.1.0",
                  "resolved": "https://registry.npmjs.org/thunky/-/thunky-1.1.0.tgz"
                }
              }
            }
          }
        },
        "chokidar": {
          "version": "3.5.2",
          "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.2.tgz",
          "dependencies": {
            "anymatch": {
              "version": "3.1.2",
              "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
              "dependencies": {
                "normalize-path": {
                  "version": "3.0.0"
                },
                "picomatch": {
                  "version": "2.3.0",
                  "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.0.tgz"
                }
              }
            },
            "braces": {
              "version": "3.0.2",
              "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
              "dependencies": {
                "fill-range": {
                  "version": "7.0.1",
                  "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
                  "dependencies": {
                    "to-regex-range": {
                      "version": "5.0.1",
                      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
                      "dependencies": {
                        "is-number": {
                          "version": "7.0.0",
                          "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz"
                        }
                      }
                    }
                  }
                }
              }
            },
            "fsevents": {
              "version": "2.3.2",
              "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz"
            },
            "glob-parent": {
              "version": "5.1.2",
              "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
              "dependencies": {
                "is-glob": {
                  "version": "4.0.1"
                }
              }
            },
            "is-binary-path": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
              "dependencies": {
                "binary-extensions": {
                  "version": "2.2.0",
                  "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz"
                }
              }
            },
            "is-glob": {
              "version": "4.0.1",
              "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
              "dependencies": {
                "is-extglob": {
                  "version": "2.1.1",
                  "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz"
                }
              }
            },
            "normalize-path": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz"
            },
            "readdirp": {
              "version": "3.6.0",
              "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
              "dependencies": {
                "picomatch": {
                  "version": "2.3.0"
                }
              }
            }
          }
        },
        "colorette": {
          "version": "1.4.0"
        },
        "compression": {
          "version": "1.7.4",
          "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
          "dependencies": {
            "accepts": {
              "version": "1.3.7",
              "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
              "dependencies": {
                "mime-types": {
                  "version": "2.1.32"
                },
                "negotiator": {
                  "version": "0.6.2",
                  "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz"
                }
              }
            },
            "bytes": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz"
            },
            "compressible": {
              "version": "2.0.18",
              "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
              "dependencies": {
                "mime-db": {
                  "version": "1.49.0"
                }
              }
            },
            "debug": {
              "version": "2.6.9",
              "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
              "dependencies": {
                "ms": {
                  "version": "2.0.0",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz"
                }
              }
            },
            "on-headers": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz"
            },
            "safe-buffer": {
              "version": "5.1.2"
            },
            "vary": {
              "version": "1.1.2",
              "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz"
            }
          }
        },
        "connect-history-api-fallback": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz"
        },
        "del": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/del/-/del-6.0.0.tgz",
          "dependencies": {
            "globby": {
              "version": "11.0.4",
              "resolved": "https://registry.npmjs.org/globby/-/globby-11.0.4.tgz",
              "dependencies": {
                "array-union": {
                  "version": "2.1.0",
                  "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz"
                },
                "dir-glob": {
                  "version": "3.0.1",
                  "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
                  "dependencies": {
                    "path-type": {
                      "version": "4.0.0"
                    }
                  }
                },
                "fast-glob": {
                  "version": "3.2.7",
                  "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.7.tgz",
                  "dependencies": {
                    "@nodelib/fs.stat": {
                      "version": "2.0.5",
                      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz"
                    },
                    "@nodelib/fs.walk": {
                      "version": "1.2.8",
                      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
                      "dependencies": {
                        "@nodelib/fs.scandir": {
                          "version": "2.1.5",
                          "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
                          "dependencies": {
                            "@nodelib/fs.stat": {
                              "version": "2.0.5"
                            },
                            "run-parallel": {
                              "version": "1.2.0",
                              "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
                              "dependencies": {
                                "queue-microtask": {
                                  "version": "1.2.3",
                                  "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz"
                                }
                              }
                            }
                          }
                        },
                        "fastq": {
                          "version": "1.13.0",
                          "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.13.0.tgz",
                          "dependencies": {
                            "reusify": {
                              "version": "1.0.4",
                              "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz"
                            }
                          }
                        }
                      }
                    },
                    "glob-parent": {
                      "version": "5.1.2"
                    },
                    "merge2": {
                      "version": "1.4.1"
                    },
                    "micromatch": {
                      "version": "4.0.4"
                    }
                  }
                },
                "ignore": {
                  "version": "5.1.8",
                  "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.1.8.tgz"
                },
                "merge2": {
                  "version": "1.4.1",
                  "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz"
                },
                "slash": {
                  "version": "3.0.0"
                }
              }
            },
            "graceful-fs": {
              "version": "4.2.8"
            },
            "is-glob": {
              "version": "4.0.1"
            },
            "is-path-cwd": {
              "version": "2.2.0",
              "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz"
            },
            "is-path-inside": {
              "version": "3.0.3",
              "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz"
            },
            "p-map": {
              "version": "4.0.0",
              "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
              "dependencies": {
                "aggregate-error": {
                  "version": "3.1.0",
                  "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
                  "dependencies": {
                    "clean-stack": {
                      "version": "2.2.0",
                      "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz"
                    },
                    "indent-string": {
                      "version": "4.0.0",
                      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz"
                    }
                  }
                }
              }
            },
            "rimraf": {
              "version": "3.0.2",
              "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
              "dependencies": {
                "glob": {
                  "version": "7.2.0",
                  "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.0.tgz",
                  "dependencies": {
                    "fs.realpath": {
                      "version": "1.0.0",
                      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz"
                    },
                    "inflight": {
                      "version": "1.0.6",
                      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
                      "dependencies": {
                        "once": {
                          "version": "1.4.0"
                        },
                        "wrappy": {
                          "version": "1.0.2",
                          "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz"
                        }
                      }
                    },
                    "inherits": {
                      "version": "2.0.3"
                    },
                    "minimatch": {
                      "version": "3.0.4",
                      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
                      "dependencies": {
                        "brace-expansion": {
                          "version": "1.1.11",
                          "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
                          "dependencies": {
                            "balanced-match": {
                              "version": "1.0.2",
                              "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz"
                            },
                            "concat-map": {
                              "version": "0.0.1",
                              "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz"
                            }
                          }
                        }
                      }
                    },
                    "once": {
                      "version": "1.4.0",
                      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
                      "dependencies": {
                        "wrappy": {
                          "version": "1.0.2"
                        }
                      }
                    },
                    "path-is-absolute": {
                      "version": "1.0.1",
                      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz"
                    }
                  }
                }
              }
            },
            "slash": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz"
            }
          }
        },
        "express": {
          "version": "4.17.1",
          "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
          "dependencies": {
            "accepts": {
              "version": "1.3.7"
            },
            "array-flatten": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz"
            },
            "body-parser": {
              "version": "1.19.0",
              "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
              "dependencies": {
                "bytes": {
                  "version": "3.1.0",
                  "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz"
                },
                "content-type": {
                  "version": "1.0.4"
                },
                "debug": {
                  "version": "2.6.9"
                },
                "depd": {
                  "version": "1.1.2"
                },
                "http-errors": {
                  "version": "1.7.2",
                  "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
                  "dependencies": {
                    "depd": {
                      "version": "1.1.2"
                    },
                    "inherits": {
                      "version": "2.0.3"
                    },
                    "setprototypeof": {
                      "version": "1.1.1"
                    },
                    "statuses": {
                      "version": "1.5.0"
                    },
                    "toidentifier": {
                      "version": "1.0.0",
                      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz"
                    }
                  }
                },
                "iconv-lite": {
                  "version": "0.4.24",
                  "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
                  "dependencies": {
                    "safer-buffer": {
                      "version": "2.1.2",
                      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz"
                    }
                  }
                },
                "on-finished": {
                  "version": "2.3.0"
                },
                "qs": {
                  "version": "6.7.0"
                },
                "raw-body": {
                  "version": "2.4.0",
                  "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
                  "dependencies": {
                    "bytes": {
                      "version": "3.1.0"
                    },
                    "http-errors": {
                      "version": "1.7.2"
                    },
                    "iconv-lite": {
                      "version": "0.4.24"
                    },
                    "unpipe": {
                      "version": "1.0.0"
                    }
                  }
                },
                "type-is": {
                  "version": "1.6.18"
                }
              }
            },
            "content-disposition": {
              "version": "0.5.3",
              "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
              "dependencies": {
                "safe-buffer": {
                  "version": "5.1.2"
                }
              }
            },
            "content-type": {
              "version": "1.0.4",
              "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz"
            },
            "cookie-signature": {
              "version": "1.0.6",
              "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz"
            },
            "cookie": {
              "version": "0.4.0",
              "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz"
            },
            "debug": {
              "version": "2.6.9"
            },
            "depd": {
              "version": "1.1.2",
              "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz"
            },
            "encodeurl": {
              "version": "1.0.2",
              "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz"
            },
            "escape-html": {
              "version": "1.0.3",
              "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz"
            },
            "etag": {
              "version": "1.8.1",
              "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz"
            },
            "finalhandler": {
              "version": "1.1.2",
              "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
              "dependencies": {
                "debug": {
                  "version": "2.6.9"
                },
                "encodeurl": {
                  "version": "1.0.2"
                },
                "escape-html": {
                  "version": "1.0.3"
                },
                "on-finished": {
                  "version": "2.3.0"
                },
                "parseurl": {
                  "version": "1.3.3"
                },
                "statuses": {
                  "version": "1.5.0"
                },
                "unpipe": {
                  "version": "1.0.0",
                  "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz"
                }
              }
            },
            "fresh": {
              "version": "0.5.2",
              "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz"
            },
            "merge-descriptors": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz"
            },
            "methods": {
              "version": "1.1.2",
              "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz"
            },
            "on-finished": {
              "version": "2.3.0",
              "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
              "dependencies": {
                "ee-first": {
                  "version": "1.1.1",
                  "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz"
                }
              }
            },
            "parseurl": {
              "version": "1.3.3",
              "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz"
            },
            "path-to-regexp": {
              "version": "0.1.7",
              "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz"
            },
            "proxy-addr": {
              "version": "2.0.7",
              "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
              "dependencies": {
                "forwarded": {
                  "version": "0.2.0",
                  "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz"
                },
                "ipaddr.js": {
                  "version": "1.9.1"
                }
              }
            },
            "qs": {
              "version": "6.7.0",
              "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz"
            },
            "range-parser": {
              "version": "1.2.1",
              "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz"
            },
            "safe-buffer": {
              "version": "5.1.2"
            },
            "send": {
              "version": "0.17.1",
              "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
              "dependencies": {
                "debug": {
                  "version": "2.6.9"
                },
                "depd": {
                  "version": "1.1.2"
                },
                "destroy": {
                  "version": "1.0.4",
                  "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz"
                },
                "encodeurl": {
                  "version": "1.0.2"
                },
                "escape-html": {
                  "version": "1.0.3"
                },
                "etag": {
                  "version": "1.8.1"
                },
                "fresh": {
                  "version": "0.5.2"
                },
                "http-errors": {
                  "version": "1.7.2"
                },
                "mime": {
                  "version": "1.6.0",
                  "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz"
                },
                "ms": {
                  "version": "2.1.1",
                  "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz"
                },
                "on-finished": {
                  "version": "2.3.0"
                },
                "range-parser": {
                  "version": "1.2.1"
                },
                "statuses": {
                  "version": "1.5.0"
                }
              }
            },
            "serve-static": {
              "version": "1.14.1",
              "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
              "dependencies": {
                "encodeurl": {
                  "version": "1.0.2"
                },
                "escape-html": {
                  "version": "1.0.3"
                },
                "parseurl": {
                  "version": "1.3.3"
                },
                "send": {
                  "version": "0.17.1"
                }
              }
            },
            "setprototypeof": {
              "version": "1.1.1",
              "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz"
            },
            "statuses": {
              "version": "1.5.0",
              "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz"
            },
            "type-is": {
              "version": "1.6.18",
              "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
              "dependencies": {
                "media-typer": {
                  "version": "0.3.0",
                  "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz"
                },
                "mime-types": {
                  "version": "2.1.32"
                }
              }
            },
            "utils-merge": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz"
            },
            "vary": {
              "version": "1.1.2"
            }
          }
        },
        "graceful-fs": {
          "version": "4.2.8",
          "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.8.tgz"
        },
        "html-entities": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-2.3.2.tgz"
        },
        "http-proxy-middleware": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-2.0.1.tgz",
          "dependencies": {
            "@types/http-proxy": {
              "version": "1.17.7",
              "resolved": "https://registry.npmjs.org/@types/http-proxy/-/http-proxy-1.17.7.tgz",
              "dependencies": {
                "@types/node": {
                  "version": "16.9.6",
                  "resolved": "https://registry.npmjs.org/@types/node/-/node-16.9.6.tgz"
                }
              }
            },
            "http-proxy": {
              "version": "1.18.1",
              "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",
              "dependencies": {
                "eventemitter3": {
                  "version": "4.0.7",
                  "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz"
                },
                "follow-redirects": {
                  "version": "1.14.4",
                  "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.14.4.tgz"
                },
                "requires-port": {
                  "version": "1.0.0",
                  "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz"
                }
              }
            },
            "is-glob": {
              "version": "4.0.1"
            },
            "is-plain-obj": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-3.0.0.tgz"
            },
            "micromatch": {
              "version": "4.0.4",
              "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
              "dependencies": {
                "braces": {
                  "version": "3.0.2"
                },
                "picomatch": {
                  "version": "2.3.0"
                }
              }
            }
          }
        },
        "internal-ip": {
          "version": "6.2.0",
          "resolved": "https://registry.npmjs.org/internal-ip/-/internal-ip-6.2.0.tgz",
          "dependencies": {
            "default-gateway": {
              "version": "6.0.3",
              "resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-6.0.3.tgz",
              "dependencies": {
                "execa": {
                  "version": "5.1.1"
                }
              }
            },
            "ipaddr.js": {
              "version": "1.9.1",
              "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz"
            },
            "is-ip": {
              "version": "3.1.0",
              "resolved": "https://registry.npmjs.org/is-ip/-/is-ip-3.1.0.tgz",
              "dependencies": {
                "ip-regex": {
                  "version": "4.3.0",
                  "resolved": "https://registry.npmjs.org/ip-regex/-/ip-regex-4.3.0.tgz"
                }
              }
            },
            "p-event": {
              "version": "4.2.0",
              "resolved": "https://registry.npmjs.org/p-event/-/p-event-4.2.0.tgz",
              "dependencies": {
                "p-timeout": {
                  "version": "3.2.0",
                  "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-3.2.0.tgz",
                  "dependencies": {
                    "p-finally": {
                      "version": "1.0.0",
                      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz"
                    }
                  }
                }
              }
            }
          }
        },
        "ipaddr.js": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-2.0.1.tgz"
        },
        "open": {
          "version": "8.2.1",
          "resolved": "https://registry.npmjs.org/open/-/open-8.2.1.tgz",
          "dependencies": {
            "define-lazy-prop": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-2.0.0.tgz"
            },
            "is-docker": {
              "version": "2.2.1",
              "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz"
            },
            "is-wsl": {
              "version": "2.2.0",
              "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
              "dependencies": {
                "is-docker": {
                  "version": "2.2.1"
                }
              }
            }
          }
        },
        "p-retry": {
          "version": "4.6.1",
          "resolved": "https://registry.npmjs.org/p-retry/-/p-retry-4.6.1.tgz",
          "dependencies": {
            "@types/retry": {
              "version": "0.12.1",
              "resolved": "https://registry.npmjs.org/@types/retry/-/retry-0.12.1.tgz"
            },
            "retry": {
              "version": "0.13.1",
              "resolved": "https://registry.npmjs.org/retry/-/retry-0.13.1.tgz"
            }
          }
        },
        "portfinder": {
          "version": "1.0.28",
          "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.28.tgz",
          "dependencies": {
            "async": {
              "version": "2.6.3",
              "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
              "dependencies": {
                "lodash": {
                  "version": "4.17.21"
                }
              }
            },
            "debug": {
              "version": "3.2.7",
              "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
              "dependencies": {
                "ms": {
                  "version": "2.1.2"
                }
              }
            },
            "mkdirp": {
              "version": "0.5.5",
              "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
              "dependencies": {
                "minimist": {
                  "version": "1.2.5"
                }
              }
            }
          }
        },
        "schema-utils": {
          "version": "3.1.1",
          "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.1.1.tgz",
          "dependencies": {
            "@types/json-schema": {
              "version": "7.0.9"
            },
            "ajv-keywords": {
              "version": "3.5.2"
            },
            "ajv": {
              "version": "6.12.6"
            }
          }
        },
        "selfsigned": {
          "version": "1.10.11",
          "resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-1.10.11.tgz",
          "dependencies": {
            "node-forge": {
              "version": "0.10.0",
              "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-0.10.0.tgz"
            }
          }
        },
        "serve-index": {
          "version": "1.9.1",
          "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
          "dependencies": {
            "accepts": {
              "version": "1.3.7"
            },
            "batch": {
              "version": "0.6.1",
              "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz"
            },
            "debug": {
              "version": "2.6.9"
            },
            "escape-html": {
              "version": "1.0.3"
            },
            "http-errors": {
              "version": "1.6.3",
              "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
              "dependencies": {
                "depd": {
                  "version": "1.1.2"
                },
                "inherits": {
                  "version": "2.0.3",
                  "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz"
                },
                "setprototypeof": {
                  "version": "1.1.0",
                  "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz"
                },
                "statuses": {
                  "version": "1.5.0"
                }
              }
            },
            "mime-types": {
              "version": "2.1.32"
            },
            "parseurl": {
              "version": "1.3.3"
            }
          }
        },
        "sockjs": {
          "version": "0.3.21",
          "resolved": "https://registry.npmjs.org/sockjs/-/sockjs-0.3.21.tgz",
          "dependencies": {
            "faye-websocket": {
              "version": "0.11.4",
              "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.4.tgz",
              "dependencies": {
                "websocket-driver": {
                  "version": "0.7.4"
                }
              }
            },
            "uuid": {
              "version": "3.4.0",
              "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz"
            },
            "websocket-driver": {
              "version": "0.7.4",
              "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.4.tgz",
              "dependencies": {
                "http-parser-js": {
                  "version": "0.5.3",
                  "resolved": "https://registry.npmjs.org/http-parser-js/-/http-parser-js-0.5.3.tgz"
                },
                "safe-buffer": {
                  "version": "5.1.2"
                },
                "websocket-extensions": {
                  "version": "0.1.4",
                  "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.4.tgz"
                }
              }
            }
          }
        },
        "spdy": {
          "version": "4.0.2",
          "resolved": "https://registry.npmjs.org/spdy/-/spdy-4.0.2.tgz",
          "dependencies": {
            "debug": {
              "version": "4.3.2",
              "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",
              "dependencies": {
                "ms": {
                  "version": "2.1.2"
                }
              }
            },
            "handle-thing": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.1.tgz"
            },
            "http-deceiver": {
              "version": "1.2.7",
              "resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz"
            },
            "select-hose": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz"
            },
            "spdy-transport": {
              "version": "3.0.0",
              "resolved": "https://registry.npmjs.org/spdy-transport/-/spdy-transport-3.0.0.tgz",
              "dependencies": {
                "debug": {
                  "version": "4.3.2",
                  "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",
                  "dependencies": {
                    "ms": {
                      "version": "2.1.2"
                    }
                  }
                },
                "detect-node": {
                  "version": "2.1.0",
                  "resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.1.0.tgz"
                },
                "hpack.js": {
                  "version": "2.1.6",
                  "resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
                  "dependencies": {
                    "inherits": {
                      "version": "2.0.3"
                    },
                    "obuf": {
                      "version": "1.1.2"
                    },
                    "readable-stream": {
                      "version": "2.3.7",
                      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
                      "dependencies": {
                        "core-util-is": {
                          "version": "1.0.3",
                          "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz"
                        },
                        "inherits": {
                          "version": "2.0.3"
                        },
                        "isarray": {
                          "version": "1.0.0",
                          "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz"
                        },
                        "process-nextick-args": {
                          "version": "2.0.1",
                          "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz"
                        },
                        "safe-buffer": {
                          "version": "5.1.2"
                        },
                        "string_decoder": {
                          "version": "1.1.1",
                          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
                          "dependencies": {
                            "safe-buffer": {
                              "version": "5.1.2"
                            }
                          }
                        },
                        "util-deprecate": {
                          "version": "1.0.2"
                        }
                      }
                    },
                    "wbuf": {
                      "version": "1.7.3"
                    }
                  }
                },
                "obuf": {
                  "version": "1.1.2",
                  "resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz"
                },
                "readable-stream": {
                  "version": "3.6.0",
                  "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                  "dependencies": {
                    "inherits": {
                      "version": "2.0.3"
                    },
                    "string_decoder": {
                      "version": "1.3.0",
                      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
                      "dependencies": {
                        "safe-buffer": {
                          "version": "5.2.1",
                          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz"
                        }
                      }
                    },
                    "util-deprecate": {
                      "version": "1.0.2",
                      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz"
                    }
                  }
                },
                "wbuf": {
                  "version": "1.7.3",
                  "resolved": "https://registry.npmjs.org/wbuf/-/wbuf-1.7.3.tgz",
                  "dependencies": {
                    "minimalistic-assert": {
                      "version": "1.0.1",
                      "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz"
                    }
                  }
                }
              }
            }
          }
        },
        "strip-ansi": {
          "version": "7.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.0.1.tgz",
          "dependencies": {
            "ansi-regex": {
              "version": "6.0.1",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz"
            }
          }
        },
        "url": {
          "version": "0.11.0",
          "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
          "dependencies": {
            "punycode": {
              "version": "1.3.2",
              "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz"
            },
            "querystring": {
              "version": "0.2.0",
              "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz"
            }
          }
        },
        "webpack-dev-middleware": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-5.2.0.tgz",
          "dependencies": {
            "memfs": {
              "version": "3.3.0",
              "resolved": "https://registry.npmjs.org/memfs/-/memfs-3.3.0.tgz",
              "dependencies": {
                "fs-monkey": {
                  "version": "1.0.3",
                  "resolved": "https://registry.npmjs.org/fs-monkey/-/fs-monkey-1.0.3.tgz"
                }
              }
            },
            "mime-types": {
              "version": "2.1.32"
            },
            "nanocolors": {
              "version": "0.2.1",
              "resolved": "https://registry.npmjs.org/nanocolors/-/nanocolors-0.2.1.tgz"
            },
            "range-parser": {
              "version": "1.2.1"
            },
            "schema-utils": {
              "version": "3.1.1"
            },
            "webpack": {
              "version": "5.53.0"
            }
          }
        },
        "webpack": {
          "version": "5.53.0"
        },
        "ws": {
          "version": "8.2.2",
          "resolved": "https://registry.npmjs.org/ws/-/ws-8.2.2.tgz",
          "dependencies": {
            "bufferutil": {},
            "utf-8-validate": {
              "missing": true,
              "problems": [
                "missing: utf-8-validate@^5.0.2, required by ws@8.2.2"
              ]
            }
          }
        }
      }
    },
    "webpack": {
      "version": "5.53.0",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-5.53.0.tgz",
      "dependencies": {
        "@types/eslint-scope": {
          "version": "3.7.1",
          "resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.1.tgz",
          "dependencies": {
            "@types/eslint": {
              "version": "7.28.0",
              "resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-7.28.0.tgz",
              "dependencies": {
                "@types/estree": {
                  "version": "0.0.50"
                },
                "@types/json-schema": {
                  "version": "7.0.9"
                }
              }
            },
            "@types/estree": {
              "version": "0.0.50"
            }
          }
        },
        "@types/estree": {
          "version": "0.0.50",
          "resolved": "https://registry.npmjs.org/@types/estree/-/estree-0.0.50.tgz"
        },
        "@webassemblyjs/ast": {
          "version": "1.11.1",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.11.1.tgz",
          "dependencies": {
            "@webassemblyjs/helper-numbers": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.11.1.tgz",
              "dependencies": {
                "@webassemblyjs/floating-point-hex-parser": {
                  "version": "1.11.1",
                  "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.11.1.tgz"
                },
                "@webassemblyjs/helper-api-error": {
                  "version": "1.11.1"
                },
                "@xtuc/long": {
                  "version": "4.2.2",
                  "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz"
                }
              }
            },
            "@webassemblyjs/helper-wasm-bytecode": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.11.1.tgz"
            }
          }
        },
        "@webassemblyjs/wasm-edit": {
          "version": "1.11.1",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.11.1.tgz",
          "dependencies": {
            "@webassemblyjs/ast": {
              "version": "1.11.1"
            },
            "@webassemblyjs/helper-buffer": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.11.1.tgz"
            },
            "@webassemblyjs/helper-wasm-bytecode": {
              "version": "1.11.1"
            },
            "@webassemblyjs/helper-wasm-section": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.11.1.tgz",
              "dependencies": {
                "@webassemblyjs/ast": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/helper-buffer": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/helper-wasm-bytecode": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/wasm-gen": {
                  "version": "1.11.1"
                }
              }
            },
            "@webassemblyjs/wasm-gen": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.11.1.tgz",
              "dependencies": {
                "@webassemblyjs/ast": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/helper-wasm-bytecode": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/ieee754": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/leb128": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/utf8": {
                  "version": "1.11.1"
                }
              }
            },
            "@webassemblyjs/wasm-opt": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.11.1.tgz",
              "dependencies": {
                "@webassemblyjs/ast": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/helper-buffer": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/wasm-gen": {
                  "version": "1.11.1"
                },
                "@webassemblyjs/wasm-parser": {
                  "version": "1.11.1"
                }
              }
            },
            "@webassemblyjs/wasm-parser": {
              "version": "1.11.1"
            },
            "@webassemblyjs/wast-printer": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.11.1.tgz",
              "dependencies": {
                "@webassemblyjs/ast": {
                  "version": "1.11.1"
                },
                "@xtuc/long": {
                  "version": "4.2.2"
                }
              }
            }
          }
        },
        "@webassemblyjs/wasm-parser": {
          "version": "1.11.1",
          "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.11.1.tgz",
          "dependencies": {
            "@webassemblyjs/ast": {
              "version": "1.11.1"
            },
            "@webassemblyjs/helper-api-error": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.11.1.tgz"
            },
            "@webassemblyjs/helper-wasm-bytecode": {
              "version": "1.11.1"
            },
            "@webassemblyjs/ieee754": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.11.1.tgz",
              "dependencies": {
                "@xtuc/ieee754": {
                  "version": "1.2.0",
                  "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz"
                }
              }
            },
            "@webassemblyjs/leb128": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.11.1.tgz",
              "dependencies": {
                "@xtuc/long": {
                  "version": "4.2.2"
                }
              }
            },
            "@webassemblyjs/utf8": {
              "version": "1.11.1",
              "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.11.1.tgz"
            }
          }
        },
        "acorn-import-assertions": {
          "version": "1.7.6",
          "resolved": "https://registry.npmjs.org/acorn-import-assertions/-/acorn-import-assertions-1.7.6.tgz",
          "dependencies": {
            "acorn": {
              "version": "8.5.0"
            }
          }
        },
        "acorn": {
          "version": "8.5.0",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.5.0.tgz"
        },
        "browserslist": {
          "version": "4.17.1",
          "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.17.1.tgz",
          "dependencies": {
            "caniuse-lite": {
              "version": "1.0.30001260",
              "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001260.tgz",
              "dependencies": {
                "nanocolors": {
                  "version": "0.1.12"
                }
              }
            },
            "electron-to-chromium": {
              "version": "1.3.849",
              "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.849.tgz"
            },
            "escalade": {
              "version": "3.1.1",
              "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz"
            },
            "nanocolors": {
              "version": "0.1.12",
              "resolved": "https://registry.npmjs.org/nanocolors/-/nanocolors-0.1.12.tgz"
            },
            "node-releases": {
              "version": "1.1.76",
              "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.76.tgz"
            }
          }
        },
        "chrome-trace-event": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.3.tgz"
        },
        "enhanced-resolve": {
          "version": "5.8.3",
          "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.8.3.tgz",
          "dependencies": {
            "graceful-fs": {
              "version": "4.2.8"
            },
            "tapable": {
              "version": "2.2.1"
            }
          }
        },
        "es-module-lexer": {
          "version": "0.7.1",
          "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-0.7.1.tgz"
        },
        "eslint-scope": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
          "dependencies": {
            "esrecurse": {
              "version": "4.3.0",
              "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
              "dependencies": {
                "estraverse": {
                  "version": "5.2.0",
                  "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz"
                }
              }
            },
            "estraverse": {
              "version": "4.3.0",
              "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz"
            }
          }
        },
        "events": {
          "version": "3.3.0",
          "resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz"
        },
        "glob-to-regexp": {
          "version": "0.4.1",
          "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz"
        },
        "graceful-fs": {
          "version": "4.2.8"
        },
        "json-parse-better-errors": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz"
        },
        "loader-runner": {
          "version": "4.2.0",
          "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.2.0.tgz"
        },
        "mime-types": {
          "version": "2.1.32",
          "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.32.tgz",
          "dependencies": {
            "mime-db": {
              "version": "1.49.0",
              "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.49.0.tgz"
            }
          }
        },
        "neo-async": {
          "version": "2.6.2",
          "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz"
        },
        "schema-utils": {
          "version": "3.1.1"
        },
        "tapable": {
          "version": "2.2.1"
        },
        "terser-webpack-plugin": {
          "version": "5.2.4",
          "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.2.4.tgz",
          "dependencies": {
            "jest-worker": {
              "version": "27.2.0",
              "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-27.2.0.tgz",
              "dependencies": {
                "@types/node": {
                  "version": "16.9.6"
                },
                "merge-stream": {
                  "version": "2.0.0"
                },
                "supports-color": {
                  "version": "8.1.1",
                  "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
                  "dependencies": {
                    "has-flag": {
                      "version": "4.0.0",
                      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz"
                    }
                  }
                }
              }
            },
            "p-limit": {
              "version": "3.1.0",
              "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
              "dependencies": {
                "yocto-queue": {
                  "version": "0.1.0",
                  "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz"
                }
              }
            },
            "schema-utils": {
              "version": "3.1.1"
            },
            "serialize-javascript": {
              "version": "6.0.0",
              "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.0.tgz",
              "dependencies": {
                "randombytes": {
                  "version": "2.1.0",
                  "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
                  "dependencies": {
                    "safe-buffer": {
                      "version": "5.2.1",
                      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz"
                    }
                  }
                }
              }
            },
            "source-map": {
              "version": "0.6.1",
              "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz"
            },
            "terser": {
              "version": "5.9.0",
              "resolved": "https://registry.npmjs.org/terser/-/terser-5.9.0.tgz",
              "dependencies": {
                "commander": {
                  "version": "2.20.3"
                },
                "source-map-support": {
                  "version": "0.5.20"
                },
                "source-map": {
                  "version": "0.7.3",
                  "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz"
                }
              }
            },
            "webpack": {
              "version": "5.53.0"
            }
          }
        },
        "watchpack": {
          "version": "2.2.0",
          "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.2.0.tgz",
          "dependencies": {
            "glob-to-regexp": {
              "version": "0.4.1"
            },
            "graceful-fs": {
              "version": "4.2.8"
            }
          }
        },
        "webpack-sources": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-3.2.1.tgz"
        }
      }
    }
  }
}

export default pkgDeps;
