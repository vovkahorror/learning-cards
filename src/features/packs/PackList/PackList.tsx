import React from 'react'

import { Table } from 'rsuite'

const { Column, HeaderCell, Cell } = Table

export const PackList = () => {
  const data = [
    {
      id: 1,
      name: 'Samantha Von',
      firstName: 'Samantha',
      lastName: 'Von',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/765.jpg',
      city: 'Parisianburgh',
      street: 'Haag Stream',
      postcode: '91143-8211',
      email: 'Beulah31@hotmail.com',
      phone: '(661) 556-0809 x6992',
      gender: 'female',
      age: 23,
      stars: 6376,
      followers: 1479,
      rating: 3,
      progress: 11,
      amount: '39208.03',
    },
    {
      id: 2,
      name: 'Guido Williamson',
      firstName: 'Guido',
      lastName: 'Williamson',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/816.jpg',
      city: 'Greenstead',
      street: 'Braeden Creek',
      postcode: '89003-0141',
      email: 'Ivory.Hermann@gmail.com',
      phone: '833.295.7211',
      gender: 'male',
      age: 20,
      stars: 110,
      followers: 2154,
      rating: 4,
      progress: 78,
      amount: '6538.29',
    },
    {
      id: 3,
      name: 'Florencio Schneider Sr.',
      firstName: 'Florencio',
      lastName: 'Schneider',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg',
      city: 'South Breanna',
      street: 'Emiliano Estates',
      postcode: '26123',
      email: 'Luna.Swift8@gmail.com',
      phone: '(469) 263-3614 x670',
      gender: 'female',
      age: 28,
      stars: 5801,
      followers: 1715,
      rating: 2,
      progress: 25,
      amount: '49086.12',
    },
    {
      id: 4,
      name: 'Dr. Jamie Koepp',
      firstName: 'Jamie',
      lastName: 'Koepp',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/665.jpg',
      city: 'North Abbigailmouth',
      street: 'West Gardens',
      postcode: '72601',
      email: 'Carrie53@gmail.com',
      phone: '1-626-656-6168 x768',
      gender: 'male',
      age: 43,
      stars: 8530,
      followers: 3887,
      rating: 3,
      progress: 26,
      amount: '3804.49',
    },
    {
      id: 5,
      name: 'Roderick Harvey',
      firstName: 'Roderick',
      lastName: 'Harvey',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/664.jpg',
      city: 'Naderport',
      street: 'Stamm Creek',
      postcode: '42184-3972',
      email: 'Kody_Wolff86@hotmail.com',
      phone: '518.737.8851 x738',
      gender: 'male',
      age: 22,
      stars: 4802,
      followers: 7872,
      rating: 3,
      progress: 59,
      amount: '63045.42',
    },
    {
      id: 6,
      name: 'Earl Marks',
      firstName: 'Earl',
      lastName: 'Marks',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1008.jpg',
      city: 'East Rustyfort',
      street: 'Conroy Mount',
      postcode: '97386-1543',
      email: 'Benedict.Rippin@yahoo.com',
      phone: '(514) 968-0873 x579',
      gender: 'male',
      age: 19,
      stars: 613,
      followers: 7963,
      rating: 3,
      progress: 70,
      amount: '23870.84',
    },
    {
      id: 7,
      name: "Corine O'Reilly",
      firstName: 'Corine',
      lastName: "O'Reilly",
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1037.jpg',
      city: 'Littleville',
      street: 'Vicente Flat',
      postcode: '07154',
      email: 'Connor_Jerde87@hotmail.com',
      phone: '1-648-644-4233 x69749',
      gender: 'female',
      age: 40,
      stars: 7085,
      followers: 433,
      rating: 3,
      progress: 56,
      amount: '23551.29',
    },
    {
      id: 8,
      name: 'Tiara Dooley',
      firstName: 'Tiara',
      lastName: 'Dooley',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/809.jpg',
      city: 'Irondequoit',
      street: 'Cody Burg',
      postcode: '54951',
      email: 'Seamus_Aufderhar32@yahoo.com',
      phone: '717.831.3232 x09308',
      gender: 'male',
      age: 20,
      stars: 1511,
      followers: 4649,
      rating: 2,
      progress: 96,
      amount: '35198.42',
    },
    {
      id: 9,
      name: 'Merle Kuhlman',
      firstName: 'Merle',
      lastName: 'Kuhlman',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/824.jpg',
      city: 'Sioux Falls',
      street: 'Hermann Loaf',
      postcode: '95833-9177',
      email: 'Kelley83@gmail.com',
      phone: '(543) 442-2230 x535',
      gender: 'male',
      age: 38,
      stars: 8374,
      followers: 5781,
      rating: 3,
      progress: 32,
      amount: '63195.21',
    },
    {
      id: 10,
      name: 'Rosamond Kohler',
      firstName: 'Rosamond',
      lastName: 'Kohler',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/331.jpg',
      city: 'Port Oleta',
      street: 'Dudley Cliff',
      postcode: '63250-1752',
      email: 'Terence82@yahoo.com',
      phone: '371-885-6699 x2470',
      gender: 'male',
      age: 45,
      stars: 5073,
      followers: 1206,
      rating: 3,
      progress: 45,
      amount: '71531.63',
    },
    {
      id: 11,
      name: 'Mrs. Rudolph Mills',
      firstName: 'Rudolph',
      lastName: 'Mills',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1238.jpg',
      city: 'South Albertha',
      street: 'Ebert Ranch',
      postcode: '37154-7875',
      email: 'Shaylee0@yahoo.com',
      phone: '(667) 201-4804 x2709',
      gender: 'male',
      age: 36,
      stars: 9933,
      followers: 7932,
      rating: 4,
      progress: 86,
      amount: '55069.67',
    },
    {
      id: 12,
      name: 'Dr. Jamaal Padberg',
      firstName: 'Jamaal',
      lastName: 'Padberg',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/282.jpg',
      city: 'Port Una',
      street: 'Bruen Trafficway',
      postcode: '10621-1862',
      email: 'Joanne62@gmail.com',
      phone: '730.386.2415 x4664',
      gender: 'female',
      age: 38,
      stars: 5539,
      followers: 1437,
      rating: 3,
      progress: 24,
      amount: '45422.03',
    },
    {
      id: 13,
      name: 'Ms. Armando Tillman',
      firstName: 'Armando',
      lastName: 'Tillman',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/126.jpg',
      city: 'Ferryville',
      street: 'Hintz Parkways',
      postcode: '00748',
      email: 'Dorris24@hotmail.com',
      phone: '(577) 666-1473 x40070',
      gender: 'male',
      age: 22,
      stars: 8800,
      followers: 3374,
      rating: 4,
      progress: 86,
      amount: '30646.18',
    },
    {
      id: 14,
      name: 'Manuela Macejkovic II',
      firstName: 'Manuela',
      lastName: 'Macejkovic',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/713.jpg',
      city: 'New Fred',
      street: 'Tillman Causeway',
      postcode: '32460',
      email: 'Billie_Lind74@hotmail.com',
      phone: '1-658-790-9660 x125',
      gender: 'female',
      age: 39,
      stars: 9423,
      followers: 259,
      rating: 4,
      progress: 95,
      amount: '28196.93',
    },
    {
      id: 15,
      name: 'Edison Homenick',
      firstName: 'Edison',
      lastName: 'Homenick',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1049.jpg',
      city: 'Mckennacester',
      street: 'Glover Divide',
      postcode: '15041-3597',
      email: 'Ted_Paucek60@gmail.com',
      phone: '858.209.9838 x4706',
      gender: 'female',
      age: 37,
      stars: 9628,
      followers: 218,
      rating: 3,
      progress: 12,
      amount: '5531.67',
    },
    {
      id: 16,
      name: 'Dr. Valentina Wilkinson',
      firstName: 'Valentina',
      lastName: 'Wilkinson',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/704.jpg',
      city: 'Port Willaview',
      street: 'Cummings Mills',
      postcode: '13259-9657',
      email: 'Justen.Mosciski@hotmail.com',
      phone: '(707) 858-0191',
      gender: 'female',
      age: 39,
      stars: 6840,
      followers: 9919,
      rating: 4,
      progress: 94,
      amount: '65910.87',
    },
    {
      id: 17,
      name: 'Saul Wunsch',
      firstName: 'Saul',
      lastName: 'Wunsch',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/284.jpg',
      city: 'Irving',
      street: 'Emard Bypass',
      postcode: '05719',
      email: 'Erna80@gmail.com',
      phone: '(382) 272-2024 x3838',
      gender: 'female',
      age: 44,
      stars: 3883,
      followers: 6175,
      rating: 2,
      progress: 20,
      amount: '82364.88',
    },
    {
      id: 18,
      name: 'Adonis Hand',
      firstName: 'Adonis',
      lastName: 'Hand',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/976.jpg',
      city: 'Thornton',
      street: 'Avery Forks',
      postcode: '03874',
      email: 'Yessenia28@hotmail.com',
      phone: '462.392.4558 x344',
      gender: 'male',
      age: 28,
      stars: 7450,
      followers: 5460,
      rating: 4,
      progress: 19,
      amount: '8345.24',
    },
    {
      id: 19,
      name: 'Katheryn Okuneva',
      firstName: 'Katheryn',
      lastName: 'Okuneva',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/544.jpg',
      city: 'Wilkinsonport',
      street: 'Turner Rue',
      postcode: '19131-3874',
      email: 'Norene0@hotmail.com',
      phone: '938.938.7469',
      gender: 'female',
      age: 27,
      stars: 8168,
      followers: 1469,
      rating: 4,
      progress: 14,
      amount: '29806.40',
    },
    {
      id: 20,
      name: 'Daphney Kreiger',
      firstName: 'Daphney',
      lastName: 'Kreiger',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/819.jpg',
      city: 'West Moshefurt',
      street: 'Makayla Points',
      postcode: '85084',
      email: 'Nicole70@yahoo.com',
      phone: '1-277-382-6637 x8095',
      gender: 'female',
      age: 24,
      stars: 3258,
      followers: 7487,
      rating: 4,
      progress: 92,
      amount: '19170.19',
    },
  ]

  return (
    <div>
      <Table height={400} data={data}>
        <Column width={60} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={150}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={150}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey="gender" />
        </Column>

        <Column width={100}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column width={150}>
          <HeaderCell>Postcode</HeaderCell>
          <Cell dataKey="postcode" />
        </Column>

        <Column width={300}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
      </Table>
    </div>
  )
}
