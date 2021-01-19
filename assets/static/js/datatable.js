$(document).ready(function () {
    $('#dataTable').DataTable();
});

$(document).ready(function () {
    $('#dataTableActivity').DataTable({
        "destroy": true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        "order": [[0, 'desc']],
        "lengthMenu": [[10, 25, 50, -1], [30, 50, 80, "Todas"]],
        "dom": "<'row'<'col-md-4 mt-4 mb-4'l><'col-md-8 mt-4 mb-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>"
    });
});

function close_quicks() {
    const quicks = document.querySelectorAll(".quicklook")

    if (quicks) {
        quicks.forEach(q => {
            q.remove()

        })
    }
}

function restar_actives() {
    let rows = document.querySelectorAll(".tr_policy")

    rows.forEach(r => {
        r.classList.remove("activeQuick")
    })
}

function show_extended_view(numero, telefono1, telefono2, email, cobertura, periodisidad, vencimiento_de_poliza, importe_total, numero_de_recibo, instrucciones, whatsapp) {
    const row = document.getElementById(numero)

    if (row.classList.contains("activeQuick")) {
        row.classList.remove("activeQuick")
        $("#" + numero + "extendedview").remove()
        close_quicks()
        restar_actives();
        row.classList.remove("activeQuick")
    } else {
        restar_actives()
        close_quicks()
        row.classList.add("activeQuick")
        row.insertAdjacentHTML('afterend',
            `<tr id="${numero}extendedview" class="animated--fade-in">
    <td colspan="10" class="bg-light quicklook">
        <div class="row p-2">
            <div class="col-4" style="padding-left: 70px;">
                <h6><strong>Asegurado</strong></h6>
                <ul class="list-group" style="list-style-type: none;">
                    <li><p><strong>Nombre:</strong> ${row.querySelectorAll("td")[2].innerText}</p></li>
                    <li><p><strong>Telefono 1:</strong> <a href="tel:+${telefono1}">${telefono1}</a></p></li>
                    <li><p><strong>Telefono 2:</strong> <a href="tel:+${telefono2}">${telefono2}</a></p></li>
                    <li><p><strong>Email:</strong> ${email}</p></li>
                </ul>
            </div>
            <div class="col-4 border-left border-gray" style="padding-left: 20px;">
                <h6><strong>Póliza</strong> <span style="color: rgb(180, 180, 180);">${numero}</span></h6>
                <ul class="list-group" style="list-style-type: none;">
                    <li><p><strong>Estatus:</strong> ${row.querySelectorAll("td")[5].innerText == "Activa"
                ? `<span class="badge badge-success badge-pill" style="font-size: 14px;">Activa</span></p></li>`
                : row.querySelectorAll("td")[5].innerText == "Finalizada" ? `<span class="badge badge-warning badge-pill" style="font-size: 14px;">Finalizada</span></p></li>` 
                : row.querySelectorAll("td")[5].innerText == "Cancelada" ? `<span class="badge badge-warning badge-pill" style="font-size: 14px;">Cancelada</span></p></li>`
                : "Error" }
                    <li><p><strong>Vehículo:</strong> ${row.querySelectorAll("td")[3].innerText}</p></li>
                    <li><p><strong>Cobertura:</strong> ${cobertura}</p></li>
                    <li><p><strong>Periodisidad:</strong> ${periodisidad}</p></li>
                    <li><p><strong>Vencimiento:</strong> ${vencimiento_de_poliza}</p></li>
                    <li><p><strong>Cantidad total a pagar:</strong> ${importe_total}</p></li>
                </ul>
            </div>
            <div class="col-4 border-left border-gray" style="padding-left: 20px;">
                <h6><strong>Recibo a pagar</strong> <span style="color: rgb(180, 180, 180);">${numero_de_recibo} </span></h6>
                <ul class="list-group" style="list-style-type: none;">
                    <li><p><strong>Estatus:</strong> ${row.querySelectorAll("td")[8].innerText == "Cobrar"
                ? `<span class="badge badge-warning badge-pill" style="font-size: 14px;">Cobrar</span></p></li>`
                : row.querySelectorAll("td")[8].innerText == "Pendiente"
                    ? `<span class="badge badge-success badge-pill" style="font-size: 14px;">Pendinete</span></p></li>`
                    : row.querySelectorAll("td")[8].innerText == "Vencido"
                        ? `<span class="badge badge-danger badge-pill" style="font-size: 14px;">Cobrar</span></p></li>` : "Error"}
                    <li><p><strong>Cantidad a pagar:</strong> ${row.querySelectorAll("td")[7].innerText}</p></li>
                    <li><p><strong>Vencimiento:</strong> ${row.querySelectorAll("td")[6].innerText}</p></li>
                    <li><p><strong>Instrucciones de pago:</strong> <a href="#">${instrucciones}</a></p></li>
                </ul>
                <a class="btn btn-sm btn-success" target="_blank" href="https://api.whatsapp.com/send?phone=+525534260681&text=${whatsapp}">Enviar whatsapp de cobranza</a>
            </div>
        </div>
    </td>
</tr>`);
    }

}
