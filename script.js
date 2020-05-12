let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let homeButton= document.querySelector("#home")

let students=[
 {
profileImage:"https://mail.google.com/mail/u/0?ui=2&ik=620a0b717d&attid=0.1&permmsgid=msg-f:1662187997454246404&th=1711472d522da204&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-k-92xZqqToQyxyCiisDuBhVvACsRTqGIipbTO8vt7VYPyvJx5AQthQJrXInv2FyiIVG81i-uqZD7dsrwqqI5XYgH6iHMNkm-nzGg1oHfnm-kqsa_RxMMbwOE&disp=emb&realattid=3aa2f19e36875502_0.1.1",
name: "James Greene",
quote:"Rest at the end not in the middle-kobe.",
superlative:"Most athletic",
},
  {
profileImage:"https://mail.google.com/mail/u/0?ui=2&ik=620a0b717d&attid=0.1&permmsgid=msg-f:1662188495297651739&th=171147a13bf5241b&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-Wwb-JoxPAiWQ_BzDV4TLm_xTqnggKKW6Vpw5975ZgBFmZCF-IGZtS2JGgFzakyg7BvbrriAAkGnZnJ67iMOWqRLemlZjSGhGor-9k5k4cYegxpyOAf2pVkVA&disp=emb&realattid=1711479969aa5d507f61",
 name:"Mayhelly Vargas",
 quote:"Be the change you want to see in the world -Gandhi",
  superlative:"Best Personality",
  },
{
  
profileImage:"https://mail.google.com/mail/u/0?ui=2&ik=620a0b717d&attid=0.2&permmsgid=msg-f:1662188495297651739&th=171147a13bf5241b&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_MHTJd6rCEmRuVUIV1JMW33cPEGYjkS7LUpLkjlucwntFhJ-Xg3VFQDcHbfdgyq4NXu7oqY7H_N9i6gPwxSvCyM_WJXM545A7CvwrJotuEXozEiYUWe38mAUk&disp=emb&realattid=1711479bb5ffbc460312",
name:"Fatima Reyes",
quotes:"Be the real you",
superlative:"Best Dramatic",
},
  
{
profileImage:"https://mail.google.com/mail/u/0?ui=2&ik=620a0b717d&attid=0.3&permmsgid=msg-f:1662188495297651739&th=171147a13bf5241b&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-Abbtga5-iPZkssOBjH-3mu1qg7dDBX_VKMpXVb-EPi5p5gYi7nx0DqLAWKmk9csBFWX6gwnGexYsQ7Oib8jPMdu73x8z94FpX7qwP6FOfBdtkBt62NMRRhjU&disp=emb&realattid=1711479d5c5804e0b2d3",
name: "Nayeli Robles",
quotes:"Try your best ",
superlative:"Best Quite",
},

  {
profileImage:"https://mail.google.com/mail/u/0?ui=2&ik=620a0b717d&attid=0.1&permmsgid=msg-f:1662345371625611485&th=1711d64ed9c260dd&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-QR4jLmIAc0MtrUOgz2FRFpVaUi7X3Vbtuw3ibTviy-Uf1pBI-r5YeoyncwHYG9iFIhsew_QT4MRaZsqNhH15WKMaeJY1EiSBgFKnIVxfI8zzQuVunafKMY4A&disp=emb&realattid=98dff98feeb34fa5_0.1.1",
name:"Miranda Cabrera",
quote:"Renegade for life",
superlative:"Best Goofy",
  },
  
  {
  profileImage:"https://mail.google.com/mail/u/0?ui=2&ik=620a0b717d&attid=0.1&permmsgid=msg-f:1662346298658203438&th=1711d726b135272e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ-DrM4wkKtksjZ__P6zFCmKM0WMx3SGsPm3hhw8fOtWBVmu9CaPghNWmt1_VQeFjfNelaM2xauH_YkeTha1VM-IE4lF6I8JUFNPrqyPMW8mudhGd1lQWN2tbCg&disp=emb&realattid=de3b3aa36e2d75b9_0.1.1",
  name:"Worokiya Tunkara",
  quote:"Lamb over rice pwease",
  superlative: "Best Hijab",
  },
  
  {
  profileImage:"https://mail.google.com/mail/u/0?ui=2&ik=620a0b717d&attid=0.1&permmsgid=msg-f:1662347770391605567&th=1711d87d5b5ab13f&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_pgiarJAmgz_w3svJtClNKi76F76yJ3jyp3oGjwzEgt5NSScL5DMPey-LGjsiJSARo_BKPi2EhNwxqAKBiZWvIDGe4-STnCycYN0zYK3qxSfxeacLWP5ur4Fk&disp=emb&realattid=5c41a9dd11accf17_0.1.1",
  name:"Djaliatou Barry",
  quote:"You love me ",
  superlative:"Best Smile",
  },

{
profileImage: "https://mail.google.com/mail/u/0?ui=2&ik=620a0b717d&attid=0.1&permmsgid=msg-f:1662348036924333756&th=1711d8bb69f15ebc&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_J9OzIZ-3vB5h4lDRzO6AuPxePnybIoqLYigGNDWEXIQ0HmdCpqhmn_u7a52T6gRG6wvlitxKWakmx3-8iPoDtajpuOyFmHRYPAlXh2jfiyyZlA3_cJRZr2M8&disp=emb&realattid=4461072142a9586f_0.1.1",
name: "Myriam Traore",
quote:"Your body is a temple protect",
superlative:"Best clown",
},


{
profileImage:"https://mail.google.com/mail/u/0?ui=2&ik=620a0b717d&attid=0.1&permmsgid=msg-f:1662353407519102931&th=1711dd9dda5617d3&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_Rh5be-Sd6BnCabATl1o3dUGIKc81WAm5Yf_wDYekXNaFdm-eo6FqwBFwSdlj0_qmVklQKYS2oNQnGQi0WXguqENdMtUWQx08EBhFXERBQw3VKRNSGjiGfx0U&disp=emb&realattid=6fb3670aa81202be_0.1.1",
name:"Jyasia Johnson",
quote:"Catch me on a good day",
superlative:"Best Realest",
},
  


]

let count= 0

document.querySelector("#pic").src= students[count].profileImage
document.querySelector("#name").innerHTML=students[count].name


nextButton.addEventListener("click",()=>{
  console.log('next')

  count ++
  console.log(count)
  document.querySelector("#pic").src= students[count].profileImage
document.querySelector("#name").innerHTML=students[count].name
document.querySelector("#quote").innerHTML=students[count].quote
document.querySelector("#superlative").innerHTML=students[count].superlative
})

backButton.addEventListener("click",()=>{
console.log('back')
count--
console.log(count)
document.querySelector("#pic").src= students[count].profileImage
document.querySelector("#name").innerHTML=students[count].name
document.querySelector("#quote").innerHTML=students[count].quote
document.querySelector("#superlative").innerHTML=students[count].superlative
})