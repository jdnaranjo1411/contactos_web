let contactos=[
    {
     Nombre:'Maria Camila Gomez',
     email:'mcamila@ejemplo.com',
     telefono:'123456'},
     {
        Nombre: 'pepe rodriguez',
        email: 'test@test.com',
        telefono:'123456'
     }
]

function MostrarContactos(){
    const tbody = document
    .getElementById('contactosTable')
    .getElementsByTagName('tbody')[0]
    for(let index in contactos){
        const contacto = contactos[index]
        const id = parseInt(index)+1
        let fila='<tr>'
        fila += '  <td>'+id+'</td>'
        fila += '  <td>'+contacto.Nombre+'</td>'
        fila += '  <td>'+contacto.email+'</td>'
        fila += '  <td>'+contacto.telefono+'</td>'
        fila +='</tr>'
        tbody.innerHTML += fila
    }
}

MostrarContactos()