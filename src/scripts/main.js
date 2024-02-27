const dataAniversario = new Date ("Jun 18, 2024 20:30:00");
const dataAniversarioMs = dataAniversario.getTime();

const relogio = setInterval(() => {
  const hoje = new Date ();
  const hojeMs = hoje.getTime();

  const msAteEvento = dataAniversarioMs - hojeMs;

  const diasAteEvento = Math.floor((((msAteEvento / 1000) / 60) / 60) / 24);
  const horasAteEvento = Math.floor((((msAteEvento / 1000) / 60) / 60)) % 24;
  const minutosAteEvento = Math.floor((msAteEvento / 1000) / 60) % 60;
  const segundosAteEvento = Math.floor(msAteEvento / 1000) % 60;

  const contadorDias = document.getElementById('contador__dias');
  contadorDias.innerHTML = `${diasAteEvento}`;

  const contadorhoras = document.getElementById('contador__horas');
  contadorhoras.innerHTML = `${horasAteEvento}`;

  const contadorMin = document.getElementById('contador__minutos');
  contadorMin.innerHTML = `${minutosAteEvento}`;
  const contadorSeg = document.getElementById('contador__segundos');
  contadorSeg.innerHTML = `${segundosAteEvento}`;

  if (msAteEvento < 0) {
    contador.innerHTML = "O evento já começou!!"
  }
}, 1000);
