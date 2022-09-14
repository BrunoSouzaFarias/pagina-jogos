function adicionarGames() {
  var campoGamesFavorito = document.getElementById("games").value;
  var elementoGamesFavorito = "<img src" + campoGamesFavorito + ">";
  var elementoListaGames = document.getElementById("listaGames");
  elementoListaGames.innerHTML =
    elementoListaGames.innerHTML + elementoGamesFavorito;
}
