defmodule QuaWeb.PageController do
  use QuaWeb, :controller

  def policies(conn, _params) do
    conn |>
    assign(:polizas, [%{aseguradora: "Qualitas", numero: "1234567890", nombre: "Victor Manuel Flores", vehiculo: "TR Kenworth T660 Aerocab Aerodyne Sleeper 62 STD", vencimiento: "23/10/2021", estatus: "Activa", vencimiento_de_pago: "11/01/2021", cantidad_de_pago: "$18,000.00", estatus_de_pago: "Cobrar", sincronizacion: "Sincronizada hace un momento", telefono1: "5637837375", telefono2: "6467377763", email: "vic_t800@gmail.com", cobertura: "Amplia", periodisidad: "Trimestral", vencimiento_de_poliza: "12/12/2021", importe_total: "$51,000.00", numero_de_recibo: "111111111", instrucciones: "https://qualitas.com/sdasdassd/sffsdfs", whatsapp: "Pague por favor"},
    %{aseguradora: "Qualitas", numero: "63646373", nombre: "Dilan Vidal Guerrero", vehiculo: "TR Kenworth T800 Aerocab Turbo Max", vencimiento: "20/10/2021", estatus: "Finalizada", vencimiento_de_pago: "11/01/2021", cantidad_de_pago: "$15,000.00", estatus_de_pago: "Vencido", sincronizacion: "Sincronizada hace un momento", telefono1: "5637837375", telefono2: "6467377763", email: "vic_t800@gmail.com", cobertura: "Amplia", periodisidad: "Trimestral", vencimiento_de_poliza: "12/12/2021", importe_total: "$51,000.00", numero_de_recibo: "222222222", instrucciones: "https://qualitas.com/sdasdassd/sffsdfs", whatsapp: "Pague por favor"},
    %{aseguradora: "Qualitas", numero: "0987654321", nombre: "Gustavo Moreno Piña", vehiculo: "TR Kenworth AK47 Galaxy Tab 9 Plus", vencimiento: "10/10/2021", estatus: "Cancelada", vencimiento_de_pago: "11/01/2021", cantidad_de_pago: "$18,000.00", estatus_de_pago: "Pendiente", sincronizacion: "Sincronizada hace una hora", telefono1: "5637837375", telefono2: "6467377763", email: "vic_t800@gmail.com", cobertura: "Amplia", periodisidad: "Trimestral", vencimiento_de_poliza: "12/12/2021", importe_total: "$51,000.00", numero_de_recibo: "333333333", instrucciones: "https://qualitas.com/sdasdassd/sffsdfs", whatsapp: "Pague por favor"}]) |>
    render("policies.html",
      layout: {QuaWeb.LayoutView, "admin.html"})
  end

  def login(conn, _params) do
    render(conn, "login.html",
    layout: {QuaWeb.LayoutView, "user.html"})
  end

  def policy(conn, _params) do
      render(conn, "policy.html",
      layout: {QuaWeb.LayoutView, "admin.html"})
  end
end
