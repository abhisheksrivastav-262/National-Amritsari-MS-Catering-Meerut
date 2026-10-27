export type MenuItem={id:string;name:string;category:string;sourceName?:string;description:string;image?:string};
const groups:Record<string,string[]>={
'Special Breads':['Sheer Maal','Taftan','Bakarkhani'],
Parathas:['Feny Paratha','Sigadha Paratha','Mooli Paratha','Pudina Paratha','Methi Paratha','Makhni Paratha','Mirchi Paratha','Palak Paratha','Bathuwa Paratha','Fruit Paratha','Churi Paratha','Egg Paratha','Ulte Tawe Ka Paratha','Kerala Paratha','Gobhi Paratha','Malabari Paratha','Tawa Paratha','Gur Ka Paratha','Ganne Ka Paratha','Plain Paratha','Green Chilli Paratha','Ginger & Coriander Paratha'],
'Chilla & Agra Paratha':['Chilla','Agra Paratha'],
Kulcha:['Gilafi Kulcha','Achari Kulcha','Amritsari Kulcha','Paneer Kulcha','Aloo Payaz Kulcha','Mushroom Kulcha','Onion Kulcha','Mix Kulcha','Mutter Kulcha','Tomato Kulcha','Noodles Kulcha','Loki Kulcha','Haryali Kulcha','Gajri Kulcha','Raw Papaya Kulcha','Mutter Sweet Corn Kulcha','Gucchi Kulcha','Apple Kulcha','Angoori Kulcha','Khajoori Kulcha'],
Roti:['Missi Roti','Biscuit Roti','Tiranga Rooti','Lal Roti','Besni Roti','Makka Roti','Bajra Roti','Hari Roti','Khameeri Roti','Tandoori Roti','Lal Rumali Roti','Hari Rumali Roti','Kela Rumali Roti','Rumali Roti','Butter Rumali Roti','Oats Brand Fulka Roti','Veet Brands Fulka Roti','Kurkuri Roti','Khasta Roti','Urad Daal Ki Roti','Chocolatey Roti'],
Naan:['Khandhari Nan','Mughlai Nan','Pizza Nan','Afgani Nan','Cheez Nan','Lemon Nan','Butter Nan','Stuff Nan','Kalonji Nan','Babby Nan','Plain Nan','Family Nan','Crispy Nan','Fruit Nan','Chur Chur Nan','Garlic Nan','Onion Nan','Bedi Nan','Pista Nan','Peshawri Nan','Kishmish Nan','Coriander Nan','Green Coriander Nan','Mirchi Coriander Nan','Mix Veg Nan','Chatpata Nan','Mango Nan','Pineapple Nan','Zafrani Nan','White Til Nan','Coconut Nan']};
const corrections:Record<string,string>={'Cheez Nan':'Cheese Naan','Stuff Nan':'Stuffed Naan','Babby Nan':'Baby Naan','Peshawri Nan':'Peshawari Naan','Kishmish Nan':'Kishmish Naan'};
const common:Record<string,string>={
 'Special Breads':'A traditional bread from our specialty collection.',Parathas:'A paratha variety from the National Amritsari menu.',
 'Chilla & Agra Paratha':'From our chilla and Agra paratha selection.',Kulcha:'A kulcha variety from our menu.',Roti:'A roti variety from our menu.',Naan:'A naan variety from our menu.'};
export const categories=Object.keys(groups);
export const menuItems:MenuItem[]=Object.entries(groups).flatMap(([category,names])=>names.map((sourceName,index)=>{
 const name=corrections[sourceName]||sourceName;
 return {id:`${category.toLowerCase().replaceAll(/[^a-z0-9]+/g,'-')}-${index}`,name,sourceName:corrections[sourceName]?sourceName:undefined,category,description:common[category]};}));
export const featured=['Amritsari Kulcha','Sheer Maal','Taftan','Bakarkhani','Biscuit Roti','Kalonji Nan'];
