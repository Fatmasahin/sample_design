jQuery('input:radio[name=deliveryAdress]').click(function () {
    jQuery('input:radio[name=deliveryAdress]').parents(".card").removeClass('selectedCard');
    jQuery(this).parents(".card").addClass('selectedCard');
    jQuery('input:radio[name=deliveryAdress]').parents(".card").find("button").removeClass('selectedButton');
    jQuery(this).parents(".card").find("button").addClass('selectedButton');
    jQuery('input:radio[name=deliveryAdress]').parents(".card").find("button").text('Bu adresi seçiniz');
    jQuery(this).parents(".card").find("button").text('Bu adresi seçtiniz');
});

jQuery('input:radio[name=invoiceAddress]').click(function () {
    jQuery('input:radio[name=invoiceAddress]').parents(".card").removeClass('selectedCard');
    jQuery(this).parents(".card").addClass('selectedCard');
    jQuery('input:radio[name=invoiceAddress]').parents(".card").find("button").removeClass('selectedButton');
    jQuery(this).parents(".card").find("button").addClass('selectedButton');
    jQuery('input:radio[name=invoiceAddress]').parents(".card").find("button").text('Fatura adresi olarak seçiniz');
    jQuery(this).parents(".card").find("button").text('Fatura adresi olarak seçtiniz');
});

jQuery('input:radio[name=storeInvoiceAddress]').click(function () {
    jQuery('input:radio[name=storeInvoiceAddress]').parents(".card").removeClass('selectedCard');
    jQuery(this).parents(".card").addClass('selectedCard');
    jQuery('input:radio[name=storeInvoiceAddress]').parents(".card").find("button").removeClass('selectedButton');
    jQuery(this).parents(".card").find("button").addClass('selectedButton');
    jQuery('input:radio[name=storeInvoiceAddress]').parents(".card").find("button").text('Fatura adresi olarak seçiniz');
    jQuery(this).parents(".card").find("button").text('Fatura adresi olarak seçtiniz');
});

jQuery('input:radio[name=storeDeliveryAdress]').click(function () {
    jQuery('input:radio[name=storeDeliveryAdress]').parents(".card").removeClass('selectedCard');
    jQuery(this).parents(".card").addClass('selectedCard');
    jQuery('input:radio[name=storeDeliveryAdress]').parents(".card").find("button").removeClass('selectedButton');
    jQuery(this).parents(".card").find("button").addClass('selectedButton');
    jQuery('input:radio[name=storeDeliveryAdress]').parents(".card").find("button").text('Bu mağazayı seçiniz');
    jQuery(this).parents(".card").find("button").text('Bu mağazayı seçtiniz');
});
jQuery(document).on('click','input:radio[name=chooseStoreModal]',function () {
    jQuery('input:radio[name=chooseStoreModal]').parents(".card").removeClass('selectedCard');
    jQuery(this).parents(".card").addClass('selectedCard');
});

jQuery(document).on('click','.btn',function () {
   var radioButton= jQuery(this).parents(".card").find('input:radio');
   if (radioButton.length>0) {
       jQuery(radioButton).click();
   }

});