module.exports = {
  name: "Taurine",
  priority: 1,
  info: {
    website: {
      name: "taurine.app",
      url: "https://taurine.app/",
      external: true
    },
    wiki: {
      name: "theapplewiki.com/wiki/Taurine",
      url: "https://www.theapplewiki.com/wiki/Taurine",
      external: true
    },
    guide: [
      {
        name: "Installing Taurine (TrollStore)",
        url: "/installing-taurine-trollstore/",
        pkgman: "sileo",
        devices: [
          "iPhone11,2", // iPhone XS, A12
          "iPhone11,4", // iPhone XS Max (China mainland), A12
          "iPhone11,6", // iPhone XS Max, A12
          "iPhone11,8", // iPhone XR, A12
          "iPhone12,1", // iPhone 11, A13
          "iPhone12,3", // iPhone 11 Pro, A13
          "iPhone12,5", // iPhone 11 Pro Max, A13
          "iPhone12,8", // iPhone SE (2nd generation), A13
          "iPhone13,1", // iPhone 12 mini, A14
          "iPhone13,2", // iPhone 12, A14
          "iPhone13,3", // iPhone 12 Pro, A14
          "iPhone13,4", // iPhone 12 Pro Max, A14
          "iPad8,1",
          "iPad8,2",
          "iPad8,3",
          "iPad8,4",
          "iPad8,5",
          "iPad8,6",
          "iPad8,7",
          "iPad8,8",
          "iPad8,9",
          "iPad8,10",
          "iPad8,11",
          "iPad8,12",
          "iPad11,1", // iPad mini (5th generation) Wi-Fi, A12
          "iPad11,2", // iPad mini (5th generation) Wi-Fi + Cellular, A12
          "iPad11,3", // iPad Air (3rd generation) Wi-Fi, A12
          "iPad11,4", // iPad Air (3rd generation) Wi-Fi + Cellular, A12
          "iPad11,6", // iPad (8th generation) Wi-Fi, A12
          "iPad11,7", // iPad (8th generation) Wi-Fi + Cellular, A12
          "iPad13,1", // iPad Air (4th generation) Wi-Fi, A14
          "iPad13,2", // iPad Air (4th generation) Wi-Fi + Cellular, A14
        ]
      },
      {
        name: "Installing Taurine",
        url: "/installing-taurine/",
        pkgman: "sileo"
      }
    ],
    latestVer: "1.1.6",
    color: "#6742cd",
    icon: "/assets/images/jb-icons/taurine.png",
    notes: "Can obtain a permanently signed version after initially jailbreaking by installing `taurine-permanent` from the Odyssey Repo. 14.4 to 14.4.2 support limited to A10(X) and earlier devices using a beta version of Taurine. 14.5 to 14.8.1 support limited to A11 and earlier devices using a beta version of Taurine.",
    jailbreaksmeapp: true,
    type: "Semi-untethered",
    firmwares: ["14.0","14.8.1"]
  },
  compatibility: [
    {
      firmwares: [
        "18A5301v", // 14.0 beta
        "18A5319i", // 14.0 beta 2
        "18A5332f", // 14.0 beta 3
        "18A5342e", // 14.0 beta 4
        "18A5351d", // 14.0 beta 5
        "18A5357e", // 14.0 beta 6
        "18A5369b", // 14.0 beta 7
        "18A5373a", // 14.0 beta 8
        "18A373-GM", // 14.0 GM
        "18A373", // 14.0
        "18A393", // 14.0.1
        "18A8395-GM", // 14.1 GM
        "18A8395", // 14.1
        "18B5052h", // 14.2 beta
        "18B5052i", // 14.2 beta
        "18B5061e", // 14.2 beta 2
        "18B5072f", // 14.2 beta 3
        "18B5083a", // 14.2 beta 4
        "18B91", // 14.2 RC
        "18B92", // 14.2
        "18B111", // 14.2, iPhone 12 and 12 Pro only
        "18B121", // 14.2.1, iPhone 12 and 12 Pro only
        "18C5044f", // 14.3 beta
        "18C5054c", // 14.3 beta 2
        "18C5061a", // 14.3 beta 3
        "18C65", // 14.3 RC
        "18C66-RC", // 14.3 RC 2
        "18C66", // 14.3
      ],
      devices: [
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
        "iPhone8,4", // iPhone SE, A9
        "iPhone9,1", // iPhone 7 (Global), A10
        "iPhone9,2", // iPhone 7 Plus (CDMA), A10
        "iPhone9,3", // iPhone 7 (GSM), A10
        "iPhone9,4", // iPhone 7 Plus (GSM), A10
        "iPhone10,1", // iPhone 8 (CDMA), A11
        "iPhone10,2", // iPhone 8 Plus (CDMA), A11
        "iPhone10,3", // iPhone X (CDMA), A11
        "iPhone10,4", // iPhone 8 (GSM), A11
        "iPhone10,5", // iPhone 8 Plus (GSM), A11
        "iPhone10,6", // iPhone X (GSM), A11
        "iPhone11,2", // iPhone XS, A12
        "iPhone11,4", // iPhone XS Max (China mainland), A12
        "iPhone11,6", // iPhone XS Max, A12
        "iPhone11,8", // iPhone XR, A12
        "iPhone12,1", // iPhone 11, A13
        "iPhone12,3", // iPhone 11 Pro, A13
        "iPhone12,5", // iPhone 11 Pro Max, A13
        "iPhone12,8", // iPhone SE (2nd generation), A13
        "iPhone13,1", // iPhone 12 mini, A14
        "iPhone13,2", // iPhone 12, A14
        "iPhone13,3", // iPhone 12 Pro, A14
        "iPhone13,4", // iPhone 12 Pro Max, A14
        "iPad5,1", // iPad mini 4 Wi-Fi, A8
        "iPad5,2", // iPad mini 4 Wi-Fi + Cellular, A8
        "iPad5,3", // iPad Air 2 Wi-Fi, A8X
        "iPad5,4", // iPad Air 2 Wi-Fi + Cellular, A8X
        "iPad6,3", // iPad Pro (9.7-inch) Wi-Fi, A9X
        "iPad6,4", // iPad Pro (9.7-inch) Wi-Fi + Cellular, A9X
        "iPad6,7", // iPad Pro (12.9-inch) Wi-Fi, A9X
        "iPad6,8", // iPad Pro (12.9-inch) Wi-Fi + Cellular, A9X
        "iPad6,11", // iPad (5th generation) Wi-Fi, A9
        "iPad6,12", // iPad (5th generation) Wi-Fi + Cellular, A9
        "iPad7,1", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi, A10X
        "iPad7,2", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi + Cellular, A10X
        "iPad7,3", // iPad Pro 2 (10.5-inch) Wi-Fi, A10X
        "iPad7,4", // iPad Pro 2 (10.5-inch) Wi-Fi + Cellular, A10X
        "iPad7,5", // iPad (6th generation) Wi-Fi, A10
        "iPad7,6", // iPad (6th generation) Wi-Fi + Cellular, A10
        "iPad7,11", // iPad (7th generation) Wi-Fi, A10
        "iPad7,12", // iPad (7th generation) Wi-Fi + Cellular, A10
        "iPad8,1",
        "iPad8,2",
        "iPad8,3",
        "iPad8,4",
        "iPad8,5",
        "iPad8,6",
        "iPad8,7",
        "iPad8,8",
        "iPad8,9",
        "iPad8,10",
        "iPad8,11",
        "iPad8,12",
        "iPad11,1", // iPad mini (5th generation) Wi-Fi, A12
        "iPad11,2", // iPad mini (5th generation) Wi-Fi + Cellular, A12
        "iPad11,3", // iPad Air (3rd generation) Wi-Fi, A12
        "iPad11,4", // iPad Air (3rd generation) Wi-Fi + Cellular, A12
        "iPad11,6", // iPad (8th generation) Wi-Fi, A12
        "iPad11,7", // iPad (8th generation) Wi-Fi + Cellular, A12
        "iPad13,1", // iPad Air (4th generation) Wi-Fi, A14
        "iPad13,2", // iPad Air (4th generation) Wi-Fi + Cellular, A14
        "iPod9,1", // iPod touch (7th generation), A8
      ]
    },
    {
      firmwares: [
        "18D5030e", // 14.4 beta
        "18D5043d", // 14.4 beta 2
        "18D52-RC", // 14.4 RC
        "18D52", // 14.4
        "18D61", // 14.4.1
        "18D70" // 14.4.2
      ],
      devices: [
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
        "iPhone8,4", // iPhone SE, A9
        "iPhone9,1", // iPhone 7 (Global), A10
        "iPhone9,2", // iPhone 7 Plus (CDMA), A10
        "iPhone9,3", // iPhone 7 (GSM), A10
        "iPhone9,4", // iPhone 7 Plus (GSM), A10
        "iPad5,1", // iPad mini 4 Wi-Fi, A8
        "iPad5,2", // iPad mini 4 Wi-Fi + Cellular, A8
        "iPad5,3", // iPad Air 2 Wi-Fi, A8X
        "iPad5,4", // iPad Air 2 Wi-Fi + Cellular, A8X
        "iPad6,3", // iPad Pro (9.7-inch) Wi-Fi, A9X
        "iPad6,4", // iPad Pro (9.7-inch) Wi-Fi + Cellular, A9X
        "iPad6,7", // iPad Pro (12.9-inch) Wi-Fi, A9X
        "iPad6,8", // iPad Pro (12.9-inch) Wi-Fi + Cellular, A9X
        "iPad6,11", // iPad (5th generation) Wi-Fi, A9
        "iPad6,12", // iPad (5th generation) Wi-Fi + Cellular, A9
        "iPad7,1", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi, A10X
        "iPad7,2", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi + Cellular, A10X
        "iPad7,3", // iPad Pro 2 (10.5-inch) Wi-Fi, A10X
        "iPad7,4", // iPad Pro 2 (10.5-inch) Wi-Fi + Cellular, A10X
        "iPad7,5", // iPad (6th generation) Wi-Fi, A10
        "iPad7,6", // iPad (6th generation) Wi-Fi + Cellular, A10
        "iPad7,11", // iPad (7th generation) Wi-Fi, A10
        "iPad7,12", // iPad (7th generation) Wi-Fi + Cellular, A10
      ]
    },
    {
      firmwares: [
        "18E5140j", // 14.5 beta
        "18E5140k", // 14.5 beta
        "18E5154f", // 14.5 beta 2
        "18E5164h", // 14.5 beta 3
        "18E5178a", // 14.5 beta 4
        "18E5186a", // 14.5 beta 5
        "18E5194a", // 14.5 beta 6
        "18E5198a", // 14.5 beta 7
        "18E5199a", // 14.5 beta 8
        "18E198", // 14.5
        "18E199-RC", // 14.5 RC
        "18E199", // 14.5
        "18E212", // 14.5.1
        "18F5046e", // 14.6 beta
        "18F5046f", // 14.6 beta
        "18F5055b", // 14.6 beta 2
        "18F5065a", // 14.6 beta 3
        "18F71", // 14.6 RC
        "18F72-RC", // 14.6 RC 2
        "18F72", // 14.6
        "18G5023C", // 14.7 beta
        "18G5033e", // 14.7 beta 2
        "18G5042c", // 14.7 beta 3
        "18G5052d", // 14.7 beta 4
        "18G5063a", // 14.7 beta 5
        "18G68", // 14.7 RC
        "18G69", // 14.7
        "18G82", // 14.7.1
        "18H17", // 14.8
        "18H107", // 14.8.1
      ],
      devices: [
        "iPhone8,1", // iPhone 6s, A9
        "iPhone8,2", // iPhone 6s Plus, A9
        "iPhone8,4", // iPhone SE, A9
        "iPhone9,1", // iPhone 7 (Global), A10
        "iPhone9,2", // iPhone 7 Plus (CDMA), A10
        "iPhone9,3", // iPhone 7 (GSM), A10
        "iPhone9,4", // iPhone 7 Plus (GSM), A10
        "iPhone10,1", // iPhone 8 (CDMA), A11
        "iPhone10,2", // iPhone 8 Plus (CDMA), A11
        "iPhone10,3", // iPhone X (CDMA), A11
        "iPhone10,4", // iPhone 8 (GSM), A11
        "iPhone10,5", // iPhone 8 Plus (GSM), A11
        "iPhone10,6", // iPhone X (GSM), A11
        "iPad5,1", // iPad mini 4 Wi-Fi, A8
        "iPad5,2", // iPad mini 4 Wi-Fi + Cellular, A8
        "iPad5,3", // iPad Air 2 Wi-Fi, A8X
        "iPad5,4", // iPad Air 2 Wi-Fi + Cellular, A8X
        "iPad6,3", // iPad Pro (9.7-inch) Wi-Fi, A9X
        "iPad6,4", // iPad Pro (9.7-inch) Wi-Fi + Cellular, A9X
        "iPad6,7", // iPad Pro (12.9-inch) Wi-Fi, A9X
        "iPad6,8", // iPad Pro (12.9-inch) Wi-Fi + Cellular, A9X
        "iPad6,11", // iPad (5th generation) Wi-Fi, A9
        "iPad6,12", // iPad (5th generation) Wi-Fi + Cellular, A9
        "iPad7,1", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi, A10X
        "iPad7,2", // iPad Pro (12.9-inch) (2nd generation) Wi-Fi + Cellular, A10X
        "iPad7,3", // iPad Pro 2 (10.5-inch) Wi-Fi, A10X
        "iPad7,4", // iPad Pro 2 (10.5-inch) Wi-Fi + Cellular, A10X
        "iPad7,5", // iPad (6th generation) Wi-Fi, A10
        "iPad7,6", // iPad (6th generation) Wi-Fi + Cellular, A10
        "iPad7,11", // iPad (7th generation) Wi-Fi, A10
        "iPad7,12", // iPad (7th generation) Wi-Fi + Cellular, A10
      ]
    }
  ]
}
