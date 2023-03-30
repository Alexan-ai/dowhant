<template>
  <div
    class="full-width row wrap justify-center items-center content-center q-pa-md q-mt-lg"
  >
    <div class="col-12 col-md-6 self-center formulario text-center">
      <q-form id="form" @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled label="Tu nombre*" hint="Name and surname" id="name" />
        <q-input
          filled
          label="Vistas promedio *"
          id="vistas"
          hint="Name and surname"
        />
        <q-input
          filled
          label="Ingresos*"
          id="ingresos"
          hint="Name and surname"
        />

        <q-input filled type="number" label="Gastos *" id="gastos" />

        <div>
          <q-btn
            id="Submit"
            label="Submit"
            type="submit"
            color="secondary"
            onclick="AddData()"
          />
          <q-btn
            label="Update"
            type="Update"
            color="secondary"
            flat
            id="Update"
            onclick="AddData()"
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>

    <div class="listado col-12 col-md-6 self-center">
      <div class="q-pa-md">
        <q-markup-table class="crudTable">
          <thead>
            <tr>
              <th class="text-left">Artista</th>
              <th class="text-right">Vistas</th>
              <th class="text-right">Ingresos</th>
              <th class="text-right">Gastos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">Ale Xan</td>
              <td class="text-right">159</td>
              <td class="text-right">6</td>
              <td class="text-right">24</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.formulario {
  max-width: 400px;
  overflow: auto;
  width: 100%;
}
.listado {
  width: 100%;
  overflow: auto;
}
</style>
<script>
function validateForm() {
  var name = document.getElementById("name").value;
  var vistas = document.getElementById("vistas").value;
  var ingresos = document.getElementById("ingresos").value;
  var gastos = document.getElementById("gastos").value;

  if (name == "") {
    alert("Nombre requerido");
    return false;
  }

  if (vistas == "") {
    alert("Numero de vistas requerido");
    return false;
  }

  if (ingresos == "") {
    alert("Ingresos requerido");
    return false;
  }

  if (gastos == "") {
    alert("Ingresos requerido");
    return false;
  }

  return true;
}

function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  var html = "";
  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.vistas + "</td>";
    html += "<td>" + element.ingresos + "</td>";
    html += "<td>" + element.gastos + "</td>";
    html +=
      '<td><q-btn onclick="deleteData(' +
      index +
      ')" class="color: white" label="Fuchsia"">Delete</q-btn> ';
    '<td><q-btn onclick="updateData(' +
      index +
      ')" class="color: white" label="Fuchsia"">edit</q-btn> ';
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = html;
}

// document.onload = showData();

// añadir data
function AddData() {
  if (validateForm() == true) {
    var name = document.getElementById("name").value;
    var vistas = document.getElementById("vistas").value;
    var ingresos = document.getElementById("ingresos").value;
    var gastos = document.getElementById("gastos").value;

    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.push({
      name: name,
      vistas: vistas,
      ingresos: ingresos,
      gastos: gastos,
    });

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    // showData();
    document.getElementById("name").value = "";
    document.getElementById("vistas").value = "";
    document.getElementById("ingresos").value = "";
    document.getElementById("gastos").value = "";
  }
}
</script>
