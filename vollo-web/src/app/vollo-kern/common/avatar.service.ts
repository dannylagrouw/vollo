import { Injectable } from '@angular/core';

export function mulberry32(a: number) {
  return function() {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function mv(list1: any, list2: any = list1) {
  return {
    MAN: list1,
    VROUW: list2 || list1,
    OVERIG: [...list1, ...list2]
  };
}

const topTypes = mv(
  [
    'NoHair',
    'Hat',
    'Turban',
    'LongHairBun',
    'ShortHairDreads01',
    'ShortHairDreads02',
    'ShortHairFrizzle',
    'ShortHairShaggyMullet',
    'ShortHairShortCurly',
    'ShortHairShortFlat',
    'ShortHairShortRound',
    'ShortHairShortWaved',
    'ShortHairSides',
    'ShortHairTheCaesar',
    'ShortHairTheCaesarSidePart'
  ],
  [
    'Hijab',
    'LongHairBigHair',
    'LongHairBob',
    'LongHairCurly',
    'LongHairCurvy',
    'LongHairDreads',
    'LongHairFrida',
    'LongHairFro',
    'LongHairFroBand',
    'LongHairNotTooLong',
    'LongHairShavedSides',
    'LongHairMiaWallace',
    'LongHairStraight',
    'LongHairStraight2',
    'LongHairStraightStrand'
  ]
);

const accessoriesTypes = mv(
  ['Blank', 'Prescription01', 'Prescription02', 'Round'],
  ['Blank', 'Prescription01', 'Prescription02', 'Round']
);

const hairColors = mv(
  [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'PastelPink',
    'Platinum',
    'Red',
    'SilverGray'
  ],
  [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'PastelPink',
    'Platinum',
    'Red',
    'SilverGray'
  ]
);

const clotheTypes = mv([
  'BlazerShirt',
  'BlazerSweater',
  'CollarSweater',
  'GraphicShirt',
  'Hoodie',
  'Overall',
  'ShirtCrewNeck',
  'ShirtScoopNeck',
  'ShirtVNeck'
]);

const clotheColors = mv([
  'Black',
  'Blue01',
  'Blue02',
  'Blue03',
  'Gray01',
  'Gray02',
  'Heather',
  'PastelBlue',
  'PastelGreen',
  'PastelOrange',
  'PastelRed',
  'PastelYellow',
  'Pink',
  'Red',
  'White'
]);

const eyeTypes = mv(
  [
    'Close',
    'Cry',
    'Default',
    'Dizzy',
    'EyeRoll',
    'Happy',
    'Side',
    'Squint',
    'Surprised',
    'Wink',
    'WinkWacky'
  ],
  [
    'Close',
    'Cry',
    'Default',
    'Dizzy',
    'EyeRoll',
    'Happy',
    'Hearts',
    'Side',
    'Squint',
    'Surprised',
    'Wink',
    'WinkWacky'
  ]
);

const eyebrowTypes = mv([
  'Angry',
  'AngryNatural',
  'Default',
  'DefaultNatural',
  'FlatNatural',
  'RaisedExcited',
  'RaisedExcitedNatural',
  'SadConcerned',
  'SadConcernedNatural',
  'UnibrowNatural',
  'UpDown',
  'UpDownNatural'
]);

const mouthTypes = mv([
  'Concerned',
  'Default',
  'Disbelief',
  'Eating',
  'Grimace',
  'Sad',
  'Serious',
  'Smile',
  'Tongue'
]);

const skinColors = mv(['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black']);

const attrLists = {
  topType: topTypes,
  accessoriesType: accessoriesTypes,
  hairColor: hairColors,
  clotheType: clotheTypes,
  clotheColor: clotheColors,
  eyeType: eyeTypes,
  eyebrowType: eyebrowTypes,
  mouthType: mouthTypes,
  skinColor: skinColors
};

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  generate(seed: any, geslacht: 'MAN' | 'VROUW' | 'OVERIG' = 'MAN') {
    const random = mulberry32(seed);
    const _geslacht = geslacht === 'OVERIG' ? 'MAN' : geslacht;

    function randomElem(list: any[]) {
      const r = random();
      const i = Math.floor(r * list.length);
      return list[i];
    }

    function attrs(attrType: string) {
      return randomElem(attrLists[attrType][_geslacht]);
    }

    const params = Object.keys(attrLists)
      .map(key => `&${key}=${attrs(key)}`)
      .join('');

    return `http://avataaars.io/?avatarStyle=Circle${params}`;
  }
}
