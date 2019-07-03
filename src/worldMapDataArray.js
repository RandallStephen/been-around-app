const worldMapDataArray = [
  { id: 1, code: "BD", name: "Bangladesh" },
  { id: 2, code: "BE", name: "Belgium" },
  { id: 3, code: "BF", name: "Burkina Faso" },
  { id: 4, code: "BG", name: "Bulgaria" },
  { id: 5, code: "BA", name: "Bosnia and Herzegovina" },
  { id: 6, code: "BN", name: "Brunei" },
  { id: 7, code: "BO", name: "Bolivia" },
  { id: 8, code: "JP", name: "Japan" },
  { id: 9, code: "BI", name: "Burundi" },
  { id: 10, code: "BJ", name: "Benin" },
  { id: 11, code: "BT", name: "Bhutan" },
  { id: 12, code: "JM", name: "Jamaica" },
  { id: 13, code: "BW", name: "Botswana" },
  { id: 14, code: "BR", name: "Brazil" },
  { id: 15, code: "BS", name: "Bahamas" },
  { id: 16, code: "BY", name: "Belarus" },
  { id: 17, code: "BZ", name: "Belize" },
  { id: 18, code: "RU", name: "Russia" },
  { id: 19, code: "RW", name: "Rwanda" },
  { id: 20, code: "RS", name: "Serbia" },
  { id: 21, code: "TL", name: "Timor-Leste" },
  { id: 22, code: "TM", name: "Turkmenistan" },
  { id: 23, code: "TJ", name: "Tajikistan" },
  { id: 24, code: "RO", name: "Romania" },
  { id: 25, code: "GW", name: "Guinea-Bissau" },
  { id: 26, code: "GT", name: "Guatemala" },
  { id: 27, code: "GR", name: "Greece" },
  { id: 28, code: "GQ", name: "Equatorial Guinea" },
  { id: 29, code: "GY", name: "Guyana" },
  { id: 30, code: "GE", name: "Georgia" },
  { id: 31, code: "GB", name: "United Kingdom" },
  { id: 32, code: "GA", name: "Gabon" },
  { id: 33, code: "GN", name: "Guinea" },
  { id: 34, code: "GM", name: "Gambia" },
  { id: 35, code: "GL", name: "Greenland" },
  { id: 36, code: "GH", name: "Ghana" },
  { id: 37, code: "OM", name: "Oman" },
  { id: 38, code: "TN", name: "Tunisia" },
  { id: 39, code: "JO", name: "Jordan" },
  { id: 40, code: "HR", name: "Croatia" },
  { id: 41, code: "HT", name: "Haiti" },
  { id: 42, code: "HU", name: "Hungary" },
  { id: 43, code: "HN", name: "Honduras" },
  { id: 44, code: "PR", name: "Puerto Rico" },
  { id: 45, code: "PS", name: "Palestine" },
  { id: 46, code: "PT", name: "Portugal" },
  { id: 47, code: "PY", name: "Paraguay" },
  { id: 48, code: "PA", name: "Panama" },
  { id: 49, code: "PG", name: "Papua New Guinea" },
  { id: 50, code: "PE", name: "Peru" },
  { id: 51, code: "PK", name: "Pakistan" },
  { id: 52, code: "PH", name: "Philippines" },
  { id: 53, code: "PL", name: "Poland" },
  { id: 54, code: "ZM", name: "Zambia" },
  { id: 55, code: "EH", name: "Western Sahara" },
  { id: 56, code: "EE", name: "Estonia" },
  { id: 57, code: "EG", name: "Egypt" },
  { id: 58, code: "ZA", name: "South Africa" },
  { id: 59, code: "EC", name: "Ecuador" },
  { id: 60, code: "IT", name: "Italy" },
  { id: 61, code: "VN", name: "Vietnam" },
  { id: 62, code: "SB", name: "Solomon Island" },
  { id: 63, code: "ET", name: "Ethiopia" },
  { id: 64, code: "SO", name: "Somalia" },
  { id: 65, code: "ZW", name: "Zimbabwe" },
  { id: 66, code: "ES", name: "Spain" },
  { id: 67, code: "ER", name: "Eritrea" },
  { id: 68, code: "ME", name: "Montenegro" },
  { id: 69, code: "MD", name: "Moldova" },
  { id: 70, code: "MG", name: "Madagascar" },
  { id: 71, code: "MA", name: "Morocco" },
  { id: 72, code: "UZ", name: "Uzbekistan" },
  { id: 73, code: "MM", name: "Myanmar" },
  { id: 74, code: "ML", name: "Mali" },
  { id: 75, code: "MN", name: "Mongolia" },
  { id: 76, code: "MK", name: "Macedonia" },
  { id: 77, code: "MW", name: "Malawi" },
  { id: 78, code: "MR", name: "Mauritania" },
  { id: 79, code: "UG", name: "Uganda" },
  { id: 80, code: "MY", name: "Malaysia" },
  { id: 81, code: "MX", name: "Mexico" },
  { id: 82, code: "IL", name: "Israel" },
  { id: 83, code: "FR", name: "France" },
  { id: 84, code: "XS", name: "Somaliland" },
  { id: 85, code: "FI", name: "Finland" },
  { id: 86, code: "FJ", name: "Fiji" },
  { id: 87, code: "FK", name: "Falkland Island" },
  { id: 88, code: "NI", name: "Nicaragua" },
  { id: 89, code: "NL", name: "Netherlands" },
  { id: 90, code: "NO", name: "Norway" },
  { id: 91, code: "NA", name: "Namibia" },
  { id: 92, code: "VU", name: "Vanuatu" },
  { id: 93, code: "NC", name: "New Caledonia" },
  { id: 94, code: "NE", name: "Niger" },
  { id: 95, code: "NG", name: "Nigeria" },
  { id: 96, code: "NZ", name: "New Zealand" },
  { id: 97, code: "NP", name: "Nepal" },
  { id: 98, code: "XK", name: "Kosovo" },
  { id: 99, code: "CI", name: "Côte d'Ivoire" },
  { id: 100, code: "CH", name: "Switzerland" },
  { id: 101, code: "CO", name: "Colombia" },
  { id: 102, code: "CN", name: "China" },
  { id: 103, code: "CM", name: "Cameroon" },
  { id: 104, code: "CL", name: "Chile" },
  { id: 105, code: "XC", name: "Northern Cyprus" },
  { id: 106, code: "CA", name: "Canada" },
  { id: 107, code: "CG", name: "Congo" },
  { id: 108, code: "CF", name: "Central African Republic" },
  { id: 109, code: "CD", name: "Democratic Republic Congo" },
  { id: 110, code: "CZ", name: "Czech Republic" },
  { id: 111, code: "CY", name: "Cyprus" },
  { id: 112, code: "CR", name: "Costa Rica" },
  { id: 113, code: "CU", name: "Cuba" },
  { id: 114, code: "SZ", name: "Swaziland" },
  { id: 115, code: "SY", name: "Syria" },
  { id: 116, code: "KG", name: "Kyrgyzstan" },
  { id: 117, code: "KE", name: "Kenya" },
  { id: 118, code: "SS", name: "South Sudan" },
  { id: 119, code: "SR", name: "Suriname" },
  { id: 120, code: "KH", name: "Cambodia" },
  { id: 121, code: "SV", name: "El Salvador" },
  { id: 122, code: "SK", name: "Slovakia" },
  { id: 123, code: "KR", name: "Korea" },
  { id: 124, code: "SI", name: "Slovenia" },
  { id: 125, code: "KP", name: "Democratic Republic Korea" },
  { id: 126, code: "KW", name: "Kuwait" },
  { id: 127, code: "SN", name: "Senegal" },
  { id: 128, code: "SL", name: "Sierra Leone" },
  { id: 129, code: "KZ", name: "Kazakhstan" },
  { id: 130, code: "SA", name: "Saudi Arabia" },
  { id: 131, code: "SE", name: "Sweden" },
  { id: 132, code: "SD", name: "Sudan" },
  { id: 133, code: "DO", name: "Dominican Republic" },
  { id: 134, code: "DJ", name: "Djibouti" },
  { id: 135, code: "DK", name: "Denmark" },
  { id: 136, code: "DE", name: "Germany" },
  { id: 137, code: "YE", name: "Yemen" },
  { id: 138, code: "DZ", name: "Algeria" },
  { id: 139, code: "US", name: "United States" },
  { id: 140, code: "UY", name: "Uruguay" },
  { id: 141, code: "LB", name: "Lebanon" },
  { id: 142, code: "LA", name: "Lao PDR" },
  { id: 143, code: "TW", name: "Taiwan" },
  { id: 144, code: "TT", name: "Trinidad and Tobago" },
  { id: 145, code: "TR", name: "Turkey" },
  { id: 146, code: "LK", name: "Sri Lanka" },
  { id: 147, code: "LV", name: "Latvia" },
  { id: 148, code: "LT", name: "Lithuania" },
  { id: 149, code: "LU", name: "Luxembourg" },
  { id: 150, code: "LR", name: "Liberia" },
  { id: 151, code: "LS", name: "Lesotho" },
  { id: 152, code: "TH", name: "Thailand" },
  { id: 153, code: "TF", name: "French Southern Antarctic Lands" },
  { id: 154, code: "TG", name: "Togo" },
  { id: 155, code: "TD", name: "Chad" },
  { id: 156, code: "LY", name: "Libya" },
  { id: 157, code: "AE", name: "United Arab Emirates" },
  { id: 158, code: "VE", name: "Venezuela" },
  { id: 159, code: "AF", name: "Afghanistan" },
  { id: 160, code: "IQ", name: "Iraq" },
  { id: 161, code: "IS", name: "Iceland" },
  { id: 162, code: "IR", name: "Iran" },
  { id: 163, code: "AM", name: "Armenia" },
  { id: 164, code: "AL", name: "Albania" },
  { id: 165, code: "AO", name: "Angola" },
  { id: 166, code: "AR", name: "Argentina" },
  { id: 167, code: "AU", name: "Australia" },
  { id: 168, code: "AT", name: "Austria" },
  { id: 169, code: "IN", name: "India" },
  { id: 170, code: "TZ", name: "Tanzania" },
  { id: 171, code: "AZ", name: "Azerbaijan" },
  { id: 172, code: "IE", name: "Ireland" },
  { id: 173, code: "ID", name: "Indonesia" },
  { id: 174, code: "UA", name: "Ukraine" },
  { id: 175, code: "QA", name: "Qatar" },
  { id: 176, code: "MZ", name: "Mozambique" }
];
export default worldMapDataArray;
