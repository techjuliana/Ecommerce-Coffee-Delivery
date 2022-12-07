import latte from "../assets/coffees/latte.png";
import arabe from "../assets/coffees/arabe.png";
import cubano from "../assets/coffees/cubano.png";
import irlandes from "../assets/coffees/irlandes.png";
import havaiano from "../assets/coffees/havaiano.png";
import expresso from "../assets/coffees/americano1.png";
import americano from "../assets/coffees/americano.png";
import capuccino from "../assets/coffees/capuccino.png";
import macchiato from "../assets/coffees/macchiato.png";
import mocaccino from "../assets/coffees/mocaccino.png";
import cafe_gelado from "../assets/coffees/gelado.png";
import cafe_com_leite from "../assets/coffees/leite.png";
import expresso_cremoso from "../assets/coffees/cremoso.png";
import chocolate_quente from "../assets/coffees/chocolate.png";

const dados = [
  {
    id: "1",
    title: "Expresso Tradicional",
    tags: ["Tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    srcImg: expresso,
    price: "9,90",
    amount: 0,
  },
  {
    id: "2",
    title: "Expresso Americano",
    tags: ["Tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    srcImg: americano,
    price: "9,90",
    amount: 0,
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    tags: ["Tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    srcImg: expresso_cremoso,
    price: "9,90",
    amount: 0,
  },
  {
    id: "4",
    title: "Expresso Gelado",
    tags: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    srcImg: cafe_gelado,
    price: "9,90",
    amount: 0,
  },
  {
    id: "5",
    title: "Café com Leite",
    tags: ["Tradicional", "Com Leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    srcImg: cafe_com_leite,
    price: "9,90",
    amount: 0,
  },
  {
    id: "6",
    title: "Latte",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Uma dose de café expresso, com o dobro de leite e espuma cremosa",
    srcImg: latte,
    price: "9,90",
    amount: 0,
  },
  {
    id: "7",
    title: "Capuccino",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    srcImg: capuccino,
    price: "9,90",
    amount: 0,
  },
  {
    id: "8",
    title: "Macchiato",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    srcImg: macchiato,
    price: "9,90",
    amount: 0,
  },
  {
    id: "9",
    title: "Mocaccino",
    tags: ["Tradicional", "Com Leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    srcImg: mocaccino,
    price: "9,90",
    amount: 0,
  },
  {
    id: "10",
    title: "Chocolate Quente",
    tags: ["Especial", "Com Leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    srcImg: chocolate_quente,
    price: "9,90",
    amount: 0,
  },
  {
    id: "11",
    title: "Cubano",
    tags: ["Especial", "Alcoólico", "Gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    srcImg: cubano,
    price: "9,90",
    amount: 0,
  },
  {
    id: "12",
    title: "Havaiano",
    tags: ["Especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    srcImg: havaiano,
    price: "9,90",
    amount: 0,
  },
  {
    id: "13",
    title: "Árabe",
    tags: ["Especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    srcImg: arabe,
    price: "9,90",
    amount: 0,
  },
  {
    id: "14",
    title: "Irlandês",
    tags: ["Especial", "Alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    srcImg: irlandes,
    price: "9,90",
    amount: 0,
  },
  {
    id: "15",
    title: "Latte Vegano",
    tags: ["Especial", "Vegano"],
    description:
      "Uma dose de café expresso com  leite de soja e espuma cremosa",
    srcImg: latte,
    price: "9,90",
    amount: 0,
  },
  {
    id: "16",
    title: "Americano Gelado",
    tags: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso americano e cubos de gelo",
    srcImg: americano,
    price: "9,90",
    amount: 0,
  },
];

export default dados;
