const initialTrailersData = [
    {
      id: 1,
      title: 'Scissor Seven - Season 3',
      videoUrl: 'https://www.dailymotion.com/video/x83zei2',
      synopsis: 'Follow the hilarious adventures of a wannabe assassin with the heart of a hero as he navigates a world of quirky characters.',
    },
    
    {
      id: 2,
      title: 'Your Lie in April',
      videoUrl: 'https://assets.ign.com/videos/zencoder/2024/09/12/1920/4fa5c547-4e14-42a8-9ca9-4e3417d3c243-1726167313.mp4',
      synopsis: 'The sequel explores the evolving emotions of Riley as she faces new challenges in her teenage years.',
    },
    
    {
      id: 3,
      title: 'The Wild Robot',
      videoUrl: 'https://assets.ign.com/videos/zencoder/2024/03/05/1920/46fe1a9f-3e24-4b26-a46d-191cf795f93f-1709657244.mp4',
      synopsis: 'An epic tale of a robot stranded on a wild island, learning to survive and connect with nature.',
    },
    
    {
      id: 4,
      title: 'Transformers One',
      videoUrl: 'https://assets.ign.com/videos/zencoder/2024/09/17/1920/c1b5c4f2-a6bd-46f9-be61-ca533bf2e834-1726578582.mp4',
      synopsis: 'The origin story of the iconic Transformers, detailing their epic battles and the rise of their respective leaders.',
    },
    
    {
      id: 5,
      title: 'Despicable Me 4',
      videoUrl: 'https://assets.ign.com/videos/zencoder/2024/01/28/1920/5405f11b-d4ec-490d-9295-95b1852a944a-1706476838.mp4',
      synopsis: 'Join Gru and his family on another hilarious adventure filled with mischief, mayhem, and heartwarming moments.',
    },
    
    {
      id: 6,
      title: 'The Garfield Movie',
      videoUrl: 'https://assets.ign.com/videos/zencoder/2023/11/13/1920/14e6c244-93e7-409a-ab55-9bc7676cc1a1-1699887153.mp4', // Placeholder link
      synopsis: 'Follow Garfield as he embarks on a new adventure filled with humor and friendship.',
    },
    
    {
      id: 7,
      title: 'Flow',
      videoUrl: 'blob:https://www.youtube.com/47386efb-c154-4d0b-a6fa-04bc3cf5ea0a', // Placeholder link
      synopsis: 'A captivating story about the journey of life and the flow of emotions.',
    },
    
    {
      id: 8,
      title: 'If',
      videoUrl: 'https://www.youtube.com/watch?v=yV4ruuvPLD4&embeds_referring_euri=https%3A%2F%2Fwww.movieinsider.com%2F', // Placeholder link
      synopsis: 'An intriguing exploration of choices and possibilities in life.',
    },
    
    {
      id: 9,
      title: 'Kung Fu Panda 4',
      videoUrl: 'https://assets.ign.com/videos/zencoder/2023/12/13/1920/e0ca82db-1696-41ec-80bb-d8cebcca0796-1702485171.mp4', // Placeholder link
      synopsis: 'Po is back for another round of epic kung fu adventures with his friends.',
    },
    
    {
      id: 10,
      title: 'Moana 2',
      videoUrl: 'https://assets.ign.com/videos/zencoder/2024/08/10/1280/25f8ec16-b1d1-4712-b587-c2c58745d567-1723257955.mp4', // Placeholder link
      synopsis: 'Moana returns to the sea on a new quest filled with adventure and discovery.',
    },
    
    {
      id: 11,
      title: 'The Lord of the Rings: The War of the Rohirrim',
      videoUrl: 'https://assets.ign.com/videos/zencoder/2024/08/22/1920/daad543f-d55f-4edd-a0b4-55aa2a254f01-1724354040.mp4', // Placeholder link
      synopsis: 'A tale of the valor and bravery of the Rohirrim in Middle-earth.',
    },
    {
      id: 12,
      title: '200% Wolf',
      videoUrl: 'https://scontent.xx.fbcdn.net/o1/v/t2/f2/m69/AQN-c1mftp_GaoPl7jBczA_x18i4PeOVp6ekq1tWcPsUTX-ymgUZs6pAyPJTlHto7crB8L1hN35TcptKy3MJvwoq.mp4?strext=1&_nc_cat=107&_nc_sid=8bf8fe&_nc_ht=scontent.flos5-3.fna.fbcdn.net&_nc_ohc=hZB6jJqqO3cQ7kNvgHCy3j5&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNjQwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6MTAwNDI1NDg4NDc0MDkyMSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=9-4&_nc_eui2=AeEzPE3RRHonKaOkh-noQmbamdoNWOd3yUuZ2g1Y53fJSylkPiFSVrhJkeTjU9lJAGHQeWxkDwPe3hf41_I-k0DG&_nc_zt=28&_nc_rml=0&oh=00_AYAt3-gFLKh10g6QTqgoMh8ARXkJaL_mqzZvB-wADnWjKg&oe=672B19A6', // Placeholder link
      synopsis: 'A fun-filled story about a young wolf discovering his true identity.',
    },
    {
      id: 13,
      title: 'Watchmen: Chapter 1',
      videoUrl: 'https://fb.watch/vAYXTiyhUL/', // Placeholder link
      synopsis: 'Dive into the complex world of heroes and their moral dilemmas.',
    },
    {
      id: 14,
      title: '10 Lives',
      videoUrl: 'https://www.dailymotion.com/video/x8yh70o', // Placeholder link
      synopsis: 'A touching story about love, loss, and the lives we touch.',
    },
    {
      id: 15,
      title: 'My Hero Academia: You\'re Next',
      videoUrl: 'https://youtu.be/22hBq1cvemE', // Placeholder link
      synopsis: 'Join your favorite heroes as they face their toughest challenges yet.',
    },
    {
      id: 16,
      title: 'Buffalo Kids',
      videoUrl: 'https://www.dailymotion.com/video/x95o6ac', // Placeholder link
      synopsis: 'An inspiring tale about friendship and resilience in a close-knit community.',
    },
    {
      id: 17,
      title: 'Wallace & Gromit: Vengeance Most Fowl',
      videoUrl: 'https://fb.watch/vA_8rqBFJd/', // Placeholder link
      synopsis: 'Join Wallace and Gromit on another hilarious adventure filled with mystery and fun.',
    },
    {
      id: 18,
      title: 'Justice League: Crisis on Infinite Earths - Part Three',
      videoUrl: 'https://fb.watch/vA_i-toSow/', // Placeholder link
      synopsis: 'The epic conclusion to the Justice League saga as heroes unite to save the multiverse.',
    },
    {
      id: 19,
      title: 'Justice League: Crisis on Infinite Earths - Part One',
      videoUrl: 'https://www.dailymotion.com/video/x8qihtv', // Placeholder link
      synopsis: 'The heroes face their greatest threat as the fabric of reality is at stake.',
    },
    {
      id: 20,
      title: 'Overlord: The Sacred Kingdom',
      videoUrl: 'https://fb.watch/vA-oK3vkqk/', // Placeholder link
      synopsis: 'An intense journey through a fantasy realm filled with danger and adventure.',
    },
    {
      id: 21,
      title: 'Orion and the Dark',
      videoUrl: 'https://www.dailymotion.com/video/x8rddwl', // Placeholder link
      synopsis: 'A captivating story of friendship and bravery in the face of fears.',
    },
  ];
  export default initialTrailersData ;