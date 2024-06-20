// document.addEventListener("DOMContentLoaded", () => {
let data = [
  {
    id: 1,
    nama: "Ahmad Budi Chandra",
    pengalaman: "10",
    gender: "Male",
    tempat: "RS Pertamina",
    foto: "1.png",
  },
  {
    id: 2,
    nama: "Dewi Eka Fajar",
    pengalaman: "5",
    gender: "Female",
    tempat: "RS Siloam",
    foto: "1.png",
  },
  {
    id: 3,
    nama: "Gita Hadi Indra",
    pengalaman: "15",
    gender: "Female",
    tempat: "RS Hermina",
    foto: "1.png",
  },
  {
    id: 4,
    nama: "Joko Kartika Lia",
    pengalaman: "20",
    gender: "Male",
    tempat: "RS Medika",
    foto: "1.png",
  },
  {
    id: 5,
    nama: "Maya Nina Oki",
    pengalaman: "12",
    gender: "Female",
    tempat: "RS Bunda",
    foto: "1.png",
  },
//   {
//     id: 6,
//     nama: "Putri Rama Sari",
//     pengalaman: "7",
//     gender: "Female",
//     tempat: "RS Premier",
//     foto: "1.png",
//   },
//   {
//     id: 7,
//     nama: "Toni Umi Vina",
//     pengalaman: "18",
//     gender: "Male",
//     tempat: "RS Harapan Kita",
//     foto: "1.png",
//   },
//   {
//     id: 8,
//     nama: "Wawan Xena Yoga",
//     pengalaman: "22",
//     gender: "Male",
//     tempat: "RS Mayapada",
//     foto: "1.png",
//   },
//   {
//     id: 9,
//     nama: "Zara Anisa Bagus",
//     pengalaman: "25",
//     gender: "Female",
//     tempat: "RS Panti Rapih",
//     foto: "1.png",
//   },
//   {
//     id: 10,
//     nama: "Citra Danu Euis",
//     pengalaman: "30",
//     gender: "Female",
//     tempat: "RS Bethesda",
//     foto: "1.png",
//   },
//   {
//     id: 11,
//     nama: "Fahmi Gilang Hasan",
//     pengalaman: "9",
//     gender: "Male",
//     tempat: "RS Islam Jakarta",
//     foto: "1.png",
//   },
//   {
//     id: 12,
//     nama: "Ika Jihan Karim",
//     pengalaman: "6",
//     gender: "Female",
//     tempat: "RS Cipto Mangunkusumo",
//     foto: "1.png",
//   },
//   {
//     id: 13,
//     nama: "Lestari Miko Naufal",
//     pengalaman: "28",
//     gender: "Female",
//     tempat: "RS Karya Medika",
//     foto: "1.png",
//   },
//   {
//     id: 14,
//     nama: "Olivia Putu Rini",
//     pengalaman: "3",
//     gender: "Female",
//     tempat: "RS Mitra Keluarga",
//     foto: "1.png",
//   },
//   {
//     id: 15,
//     nama: "Sinta Tri Ulfa",
//     pengalaman: "19",
//     gender: "Female",
//     tempat: "RS Fatmawati",
//     foto: "1.png",
//   },
//   {
//     id: 16,
//     nama: "Vito Wahyu Xander",
//     pengalaman: "11",
//     gender: "Male",
//     tempat: "RS Hasan Sadikin",
//     foto: "1.png",
//   },
//   {
//     id: 17,
//     nama: "Yusuf Zahra Ahmad",
//     pengalaman: "14",
//     gender: "Male",
//     tempat: "RS Gatot Soebroto",
//     foto: "1.png",
//   },
//   {
//     id: 18,
//     nama: "Budi Chandra Dewi",
//     pengalaman: "4",
//     gender: "Male",
//     tempat: "RS Puri Indah",
//     foto: "1.png",
//   },
//   {
//     id: 19,
//     nama: "Eka Fajar Gita",
//     pengalaman: "17",
//     gender: "Female",
//     tempat: "RS Mitra Medika",
//     foto: "1.png",
//   },
  //   {
  //     id: 20,
  //     nama: "Hadi Indra Joko",
  //     pengalaman: "24",
  //     gender: "Male",
  //     tempat: "RS Bhayangkara",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 21,
  //     nama: "Kartika Lia Maya",
  //     pengalaman: "2",
  //     gender: "Female",
  //     tempat: "RS Santo Borromeus",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 22,
  //     nama: "Nina Oki Putri",
  //     pengalaman: "8",
  //     gender: "Female",
  //     tempat: "RS Royal Taruma",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 23,
  //     nama: "Rama Sari Toni",
  //     pengalaman: "27",
  //     gender: "Male",
  //     tempat: "RS Surya Husada",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 24,
  //     nama: "Umi Vina Wawan",
  //     pengalaman: "13",
  //     gender: "Female",
  //     tempat: "RS Eka Hospital",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 25,
  //     nama: "Xena Yoga Zara",
  //     pengalaman: "26",
  //     gender: "Female",
  //     tempat: "RS Islam Jakarta",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 26,
  //     nama: "Anisa Bagus Citra",
  //     pengalaman: "16",
  //     gender: "Female",
  //     tempat: "RS Medika",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 27,
  //     nama: "Danu Euis Fahmi",
  //     pengalaman: "23",
  //     gender: "Male",
  //     tempat: "RS Harapan Kita",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 28,
  //     nama: "Gilang Hasan Ika",
  //     pengalaman: "29",
  //     gender: "Male",
  //     tempat: "RS Premier",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 29,
  //     nama: "Jihan Karim Lestari",
  //     pengalaman: "21",
  //     gender: "Female",
  //     tempat: "RS Panti Rapih",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 30,
  //     nama: "Miko Naufal Olivia",
  //     pengalaman: "18",
  //     gender: "Male",
  //     tempat: "RS Siloam",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 31,
  //     nama: "Putu Rini Sinta",
  //     pengalaman: "20",
  //     gender: "Male",
  //     tempat: "RS Bethesda",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 32,
  //     nama: "Tri Ulfa Vito",
  //     pengalaman: "6",
  //     gender: "Male",
  //     tempat: "RS Hasan Sadikin",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 33,
  //     nama: "Wahyu Xander Yusuf",
  //     pengalaman: "5",
  //     gender: "Male",
  //     tempat: "RS Karya Medika",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 34,
  //     nama: "Zahra Ahmad Budi",
  //     pengalaman: "3",
  //     gender: "Female",
  //     tempat: "RS Sari Asih",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 35,
  //     nama: "Chandra Dewi Eka",
  //     pengalaman: "1",
  //     gender: "Male",
  //     tempat: "RS Fatmawati",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 36,
  //     nama: "Fajar Gita Hadi",
  //     pengalaman: "9",
  //     gender: "Male",
  //     tempat: "RS Royal Taruma",
  //     foto: "1.png",
  //   },
  //   {
  //     id: 37,
  //     nama: "Indra Joko Kartika",
  //     pengalaman: "28",
  //     gender: "Male",
  //     tempat: "RS Mayapada",
  //     foto: "1.png",
  //   },
];
for (let i = 0; i < data.length; i++) {
  if (data[i].gender === "Male") {
    data[i].foto = "avatar.webp";
  } else {
    data[i].foto = "avatar2.webp";
  }
}
const submit = document.getElementById("submit");

