function save_formulario() {
  const url = 'https://mochileando.pythonanywhere.com/contacto'
  const mje = {
    nombre: document.getElementById('fname').value,
    apellido: document.getElementById('fapell').value,
    mail: document.getElementById('fmail').value,
    asunto: document.getElementById('fasunto').value,
    mensaje: document.getElementById('fmsg').value,
    }
  
  const requestOptions = {
    body: JSON.stringify(mje),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
  };
  
    fetch(url, requestOptions)
    .then(alert('Mensaje enviado!'))
    .catch((err) => {
      console.error(err);
      alert("Error al enviar.");
    });
  }
  
  const { createApp } = Vue;
  createApp({
    data() {
      return {
        formularios: [],
        url: 'https://mochileando.pythonanywhere.com/contacto',
        error: false,
        cargando: true,
        id: 0,
        nombre: "",
        apellido: "",
        mail: "",
        asunto: "",
        mensaje: "",
      };
    },
    methods: {
      fetchData(url) {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.formularios = data;
            this.cargando = false;
          })
          .catch((err) => {
            console.error(err);
              this.error = true;
          });
      },
    },
      created() {
        this.fetchData(this.url);
      },
    
    }) .mount("#app");
  