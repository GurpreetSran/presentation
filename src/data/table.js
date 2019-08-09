/*
// Last 7 days 
{
            "node": {
              "id": "98458d2e-b39f-11e9-b26a-caceaf2bf014",
              "headline": "Richard Holbrooke and the End of the American Century by George Packer review — the man who wanted to be Kissinger",
              uniqueVisitors": 2064
            },
            {
            "node": {
              "id": "dbd8c4ea-b95b-11e9-9ed1-57176c9fe03e",
              "headline": "Frank Lampard puts faith in bouncy castles and an iron will at Chelsea",
               "total": 203
            },
          {
            "node": {
              "id": "e299c2a4-b5f3-11e9-b26a-caceaf2bf014",
              "headline": "Why Adidas and Nike will not play ball with Mike Ashley",
              "total": 33725
            },
            
          {
            "node": {
              "id": "64de6180-b517-11e9-b26a-caceaf2bf014",
              "headline": "Win a break for two in Istanbul, with the five-star Ajwa Hotel Sultanahmet and Pegasus Airlines",
                  "total": 3243
            },
            
          {
            "node": {
              "id": "20940d96-b38b-11e9-976e-8c6a49598911",
              "headline": "Infamy by Jerry Toner review — the gory that was Rome",
              "total": 1933
            },
          }
        ]
      }
    }
  }
}


*/

export const data = [
  {
    id: '98458d2e-b39f-11e9-b26a-caceaf2bf014',
    title: 'Richard Holbrooke and the End of the American Century',
    uniques: '2064'
  },
  {
    id: 'dbd8c4ea-b95b-11e9-9ed1-57176c9fe03e',
    title:
      'Frank Lampard puts faith in bouncy castles and an iron will at Chelsea',
    uniques: '203'
  },
  {
    id: 'e299c2a4-b5f3-11e9-b26a-caceaf2bf014',
    title: 'Why Adidas and Nike will not play ball with Mike Ashley',
    uniques: '33725'
  },
  {
    id: '64de6180-b517-11e9-b26a-caceaf2bf014',
    title:
      'Win a break for two in Istanbul, with the five-star Ajwa Hotel Sultanahmet and Pegasus Airlines',
    uniques: '3243'
  },
  {
    id: '20940d96-b38b-11e9-976e-8c6a49598911',
    title: 'Infamy by Jerry Toner review — the gory that was Rome',
    uniques: '1933'
  }
];

export const columns = [
  {
    name: 'Headline',
    selector: 'title',
    sortable: false,
    grow: 10
  },
  {
    name: 'Uniques',
    selector: 'uniques',
    sortable: true,
    right: true,
    grow: 1
  }
];

/*
   Today

 
   {
  "data": {
    "report": {
      "articles": {
        "edges": [
          {
            "node": {
              "id": "dbd8c4ea-b95b-11e9-9ed1-57176c9fe03e",
              "headline": "Frank Lampard puts faith in bouncy castles and an iron will at Chelsea"
            },
            "metrics": {
              "uniqueVisitors": {
                "total": 203
              },
              "dwellTimeIndex": {
                "total": 200
              }
            }
          },
          {
            "node": {
              "id": "25359260-b94f-11e9-9ed1-57176c9fe03e",
              "headline": "Muddy Waters criticises Burford Capital: the report unspun"
            },
            "metrics": {
              "uniqueVisitors": {
                "total": 195
              },
              "dwellTimeIndex": {
                "total": 177
              }
            }
          },
          {
            "node": {
              "id": "2a528a58-b95b-11e9-bfc4-f5ff1f47234e",
              "headline": "Conman Mark Acklom: Kid Con and his lifetime of lying"
            },
            "metrics": {
              "uniqueVisitors": {
                "total": 606
              },
              "dwellTimeIndex": {
                "total": 177
              }
            }
          },
          {
            "node": {
              "id": "ef8211fa-b964-11e9-9ed1-57176c9fe03e",
              "headline": "Ahir Shah review — Lack of ideas allows for more fun"
            },
            "metrics": {
              "uniqueVisitors": {
                "total": 30
              },
              "dwellTimeIndex": {
                "total": 175
              }
            }
          },
          {
            "node": {
              "id": "dd76ff42-b93d-11e9-bfc4-f5ff1f47234e",
              "headline": "Will Scots ever escape world of woe?"
            },
            "metrics": {
              "uniqueVisitors": {
                "total": 11
              },
              "dwellTimeIndex": {
                "total": 175
              }
            }
          }
        ]
      }
    }
  }
}

*/
