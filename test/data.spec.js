import {
  orderByName,
  orderBySpawn,
  orderByPc,
  orderByHp,
  pokemonOrder,
  calculateStab,
  calculateDps,
  calculateEps,
} from "../src/data.js";

describe("orderByName", () => {
  it("is a function", () => {
    expect(typeof orderByName).toBe("function");
  });
  it("Order Name", () => {
    const data = [{
      name: "a",
    }]
    const name = "a";
    const result = 0
    expect(orderByName(data, name)).toBe(result);
  });
  it("Order Name1", () => {
    const data = {
      name: "a",
    }
    const name = {
      name: "b",
    };
    const result = -1;
    expect(orderByName(data, name)).toEqual(result);
  });
  it("Order Name1", () => {
    const data = {
      name: "b",
    }
    const name = {
      name: "a",
    };
    const result = 1;
    expect(orderByName(data, name)).toEqual(result);
  });
});

describe("orderBySpawn", () => {
  it("is a function", () => {
    expect(typeof orderBySpawn).toBe("function");
  });
  it("spawn-chance", () => {
    const data = {
      'spawn-chance': 5,
    }
    const dataB = {
      'spawn-chance': 3,
    }
    const result = 2
    expect(orderBySpawn(data, dataB)).toEqual(result);
  })
});

describe("orderByPc", () => {
  it("is a function", () => {
    expect(typeof orderByPc).toBe("function");
  })
  it("orderByPc", () => {
    const data = {
      stats: {
        'max-cp': 29,
      } }
    const dataB = {
      stats: {
        'max-cp': 30,
      } }
    const result = -1
    expect(orderByPc(data, dataB)).toEqual(result);
  })

  it("orderByPc", () => {
    const data = {
      stats: {
        'max-cp': 30,
      }  }
    const dataB = {
      stats: {
        'max-cp': 29,
      }  }
    const result = 1
    expect(orderByPc(data, dataB)).toEqual(result);
  })

  it("orderByPc", () => {
    const data = {
      stats: {
        'max-cp': 30,
      }  }
    const dataB = {
      stats: {
        'max-cp': 30,
      } }
    const result = 0
    expect(orderByPc(data, dataB)).toEqual(result);
  })
})

describe("orderByHp", () => {
  it("is a function", () => {
    expect(typeof orderByHp).toBe("function");
  })
  it("orderByHp", () => {
    const data = {
      stats: {
        'max-hp': 29,
      }   }
    const dataB = {
      stats: {
        'max-hp': 30,
      } }
    const result = -1
    expect(orderByHp(data, dataB)).toEqual(result);
  })

  it("orderByHp", () => {
    const data = {
      stats: {
        'max-hp': 30,
      }  }
    const dataB = {
      stats: {
        'max-hp': 29,
      } }
    const result = 1
    expect(orderByHp(data, dataB)).toEqual(result);
  })
  it("orderByHp", () => {
    const data = {
      stats: {
        'max-hp': 30,
      } }
    const dataB = {
      stats: {
        'max-hp': 30,
      }  }
    const result = 0
    expect(orderByHp(data, dataB)).toEqual(result);
  })
})


describe("pokemonOrder", () => {
  it("is a object", () => {
    expect(typeof pokemonOrder).toBe("object");
  });
});

