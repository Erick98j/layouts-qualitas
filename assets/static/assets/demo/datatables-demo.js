// Call the dataTables jQuery plugin
$(document).ready(function () {
    $('#dataTable').DataTable();
});

$(document).ready(function () {

    $('#dataTableActivity').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        "order": [[0, 'desc']],
        "lengthMenu": [[10, 25, 50, -1], [30, 50, 80, "Todas"]],
        "dom": "<'row'<'col-md-4 mt-4 mb-4'l><'col-md-8 mt-4 mb-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>"
    });
    view_quick_look();
    
});

function view_quick_look() {
    let rows = document.querySelectorAll(".tr_policy")

    restar()

    rows.forEach(r => {
        r.addEventListener("click", () => {
            if (r.classList.contains("activeQuick")) {
                r.classList.remove("activeQuick")
                close_quicks()
                restar();
            } else {
                restar()
                close_quicks()
                r.classList.add("activeQuick")
                r.insertAdjacentHTML('afterend', `<tr class="animated--fade-in">
                <td colspan="10" class="bg-light quicklook">
                    <div class="row p-2">
                        <div class="col-4" style="padding-left: 70px;">
                            <h6><strong>Asegurado</strong></h6>
                            <ul class="list-group" style="list-style-type: none;">
                                <li><p><strong>Nombre:</strong> Victor Flores</p></li>
                                <li><p><strong>Telefono 1:</strong> <a href="tel:+5573728477">5573728477</a></p></li>
                                <li><p><strong>Telefono 2:</strong> <a href="tel:+5573728477">5573728477</a></p></li>
                                <li><p><strong>Email:</strong> vicflores@gmail.com</p></li>
                            </ul>
                        </div>
                        <div class="col-4 border-left border-gray" style="padding-left: 20px;">
                            <h6><strong>Póliza</strong> 3190273105</h6>
                            <ul class="list-group" style="list-style-type: none;">
                                <li><p><strong>Estatus:</strong> <span class="badge badge-success badge-pill" style="font-size: 14px;">Activa</span></p></li>
                                <li><p><strong>Vehículo:</strong> TR Kenworth t800</p></li>
                                <li><p><strong>Cobertura:</strong> Amplia</p></li>
                                <li><p><strong>Periodisidad:</strong> Trimestral</p></li>
                                <li><p><strong>Vencimiento:</strong> 29/12/2012</p></li>
                                <li><p><strong>Cantidad total a pagar:</strong> $56,000.00</p></li>
                            </ul>
                        </div>
                        <div class="col-4 border-left border-gray" style="padding-left: 20px;">
                            <h6><strong>Recibo a pagar</strong> 017497915</h6>
                            <ul class="list-group" style="list-style-type: none;">
                                <li><p><strong>Estatus:</strong> <span class="badge badge-warning badge-pill" style="font-size: 14px;">Cobrar</span></p></li>
                                <li><p><strong>Cantidad a pagar:</strong> $18,000.00</p></li>
                                <li><p><strong>Vencimiento:</strong> 11/01/2021</p></li>
                                <li><p><strong>Instrucciones de pago:</strong> <a href="#">https://qualitas.com/asdasdasd/saasdasd</a></p></li>
                            </ul>
                            <a class="btn btn-sm btn-success" target="_blank" href="https://api.whatsapp.com/send?phone=+525534260681&text=Paga+tu+p%C3%B3liza+prro">Enviar whatsapp de cobranza</a>
                        </div>
                    </div>
                </td>
            </tr>`);
            }
        })
    })

}

function close_quicks() {

    const quicks = document.querySelectorAll(".quicklook")

    if (quicks) {
        quicks.forEach(q => {
            q.remove()

        })
    }
}

function restar() {
    let rows = document.querySelectorAll(".tr_policy")

    rows.forEach(r => {
        //r.setAttribute("class", "tr_policy animated--fade-in-up")
        r.classList.remove("activeQuick")
    })
}

