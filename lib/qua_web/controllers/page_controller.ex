defmodule QuaWeb.PageController do
  use QuaWeb, :controller

  def policies(conn, _params) do
    render(conn, "policies.html",
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
