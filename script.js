function  sendMail () {

  $.ajax({
      url: "https://maker.ifttt.com/trigger/les fraises sont mures/with/key/bramSBt0TOf7g36ynbG3vO",
      data: {value1: "super"},
      dataType: "json"
    });


Materialize.toast('Mail envoyé', 4000, 'notif')
}
