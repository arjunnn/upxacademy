const url = 'http://localhost:8080/add';
var givenName = document.querySelector('.form-name').value;
var givenEmail = document.querySelector('.form-email').value;
var givenMobile = document.querySelector('.form-mobile').value;
function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}

post('http://localhost:8080/add',
  {
    name: `${givenName}`,
    email: `${givenEmail}`,
    mobile: `${givenMobile}`
});
function submit() {
  post(url, )
}
