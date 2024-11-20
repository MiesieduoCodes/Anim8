const audioTracks = [
    { 
      title: "Adam Levine - Stereo Hearts", url: "https://rildi.sunproxy.net file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWEI2OW9TZ2M4bTE4ZENjWWlkd3VWNlUrWGp3TEd2bnVoTE42S0N2RTZUWUdZZi9rRGliVmRtUG51NmdjYklJelhtWVBJTWc0anhzV1JzWjRxV1pGMVE9/Adam_Lavine_ft._Gym_Class_Heroes_-_Stereo_Hearts_(Hydr0.org).mp3", color: "#FFD700"
    }, // Gold


    {
       title: "Alicia Keys - Falling", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIR2I4QjU3OGdHWUsxWXQwZ3hkNThQUWxmSkk1K2U1cmphbXdCcmZPNlY0Sm9ZYjRKemswRjE5d0lFRHJUaXVvRU09/Aliciya_Keys_-_Falling_(Hydr0.org).mp3", color: "#FF6347" 
    }, // Tomato


    { 
      title: "Ardee - Oliver Twist", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT1RiaFFLbEZ1NlZiWEJ0Ulc1d1EzVTE5blRabE5iZm96RjI0bHQyRTF4NFU9/ArrDee_-_Oliver_Twist_(Hydr0.org).mp3", color: "#8A2BE2" 
    }, // BlueViolet

    { 
      title: "Burna Boy - I Told Them", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRThuaUVUb2orL0xjUWN5SERiQzJoRVJpdkdkUjJxS3FjdkQ3MWljS1FQVEh5cGVKalFwY0xrcjcvRDhrZmZKOTQ9/Burna_Boy_-_I_Told_Them_with_GZA_(Hydr0.org).mp3", color: "#40E0D0" 
    }, // Turquoise

    { title: "Burna Boy - Like to Party", url: "", color: "#DC143C" }, // Crimson

    { 
      title: "Burna Boy - Pull Up", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuTzBvMWtpZ3A0ZGFhQ3BIMXQ0clNtQUFpcmZSOWJDekNMZ1BXNWNBdkVLQ289/Burna_Boy_-_Pull_Up_(Hydr0.org).mp3", color: "#00FF00" 
    }, // Lime


    { title: "Bnxn - Emotions", url: "", color: "#FF4500" }, // OrangeRed


    { title: "Bnxn - Unstoppable", url: "https://example.com/Bnxn_-_Unstoppable.mp3", color: "#7B68EE" }, // MediumSlateBlue


    { 
      title: "Cavemen - Beautiful Rain", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT05OTkdLWWw2ZnZ0VG5kOTVrd216TEFweTlTeGJBaEJqZUI4aVphNHFqYkE9/The_Cavemen._-_Beautiful_Rain_(Hydr0.org).mp3", color: "#FF69B4" 
    }, // HotPink


    { 
      title: "Chike - Insecure", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT0dxdnVCZGgrLy9ZbjYyeTBOMzVqRTkwLzNEWmlSbHZHVjM3S1l1QUtaQWM9/Chike_-_Insecure_(Hydr0.org).mp3", color: "#6495ED" 
    }, // CornflowerBlue


    { 
      title: "Chike - Moon", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT29yQ1lWamdXNlFod1VNOEJIazJ1bDBVWXRPYm45RmJsclQ4eW1kQlJhSkU9/Chike_-_On_the_Moon_(Hydr0.org).mp3", 
      color: "#FFDAB9" 
    }, // PeachPuff


    { title: "Chike - Running to You", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRkNWYmo0WG12V2JNWVBIaWtSWCtRMHVSVlBQZU43RElHcHVxNmFYZVdNWTRjTWZzeVYzTXFlV0hUUjM2YUpKcjA9/Kasi3_feat._chike_Simi_-_Running_to_You_(Hydr0.org).mp3", color: "#D2691E" }, // Chocolate


    { title: "Dave - Law of Attraction", url: "https://example.com/Dave_-_Law_of_Attraction.mp3", color: "#00CED1" }, // DarkTurquoise


    { title: "Dave - Lazarus", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuT0tHN0tSNU9Ea1c5R3VXclRCUVFaWC95T0NsZk9uVkY1bVdSUVFlaHgyd3M9/Dave_Boj_-_Lazarus_(Hydr0.org).mp3", color: "#BA55D3" }, // MediumOrchid
    

    { title: "Dave - Location", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRlI2RW1GZEFqNC9NbmRjdFZzaUFuTzd0MjNZSnFMalBnNk1nMUgxK3kydmpUTm5hSUdwOHdoVzgrdk94WDVYaEk9/Dave_Burna_Boy_-_Location_(Hydr0.org).mp3", color: "#F4A460" }, // SandyBrown


    { title: "Hans Zimmer - Suis Moi", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxYkxiK2JWaEx5TExQUlg3aTVuTHFIRUJnUWtOQUcxR3dmejMrVHpMRnhxL1JZSWppSmI4cmI2TmNHQXZtUjluak5Yc1hCTldDMG9GOEN1M3l4TFpER1E9/Hans_Zimmer_-_Suis-moi_(Hydr0.org).mp3", color: "#98FB98" }, // PaleGreen


    { title: "Jay-Z - Roc Boys", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWEI2OW9TZ2M4bTE4ZENjWWlkd3VWNlUrWGp3TEd2bnVoTE42S0N2RTZUWWpUWjVKeHJGNm80eDllRFpMZnNrWW1ZS3gyM0RGVmZVcE5jSDdaZkt1Qms9/Jay-Z_-_Roc_Boys_(Hydr0.org).mp3", color: "#4682B4" }, // SteelBlue


    { title: "Kali Uchis - Moonlight", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWEI2OW9TZ2M4bTE4ZENjWWlkd3VWNlUrWGp3TEd2bnVoTE42S0N2RTZUWWl6ZXBmYWRTMmkwMFlwUldxUjI5SHBXU2hwUU80TUZacEdFaUhFMWE5ekU9/Kali_Uchis_-_Moonlight_(Hydr0.org).mp3", color: "#DAA520" }, // GoldenRod


    { title: "Kali Uchis - Telepatia", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWEI2OW9TZ2M4bTE4ZENjWWlkd3VWNlUrWGp3TEd2bnVoTE42S0N2RTZUWVRqa0NRbEU2eWZNSitIWmZoejliT0VuOXVIR0hhdW50OWUxTFA3blphT0E9/Kali_Uchis_-_telepat_a_(Hydr0.org).mp3", color: "#ADFF2F" }, // GreenYellow


    { title: "Kanye West - Graduation", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRldNY082bExpbCt3aHZaS1N1TXQ5bzhseTFlT2JtS1pMeHd0QlBWTWZsbk9pN3BPeEhMcGRjZU9tSWhhTnlmblU9/Kanye_West_-_Graduation_(Hydr0.org).mp3", color: "#FF1493" }, // DeepPink


    { title: "Kanye West - Good Life", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnSGZldDBMUG5mWVVlbHFrOXpXNmRmREMrN0d1MHprZGliWkdSbXpSTHd1RW1GcFZiZWUwNDZaUUFQWGpDN0hrdWM9/Kanye_West_-_Good_Life_(Hydr0.org).mp3", color: "#00FA9A" }, // MediumSpringGreen


    { title: "Kanye West - I Wonder", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnSGZldDBMUG5mWVVlbHFrOXpXNmRmRDV2SjNENEJ1V0h4b3lycnFxakphR1ZZNFVOb0RINjhuL0pWSURLUTZzaUk9/Kanye_West_-_I_Wonder_(Hydr0.org).mp3", color: "#9932CC" }, // DarkOrchid


    { title: "Khalid - Better", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnSGZldDBMUG5mWVVlbHFrOXpXNmRmRGdnZ2hSckhhVEYyR2NYNm16cHBqZFZyR3NFeUJzbCtQSTg5OG9lRlhuQUU9/Khalid_-_Better_(Hydr0.org).mp3", color: "#1E90FF" }, // DodgerBlue


    { title: "Khalid - Know Your Worth", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnSGZldDBMUG5mWVVlbHFrOXpXNmRmRCtab2Q3aVZYZCtMbjJGMGgrckZGQXkrWFdWcVI2WEFBcWIyMHM2VWFEK0k9/Khalid_Disclosure_feat._Davido_Tems_-_Know_Your_Worth_Sefon.Pro_(Hydr0.org).mp3", color: "#FF7F50" }, // Coral


    { title: "Khalid - Talk", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnSGZldDBMUG5mWVVlbHFrOXpXNmRmRGFnNFR0ZnZ2eU8vUlZTYWNtMm85Vm0xYnBFQU1pdkYxVE5VbnhvY3k2ME09/Khalid_-_Talk_(Hydr0.org).mp3", color: "#87CEFA" }, // LightSkyBlue


    { title: "Khalid - Young Dumb & Broke", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnSGZldDBMUG5mWVVlbHFrOXpXNmRmREw2cUFBa01HS0szNEsyYlBSZnJHSTRyeHpUaU5SNnBBSzhVTE5iU3ZsNzg9/Khalid_-_Young_Dumb_Broke_(Hydr0.org).mp3", color: "#7FFF00" }, // Chartreuse


    { title: "Khalid & Normani - Love Lies", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnSGZldDBMUG5mWVVlbHFrOXpXNmRmREY3NUs5bTlJRHBtYnVYY0YyRTY4cldaOVc1WVZPZXVxZCtvZWJDdG5lVE09/Khalid_Normani_-_Love_Lies_(Hydr0.org).mp3", color: "#FFA07A" }, // LightSalmon


    { title: "Koffe - Defend", url: "https://example.com/Koffe_-_Defend.mp3", color: "#32CD32" }, // LimeGreen


    { title: "Koffe - Rapture", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRnl0dXd3cnRSL0hSZnJ6TTR0aVlkVjlLZDA1TkR1RVBPN3RzTUZMMGlmYzUyM0FlTkV3d0doRXdGWlZibkszODg9/Koffee_feat._Govana_-_Rapture_(Hydr0.org).mp3", color: "#8B0000" }, // DarkRed


    { title: "Koffe - Shine", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRnl0dXd3cnRSL0hSZnJ6TTR0aVlkVnc2UzlTcEVjd2hZMVNra0Y4SkwvNkF1OWdlTnorUEVMZlNTQk5xcU55Vk09/Koffee_-_Shine_(Hydr0.org).mp3", color: "#FFB6C1" }, // LightPink


    { title: "Koffe - Toast", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRnl0dXd3cnRSL0hSZnJ6TTR0aVlkVkVCOVpUZjZjR1JuRUloNjU4UWlZaUtIMGVHU0dSZjROTy9GY2JVLzcyVEU9/Koffee_-_Toast_(Hydr0.org).mp3", color: "#00FF7F" }, // SpringGreen


    { title: "Koffe - W", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRnl0dXd3cnRSL0hSZnJ6TTR0aVlkVmdrclBrL1ZaVkFzRHJFYXdnNVJuNUd0YlhtVGlqbWpQTmx0SFhZdHBFOGM9/Koffee_ft._Gunna_-_W_(Hydr0.org).mp3", color: "#FF4500" }, // OrangeRed


    { title: "Laufey - Falling Behind", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRnl0dXd3cnRSL0hSZnJ6TTR0aVlkVnFUU1ZyUXVYR0prdk1xbUd6S0pMenZ0ZGM5NUVBMkN6c3pSaGwrbzNPRTg9/Laufey_-_Falling_Behind_(Hydr0.org).mp3", color: "#FF8C00" }, // DarkOrange


    { title: "Laufey - From the Start", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRnl0dXd3cnRSL0hSZnJ6TTR0aVlkVjNPTHdaVkNXUGJHS2FINlcvRytaTDZvdU1nVkRlbnBQL21BOXBZQUs3eEE9/Laufey_-_From_The_Start_(Hydr0.org).mp3", color: "#B22222" }, // FireBrick


    { title: "Laufey - Slow Down", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRnl0dXd3cnRSL0hSZnJ6TTR0aVlkVnFwaHJRUFdzbXJwNFVXVzFKNjl3VHdGb2Uzd1BLVDh2QXB5VldGUWxXM3M9/Laufey_-_Slow_Down_(Hydr0.org).mp3", color: "#2E8B57" }, // SeaGreen


    { title: "Lojay - Monalisa", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRnl0dXd3cnRSL0hSZnJ6TTR0aVlkVmlMRlZ0NE00Y0dwU3lPWFhIOUNrcmczVEM4UkVOVFFzTVRwSjZieVlETXc9/Lojay_-_Monalisa_(Hydr0.org).mp3", color: "#8A2BE2" }, // BlueViolet


    { title: "Lojay - Moto", url: "https://rildi.sunproxy.net/file/ai9FSGY3ZWp3Vzd4VnJRR2Y5Z0RxWWRDcFZRNnZYMWg3WVJGd3VCZ1pnRnl0dXd3cnRSL0hSZnJ6TTR0aVlkVmRmdkZLOWZiQWE0YVhqc3o5TmVMNEMvSzVGalg0QVFnb2xuakdxUmxtSU09/Lojay_-_Lojay_-_MOTO_(Hydr0.org).mp3", color: "#FFFF00" }, // Yellow


    { title: "Ludacris - Roll Out", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0U2FJbjUzdXBSZHBLakdpOVk0TCs1cklNTXBTQTNxaWtZRVpsY2FxcjMwd1pRWEJyTWFSV0tYTlZEa0VGSHVKRXM9/Ludacris_-_Roll_out_(Hydr0.org).mp3", color: "#F08080" }, // LightCoral


    { title: "Magic - Red Dress", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0VDFCaUhYenhPV2s2Z3hqSHM4YWhsL0p5djBlWU11ZGYyeTdKRzl6YmZYbXdiejU1anJrM3ZIZGE5S2pQQVY1TmM9/MAGIC_-_Red_Dress_(Hydr0.org).mp3", color: "#32CD32" }, // LimeGreen


    { title: "Magic - Rude", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0VDFCaUhYenhPV2s2Z3hqSHM4YWhsL3lqay9EMjYrcmVFMkViRHV6MnJFVGhLWEJ0WkNmRjB1OVdPc0RGem1uRFE9/Magic_-_Rude_(Hydr0.org).mp3", color: "#FF1493" }, // DeepPink


    { title: "Maroon 5 - Wait", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0U2FJbjUzdXBSZHBLakdpOVk0TCs1clFwZUd3cTQzQktKazVGa0ZVSDI3eFBIZnN0a3IxQ0k4ZnBQMEJwQ3VtUXc9/Maroon_5_-_Wait_(Hydr0.org).mp3", color: "#8B4513" }, // SaddleBrown


    { title: "Odeal - Free Me", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0U2Z4NTNkc0U3REdSbUhjSlR3Q2xrem9IRWRwQ29UWXVDSC9ORDVoM2FmZFQ2Uy80ZGNmVldDVEJ4N2xFOUptbnM9/Odeal_-_Free_Me_(Hydr0.org).mp3", color: "#8B0000" }, // DarkRed


    { title: "Odeal - Onome", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0U2FJbjUzdXBSZHBLakdpOVk0TCs1clI3ako0Y2ZBL3RaWjU4b25vT1FYaXJWaE9CUUo1NlZlQUh6T2JleHVQOW89/Odeal_-_Passenger_(Hydr0.org).mp3", color: "#00BFFF" }, // DeepSkyBlue


    { title: "Odeal - Soh Soh", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0UUxuTWFKT0xRWFJTQXg2WU9HMFkyemN0czhhemgwT2YwU2RaR2ZuVCtHZkhGeWVpalJjM3Jla09kWXRhZVQwSDg9/Odeal_-_Soh-Soh_(Hydr0.org).mp3", color: "#32CD32" }, // LimeGreen


    { title: "Odeal - Water", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0VFEvSUVmUFBOYUpjWEp0NjArVSt5NTJxUklHRXFPUDAvYms1cW93bVZEQllQaFo0REUvQVgyWFFrNy9tR0p6Tmc9/Odeal_-_Water_(Hydr0.org).mp3", color: "#B0C4DE" }, // LightSteelBlue


    { title: "Olamide - Rock", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0U2FJbjUzdXBSZHBLakdpOVk0TCs1ckhyVVV1ZStSTzZPc1llTTdkeFNlL2FvQXhGUlVvelgxcjhaZW5xeHZUNWc9/Olamide_-_Rock_(Hydr0.org).mp3", color: "#FF6347" }, // Tomato


    { title: "Patoranking - Babylon", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0UUxuTWFKT0xRWFJTQXg2WU9HMFkyenJhTDlLNmlLK3hnOUVCcDM4ZHk5UmM5Mm8yUklmQjlSS1c1V0N0Y2lDa1U9/Patoranking_-_Babylon_feat_Victony_(Hydr0.org).mp3", color: "#FF6347" }, // Tomato


    { title: "Rema - Charm", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0Ukhxa1RaR0EraDZjQkU4cGdFRU0za3lVcmVRdFBxazZ2cjUrQ1RXY3hKeGVHVEdTN2JIWGVjUEl3N1ZWY2ZtTkU9/Rema_-_Charm_(Hydr0.org).mp3", color: "#00BFFF" }, // DeepSkyBlue


    { title: "Sade - Sweetest Taboo", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0VDFCaUhYenhPV2s2Z3hqSHM4YWhsL3BWdVFCQ1hQcHB6dGJzemVoNk9uL3l2L3dkTzRlWFYrYlUvNkh4SmRNczg9/Sade_-_The_Sweetest_Taboo_(Hydr0.org).mp3", color: "#8B008B" }, // DarkMagenta


    { title: "Skepta - Bad Energy", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0VFEvSUVmUFBOYUpjWEp0NjArVSt5NXhOVXc4ZGRndVN2bUdSMGhEeG5uWGV1Yy9kZkM0NFdiSXliT1pZUDBlOUE9/Skepta_ft._Wizkid_-_Energy_(Hydr0.org).mp3", color: "#FF4500" }, // OrangeRed


    { 
      title: "Tyler, The Creator - I Liked You", url: "https://example.com/Tyler_The_Creator_-_I_Liked_You.mp3", color: "#4B0082" 
    }, // Indigo


    { title: "Victony - Everything", url: "https://example.com/Victony_-_Everything.mp3", color: "#008000" }, // Green


    { title: "Victony - My Darling", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0VFEvSUVmUFBOYUpjWEp0NjArVSt5NW1tdStjTmdtTTJvSTJtdVdaVXRPQzdHa0Nlbm9tSVM0by8rVWV5N1BxYTg9/Victony_-_My_Darling_(Hydr0.org).mp3", color: "#800080" }, // Purple


    { title: "Victony - Risk", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0VFEvSUVmUFBOYUpjWEp0NjArVSt5NTlsblRFQ2VSRFZsc1NjbHdrR0VFOUhSSHAxaUtDZDRzdGNzVGxDQ1BFUzA9/Victony_-_Risk_Vistanaij.com.ng_(Hydr0.org).mp3", color: "#FFD700" }, // Gold


    { title: "Zayn - Dusk Till Dawn (ft. Sia)", url: "https://rildi.sunproxy.net/file/bEdGd3ZDeEtsVGNqWlpDNWo1bnQ0RDdEdEVGT3dFR0hFQnVGT2Z2dWd0VDFCaUhYenhPV2s2Z3hqSHM4YWhsL1ZORExaRnorMGozZjhkUVdieUt6VzQ5ZGZ6L1JvZTN2TUpxRlNlY0Y4WGM9/ZAYN_feat._Sia_-_Dusk_Till_Dawn_(Hydr0.org).mp3", color: "#FF69B4" } // HotPink

    
  ];
  export default audioTracks;