/* Funciones para la tabla MOTORBIKE
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionMotorbikes() {
    $.ajax({
        url: "http://129.151.120.50:8080/api/Motorbike/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaMotorbikes(items);
	//let $select = $("#select-motorbike");
            //$.each(items, function (id, name) {
                //$select.append('<option value='+name.id+'>'+name.name+'</option>');
                //console.log("select "+name.id);
            //});		
        }
    })
}
function pintarRespuestaMotorbikes(items) {

    let myTable = "<table>";
    myTable += "<th> NOMBRE MOTO </th>";
    myTable += "<th> MARCA </th>";
    myTable += "<th> AÑO </th>";
	myTable += "<th> DESCRIPCIÓN </th>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].year+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
	myTable += "<td> <button onclick='editarInformacionMotorbikes(" + items[i].id+ ")'> Actualizar</button>";    
        myTable += "<td> <button onclick='borrarElementoMotorbikes(" + items[i].id+ ")'> Eliminar</button>";
        myTable += "</tr>";
		
    }

    myTable += "</table>";
    $("#resultado1").html(myTable);
	
}//FIN GET


//Funcion METODO POST
function guardarInformacionMotorbikes() {
    let myData1 = {
        name:$("#Mname").val(),
        brand:$("#Mbrand").val(),
        year:$("#Myear").val(),
        description:$("#Mdescription").val(),
    };
    console.log(myData1);
	
	if (myData1.name=='' || myData1.brand=='' || myData1.year=='' || myData1.description=='' ){
			alert("Todos los campos de la Moto son obligatorios");
		}
	else{
    let dataToSend = JSON.stringify(myData1);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        data: JSON.stringify(myData1),

        url: "http://129.151.120.50:8080/api/Motorbike/save",
        
        success: function (items) {
            console.log(items);
            
            $("#resultado1").empty();
            $("#Mname").val("");
            $("#MBrand").val("");
            $("#Myear").val("");
	    $("#Mdescription").val("");
            traerInformacionMotorbikes();
            alert("Se registró moto con éxito");
        
	}
    }) };

}//FIN POST

//Funcion METODO PUT
function editarInformacionMotorbikes(idElemento) {
    let myData1 = {
        id:idElemento,
        name:$("#Mname").val(),
        brand:$("#Mbrand").val(),
        year:$("#Myear").val(),
        description:$("#Mdescription").val(),

    };
    console.log(myData1);
    let dataToSend = JSON.stringify(myData1);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Motorbike/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado1").empty();
            $("#Mname").val("");
            $("#MBrand").val("");
            $("#Myear").val("");
	    $("#Mdescription").val("");
            traerInformacionMotorbikes();
            alert("Se ha actualizado exitosamente")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoMotorbikes(idElemento) {
    let myData1 = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData1);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Motorbike/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function (items) {
            $("#resultado1").empty();
            traerInformacionMotorbikes();
            alert("Se elimino moto correctamente")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA MOTORBIKE*/

/* Funciones para la tabla CATEGORIA
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionCategorias() {
    $.ajax({
        url: "http://129.151.120.50:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaCategorias(items);
	//let $select = $("#select-category");
            //$.each(items, function (id, name) {
                //$select.append('<option value='+name.id+'>'+name.name+'</option>');
                //console.log("select "+name.id);
            //}); 	
        }
    })
}
function pintarRespuestaCategorias(items) {

    let myTable = "<table>";
    myTable += "<th> NOMBRE CATEGORIA </th>";
    myTable += "<th> DESCRIPCIÓN </th>";
    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
	myTable += "<td> <button onclick='editarInformacionCategorias(" + items[i].id+ ")'> Actualizar</button>";    
        myTable += "<td> <button onclick='borrarElementoCategorias(" + items[i].id + ")'> Eliminar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultado2").html(myTable);
}//FIN GET


//Funcion METODO POST
function guardarInformacionCategorias() {
    let myData2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val(),
    };
	
	if (myData2.name=='' || myData2.description=='' ){
			alert("Todos los campos de la Categoría son obligatorios");
		}
	else{
	
    let dataToSend = JSON.stringify(myData2);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Category/save",
        type: "POST",
        data: JSON.stringify(myData2),
		contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        success: function (items) {
            $("#resultado2").empty();
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("Se registró Categoria con éxito")
        }
    })};

}//FIN POST

//Funcion METODO PUT
function editarInformacionCategorias(idElemento	) {
    let myData2 = {
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val(),

    };
    console.log(myData2);
    let dataToSend = JSON.stringify(myData2);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Category/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado2").empty();
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("Se actualizó Categoria exitosamente")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoCategorias(idElemento) {
    let myData2 = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData2);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Category/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado2").empty();
            traerInformacionCategorias();
            alert("Se eliminó Categoría correctamente")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA CATEGORIA*/


