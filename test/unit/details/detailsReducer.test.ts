import * as actions from '../../../src/details/detailsActions'
import { detailsReducer } from '../../../src/details/detailsReducer'

describe('Details Reducer', () => {
  const scenarios = [
    {
      name: 'adds feature',
      action: {
        type: actions.types.ADD_FEATURE,
        payload: {
          value: 'myFeature'
        }
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true
          },
          myFeature: {
            enabled: false,
            rules: [],
            dependsOn: [],
            turnsOff: []
          }
        }
      }
    },
    {
      name: 'toggles feature',
      action: {
        payload: {
          path: ['someFeature'],
          data: {
            enabled: false
          }
        },
        type: actions.types.TOGGLE_FEATURE
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: false
          }
        }
      }
    },
    {
      name: 'renames feature',
      action: {
        payload: {
          oldValue: 'someFeature',
          value: 'pokemon'
        },
        type: actions.types.RENAME_FEATURE
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {
          pokemon: {
            enabled: true
          }
        }
      }
    },
    {
      name: 'deletes feature',
      action: {
        payload: {
          path: ['someFeature']
        },
        type: actions.types.DELETE_FEATURE
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ criteria: [] }, { criteria: [] }]
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {}
      }
    },
    {
      name: 'adds rule',
      action: {
        payload: {
          path: ['someFeature']
        },
        type: actions.types.ADD_RULE
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ 'some-criteria': [] }]
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ 'some-criteria': [] }, { criteria: [] }]
          }
        }
      }
    },
    {
      name: 'delete rule',
      action: {
        payload: {
          path: ['someFeature', 0]
        },
        type: actions.types.DELETE_RULE
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ criteria: [] }, { criteria: [] }]
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ criteria: [] }]
          }
        }
      }
    },
    {
      name: 'renames rule',
      action: {
        payload: {
          path: ['someFeature', 0, 'criteria'],
          newValue: 'pokemon'
        },
        type: actions.types.RENAME_CRITERIA
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ criteria: ['pikachu'] }]
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ pokemon: ['pikachu'] }]
          }
        }
      }
    },
    {
      name: 'delete criteria',
      action: {
        payload: {
          path: ['someFeature', 0, 'criteria']
        },
        type: actions.types.DELETE_CRITERIA
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ criteria: [], 'criteria-2': [] }, { criteria: [] }]
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ 'criteria-2': [] }, { criteria: [] }]
          }
        }
      }
    },
    {
      name: 'add criteria',
      action: {
        payload: {
          path: ['someFeature', 0]
        },
        type: actions.types.ADD_CRITERIA
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ 'some-criteria': [] }]
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ 'some-criteria': [], criteria: [] }]
          }
        }
      }
    },
    {
      name: 'updates criteria values',
      action: {
        payload: {
          path: ['someFeature', 0, 'some-criteria'],
          values: ['pikachu', 'charizard']
        },
        type: actions.types.UPDATE_CRITERIA_VALUES
      },
      prevState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ 'some-criteria': [] }]
          }
        }
      },
      expectedState: {
        name: 'app',
        config: {
          someFeature: {
            enabled: true,
            rules: [{ 'some-criteria': ['pikachu', 'charizard'] }]
          }
        }
      }
    },
    {
      name: 'loads config data',
      action: {
        payload: {
          data: {
            someFeature: {
              enabled: true
            }
          }
        },
        type: actions.types.LOAD_CONFIG.RESPONSE
      },
      prevState: {},
      expectedState: {
        someFeature: {
          enabled: true
        }
      }
    }
  ]

  scenarios.forEach((scenario) => {
    it(scenario.name, () => {
      expect(detailsReducer(scenario.prevState, scenario.action)).toEqual(scenario.expectedState)
    })
  })
})
