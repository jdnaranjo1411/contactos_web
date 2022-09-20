let contactos = [
    {
        nombre: 'María Camila Gomez',
        email: 'mcamila@ejemplo.com',
        telefono: '123456'
    },
    {
        nombre: 'Pepe Rodriguez',
        email: 'test@test.com',
        telefono: '3216564'
    }
];

let operacion = ''; //registrar|modificar|eliminar
let indexRegistroSeleccionado = null;

function mostrarContactos() {
    const tbody = document
        .getElementById('contactosTable')
        .getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    for (let index in contactos) {
        const contacto = contactos[index];
        const id = parseInt(index) + 1;
        let fila = '<tr>';
        fila += '   <td>' + id + '</td>';
        fila += '   <td>' + contacto.nombre + '</td>';
        fila += '   <td>' + contacto.email + '</td>';
        fila += '   <td>' + contacto.telefono + '</td>';
        fila += '   <td><button class="btnModificar" onclick="onClickModificar(' + id + ')">M</button></td>';
        fila += '   <td><button class="btnElimiar" onclick="onClickEliminar(' + id + ')">E</button></td>';
        fila += '</tr>';
        tbody.innerHTML += fila;
    }
}
mostrarContactos();

function cerrarModal() {
    document.getElementById('formularioModal')
        .classList.add('ocularModal');
    const formulario = document.forms['formContacto'];
    formulario.reset();
}

document.getElementById('cerrarModalBtn').addEventListener('click', () => {
    cerrarModal();
});

document.getElementById('registrarBtn').addEventListener('click', () => {
    document.getElementById('formularioModal')
        .classList.remove('ocularModal');
    document.getElementById('tituloForm').innerText = 'Registrar';
    operacion = 'registrar';
});

document.getElementById('fomularioContacto').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formulario = document.forms['formContacto'];
    const contacto = {
        nombre: formulario['nombre'].value,
        email: formulario['email'].value,
        telefono: formulario['telefono'].value
    };
    if (operacion == 'registrar') {
        contactos.push(contacto);
    } else {
        contactos[indexRegistroSeleccionado] = contacto;
    }
    cerrarModal();
    mostrarContactos();
});

function onClickModificar(id) {
    document.getElementById('formularioModal')
        .classList.remove('ocularModal');
    document.getElementById('tituloForm').innerText = 'Modificar';
    indexRegistroSeleccionado = id - 1;
    const contacto = contactos[indexRegistroSeleccionado];
    const formulario = document.forms['formContacto'];
    formulario['nombre'].value = contacto.nombre;
    formulario['email'].value = contacto.email;
    formulario['telefono'].value = contacto.telefono;
    operacion = 'modificar';
}

function onClickEliminar(id) {
    document.getElementById('msgModal').classList.remove('ocularModal');
    indexRegistroSeleccionado = id - 1;
}

function cerrarMsgModal() {
    document.getElementById('msgModal').classList.add('ocularModal');
    indexRegistroSeleccionado = null;
}

function onClickConfirmarEliminar() {
    contactos.splice(indexRegistroSeleccionado, 1);
    cerrarMsgModal();
    mostrarContactos();
}