/* Funciones para la tabla CLIENTE
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionClientes() {
    $.ajax({
        url: "http://129.151.120.50:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaClientes(items);
	    //let $select = $("#select-client");
            //$.each(items, function (id, name) {
                //$select.append('<option value='+name.idClient+'>'+name.name+'</option>');
                //console.log("select "+name.idClient);
            //});	
        }
    })
}
function pintarRespuestaClientes(items) {

    let myTable = "<table>";
    myTable += "<th> EMAIL</th>";
    myTable += "<th> CONTRASEÑA </th>";
    myTable += "<th> NOMBRE </th>";
    myTable += "<th> EDAD </th>";
    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].password + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
	myTable += "<td> <button onclick='editarInformacionClientes(" + items[i].idClient+ ")'> Actualizar</button>";    
        myTable += "<td> <button onclick='borrarElementoClientes(" + items[i].idClient + ")'> Eliminar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultado3").html(myTable);
}//FIN GET


//Funcion METODO POST
function guardarInformacionClientes() {
    let myData3 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
    };
	
	if (myData3.email=='' || myData3.password=='' || myData3.name=='' || myData3.age==''){
			alert("Todos los campos del Cliente son obligatorios");
		}
	else{
	
    let dataToSend = JSON.stringify(myData3);
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
		datatype: "JSON",
        data: JSON.stringify(myData3),
        url: "http://129.151.120.50:8080/api/Client/save",
        success: function (items) {
            $("#resultado3").empty();
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            traerInformacionClientes();
            console.log(items);
            console.log("Se guardo correctamente");
            alert("Cliente creado satisfactoriamente")
        }
    })};

}//FIN POST

//Funcion METODO PUT
function editarInformacionClientes(idElemento) {
    let myData3 = {
        idClient:idElemento,
	email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),

    };
    console.log(myData3);
    let dataToSend = JSON.stringify(myData3);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado3").empty();
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            traerInformacionClientes();
            alert("El cliente se ha Actualizado")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoClientes(idElemento) {
    let myData3 = {
        idClient: idElemento
    };
    let dataToSend = JSON.stringify(myData3);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Client/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado3").empty();
            traerInformacionClientes();
            alert("Se eliminó el cliente")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA CLIENTE*/

