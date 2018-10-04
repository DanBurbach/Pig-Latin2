// NOTE: business logic start
$(document).ready(function() {
  var regex = /^[aeiou]/i;
  var regex2 = /^[qwrtypsdfghjklzxcvbnm]*/i;
  function piglatin(words) {
    words.unshift("");
    for (i = 1; i < words.length; i++) {
      if (regex.test(words[i])) {
        words[i] = words[i].replace(words[i], words[i] + "way");
      } else {
        subarray2 = words[i].split(regex2);
        substring = subarray2[1];
        substring2 = substring.charAt(0);
        subarray3 = words[i].split(substring2, 1);
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
