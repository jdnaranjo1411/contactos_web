let contactos=[
    {
     nombre:'Maria Camila Gomez',
     email:'mcamila@ejemplo.com',
     telefono:'123456'},
     {
        nombre: 'pepe rodriguez',
        email: 'test@test.com',
        telefono:'123456'
     }
]

let operacion = ''
let indexRegistroSeleccionado = null

function mostrarContactos(){
    const tbody = document
    .getElementById('contactosTable')
    .getElementsByTagName('tbody')[0]
    tbody.innerHTML = ''
    for(let index in contactos){
        const contacto = contactos[index]
        const id = parseInt(index)+1
        let fila='<tr>'
        fila += '  <td>'+id+'</td>'
        fila += '  <td>'+contacto.nombre+'</td>'
        fila += '  <td>'+contacto.email+'</td>'
        fila += '  <td>'+contacto.telefono+'</td>'
        fila += '  <td><button class="btnModificar" onclick="onClickModificar('+id+')">M</button></td>'
        fila += '  <td><button class="btnEliminar">E</button></td>'
        fila +='</tr>'
        tbody.innerHTML += fila
    }
}
mostrarContactos()

function cerrarModal(){
    document.getElementById('formularioModal')
    .classList.add('ocultarModal')
    const formulario = document.forms['formContacto']
    formulario.reset()
}

document.getElementById('cerrarModalBtn').addEventListener('click', () =>{
    document.getElementById('formularioModal').classList.add('ocultarModal')
})

document.getElementById('registrarBtn').addEventListener('click',() =>{
    document.getElementById('formularioModal')
    .classList.remove('ocultarModal')
    document.getElementById('tituloForm').innerText = "Registrar"
    operacion = 'Registrar'
})

document.getElementById('formularioContacto').addEventListener('submit',(ev)=>{
    ev.preventDefault()
    //const nombre = document.getElementById('nombre').value
    const contacto = {
        nombre: document.forms['formContacto']['nombre'].value,
        email: document.forms['formContacto']['email'].value,
        telefono: document.forms['formContacto']['telefono'].value,
    }
    if(operacion =='Registrar'){
    contactos.push(contacto)
    }else{
        contactos[indexRegistroSeleccionado] = contacto
    }
    cerrarModal()
    mostrarContactos()
})

function onClickModificar(id){
    document.getElementById('formularioModal')
    .classList.remove('ocultarModal')
    document.getElementById('tituloForm').innerText = "Modificar"
    indexRegistroSeleccionado = id-1
    const contacto =  contactos[indexRegistroSeleccionado]
    const formulario = document.forms['formContacto']
    formulario['nombre'].value = contacto.nombre;
    formulario['email'].value = contacto.email;
    formulario['telefono'].value = contacto.telefono;
    operacion = 'Modificar'
}
