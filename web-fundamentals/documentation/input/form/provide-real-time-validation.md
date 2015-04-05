# 04 Provide real-time validation

**TL;DR**

- Leverage the browser's built-in validation attributes like `pattern`, `required`, `min`, `max`, etc.
- Use JavaScript and the Constraints Validation API for more complex validation requirements.
- Show validation errors in real time, and if the user tries to submit an invalid form, show all fields they need to fix.

### Use these attributes to validate input

The `pattern` attribute

    <input type="text" pattern="^\d{5,6}(?:[-\s]\d{4})?$" ...>

**Common regular expression patterns**

Description | Regular expression
----------- | ------------------
Postal address | [a-zA-Z\d\s\-\,\#\.\+]+
Zip Code (US) | ^\d{5,6}(?:[-\s]\d{4})?$
IP Address (IPv4) | ^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$
IP Address (IPv6) | ^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$
IP Address (both) | ^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$
Credit Card Number | ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$
Social Security Number | ^\d{3}-\d{2}-\d{4}$
North American Phone Number | ^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$

The `required` attribute

    <input type="text" required pattern="^\d{5,6}(?:[-\s]\d{4})?$" ...>

The `min`, `max` and `step` attributes

    <input type="number" min="1" max="13" step="0.5" ...>

The `maxlength` attribute

    <input type="text" id="83filename" maxlength="12" ...>

The `novalidate` attribute

    <form role="form" novalidate>
      <label for="inpEmail">Email address</label>
      <input type="email" ...>
    </form>

**Remember**

- Even with client-side input validation, it is always important to validate data on the server to ensure consistency and security in your data.

### Use JavaScript for more complex real-time validation

API | Description
--- | -----------
`setCustomValidity()` | Sets a custom validation message and the `customError` property of the `ValidityState` object to `true`.
`validationMessage` | Returns a string with the reason the input failed the validation test.
`checkValidity()` | Returns `true` if the element satisfies all of its constraints, and `false` otherwise. Deciding how the page responds when the check returns `false` is left up to the developer.
`reportValidity()` | Returns `true` if the element satisfies all of its constraints, and `false` otherwise. When the page responds `false`, constraint problems are reported to the user.
`validity` | Returns a `ValidityState` object representing the validity states of the element.

### Set custom validation messages

    if (input.value != primaryEmail) {
      // the provided value doesn't match the primary email address
      input.setCustomValidity('The two email addresses must match.');
      console.log("E-mail addresses do not match", primaryEmail, input.value);
    } else {
      // input is valid -- reset the error message
      input.setCustomValidity('');
    }

### Prevent form submission on invalid forms

    form.addEventListener("submit", function(evt) {
      if (form.checkValidity() === false) {
        evt.preventDefault();
        alert("Form is invalid - submission prevented!");
        return false;
      } else {
        // To prevent data from being sent, we've prevented submission
        // here, but normally this code block would not exist.
        evt.preventDefault();
        alert("Form is valid - submission prevented to protect privacy.");
        return false;
      }
    });

### Show feedback in real-time

Pseudo-class | Use
------------ | ---
`:valid` | Explicitly sets the style for an input to be used when the value meets all of the validation requirements.
`:invalid` | Explicitly sets the style for an input to be used when the value does not meet all of the validation requirements.
`:required` | Explicitly sets the style for an input element that has the required attribute set.
`:optional` | Explicitly sets the style for an input element that does not have the required attribute set.
`:in-range` | Explicitly sets the style for a number input element where the value is in range.
`:out-of-range` | Explicitly sets the style for a number input element where the value is out of range.

CSS:

    input.dirty:not(:focus):invalid {
      background-color: #FFD9D9;
    }
    input.dirty:not(:focus):valid {
      background-color: #D9FFD9;
    }

JS:

    var inputs = document.getElementsByTagName("input");
    var inputs_len = inputs.length;
    var addDirtyClass = function(evt) {
      sampleCompleted("Forms-order-dirty");
      evt.srcElement.classList.toggle("dirty", true);
    };
    for (var i = 0; i < inputs_len; i++) {
      var input = inputs[i];
      input.addEventListener("blur", addDirtyClass);
      input.addEventListener("invalid", addDirtyClass);
      input.addEventListener("valid", addDirtyClass);
    }

**Important**

- You should show the user all of the issues on the form at once, rather than showing them one at a time.

[sample](samples/order.html)
