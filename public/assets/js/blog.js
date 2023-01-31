const blogs = [
  {
    title: "Learning Javascript",
    date: new Date(2018, 11, 12),
  },
  {
    title: "Learning CSS",
    date: new Date(2019, 7, 01),
  },
  {
    title: "Learning React",
    date: new Date(2020, 11, 12),
  },
  {
    title: "Learning ASP.NET MVC CORE",
    date: new Date(2021, 6, 19),
  },
  {
    title: "Learning C#",
    date: new Date(2021, 6, 20),
  },
  {
    title: "Learning PHP",
    date: new Date(2021, 11, 19),
  },
];

const firstTitle = document.getElementById("one-title");
const firstDate = document.getElementById("one-date");

const secondTitle = document.getElementById("second-title");
const secondDate = document.getElementById("second-date");

let arr = Object.values(blogs);

let arrSort = arr.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

for (const key in arrSort) {
  const element = arrSort[0];
  firstTitle.innerHTML = element.title;
  firstDate.innerHTML = element.date.toDateString();

  const element1 = arrSort[1];
  secondTitle.innerHTML = element1.title;
  secondDate.innerHTML = element1.date.toDateString();
}
