// import React from "react";

const exhibitions = [
    {
      id: "1",
      title: "카와시마 코토리 개인전 사란란",
      keywords: ["오늘의 전시", "사진"],
      Period: "2025.03.27 ~ 2025.06.29",
      location: "석파정 서울미술관",
      description: "작고 사소한 존재에 깃든 아름다움을 포착하는 일본의 사진작가 카와시마 코토리의 개인전",
      image: "https://www.harpersbazaar.co.kr/resources/online/online_image/2025/02/24/6f4c4b65-0286-463e-9b6f-dbe17fe9356d.jpeg",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.311012287383!2d126.96066961154142!3d37.59483872238794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2ac2bfa5859%3A0xf35fbdd71f0087b5!2z7ISd7YyM7KCVIOyEnOyauOuvuOyIoOq0gA!5e0!3m2!1sko!2skr!4v1745369139046!5m2!1sko!2skr",
      detailposter: "/assets/img/Salanlandetailposter.jpg"
    },
    {
      id: "2",
      title: "픽사 아트컬렉션 : 매직 포 러브",
      keywords: ["오늘의 전시", "미디어" , "아트"],
      Period: "2025.03.27 ~ 2025.06.29",
      location: "석파정 서울미술관",
      description: "픽사의 작품들을 통해 바라본 사랑의 모든 순간",
      image: "https://cafe24.poxo.com/ec01/artculture4u/Xeym8gXyw/uNs04t9Tz1Dg3thw7qsGTr4AUTPCq7+cHLkD9DpVIKsP2mVQPqHsTIXaWkI/QfK2pEAoK5UBJPMA==/_/web/product/extra/big/202502/479594b46b2b333f0b4992aca4e51c18.png",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2451542224376!2d126.9229432115388!3d37.52571792635082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f7e31dd369d%3A0xa49021f7a1e9e7d1!2sMPX%20GALLERY!5e0!3m2!1sko!2skr!4v1745384326629!5m2!1sko!2skr",
      detailposter: "https://naverbooking-phinf.pstatic.net/20250401_135/1743482171402CI0P4_JPEG/KakaoTalk_Photo_2025-04-01-13-31-05_001.jpeg?type=w1500_60_sharpen"    
    },
    {
      id: "3",
      title: "조나단 베르탱 사진전",
      keywords: ["오늘의 전시","사진"],
      Period: "2025.05.23 ~2025.07.31",
      location: "그라운드시소 이스트",
      description: "세상을 바라보는 감각의 판도를 뒤집은 인상주의 사조",
      image: "https://ticketimage.interpark.com/Play/image/large/25/25005139_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.7991499931495!2d127.08518741153921!3d37.53623162574854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5003525258f%3A0x41adf8eafaecd2fc!2z6re465287Jq065Oc7Iuc7IaMIOydtOyKpO2KuA!5e0!3m2!1sko!2skr!4v1745394515329!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/25/25005139-03.jpg"    
    },
    {
      id: "4",
      title: "이원공명 | Resonance of Reality and Virtuality",
      keywords: ["오늘의 전시", "미디어"],
      Period: "2025.03.27 ~ 2025.06.29",
      location: "DDP 디자인랩 3층",
      description: "빛과 기술이 만든 ‘또 하나의 현실’로의 초대",
      image: "https://ddp.or.kr/usr/upload/board_thumb/zboardphotogallery0/20250417060708909.jpg",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.5132668713622!2d127.00664331154042!3d37.56652982401173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b456faf5814f3%3A0x5c22a91dab450bdc!2z64-Z64yA66y465SU7J6Q7J247ZSM65287J6Q!5e0!3m2!1sko!2skr!4v1745385679639!5m2!1sko!2skr",
      detailposter: "https://ddp.or.kr/var/filemanager/userfiles/250418_01_01.jpg"   
    },
    {
      id: "5",
      title: "아트부산 2025",
      keywords: ["오늘의 전시", "아트"],
      Period: "2025.05.08 ~ 2025.05.11",
      location: "BEXCO 제 1 전시장",
      description: "전 세계 20개국, 110여 개 갤러리가 참여하는 미술 축제",
      image: "https://img.marieclairekorea.com//2024/05/mck_66558d5791954-1200x800.jpg",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.7826220942384!2d129.13344720659364!3d35.16746188579359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356892bf02a5dfe1%3A0xb36570e65bbad549!2z67Kh7Iqk7L2U!5e0!3m2!1sko!2skr!4v1745374928772!5m2!1sko!2skr",
      detailposter: "/assets/img/ARTBUSAN2025detailposter.png"    
    },
    {
      id: "6",
      title: "디자인아트페어 2025",
      keywords: ["아트"],
      Period: "2025.04.08~ 2025.04.16",
      location: "한가람미술관",
      description: "회화, 도자, 섬유, 디자인 등 다양한 예술을 만나는 현장",
      image: "https://modo-phinf.pstatic.net/20250407_98/1744004180844g7dE0_PNG/mosa5DPPfa.png?type=w1100",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.1688339168245!2d127.01166631153691!3d37.4803420289492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1174127c7dd%3A0x7176bd2ebe15e454!2z7JiI7Iig7J2Y7KCE64u5IO2VnOqwgOuejOuvuOyIoOq0gA!5e0!3m2!1sko!2skr!4v1745376285843!5m2!1sko!2skr",
      detailposter: "https://center.sac.or.kr/SAC/File/RentConfirm/editor/8dd6dbc9-9ee5-473b-9d6f-5441c05ff11b"    
    },
    {
      id: "7",
      title: "2025 화랑미술제",
      keywords: ["아트"],
      Period: "2025.04.17 - 2025.04.20",
      location: "코엑스 A&B홀",
      description: "역대 최대 규모, 최다 참가 갤러리",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RzS5onCcxh8sJ1sqrPh2osk6Z9nzHwWgWA&s",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.422563027415!2d127.05859080661646!3d37.51157077059518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca536e4738c97%3A0x336c7537649c9fe4!2z7L2U7JeR7Iqk!5e0!3m2!1sko!2skr!4v1745383526666!5m2!1sko!2skr",
      detailposter: "https://cafe24.poxo.com/ec01/artculture4u/fYw07Q+e08011Z5Qzbz30z8LkbnJrbhSXkOOJwjtxZsV4qUtrqSnQRYxnu2TXKEEqyiEI4tsQxlYDSyt8/AoFQ==/_/web/upload/NNEditor/20250320/copy-1742431795-E18492E185AAE18485E185A1E186BC2025_E18489E185A1E186BCE18489E185A6E18491E185A6E1848BE185B5E1848CE185B52.png"    
    },
    {
      id: "8",
      title: "Kiaf SEOUL 2025",
      keywords: ["오늘의 전시","아트"],
      Period: "2025.09.03 - 2025.09.07",
      location: "코엑스 Hall A, B",
      description: "기존의 예술과 현대의 예술을 한곳에 담는 글로벌 플랫폼으로서 세계미술인의 축제",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZALVWmt7_66edmeDilA-b_y5fDLo8-LorYA&s",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.4225630274145!2d127.05859080661648!3d37.51157077059519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca536e4738c97%3A0x336c7537649c9fe4!2z7L2U7JeR7Iqk!5e0!3m2!1sko!2skr!4v1745398095914!5m2!1sko!2skr",
      detailposter: "/assets/img/KiafSEOUL2025detailposter.png"    
    },
    {
      id: "9",
      title: "마르크 샤갈 특별전 : BEYOND TIME",
      keywords: ["오늘의 전시", "현대미술"],
      Period: "2025.05.23 ~2025.07.13",
      location: "예술의전당 한가람미술관 1층",
      description: "시간을 초월한 색채의 시인, 마르크 샤갈",
      image: "https://ticketimage.interpark.com/Play/image/large/25/25005284_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.1688339168245!2d127.01166631153691!3d37.4803420289492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1174127c7dd%3A0x7176bd2ebe15e454!2z7JiI7Iig7J2Y7KCE64u5IO2VnOqwgOuejOuvuOyIoOq0gA!5e0!3m2!1sko!2skr!4v1745386128116!5m2!1sko!2skr",
      detailposter: "https://center.sac.or.kr/SAC/File/RentConfirm/editor/c416cc9a-0708-44d4-9ccb-2f9d4c8f4ba1.jpg"    
    },
    {
      id: "10",
      title: "피카소와 20세기 거장들",
      keywords: ["현대미술"],
      Period: "2023.04.04 ~ 2023.05.31",
      location: "마이아트뮤지엄",
      description: "루드비히 미술관 컬렉션 , 마이아트뮤지엄",
      image: "https://cafe24.poxo.com/ec01/artculture4u/fYw07Q+e08011Z5Qzbz30z8LkbnJrbhSXkOOJwjtxZsV4qUtrqSnQRYxnu2TXKEEqyiEI4tsQxlYDSyt8/AoFQ==/_/web/product/extra/big/202303/05c604eb3bddf2d44a3ab15c51a9e750.png",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.011461399881!2d127.05790331153798!3d37.507647827385874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5b2fa2a6ab7%3A0x9bd973b7156f2583!2z66eI7J207JWE7Yq4666k7KeA7JeE!5e0!3m2!1sko!2skr!4v1745386446933!5m2!1sko!2skr",
      detailposter: "http://myartmuseum.co.kr/admin/data/webedit/2409/20240919130931_41677199.jpg"    
    },
    {
      id: "11",
      title: "모네 인사이드",
      keywords: ["미디어"],
      Period: "2022.09.01 ~2023.04.30",
      location: "그라운드시소 명동",
      description: "찰나의 빛에 영원을 담다",
      image: "https://ticketimage.interpark.com/Play/image/large/22/22009615_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.613043136463!2d126.97919151154026!3d37.564179624146405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3a553431ac1%3A0x543dfce628b0ea91!2z6re465287Jq065Oc7Iuc7IaMIOuqheuPmQ!5e0!3m2!1sko!2skr!4v1745386894874!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/22/22009615-01.jpg"    
    },
    {
      id: "12",
      title: "빛의 벙커 ＜샤갈, 파리에서 뉴욕까지＞",
      keywords: ["미디어"],
      Period: "2024.03.22~2025.02.21",
      location: "빛의 벙커",
      description: "파리에서 뉴욕으로 이어지는 예술 여정",
      image: "https://kr.ambafrance-culture.org/wp-content/uploads/medias/2024/03/20240315_%EB%B9%9B%EC%9D%98-%EB%B2%99%EC%BB%A4_%ED%94%84%EB%9E%91%EC%8A%A4%EB%8C%80%EC%82%AC%EA%B4%80_%EC%83%A4%EA%B0%88_%ED%8F%AC%EC%8A%A4%ED%84%B0_%EC%98%81%EB%AC%B8-0a0d7943-730x1030.webp",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.3628114666494!2d126.89642251138355!3d33.43985294970673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350d1347056f319d%3A0x8161e7a18993b287!2z67mb7J2YIOuymey7pA!5e0!3m2!1sko!2skr!4v1745387212808!5m2!1sko!2skr",
      detailposter: "https://timeticket.smilecast.co.kr/Image/ticket/5900/5915/5915_00.jpg"    
    },
    {
      id: "13",
      title: "아트페스타 제주",
      keywords: ["아트"],
      Period: "2024.08.23 ~ 2024.09.01",
      location: "제주국제컨벤션센터",
      description: "2천여 점의 작품을 한자리에서!",
      image: "https://cafe24.poxo.com/ec01/artculture4u/fYw07Q+e08011Z5Qzbz30z8LkbnJrbhSXkOOJwjtxZsV4qUtrqSnQRYxnu2TXKEEqyiEI4tsQxlYDSyt8/AoFQ==/_/web/product/big/202408/a672170c53bc9e8df805d1d1ccf14c1f.png",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.9642087242146!2d126.42191171137621!3d33.24124106000676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350c5ab00d79f8b9%3A0x3b69982b16f5c1bc!2z7KCc7KO86rWt7KCc7Luo67Kk7IWY7IS87YSw!5e0!3m2!1sko!2skr!4v1745389672070!5m2!1sko!2skr",
      detailposter: "https://cafe24.poxo.com/ec01/artculture4u/fYw07Q+e08011Z5Qzbz30z8LkbnJrbhSXkOOJwjtxZsV4qUtrqSnQRYxnu2TXKEEqyiEI4tsQxlYDSyt8/AoFQ==/_/web/upload/NNEditor/20240823/_E1848CE185A6E1848CE185AEE18491E185A6E18489E185B3E18490E185A1_E18489E185A1E186BCE18489E185A61.png"    
    },
    {
      id: "14",
      title: "한국현대미술 거장전 : AGAIN LEGEND AGAIN",
      keywords: ["오늘의 전시","현대미술"],
      Period: "2025.04.22 ~2025.06.28",
      location: "모다 갤러리",
      description: "그들의 실험, 혁신, 그리고 새로운 길, 시대를 넘어 되살아난 전설과 함께",
      image: "https://ticketimage.interpark.com/Play/image/large/25/25005215_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.039216566115!2d126.98863971153891!3d37.530572826072714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3005f6a8e49%3A0x74279affa09c702e!2z66qo64ukIOqwpOufrOumrA!5e0!3m2!1sko!2skr!4v1745390200632!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/25/25005215-10.jpg"    
    },
    {
      id: "15",
      title: "다시 보다 : 한국근현대미술전",
      keywords: ["현대미술"],
      Period: "2023.04.06 ~2023.06.18",
      location: "소마미술관",
      description: "우리나라 미술사를 빛낸 불세출의 명작들을 다시 보다!",
      image: "https://ticketimage.interpark.com/Play/image/large/23/23004759_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6109875802367!2d127.11565661153836!3d37.517092226845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca564e6c2ac9f%3A0xcb51ea691a827bb4!2z7IaM66eI66-47Iig6rSA!5e0!3m2!1sko!2skr!4v1745391004572!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/23/23004759-03.jpg"    
    },
    {
      id: "16",
      title: "프랑스현대사진 French Photography Today",
      keywords: ["사진"],
      Period: "2024.05.30 ~2024.08.18",
      location: "성곡미술관",
      description: "성곡미술관 기획전 《프랑스현대사진 French Photography Today: A New Vision of Reality》에서는 약 200년 전 사진을 발명한 프랑스의 오늘의 사진을 만날 수 있습니다.",
      image: "https://kr.ambafrance-culture.org/wp-content/uploads/medias/2023/05/%EB%92%A4%ED%94%BC%EC%A0%84_%ED%8F%AC%EC%8A%A4%ED%84%B0-%EC%9D%BC%EB%B0%98%ED%98%95-569ad85a-1080x0.webp",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2334599356604!2d126.96718401154074!3d37.57311992363377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2915c64611d%3A0x2c742ac1965029e7!2z7ISx6rOh66-47Iig6rSA!5e0!3m2!1sko!2skr!4v1745391216157!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/24/24006839-10.jpg"    
    },
    {
      id: "17",
      title: "위대한 개츠비",
      keywords: ["현대미술"],
      Period: "2023.12.02 ~2024.08.18",
      location: "K현대미술관",
      description: "위대한 개츠비의 파티에 오신 걸 환영합니다.",
      image: "https://ticketimage.interpark.com/Play/image/large/23/23016332_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.3062325177875!2d127.03647401153866!3d37.52427792643345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3883bfba1a9%3A0xf12e3c6a6255141!2zS-2YhOuMgOuvuOyIoOq0gA!5e0!3m2!1sko!2skr!4v1745391444160!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/24/23016332-03.jpg"    
    },
    {
      id: "18",
      title: "더현대서울 프랑스국립현대미술관전 : 라울 뒤피",
      keywords: ["현대미술"],
      Period: "2023.05.17 ~2023.09.06",
      location: "더현대서울 6층 ALT.1",
      description: "뒤피 작품의 세계 최대 컬렉션",
      image: "https://ticketimage.interpark.com/Play/image/large/23/23006569_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2317421791195!2d126.92531101153877!3d37.526034126332725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f27eee0f8d9%3A0xaa71ef50c78002f4!2sALT.1!5e0!3m2!1sko!2skr!4v1745391637684!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/23/23006569-08.jpg"    
    },
    {
      id: "19",
      title: "디파인 서울 2024",
      keywords: ["아트"],
      Period: "2024.11.01 ~ 2024.11.03",
      location: "에스팩토리D동",
      description: "현대미술과 헤리티지, 예술과 디자인, 동양과 서양의 시각을 만나는 아트페어",
      image: "https://design.co.kr/wp-content/uploads/2024/10/DEFINE-SEOUL-2024-Poster_basic-832x1013.jpg",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.5317814655286!2d127.05668021153942!3d37.542533125387315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5520a197eb1%3A0xac4043f496a6241d!2z7JeQ7Iqk7Yyp7Yag66asIETrj5k!5e0!3m2!1sko!2skr!4v1745398560472!5m2!1sko!2skr",
      detailposter: "/assets/img/DEFINESEOULdetailposter.png"    
    },
    {
      id: "20",
      title: "2023 아시아프＆히든아티스트 페스티벌",
      keywords: ["아트"],
      Period: "2023.07.25 ~2023.08.20",
      location: "서울 홍익대학교 현대미술관(홍문관)",
      description: "국내 최고의 신진작가 아트페어",
      image: "https://ticketimage.interpark.com/Play/image/large/23/23009121_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.115876618336!2d126.92248161153994!3d37.552333624825536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98c467a8febd%3A0x42cc80162d5b0eb2!2z7ZmN7J2164yA7ZWZ6rWQIO2YhOuMgOuvuOyIoOq0gCDsoJwy6rSA!5e0!3m2!1sko!2skr!4v1745391851534!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/23/23009121-01.jpg"    
    },
    {
      id: "21",
      title: "라이프 사진전：더 클래식 컬렉션",
      keywords: ["사진"],
      Period: "2022.04.05 ~2022.04.16",
      location: "MUSEUM 209",
      description: "세대와 시대를 뛰어넘어 클랙식",
      image: "https://ticketimage.interpark.com/Play/image/large/22/22003732_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.748549372449!2d127.10386821153821!3d37.513848327030786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5584dc2b8e9%3A0xac086f2d00af6a2c!2z666k7KeA7JeEIDIwOQ!5e0!3m2!1sko!2skr!4v1745392065115!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/22/22003732-01.jpg"    
    },
    {
      id: "22",
      title: "행복을 찍는 사진작가, 안나앤다니엘",
      keywords: ["사진"],
      Period: "2024.12.24 ~ 2025.03.02",
      location: "예술의전당 한가람미술관",
      description: "공간과 이미지의 절묘한 만남",
      image: "https://www.sac.or.kr//site/main/file/thumbnail/uu/871721947b884c498bad485c6484adc4",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.1688339168245!2d127.01166631153691!3d37.4803420289492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1174127c7dd%3A0x7176bd2ebe15e454!2z7JiI7Iig7J2Y7KCE64u5IO2VnOqwgOuejOuvuOyIoOq0gA!5e0!3m2!1sko!2skr!4v1745383783876!5m2!1sko!2skr",
      detailposter: "https://center.sac.or.kr/SAC/File/RentConfirm/editor/3a6e98cd-5374-4f55-831b-e74045e25e6d"    
    },
    {
      id: "23",
      title: "요시고 사진전",
      keywords: ["사진"],
      Period: "2023.05.27 ~2023.09.03",
      location: "KT&G상상마당부산",
      description: "따뜻한 휴일의 기록",
      image: "https://ticketimage.interpark.com/Play/image/large/23/23005227_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.0935153156847!2d129.05473551144627!3d35.15428845862673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb60fe06d5d5%3A0x26628308c9abcac5!2zS1QmR-yDgeyDgeuniOuLuSDrtoDsgrA!5e0!3m2!1sko!2skr!4v1745394211045!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/23/23005227-02.jpg"    
    },
    {
      id: "24",
      title: "내셔널지오그래픽 사진전",
      keywords: ["사진"],
      Period: "2024.12.05 ~2025.04.20",
      location: "MUSEUM 209",
      description: "멸종에서 희망으로, 사진으로 엮은 동물의 방주",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24016736_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.748549372449!2d127.10386821153821!3d37.513848327030786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5584dc2b8e9%3A0xac086f2d00af6a2c!2z666k7KeA7JeEIDIwOQ!5e0!3m2!1sko!2skr!4v1745394735410!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/24/24016736-04.jpg"    
    },
    {
      id: "25",
      title: "브라이언아담스 사진전",
      keywords: ["사진"],
      Period: "2024.01.12 ~2024.04.13",
      location: "용산전쟁기념관",
      description: "천재 뮤지션 그 이상의 포토그래퍼 브라이언 아담스 아시아 최초 대규모 사진전",
      image: "https://ticketimage.interpark.com/Play/image/large/23/23018452_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.7830915657228!2d126.9745594115392!3d37.536610125726774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca23fb451c4f1%3A0xe196919c152a17a0!2z7KCE7J-B6riw64WQ6rSA!5e0!3m2!1sko!2skr!4v1745394858679!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/24/23018452-03.jpg"    
    },
    {
      id: "26",
      title: "유코 히구치：비밀의 숲",
      keywords: ["현대미술"],
      Period: "2024.10.03 ~2025.01.22",
      location: "더현대서울 6층 ALT.1",
      description: "꿈 속에 있는 듯, 환성적이고 신비로움",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24014216_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2317421791195!2d126.92531101153877!3d37.526034126332725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f27eee0f8d9%3A0xaa71ef50c78002f4!2sALT.1!5e0!3m2!1sko!2skr!4v1745395115156!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/24/24014216-06.jpg"    
    },
    {
      id: "27",
      title: "다비드 자맹: 프로방스에서 온 댄디보이",
      keywords: ["현대미술"],
      Period: "2024.10.03 ~2025.01.22",
      location: "더현대서울",
      description: "내면의 감정을 외적인 에너지로 표출하는 감성술사 다비드 자맹의 귀환",
      image: "https://ticketimage.interpark.com/Play/image/large/23/23000956_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2473704663557!2d126.92561541153874!3d37.525665676354016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b45c3d89d7801%3A0x7883571cabf15b8b!2z642U7ZiE64yAIOyEnOyauA!5e0!3m2!1sko!2skr!4v1745395861575!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/23/23000956-05.jpg"    
    },
    {
      id: "28",
      title: "르네상스 3대 거장 미디어 展",
      keywords: ["미디어"],
      Period: "2022.03.10 ~2022.07.10",
      location: "고양시립 아람미술관",
      description: "다 빈치, 라파엘로, 미켈란젤로",
      image: "https://ticketimage.interpark.com/Play/image/large/22/22002962_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.511311216162!2d126.77059721154409!3d37.66069161860666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c85510fc03f37%3A0x3453ff6f35b9ca74!2z7JWE656M66-47Iig6rSA!5e0!3m2!1sko!2skr!4v1745396110353!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/22/22002962-02.jpg"    
    },
    {
      id: "29",
      title: "팀랩: 라이프(teamLab: LIFE)",
      keywords: ["미디어"],
      Period: "2020.09.25 ~2021.08.22",
      location: "동대문디자인플라자 배움터 지하2층 디자인전시관",
      description: "생명은 아름답습니다",
      image: "https://ticketimage.interpark.com/Play/image/large/20/20007609_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.5132668713622!2d127.00664331154042!3d37.56652982401173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b456faf5814f3%3A0x5c22a91dab450bdc!2z64-Z64yA66y465SU7J6Q7J247ZSM65287J6Q!5e0!3m2!1sko!2skr!4v1745396411494!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/20/20007609-06.jpg"    
    },
    {
      id: "30",
      title: "2024 국가유산 미디어아트 수원화성 - 미디어아트 화서문",
      keywords: ["미디어"],
      Period: "2024.09.28 ~2024.10.20",
      location: "화서문",
      description: "만천명월(萬川明月) ; 정조의 꿈, 빛이 되다 시즌4 수원화성 화락(和樂)",
      image: "https://ticketimage.interpark.com/Play/image/large/24/24012336_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.403899565853!2d127.00708381152914!3d37.285560240073515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b4332e9001fef%3A0x6fec60d371763130!2z7ZmU7ISc66y4!5e0!3m2!1sko!2skr!4v1745397289921!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/24/24012336-02.jpg"    
    },
    {
      id: "31",
      title: "〈나는 고래〉",
      keywords: ["미디어"],
      Period: "2022.07.08 ~2022.08.12",
      location: "롯데월드타워 서울스카이",
      description: "고래의 장엄한 몸짓",
      image: "https://ticketimage.interpark.com/Play/image/large/22/22008270_p.gif",
      mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.804293804135!2d127.09972471153823!3d37.5125337271062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b458e7369b7bb%3A0x99685e4ee512b384!2z7ISc7Jq47Iqk7Lm07J20!5e0!3m2!1sko!2skr!4v1745397449504!5m2!1sko!2skr",
      detailposter: "https://ticketimage.interpark.com/Play/image/etc/22/22008270-05.jpg"    
    },

  ];
  
  export default exhibitions;
  