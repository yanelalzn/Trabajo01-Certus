$(document).ready(function () {
    const expresiones = {
      usuario: /^[a-zA-Z0-9_]{4,16}$/,
      nombre: /^[A-Za-z\s]{4,50}$/,
      password:
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,50}$/,
      correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      celular: /^[0-9]{9}$/,
    };

      const campos = {
        usuario: false,
        nombre: false,
        password: false,
        secPassword: false,
        correo: false,
        celualr: false,
      };

      const validarCampo = (expresion, input, campo) => {
        if (expresion.test($(input).val())) {
          $(`#${campo}`).addClass("is-valid").removeClass("is-invalid");
          campos[campo] = true;
        } else {
          $(`#${campo}`).addClass("is-invalid").removeClass("is-valid");
          campos[campo] = false;
        }
      };

      const validarContrasena = (input, campo) => {
        let password = $("#password").val();
        if ($(input).val() === password && isNaN($(input).val())) {
          $(`#${campo}`).addClass("is-valid").removeClass("is-invalid");
          campos[campo] = true;
        } else {
          $(`#${campo}`).addClass("is-invalid").removeClass("is-valid");
          campos[campo] = false;
        }

        if(esValido == true){
            alert('Bienvenida');
            formulario.reset();
            window.location.href = "inicio.html";
    
        }
      };

      const validarFormulario = (e) => {
        e.preventDefault();
        const target = e.target;
        const name = $(target).attr("name");
    
        switch (name) {
          case "usuario":
            validarCampo(expresiones.usuario, target, "usuario");
            break;
          case "nombre":
            validarCampo(expresiones.nombre, target, "nombre");
            break;
          case "password":
            validarCampo(expresiones.password, target, "password");
            break;
          case "secPassword":
            validarContrasena(target, "secPassword");
            break;
          case "correo":
            validarCampo(expresiones.correo, target, "correo");
            break;
          case "celular":
            validarCampo(expresiones.celular, target, "celular");
            break;
          case "sexo":
            if ($(target).val() !== "") {
              $("#sexo").addClass("is-valid").removeClass("is-invalid");
            } else {
              $("#sexo").addClass("is-invalid").removeClass("is-valid");
            }
            break;
        }
      };
    
      $("#formulario input").on("blur", validarFormulario);
      $("#formulario textarea").on("blur", validarFormulario);
      $("#formulario select").on("blur", validarFormulario);
      $('#formulario input[type="checkbox"]').on("change", validarFormulario);
    });
    
   