describe("differentOrder", () => {
  it("is a function", () => {
    expect(typeof pokemonOrder.differentOrder).toBe("function");
  });
  it("Order A-Z", () => {
    const data = [{
      name: 'abra',
    },
    {
      name: 'zubat',
    }]
    const result = [{
      name: 'abra',
    },
    {
      name: 'zubat',
    }]
    expect(pokemonOrder.differentOrder(data, "aZ")).toEqual(result);
  });

  it("Order Z-A", () => {
    const data = [{
      name: 'abra',
    },
    {
      name: 'zubat',
    }]
    const result = [{
      name: 'zubat',
    },
    {
      name: 'abra',
    }]
    expect(pokemonOrder.differentOrder(data, "zA")).toEqual(result);
  });
  it("ascending-max Cp", () => {
    const data = [{
      stats: {
        'max-cp': 30,
      } },
    {
      stats: {
        'max-cp': 10,
      } },
    {
      stats: {
        'max-cp': 20,
      } 
    }];
    const result = [{
      stats: {
        'max-cp': 10,
      }
    },
    {
      stats: {
        'max-cp': 20,
      }
    },
    {
      stats: {
        'max-cp': 30,
      }
    }];

    expect(pokemonOrder.differentOrder(data, "ascendingCp")).toEqual(result);
  });

  it("descendingCp - max Cp ", () => {
    const data = [{
      stats: {
        'max-cp': 30,
      }
    },
    {
      stats: {
        'max-cp': 10,
      }
    },
    {
      stats: {
        'max-cp': 20,
      }
    }];
    const result = [{
      stats: {
        'max-cp': 30,
      }
    },
    {
      stats: {
        'max-cp': 20,
      }
    },
    {
      stats: {
        'max-cp': 10,
      }
    }];

    expect(pokemonOrder.differentOrder(data, "descendingCp")).toEqual(result);
  })

  it("ascending-max Hp", () => {
    const data = [{
      stats: {
        'max-hp': 30,
      }
    },
    {
      stats: {
        'max-hp': 10,
      }
    },
    {
      stats: {
        'max-hp': 20,
      }
    }];
    const result = [{
      stats: {
        'max-hp': 10,
      }
    },
    {
      stats: {
        'max-hp': 20,
      }
    },
    {
      stats: {
        'max-hp': 30,
      }
    }];

    expect(pokemonOrder.differentOrder(data, "ascendingHp")).toEqual(result);
  })

  it("descending - max Hp ", () => {
    const data = [{
      stats: {
        'max-hp': 30,
      }
    },
    {
      stats: {
        'max-hp': 10,
      }
    },
    {
      stats: {
        'max-hp': 20,
      }
    }];
    const result = [{
      stats: {
        'max-hp': 30,
      }
    },
    {
      stats: {
        'max-hp': 20,
      }
    },
    {
      stats: {
        'max-hp': 10,
      }
    }];

    expect(pokemonOrder.differentOrder(data, "descendingHp")).toEqual(result);
  })

  it("ascendingspawn", () => {
    const data = [{
      'spawn-chance': 3,
    },
    {
      'spawn-chance': 2,
    },
    {
      'spawn-chance': 5,
    }];
    const result = [{
      'spawn-chance': 2,
    },
    {
      'spawn-chance': 3,
    },
    {
      'spawn-chance': 5,
    }];
    expect(pokemonOrder.differentOrder(data, "ascendingspawn")).toEqual(result);
  })

  it("descendingspawn", () => {
    const data = [{
      'spawn-chance': 3,
    },
    {
      'spawn-chance': 2,
    },
    {
      'spawn-chance': 5,
    }];
    const result = [{
      'spawn-chance': 5,
    },
    {
      'spawn-chance': 3,
    },
    {
      'spawn-chance': 2,
    }];
    expect(pokemonOrder.differentOrder(data, "descendingspawn")).toEqual(result);
  })
});


describe("calculateStab", () => {
  it("is a function", () => {
    expect(typeof calculateStab).toBe("function");
  });
  it("calculateStab", () => {
    const data = {
      'quick-move': [{
        'name': 'vine whip',
        'type': 'grass',
        'base-damage': '7',
        'energy': '6',
        'move-duration-seg': '0.6'
      },
      {
        'name': 'tackle',
        'type': 'normal',
        'base-damage': '5',
        'energy': '5',
        'move-duration-seg': '0.5'
      }]
    };
    const result = [8.4, 5];
    expect(calculateStab(data['quick-move'], 'grass')).toEqual(result);
  })
});

describe("calculateDps", () => {
  it("is a function", () => {
    expect(typeof calculateDps).toBe("function");
  })
  it("calculateDps", () => {
    const data = {
      'quick-move': [{
        'name': 'vine whip',
        'type': 'grass',
        'base-damage': '7',
        'energy': '6',
        'move-duration-seg': '0.6'
      },
      {
        'name': 'tackle',
        'type': 'normal',
        'base-damage': '5',
        'energy': '5',
        'move-duration-seg': '0.5'
      } ]
    };
    const result = [14, 10];
    expect(calculateDps(data['quick-move'], 'grass')).toEqual(result);
  })
});

describe("calculateEps", () => {
  it("is a function", () => {
    expect(typeof calculateEps).toBe("function");
  });
  it('CALCULATE EPS DAMAGE', () => {
    const data = {
      'quick-move': [{
        'name': 'vine whip',
        'type': 'grass',
        'base-damage': '7',
        'energy': '6',
        'move-duration-seg': '0.6'
      },
      {
        'name': 'tackle',
        'type': 'normal',
        'base-damage': '5',
        'energy': '5',
        'move-duration-seg': '0.5'
      } ]
    };
    const result = [10, 10];
    expect(calculateEps(data['quick-move'], 'grass')).toEqual(result);
  })
})