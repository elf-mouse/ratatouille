# 02 Choose the best input type

**TL;DR**

- Choose the most appropriate input type for your data to simplify input.
- Offer suggestions as the user types with the datalist element.

### HTML5 input types

Input `type` | Typical Keyboard
------------ | ----------------
`url`<br>For entering a URL. It must start with a valid URI scheme, for example `http://`, `ftp://` or `mailto:`. | ![url](imgs/url-ios.png)
`tel`<br>For entering phone numbers. It does **not** enforce a particular syntax for validation, so if you want to ensure a particular format, you can use pattern. | ![tel](imgs/tel-android.png)
`email`<br>For entering email addresses, and hints that the @ should be shown on the keyboard by default. You can add the multiple attribute if more than one email address will be provided. | ![email](imgs/email-android.png)
`search`<br>A text input field styled in a way that is consistent with the platform's search field. | ![search](imgs/plain-ios.png)
`number`<br>For numeric input, can be any rational integer or float value. | ![number](imgs/number-android.png)
`range`<br>For number input, but unlike the number input type, the value is less important. It is displayed to the user as a slider control. | ![range](imgs/range-ios.png)
`datetime-local`<br>For entering a date and time value where the time zone provided is the local time zone. | ![datetime-local](imgs/datetime-local-ios.png)
`date`<br>For entering a date (only) with no time zone provided. | ![date](imgs/date-android.png)
`time`<br>For entering a time (only) with no time zone provided. | ![time](imgs/time-ios.png)
`week`<br>For entering a week (only) with no time zone provided. | ![week](imgs/week-android.png)
`month`<br>For entering a month (only) with no time zone provided. | ![month](imgs/month-ios.png)
`color`<br>For picking a color. | ![color](imgs/color-android.png)

### Offer suggestions during input with datalist

    <label for="frmFavChocolate">Favorite Type of Chocolate</label>
    <input type="text" name="fav-choc" id="frmFavChocolate" list="chocType">
    <datalist id="chocType">
      <option value="white">
      <option value="milk">
      <option value="dark">
    </datalist>

[sample](samples/order.html)
