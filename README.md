# Red Team – Physical Security – Covert Entry – EDC

<p align="center">
<img src="https://github.com/DavidProbinsky/RedTeam-Physical-Tools/blob/main/images/toolz.png" width="800">
</p>

> A curated list of commercially available tools commonly referenced in **authorized** physical security assessments, red teaming, and covert entry training.  
>
> **Legal & Ethics:** Use only with **written authorization** and in accordance with local laws. Many tools may be considered burglary tools in your jurisdiction. The author is **not responsible** for misuse.  
>
> **Affiliate Disclosure:** Some links are affiliate links. As an Amazon Associate, I earn from qualifying purchases at no extra cost to you.  
>
> **Pricing Note:** Prices are approximate as of **February 2026**. **Prices subject to change.**
>
> Note: These are tools I’ve actually carried and used during authorized red team operations. There are many other interesting gadgets on the market (e.g., SDRs like HackRF or RTL-SDR), but in my experience they don’t see much use in real engagements, so I’ve left them out.

---

## Table of Contents
- [Reconnaissance](#reconnaissance)
- [Lockpicking & Entry](#lockpicking--entry)
- [Bypass Tools](#bypass-tools)
- [Implants / Drops](#implants--drops)
- [EDC](#edc)
- [Additional Tools](#additional-tools)
- [Suppliers](#suppliers)
- [License](#license)
- [Link References](#link-references)
- [Total Estimated Cost](#total-estimated-cost)

---

## Reconnaissance
**Tools for observation, documentation, and situational awareness during authorized engagements.**

| Name | Purpose | Where | Price* | Notes |
|---|---|---|---:|---|
| Camera (high zoom) | Capture details from a safe distance | [Panasonic FZ80][camera] | ~$400–$450 | Alt: Consider a telescope or long-range phone lens |
| Polarized filter | Reduce glare on photos | — | — | Match your lens thread |
| Body-worn action cam | Document tests hands-free | [Insta360 GO 3][insta-go3] | ~$380–$430 | Alt: [GoPro][gopro], [DJI Osmo Action][dji-action], [Akaso Brave 7 LE][akaso] |
| Drone with camera | Aerial reconnaissance (perimeter) | [DJI Mini 4][dji-mini4] | ~$390-$460 | Alt: [DJI Neo][dji-neo] (~$300) |
| Two-way radios | Team comms without cell networks | [BaoFeng UV-5R][baofeng] | ~$30–$60 (ea) | Alt: Many other cheap alternatives |
| Flashlight | Illumination in low-light settings | [Streamlight ProTac 1L-1AA][protac] | ~$45–$70 | Alt: [Anker Bolder LC90][anker-flash] (~$30–$45) |
| Infrared Night Vision | Covert Visibility in low-light settings | [Infrared Monocular][infrared] | ~$60–$80 | Alt: Many other Infrared goggles online, prices vary |
| Borescope | Inspect tight/hidden spaces | [DEPSTECH USB Endoscope][depstech] | ~$20–$35 | Alt: [Kinpthy Endoscope][kinpthy] (~$25–$40) |
| Wi-Fi adapter | Wireless Recon & Attack | [ALFA AWUS036ACS][alfa] | ~$25–$40 | Alt: [Panda PAU06][panda] (~$20–$30) |
| RFID detector | Identify frequency of readers | [Placeholder - Coming soon][rf-card] | ~$TBD | Alt: [Dangerous Things Diagnostics Card][dt-card] (~$20) |
| DIY Cantenna | Long Range Wi-Fi | DIY build guides | ~$10–$30 | Alt: Yagi antennas |
| Weaponized RFID Reader | Clone RFID with long range | [RFID Thief DIY guide][rfid-thief] | ~$300-$800 varies, depending on price of reader | Alt: [PPE MaxiProx 5375][ppe-maxiprox] (~$850-900) |

**Estimated Subtotal (Reconnaissance):** ~$1,700 – $2,600

---

## Lockpicking & Entry
**Evaluate lock and security system resilience.**

| Name | Purpose | Where | Price* | Notes |
|---|---|---|---:|---|
| Screwdriver kit | Disassemble panels for testing | [Wera Kraftform][wera] | ~$35–$45 | Alt: Many other bit screwdrivers available |
| Tamper Bit Set | Bits for anti-tamper | [RTT Tamber Bit Set][tamperbit] | ~$10 | Alt: Many other security bit sets on Amazon |
| Multitool | Field repairs and adjustments | [Gerber Suspension][gerber] | ~$40–$60 | Alt: [Leatherman Wave+][wave] (~$110–$120) |
| Gaffer tape | Just tape for many uses | [RTT Flat Gaffer Tape][rtt-gaffer] | ~$3 | Alt: Gaffer tape at any hardware store |
| Pick sets | Lockpicking set (includes Dimple Rake) | [CI Echelon][echelon] | ~$50 | Alt: [CI][ci], [SouthOrd][southord], [TOOOL][toool], [Sparrows][sparrows] |
| Tensioners | Apply tension during picking | [CI Ergo Turner][ci-ergo] | ~$22 | Alt: [Sparrows bars][sparrows-bars] (~$10) |
| Warded picks | Warded lock pick tool | [RTT Warded Set][rtt-warded] | ~$9 | Alt: [Sparrows Warded][sparrows-warded] (~$12) |
| Comb picks | Padlock comb pick tool | [CI Quad Combs][ci-combs] | ~$35 | Alt: [Sparrows Comb][sparrows-comb] (~$14) |
| Wafer picks | Wafer pick tool | [Sparrows Wafer Set][sparrows-wafer] | ~$15 | Alt: n/a |
| Jigglers | Cabinet Jigglers | [RTT Jiggler][rtt-hamsa-jiggler] | ~$15 | Alt: [Sparrows Coffin Keys][sparrows-coffin] (~$27) |
| Dimple picks | Dimple lockpicks | [Sparrows Black Flag][sparrows-blackflag] | ~$80 | Alt: [LPW Gamechanger][lpw-gamechanger] (~$299) |
| Tubular picks | Tubular lockpick tool | [CI Tubular Lockpick][ci-tubular] | ~$85 | Alt: [RTT Tubular Lockpick][rtt-tubular] (~$80) |
| Disk pick | Test disk detainer locks | [Sparrows Disk Pick][sparrows-disk] | ~$45 | Alt: [CI Lamella ??][ci-lamella] (~$TBD) |
| Lubricant | Lube for locks | [Houdini Lock Lube][houdini] | ~$10–$15 | Alt: n/a |
| Plug spinner | Reset picked cylinders | [RTT Spinner][rtt-spinner] | ~$80 | Alt: [LPW Plug Spinner][lpw-spinner] (~$25) |
| Hinge pin tool | Tool for pins on hinges | [CI Hinge Tool][ci-hinge] | ~$18 | Alt: [RTT Hinge Tool][rtt-hinge] (~$18) |
| Padlock shims | Test shim vulnerabilities | [RTT Shims][rtt-shims] | ~$7 (5 pack) | Alt: [CI Shims][ci-shims] (~$15 - 20 pack) |
| Combo decoders | Combination lock decoders | [CI Decoder][ci-decoder] | ~$24 | Alt: [Sparrows Ultra Decoder][sparrows-ultra] (~$15) |
| Adams Rite tools | Test latch systems | [CI Door Hook][ci-doorhook] | ~$20 | Alt: [Sparrows AR Driver][sparrows-ar] (~$9) |
| Bypass drivers | American Padlock bypass | [CI Padlock Bypass Driver][ci-american] | ~$10 | Alt: [RTT American Driver][rtt-american] (~$21) |

**Estimated Subtotal (Lockpicking & Entry):** ~$700 – $1,000

---

## Bypass Tools
**Assess how doors, latches, access control, and exits resist non-destructive bypass attempts.**

| Name | Purpose | Where | Price* | Notes |
|---|---|---|---:|---|
| REX Blaster | Trigger request-to-exit sensors |  [RTT REX Blaster][rtt-rb] | ~$20 | Alt: [Can-O-Air] (~$20) 6 Pack
| Traveler’s hook | Latch manipulation | [RTT Traveler][rtt-th] | ~$6 | Alt: [CI Traveler][ci-th] (~$5) |
| Under-Door Tool (UDT) | Lever lock bypass | [Sparrows UDT][sparrows-udt] | ~$38 | Alt: [RTT UDT][rtt-udt] (~$33) |
| Camera film | For Over the Door attacks | [RTT Film][rtt-film] | ~$14 | Alt: n/a  |
| Jim tool | Latch slipping tool | [RTT Rescue Jim][rtt-jim] | ~$10 | Alt: [Sparrows Molle Jim][sparrows-jim] (~$10) |
| Crash bar tool (DDT) | For bypassing Double Doors | [Serepick DDT][serepick-ddt] | ~$16 | Alt: [Sparrows DDT][sparrows-ddt] (~$16) |
| J-tool | Thumb-turn interface access | [RTT J Tool][rtt-j] | ~$16 | Alt: [CI J Tool][ci-j] (~$20) |
| Mica shims | Strike bypass testing | [CI Mica Shims][ci-mica] | ~$18 | Alt:  [RTT Door Shims][rtt-doorshim] (~$15) |
| Strong Magnet | Solenoid tampering | [n/a][n/a] |  | Alt: n/a |
| Bump keys | For performing Bump Key attack | [Sparrows Bump Keys][sparrows-bump] | ~$30 | Alt: [CI Bump Keys][ci-bump] (~$25) |
| Slip Jim | Rapid access tool (aka seaRAT) | [Sparrows Slip Jim][sparrows-slipjim] | ~$15 | Alt: n/a |
| Air wedge | For Door/frame separation | [CI Air Wedge][ci-air] | ~$12 | Alt: [Sparrows Quick Wedge][sparrows-wedge] (~$10) |
| Proxmark3 RDV4 | RFID testing hardware | [Hacker Warehouse Proxmark][hw-proxmark] | ~$360 | Alt: n/a |
| Service keys | Keys for Keyed-alike locks | [Hooligan Keys - DTH][hk-dth] | ~$85 | Alt: n/a  |
| Panel/cabinet keys | Assortment of different keys | [Hooligan Keys][hk-main] | n/a | Alt: [CI assorted Keys][ci-keys] |
| Elevator keys | Assortment of elevator keys | [Sparrows Elevator Keys][sparrows-elev] | ~$56 | Alt: n/a  |

**Estimated Subtotal (Bypass Tools):** ~$850 - $950

---

## Implants / Drops
**Test how environments respond to concealed or malicious devices.**

| Name | Purpose | Where | Price* | Notes |
|---|---|---|---:|---|
| Rubber Ducky | USB HID payload testing | [Hak5 Ducky][hak5-ducky] | ~$100 | Alt: Building a "Ducky" with a Digispark (likely less than ~$5) |
| Bash Bunny | HID + network payload testing | [Hak5 Bunny][hak5-bunny] | ~$200 |   |
| LAN Turtle | Network implant testing | [Hak5 Turtle][hak5-turtle] | ~$90 |   |
| Shark Jack | Network reconnaissance tests | [Hak5 Shark][hak5-shark] | ~$120 | I recommend going for the version with the cable, and not rely on a battery |
| Key Croc | Keylogger & Payload testing | [Hak5 Croc][hak5-croc] | ~$200 |   |
| Wi-Fi Pineapple | Wireless pen-testing platform | [Hak5 Wi-Fi Pineapple][hak5-wifi] | ~$240 | If planning on doing Walkthrough assessments, the Enterprise version (~$850) is recommended  |
| O.MG Plug | Covert USB implant | [Hak5 OMG Cable][hak5-omg] | ~$115 |   |
| ESPKey | Access control implant | [RTT ESPKey][rtt-espkey] | ~$79 |   |

**Estimated Subtotal (Implants/Drops):** ~$1,150 - $2,000

---

## EDC
**Compact tools suitable for everyday carry and quick tasks.**

| Name | Purpose | Where | Price* | Notes |
|---|---|---|---:|---|
| Flipper Zero | Multi-platform hacking device | [Flipper Zero][flipper] | ~$200 | Alt: n/a |
| Hak5 Wi-Fi Pager | Compact Wi-Fi test tool | [Hak5 Wi-Fi Pager][hak5-pager] | ~$320 |   |
| Covert Belt | Belt with pocket for Discreet carry of lockpicks | [Covert pocket belt][amazon-belt] | ~$15-20 |   |
| Titanium Bogota Picks | Compact Titanium lock-set for EDC, and titanium is not flagged by regular metal detectors | [Serepick Bogota Pi][serepick-bogota] | ~$45 |   |
| Chameleon Ultra | Similar to the Proxmark for RFID attacks | [Hw - Chameleon Ultra][chameleon-ultra] | ~$130 | Alt: n/a  |
| Covert Companion Pro | Modular pick + turner | [Covert Companion Pro][ci-comp-pro] | ~$150 | Alt: older version of the Covert Companion (~$50) |  
| RFID Bracelet | Used as a re-writable RFID card | [RTT RFID Bracelet][rtt-bracelet] | ~$24 | Alt: n/a |
| Pwnagotchi | Used as a Wifi tool, but Im replacing it with the WiFi Pager from Hak5 | — | — | Alt: n/a |
| Phone + Nethunter | OnePlus 8 Pro with Nethunter, serves as a pentesting phone | — | Prices vary, depending on cost of phone | Alt: n/a |


**Estimated Subtotal (EDC):** ~$800 – $1200

---

## Additional Tools
**Support gear for safety and mobility.**

| Name | Purpose | Where | Price* | Notes |
|---|---|---|---:|---|
| Compact ladder | Telescoping ladder for elevated access | [Telescoping Ladder][ladder] | ~$90–$160 | Alt: n/a |
| Gloves | Hand and grip protection | — | Prices vary | Alt: n/a |
| Footwear | Foot protection for indoor/outdoor | — | — | Alt: n/a |
| Attire | Avoid Camo or tactical clothing | — | — | Always try to blend in with your environment |
| Wool blanket | Soft barrier mitigation (e.g., barbed wire) | — | Prices vary | Alt: n/a |
| First-aid kit | On-site injury treatment | — | Prices vary | Alt: n/a |
| Folding fence climbers | Climb perimeter fences quickly | [RTT Folding Fence Climbers][fence-climbers] | ~$375 | Lightweight |

**Estimated Subtotal (Additional Tools):** ~$500 – $1000

---

## Suppliers
- [Sparrows][sparrows] · [Red Team Tools][rtt] · [Covert Instruments][ci] · [Serepick][serepick] · [Hooligan Keys][hk-main] · [SouthOrd][southord] · [Hak5][hak5] · [Dangerous Things][dangerous] · [LockPickWorld][lpw] · [TOOOL][toool] · [Practical Physical Exploitation][ppe] · [Hacker Warehouse][hw]

---

## License
MIT — see the [LICENSE](LICENSE) file.

---

## Link References

[camera]: https://www.amazon.com/dp/B01MS16V42?tag=redteam0a-20  
[insta-go3]: https://www.amazon.com/dp/B0D3WLV9Q1?tag=redteam0a-20  
[gopro]: https://gopro.com  
[dji-action]: https://www.dji.com/osmo-action  
[akaso]: https://www.amazon.com/dp/B08B3MFDQL?tag=redteam0a-20  
[dji-mini4]: https://www.amazon.com/dp/B0CXJCXN17?tag=redteam0a-20  
[dji-neo]: https://www.amazon.com/dp/B0DDS1368S?tag=redteam0a-20  
[baofeng]: https://www.amazon.com/dp/B00MAULSOK?tag=redteam0a-20    
[protac]: https://www.amazon.com/dp/B01G75P1SC?tag=redteam0a-20  
[anker-flash]: https://www.amazon.com/dp/B01KH2JP5G?tag=redteam0a-20
[infrared]: https://www.amazon.com/dp/B09SZ2R68B?tag=redteam0a-20
[depstech]: https://www.amazon.com/dp/B0836XWPJH?tag=redteam0a-20  
[kinpthy]: https://www.amazon.com/dp/B0C4V5LWWL?tag=redteam0a-20  
[alfa]: https://www.amazon.com/dp/B0752CTSGD?tag=redteam0a-20  
[panda]: https://www.amazon.com/dp/B08NPX2X4Z?tag=redteam0a-20  
[dt-card]: https://dangerousthings.com/product/rdc/
[rf-card]: https://redteam.vip/
[rfid-thief]: https://krptyk.com/2023/10/21/long-range-rfid-thief/
[ppe-maxiprox]: https://store.physicalexploit.com/products/hid-maxiprox-5375-longrange-wiegand-data-interpreter

[wera]: https://www.amazon.com/dp/B001HSNHM2?tag=redteam0a-20  
[tamperbit]: https://www.redteamtools.com/best-tamper-bit-set/
[gerber]: https://www.amazon.com/dp/B000EDPT9K?tag=redteam0a-20  
[wave]: https://www.amazon.com/dp/B000JCN0FG?tag=redteam0a-20  
[rtt-gaffer]: https://www.redteamtools.com/flat-gaffer-tape

[sparrows]: https://www.sparrowslockpicks.com  
[rtt]: https://redteamtools.com  
[ci]: https://covertinstruments.com  
[southord]: https://www.southord.com  
[serepick]: https://serepick.com  
[hk-main]: https://www.hooligankeys.com  
[hak5]: https://hak5.org  
[dangerous]: https://dangerousthings.com  
[lpw]: https://www.lockpickworld.com  
[toool]: https://toool.us  
[ppe]: https://physicalexploit.com/
[hw]: https://hackerwarehouse.com/

[echelon]: https://covertinstruments.com/products/echelon-pick-set
[ci-ergo]: https://covertinstruments.com/products/ergo-turner-set  
[sparrows-bars]: https://www.sparrowslockpicks.com/products/flatbars-knurled
[rtt-warded]: https://www.redteamtools.com/warded-lock-pick-set
[sparrows-warded]: https://www.sparrowslockpicks.com/products/sparrows-warded-pick-set
[ci-combs]: https://covertinstruments.com/products/quad-comb-set  
[sparrows-comb]: https://www.sparrowslockpicks.com/products/comb-bar-set 
[sparrows-wafer]: https://www.sparrowslockpicks.com/products/wafer-picks-set
[rtt-hamsa-jiggler]: https://www.redteamtools.com/hamsa-jigglers/  
[sparrows-coffin]: https://www.sparrowslockpicks.com/products/coffin-keys-1  
[sparrows-blackflag]: https://www.sparrowslockpicks.com/products/black-flag-picks  
[lpw-gamechanger]: https://www.lockpickworld.com/products/universal-dimple-lock-picking-tool-complete-edition
[ci-tubular]: https://covertinstruments.com/products/covert-tubular-lock-pick
[rtt-tubular]: https://www.redteamtools.com/convertible-quick-connect-tubular-lock-pick  
[sparrows-disk]: https://www.sparrowslockpicks.com/products/sparrows-disc-pick
[ci-lamella]: https://covertinstruments.com/products/lamella
[houdini]: https://www.amazon.com/dp/B00C5JFKKE?tag=redteam0a-20  
[rtt-spinner]: https://www.redteamtools.com/lock-pick-plug-spinner  
[lpw-spinner]: https://www.lockpickworld.com/products/goso-pen-style-plug-spinner  
[rtt-hinge]: https://www.redteamtools.com/hammerless-hinge-tool  
[ci-hinge]: https://covertinstruments.com/products/improved-hammerless-hinge-pin-removal-tool  
[rtt-shims]: https://www.redteamtools.com/padlock-shims-5-pack  
[ci-shims]: https://covertinstruments.com/products/padlock-shims  
[ci-decoder]: https://covertinstruments.com/products/decoder-bundle  
[sparrows-ultra]: https://www.sparrowslockpicks.com/products/ultra-lock-decoder  
[ci-doorhook]: https://covertinstruments.com/products/commercial-door-hook  
[sparrows-ar]: https://www.sparrowslockpicks.com/products/adams-rite-bypass-driver-1 
[ci-american]: https://covertinstruments.com/products/padlock-bypass-driver 
[rtt-american]: https://www.redteamtools.com/american-padlock-bypass-tool/

[rtt-rb]: https://www.redteamtools.com/rex-blaster-nozzle-head-gen-3/
[Can-O-Air]: https://www.amazon.com/Office-Depot-Cleaning-Duster-OD101523/dp/B00DB8NSG6/ref=sr_1_3?sr=8-3
[rtt-th]: https://www.redteamtools.com/traveler-hook-steel
[ci-th]: https://covertinstruments.com/products/traveler-hook 
[sparrows-udt]: https://www.sparrowslockpicks.com/products/the-stretcher-under-door-tool
[rtt-udt]: https://www.redteamtools.com/under-door-level-lock-tool
[rtt-film]: https://www.redteamtools.com/film-canister  
[rtt-jim]: https://www.redteamtools.com/rescue-jim/  
[sparrows-jim]: https://www.sparrowslockpicks.com/products/molle-jim-bypass  
[serepick-ddt]: https://www.serepick.com/products/ddt-j-tool  
[sparrows-ddt]: https://www.sparrowslockpicks.com/products/ddt  
[rtt-j]: https://www.redteamtools.com/J-Tool-for-Thumb-Turn-Locks  
[ci-j]: https://covertinstruments.com/products/j-tool  
[rtt-doorshim]: https://www.redteamtools.com/rtt-door-shims/  
[ci-mica]: https://covertinstruments.com/products/super-mica-shims

[sparrows-bump]: https://www.sparrowslockpicks.com/products/sparrows-bump-keys  
[ci-bump]: https://covertinstruments.com/products/complete-bump-key-bundle
[sparrows-slipjim]: https://www.sparrowslockpicks.com/products/slip-jim  
[ci-air]: https://covertinstruments.com/products/air-wedge  
[sparrows-wedge]: https://www.sparrowslockpicks.com/products/quick-wedge  
[hw-proxmark]: https://hackerwarehouse.com/product/proxmark3-rdv4-kit/ 
[hk-dth]: https://www.hooligankeys.com/shop/Devious-Troublesome-Hooligan-p259460384
[sparrows-elev]: https://www.sparrowslockpicks.com/products/fire-service-elevator-key-set  
[ci-keys]: https://covertinstruments.com/search?q=keys

[hak5-ducky]: https://hak5.org/products/usb-rubber-ducky  
[hak5-bunny]: https://hak5.org/products/bash-bunny  
[hak5-turtle]: https://hak5.org/products/lan-turtle  
[hak5-shark]: https://hak5.org/products/shark-jack  
[hak5-croc]: https://hak5.org/products/key-croc  
[hak5-wifi]: https://hak5.org/products/wi-fi-pineapple  
[hak5-omg]: https://hak5.org/products/omg-plug  
[hak5-pager]: https://hak5.org/products/wifi-pineapple-pager  
[rtt-espkey]: https://www.redteamtools.com/espkey  

[flipper]: https://shop.flipperzero.one/  
[amazon-belt]: https://www.amazon.com/dp/B07R6X6XSY??tag=redteam0a-20 
[serepick-bogota]: https://www.serepick.com/products/bogota-pi
[chameleon-ultra]: https://hackerwarehouse.com/product/chameleon-ultra/
[ci-comp-pro]: https://covertinstruments.com/products/covert-companion-pro 
[rtt-bracelet]: https://www.redteamtools.com/hybrid-rfid-wristband-credential-t5577-compatible-magic-s50-uid-changable/

[ladder]: https://www.amazon.com/dp/B09SKZ7WD7?tag=redteam0a-20  
[fence-climbers]: https://www.redteamtools.com/rtt-folding-fence-climbers/

---

## Total Estimated Cost

If you purchased **every primary item** listed above (as of Sept 2025):  
**~$5,700 – $8,800**  

*Prices vary by region, vendor, and availability. Prices subject to change.*
