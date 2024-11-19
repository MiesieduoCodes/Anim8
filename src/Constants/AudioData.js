const audioTracks = [
    { title: "Adam Levine - Stereo Hearts", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWEI2OW9TZ2M4bTE4ZENjWWlkd3VWNlUrWGp3TEd2bnVoTE42S0N2RTZUWUdZZi9rRGliVmRtUG51NmdjYklJelhtWVBJTWc0anhzV1JzWjRxV1pGMVE9/Adam_Lavine_ft._Gym_Class_Heroes_-_Stereo_Hearts_(Hydr0.org).mp3", color: "#FFD700" }, // Gold


    { title: "Alicia Keys - Falling", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIR2I4QjU3OGdHWUsxWXQwZ3hkNThQUWxmSkk1K2U1cmphbXdCcmZPNlY0Sm9ZYjRKemswRjE5d0lFRHJUaXVvRU09/Aliciya_Keys_-_Falling_(Hydr0.org).mp3", color: "#FF6347" }, // Tomato


    { title: "Ardee - Oliver Twist", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT1RiaFFLbEZ1NlZiWEJ0Ulc1d1EzVTE5blRabE5iZm96RjI0bHQyRTF4NFU9/ArrDee_-_Oliver_Twist_(Hydr0.org).mp3", color: "#8A2BE2" }, // BlueViolet



    { title: "Burna Boy - I Told Them", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRThuaUVUb2orL0xjUWN5SERiQzJoRVJpdkdkUjJxS3FjdkQ3MWljS1FQVEh5cGVKalFwY0xrcjcvRDhrZmZKOTQ9/Burna_Boy_-_I_Told_Them_with_GZA_(Hydr0.org).mp3", color: "#40E0D0" }, // Turquoise

    { title: "Burna Boy - Like to Party", url: "", color: "#DC143C" }, // Crimson

    { title: "Burna Boy - Pull Up", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuTzBvMWtpZ3A0ZGFhQ3BIMXQ0clNtQUFpcmZSOWJDekNMZ1BXNWNBdkVLQ289/Burna_Boy_-_Pull_Up_(Hydr0.org).mp3", color: "#00FF00" }, // Lime


    { title: "Bnxn - Emotions", url: "", color: "#FF4500" }, // OrangeRed


    { title: "Bnxn - Unstoppable", url: "https://example.com/Bnxn_-_Unstoppable.mp3", color: "#7B68EE" }, // MediumSlateBlue


    { title: "Cavemen - Beautiful Rain", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT05OTkdLWWw2ZnZ0VG5kOTVrd216TEFweTlTeGJBaEJqZUI4aVphNHFqYkE9/The_Cavemen._-_Beautiful_Rain_(Hydr0.org).mp3", color: "#FF69B4" }, // HotPink


    { title: "Chike - Insecure", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT0dxdnVCZGgrLy9ZbjYyeTBOMzVqRTkwLzNEWmlSbHZHVjM3S1l1QUtaQWM9/Chike_-_Insecure_(Hydr0.org).mp3", color: "#6495ED" }, // CornflowerBlue


    { title: "Chike - Moon", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT29yQ1lWamdXNlFod1VNOEJIazJ1bDBVWXRPYm45RmJsclQ4eW1kQlJhSkU9/Chike_-_On_the_Moon_(Hydr0.org).mp3", 
      color: "#FFDAB9" }, // PeachPuff


    { title: "Chike - Running to You", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRkNWYmo0WG12V2JNWVBIaWtSWCtRMHVSVlBQZU43RElHcHVxNmFYZVdNWTRjTWZzeVYzTXFlV0hUUjM2YUpKcjA9/Kasi3_feat._chike_Simi_-_Running_to_You_(Hydr0.org).mp3", color: "#D2691E" }, // Chocolate


    { title: "Dave - Law of Attraction", url: "https://example.com/Dave_-_Law_of_Attraction.mp3", color: "#00CED1" }, // DarkTurquoise


    { title: "Dave - Lazarus", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT0tHN0tSNU9Ea1c5R3VXclRCUVFaWC95T0NsZk9uVkY1bVdSUVFlaHgyd3M9/Dave_Boj_-_Lazarus_(Hydr0.org).mp3", color: "#BA55D3" }, // MediumOrchid
    

    { title: "Dave - Location", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuTzd0MjNZSnFMalBnNk1nMUgxK3kydmpUTm5hSUdwOHdoVzgrdk94WDVYaEk9/Dave_Burna_Boy_-_Location_(Hydr0.org).mp3", color: "#F4A460" }, // SandyBrown


    { title: "Hans Zimmer - Suis Moi", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRUJnUWtOQUcxR3dmejMrVHpMRnhxL1JZSWppSmI4cmI2TmNHQXZtUjluak5Yc1hCTldDMG9GOEN1M3l4TFpER1E9/Hans_Zimmer_-_Suis-moi_(Hydr0.org).mp3", color: "#98FB98" }, // PaleGreen


    { title: "Jay-Z - Roc Boys", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWEI2OW9TZ2M4bTE4ZENjWWlkd3VWNlUrWGp3TEd2bnVoTE42S0N2RTZUWWpUWjVKeHJGNm80eDllRFpMZnNrWW1ZS3gyM0RGVmZVcE5jSDdaZkt1Qms9/Jay-Z_-_Roc_Boys_(Hydr0.org).mp3", color: "#4682B4" }, // SteelBlue


    { title: "Kali Uchis - Moonlight", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWEI2OW9TZ2M4bTE4ZENjWWlkd3VWNlUrWGp3TEd2bnVoTE42S0N2RTZUWWl6ZXBmYWRTMmkwMFlwUldxUjI5SHBXU2hwUU80TUZacEdFaUhFMWE5ekU9/Kali_Uchis_-_Moonlight_(Hydr0.org).mp3", color: "#DAA520" }, // GoldenRod


    { title: "Kali Uchis - Telepatia", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWEI2OW9TZ2M4bTE4ZENjWWlkd3VWNlUrWGp3TEd2bnVoTE42S0N2RTZUWVRqa0NRbEU2eWZNSitIWmZoejliT0VuOXVIR0hhdW50OWUxTFA3blphT0E9/Kali_Uchis_-_telepat_a_(Hydr0.org).mp3", color: "#ADFF2F" }, // GreenYellow


    { title: "Kanye West - Graduation", url: "https://example.com/Kanye_West_-_Graduation.mp3", color: "#FF1493" }, // DeepPink


    { title: "Kanye West - Good Life", url: "https://example.com/Kanye_West_-_Good_Life.mp3", color: "#00FA9A" }, // MediumSpringGreen


    { title: "Kanye West - I Wonder", url: "https://example.com/Kanye_West_-_I_Wonder.mp3", color: "#9932CC" }, // DarkOrchid


    { title: "Khalid - Better", url: "https://example.com/Khalid_-_Better.mp3", color: "#1E90FF" }, // DodgerBlue


    { title: "Khalid - Know Your Worth", url: "https://example.com/Khalid_-_Know_Your_Worth.mp3", color: "#FF7F50" }, // Coral


    { title: "Khalid - Talk", url: "https://example.com/Khalid_-_Talk.mp3", color: "#87CEFA" }, // LightSkyBlue


    { title: "Khalid - Young Dumb & Broke", url: "https://example.com/Khalid_-_Young_Dumb_&_Broke.mp3", color: "#7FFF00" }, // Chartreuse


    { title: "Khalid & Normani - Love Lies", url: "https://example.com/Khalid_&_Normani_-_Love_Lies.mp3", color: "#FFA07A" }, // LightSalmon


    { title: "Koffe - Defend", url: "https://example.com/Koffe_-_Defend.mp3", color: "#32CD32" }, // LimeGreen


    { title: "Koffe - Rapture", url: "https://example.com/Koffe_-_Rapture.mp3", color: "#8B0000" }, // DarkRed


    { title: "Koffe - Shine", url: "https://example.com/Koffe_-_Shine.mp3", color: "#FFB6C1" }, // LightPink


    { title: "Koffe - Toast", url: "https://example.com/Koffe_-_Toast.mp3", color: "#00FF7F" }, // SpringGreen


    { title: "Koffe - W", url: "https://example.com/Koffe_-_W.mp3", color: "#FF4500" }, // OrangeRed


    { title: "Laufey - Falling Behind", url: "https://example.com/Laufey_-_Falling_Behind.mp3", color: "#FF8C00" }, // DarkOrange


    { title: "Laufey - From the Start", url: "https://example.com/Laufey_-_From_the_Start.mp3", color: "#B22222" }, // FireBrick


    { title: "Laufey - Slow Down", url: "https://example.com/Laufey_-_Slow_Down.mp3", color: "#2E8B57" }, // SeaGreen


    { title: "Lojay - Monalisa", url: "https://example.com/Lojay_-_Monalisa.mp3", color: "#8A2BE2" }, // BlueViolet


    { title: "Lojay - Moto", url: "https://example.com/Lojay_-_Moto.mp3", color: "#FFFF00" }, // Yellow


    { title: "Ludacris - Roll Out", url: "https://example.com/Ludacris_-_Roll_Out.mp3", color: "#F08080" }, // LightCoral


    { title: "Magic - Red Dress", url: "https://example.com/Magic_-_Red_Dress.mp3", color: "#32CD32" }, // LimeGreen


    { title: "Magic - Rude", url: "https://example.com/Magic_-_Rude.mp3", color: "#FF1493" }, // DeepPink


    { title: "Maroon 5 - Wait", url: "https://example.com/Maroon_5_-_Wait.mp3", color: "#8B4513" }, // SaddleBrown


    { title: "Odeal - Free Me", url: "https://example.com/Odeal_-_Free_Me.mp3", color: "#8B0000" }, // DarkRed


    { title: "Odeal - Onome", url: "https://example.com/Odeal_-_Onome.mp3", color: "#00BFFF" }, // DeepSkyBlue


    { title: "Odeal - Soh Soh", url: "https://example.com/Odeal_-_Soh_Soh.mp3", color: "#32CD32" }, // LimeGreen


    { title: "Odeal - Water", url: "https://example.com/Odeal_-_Water.mp3", color: "#B0C4DE" }, // LightSteelBlue


    { title: "Olamide - Rock", url: "https://example.com/Olamide_-_Rock.mp3", color: "#FF6347" }, // Tomato


    { title: "Patoranking - Babylon", url: "https://example.com/Patoranking_-_Babylon.mp3", color: "#FF6347" }, // Tomato


    { title: "Rema - Charm", url: "https://example.com/Rema_-_Charm.mp3", color: "#00BFFF" }, // DeepSkyBlue


    { title: "Sade - Sweetest Taboo", url: "https://example.com/Sade_-_Sweetest_Taboo.mp3", color: "#8B008B" }, // DarkMagenta


    { title: "Skepta - Bad Energy", url: "https://example.com/Skepta_-_Bad_Energy.mp3", color: "#FF4500" }, // OrangeRed


    { title: "Tyler, The Creator - I Liked You", url: "https://example.com/Tyler_The_Creator_-_I_Liked_You.mp3", color: "#4B0082" }, // Indigo


    { title: "Victony - Everything", url: "https://example.com/Victony_-_Everything.mp3", color: "#008000" }, // Green


    { title: "Victony - My Darling", url: "https://example.com/Victony_-_My_Darling.mp3", color: "#800080" }, // Purple


    { title: "Victony - Risk", url: "https://example.com/Victony_-_Risk.mp3", color: "#FFD700" }, // Gold


    { title: "Zayn - Dusk Till Dawn (ft. Sia)", url: "https://example.com/Zayn_-_Dusk_Till_Dawn.mp3", color: "#FF69B4" } // HotPink

    
  ];
  export default audioTracks;