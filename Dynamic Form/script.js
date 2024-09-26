function formSubmit(event) {
  event.preventDefault();

  const input1 = document.querySelector(".input1");
  const inp_1_span = document.querySelector(".inp_1_span");

  const input2 = document.querySelector(".input2");
  const inp_2_span = document.querySelector(".inp_2_span");

  const input3 = document.querySelector(".input3");
  const inp_3_span = document.querySelector(".inp_3_span");

  // Password
  if (input1.value.length < 4) {
    inp_1_span.innerHTML = "Name Less Than 4";
    inp_1_span.style.color = "red";
  } else {
    inp_1_span.innerHTML = "Good";
    inp_1_span.style.color = "green";
  }

  // Create Password
  if (input2.value.length < 5) {
    inp_2_span.innerHTML = "normal";
    inp_2_span.style.color = "red";
  } else if (input2.value.length < 6) {
    inp_2_span.innerHTML = "medium";
    inp_2_span.style.color = "orange";
  } else if (input2.value.length > 9) {
    inp_2_span.innerHTML = "good";
    inp_2_span.style.color = "green";
  }

  // Repeat Password validtion
  if (input2.value === "") {
    inp_3_span.innerHTML = "Password Not Matched";
  } else if (input2.value === input3.value) {
    inp_3_span.innerHTML = "Password Matched";
    inp_3_span.style.color = "green";
  } else {
    inp_3_span.innerHTML = "Password Not Matched";
    inp_3_span.style.color = "red";
  }
}
