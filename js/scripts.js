// NOTE: business logic start
$(document).ready(function() {
  var regex = /^[aeiou]/i;
  var regex2 = /^[qwrtpsdfghjklzxcvbnm]*/i;
  var regex3 = /^qu/;
  var regex4 = /^y/;
  function piglatin(words) {
    words.unshift("");
    for (i = 1; i < words.length; i++) {
        if (regex4.test(words[i])) {
          var stringy = words[i].charAt(2);
          var stringy2 = words[i].split(regex4, 2);
          var stringy3 = stringy2[1]
          var stringy4 = words[i].split(stringy, 1);
          words[i] = stringy3 + stringy4 + "ay";
      }
        else if (regex3.test(words[i])) {
          var stringqu = words[i].charAt(2);
          var stringqu2 = words[i].split(regex3, 2);
          var stringqu3 = stringqu2[1]
          var stringqu4 = words[i].split(stringqu, 1);
          words[i] = stringqu3 + stringqu4 + "ay";
          console.log(stringqu);
          console.log(stringqu2);
          console.log(stringqu3);
          console.log(stringqu4);
      } else if (regex.test(words[i])) {
          words[i] = words[i].replace(words[i], words[i] + "way");
      } else {
          var subarray2 = words[i].split(regex2);
          var substring = subarray2[1];
          var substring2 = substring.charAt(0);
          var subarray3 = words[i].split(substring2, 1);
          words[i] = substring + subarray3 + "ay";

          console.log(subarray2);
          console.log(substring);
          console.log(substring2);
          console.log(subarray3);
      }
    }
  };
  /*function piglatin2(words) {
    words.unshift("");
    for (i = 1; i < words.length; i++) {
      if (/[qwrtypsdfghjklzxcvbnm]/i.test(words[i])) {
        subarray = words[i].split(/[qwrtypsdfghjklzxcvbnm]/i);
        console.log(subarray + "working");
      }
    }
  };*/
// NOTE: business logic end
//-----------------------------------------------------
  // NOTE: user-interface logic start
  $("form").submit(function(event) {
    event.preventDefault();
    var array1 = $('#userinput').val();
    var array2 = array1.split(' ');
    piglatin(array2);
    //console.log(array2);
    var array3 = array2.join(" ");

    //console.log(array3);

    $('#translation').text(array3);
  });
});
// NOTE: user-interface logic end
