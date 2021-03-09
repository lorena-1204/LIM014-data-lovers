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

  // it("Order Name", () => {
  //   const data = [{
  //     name: 'abra',
  //   },
  //   {
  //     name: 'zubat',
  //   }]
  //   const name = "abra";
  //   const result = [{
  //     name: 'abra',
  //   }]

  //   expect(orderByName(data, name)).toEqual(result);
  // });
});

describe("orderBySpawn", () => {
  it("is a function", () => {
    expect(typeof orderBySpawn).toBe("function");
  });
});

describe("orderByPc", () => {
  it("is a function", () => {
    expect(typeof orderByPc).toBe("function");
  })
})

describe("orderByHp", () => {
  it("is a function", () => {
    expect(typeof orderByHp).toBe("function");
  })
})


describe("pokemonOrder", () =>{
  it("is a object", () =>{
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

  it("ascending-max Cp", ()=>{
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
    } ];
    const result = [{
      stats: {
        'max-cp': 10,
      } },
      {
        stats: {
          'max-cp': 20,
        }  },
      {
        stats: {
          'max-cp': 30,
        }} ];

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

  it("ascendingspawn", ()=>{
    const data = [{
      'spawn-chance': 3,
    },
    {
      'spawn-chance': 2,
    },
    {
      'spawn-chance': 5,
    } ];
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
  
})

describe("calculateDps", () => {
  it("is a function", () => {
    expect(typeof calculateDps).toBe("function");
  })
})

describe("calculateEps", () => {
  it("is a function", () => {
    expect(typeof calculateEps).toBe("function");
  });
});