function onEdit(e){
NewOrderEmail(e);
}


function NewOrderEmail(e){
  //setting up your team emails
  let taletoon = "asktaletoon@gmail.com";
  let adel = "adelelzemity@gmail.com";
  let yasser = "ay47757@gmail.com";
  let eshiba = "mohamedeshiba08@gmail.com";
  
  //setting up msg defult body and header
  let msg = "NEW ORDER WITH ID #";
  let body = "\n\n Check out the new order details from here:\n\nhttps://bit.ly/3dWy2zX";
  
  //selecting the active sheet
  var activeSheet = e.source.getActiveSheet();
  
    //selecting the sheet by name
  if(activeSheet.getName() == 'New Order'){
    var cell = e.range;
    var col = cell.getColumn();
    
    //selecting the column
    if(col == 16){
      
      //testing cell value
      if(cell.getValue() == 'confirmed'){
       
        //the action done if true
        var orderid = activeSheet.getRange(cell.getRow(),1).getValue();
        var clientname = activeSheet.getRange(cell.getRow(),2).getValue();
        msg = msg+orderid+" FOR "+clientname;
               //sending emails
        MailApp.sendEmail(adel,msg,"Hey Adel,"+body);
        MailApp.sendEmail(eshiba,msg,"Hey Eshiba,"+body);
        MailApp.sendEmail(yasser,msg,"Hey Yasser,"+body);
      
      }
    }
  }
}