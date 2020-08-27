var radiologia = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "3:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "3:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "4:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];

var traumatologia = [
  {
    HORA: "8:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];

var dental = [
  {
    HORA: "8:30",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "1:00",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "1:30",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "2:00",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
  },
];

// 1.

traumatologia.push(
  {
    HORA: "9:00",
    ESPECIALISTA: "RENÉ POBLETE",
    PACIENTE: "ANA GELLONA",
    RUT: "13123329-7",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "9:30",
    ESPECIALISTA: "MARIA SOLAR",
    PACIENTE: "RAMIRO ANDRADE",
    RUT: "12221451-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL LOYOLA",
    PACIENTE: "CARMEN ISLA",
    RUT: "10112348-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "ANTONIO LARENAS",
    PACIENTE: "PABLO LOAYZA",
    RUT: "13453234-1",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "MATIAS ARAVENA",
    PACIENTE: "SUSANA POBLETE",
    RUT: "14345656-6",
    PREVISION: "FONASA",
  }
);

// 2.

radiologia.pop();
radiologia.shift();

// 3.

dental.forEach((dental) => {
  document.write(
    `<p> ${dental.HORA} - ${dental.ESPECIALISTA} - ${dental.PACIENTE} - ${dental.RUT} - ${dental.PREVISION} </p>`
  );
});

// 4.

var pacientes = radiologia.concat(traumatologia, dental);
pacientes.forEach((pacientes) => {
  document.write(`<p> ${pacientes.PACIENTE} </p>`);
});

// 5.

dental = dental.map((dental) => {
  if (dental.PREVISION === "FONASA") {
    dental.PREVISION="ISAPRE";
  } else if (dental.PREVISION === "ISAPRE") {
    dental.PREVISION="FONASA";
  }
  document.write(`<p> ${dental.PREVISION} ; ${dental.PACIENTE} ; ${dental.RUT}</p>`)
});



// Trabajo Pasado

document.write(`<h1>Estadisticas Centro Medico Ñuñoa</h1>`);
document.write(
  `<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`
);
document.write(
  `<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`
);
document.write(
  `<p>Cantidad de atenciones para Traumatología: ${dental.length}</p>`
);
document.write(
  `<p>Primera Atención: ${radiologia[0].PACIENTE} - ${radiologia[0].RUT} - ${
    radiologia[0].PREVISION
  } | Última atención: ${radiologia[radiologia.length - 1].PACIENTE} - ${
    radiologia[radiologia.length - 1].RUT
  } - ${radiologia[radiologia.length - 1].PREVISION}</p>`
);
document.write(
  `<p>Primera Atención: ${traumatologia[0].PACIENTE} - ${
    traumatologia[0].RUT
  } - ${traumatologia[0].PREVISION} | Última atención: ${
    traumatologia[traumatologia.length - 1].PACIENTE
  } - ${traumatologia[traumatologia.length - 1].RUT} - ${
    traumatologia[traumatologia.length - 1].PREVISION
  }</p>`
);
document.write(
  `<p>Primera Atención: ${dental[0].PACIENTE} - ${dental[0].RUT} - ${
    dental[0].PREVISION
  } | Última atención: ${dental[dental.length - 1].PACIENTE} - ${
    dental[dental.length - 1].RUT
  } - ${dental[dental.length - 1].PREVISION}</p>`
);
