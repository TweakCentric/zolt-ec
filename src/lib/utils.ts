import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Federal Capital Territory", 
  "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", 
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
  "Sokoto", "Taraba", "Yobe", "Zamfara"
]

export const citiesByState: { [key: string]: string[] } = {
  "Abia": ["Umuahia", "Aba", "Arochukwu", "Ohafia"],
  "Adamawa": ["Yola", "Mubi", "Numan", "Ganye"],
  "Akwa Ibom": ["Uyo", "Ikot Ekpene", "Eket", "Oron"],
  "Anambra": ["Awka", "Onitsha", "Nnewi", "Ekwulobia"],
  "Bauchi": ["Bauchi", "Azare", "Misau", "Jama'are"],
  "Bayelsa": ["Yenagoa", "Sagbama", "Brass", "Ekeremor"],
  "Benue": ["Makurdi", "Gboko", "Katsina-Ala", "Otukpo"],
  "Borno": ["Maiduguri", "Biu", "Gwoza", "Bama"],
  "Cross River": ["Calabar", "Ogoja", "Ikom", "Obudu"],
  "Delta": ["Asaba", "Warri", "Sapele", "Ughelli"],
  "Ebonyi": ["Abakaliki", "Afikpo", "Onueke", "Ezza"],
  "Edo": ["Benin City", "Auchi", "Ekpoma", "Uromi"],
  "Ekiti": ["Ado Ekiti", "Ikere", "Ilawe", "Ijero"],
  "Enugu": ["Enugu", "Nsukka", "Oji River", "Awgu"],
  "Federal Capital Territory": ["Abuja", "Gwagwalada", "Kuje", "Abaji"],
  "Gombe": ["Gombe", "Billiri", "Kaltungo", "Dukku"],
  "Imo": ["Owerri", "Orlu", "Okigwe", "Mbaise"],
  "Jigawa": ["Dutse", "Hadejia", "Gumel", "Kazaure"],
  "Kaduna": ["Kaduna", "Zaria", "Kafanchan", "Soba"],
  "Kano": ["Kano", "Wudil", "Gwarzo", "Rano"],
  "Katsina": ["Katsina", "Daura", "Funtua", "Malumfashi"],
  "Kebbi": ["Birnin Kebbi", "Argungu", "Yauri", "Zuru"],
  "Kogi": ["Lokoja", "Okene", "Idah", "Kabba"],
  "Kwara": ["Ilorin", "Offa", "Omu-Aran", "Lafiagi"],
  "Lagos": ["Lagos Island", "Ikeja", "Surulere", "Victoria Island", "Lekki", "Ikorodu", "Badagry", "Epe"],
  "Nasarawa": ["Lafia", "Keffi", "Akwanga", "Nasarawa"],
  "Niger": ["Minna", "Bida", "Kontagora", "Suleja"],
  "Ogun": ["Abeokuta", "Sagamu", "Ijebu Ode", "Ilaro"],
  "Ondo": ["Akure", "Ondo", "Owo", "Ikare"],
  "Osun": ["Osogbo", "Ile Ife", "Ilesha", "Ede"],
  "Oyo": ["Ibadan", "Ogbomoso", "Oyo", "Iseyin"],
  "Plateau": ["Jos", "Bukuru", "Shendam", "Pankshin"],
  "Rivers": ["Port Harcourt", "Obio-Akpor", "Okrika", "Bonny"],
  "Sokoto": ["Sokoto", "Tambuwal", "Gwadabawa", "Bodinga"],
  "Taraba": ["Jalingo", "Wukari", "Bali", "Gembu"],
  "Yobe": ["Damaturu", "Potiskum", "Gashua", "Nguru"],
  "Zamfara": ["Gusau", "Kaura Namoda", "Talata Mafara", "Zurmi"]
}

export const getCitiesForState = (stateName: string): string[] => {
  return citiesByState[stateName] || []
}