/* Funciones para la tabla MENSAJES
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionMensajes() {
    $.ajax({
        url: "http://129.151.120.50:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaMensajes(items);
        }
    })
}
function pintarRespuestaMensajes(items) {

    let myTable = "<table>";
    myTable += "<th> MENSAJE</th>";
    myTable += "<th> MOTO</th>";	
    myTable += "<th> CLIENTE</th>";
    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].messageText + "</td>";
	//myTable += "<td>" + items[i].motorbike.name + "</td>";
	//myTable += "<td>" + items[i].client.name + "</td>";    
	myTable += "<td> <button onclick='editarInformacionMensajes(" + items[i].idMessage+ ")'> Actualizar</button>";    
        myTable += "<td> <button onclick='borrarElementoMensajes(" + items[i].idMessage + ")'> Eliminar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultado4").html(myTable);
}//FIN GET


//Funcion METODO POST
function guardarInformacionMensajes() {
    let myData4 = {
        messageText:$("#MmessageText").val(),
	//motorbike: {id: +$("#select-motorbike").val()},    
	//client: {idClient: +$("#select-client").val()},
    };
	
	if (myData4.messageText==''){
			alert("Por favor ingrese un mensaje");
		}
	else{
    let dataToSend = JSON.stringify(myData4);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Message/save",
        type: "POST",
		contentType: "application/json; charset=utf-8",
        data: JSON.stringify(myData4),
        datatype: "JSON",
        success: function (items) {
            $("#resultado4").empty();
            $("#MmessageText").val("");
	    //$("#select-motorbike").val("");
	    //$("#select-client").val("");	
            traerInformacionMensajes();
            alert("Mensaje creado satisfactoriamente")
        }
    })};

}//FIN POST

//Funcion METODO PUT
function editarInformacionMensajes(idElemento) {
    let myData4 = {
	idMessage:idElemento,    
        messageText:$("#MmessageText").val(),
	//motorbike: {id: +$("#select-motorbike").val()},    
	//client: {idClient: +$("#select-client").val()},    
	    
        
    };
    console.log(myData4);
    let dataToSend = JSON.stringify(myData4);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado4").empty();
	    $("#MmessageText").val("");
	    //$("#select-motorbike").val("");
	    //$("#select-client").val("");	
            traerInformacionMensajes();
            alert("El Mensaje se ha Actualizado")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoMensajes(idElemento) {
    let myData4 = {
        idMessage: idElemento
    };
    let dataToSend = JSON.stringify(myData4);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Message/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado4").empty();
            traerInformacionMensajes();
            alert("Se eliminó el Mensaje")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA MENSAJES*/

/* Funciones para la tabla RESERVACIONES
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionReservaciones() {
    $.ajax({
        url: "http://129.151.120.50:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaReservaciones(items);
        }
    })
}
function pintarRespuestaReservaciones(items) {

    let myTable = "<table>";
    myTable += "<th> FECHA INICIO </th>";
    myTable += "<th> FECHA DEVOLUCIÓN </th>";
    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].startDate + "</td>";
        myTable += "<td>" + items[i].devolutionDate + "</td>";
	//myTable += "<td>" + items[i].motorbike.name + "</td>";
	//myTable += "<td>" + items[i].client.name + "</td>";     
	myTable += "<td> <button onclick='editarInformacionReservaciones(" + items[i].idReservation + ")'> Actualizar</button>";    
        myTable += "<td> <button onclick='borrarElementoReservaciones(" + items[i].idReservation + ")'> Eliminar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultado5").html(myTable);
}//FIN GET


//Funcion METODO POST
function guardarInformacionReservaciones() {
    let myData5 = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
    };
	
	if (myData5.startDate=='' || myData5.devolutionDate==''){
			alert("Ambas fechas de la Reservación son obligatorias");
		}
	else{
	
    let dataToSend = JSON.stringify(myData5);
	
    $.ajax({
        url: "http://129.151.120.50:8080/api/Reservation/save",
        type: "POST",
        data: JSON.stringify(myData5),
		contentType: "application/json; charset=utf-8",
        datatype: "JSON",
        success: function (items) {
            $("#resultado5").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            traerInformacionReservaciones();
            alert("La Reservación se creó satisfactoriamente")
        }
    })};

}//FIN POST

//Funcion METODO PUT
function editarInformacionReservaciones(idElemento) {
    let myData5 = {
        idReservation:idElemento,
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        
    };
    console.log(myData5);
    let dataToSend = JSON.stringify(myData5);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado5").empty();
	    $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            traerInformacionReservaciones();
            alert("La Reservación se ha Actualizado")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoReservaciones(idElemento) {
    let myData5 = {
        idReservation: idElemento
    };
    let dataToSend = JSON.stringify(myData5);
    $.ajax({
        url: "http://129.151.120.50:8080/api/Reservation/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado5").empty();
            traerInformacionReservaciones();
            alert("Se eliminó la Reservación")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA RESERVACIONES*/
