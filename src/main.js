import './style.css'

const _procesarDatos = () => {
  const campoNombre = document.querySelector("#campo-nombre");
  const campoApellidos = document.querySelector("#campo-apellidos");
  const campoEmail = document.querySelector("#campo-email");
  const campoMovil = document.querySelector("#campo-movil");
  const campoCiudad = document.querySelector("#campo-ciudad");
  const campoPais = document.querySelector("#campo-pais");
  const campoIcono = document.querySelector("#campo-icono");

  let htmlIcono;
  if (campoIcono.value === "0") { htmlIcono = `<i class="fa-solid fa-triangle-exclamation"></i>`; }
  if (campoIcono.value === "smile") { htmlIcono = `<i class="fa-regular fa-face-smile"></i>`; }
  if (campoIcono.value === "react") { htmlIcono = `<i class="fa-brands fa-react"></i>`; }
  if (campoIcono.value === "javascript") { htmlIcono = `<i class="fa-brands fa-js"></i>`; }
  if (campoIcono.value === "html") { htmlIcono = `<i class="fa-brands fa-html5"></i>`; }
  if (campoIcono.value === "css") { htmlIcono = `<i class="fa-brands fa-css3-alt"></i>`; }

  const cardInfo = {
    fullName: `${campoNombre.value} ${campoApellidos.value}`,
    email: campoEmail.value,
    nMovil: campoMovil.value,
    lugar: `${campoCiudad.value}, ${campoPais.value}`,
    icono: htmlIcono
  }

  return cardInfo;
}

const _renderCard = (infoObj) => {
  const cardName = document.querySelector("#pName");
  const cardEmail = document.querySelector("#pEmail");
  const cardCell = document.querySelector("#pMovil");
  const cardPlace = document.querySelector("#pLugar");
  const cardIcon = document.querySelector("#icono");

  cardName.innerHTML = infoObj.fullName;
  cardEmail.innerHTML = infoObj.email;
  cardCell.innerHTML = infoObj.nMovil;
  cardPlace.innerHTML = infoObj.lugar;
  cardIcon.innerHTML = infoObj.icono;
}

const listaDatos = [];
const _storeCard = (datos) => {
  listaDatos.unshift(datos);
  console.log(listaDatos);
  console.log("Datos guardados");
  return listaDatos;
}

const _renderDataList = () => {
  const cardBox = document.querySelector("#card-box");
  const renderHTML = listaDatos.map((card) => {
    return `
    <div class="card w-60 h-35 border-1 flex flex-row border-gray-600 rounded-lg gap-3 p-3">
      <div class="card__left-side flex flex-col w-30">
        <div class="text-2xl mb-1">
          <p>&lt;/</p>
        </div>
  
        <div class="border-b-3 rounded-lg border-gray-600"></div>
  
        <div class="text-xs">
          <p id="pName">${card.fullName}</p>
          <p id="pEmail">${card.email}</p>
          <p id="pMovil">${card.nMovil}</p>
          <p id="pLugar">${card.lugar}</p>
        </div>
      </div>
      <div class="card-right-side w-30 flex justify-center items-center text-4xl">
        ${card.icono}
      </div>
    </div>`;
  });

  return cardBox.innerHTML = renderHTML.join("");
}

const borrarCampos = () => {
  const campoNombre = document.querySelector("#campo-nombre");
  const campoApellidos = document.querySelector("#campo-apellidos");
  const campoEmail = document.querySelector("#campo-email");
  const campoMovil = document.querySelector("#campo-movil");
  const campoCiudad = document.querySelector("#campo-ciudad");
  const campoPais = document.querySelector("#campo-pais");
  const campoIcono = document.querySelector("#campo-icono");

  campoNombre.value = "";
  campoApellidos.value = "";
  campoEmail.value = "";
  campoMovil.value = "";
  campoCiudad.value = "";
  campoPais.value = "";
  campoIcono.value = 0;

  console.log("Campos borrados");
}

const borrarLista = () => {
  listaDatos.length = 0;
  _renderDataList();
  console.log("Lista borrada");
}

const generarTarjeta = () => {
  const datos = _procesarDatos();
  _renderCard(datos);
  _storeCard(datos);
  _renderDataList();
}

document.querySelector("#createCardBtn").addEventListener("click", generarTarjeta);
document.querySelector("#deleteBtn").addEventListener("click", borrarCampos);
document.querySelector("#deleteList").addEventListener("click", borrarLista);