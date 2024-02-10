import { Types } from "./types";

export const COMPONENTS: Types[] = [
  {
    id: 1,
    title: "Compressor",
    image: "/compressor_image.jpg",
    caption: "The heart of the refrigeration system.",
    date: "2024-02-10",
    minutesToRead: 5,
    href: "/docs/compresseur",
    author: "RefrigerationExpert",
    nbViews: 100,
    nbComments: 10,
    slug: "compressor",
    description:
      "The compressor is a vital component of a refrigeration system. It is responsible for compressing the refrigerant gas, raising its pressure and temperature. This high-pressure, high-temperature gas then flows to the condenser for heat exchange.",
  },
  {
    id: 2,
    title: "Thermostatic Expansion Valve",
    image: "/expansion_valve_image.jpg",
    caption: "Controls the flow of refrigerant into the evaporator.",

    href: "/docs/detendeur",
    date: "2024-02-10",
    minutesToRead: 5,
    author: "RefrigerationExpert",
    nbViews: 100,
    nbComments: 10,
    slug: "expansion-valve",
    description:
      "The thermostatic expansion valve (TXV) regulates the flow of refrigerant into the evaporator coil. It works by sensing the temperature and pressure of the refrigerant leaving the evaporator and adjusts the valve opening accordingly. This precise control ensures optimal performance and efficiency of the refrigeration system.",
  },
  {
    id: 3,
    title: "Condenser",
    image: "/condenser_image.jpg",
    caption: "Facilitates heat transfer to the surrounding environment.",

    href: "/docs/condenseur",

    date: "2024-02-10",
    minutesToRead: 5,
    author: "RefrigerationExpert",
    nbViews: 100,
    nbComments: 10,
    slug: "condenser",
    description:
      "The condenser is where the high-pressure, high-temperature refrigerant gas releases heat to the surrounding environment and condenses into a liquid. This heat exchange process causes the refrigerant to undergo a phase change from gas to liquid. The condensed liquid refrigerant then flows to the expansion valve to continue the refrigeration cycle.",
  },
  {
    id: 4,
    title: "Evaporator",
    image: "/evaporator_image.jpg",
    caption: "Absorbs heat from the desired space.",

    href: "/docs/evaporateur",
    date: "2024-02-10",
    minutesToRead: 5,
    author: "RefrigerationExpert",
    nbViews: 100,
    nbComments: 10,
    slug: "evaporator",
    description:
      "The evaporator is responsible for absorbing heat from the space to be cooled. As the liquid refrigerant enters the evaporator coil and evaporates due to the low pressure maintained by the expansion valve, it absorbs heat from the surrounding air or substance. This results in the cooling effect desired in refrigeration systems.",
  },
  {
    id: 5,
    title: "Anti-Liquid Bottle",
    image: "/anti_liquid_bottle_image.jpg",
    caption: "Prevents liquid refrigerant from entering the compressor.",
    href: "/docs/anti-coup-de-liquide",
    date: "2024-02-10",
    minutesToRead: 5,
    author: "RefrigerationExpert",
    nbViews: 100,
    nbComments: 10,
    slug: "anti-liquid-bottle",
    description:
      "The anti-liquid bottle, also known as a suction accumulator, is a safety device installed in the suction line of a refrigeration system. Its primary function is to prevent liquid refrigerant from entering the compressor. Liquid refrigerant in the compressor can cause damage and reduce the efficiency of the system. The anti-liquid bottle collects any liquid refrigerant that may be present in the suction line and ensures only vapor enters the compressor.",
  },
  {
    id: 6,
    title: "Liquid Bottle",
    image: "/liquid_bottle_image.jpg",
    caption: "Ensures only liquid refrigerant enters the expansion valve.",

    href: "/docs/bouteille-liquide",
    date: "2024-02-10",
    minutesToRead: 5,
    author: "RefrigerationExpert",
    nbViews: 100,
    nbComments: 10,
    slug: "liquid-bottle",
    description:
      "The liquid bottle, also known as a liquid receiver, is a reservoir located in the liquid line of a refrigeration system. Its primary purpose is to store and regulate the flow of liquid refrigerant to the expansion valve. By ensuring a steady supply of liquid refrigerant, the liquid bottle helps maintain optimal performance and efficiency of the system.",
  },
];
