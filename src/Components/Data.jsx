export function getLocalData() {
  const localData = localStorage.getItem("cardData");
  return localData ? JSON.parse(localData) : [];
}

export function getData() {
  return [
    {
      name: "Phu Nguyen",
      date: "14/08/2023",
      profile: "Images/Phu.svg",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: "Images/cat.svg",
    },
    {
      name: "Varen",
      date: "14/08/2023",
      profile: "Images/Micro.svg",
      description:
        "Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông tin: Avatar, Name, Description, Image.",
      img: "Images/Baby.svg",
    },

    {
      name: "Mio",
      date: "14/08/2023",
      profile: "Images/Music.svg",
      description:
        "Next, you select one property. It doesn’t matter which one you choose, yet it’s best to pick one that seems totally unrelated to your challenge..",
      img: "Images/Elephant.svg",
    },
    
  ];
}