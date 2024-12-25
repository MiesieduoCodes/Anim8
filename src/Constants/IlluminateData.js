const movies = [
    {
      title: "Despicable Me ",
      rating: 7.6,
      backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5x9fhlDv0bk5IXkixFJ5GB1aCsJx9TNBGA&s",
      story: "A supervillain adopts three girls as part of his scheme to steal the moon, only to find his heart softened by their innocence.",
      downloadLink: "https://download1076.mediafire.com/ebl7nnja00tgYBfLhgc8wqnGa_fSlMx_tlIDWUGHa5lnIHAIisQeRnBgD5uUaISE8FUt4Ky4FUM8qFqTPL-VFfLMafEeIU2gZjdq9I8BuMO77k1YEBPeif3KIcKMUaTBn5vtJuMC-1QKk7LPdlRgPNmEEYl2CBtGb6XEUEe6cMnhsw/zpkvb3y2kgdety3/Anim8.com.ng+Despicable+Me.mp4"
    },
    {
      title: "Despicable Me 2 ",
      rating: 7.3,
      backgroundImage: "https://wallpapers.com/images/high/agnes-sleeping-minions-despicable-me-2-vj1qvqa91udfhc1p.webp",
      story: "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
      downloadLink: "https://download1474.mediafire.com/bvk1w6o488zgjwE6o5oxIycJYLUf95qnsQkdO9XTVkJzXXwct_84GwggsiyHoW6SPNrLmywfBfaK0t1JEYmK6G57Q7hCYGjcWOsDYb4-Kkas2neaDEoOLtV7_5QEkfTNqsAvWl_uXkqe86jIiDdtnDYYA_AqlDHUIgcOQzrfZ-xSTA/8xph6pf4uqle2f6/Anim8.com.ng+Despicable+Me+2+.mp4"
    },
    {
        title: "Despicable Me 3",
        rating: 7.6,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3HE7rsPMduS02hT4Kb0ft6g3DuG4QVV_407K-TRQeDpjVsFnQsnQ2qShgdXngjcoZ_o&usqp=CAU",
        story: "A supervillain adopts three girls as part of his scheme to steal the moon, only to find his heart softened by their innocence.",
        downloadLink: "https://download1652.mediafire.com/rvwtl3g613qgvFkFnEIex1-T0RVr7IN_aIuGh43WQLLYZMJOs5prBiNeB2VlOl0DKGGW8x3N9lRCSihzIMUY9gy2nB6Y7Q1lRV9wmhz1Y3k9Rg2aUfveZf1LZz-wL13La9ExEnRisflQHIAYkH-9qlv4769kK6E3zsOR0sKTVfA8hw/vbqb16kp05gijok/Anim8.com.ng+Despicable+Me+3+.mp4"
      },
      {
        title: "Despicable Me 4",
        rating: 7.3,
        backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtykEyhLIljqzGxc-AYjG3gw8m9-HEKTL3qQ&s",
        story: "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
        downloadLink: "https://example.com/movies/despicable-me-2.mp4"
      },
    {
      title: "The Secret Life of Pets ",
      rating: 6.5,
      backgroundImage: "https://wallpapers.com/images/high/2560x1700-ugb63eznnt325sfy.webp",
      story: "Max's quiet life as a favorite pet is turned upside down when his owner brings home a new dog.",
      downloadLink: "https://download1073.mediafire.com/3otsaj0a8rhgdJT_HKdl_QfSRpnMVkCZNBK3YpvriwFpUh2WMOSLuDnAisRoEt6qEl5oCzIRDC5hcu0ynY-ltzmu2CgFkjfI5uIZyX8K4q94FXNhHGudP7om-X3lawm_jg1aqSB5zdgsDERsHCg1Ba8C9wqUxoLJM53BAxkG4v64rw/4a90nwylyqvx0s1/Anim8.com.ng+The+Secret+Life+of+Pets.mp4"
    },
    {
      title: "The Secret Life of Pets 2 ",
      rating: 6.4,
      backgroundImage: "https://wallpapers.com/images/high/the-secret-life-of-pets-2-duke-g27jzrcor7x6h6ve.webp",
      story: "Max faces major life changes after his owner gets married and has a baby, while he and his friends go on new adventures.",
      downloadLink: "https://download1527.mediafire.com/zv17ma03k85g1RVm_lq6CGlPU3IDRDJIyId2ZfGPNZbtr-eXeA0twFfqEDT0rCYv9jKT0S8RZbU--cvpM3fvEilgE6u-94Zh3f0AqMj8PhRzVi_yuNEjcjosUeLkCXNT2NCMY4ug4KAkipEp_0mW_yEFdmaolgZBJVuX2x09z3R_LQ/zok6xk9wlhgjwqn/Anim8.com.ng+The+Secret+Life+of+Pets+2.mp4"
    },
    {
      title: "Sing ",
      rating: 7.1,
      backgroundImage: "https://www.illumination.com/wp-content/uploads/2019/10/Sing_Buster_2.png",
      story: "In a city of animals, a struggling theater owner hosts a singing competition to save his theater from foreclosure.",
      downloadLink: "https://download1346.mediafire.com/r9b2gt4zh7sgKloqobQP0j-0hPzwwLh-hiazJ2RTD8dCqpcdpc7cyCKkuDWBimRAve-SlqMt1fyBrY7lZam8nFvr7QW6M4aNX_dGUREIvpy2ut-eJcWmkpOZvkRi7aH2uJJcv8kmjd6Y7BaimDVCoYRY_tMChbof8aXP61CJyd3yLw/anrzr3584matyvh/Anim8.com.ng+Sing.mp4"
    },
    {
      title: "Sing 2",
      rating: 7.4,
      backgroundImage: "https://wallpapers.com/images/high/characters-from-sing-2-performing-on-a-vibrant-stage-jqb7iynxgvdw20pk.webp",
      story: "Buster Moon and his friends launch a dazzling stage show while trying to win over a reclusive rock star.",
      downloadLink: "https://download1322.mediafire.com/80h74n6j937gil4kBHJb4fsnWoZsEgpP-YoljL9RhzVmd0k10SCmRP62ZUXgytaZwtn7qKaeRpQiUY5tOAOGVjp-6D0XUoMTVuKIz4Lb7DAxgIqf7MVTvwitbpNWkQlhsD4UIWQ72vJ80s-IIfuTdHZzLuilnX90hfGJapF9WJsr9g/gbzu3ynnfrwrzcu/Anim8.com.ng+Sing+2.mp4"
    },
    {
      title: "Minions ",
      rating: 6.4,
      backgroundImage: "https://wallpapers.com/images/high/kevin-bob-and-stuart-minion-desktop-quotes-ofih6pbn25re5v0i.webp",
      story: "The story of the minions' journey to find a master, eventually leading them to meet a young Gru.",
      downloadLink: "https://download1979.mediafire.com/zhfytgi1eeig0z2vWrzwv8sy-4caLt9jcz3CAIRtQqLMUmIY544BX5SB9YLXj33NC5qIU0Vm4-qOvDtTb7o8wzIxktD5h0nxB10qCRdWUzs2Axm9VMHZjD1jsi_SHpPT1vzQYT2R-mcW3Pb_hLK8RQ3l1E6jYVQy9nzYeHz2yIOQEg/mdv64vufxf3pldm/Anim8.com.ng+Minions.mp4"
    },
    {
      title: "Minions: The Rise of Gru ",
      rating: 6.6,
      backgroundImage: "https://wallpapers.com/images/high/minions-the-rise-of-gru-gun-vedq5qik20rhhvea.webp",
      story: "The Minions team up with a young Gru in his quest to become the world's greatest supervillain.",
      downloadLink: "https://download1085.mediafire.com/77fn7xej6z4gwXLJ0N95PdAvetaSZOcVJFtBhqxv0-k2qSWYUFsdmc4TvooZvA4qxfY9Afrzx78-xldq7Vl5lTyIvyLG5fsof9TvdIz1CJ-pHGyj6VH-IWbrQ4H8PFW7hthykGX8Y7EjirtA9890-smMTy1a8ZLclStOX9v4Off7CQ/tjih30afdfeovgd/Anim8.com.ng+Minions+The+Rise+of+Gru.mp4"
    },
    {
      title: "Dr. Seuss' The Grinch",
      rating: 6.3,
      backgroundImage: "https://wallpapers.com/images/high/grinch-christmas-iphone-irwmi5r92g6x3ywg.webp",
      story: "The Grinch plans to ruin Christmas for the citizens of Whoville until he learns the true spirit of the holiday.",
      downloadLink: "https://download1529.mediafire.com/en6sdm5kf0ngRwi5FFn1wNcHnkBUeMdDCmc9NcP5eWaiWvPjLv2dtmAN0b3CTPryeVgJetGKNDLGBqv4_F_DL501k50FRa9e67xH1uZgBsmDfEL08L7Jo6DkptRU2Y4ZlAPe6Z5MoLaIWG0aP20IjASoeT9mmINllOt40Vlch2FfOg/qmmi9c1nobppxl9/Anim8.com.ng+The+Grinch.mp4"
    },
    {
      title: "The Lorax",
      rating: 6.4,
      backgroundImage: "https://wallpapers.com/images/high/the-lorax-guardianofthe-forest-5kw103bb95q9h7kz.webp",
      story: "In a world without trees, a young boy seeks out the Once-ler to learn the story of the Lorax and bring trees back to his community.",
      downloadLink: "https://example.com/movies/lorax.mp4"
    },
    {
      title: "The Super Mario Bros. Movie ",
      rating: 7.3,
      backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsexzXHEMpFHFnZDYdOKkcyk_2CmWcNzUlZQ&s",
      story: "Mario embarks on a journey through the Mushroom Kingdom to rescue Princess Peach from Bowser's clutches.",
      downloadLink: "https://download1583.mediafire.com/mc0bm3oxeu4g38w2IRn5um2a_Ly74z87xCe1PHHrH5hBYzIQrPiDMMn6GI6R64XyMTEINM9aJebyJbmNonpWzUfNi4dbympZ337_CLf5QcnVBJ-QzZ7HvdtdvxOjz5ZtRae2fLtZ1JjYsnVOzikj55osBZiC31LcyOA1fddKskeIKQ/2fjapsb4pkz7xtz/Anim8.com.ng+The+Super+Mario+Bros+Movie.mp4"
    }
  ];
  
  export default movies;
  