const mainElement = document.getElementById("main");
const cari = document.getElementById("cari");
const mencari = function () {
  console.log(cari.value);
  mainElement.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== undefined) {
      if (data[i].nama.toLowerCase().includes(cari.value.toLowerCase())) {
        const card = document.createElement("div");
        card.classList.add("flex");
        card.classList.add("flex-col");
        card.classList.add("md:flex-row");
        card.classList.add("items-start");
        card.classList.add("justify-between");
        card.classList.add("border-t-2");
        card.classList.add("border-[#EBEBEB]");
        card.classList.add("py-5");

        card.innerHTML = `
                            <div class="flex items-center">
                    <img
                      src="./assets/${data[i].foto}"
                      alt="Doctor Image"
                      class="w-26 h-26 rounded-md mr-5"
                    />
                    <div>
                      <h1 class="text-xl lg:text-2xl font-semibold" id="${data[i].id}">Dr. ${data[i].nama}</h1>
                      <p class="text-gray-600 text-sm tag pt-3">
                        Doctor Details
                      </p>
                      <div class="flex items-center mt-2 text-gray-600">
                        <svg
                          width="22"
                          height="20"
                          viewBox="0 0 22 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 18H22V20H0V18H2V1C2 0.734784 2.10536 0.48043 2.29289 0.292893C2.48043 0.105357 2.73478 0 3 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V18ZM10 6H8V8H10V10H12V8H14V6H12V4H10V6ZM13 18H15V12H7V18H9V14H13V18Z"
                            fill="#0F81C7"
                          />
                        </svg>
                        <p class="px-2 customFont">${data[i].tempat}</p>
                      </div>
                      <div class="flex items-center mt-2 text-gray-600">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.276 0.255C8.359 0.25 8.447 0.25 8.561 0.25H11.44C11.553 0.25 11.641 0.25 11.725 0.255C12.2446 0.286585 12.7445 0.464982 13.1667 0.769456C13.5889 1.07393 13.916 1.49197 14.11 1.975C14.141 2.052 14.17 2.135 14.205 2.243L14.208 2.253C14.292 2.477 14.483 2.732 14.751 2.936C14.781 2.959 14.811 2.98 14.841 3C16.994 3.003 18.119 3.042 18.893 3.673C19.053 3.803 19.198 3.948 19.327 4.107C20 4.934 20 6.159 20 8.609C20 9.231 20 9.541 19.85 9.784C19.8205 9.83139 19.787 9.87622 19.75 9.918C19.56 10.132 19.263 10.221 18.668 10.4L14 11.8V11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9H8C7.46957 9 6.96086 9.21071 6.58579 9.58579C6.21071 9.96086 6 10.4696 6 11V11.8L1.332 10.4C0.737 10.221 0.439 10.132 0.25 9.918C0.212992 9.8762 0.179542 9.83138 0.15 9.784C8.9407e-08 9.541 0 9.231 0 8.609C0 6.159 1.19209e-07 4.934 0.673 4.107C0.803 3.947 0.948 3.802 1.107 3.673C1.882 3.043 3.006 3.003 5.16 3C5.19 2.98 5.22 2.959 5.25 2.936C5.517 2.732 5.709 2.476 5.792 2.253C5.83 2.139 5.858 2.053 5.89 1.974C6.08415 1.49116 6.41133 1.07333 6.83351 0.769037C7.25569 0.464748 7.75554 0.2865 8.275 0.255M12.818 2.818C12.842 2.88 12.868 2.94 12.898 3H7.101C7.13 2.94 7.156 2.88 7.181 2.818V2.815L7.186 2.805L7.191 2.793L7.196 2.781L7.199 2.771L7.201 2.766L7.205 2.754L7.209 2.742L7.211 2.736L7.214 2.728L7.216 2.721L7.218 2.715C7.257 2.599 7.269 2.562 7.281 2.534C7.36915 2.31442 7.51781 2.12437 7.7097 1.98594C7.90159 1.84751 8.12883 1.76639 8.365 1.752C8.397 1.75 8.437 1.75 8.58 1.75H11.418C11.561 1.75 11.601 1.75 11.633 1.752C12.115 1.782 12.537 2.086 12.718 2.534C12.728 2.562 12.741 2.597 12.78 2.715L12.782 2.721L12.784 2.728L12.787 2.736L12.789 2.742L12.793 2.754L12.797 2.766L12.799 2.771L12.803 2.781L12.807 2.793L12.812 2.805L12.816 2.815L12.818 2.818ZM12 10.5H8C7.86739 10.5 7.74021 10.5527 7.64645 10.6464C7.55268 10.7402 7.5 10.8674 7.5 11V13.162C7.50002 13.2619 7.52994 13.3594 7.58591 13.4421C7.64187 13.5248 7.72131 13.5889 7.814 13.626L8.514 13.906C9.4679 14.2877 10.5321 14.2877 11.486 13.906L12.186 13.626C12.2787 13.5889 12.3581 13.5248 12.4141 13.4421C12.4701 13.3594 12.5 13.2619 12.5 13.162V11C12.5 10.8674 12.4473 10.7402 12.3536 10.6464C12.2598 10.5527 12.1326 10.5 12 10.5ZM6.01 13.37L1.006 11.868C1.036 14.982 1.218 17.851 2.318 18.828C3.636 20 5.758 20 10 20C14.243 20 16.364 20 17.682 18.828C18.782 17.851 18.964 14.982 18.994 11.868L13.989 13.369C13.9513 13.7314 13.8154 14.0767 13.5958 14.3675C13.3762 14.6583 13.0813 14.8836 12.743 15.019L12.043 15.299C10.7315 15.8237 9.26847 15.8237 7.957 15.299L7.257 15.019C6.9187 14.8836 6.62383 14.6583 6.40424 14.3675C6.18464 14.0767 6.04867 13.7314 6.011 13.369"
                            fill="#0F81C7"
                          />
                        </svg>
                        <p class="px-2 customFont">${data[i].pengalaman} Years Experience</p>
                      </div>
                      <div class="flex items-center mt-2 text-gray-600">
                        <svg
                          width="17"
                          height="20"
                          viewBox="0 0 17 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.376 8.62692C10.4208 9.17627 10.2959 9.72614 10.0183 10.2023C9.74058 10.6784 9.32346 11.0578 8.82325 11.2893C8.32304 11.5207 7.76384 11.5931 7.22118 11.4966C6.67853 11.4001 6.17856 11.1394 5.78882 10.7496C5.39909 10.3599 5.13836 9.85994 5.04185 9.31728C4.94535 8.77462 5.01772 8.21542 5.2492 7.71521C5.48067 7.215 5.86009 6.79788 6.33621 6.52021C6.81232 6.24253 7.36219 6.11767 7.91154 6.1625C8.5478 6.21442 9.14492 6.49074 9.59632 6.94214C10.0477 7.39354 10.324 7.99066 10.376 8.62692ZM16.9231 1.53846V18.4615C16.9231 18.8696 16.761 19.2609 16.4725 19.5494C16.184 19.8379 15.7926 20 15.3846 20H1.53846C1.13044 20 0.739122 19.8379 0.450605 19.5494C0.162087 19.2609 0 18.8696 0 18.4615V1.53846C0 1.13044 0.162087 0.739122 0.450605 0.450605C0.739122 0.162087 1.13044 0 1.53846 0H15.3846C15.7926 0 16.184 0.162087 16.4725 0.450605C16.761 0.739122 16.9231 1.13044 16.9231 1.53846ZM14.2308 3.07692C14.2308 2.87291 14.1497 2.67725 14.0055 2.53299C13.8612 2.38874 13.6656 2.30769 13.4615 2.30769H10.7952C10.5963 2.30453 10.4037 2.3769 10.2561 2.5102C10.1085 2.64351 10.017 2.82782 10 3.02596C9.99301 3.13118 10.0077 3.23672 10.0433 3.33601C10.0788 3.4353 10.1343 3.52623 10.2065 3.60314C10.2786 3.68006 10.3658 3.74132 10.4626 3.78313C10.5594 3.82493 10.6638 3.84639 10.7692 3.84615H11.6048L10.0885 5.3625C9.56917 5.00399 8.97626 4.76618 8.35316 4.66649C7.73006 4.56681 7.09255 4.60776 6.48733 4.78637C5.88211 4.96497 5.32451 5.27669 4.85536 5.6987C4.38622 6.12072 4.01742 6.64233 3.77597 7.22534C3.53452 7.80834 3.42655 8.43797 3.45996 9.06811C3.49336 9.69825 3.6673 10.3129 3.96904 10.8671C4.27077 11.4214 4.69266 11.901 5.20379 12.2711C5.71493 12.6411 6.30236 12.8922 6.92308 13.0058V14.6154H5.02596C4.82712 14.6122 4.63447 14.6846 4.48689 14.8179C4.33931 14.9512 4.24778 15.1355 4.23077 15.3337C4.22378 15.4389 4.23851 15.5444 4.27402 15.6437C4.30954 15.743 4.36509 15.8339 4.43723 15.9108C4.50937 15.9878 4.59655 16.049 4.69336 16.0908C4.79017 16.1326 4.89455 16.1541 5 16.1538H6.92308V17.6663C6.92063 17.8648 6.9933 18.0568 7.12651 18.204C7.25972 18.3511 7.44363 18.4424 7.64135 18.4596C7.74657 18.4666 7.8521 18.4519 7.95139 18.4164C8.05068 18.3808 8.14161 18.3253 8.21853 18.2532C8.29544 18.181 8.35671 18.0938 8.39851 17.997C8.44032 17.9002 8.46177 17.7958 8.46154 17.6904V16.1538H10.3587C10.5572 16.1565 10.7493 16.0839 10.8965 15.9507C11.0437 15.8174 11.1349 15.6334 11.1519 15.4356C11.1589 15.3304 11.1442 15.2248 11.1087 15.1255C11.0732 15.0262 11.0176 14.9353 10.9455 14.8584C10.8733 14.7815 10.7861 14.7202 10.6893 14.6784C10.5925 14.6366 10.4881 14.6152 10.3827 14.6154H8.46154V13.0058C9.15475 12.8772 9.80485 12.5774 10.3527 12.1337C10.9006 11.6899 11.3289 11.1163 11.5987 10.4649C11.8685 9.81357 11.9712 9.1051 11.8976 8.40392C11.8239 7.70274 11.5762 7.03108 11.1769 6.45L12.6923 4.93365V5.74327C12.6894 5.94205 12.7618 6.13457 12.8951 6.2821C13.0283 6.42963 13.2125 6.52123 13.4106 6.53846C13.5158 6.54545 13.6213 6.53073 13.7206 6.49521C13.8199 6.45969 13.9108 6.40414 13.9878 6.332C14.0647 6.25986 14.1259 6.17268 14.1677 6.07587C14.2095 5.97906 14.231 5.87468 14.2308 5.76923V3.07692Z"
                            fill="#0F81C7"
                          />
                        </svg>
                        <p class="px-2 customFont">${data[i].gender}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    class="my-4 py-3 px-6 btnFont border border-transparent rounded-full shadow-sm text-md font-medium deleteBtn hover:bg-red-700 lg:my-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dlt"
                  >
                    Delete
                  </button>
              `;

        mainElement.appendChild(card);
      }
    }
  }
  const dltClass = document.getElementsByClassName("dlt");
  Array.from(dltClass).forEach((a) => {
    a.addEventListener("click", function () {
      a.parentElement.remove();
      // alert("a")
      const dltId = a.previousElementSibling.children[1].children[0].id;
      // console.log(dltId);
      data[dltId - 1] = undefined;
    });
  });
};
document.getElementById("search-icon").addEventListener("click", mencari);
data.forEach((dokter) => {
  if (dokter !== undefined) {
    const card = document.createElement("div");
    card.classList.add("flex");
    card.classList.add("flex-col");
    card.classList.add("md:flex-row");
    card.classList.add("items-start");
    card.classList.add("justify-between");
    card.classList.add("border-t-2");
    card.classList.add("border-[#EBEBEB]");
    card.classList.add("py-5");

    card.innerHTML = `
                          <div class="flex items-center">
                <img
                  src="./assets/${dokter.foto}"
                  alt="Doctor Image"
                  class="w-26 h-26 rounded-md mr-5"
                />
                <div>
                  <h1 class="text-xl lg:text-2xl font-semibold" id="${dokter.id}">Dr. ${dokter.nama}</h1>
                  <p class="text-gray-600 text-sm tag pt-3">
                    Doctor Details
                  </p>
                  <div class="flex items-center mt-2 text-gray-600">
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 18H22V20H0V18H2V1C2 0.734784 2.10536 0.48043 2.29289 0.292893C2.48043 0.105357 2.73478 0 3 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V18ZM10 6H8V8H10V10H12V8H14V6H12V4H10V6ZM13 18H15V12H7V18H9V14H13V18Z"
                        fill="#0F81C7"
                      />
                    </svg>
                    <p class="px-2 customFont">${dokter.tempat}</p>
                  </div>
                  <div class="flex items-center mt-2 text-gray-600">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.276 0.255C8.359 0.25 8.447 0.25 8.561 0.25H11.44C11.553 0.25 11.641 0.25 11.725 0.255C12.2446 0.286585 12.7445 0.464982 13.1667 0.769456C13.5889 1.07393 13.916 1.49197 14.11 1.975C14.141 2.052 14.17 2.135 14.205 2.243L14.208 2.253C14.292 2.477 14.483 2.732 14.751 2.936C14.781 2.959 14.811 2.98 14.841 3C16.994 3.003 18.119 3.042 18.893 3.673C19.053 3.803 19.198 3.948 19.327 4.107C20 4.934 20 6.159 20 8.609C20 9.231 20 9.541 19.85 9.784C19.8205 9.83139 19.787 9.87622 19.75 9.918C19.56 10.132 19.263 10.221 18.668 10.4L14 11.8V11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9H8C7.46957 9 6.96086 9.21071 6.58579 9.58579C6.21071 9.96086 6 10.4696 6 11V11.8L1.332 10.4C0.737 10.221 0.439 10.132 0.25 9.918C0.212992 9.8762 0.179542 9.83138 0.15 9.784C8.9407e-08 9.541 0 9.231 0 8.609C0 6.159 1.19209e-07 4.934 0.673 4.107C0.803 3.947 0.948 3.802 1.107 3.673C1.882 3.043 3.006 3.003 5.16 3C5.19 2.98 5.22 2.959 5.25 2.936C5.517 2.732 5.709 2.476 5.792 2.253C5.83 2.139 5.858 2.053 5.89 1.974C6.08415 1.49116 6.41133 1.07333 6.83351 0.769037C7.25569 0.464748 7.75554 0.2865 8.275 0.255M12.818 2.818C12.842 2.88 12.868 2.94 12.898 3H7.101C7.13 2.94 7.156 2.88 7.181 2.818V2.815L7.186 2.805L7.191 2.793L7.196 2.781L7.199 2.771L7.201 2.766L7.205 2.754L7.209 2.742L7.211 2.736L7.214 2.728L7.216 2.721L7.218 2.715C7.257 2.599 7.269 2.562 7.281 2.534C7.36915 2.31442 7.51781 2.12437 7.7097 1.98594C7.90159 1.84751 8.12883 1.76639 8.365 1.752C8.397 1.75 8.437 1.75 8.58 1.75H11.418C11.561 1.75 11.601 1.75 11.633 1.752C12.115 1.782 12.537 2.086 12.718 2.534C12.728 2.562 12.741 2.597 12.78 2.715L12.782 2.721L12.784 2.728L12.787 2.736L12.789 2.742L12.793 2.754L12.797 2.766L12.799 2.771L12.803 2.781L12.807 2.793L12.812 2.805L12.816 2.815L12.818 2.818ZM12 10.5H8C7.86739 10.5 7.74021 10.5527 7.64645 10.6464C7.55268 10.7402 7.5 10.8674 7.5 11V13.162C7.50002 13.2619 7.52994 13.3594 7.58591 13.4421C7.64187 13.5248 7.72131 13.5889 7.814 13.626L8.514 13.906C9.4679 14.2877 10.5321 14.2877 11.486 13.906L12.186 13.626C12.2787 13.5889 12.3581 13.5248 12.4141 13.4421C12.4701 13.3594 12.5 13.2619 12.5 13.162V11C12.5 10.8674 12.4473 10.7402 12.3536 10.6464C12.2598 10.5527 12.1326 10.5 12 10.5ZM6.01 13.37L1.006 11.868C1.036 14.982 1.218 17.851 2.318 18.828C3.636 20 5.758 20 10 20C14.243 20 16.364 20 17.682 18.828C18.782 17.851 18.964 14.982 18.994 11.868L13.989 13.369C13.9513 13.7314 13.8154 14.0767 13.5958 14.3675C13.3762 14.6583 13.0813 14.8836 12.743 15.019L12.043 15.299C10.7315 15.8237 9.26847 15.8237 7.957 15.299L7.257 15.019C6.9187 14.8836 6.62383 14.6583 6.40424 14.3675C6.18464 14.0767 6.04867 13.7314 6.011 13.369"
                        fill="#0F81C7"
                      />
                    </svg>
                    <p class="px-2 customFont">${dokter.pengalaman} Years Experience</p>
                  </div>
                  <div class="flex items-center mt-2 text-gray-600">
                    <svg
                      width="17"
                      height="20"
                      viewBox="0 0 17 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.376 8.62692C10.4208 9.17627 10.2959 9.72614 10.0183 10.2023C9.74058 10.6784 9.32346 11.0578 8.82325 11.2893C8.32304 11.5207 7.76384 11.5931 7.22118 11.4966C6.67853 11.4001 6.17856 11.1394 5.78882 10.7496C5.39909 10.3599 5.13836 9.85994 5.04185 9.31728C4.94535 8.77462 5.01772 8.21542 5.2492 7.71521C5.48067 7.215 5.86009 6.79788 6.33621 6.52021C6.81232 6.24253 7.36219 6.11767 7.91154 6.1625C8.5478 6.21442 9.14492 6.49074 9.59632 6.94214C10.0477 7.39354 10.324 7.99066 10.376 8.62692ZM16.9231 1.53846V18.4615C16.9231 18.8696 16.761 19.2609 16.4725 19.5494C16.184 19.8379 15.7926 20 15.3846 20H1.53846C1.13044 20 0.739122 19.8379 0.450605 19.5494C0.162087 19.2609 0 18.8696 0 18.4615V1.53846C0 1.13044 0.162087 0.739122 0.450605 0.450605C0.739122 0.162087 1.13044 0 1.53846 0H15.3846C15.7926 0 16.184 0.162087 16.4725 0.450605C16.761 0.739122 16.9231 1.13044 16.9231 1.53846ZM14.2308 3.07692C14.2308 2.87291 14.1497 2.67725 14.0055 2.53299C13.8612 2.38874 13.6656 2.30769 13.4615 2.30769H10.7952C10.5963 2.30453 10.4037 2.3769 10.2561 2.5102C10.1085 2.64351 10.017 2.82782 10 3.02596C9.99301 3.13118 10.0077 3.23672 10.0433 3.33601C10.0788 3.4353 10.1343 3.52623 10.2065 3.60314C10.2786 3.68006 10.3658 3.74132 10.4626 3.78313C10.5594 3.82493 10.6638 3.84639 10.7692 3.84615H11.6048L10.0885 5.3625C9.56917 5.00399 8.97626 4.76618 8.35316 4.66649C7.73006 4.56681 7.09255 4.60776 6.48733 4.78637C5.88211 4.96497 5.32451 5.27669 4.85536 5.6987C4.38622 6.12072 4.01742 6.64233 3.77597 7.22534C3.53452 7.80834 3.42655 8.43797 3.45996 9.06811C3.49336 9.69825 3.6673 10.3129 3.96904 10.8671C4.27077 11.4214 4.69266 11.901 5.20379 12.2711C5.71493 12.6411 6.30236 12.8922 6.92308 13.0058V14.6154H5.02596C4.82712 14.6122 4.63447 14.6846 4.48689 14.8179C4.33931 14.9512 4.24778 15.1355 4.23077 15.3337C4.22378 15.4389 4.23851 15.5444 4.27402 15.6437C4.30954 15.743 4.36509 15.8339 4.43723 15.9108C4.50937 15.9878 4.59655 16.049 4.69336 16.0908C4.79017 16.1326 4.89455 16.1541 5 16.1538H6.92308V17.6663C6.92063 17.8648 6.9933 18.0568 7.12651 18.204C7.25972 18.3511 7.44363 18.4424 7.64135 18.4596C7.74657 18.4666 7.8521 18.4519 7.95139 18.4164C8.05068 18.3808 8.14161 18.3253 8.21853 18.2532C8.29544 18.181 8.35671 18.0938 8.39851 17.997C8.44032 17.9002 8.46177 17.7958 8.46154 17.6904V16.1538H10.3587C10.5572 16.1565 10.7493 16.0839 10.8965 15.9507C11.0437 15.8174 11.1349 15.6334 11.1519 15.4356C11.1589 15.3304 11.1442 15.2248 11.1087 15.1255C11.0732 15.0262 11.0176 14.9353 10.9455 14.8584C10.8733 14.7815 10.7861 14.7202 10.6893 14.6784C10.5925 14.6366 10.4881 14.6152 10.3827 14.6154H8.46154V13.0058C9.15475 12.8772 9.80485 12.5774 10.3527 12.1337C10.9006 11.6899 11.3289 11.1163 11.5987 10.4649C11.8685 9.81357 11.9712 9.1051 11.8976 8.40392C11.8239 7.70274 11.5762 7.03108 11.1769 6.45L12.6923 4.93365V5.74327C12.6894 5.94205 12.7618 6.13457 12.8951 6.2821C13.0283 6.42963 13.2125 6.52123 13.4106 6.53846C13.5158 6.54545 13.6213 6.53073 13.7206 6.49521C13.8199 6.45969 13.9108 6.40414 13.9878 6.332C14.0647 6.25986 14.1259 6.17268 14.1677 6.07587C14.2095 5.97906 14.231 5.87468 14.2308 5.76923V3.07692Z"
                        fill="#0F81C7"
                      />
                    </svg>
                    <p class="px-2 customFont">${dokter.gender}</p>
                  </div>
                </div>
              </div>
              <button
                class="my-4 py-3 px-6 btnFont border border-transparent rounded-full shadow-sm text-md font-medium deleteBtn hover:bg-red-700 lg:my-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dlt"
              >
                Delete
              </button>
            `;

    mainElement.appendChild(card);
  }
});
const dltClass = document.getElementsByClassName("dlt");
Array.from(dltClass).forEach((a) => {
  a.addEventListener("click", function () {
    a.parentElement.remove();
    // alert("a")
    const dltId = a.previousElementSibling.children[1].children[0].id;
    // console.log(dltId);
    data[dltId - 1] = undefined;
  });
});
submit.addEventListener("click", function (e) {
  e.preventDefault();
  const namaInput = document.getElementById("input-nama").value;
  const experienceInput = document.getElementById("input-experience").value;
  const hospitalInput = document.getElementById("input-hospital").value;
  const genderInput = document.getElementById("input-gender").value;
  if (!namaInput || !experienceInput || !hospitalInput || !genderInput) {
    alert('Input required')
  }
  if (isNaN(Number(experienceInput))) {
    alert('Input should be number')
  }
  if (!namaInput && !experienceInput && !hospitalInput && !genderInput) {
    return
  } else if (isNaN(Number(experienceInput))) {
    return
  }
  if (genderInput !== 'Male' && genderInput !== 'Female') {
    alert('Gender should be "Male" or "Female"')
    return
  }
  let newObj = {
    id: data.length + 1,
    nama: namaInput,
    pengalaman: experienceInput,
    gender: genderInput,
    tempat: hospitalInput,
  };
  if (newObj.gender === "Male") {
    newObj.foto = "avatar.webp";
  } else {
    newObj.foto = "avatar2.webp";
  }
  data.push(newObj);
  mainElement.innerHTML = "";
  data.forEach((dokter) => {
    if (dokter !== undefined) {
      const card = document.createElement("div");
      card.classList.add("flex");
      card.classList.add("flex-col");
      card.classList.add("md:flex-row");
      card.classList.add("items-start");
      card.classList.add("justify-between");
      card.classList.add("border-t-2");
      card.classList.add("border-[#EBEBEB]");
      card.classList.add("py-5");

      card.innerHTML = `
                            <div class="flex items-center">
                  <img
                    src="./assets/${dokter.foto}"
                    alt="Doctor Image"
                    class="w-26 h-26 rounded-md mr-5"
                  />
                  <div>
                    <h1 class="text-xl lg:text-2xl font-semibold" id="${dokter.id}">Dr. ${dokter.nama}</h1>
                    <p class="text-gray-600 text-sm tag pt-3">
                      Doctor Details
                    </p>
                    <div class="flex items-center mt-2 text-gray-600">
                      <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 18H22V20H0V18H2V1C2 0.734784 2.10536 0.48043 2.29289 0.292893C2.48043 0.105357 2.73478 0 3 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V18ZM10 6H8V8H10V10H12V8H14V6H12V4H10V6ZM13 18H15V12H7V18H9V14H13V18Z"
                          fill="#0F81C7"
                        />
                      </svg>
                      <p class="px-2 customFont">${dokter.tempat}</p>
                    </div>
                    <div class="flex items-center mt-2 text-gray-600">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.276 0.255C8.359 0.25 8.447 0.25 8.561 0.25H11.44C11.553 0.25 11.641 0.25 11.725 0.255C12.2446 0.286585 12.7445 0.464982 13.1667 0.769456C13.5889 1.07393 13.916 1.49197 14.11 1.975C14.141 2.052 14.17 2.135 14.205 2.243L14.208 2.253C14.292 2.477 14.483 2.732 14.751 2.936C14.781 2.959 14.811 2.98 14.841 3C16.994 3.003 18.119 3.042 18.893 3.673C19.053 3.803 19.198 3.948 19.327 4.107C20 4.934 20 6.159 20 8.609C20 9.231 20 9.541 19.85 9.784C19.8205 9.83139 19.787 9.87622 19.75 9.918C19.56 10.132 19.263 10.221 18.668 10.4L14 11.8V11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9H8C7.46957 9 6.96086 9.21071 6.58579 9.58579C6.21071 9.96086 6 10.4696 6 11V11.8L1.332 10.4C0.737 10.221 0.439 10.132 0.25 9.918C0.212992 9.8762 0.179542 9.83138 0.15 9.784C8.9407e-08 9.541 0 9.231 0 8.609C0 6.159 1.19209e-07 4.934 0.673 4.107C0.803 3.947 0.948 3.802 1.107 3.673C1.882 3.043 3.006 3.003 5.16 3C5.19 2.98 5.22 2.959 5.25 2.936C5.517 2.732 5.709 2.476 5.792 2.253C5.83 2.139 5.858 2.053 5.89 1.974C6.08415 1.49116 6.41133 1.07333 6.83351 0.769037C7.25569 0.464748 7.75554 0.2865 8.275 0.255M12.818 2.818C12.842 2.88 12.868 2.94 12.898 3H7.101C7.13 2.94 7.156 2.88 7.181 2.818V2.815L7.186 2.805L7.191 2.793L7.196 2.781L7.199 2.771L7.201 2.766L7.205 2.754L7.209 2.742L7.211 2.736L7.214 2.728L7.216 2.721L7.218 2.715C7.257 2.599 7.269 2.562 7.281 2.534C7.36915 2.31442 7.51781 2.12437 7.7097 1.98594C7.90159 1.84751 8.12883 1.76639 8.365 1.752C8.397 1.75 8.437 1.75 8.58 1.75H11.418C11.561 1.75 11.601 1.75 11.633 1.752C12.115 1.782 12.537 2.086 12.718 2.534C12.728 2.562 12.741 2.597 12.78 2.715L12.782 2.721L12.784 2.728L12.787 2.736L12.789 2.742L12.793 2.754L12.797 2.766L12.799 2.771L12.803 2.781L12.807 2.793L12.812 2.805L12.816 2.815L12.818 2.818ZM12 10.5H8C7.86739 10.5 7.74021 10.5527 7.64645 10.6464C7.55268 10.7402 7.5 10.8674 7.5 11V13.162C7.50002 13.2619 7.52994 13.3594 7.58591 13.4421C7.64187 13.5248 7.72131 13.5889 7.814 13.626L8.514 13.906C9.4679 14.2877 10.5321 14.2877 11.486 13.906L12.186 13.626C12.2787 13.5889 12.3581 13.5248 12.4141 13.4421C12.4701 13.3594 12.5 13.2619 12.5 13.162V11C12.5 10.8674 12.4473 10.7402 12.3536 10.6464C12.2598 10.5527 12.1326 10.5 12 10.5ZM6.01 13.37L1.006 11.868C1.036 14.982 1.218 17.851 2.318 18.828C3.636 20 5.758 20 10 20C14.243 20 16.364 20 17.682 18.828C18.782 17.851 18.964 14.982 18.994 11.868L13.989 13.369C13.9513 13.7314 13.8154 14.0767 13.5958 14.3675C13.3762 14.6583 13.0813 14.8836 12.743 15.019L12.043 15.299C10.7315 15.8237 9.26847 15.8237 7.957 15.299L7.257 15.019C6.9187 14.8836 6.62383 14.6583 6.40424 14.3675C6.18464 14.0767 6.04867 13.7314 6.011 13.369"
                          fill="#0F81C7"
                        />
                      </svg>
                      <p class="px-2 customFont">${dokter.pengalaman} Years Experience</p>
                    </div>
                    <div class="flex items-center mt-2 text-gray-600">
                      <svg
                        width="17"
                        height="20"
                        viewBox="0 0 17 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.376 8.62692C10.4208 9.17627 10.2959 9.72614 10.0183 10.2023C9.74058 10.6784 9.32346 11.0578 8.82325 11.2893C8.32304 11.5207 7.76384 11.5931 7.22118 11.4966C6.67853 11.4001 6.17856 11.1394 5.78882 10.7496C5.39909 10.3599 5.13836 9.85994 5.04185 9.31728C4.94535 8.77462 5.01772 8.21542 5.2492 7.71521C5.48067 7.215 5.86009 6.79788 6.33621 6.52021C6.81232 6.24253 7.36219 6.11767 7.91154 6.1625C8.5478 6.21442 9.14492 6.49074 9.59632 6.94214C10.0477 7.39354 10.324 7.99066 10.376 8.62692ZM16.9231 1.53846V18.4615C16.9231 18.8696 16.761 19.2609 16.4725 19.5494C16.184 19.8379 15.7926 20 15.3846 20H1.53846C1.13044 20 0.739122 19.8379 0.450605 19.5494C0.162087 19.2609 0 18.8696 0 18.4615V1.53846C0 1.13044 0.162087 0.739122 0.450605 0.450605C0.739122 0.162087 1.13044 0 1.53846 0H15.3846C15.7926 0 16.184 0.162087 16.4725 0.450605C16.761 0.739122 16.9231 1.13044 16.9231 1.53846ZM14.2308 3.07692C14.2308 2.87291 14.1497 2.67725 14.0055 2.53299C13.8612 2.38874 13.6656 2.30769 13.4615 2.30769H10.7952C10.5963 2.30453 10.4037 2.3769 10.2561 2.5102C10.1085 2.64351 10.017 2.82782 10 3.02596C9.99301 3.13118 10.0077 3.23672 10.0433 3.33601C10.0788 3.4353 10.1343 3.52623 10.2065 3.60314C10.2786 3.68006 10.3658 3.74132 10.4626 3.78313C10.5594 3.82493 10.6638 3.84639 10.7692 3.84615H11.6048L10.0885 5.3625C9.56917 5.00399 8.97626 4.76618 8.35316 4.66649C7.73006 4.56681 7.09255 4.60776 6.48733 4.78637C5.88211 4.96497 5.32451 5.27669 4.85536 5.6987C4.38622 6.12072 4.01742 6.64233 3.77597 7.22534C3.53452 7.80834 3.42655 8.43797 3.45996 9.06811C3.49336 9.69825 3.6673 10.3129 3.96904 10.8671C4.27077 11.4214 4.69266 11.901 5.20379 12.2711C5.71493 12.6411 6.30236 12.8922 6.92308 13.0058V14.6154H5.02596C4.82712 14.6122 4.63447 14.6846 4.48689 14.8179C4.33931 14.9512 4.24778 15.1355 4.23077 15.3337C4.22378 15.4389 4.23851 15.5444 4.27402 15.6437C4.30954 15.743 4.36509 15.8339 4.43723 15.9108C4.50937 15.9878 4.59655 16.049 4.69336 16.0908C4.79017 16.1326 4.89455 16.1541 5 16.1538H6.92308V17.6663C6.92063 17.8648 6.9933 18.0568 7.12651 18.204C7.25972 18.3511 7.44363 18.4424 7.64135 18.4596C7.74657 18.4666 7.8521 18.4519 7.95139 18.4164C8.05068 18.3808 8.14161 18.3253 8.21853 18.2532C8.29544 18.181 8.35671 18.0938 8.39851 17.997C8.44032 17.9002 8.46177 17.7958 8.46154 17.6904V16.1538H10.3587C10.5572 16.1565 10.7493 16.0839 10.8965 15.9507C11.0437 15.8174 11.1349 15.6334 11.1519 15.4356C11.1589 15.3304 11.1442 15.2248 11.1087 15.1255C11.0732 15.0262 11.0176 14.9353 10.9455 14.8584C10.8733 14.7815 10.7861 14.7202 10.6893 14.6784C10.5925 14.6366 10.4881 14.6152 10.3827 14.6154H8.46154V13.0058C9.15475 12.8772 9.80485 12.5774 10.3527 12.1337C10.9006 11.6899 11.3289 11.1163 11.5987 10.4649C11.8685 9.81357 11.9712 9.1051 11.8976 8.40392C11.8239 7.70274 11.5762 7.03108 11.1769 6.45L12.6923 4.93365V5.74327C12.6894 5.94205 12.7618 6.13457 12.8951 6.2821C13.0283 6.42963 13.2125 6.52123 13.4106 6.53846C13.5158 6.54545 13.6213 6.53073 13.7206 6.49521C13.8199 6.45969 13.9108 6.40414 13.9878 6.332C14.0647 6.25986 14.1259 6.17268 14.1677 6.07587C14.2095 5.97906 14.231 5.87468 14.2308 5.76923V3.07692Z"
                          fill="#0F81C7"
                        />
                      </svg>
                      <p class="px-2 customFont">${dokter.gender}</p>
                    </div>
                  </div>
                </div>
                <button
                  class="my-4 py-3 px-6 btnFont border border-transparent rounded-full shadow-sm text-md font-medium deleteBtn hover:bg-red-700 lg:my-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dlt"
                >
                  Delete
                </button>
              `;

      mainElement.appendChild(card);
    }
  });

  console.log(newObj);
  const dltClass = document.getElementsByClassName("dlt");
  Array.from(dltClass).forEach((a) => {
    a.addEventListener("click", function () {
      a.parentElement.remove();
      // alert("a")
      const dltId = a.previousElementSibling.children[1].children[0].id;
      // console.log(dltId);
      data[dltId - 1] = undefined;
    });
  });
});
// });
