export const clinicData = {
  name: "Mclinic Georgia",
  category: "სტომატოლოგიური კლინიკა",
  phone: "+995 593 66 86 81",
  phoneHref: "tel:+995593668681",
  email: "mclinicgeorgia@gmail.com",
  emailHref: "mailto:mclinicgeorgia@gmail.com",
  address: "მიხეილ ასათიანის 10, Tbilisi Gardens Tower 2, თბილისი 0186, საქართველო",
  shortAddress: "მიხეილ ასათიანის 10, Tbilisi Gardens Tower 2",
  googleMapsUrl: "https://maps.app.goo.gl/mQ6Tnmm5fAk9JBgp6",
  website: "https://microscope.ge/mclinic",

  coordinates: {
    latitude: 41.7272677,
    longitude: 44.749239,
  },

  rating: {
    stars: 4.8,
    reviewCount: 245,
  },

  hours: [
    { day: "ორშაბათი", time: "10:00 - 20:00" },
    { day: "სამშაბათი", time: "10:00 - 20:00" },
    { day: "ოთხშაბათი", time: "10:00 - 20:00" },
    { day: "ხუთშაბათი", time: "10:00 - 20:00" },
    { day: "პარასკევი", time: "10:00 - 20:00" },
    { day: "შაბათი", time: "11:00 - 18:00" },
    { day: "კვირა", time: "დაკეტილია" },
  ],

  services: {
    aesthetic: [
      "ესთეტიკური მკურნალობა",
      "კოსმეტიკური სტომატოლოგია",
      "ICON მეთოდი",
      "გვირგვინის მოთავსება",
    ],
    surgery: ["იმპლანტები", "სიბრძნის კბილის ამოღება", "ძვლის გრაფტი"],
    orthodontics: ["ბრეკეტები", "ორთოდონტიული მკურნალობა", "თანკბილვის კორექცია"],
    general: ["კარიესის მკურნალობა", "ბავშვთა სტომატოლოგია", "გადაუდებელი მომსახურება"],
  },

  sidebarServices: [
    "ზოგადი სტომატოლოგია",
    "ესთეტიკური სტომატოლოგია",
    "ბავშვთა სტომატოლოგია",
    "იმპლანტაცია და ქირურგია",
    "ორთოდონტია",
    "გადაუდებელი მომსახურება",
  ],

  amenities: [
    "ეტლით მოსარგებლეთათვის ადაპტირებული შესასვლელი",
    "ეტლით მოსარგებლეთათვის ადაპტირებული საპირფარეშო",
    "ეტლით მოსარგებლეთათვის ადაპტირებული დასაჯდომი სივრცე",
    "გენდერულად ნეიტრალური საპირფარეშო",
    "უფასო პარკინგი",
    "ქუჩის უფასო პარკინგი",
    "ადგილზე პარკინგი",
    "ვიზიტი წინასწარი შეთანხმებით",
  ],

  reviews: [
    {
      author: "Anna Pukhashvili",
      rating: 5,
      text: "პერსონალი პროფესიონალური, თავაზიანი და ყურადღებიანია. კლინიკა სუფთა, ორგანიზებული და თანამედროვე ტექნოლოგიებით აღჭურვილია.",
    },
    {
      author: "Tanya Semizhon",
      rating: 5,
      text: "ექიმი ნინო ნემსიწვერიძე ძალიან ნაზი, ზუსტი და მზრუნველი პროფესიონალია.",
    },
    {
      author: "Anano Edzgveradze",
      rating: 5,
      text: "სუფთა და მშვიდი გარემო, დროული და ხარისხიანი მომსახურება, კეთილი და მზრუნველი ექიმები.",
    },
  ],

  images: {
    interior: "https://lh5.googleusercontent.com/p/AF1QipMFmDqYtJQ12hw-7KHBG2V5x-FbZShfSzjXxWcb=s1000",
    exterior: "https://lh5.googleusercontent.com/p/AF1QipObZzQLCyMrmFtlPUY5p4LCOyGi5mH_8hmOoOLr=s1000",
    product: "https://lh5.googleusercontent.com/p/AF1QipP-5ip3sNjsBwb-TPKaTNe1C3EhUqYuXr6IDAAZ=s1000",
  },

  socialLinks: {
    facebook: "https://www.facebook.com/Mclinic.georgia",
    instagram: "https://www.instagram.com/mclinic_georgia/",
    youtube: "#",
    whatsapp: "#",
  },
};

export const navLinks = [
  { label: "მთავარი", to: "/" },
  { label: "სერვისები", to: "/services" },
  { label: "შედეგები", to: "/results" },
  { label: "კლინიკის შესახებ", to: "/about" },
  { label: "კონტაქტი", to: "/contact" },
];
