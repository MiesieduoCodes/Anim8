const netflixMovies = [
  {
    title: "Next Gen",
    rating: "6.6",
    backgroundImage: "https://infokids.com.au/wp-content/uploads/2021/06/6CB9998E-614B-4087-A64D-1790F016293E.jpeg",
    story: "A friendship between a rebellious girl and a top-secret robot develops as they fight a villainous tech mogul.",
    downloadLink: "https://download946.mediafire.com/s66okz7n25egGEyXSnrnvlrVOsjjivNwAE6IRrdHkBdwHID9iMhV9uD_VVmrYqGpcXOMMz9GZpcYbSdhxnJ-_Bt30BixC1rTj-ypDdXhUFKniJTkH9-h9Ptdx0mDUbxE8MR3im1FudOiepMEfwcIu2RhRYpCRpUwYL9px-WFHNngyA/q7b3tp9rlydg95l/Anim8.com.ng+Next+Gen.mp4"
  },
  {
    title: "White Fang",
    rating: "6.7",
    backgroundImage: "https://www.alternateending.com/wp-content/uploads/2019/12/p9b3SRVUWfxlBEOx5hH9saoswg1.jpg",
    story: "A young boy and his loyal wolfdog must face the dangers of the Alaskan wilderness to survive.",
    downloadLink: "https://download1349.mediafire.com/qvav3t11kiigDygxghR8Y5Pkyk2zGY7vvywQKYUnoRw4IiBdnxJaaQfFMtW-hL9rhHG3hxMfHVJCtkFW3amgg2IRTO8B6eiLckeuepLwYb6Jp0u4H9WDnxRBRJXDGjkqASfE7ozwlTUzglIFYnEqGfqX8emjzM7OwT20iuaMx8oFHA/kcffxe8zqlf8835/Anim8.com.ng+White+Fang.mp4"
  },
  {
    title: "Klaus",
    rating: "8.2",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMSqk-z9wwV4H_xlBycxUfAcNiphxIuy_2Q&s",
    story: "A young postman forms an unlikely friendship with a reclusive toymaker, changing the fate of their town.",
    downloadLink: "https://download1979.mediafire.com/5d2y9mz4d8sgPYZo7OtKnWC__6qao_k41q_ni_2bIq74avpBE13Af4nGsSri1RII_uAYiarDLI9VcgBsut5Wl40DqBRPuH1W1pM_OrzkWHEOXQ1NxDBVeucZKmYo9eunt0ZfvnjqX6zG_qTSn016B6QsUwQGcEhrWjerARGgsBhYblM/jk2ku1nw65da2ei/Klaus_480P.mp4"
  },
  {
    title: "I Lost My Body",
    rating: "7.6",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0tl3TzHZOSGf3szX1z0kOiAfzmsBI9AgVA&s",
    story: "A severed hand embarks on a journey across Paris to reunite with its owner.",
    downloadLink: "https://download1590.mediafire.com/i59f2aggkvggvJNGTS4lKe1e7lT_C3dqRtqSZbDjfH0o0hEL8OMA_ZYkDa6W2HiQ1H2tliDyUFFjfpU6D2rIfUXEIAAkem96nNKmYZPQzII8mL36yLvb3D2SBIY0n2Fl5bkI8zEHZszpjSVRTduzYKbwBOfQQD4aTSGBi_kqYK8hTQ/vmn3spno40v6kuy/Anim8.com.ng+I+Lost+My+Body+.mp4"
  },
  {
    title: "The Willoughbys",
    rating: "6.4",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnB4qrRZ-0DuhPt80lV74cPUa9FAr7j3iMw&s",
    story: "Four children invent a dangerous plan to send their neglectful parents on vacation so they can experience true family love.",
    downloadLink: "https://download1580.mediafire.com/7x0fz6pkyvagcZLFQ7QCIda1Uj8X3_EsV0mB85NJLB9F1_P9ogm4BUAX-HpQXLpPzvhf18V8PfxX2t-vHVt4w8byhtBFnsCTvbUTPfUXV7miQVlHcevLobrIUEM_O0r6yB0EHyp0ifU4veeXszHq4sEE-45J6Qcr6DIwk26Tv0sJQQ/db2ubk4xhsyp628/Anim8.com.ng+The+Willoughbys+.mp4"
  },
  {
    title: "Over the Moon",
    rating: "6.3",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTJ_6bLdx2VXYvOb61bc9F0fVxXrQwYsRBA&s",
    story: "In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.",
    downloadLink: "https://download1501.mediafire.com/d80nl0b2d9bgJ6EJPfsRjec9-44TkwdmSubCh7zt10DTrJl8zKMEAmrqxFpPrRYdXv66tNBrh3ymUQcooNsCGhTjRYrEjuFqo6yiE1VqH6E3brftTpnPrQhIU8C6z6YPVBa40bE_G6rSG-k1pOmdEkmZdjvQ2H-GnwRmMCGgXjOf5w/d61wvxiq2tg1dcq/Anim8.com.ng+Over+the+Moon+.mp4"
  },
  {
    title: "A Shaun the Sheep Movie: Farmageddon",
    rating: "6.8",
    backgroundImage: "https://variety.com/wp-content/uploads/2019/09/shaun-sheep-2.jpg",
    story: "Shaun and his flock try to help a friendly alien named Lu-La escape government agents and return home.",
    downloadLink: "https://download938.mediafire.com/64ejak1orolgIqBVgMWkdCKEeU-43aQEH90kmEuX98q-3SUVK0ay_WaNALuw87k77rUE-cdZqAAOEMcfQjGjW6BEyxjdSiiSEqHxyiF2Zy_tg2WMTzn5opO32g-AmCc38H-eT1a7nkFyzL7KvuhgNCj5rS-3j8k7AAdiDZ0Lqa5cDw/prrssv2x5dne7sw/Anim8.com.ng+A+Shaun+the+Sheep+Movie+Farmageddon+.mp4"
  },
  {
    title: "The Mitchells vs. the Machines",
    rating: "7.7",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0dD50n8KVP_oaKn3d6bwASuDkwF3cyBcPw&s",
    story: "A quirky family fights to save the world from a robot apocalypse during a road trip across the country.",
    downloadLink: "https://example.com/download/mitchells-vs-machines"
  },

  {
    title: "The Loud House Movie",
    rating: "6.0",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGwFQr580jAl4PqpaccjFppZffaQbbgAPoA&s",
    story: "The Loud family visits Scotland where they discover they have royal blood, and embark on a mission to save the throne.",
    downloadLink: "https://download1586.mediafire.com/np3o8ovqludgQj_S-48FIaVgIpf33cj8VvEcl5qPDw5HF7cwWFqu5h53QChgIzxKHzty-EM0utc3DsnpVN4eFxdzMt2dGhqD1JyrmvH3ZiZRT8Mg7tWkQtmb41n6Iah0eCwzy22fs7wSn98sns5KyfW6omXiqHjCXkztMKfQ79bKQQ/pzqdtid36yk9kbs/Anim8.com.ng+The+Loud+House+Movie.mp4"
  },
  {
    title: "Vivo",
    rating: "6.8",
    backgroundImage: "https://wallpapercat.com/w/full/4/7/2/1994153-2048x1152-desktop-hd-vivo-movie-wallpaper.jpg",
    story: "A kinkajou must deliver a love song from his late owner to the famous singer who inspired him.",
    downloadLink: "https://download1322.mediafire.com/3x4vbomc0argfNonUEGYtIRomYzThqfku0djWyAu3QtSK90aWHsgNPPBuX96gnoXKjxVIOhVAeFax-034eud0RnXW5g1SvgVZHoZCp4kLkYpDgicv5xm7HxC-15H_pWTV-eKjTP8s_vxqWq8ZFP7c_TNKugBC_irMEeEcNddJPdmqQ/145urfse98mnrpz/Anim8.com.ng+Vivo+.mp4"
  },
//   {
//     title: "The Addams Family",
//     rating: "5.8",
//     backgroundImage: "https://i.guim.co.uk/img/media/5d671028827e5034d86ae13555bfcad45a4063e1/888_584_2803_1683/master/2803.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=07d8dcff2a5fe8283c19f278cd468f8c",
//     story: "The Addams family faces new challenges when they move to a suburban neighborhood, where their unusual nature stands out among the locals.",
//     downloadLink: "https://example.com/download/addams-family-1"
// },
//   {
//     title: "The Addams Family 2",
//     rating: "5.3",
//     backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafchWSZjxTVZopKhI1HZVPT7Jf45o8Swneg&s",
//     story: "The Addams family embarks on a road trip that reveals their quirkiest secrets and brings them closer than ever.",
//     downloadLink: "https://example.com/download/addams-family-2"
//   },
  {
    title: "Back to the Outback",
    rating: "6.6",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvO7VjNMI5xCDvH_BMc4VGeLPsan8sBaY9wQ&s",
    story: "A group of Australia’s most dangerous animals embarks on an adventure to escape the zoo and return to the wild.",
    downloadLink: "https://download947.mediafire.com/x7qr8ssd40pgJYMmdVe2xX2CKQIcW6l1KW5geVPmFvI47lnNAfLMgEj_zPCoVPr7b9q8Xb4mSmoG_uBq_4pNpujjYQYV607ATkHmMjczUizFNy4PYO-auSdBSoFZHlbfciDk_KMG728f4Xrq9_7xBHeG5ARANsvVVaVtNnXDyUqzlA/itfledktbxklean/Anim8.com.ng+Back+to+the+Outback+.mp4"
  },
  {
    title: "The Sea Beast",
    rating: "7.1",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWzDaoEVtiShqundLRRzA3kklyBuEM6uiHQ&s",
    story: "A young girl stows away on a legendary sea monster hunter’s ship, and together they challenge the beasts they hunt.",
    downloadLink: "https://download1321.mediafire.com/sj8p5sl94vfgzK0q_5fpDjqgemWqkZ8nP0hi6fGcxEIzUi0GMzWcerQQC1SVqSZgZ2lbHH_Ih2HhNtSslqolFNv13mNBjG7G_GJfl2cBQj3Au3YrV5eLqolhbgyNZpHtJSt-UC2cBSb0sr_6czZnC3xsjFdZCdIsNaKaWaKwWjdiZQ/vw5d49pqt8jtu2c/Anim8.com.ng+The+Sea+Beast+.mp4"
  },
  {
    title: "Guillermo del Toro's Pinocchio",
    rating: "8.0",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOF0NtL8fLkAi7tPW1f3Zi1aQKW2zbVJtKw&s",
    story: "Guillermo del Toro's reimagining of the classic tale of Pinocchio, exploring themes of life, death, and the pursuit of happiness.",
    downloadLink: "https://example.com/download/pinocchio-2022"
  },
  {
    title: "Entergalactic",
    rating: "7.0",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo49GM-yIYgmHj1dXEauANxa143IUnuFrb1A&s",
    story: "A young man’s journey through love, art, and self-discovery as he navigates relationships in the heart of New York City.",
    downloadLink: "https://download1589.mediafire.com/4wlh9b4904fgPI03cEGgwqPM6_tNitQUhVKjkUPvSaBmOTV1V9_ULbyaYoM0JbCMYMP4ErpWP9Ddz5kkn3ccwWswzjc3kqmLRSybJvHGzKcdf_VL9zUrF4EAAsQDSoHKtfwGQs_ia5x6CDxoIHP8_EZE_rHzbdc8Nghm5p6IFBDT6A/5xxedone1cc8iwe/Anim8.com.ng+Entergalactic+.mp4"
  },
  {
    title: "The Magician's Elephant",
    rating: "6.9",
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VSzgAljhAzjZ7mPEV-cksw2hjM8syesf3g&s",
    story: "A young boy embarks on a quest to find a magical elephant, hoping to reunite with his lost sister.",
    downloadLink: "https://download1500.mediafire.com/xgelen4ekwegO9Iy0uUym7oCMKAu701wLxOuQXaQ4NchUThuBx3BezapJYEuT-W8hy-y8xQ9tbESgOc9QS-3tizE4CmbqoOAWLkBeaNTgJYwdVUZF5i10LAK6T7msOVCr_DSPVXEAXH_ySp1iyKLdf4JgsacnH5mOmoiEm8sPQIzyQ/iorm785cffvpu0e/Anim8.com.ng+The+Magician%5C%27s+Elephant+.mp4"
  },
  {
    title: "Nimona",
    rating: "7.5",
    backgroundImage: "https://variety.com/wp-content/uploads/2023/06/Collage-Maker-15-Jun-2023-08-06-PM-4070.jpg?w=1000&h=563&crop=1",
    story: "A shapeshifter and a villainous scientist work together to wreak havoc, exploring themes of identity and friendship.",
    downloadLink: "https://example.com/download/nimona"
  }
];

export default netflixMovies;
