function calc() {
  var type_supplies = document.getElementById("type_supplies");
  var count = document.getElementById("count").value;
  if(count==""){alert("Вы не указали количество");}
  else if(count<0){alert("Количество не может быть отрицательным");}
  else{
    var price = 0;
    price += parseInt(type_supplies.options[type_supplies.selectedIndex].value);
    price = parseInt(count) * price;
    document.getElementById('result').innerHTML = "Стоимость равна: "+ price +" р.";
  }
}
