//calculadora logica

const CaracateresPermitidos = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "-",
  "/",
  "*",
  "+",
  ".",
  "%",
  "**2",
  "(",
  ")"
];
const Borradores = ["C", "X", "CE"];

const resultado = () => {
  try {
    $(".resultado").text(eval($(".operacion").html()));
  } catch (e) {
    console.log(e);
  }
};

$(".btn").click((e) => {
  let Isborra = Borradores.find((n) => n == e.target.value);
  if (Isborra != undefined) {
    Isborra == "X"
      ? $(".operacion").html($(".operacion").html().slice(0, -1))
      : console.log();
    Isborra == "C"
      ? $(".operacion").html($(".operacion").html().slice(0, -1))
      : console.log();
    if (Isborra == "CE") {
      $(".operacion").html("");
      $(".resultado").html("0");
    }
    resultado();

  }

  if (CaracateresPermitidos.find((n) => n == e.target.value) != undefined) {
    $(".operacion").append(e.target.value);
    $(".operacion").scrollLeft(600000);
    resultado();
  }

  if (e.target.value == "=") {
    try {
      $(".resultado").text(eval($(".operacion").html()));
    } catch (e) {
      $(".resultado").text("Error");
    }
  }

  if ($(".operacion").html().trim() == "") $(".resultado").html("0");
});





//pip

